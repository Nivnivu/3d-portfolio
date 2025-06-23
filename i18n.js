import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        about: "About",
        certificates: "Certificates",
        work: "Work",
        contact: "Contact",
        projects: "Projects",
        experience: "Experience",
      },
      // Header
      header: {
        title: "Niv",
        subtitle: "Full-Stack Developer",
      },
      // Hero
      hero: {
        greeting: "Hey, I am",
        name: "Niv",
        description:
          "29 years old, I develop professional frontend, backend and mobile applications",
        descriptionLine2:
          "As well as various bots, scraping, automation and AI tools.",
      },
      // Services
      services: {
        frontend: "Frontend developer",
        backend: "Backend Developer",
        bots: "Bots & Automation Developer",
        mobile: "Mobile Developer",
      },
      // Technologies
      technologies: {
        html: "HTML 5",
        css: "CSS 3",
        javascript: "JavaScript",
        typescript: "TypeScript",
        python: "Python",
        react: "React JS",
        redux: "Redux Toolkit",
        tailwind: "Tailwind CSS",
        nodejs: "Node JS",
        mongodb: "MongoDB",
        threejs: "Three JS",
        git: "git",
      },
      // Experience
      experience: {
        current: "Present",
        fullStackTitle: "Full-Stack Developer",
        zipyCompany: "Zipy",
        zipyDate: "2020 - 2022",
        zipyPoints: [
          "Developing and maintaining web applications using React.js and other related technologies.",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "Learning from the best, about best practices related to programing and newer frameworks and libraries",
          "Thinking about efficiency of both server and client side.",
        ],
        botsTitle: "Bots and Automation Developer",
        botsCompany: "Bots4All",
        botsDate: "2022 - 2023",
        botsPoints: [
          "Specialized in automation creating advanced bots for Telegram, WhatsApp, Binance, and more.",
          "Developed tailored scraping bots and various automation solutions,",
          "efficiently streamlining digital tasks for diverse client needs.",
        ],
        appsTitle: "Web & Mobile App Developer",
        appsCompany: "Apps4All",
        appsDate: "2023 - Present",
        appsPoints: [
          "Developing comprehensive web and mobile applications using modern tech stacks.",
          "Building responsive web applications with React, Next.js, and TypeScript.",
          "Creating cross-platform mobile apps using React Native and Flutter.",
          "Implementing full-stack solutions with Node.js, MongoDB, and cloud services.",
        ],
      },
      // Testimonials
      testimonials: [
        {
          text: "Outstanding student who consistently demonstrated exceptional aptitude and dedication. A top-performer with an A+ honor. Highly recommended.",
          name: "Yaniv Almog",
          designation: "Teacher",
          company: "Sv-college",
        },
        {
          text: "I had the pleasure of working with Niv. He is eager to learn new skills and technologies. He is also a great team player who communicates well and collaborates effectively with other developers. I highly recommend Niv for any frontend development roles",
          name: "Yura",
          designation: "Senior Frontend",
          company: "Zipy",
        },
        {
          text: "Strong Recommendation for Niv Barcechet - Exceptional Front-End Programmer I am writing to highly recommend Niv as an exceptional front-end programmer. During his tenure at Zipy, Niv's expertise in React, Next.js, and Typescript has consistently impressed us.",
          name: "Dima",
          designation: "CEO",
          company: "Zipy",
        },
      ],
      // Projects
      projects: {
        smapTitle: "SMAP - Social Network for Sports",
        smapDesc:
          "SMAP is the ultimate social networking platform for sports enthusiasts, often described as 'the Tinder of sports.' This innovative mobile application connects athletes and sports lovers based on their preferred activities, skill levels, and location. Built with Expo React Native for cross-platform compatibility and styled with NativeWindCSS for a sleek, responsive design. Users can discover nearby sports partners, join local games, create events, and build lasting connections through their shared passion for sports. The app features real-time matching, event scheduling, skill-based filtering, and integrated chat functionality.",
        everestTitle: "Everest College - Complete CRM System",
        everestDesc:
          "A comprehensive Customer Relationship Management system designed specifically for educational institutions. This full-scale CRM solution manages students, teachers, and administrators across multiple college locations. The system includes advanced sales tracking capabilities, student enrollment management, teacher performance analytics, and administrative oversight tools. Features dedicated mobile applications for both students and teachers, enabling seamless communication, assignment submission, grade tracking, and schedule management. Built with modern technologies to ensure scalability, security, and user-friendly interfaces across all platforms.",
        infotechTitle: "InfoTech - Engineering CRM & PDF Automation",
        infotechDesc:
          "InfoTech is a sophisticated CRM system specifically designed for engineering equipment testing and certification. The platform automates the creation of professional PDF forms for various types of engineering equipment testing procedures, ensuring compliance with industry standards. Built with Next.js for optimal performance and SEO, styled with Tailwind CSS for modern UI/UX, and includes both web and mobile applications using Expo React Native. The system features automated report generation, equipment tracking, client management, testing schedule coordination, and digital signature integration. Node.js backend ensures robust data processing and secure document management.",
        shukShamTitle: "Shuk-Sham - Modern Supermarket Network",
        shukShamDesc:
          "Shuk-Sham represents the next generation of e-commerce solutions for supermarket chains. This comprehensive platform combines the power of Next.js for lightning-fast frontend performance with WordPress WooCommerce as a headless CMS backend, providing store workers with familiar inventory management tools while delivering customers a modern, secure shopping experience. The system includes both web and mobile applications (Expo React Native) for seamless omnichannel shopping. Features include real-time inventory tracking, personalized shopping recommendations, multiple payment gateways, delivery scheduling, and advanced analytics for business intelligence.",
        stealthTitle: "Stealth Telegram Extractor",
        stealthDesc:
          "This tool is a highly efficient Telegram scraper capable of extracting data from private and closed groups undetected. It's designed to avoid blocks and bans, ensuring continuous operation and reliability. Ideal for users needing deep insights from Telegram's exclusive channels without compromising speed or data integrity.",
        crossPlatformTitle: "Cross-Platform Dispatcher",
        crossPlatformDesc:
          "Cross-Platform Dispatcher is an API that instantly relays messages from a Telegram channel to Facebook, WhatsApp, and X (the new Twitter). This tool simplifies multi-platform engagement, ensuring messages are uniformly distributed across key social networks, enhancing reach and connectivity with ease. Ideal for seamless digital communication strategies.",
      },
      // Certificates
      certificates: {
        fullStack: "Full-Stack Development",
        bootcamp: "Full-Stack Bootcamp",
        python: "Python For Everybody with honor",
        dataScience: "Data Science Math Skills",
        webDesign: "Responsive Web Design",
        selfPy: "Self.py",
        pythonCert: "Python",
        webDev: "Web Development",
        sql: "SQL",
      },
      // Section headers and common UI
      sections: {
        // About section
        aboutSubtitle: "Introduction",
        aboutTitle: "Overview.",
        aboutDescription:
          "My passion for development started at age eight, tinkering with HTML and CSS to create custom forum signatures. This early curiosity quickly grew, leading me to build my first class website at nine and develop custom WordPress plugins with PHP as a teen. For the past four years, I've channeled this lifelong passion into a professional full-stack career. I honed my skills at Zipy, a global e-commerce platform, before moving to bots4all and apps4all, where I architected automation tools and built complete web and mobile applications using modern stacks like Next.js, TypeScript, and React Native. My deep expertise in both Python and JavaScript allows me to deliver versatile and powerful solutions.",

        // Experience section
        experienceSubtitle: "What I have done so far",
        experienceTitle: "Work Experience.",

        // Projects section
        projectsSubtitle: "My work",
        projectsTitle: "Projects.",
        projectsDescription:
          "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with some links, All the projects are real working projects developed for companies and clients.",

        // Certificates section
        certificatesSubtitle: "My Study",
        certificatesTitle: "certificates.",
        certificatesVerify: "Click to verify",

        // Testimonials section
        testimonialsSubtitle: "What others say",
        testimonialsTitle: "Recommendations.",
        fullRecommendation: "Full Signed Recommendation",

        // Contact section
        contactSubtitle: "Get in touch",
        contactTitle: "Contact.",
        contactName: "Your Name",
        contactEmail: "Your email",
        contactMessage: "Your Message",
        contactSend: "Send",
        contactSending: "Sending...",
        contactThankYou:
          "Thank you. I will get back to you as soon as possible.",
        contactError: "Ahh, something went wrong. Please try again.",
      },

      // Common
      common: {
        loading: "Loading...",
        error: "Something went wrong",
        retry: "Try Again",
      },
    },
  },
  he: {
    translation: {
      // Navigation - Hebrew
      nav: {
        about: "אודות",
        certificates: "תעודות",
        work: "עבודות",
        contact: "צור קשר",
        projects: "פרויקטים",
        experience: "ניסיון",
      },
      // Header - Hebrew
      header: {
        title: "ניב",
        subtitle: "מפתח Full-Stack",
      },
      // Hero - Hebrew
      hero: {
        greeting: "היי, אני",
        name: "ניב",
        description:
          "בן 29 מתמחה בפיתוח יישומי פרונטאנד, בקאנד ומובייל מקצועיים,",
        descriptionLine2:
          "וכן בוטים, כלי Scraping ופתרונות אוטומציה ו-AI  מתקדמים.",
      },
      // Services - Hebrew
      services: {
        frontend: "מפתח פרונטאנד",
        backend: "מפתח בקאנד",
        bots: "מפתח בוטים ואוטומציה",
        mobile: "מפתח מובייל",
      },
      // Technologies - Hebrew
      technologies: {
        html: "HTML 5",
        css: "CSS 3",
        javascript: "JavaScript",
        typescript: "TypeScript",
        python: "Python",
        react: "React JS",
        redux: "Redux Toolkit",
        tailwind: "Tailwind CSS",
        nodejs: "Node JS",
        mongodb: "MongoDB",
        threejs: "Three JS",
        git: "Git",
      },
      // Experience - Hebrew
      experience: {
        current: "נוכחי",
        fullStackTitle: "מפתח Full-Stack",
        zipyCompany: "Zipy",
        zipyDate: "2020 - 2022",
        zipyPoints: [
          "פיתוח ותחזוקה של אפליקציות אינטרנט באמצעות React.js וטכנולוגיות קשורות אחרות.",
          "שיתוף פעולה עם צוותים רב-תחומיים כולל מעצבים, מנהלי מוצר ומפתחים אחרים ליצירת מוצרים איכותיים.",
          "למידה מהטובים ביותר, על שיטות עבודה מתקדמות הקשורות לתכנות ופריימוורקים וספריות חדשות יותר",
          "חשיבה על יעילות של צד השרת וצד הלקוח.",
        ],
        botsTitle: "מפתח בוטים ואוטומציה",
        botsCompany: "Bots4All",
        botsDate: "2022 - 2023",
        botsPoints: [
          "התמחות באוטומציה ויצירת בוטים מתקדמים לטלגרם, וואטסאפ, בינאנס ועוד.",
          "פיתוח בוטי גריפה מותאמים ופתרונות אוטומציה שונים,",
          "יעול יעיל של משימות דיגיטליות לצרכי לקוחות מגוונים.",
        ],
        appsTitle: "מפתח אפליקציות ווב ומובייל",
        appsCompany: "Apps4All",
        appsDate: "2023 - נוכחי",
        appsPoints: [
          "פיתוח אפליקציות ווב ומובייל מקיפות באמצעות טכנולוגיות מודרניות.",
          "בניית אפליקציות ווב רספונסיביות עם React, Next.js ו-TypeScript.",
          "יצירת אפליקציות מובייל רב-פלטפורמה באמצעות React Native ו-Flutter.",
          "יישום פתרונות Full-Stack עם Node.js, MongoDB ושירותי ענן.",
        ],
      },
      // Testimonials - Hebrew
      testimonials: [
        {
          text: "תלמיד מצטיין שהפגין באופן עקבי כישרון יוצא דופן ומסירות. בעל ביצועים גבוהים בהצטיינות  A+. מומלץ בחום.",
          name: "יניב אלמוג",
          designation: "מורה",
          company: "מכללת אס-וי",
        },
        {
          text: "היה לי העונג לעבוד עם ניב. הוא להוט ללמוד כישורים וטכנולוגיות חדשות. הוא גם שחקן צוות מעולה שמתקשר היטב ומשתף פעולה ביעילות עם מפתחים אחרים. אני ממליץ בחום על ניב לכל תפקיד פיתוח פרונט",
          name: "יורה",
          designation: "מפתח חזית בכיר",
          company: "Zipy",
        },
        {
          text: "המלצה חזקה לניב ברצ'ט - מתכנת חזית יוצא דופן אני כותב כדי להמליץ בחום על ניב כמתכנת חזית יוצא דופן. במהלך כהונתו ב-Zipy, המומחיות של ניב ב-React, Next.js ו-Typescript הרשימה אותנו באופן עקבי.",
          name: "דימה",
          designation: 'מנכ"ל',
          company: "Zipy",
        },
      ],
      // Projects - Hebrew
      projects: {
        smapTitle: "אפליקציית מובייל SMAP - רשת חברתית לספורט",
        smapDesc:
          "SMAP היא פלטפורמת הרשת החברתית האולטימטיבית לחובבי ספורט, המתוארת לעתים קרובות כ'הטינדר של הספורט.' אפליקציית מובייל חדשנית זו מחברת בין ספורטאים וחובבי ספורט על בסיס פעילויותיהם המועדפות, רמת הכישורים והמיקום שלהם. נבנתה עם Expo React Native לתאימות חוצת פלטפורמות ועוצבה עם NativeWindCSS לעיצוב חלק ורספונסיבי. משתמשים יכולים לגלות שותפי ספורט בקרבתם, להצטרף למשחקים מקומיים, ליצור אירועים, ולבנות קשרים מתמשכים דרך התשוקה המשותפת שלהם לספורט. האפליקציה כוללת התאמה בזמן אמת, תזמון אירועים, סינון מבוסס כישורים ופונקציונליות צ'אט משולבת.",
        everestTitle: "מכללת אוורסט - מערכת CRM מקיפה ואפליקציית מובייל",
        everestDesc:
          "מערכת ניהול קשרי לקוחות מקיפה המיועדת במיוחד למוסדות חינוך. פתרון CRM בקנה מידה מלא זה מנהל סטודנטים, מורים ומנהלים במספר מיקומי מכללה. המערכת כוללת יכולות מעקב מכירות מתקדמות, ניהול רישום סטודנטים, ניתוח ביצועי מורים וכלי פיקוח מנהלי. כוללת אפליקציות מובייל ייעודיות הן לסטודנטים והן למורים, המאפשרות תקשורת חלקה, הגשת מטלות, מעקב ציונים וניהול לוח זמנים. נבנתה עם טכנולוגיות מודרניות להבטחת מדרגיות, אבטחה וממשקי משתמש ידידותיים בכל הפלטפורמות.",
        infotechTitle:
          "אינפוטק - CRM הנדסי ואוטומציית PDF עם אפליקציית מובייל לשטח",
        infotechDesc:
          "אינפוטק היא מערכת CRM מתוחכמת המיועדת במיוחד לבדיקות וסיווג ציוד הנדסי. הפלטפורמה מאטמטת את יצירת טפסי PDF מקצועיים עבור סוגים שונים של הליכי בדיקת ציוד הנדסי, תוך הבטחת עמידה בתקני התעשייה. נבנתה עם Next.js לביצועים ו-SEO אופטימליים, עוצבה עם Tailwind CSS ל-UI/UX מודרני, וכוללת יישומי ווב ומובייל באמצעות Expo React Native. המערכת כוללת יצירת דוחות אוטומטית, מעקב ציוד, ניהול לקוחות, תיאום לוחות זמנים לבדיקות ואינטגרציה של חתימה דיגיטלית. Backend של Node.js מבטיח עיבוד נתונים חזק וניהול מסמכים מאובטח.",
        shukShamTitle: "שוק-שם - אתר סופרמרקטים מודרני עם אפליקציית מובייל",
        shukShamDesc:
          "שוק-שם מייצגת את הדור הבא של פתרונות מסחר אלקטרוני עבור רשתות סופרמרקטים. פלטפורמה מקיפה זו משלבת את העוצמה של Next.js לביצועי פרונטאנד מהירים כברק עם WordPress WooCommerce כ-CMS headless backend, המספקת לעובדי החנות כלי ניהול מלאי מוכרים תוך מתן לקוחות חוויית קנייה מודרנית ומאובטחת. המערכת כוללת יישומי ווב ומובייל (Expo React Native) לקנייה אומני-ערוצית חלקה. התכונות כוללות מעקב מלאי בזמן אמת, המלצות קנייה מותאמות אישית, שערי תשלום מרובים, תזמון משלוחים וניתוח מתקדם לאינטליגנציה עסקית.",
        stealthTitle: "Stealth Telegram Extractor",
        stealthDesc:
          "כלי Scraping מתקדם ב-Python לחילוץ נתונים מקבוצות טלגרם פרטיות וסגורות, תוך עקיפת מנגנוני חסימה וניהול Sessions. הפרויקט מדגים יכולות עבודה עם APIs, תקשורת רשת א-סינכרונית, והתמודדות עם אתגרי אבטחה דינמיים.",
        crossPlatformTitle: "Cross-Platform Dispatcher",
        crossPlatformDesc:
          "API מבוסס Node.js המאפשר הפצת הודעות בזמן אמת מערוץ טלגרם למספר רשתות חברתיות במקביל (Facebook, WhatsApp, X). הפרויקט מדגים ארכיטקטורת Microservice, ניהול תורים, ואינטגרציה עם APIs של צד-שלישי.",
      },
      // Certificates - Hebrew
      certificates: {
        fullStack: "פיתוח Full-Stack",
        bootcamp: "בוטקמפ Full-Stack",
        python: "Python לכולם בהצטיינות",
        dataScience: "כישורי מתמטיקה למדעי הנתונים",
        webDesign: "עיצוב ווב רספונסיבי",
        selfPy: "Self.py",
        pythonCert: "Python",
        webDev: "פיתוח ווב",
        sql: "SQL",
      },
      // Section headers and common UI - Hebrew
      sections: {
        // About section - Hebrew
        aboutSubtitle: "היכרות",
        aboutTitle: "סקירה כללית.",
        aboutDescription:
          "התשוקה שלי לפיתוח החלה בגיל שמונה, כששיחקתי עם HTML ו-CSS ליצירת חתימות מותאמות אישית לפורומים. סקרנות מוקדמת זו גדלה במהירות, והובילה אותי לבנות את אתר הכיתה הראשון שלי בגיל תשע ולפתח תוספי וורדפרס מותאמים אישית עם PHP כנער. בארבע השנים האחרונות, תיעלתי את התשוקה הזו לקריירת Full-Stack מקצועית. חידדתי את כישוריי ב-Zipy, פלטפורמת מסחר אלקטרוני גלובלית, לפני שעברתי ל-bots4all ו-apps4all, שם תכננתי כלי אוטומציה ובניתי יישומי ווב ומובייל מלאים באמצעות טכנולוגיות מודרניות כמו Next.js, TypeScript ו-React Native. המומחיות העמוקה שלי הן ב-Python והן ב-JavaScript מאפשרת לי לספק פתרונות רב-תכליתיים וחזקים.",

        // Experience section - Hebrew
        experienceSubtitle: "מה עשיתי עד כה",
        experienceTitle: ".ניסיון תעסוקתי",

        // Projects section - Hebrew
        projectsSubtitle: "העבודות שלי",
        projectsTitle: "פרויקטים.",
        projectsDescription:
          "הפרויקטים הבאים מציגים את כישוריי וניסיוני באמצעות דוגמאות מהעולם האמיתי של עבודתי. כל פרויקט מתואר בקצרה עם קישורים למאגרי קוד, וחלקם כוללים הדגמות חיות. הפורטפוליו משקף את יכולתי לפתור בעיות מורכבות, לעבוד עם טכנולוגיות שונות, ולנהל פרויקטים ביעילות.",

        // Certificates section - Hebrew
        certificatesSubtitle: "הכשרה והסמכות",
        certificatesTitle: "תעודות.",
        certificatesVerify: "לצפייה בתעודה",

        // Testimonials section - Hebrew
        testimonialsSubtitle: "מה אחרים אומרים",
        testimonialsTitle: "המלצות.",
        fullRecommendation: "המלצה חתומה מלאה",

        // Contact section - Hebrew
        contactSubtitle: "בואו נדבר",
        contactTitle: "יצירת קשר.",
        contactName: "שם מלא",
        contactEmail: "כתובת אימייל",
        contactMessage: "תוכן ההודעה",
        contactSend: "שליחה",
        contactSending: "שולח...",
        contactThankYou: "תודה. אחזור אליך בהקדם האפשרי.",
        contactError: "אופס, משהו השתבש. אנא נסה שוב.",
      },

      // Common - Hebrew
      common: {
        loading: "טוען...",
        error: "משהו השתבש",
        retry: "נסה שוב",
      },
    },
  },
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    fallbackLng: "en",
    debug: false, // Set to true for debugging

    // Language detection options
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
      checkWhitelist: true,
    },

    // Whitelist of languages
    supportedLngs: ["en", "he"],

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    // React specific options
    react: {
      useSuspense: false,
    },
  });

export default i18n;
