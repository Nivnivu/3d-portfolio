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
        subtitle: "Web Developer",
      },
      // Hero
      hero: {
        greeting: "Hey, I am",
        name: "Niv",
        description:
          "I develop professional frontend, backend and mobile applications",
        descriptionLine2:
          "As well as various bots, scraping and automation tools.",
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
        botsTitle: "Bots and Automation creator",
        botsCompany: "Bots4All",
        botsDate: "Dec 2023 - Present",
        botsPoints: [
          "As a freelancer specializing in automation I create advanced bots for Telegram, WhatsApp, Binance, and more.",
          "My expertise includes developing tailored scraping bots and various automation solutions,",
          "efficiently streamlining digital tasks for diverse needs.",
        ],
        fullStackTitle: "Full-Stack intern",
        zipyCompany: "Zipy",
        zipyDate: "Jan 2023 - Dec 2023",
        zipyPoints: [
          "Developing and maintaining web applications using React.js and other related technologies.",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "Learning from the best, about best practices related to programing and newer framewroks and laiberies",
          "Thinking about efficency of both server and client side.",
        ],
        studentTitle: "Full-Stack Student",
        svCompany: "Sv-college",
        svDate: "June 2022 - Jan 2023",
        svPoints: [
          "As i wanted to get stronger foundation in react,",
          "I signed up into a physical college to imporve my skills",
          "I Got a final grade of 85 points of 100",
          "With this grade the college sent me to an internship.",
        ],
        selfTaughtTitle: "Self taught student",
        udemyCompany: "Udemy/Coursera",
        selfTaughtDate1: "April 2022 - July 2023",
        selfTaughtPoints1: [
          "Getting in to Javascript in full power",
          "Finding the best online courses in full-stack",
          "Mastering the class and making note and code examples of each lesson.",
          "Participating in code reviews and providing constructive feedback to other developers.",
        ],
        courseraCompany: "Udemy/Coursera",
        selfTaughtDate2: "March 2021 - April 2022",
        selfTaughtPoints2: [
          "Iv'e started learning math related to data analytics and computer science,",
          "Topics like- linear algebra, Discrete mathematics, Calculus, Probabilty and Statistics.",
          "Math Gave me a good understanding of concepts used in programing.",
          "With this base i started learning Python, data structures and data manipulation.",
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
        stealthTitle: "Stealth Telegram Extractor",
        stealthDesc:
          "This tool is a highly efficient Telegram scraper capable of extracting data from private and closed groups undetected. It's designed to avoid blocks and bans, ensuring continuous operation and reliability. Ideal for users needing deep insights from Telegram's exclusive channels without compromising speed or data integrity.",
        crossPlatformTitle: "Cross-Platform Dispatche",
        crossPlatformDesc:
          "Cross-Platform Dispatcher is an API that instantly relays messages from a Telegram channel to Facebook, WhatsApp, and X (the new Twitter). This tool simplifies multi-platform engagement, ensuring messages are uniformly distributed across key social networks, enhancing reach and connectivity with ease. Ideal for seamless digital communication strategies.",
        disneyTitle: "Disney+ Clone",
        disneyDesc:
          "Disney+ Clone with CRUD API functions. Experminting GQL the fastes DB",
        whatsappTitle: "Whatsapp-GPT",
        whatsappDesc:
          "Using OpenAI API and Whatsapp.web.js i can tweek response from chatgpt and talk to him in a whatsapp conversation.",
        cryptoTitle: "Crypto Predictions",
        cryptoDesc:
          "Scraping, manipulating, arranging and making statistics about top crypo curncies.",
        portfolioTitle: "First Portfolio",
        portfolioDesc: "My first ever portfolio",
        pacmanTitle: "Pac-Man Game",
        pacmanDesc:
          "A great and simple version of Pac-Man made with the basics",
        movieTitle: "MovieLand",
        movieDesc:
          "An API app connected to movies api, giving data for any commerical movie.",
        pongTitle: "Pong Game",
        pongDesc: "Old school good old pong",
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
          "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories some have live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",

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
        work: "עבודה",
        contact: "צור קשר",
        projects: "פרויקטים",
        experience: "ניסיון",
      },
      // Header - Hebrew
      header: {
        title: "ניב",
        subtitle: "מפתח אתרים",
      },
      // Hero - Hebrew
      hero: {
        greeting: "היי, אני",
        name: "ניב",
        description: "אני מפתח אפליקציות חזית, שרת ומובייל מקצועיות",
        descriptionLine2: "כמו גם בוטים שונים, כלי גריפה ואוטומציה.",
      },
      // Services - Hebrew
      services: {
        frontend: "מפתח חזית",
        backend: "מפתח שרת",
        bots: "מפתח בוטים ואוטומציה",
        mobile: "מפתח אפליקציות נייד",
      },
      // Technologies - Hebrew
      technologies: {
        html: "HTML 5",
        css: "CSS 3",
        javascript: "ג'אווה סקריפט",
        typescript: "טייפ סקריפט",
        python: "פייתון",
        react: "ריאקט JS",
        redux: "Redux Toolkit",
        tailwind: "Tailwind CSS",
        nodejs: "Node JS",
        mongodb: "MongoDB",
        threejs: "Three JS",
        git: "git",
      },
      // Experience - Hebrew
      experience: {
        current: "היום",
        botsTitle: "יוצר בוטים ואוטומציה",
        botsCompany: "Bots4All",
        botsDate: "דצמבר 2023 - היום",
        botsPoints: [
          "כפרילנסר המתמחה באוטומציה אני יוצר בוטים מתקדמים לטלגרם, וואטסאפ, בינאנס ועוד.",
          "המומחיות שלי כוללת פיתוח בוטי גריפה מותאמים ופתרונות אוטומציה שונים,",
          "יעול יעיל של משימות דיגיטליות לצרכים מגוונים.",
        ],
        fullStackTitle: "מתמחה פול-סטאק",
        zipyCompany: "Zipy",
        zipyDate: "ינואר 2023 - דצמבר 2023",
        zipyPoints: [
          "פיתוח ותחזוקה של אפליקציות אינטרנט באמצעות React.js וטכנולוגיות קשורות אחרות.",
          "שיתוף פעולה עם צוותים רב-תחומיים כולל מעצבים, מנהלי מוצר ומפתחים אחרים ליצירת מוצרים איכותיים.",
          "למידה מהטובים ביותר, על שיטות עבודה מתקדמות הקשורות לתכנות ופריימוורקים וספריות חדשות יותר",
          "חשיבה על יעילות של צד השרת וצד הלקוח.",
        ],
        studentTitle: "סטודנט פול-סטאק",
        svCompany: "מכללת אס-וי",
        svDate: "יוני 2022 - ינואר 2023",
        svPoints: [
          "כיוון שרציתי לקבל בסיס חזק יותר בריאקט,",
          "נרשמתי למכללה פיזית כדי לשפר את הכישורים שלי",
          "קיבלתי ציון סופי של 85 נקודות מתוך 100",
          "עם הציון הזה המכללה שלחה אותי להתמחות.",
        ],
        selfTaughtTitle: "סטודנט אוטודידקט",
        udemyCompany: "Udemy/Coursera",
        selfTaughtDate1: "אפריל 2022 - יולי 2023",
        selfTaughtPoints1: [
          "כניסה לג'אווהסקריפט בכוח מלא",
          "מציאת הקורסים הטובים ביותר באינטרנט בפול-סטאק",
          "שליטה בשיעור ויצירת הערות ודוגמאות קוד של כל שיעור.",
          "השתתפות בביקורות קוד ומתן משוב בונה למפתחים אחרים.",
        ],
        courseraCompany: "Udemy/Coursera",
        selfTaughtDate2: "מרץ 2021 - אפריל 2022",
        selfTaughtPoints2: [
          "התחלתי ללמוד מתמטיקה הקשורה לאנליטיקת נתונים ומדעי המחשב,",
          "נושאים כמו- אלגברה לינארית, מתמטיקה דיסקרטית, חשבון אינפיניטסימלי, הסתברות וסטטיסטיקה.",
          "מתמטיקה נתנה לי הבנה טובה של מושגים המשמשים בתכנות.",
          "עם הבסיס הזה התחלתי ללמוד פייתון, מבני נתונים ומניפולציית נתונים.",
        ],
      },
      // Testimonials - Hebrew
      testimonials: [
        {
          text: "תלמיד מצטיין שהפגין באופן עקבי כישרון יוצא דופן ומסירות. בעל ביצועים גבוהים עם כבוד A+. מומלץ בחום.",
          name: "יניב אלמוג",
          designation: "מורה",
          company: "מכללת אס-וי",
        },
        {
          text: "היה לי העונג לעבוד עם ניב. הוא להוט ללמוד כישורים וטכנולוגיות חדשות. הוא גם שחקן צוות מעולה שמתקשר היטב ומשתף פעולה ביעילות עם מפתחים אחרים. אני ממליץ בחום על ניב לכל תפקיד פיתוח חזית",
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
        stealthTitle: "מחלץ טלגרם חמקמק",
        stealthDesc:
          "כלי זה הוא גורד טלגרם יעיל ביותר המסוגל לחלץ נתונים מקבוצות פרטיות וסגורות ללא זיהוי. הוא מתוכנן למנוע חסימות ואסימות, מה שמבטיח פעולה רציפה ואמינות. אידיאלי למשתמשים הזקוקים לתובנות עמוקות מערוצי הטלגרם הבלעדיים מבלי להתפשר על מהירות או שלמות נתונים.",
        crossPlatformTitle: "מפיץ רב-פלטפורמי",
        crossPlatformDesc:
          "מפיץ רב-פלטפורמי הוא API המעביר הודעות מיידית מערוץ טלגרם לפייסבוק, וואטסאפ ו-X (הטוויטר החדש). כלי זה מפשט מעורבות רב-פלטפורמית, מבטיח הפצה אחידה של הודעות ברשתות חברתיות מרכזיות, משפר הגעה וקישוריות בקלות. אידיאלי לאסטרטגיות תקשורת דיגיטלית חלקה.",
        disneyTitle: "שיבוט דיסני+",
        disneyDesc:
          "שיבוט דיסני+ עם פונקציות CRUD API. ניסוי ב-GQL מסד הנתונים המהיר ביותר",
        whatsappTitle: "וואטסאפ-GPT",
        whatsappDesc:
          "באמצעות OpenAI API ו-Whatsapp.web.js אני יכול לכוונן תגובה מ-chatgpt ולדבר איתו בשיחת וואטסאפ.",
        cryptoTitle: "תחזיות קריפטו",
        cryptoDesc:
          "גריפה, מניפולציה, סידור ויצירת סטטיסטיקות על מטבעות קריפטו מובילים.",
        portfolioTitle: "תיק העבודות הראשון",
        portfolioDesc: "תיק העבודות הראשון שלי אי פעם",
        pacmanTitle: "משחק פק-מן",
        pacmanDesc: "גרסה נהדרת ופשוטה של פק-מן עשויה עם הבסיס",
        movieTitle: "ארץ הסרטים",
        movieDesc:
          "אפליקציית API המחוברת ל-API של סרטים, מספקת נתונים לכל סרט מסחרי.",
        pongTitle: "משחק פונג",
        pongDesc: "פונג טוב מהבית הספר הישן",
      },
      // Certificates - Hebrew
      certificates: {
        fullStack: "פיתוח פול-סטאק",
        bootcamp: "בוטקמפ פול-סטאק",
        python: "פייתון לכולם עם הצטיינות",
        dataScience: "כישורי מתמטיקה למדעי הנתונים",
        webDesign: "עיצוב אתרים רספונסיבי",
        selfPy: "Self.py",
        pythonCert: "פייתון",
        webDev: "פיתוח אתרים",
        sql: "SQL",
      },
      // Section headers and common UI - Hebrew
      sections: {
        // About section - Hebrew
        aboutSubtitle: "היכרות",
        aboutTitle: "סקירה כללית.",
        aboutDescription:
          "התשוקה שלי לפיתוח התחילה בגיל שמונה, כשהתעסקתי עם HTML ו-CSS ליצירת חתימות מותאמות אישית לפורומים. הסקרנות המוקדמת הזו צמחה במהירות, והוביל אותי לבנות את האתר הראשון שלי בגיל תשע ולפתח תוספי WordPress מותאמים אישית עם PHP כנער. בארבע השנים האחרונות, תיעלתי את התשוקה הזו לקריירה מקצועית בפול-סטאק. שיפרתי את הכישורים שלי ב-Zipy, פלטפורמת e-commerce גלובלית, לפני שעברתי ל-bots4all ו-apps4all, שם תכננתי כלי אוטומציה ובניתי אפליקציות אינטרנט ומובייל מלאות באמצעות טכנולוגיות מודרניות כמו Next.js, TypeScript ו-React Native. המומחיות העמוקה שלי הן בפייתון והן בג'אווהסקריפט מאפשרת לי לספק פתרונות רב-תכליתיים וחזקים.",

        // Experience section - Hebrew
        experienceSubtitle: "מה עשיתי עד כה",
        experienceTitle: "ניסיון תעסוקתי.",

        // Projects section - Hebrew
        projectsSubtitle: "העבודה שלי",
        projectsTitle: "פרויקטים.",
        projectsDescription:
          "הפרויקטים הבאים מציגים את הכישורים והניסיון שלי דרך דוגמאות מהעולם האמיתי של העבודה שלי. כל פרויקט מתואר בקצרה עם קישורים למאגרי קוד וחלק כוללים הדגמות חיות בו. זה משקף את היכולת שלי לפתור בעיות מורכבות, לעבוד עם טכנולוגיות שונות ולנהל פרויקטים ביעילות.",

        // Certificates section - Hebrew
        certificatesSubtitle: "הלימודים שלי",
        certificatesTitle: "תעודות.",
        certificatesVerify: "לחץ לאימות",

        // Testimonials section - Hebrew
        testimonialsSubtitle: "מה אחרים אומרים",
        testimonialsTitle: "המלצות.",
        fullRecommendation: "המלצה חתומה מלאה",

        // Contact section - Hebrew
        contactSubtitle: "צור קשר",
        contactTitle: "יצירת קשר.",
        contactName: "השם שלך",
        contactEmail: "האימייל שלך",
        contactMessage: "ההודעה שלך",
        contactSend: "שלח",
        contactSending: "שולח...",
        contactThankYou: "תודה. אחזור אליך בהקדם האפשרי.",
        contactError: "אה, משהו השתבש. אנא נסה שוב.",
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
