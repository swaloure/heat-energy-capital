import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Info, Mail, Phone, MapPin, ShieldCheck, Clock } from 'lucide-react';

const PlaceholderPage = ({ titleKey, icon: Icon, soonKey }) => {
    const { t } = useTranslation();

    return (
        <div className="section-padding container flex flex-col items-center justify-center min-h-[70vh] gap-10 text-center" style={{ paddingTop: '200px' }}>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-24 h-24 bg-slate-50 border border-slate-100 rounded-[30px] flex items-center justify-center text-primary shadow-sm"
            >
                <Icon size={40} strokeWidth={1.5} />
            </motion.div>
            <div className="flex flex-col gap-6">
                <h1 className="hero-text text-black">{t(titleKey)}</h1>
                <p className="sub-text italic opacity-80 mx-auto">
                    {t(soonKey)}
                </p>
            </div>

            {/* Decorative minimalist skeletons */}
            <div className="grid-catalog w-full mt-20 max-w-4xl" style={{ opacity: 0.4 }}>
                <div className="card p-10 flex flex-col gap-6 items-start text-left border border-slate-100">
                    <div className="w-20 h-3 bg-slate-100 rounded-full"></div>
                    <div className="w-full h-10 bg-slate-50 rounded-xl"></div>
                    <div className="w-3/4 h-3 bg-slate-100 rounded-full"></div>
                </div>
                <div className="card p-10 flex flex-col gap-6 items-start text-left border border-slate-100">
                    <div className="w-20 h-3 bg-slate-100 rounded-full"></div>
                    <div className="w-full h-10 bg-slate-50 rounded-xl"></div>
                    <div className="w-3/4 h-3 bg-slate-100 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export const About = () => <PlaceholderPage titleKey="nav.about" icon={Info} soonKey="about.soon" />;
export const Contacts = () => {
    const { t } = useTranslation();
    return (
        <div className="section-padding container" style={{ paddingTop: '200px' }}>
            <header className="mb-20 text-center">
                <h1 className="hero-text text-black">{t('nav.contacts')}</h1>
                <p className="sub-text italic opacity-80 mx-auto mt-6">{t('contacts.soon')}</p>
            </header>

            <div className="grid-catalog gap-10">
                <div className="card flex flex-col gap-4 items-center text-center border border-slate-100 p-10">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary">
                        <Phone size={24} strokeWidth={1.5} />
                    </div>
                    <h3 style={{ fontSize: '20px', fontWeight: 700 }}>{t('contacts.call')}</h3>
                    <p style={{ color: 'var(--text-dim)', fontSize: '15px' }}>+7 (707) 123 45 67</p>
                </div>
                <div className="card flex flex-col gap-4 items-center text-center border border-slate-100 p-10">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary">
                        <Mail size={24} strokeWidth={1.5} />
                    </div>
                    <h3 style={{ fontSize: '20px', fontWeight: 700 }}>{t('contacts.email')}</h3>
                    <p style={{ color: 'var(--text-dim)', fontSize: '15px' }}>info@heatenergy.kz</p>
                </div>
                <div className="card flex flex-col gap-4 items-center text-center border border-slate-100 p-10">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary">
                        <MapPin size={24} strokeWidth={1.5} />
                    </div>
                    <h3 style={{ fontSize: '20px', fontWeight: 700 }}>{t('contacts.location')}</h3>
                    <p style={{ color: 'var(--text-dim)', fontSize: '15px' }}>{t('contacts.location')}</p>
                </div>
            </div>
        </div>
    );
};
export const Privacy = () => <PlaceholderPage titleKey="nav.privacy" icon={ShieldCheck} soonKey="privacy.soon" />;
