import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Droplets } from 'lucide-react';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const navItems = [
        { to: '/', label: 'nav.home' },
        { to: '/catalog', label: 'nav.catalog' },
        { to: '/about', label: 'nav.about' },
        { to: '/contacts', label: 'nav.contacts' },
    ];

    return (
        <header className="nav-fixed">
            <div className="container" style={{ display: 'flex', alignItems: 'center', height: '100%', maxWidth: '850px', margin: '0 auto', padding: '0 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#000' }}>
                        <Droplets size={22} className="text-primary" strokeWidth={2.5} />
                        <span className="font-outfit" style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
                            {t('brand')}
                        </span>
                    </NavLink>
                </div>

                <nav style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '80px', padding: '0 40px' }}>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            style={{
                                fontSize: '14px',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                textDecoration: 'none',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {t(item.label)}
                        </NavLink>
                    ))}
                </nav>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                    {['ru', 'kk', 'en'].map(lng => (
                        <button
                            key={lng}
                            onClick={() => changeLanguage(lng)}
                            className="nav-link"
                            style={{
                                border: 'none',
                                background: 'none',
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                                fontSize: '10px',
                                fontWeight: i18n.language === lng ? '800' : '500',
                                color: i18n.language === lng ? 'var(--primary)' : 'var(--text-dim)',
                                opacity: i18n.language === lng ? 1 : 0.6,
                                padding: '4px'
                            }}
                        >
                            {lng}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
