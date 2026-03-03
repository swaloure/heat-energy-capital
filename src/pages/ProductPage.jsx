import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '../data/products';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, ShoppingCart, Truck, Zap, Beaker, Layers, Settings } from 'lucide-react';

const ProductPage = () => {
    const { id } = useParams();
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <div className="section-padding container flex flex-col items-center justify-center min-h-[60vh] gap-12">
                <h2 className="hero-text text-black">{t('product.notFound')}</h2>
                <Link to="/catalog" className="btn-more font-bold flex items-center gap-1 hover:underline">
                    <ChevronLeft size={20} /> {t('product.back')}
                </Link>
            </div>
        );
    }

    const getProductIcon = (catId) => {
        switch (catId) {
            case 'Chemistry': return <Beaker size={140} strokeWidth={0.5} />;
            case 'Metals': return <Layers size={140} strokeWidth={0.5} />;
            case 'Equipment': return <Settings size={140} strokeWidth={0.5} />;
            default: return <Zap size={140} strokeWidth={0.5} />;
        }
    };

    return (
        <div className="section-padding bg-white min-h-screen">
            <div className="container flex flex-col gap-24 py-20 lg:py-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Abstract Image Replacement */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="card flex items-center justify-center bg-slate-50 border border-slate-100 shadow-none"
                        style={{ borderRadius: 'var(--radius-lg)', padding: '100px', aspectRatio: '1/1', color: 'var(--primary)' }}
                    >
                        {getProductIcon(product.category)}
                    </motion.div>

                    {/* Details Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col gap-10 text-left"
                    >
                        <div className="flex flex-col gap-4">
                            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                                {t('product.itemMaster')} #{product.id}
                            </span>
                            <h1 className="hero-text text-black" style={{ fontSize: '64px', lineHeight: 1.1 }}>{product.name[currentLang]}</h1>
                            <div className="flex items-center gap-4 mt-4">
                                <div className="flex items-center gap-2 text-[12px] text-slate-500 font-bold bg-slate-50 border border-slate-100 px-5 py-2 rounded-full">
                                    <CheckCircle2 size={16} className="text-green-500" /> {t('product.techGrade')}
                                </div>
                                <div className="flex items-center gap-2 text-[12px] text-slate-500 font-bold bg-slate-50 border border-slate-100 px-5 py-2 rounded-full">
                                    <Truck size={16} className="text-blue-500" /> {t('product.rapidDispatch')}
                                </div>
                            </div>
                        </div>

                        <p className="sub-text italic opacity-80" style={{ fontSize: '24px', maxWidth: '600px', lineHeight: 1.4 }}>
                            {product.description[currentLang]}
                        </p>

                        <div className="flex flex-col gap-8 pt-12 border-t border-slate-100">
                            <div className="flex flex-col gap-2">
                                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-dim)', fontStyle: 'italic', opacity: 0.7 }}>{t('product.startingPrice')}</span>
                                <span className="hero-text text-black" style={{ fontSize: '56px' }}>
                                    {new Intl.NumberFormat(currentLang === 'kk' ? 'kk-KZ' : currentLang === 'ru' ? 'ru-RU' : 'en-US').format(product.price)} ₸
                                </span>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-8 mt-6">
                                <button className="btn btn-primary px-16 py-6 shadow-2xl shadow-blue-200/30" style={{ background: 'var(--blue)', fontSize: '20px', borderRadius: '32px' }}>
                                    {t('product.requestQuote')} <ChevronRight className="ml-2" size={22} />
                                </button>
                                <Link to="/contacts" className="btn-more font-bold" style={{ fontSize: '20px', textDecoration: 'none' }}>
                                    {t('product.liveSupport')} <ChevronRight size={22} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
