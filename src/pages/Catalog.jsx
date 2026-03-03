import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import { ChevronRight, Zap, Beaker, Layers, Settings } from 'lucide-react';

const Catalog = () => {
    const { t, i18n } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('All');
    const currentLang = i18n.language;

    const categories = [
        { id: 'All', label: t('catalog.viewAll'), icon: Zap },
        { id: 'Chemistry', label: t('categories.Chemistry'), icon: Beaker },
        { id: 'Metals', label: t('categories.Metals'), icon: Layers },
        { id: 'Equipment', label: t('categories.Equipment'), icon: Settings }
    ];

    const getIcon = (catId) => {
        switch (catId) {
            case 'Chemistry': return <Beaker size={64} strokeWidth={1} />;
            case 'Metals': return <Layers size={64} strokeWidth={1} />;
            case 'Equipment': return <Settings size={64} strokeWidth={1} />;
            default: return <Zap size={64} strokeWidth={1} />;
        }
    };

    const getFilteredItems = () => {
        if (activeCategory === 'All') {
            const seen = new Set();
            return products.filter(p => {
                if (!seen.has(p.category)) {
                    seen.add(p.category);
                    return true;
                }
                return false;
            });
        }
        return products.filter(p => p.category === activeCategory).slice(0, 1);
    };

    const filteredProducts = getFilteredItems();

    return (
        <div className="flex flex-col bg-white" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
            <div className="container flex flex-col items-center">
                <header style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 0 80px 0' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--primary)', marginBottom: '24px' }}>
                        Premium Inventory
                    </span>
                    <h1 className="hero-text text-black" style={{ maxWidth: '850px', fontSize: '32px' }}>
                        {t('catalog.subtitle')}
                    </h1>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '16px',
                        justifyContent: 'center',
                        marginTop: '40px',
                        background: '#f8fafc',
                        padding: '12px 32px',
                        borderRadius: '980px',
                        border: '1px solid #f1f5f9'
                    }}>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className="btn"
                                style={{
                                    padding: '10px 24px',
                                    fontSize: '12px',
                                    borderRadius: '980px',
                                    background: activeCategory === cat.id ? '#000' : 'transparent',
                                    color: activeCategory === cat.id ? '#fff' : '#666',
                                    fontWeight: 700,
                                    textTransform: 'uppercase'
                                }}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </header>

                <motion.div layout className="grid-catalog w-full">
                    <AnimatePresence mode='popLayout'>
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                className="card flex flex-col gap-8"
                                style={{ padding: '40px', background: '#fff' }}
                            >
                                <div className="rounded-2xl flex items-center justify-center text-primary" style={{ width: '100%', aspectRatio: '16/10', background: '#fafafa' }}>
                                    {getIcon(product.category)}
                                </div>

                                <div className="flex flex-col gap-4">
                                    <span style={{ fontSize: '10px', fontWeight: 800, color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                        {t(`categories.${product.category}`)}
                                    </span>
                                    <h3 style={{ fontSize: '24px', fontWeight: 700 }}>{product.name[currentLang]}</h3>
                                    <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.5 }}>
                                        {product.description[currentLang]}
                                    </p>
                                </div>

                                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span style={{ fontSize: '10px', color: '#999', fontStyle: 'italic', fontWeight: 600 }}>{t('catalog.estPrice')}</span>
                                        <span style={{ fontSize: '20px', fontWeight: 700 }}>
                                            {new Intl.NumberFormat(currentLang === 'kk' ? 'kk-KZ' : currentLang === 'ru' ? 'ru-RU' : 'en-US').format(product.price)} ₸
                                        </span>
                                    </div>
                                    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'var(--blue)', fontWeight: 700, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        {t('catalog.details')} <ChevronRight size={16} strokeWidth={2.5} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div style={{ marginTop: '160px' }} className="max-w-2xl px-8 py-10 border border-slate-100 rounded-3xl bg-slate-50/50 text-center flex flex-col items-center gap-2">
                    <p style={{ fontSize: '13px', color: '#888', fontStyle: 'italic', lineHeight: 1.4, fontWeight: 500 }}>
                        {t('catalog.orderCustom')}
                    </p>
                    <Link to="/contacts" style={{ fontSize: '13px', color: 'var(--blue)', fontWeight: 700, textDecoration: 'none' }}>
                        {t('catalog.requestSpecs')} <ChevronRight size={14} strokeWidth={2.5} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Catalog;
