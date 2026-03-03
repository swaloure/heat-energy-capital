import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Factory, ShieldCheck, Beaker } from 'lucide-react';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col bg-white overflow-hidden">
            <section className="container flex flex-col items-center text-center px-6" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center"
                >
                    <h1 className="hero-text text-black" style={{ maxWidth: '1000px', lineHeight: 1.15 }}>
                        {t('home.hero')}
                    </h1>

                    <p className="sub-text italic mx-auto" style={{
                        maxWidth: '750px',
                        fontSize: '20px',
                        lineHeight: 1.6,
                        opacity: 0.7,
                        marginTop: '32px'
                    }}>
                        {t('home.subtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center" style={{
                        marginTop: '48px',
                    }}>
                        <Link
                            to="/catalog"
                            className="btn btn-primary"
                            style={{
                                padding: '18px 48px',
                                fontSize: '18px',
                                borderRadius: '980px',
                                background: '#000',
                                color: '#fff',
                                marginRight: '60px'
                            }}
                        >
                            {t('home.explore')}
                        </Link>
                        <Link
                            to="/contacts"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '18px',
                                textDecoration: 'none',
                                color: 'var(--blue)',
                                fontWeight: 700
                            }}
                        >
                            <span>{t('nav.contacts')}</span> <ChevronRight size={22} strokeWidth={2.5} />
                        </Link>
                    </div>
                </motion.div>

                <div className="container px-6 grid-catalog gap-12" style={{ paddingTop: '110px' }}>
                    {[
                        { icon: Beaker, title: t('home.features.chemTitle'), desc: t('home.features.chemDesc') },
                        { icon: Factory, title: t('home.features.metTitle'), desc: t('home.features.metDesc') },
                        { icon: ShieldCheck, title: t('home.features.eqTitle'), desc: t('home.features.eqDesc') }
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="card flex flex-col items-start border border-slate-100"
                            style={{ padding: '64px', background: '#fafafa', borderRadius: '32px' }}
                        >
                            <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-primary shadow-sm mb-10">
                                <feature.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 style={{ fontSize: '28px', fontWeight: 700, tracking: '-0.02em', marginBottom: '24px' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-dim)', fontSize: '16px', lineHeight: 1.7, marginBottom: '40px' }}>{feature.desc}</p>
                            <Link to="/catalog" style={{ fontSize: '15px', color: 'var(--blue)', textDecoration: 'none', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: 'auto' }}>
                                {t('home.features.learnMore')} <ChevronRight size={16} strokeWidth={2.5} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="bg-white border-y border-slate-50" style={{ marginTop: '0px', paddingTop: '60px', paddingBottom: '100px' }}>
                <div className="container text-center flex flex-col items-center px-6">
                    <h2 className="hero-text text-center italic" style={{ fontSize: '48px', maxWidth: '800px', lineHeight: 1.15 }}>
                        {t('home.cta.title')}
                    </h2>
                    <div style={{ marginTop: '30px' }}>
                        <Link to="/contacts" className="btn btn-primary" style={{ background: 'var(--blue)', color: '#fff', borderRadius: '980px', padding: '20px 52px', fontSize: '18px' }}>
                            {t('home.cta.button')} <ChevronRight size={22} strokeWidth={2.5} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
