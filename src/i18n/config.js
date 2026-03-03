import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    brand: 'ТОО Heat Energy Capital',
                    nav: {
                        home: 'Home',
                        catalog: 'Catalog',
                        about: 'About',
                        contacts: 'Contacts',
                        privacy: 'Privacy'
                    },
                    home: {
                        hero: 'High Efficiency Heat Energy Solutions',
                        subtitle: 'Providing state-of-the-art heating solutions for industry and home.',
                        explore: 'Explore Catalog',
                        features: {
                            title: 'Built for Reliability',
                            subtitle: 'Advanced heat energy solutions, refined for durability and efficiency across three sectors.',
                            chemTitle: 'Industrial Chemistry',
                            chemDesc: 'Specialized chemical reagents for metal extraction with high-precision laboratory standards.',
                            metTitle: 'Metals & Alloys',
                            metDesc: 'Advanced graphite electrodes and high-tech alloys for heavy-duty metal smelters.',
                            eqTitle: 'Thermal Equipment',
                            eqDesc: 'State-of-the-art boilers and exchangers designed for maximum thermal output.',
                            learnMore: 'Explore catalog'
                        },
                        cta: {
                            title: 'Ready to fuel your industrial growth?',
                            button: 'Schedule Consultation'
                        }
                    },
                    footer: {
                        desc: 'Providing elite heat energy solutions since 2010. Leading the industry with high-tech materials and professional equipment.',
                        shop: 'Shop & Learn',
                        contact: 'Contact Info',
                        support: 'Global Support',
                        supportDesc: 'Get specialized technical support regarding any energy-efficient materials.',
                        getHelp: 'Get Help',
                        rights: 'All rights reserved.'
                    },
                    catalog: {
                        title: 'Product Catalog',
                        subtitle: 'Explore our premium range of industrial materials.',
                        viewAll: 'View All',
                        estPrice: 'Estimate Price',
                        details: 'View Details',
                        orderCustom: 'We are ready to process products of any complexity provided technical parameters.',
                        requestSpecs: 'Submit Technical Specs'
                    },
                    product: {
                        itemMaster: 'Item Master',
                        techGrade: 'Technical Grade',
                        rapidDispatch: 'Rapid Dispatch',
                        startingPrice: 'Starting Price Estimate',
                        requestQuote: 'Request Quotation',
                        liveSupport: 'Live Support',
                        notFound: 'Product Not Found',
                        back: 'Go back to catalog'
                    },
                    categories: {
                        Chemistry: 'Chemistry',
                        Metals: 'Metals & Alloys',
                        Equipment: 'Equipment'
                    },
                    about: { soon: 'Information about our company is coming soon.' },
                    contacts: {
                        soon: 'Contact information will be available soon.',
                        call: 'Call Us Direct',
                        email: 'Email Our Sales',
                        location: 'Astana, Kazakhstan'
                    },
                    privacy: { soon: 'Privacy policy is under review.' }
                }
            },
            ru: {
                translation: {
                    brand: 'ТОО Heat Energy Capital',
                    nav: {
                        home: 'Главная',
                        catalog: 'Каталог',
                        about: 'О компании',
                        contacts: 'Контакты',
                        privacy: 'Политика'
                    },
                    home: {
                        hero: 'Высокоэффективные решения в области теплоэнергетики',
                        subtitle: 'Обеспечение передовых систем отопления для промышленности и дома.',
                        explore: 'Перейти в каталог',
                        features: {
                            title: 'Создано для надежности',
                            subtitle: 'Передовые решения в области тепловой энергии, доведенные до совершенства в трех секторах.',
                            chemTitle: 'Промышленная химия',
                            chemDesc: 'Специализированные химические реагенты для извлечения металлов по высоким лабораторным стандартам.',
                            metTitle: 'Металлы и сплавы',
                            metDesc: 'Современные графитированные электроды и высокотехнологичные сплавы для металлургии.',
                            eqTitle: 'Тепловое оборудование',
                            eqDesc: 'Современные котлы и теплообменники, разработанные для максимальной теплоотдачи.',
                            learnMore: 'Изучить каталог'
                        },
                        cta: {
                            title: 'Готовы ли вы ускорить промышленный рост?',
                            button: 'Заказать консультацию'
                        }
                    },
                    footer: {
                        desc: 'Предоставляем элитные решения в области теплоэнергетики с 2010 года. Лидеры отрасли в поставках материалов.',
                        shop: 'Каталог и ссылки',
                        contact: 'Контактная информация',
                        support: 'Глобальная поддержка',
                        supportDesc: 'Получите специализированную техническую поддержку по любым энергоэффективным материалам.',
                        getHelp: 'Помощь',
                        rights: 'Все права защищены.'
                    },
                    catalog: {
                        title: 'Каталог товаров',
                        subtitle: 'Изучите наш ассортимент промышленных материалов премиум-класса.',
                        viewAll: 'Все товары',
                        estPrice: 'Ориентировочная цена',
                        details: 'Подробнее',
                        orderCustom: 'Сообщаем о готовности проработать продукцию любой сложности при условии предоставления технических параметров.',
                        requestSpecs: 'Отправить техзадание'
                    },
                    product: {
                        itemMaster: 'Код товара',
                        techGrade: 'Технический класс',
                        rapidDispatch: 'Быстрая отгрузка',
                        startingPrice: 'Начальная смета',
                        requestQuote: 'Запросить расчет',
                        liveSupport: 'Поддержка',
                        notFound: 'Товар не найден',
                        back: 'Вернуться в каталог'
                    },
                    categories: {
                        Chemistry: 'Химия',
                        Metals: 'Металлы и сплавы',
                        Equipment: 'Оборудование'
                    },
                    about: { soon: 'Информация о компании скоро появится.' },
                    contacts: {
                        soon: 'Контактная информация скоро появится.',
                        call: 'Позвонить нам',
                        email: 'Написать нам',
                        location: 'Астана, Казахстан'
                    },
                    privacy: { soon: 'Политика конфиденциальности находится в разработке.' }
                }
            },
            kk: {
                translation: {
                    brand: 'ТОО Heat Energy Capital',
                    nav: {
                        home: 'Басты бет',
                        catalog: 'Каталог',
                        about: 'Компания туралы',
                        contacts: 'Контактілер',
                        privacy: 'Құпиялылық'
                    },
                    home: {
                        hero: 'Жылу энергетикасындағы жоғары тиімді шешімдер',
                        subtitle: 'Өнеркәсіп пен үйлерге арналған озық жылыту жүйелерін қамтамасыз ету.',
                        explore: 'Каталогқа өту',
                        features: {
                            title: 'Сенімділік үшін жасалған',
                            subtitle: 'Үш сектор бойынша төзімділік пен тиімділікке арналған озық жылу энергиясы шешімдері.',
                            chemTitle: 'Өнеркәсіптік химия',
                            chemDesc: 'Жоғары зертханалық стандарттары бар металды алуға арналған мамандандырылған химиялық реагенттер.',
                            metTitle: 'Металдар мен қорытпалар',
                            metDesc: 'Ауыр металлургияға арналған заманауи графиттелген электродтар мен жоғары технологиялық қорытпалар.',
                            eqTitle: 'Жылу жабдықтары',
                            eqDesc: 'Максималды жылу шығаруға арналған заманауи қазандықтар мен жылу алмастырғыштар.',
                            learnMore: 'Каталогты қарау'
                        },
                        cta: {
                            title: 'Өнеркәсіптік өсуді жеделдетуге дайынсыз ба?',
                            button: 'Консультацияға тапсырыс беру'
                        }
                    },
                    footer: {
                        desc: '2010 жылдан бастап жылу энергетикасы саласында элиталық шешімдерді ұсынады. Материалдарды жеткізудегі сала көшбасшылары.',
                        shop: 'Дүкен және оқу',
                        contact: 'Байланыс ақпараты',
                        support: 'Жалпы қолдау',
                        supportDesc: 'Кез келген энергия үнемдейтін материалдар бойынша мамандандырылған техникалық қолдау алыңыз.',
                        getHelp: 'Көмек алу',
                        rights: 'Барлық құқықтар қорғалған.'
                    },
                    catalog: {
                        title: 'Тауарлар каталогы',
                        subtitle: 'Өнеркәсіптік материалдардың премиум ассортиментін қараңыз.',
                        viewAll: 'Барлығы',
                        estPrice: 'Болжамды баға',
                        details: 'Толығырақ',
                        orderCustom: 'Техникалық параметрлер берілген жағдайда біз кез келген күрделіліктегі өнімдерді өңдеуге дайынбыз.',
                        requestSpecs: 'Техникалық тапсырманы жіберу'
                    },
                    product: {
                        itemMaster: 'Тауар коды',
                        techGrade: 'Технический класс',
                        rapidDispatch: 'Жылдам жөнелту',
                        startingPrice: 'Бастапқы баға',
                        requestQuote: 'Есептеуді сұрау',
                        liveSupport: 'Қолдау',
                        notFound: 'Тауар табылмады',
                        back: 'Каталогқа оралу'
                    },
                    categories: {
                        Chemistry: 'Химия',
                        Metals: 'Металдар мен қорытпалар',
                        Equipment: 'Жабдықтар'
                    },
                    about: { soon: 'Компания туралы ақпарат жақын арада пайда болады.' },
                    contacts: {
                        soon: 'Байланыс ақпараты жақын арада пайда болады.',
                        call: 'Бізге қоңырау шалыңыз',
                        email: 'Бізге жазыңыз',
                        location: 'Астана, Қазақстан'
                    },
                    privacy: { soon: 'Құпиялылық саясаты әзірленуде.' }
                }
            }
        }
    });

export default i18n;
