import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Droplets, ChevronRight } from 'lucide-react';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer overflow-hidden">
            <div className="container" style={{ padding: '0 40px', maxWidth: 'none' }}>
                <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, auto)', justifyContent: 'space-between', gap: '40px' }}>
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-3 text-secondary">
                            <Droplets size={26} className="text-primary" strokeWidth={2.5} />
                            <span className="font-outfit text-xl font-extrabold uppercase tracking-tighter text-black">
                                {t('brand')}
                            </span>
                        </div>
                        <p style={{ color: 'var(--text-dim)', fontSize: '13px', lineHeight: 1.6, maxWidth: '280px' }}>
                            {t('footer.desc')}
                        </p>
                    </div>

                    <div className="flex flex-col gap-8">
                        <h4 style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#000', letterSpacing: '0.15em' }}>{t('footer.shop')}</h4>
                        <nav className="flex flex-col gap-4">
                            <Link to="/" style={{ color: '#000', fontSize: '13px', textDecoration: 'none', fontWeight: 600 }}>{t('nav.home')}</Link>
                            <Link to="/catalog" style={{ color: '#000', fontSize: '13px', textDecoration: 'none', fontWeight: 600 }}>{t('nav.catalog')}</Link>
                            <Link to="/about" style={{ color: '#000', fontSize: '13px', textDecoration: 'none', fontWeight: 600 }}>{t('nav.about')}</Link>
                        </nav>
                    </div>

                    <div className="flex flex-col gap-8">
                        <h4 style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#000', letterSpacing: '0.15em' }}>{t('footer.contact')}</h4>
                        <div className="flex flex-col gap-3" style={{ fontSize: '13px', color: 'var(--text-dim)', fontStyle: 'italic', fontWeight: 500 }}>
                            <span>+7 (707) 123 45 67</span>
                            <span>sales@heatenergy.kz</span>
                            <span>{t('contacts.location')}</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 text-left">
                        <h4 style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#000', letterSpacing: '0.15em' }}>{t('footer.support')}</h4>
                        <p style={{ color: 'var(--text-dim)', fontSize: '13px', lineHeight: 1.6, maxWidth: '220px' }}>
                            {t('footer.supportDesc')}
                        </p>
                        <Link to="/contacts" style={{ fontSize: '13px', color: 'var(--blue)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                            {t('footer.getHelp')} <ChevronRight size={14} strokeWidth={2.5} />
                        </Link>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                    <span>© {new Date().getFullYear()} {t('brand')}. {t('footer.rights')}</span>
                    <div className="flex gap-10">
                        <Link to="/privacy" style={{ textDecoration: 'none', color: 'inherit' }}>{t('nav.privacy')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
