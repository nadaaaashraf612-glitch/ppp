export type Lang = "en" | "ar";

export interface NavItem {
  id: string;
  label: string;
}

export interface TitleCopy {
  title: string;
  copy: string;
}

export interface Project {
  title: string;
  url: string;
  note?: string;
  category: "website" | "app";
  image?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface ContentShape {
  meta: { title: string; description: string };
  nav: { studioLine: string; menuClose: string; langSwitch: string };
  sectionIndex: NavItem[];
  cover: {
    badge: string;
    tagline: string;
    motto: string;
    tags: string;
    scroll: string;
    website: string;
  };
  about: {
    kicker: string;
    heading: string;
    paragraphs: string[];
  };
  numbers: {
    kicker: string;
    heading: string;
    stats: { value: string; label: string }[];
  };
  vision: {
    kicker: string;
    visionTitle: string;
    visionCopy: string;
    missionTitle: string;
    missionCopy: string;
    equationParts: string[];
    equationResult: string;
  };
  beliefs: { kicker: string; heading: string; items: TitleCopy[] };
  values: { kicker: string; heading: string; items: TitleCopy[] };
  services: {
    kicker: string;
    heading: string;
    items: { no: string; title: string; copy: string; tags: string[] }[];
  };
  process: { kicker: string; heading: string; steps: { no: string; title: string; copy: string }[] };
  approach: { kicker: string; heading: string; items: TitleCopy[] };
  expertise: { kicker: string; heading: string; groups: { group: string; items: string[] }[] };
  industries: { kicker: string; heading: string; items: string[]; copy: string };
  projects: {
    kicker: string;
    heading: string;
    subheading: string;
    items: Project[];
    websitesLabel: string;
    appsLabel: string;
  };
  stories: {
    kicker: string;
    heading: string;
    items: { title: string; copy: string; closing?: string }[];
  };
  why: { kicker: string; heading: string; items: TitleCopy[] };
  partner: {
    kicker: string;
    heading: string;
    copy: string;
    equationParts: string[];
    equationResult: string;
    qualityKicker: string;
    qualityHeading: string;
    qualityCopy: string;
    qualityTags: string[];
  };
  future: {
    kicker: string;
    heading: string;
    items: TitleCopy[];
    partnershipsKicker: string;
    partnershipsHeading: string;
    partnershipsCopy: string;
    testimonialsKicker: string;
    testimonialsHeading: string;
    testimonials: Testimonial[];
  };
  impact: { lines: string[]; joiner: string; final: string };
  cta: { kicker: string; heading: string; copy: string; button: string };
  contact: {
    kicker: string;
    heading: string;
    subheading: string;
    emailLabel: string;
    email: string;
    phoneLabel: string;
    phones: string[];
    websiteLabel: string;
    website: string;
    ourWorkLabel: string;
    ourWorkUrl: string;
    socialLabel: string;
    social: { name: string; handle: string; url: string }[];
    bankTitle: string;
    bankSubtitle: string;
    bankFields: { label: string; value: string }[];
    footerLine: string;
    rights: string;
  };
  closing: { tagline: string; studioLine: string; website: string; thankYou: string };
}

const sectionIndexEn: NavItem[] = [
  { id: "cover", label: "Cover" },
  { id: "about", label: "About Us" },
  { id: "numbers", label: "By the Numbers" },
  { id: "vision", label: "Vision & Mission" },
  { id: "beliefs", label: "What We Believe" },
  { id: "values", label: "Our Values" },
  { id: "services", label: "Our Services" },
  { id: "process", label: "How We Work" },
  { id: "approach", label: "Our Approach" },
  { id: "expertise", label: "Capabilities" },
  { id: "industries", label: "Industries" },
  { id: "projects", label: "Our Work" },
  { id: "stories", label: "Project Spotlights" },
  { id: "why", label: "Why PUIUX" },
  { id: "partner", label: "Partner & Quality" },
  { id: "future", label: "Looking Ahead" },
  { id: "contact", label: "Contact" },
];

const sectionIndexAr: NavItem[] = [
  { id: "cover", label: "الغلاف" },
  { id: "about", label: "من نحن" },
  { id: "numbers", label: "بالأرقام" },
  { id: "vision", label: "رؤيتنا ورسالتنا" },
  { id: "beliefs", label: "ما نؤمن به" },
  { id: "values", label: "قيمنا" },
  { id: "services", label: "خدماتنا" },
  { id: "process", label: "كيف نعمل" },
  { id: "approach", label: "منهجيتنا" },
  { id: "expertise", label: "قدراتنا" },
  { id: "industries", label: "القطاعات" },
  { id: "projects", label: "أعمالنا" },
  { id: "stories", label: "قصص من أعمالنا" },
  { id: "why", label: "لماذا PUIUX" },
  { id: "partner", label: "شريك وجودة" },
  { id: "future", label: "نحو المستقبل" },
  { id: "contact", label: "تواصل معنا" },
];

const projects: Project[] = [
  { title: "Green Dimensions", url: "puiux.org/green_dinemtions/", category: "website", image: "/images/projects/green-dimensions.jpg" },
  { title: "AL-Othaim", url: "othaim.puiux.org", category: "website", image: "/images/projects/al-othaim.jpg" },
  { title: "Nawan", url: "nawan.co/ar", category: "website", image: "/images/projects/nawan.jpg" },
  { title: "Riyadati", url: "riyadati.puiux.org", category: "website", image: "/images/projects/riyadati.jpg" },
  { title: "Fawq", url: "fawq.puiux.org", category: "website", image: "/images/projects/fawq.jpg" },
  { title: "Bdaya", url: "bdaya.puiux.org", category: "website", image: "/images/projects/bdaya.jpg" },
  { title: "Ghaim", url: "ghiam.puiux.org/ar/", category: "website", image: "/images/projects/ghaim.jpg" },
  { title: "Drizoro", url: "drizoro.puiux.org", category: "website", image: "/images/projects/drizoro.jpg" },
  { title: "Rosokh", url: "rosokh.org.sa", category: "website" },
  { title: "Go Ahead", url: "goahead.puiux.org", category: "website" },
  { title: "Ahbahgirls", url: "a7bahgirls.com", category: "website" },
  { title: "Al-Malhim", url: "almalhim.com/ar", category: "website" },
  { title: "SKY", url: "skys.sa/ar", category: "website" },
  { title: "Al-Bir Charity Society — Yanbu", url: "beryanbu.org.sa", category: "website" },
  { title: "Al-Bir Charity Society — Al-Ras", url: "per-alras.org.sa", category: "website" },
  { title: "Merowe", url: "merowe.co", category: "website" },
  { title: "Iran Hajj Pilgrims Mutawifs", url: "ipmc.puiux.org/ar", category: "website" },
  { title: "Manasek", url: "manasek.puiux.org/en", category: "website" },
  { title: "A PLUS", url: "aplus.puiux.org", category: "website" },
  { title: "AMS", url: "ams.puiux.org", category: "website" },
  { title: "Sana", url: "puiux.org/sana/", category: "website" },
  { title: "Saudi Electronic University", url: "seu.puiux.org", category: "website" },
  { title: "GTEL", url: "gtel.puiux.org", category: "website" },
  { title: "Sfoof App", url: "app-1-eta-ruddy.vercel.app", category: "app", image: "/images/projects/sfoof.jpg" },
  { title: "AL-Ezbah App", url: "azbah-preview.vercel.app", category: "app", image: "/images/projects/al-ezbah.jpg" },
  { title: "My Coach App", url: "mycoach-1ce80b56.puiux.live", category: "app", image: "/images/projects/mycoach.jpg" },
  { title: "Ithraa Al-Tafawoq App", url: "ithraa-eltafawoq-app.vercel.app", category: "app" },
];

const projectsAr: Project[] = [
  { title: "الأبعاد الخضراء", url: "puiux.org/green_dinemtions/", category: "website", image: "/images/projects/green-dimensions.jpg" },
  { title: "العثيم", url: "othaim.puiux.org", category: "website", image: "/images/projects/al-othaim.jpg" },
  { title: "ناوان", url: "nawan.co/ar", category: "website", image: "/images/projects/nawan.jpg" },
  { title: "رياضتى", url: "riyadati.puiux.org", category: "website", image: "/images/projects/riyadati.jpg" },
  { title: "فوق", url: "fawq.puiux.org", category: "website", image: "/images/projects/fawq.jpg" },
  { title: "بداية", url: "bdaya.puiux.org", category: "website", image: "/images/projects/bdaya.jpg" },
  { title: "غيم", url: "ghiam.puiux.org/ar/", category: "website", image: "/images/projects/ghaim.jpg" },
  { title: "درايزورو", url: "drizoro.puiux.org", category: "website", image: "/images/projects/drizoro.jpg" },
  { title: "رسوخ", url: "rosokh.org.sa", category: "website" },
  { title: "جو أهيد", url: "goahead.puiux.org", category: "website" },
  { title: "بنات الأحبة", url: "a7bahgirls.com", category: "website" },
  { title: "أل ملحم", url: "almalhim.com/ar", category: "website" },
  { title: "سكاى", url: "skys.sa/ar", category: "website" },
  { title: "جمعية البر بينبع", url: "beryanbu.org.sa", category: "website" },
  { title: "جمعية البر الأهلية بالرس", url: "per-alras.org.sa", category: "website" },
  { title: "مروى", url: "merowe.co", category: "website" },
  { title: "مطوفى حجاج ايران", url: "ipmc.puiux.org/ar", category: "website" },
  { title: "مناسك المشاعر", url: "manasek.puiux.org/en", category: "website" },
  { title: "A+", url: "aplus.puiux.org", category: "website" },
  { title: "AMS", url: "ams.puiux.org", category: "website" },
  { title: "سنا", url: "puiux.org/sana/", category: "website" },
  { title: "الجامعة الالكترونية السعودية", url: "seu.puiux.org", category: "website" },
  { title: "GTEL", url: "gtel.puiux.org", category: "website" },
  { title: "تطبيق صفوف", url: "app-1-eta-ruddy.vercel.app", category: "app", image: "/images/projects/sfoof.jpg" },
  { title: "تطبيق العزبة", url: "azbah-preview.vercel.app", category: "app", image: "/images/projects/al-ezbah.jpg" },
  { title: "تطبيق ماى كوتش", url: "mycoach-1ce80b56.puiux.live", category: "app", image: "/images/projects/mycoach.jpg" },
  { title: "تطبيق اثراء التفوق", url: "ithraa-eltafawoq-app.vercel.app", category: "app" },
];

export const content: Record<Lang, ContentShape> = {
  en: {
    meta: {
      title: "PUIUX — Web / Apps Solutions | Company Profile",
      description:
        "PUIUX is a digital solutions company specializing in UI/UX design, web & mobile development, e-commerce, SaaS platforms, AI and custom software.",
    },
    nav: { studioLine: "Web / Apps Solutions", menuClose: "Close", langSwitch: "العربية" },
    sectionIndex: sectionIndexEn,
    cover: {
      badge: "Company Profile",
      tagline: "Web / Apps Solutions",
      motto: "Don't Repeat. Be Unique.",
      tags: "UI/UX · Web · Mobile · E-Commerce · SaaS · AI",
      scroll: "Scroll",
      website: "www.puiux.com",
    },
    about: {
      kicker: "About Us",
      heading: "About PUIUX",
      paragraphs: [
        "PUIUX is a digital solutions company specializing in the design and development of websites, mobile applications, digital platforms, and custom software.",
        "We bring together design, technology, and business understanding to create digital experiences that are purposeful, scalable, and built around real user needs.",
        "Since our launch, we have delivered a diverse range of digital projects across multiple industries, combining strong visual experiences with reliable technology and practical business solutions.",
        "We believe great digital products do not begin with code. They begin with understanding the problem, the people, and the goals behind it.",
      ],
    },
    numbers: {
      kicker: "PUIUX by the Numbers",
      heading: "Experience That Speaks Through Results",
      stats: [
        { value: "+3,000", label: "Projects Delivered" },
        { value: "+50", label: "Specialists" },
        { value: "+10", label: "Years of Experience" },
        { value: "2016", label: "Founded" },
      ],
    },
    vision: {
      kicker: "Vision & Mission",
      visionTitle: "Our Vision",
      visionCopy:
        "To contribute to the evolution of the Arab digital landscape by creating solutions that combine thoughtful design, strong technology, and clear business purpose. We are not driven by the goal of simply creating more digital products. We aim to create better ones — smarter, more meaningful, and capable of making a real difference.",
      missionTitle: "Our Mission",
      missionCopy:
        "To transform business ideas and challenges into practical digital products and experiences that are intuitive, scalable, and built on strong design and technology foundations.",
      equationParts: ["Business Goals", "User Needs", "Technology"],
      equationResult: "Meaningful Digital Solutions",
    },
    beliefs: {
      kicker: "What We Believe",
      heading: "The principles behind every product",
      items: [
        { title: "Design Should Have Purpose", copy: "Design is more than visual appeal. It is a tool for solving problems, improving experiences, and achieving meaningful outcomes." },
        { title: "Technology Should Simplify", copy: "The best technology makes processes easier, products more efficient, and experiences more seamless." },
        { title: "Every Project Is Different", copy: "We do not believe in one-size-fits-all solutions. Every project has its own audience, challenges, and ambitions." },
        { title: "Details Make the Difference", copy: "Great experiences are built through the details. Small decisions often create the biggest difference." },
        { title: "Launch Is Only the Beginning", copy: "A digital product should continue to evolve. We see launch as the starting point for continuous improvement." },
      ],
    },
    values: {
      kicker: "Our Values",
      heading: "What drives the way we work",
      items: [
        { title: "Precision", copy: "We believe professionalism lives in the details. Accuracy and attention to detail guide every stage of our work." },
        { title: "Uniqueness", copy: "We create solutions with character rather than repeating familiar patterns." },
        { title: "Collaboration", copy: "Different perspectives create stronger ideas. We bring disciplines together to build better outcomes." },
        { title: "Continuous Innovation", copy: "Technology never stands still, and neither do we. We continuously evolve our skills, tools, and ways of thinking." },
        { title: "Ownership", copy: "We take responsibility for the work we deliver and stay focused on the goals behind every project." },
      ],
    },
    services: {
      kicker: "Our Services",
      heading: "What We Do",
      items: [
        { no: "01", title: "UI / UX Design", copy: "We design digital experiences around real user needs and business objectives, transforming complex requirements into intuitive and engaging interfaces.", tags: ["UX Strategy", "User Flows", "Wireframes", "UI Design", "Prototyping", "Design Systems", "Responsive Design"] },
        { no: "02", title: "Web Development", copy: "We build high-quality websites and web platforms designed for performance, flexibility, usability, and long-term growth.", tags: ["Corporate Websites", "Web Platforms", "Web Applications", "Portals", "Custom Web Solutions", "Dashboards"] },
        { no: "03", title: "Mobile Applications", copy: "We turn ideas into seamless mobile experiences designed to meet the needs of modern users and businesses.", tags: ["iOS", "Android", "Cross-platform", "API Integration", "Payment Integration", "Notifications"] },
        { no: "04", title: "E-Commerce", copy: "We create digital commerce experiences that help brands connect with customers, manage operations, and grow their online business.", tags: ["Online Stores", "Multi-vendor Platforms", "Product Management", "Order Management", "Payment Integration", "Customer Experience"] },
        { no: "05", title: "SaaS & Digital Platforms", copy: "We develop scalable digital platforms and SaaS products built around business needs and designed to grow with their users.", tags: ["SaaS Platforms", "Subscription Systems", "Multi-role Platforms", "Customer Portals", "Business Dashboards", "Digital Management Systems"] },
        { no: "06", title: "Custom Software", copy: "We develop tailored software solutions around the way each organization actually works, rather than forcing businesses into rigid off-the-shelf systems.", tags: ["Business Systems", "Management Systems", "Admin Panels", "APIs", "Integrations", "Workflow Solutions"] },
        { no: "07", title: "AI & Automation", copy: "We integrate AI and automation into digital products and business processes to create smarter experiences and more efficient workflows.", tags: ["AI-powered Features", "AI Assistants", "Intelligent Workflows", "Automation", "AI Integration"] },
        { no: "08", title: "Graphic Design", copy: "We create visual solutions that help brands build a consistent and recognizable presence across their digital touchpoints.", tags: ["Visual Identity", "Digital Branding", "Marketing Materials", "Social Media Design", "Graphic Design"] },
      ],
    },
    process: {
      kicker: "How We Work",
      heading: "From Idea to Product",
      steps: [
        { no: "01", title: "Discover", copy: "We understand the idea, the business context, the users, and the challenges that need to be solved." },
        { no: "02", title: "Define", copy: "We establish the project scope, priorities, requirements, and desired outcomes." },
        { no: "03", title: "Design", copy: "We translate requirements into a clear digital experience through structured user flows and purposeful interfaces." },
        { no: "04", title: "Build", copy: "We bring the experience to life through development, integrations, and the technologies required by the product." },
        { no: "05", title: "Test", copy: "We validate functionality, usability, performance, and overall product quality." },
        { no: "06", title: "Launch", copy: "We prepare the product for release and support its transition into real-world use." },
        { no: "07", title: "Evolve", copy: "We continue improving the product as business needs, users, and opportunities evolve." },
      ],
    },
    approach: {
      kicker: "Our Approach",
      heading: "The principles behind our methodology",
      items: [
        { title: "User-Centered", copy: "We start with people — understanding their needs, behaviors, and expectations." },
        { title: "Business-Oriented", copy: "Every design and technology decision should contribute to a clear business objective." },
        { title: "Scalable", copy: "We build with the future in mind, creating products that can grow alongside the business." },
        { title: "Quality-Driven", copy: "From usability and performance to technical stability, quality remains part of every stage." },
        { title: "Long-Term Mindset", copy: "We see digital products as evolving ecosystems, not one-time deliverables." },
      ],
    },
    expertise: {
      kicker: "Technology Capabilities",
      heading: "The tools and technologies we work with",
      groups: [
        { group: "Front-end", items: ["React", "Next.js", "HTML", "CSS", "JavaScript"] },
        { group: "Mobile", items: ["Flutter", "React Native", "Swift", "Kotlin"] },
        { group: "Back-end", items: ["Node.js", "Laravel", ".NET"] },
        { group: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
        { group: "Design", items: ["Figma", "Adobe Creative Cloud"] },
        { group: "Integrations", items: ["APIs", "Payment Gateways", "Third-party Integrations", "Cloud Solutions"] },
      ],
    },
    industries: {
      kicker: "Industries We Serve",
      heading: "Experience across industries",
      items: ["Real Estate", "Healthcare", "Education", "Hospitality", "Travel & Tourism", "Food & Beverage", "Industrial", "E-Commerce", "Corporate", "Government & Non-profit", "Technology", "Professional Services"],
      copy: "Working across different industries has given us the perspective to understand diverse business models, audiences, and challenges. From Real Estate to Healthcare, from Education to Travel & Hospitality, and from E-Commerce to Corporate and Government Solutions. This diversity allows us to approach every project on its own terms rather than relying on a predefined formula.",
    },
    projects: {
      kicker: "Our Work",
      heading: "PUIUX Projects",
      subheading:
        "We are proud to have worked with official entities and leading organizations across different industries, contributing to their digital experiences and solutions.",
      items: projects,
      websitesLabel: "Websites",
      appsLabel: "Applications",
    },
    stories: {
      kicker: "Project Spotlights",
      heading: "Stories from our work",
      items: [
        {
          title: "Bidaya",
          copy: "Driven by our belief in the importance of working across diverse fields, healthcare has been one of the areas we have explored, including addiction treatment services. For Bidaya, we designed a digital experience that reflects the nature of the organization while creating a distinctive and purposeful online presence.",
          closing: "And that is exactly what we set out to achieve.",
        },
        {
          title: "Tatweer",
          copy: "Education has always been an important area for us because of its ability to create meaningful and lasting value within communities. Tatweer was one of the Omani platforms we worked on, with the goal of creating a distinctive digital experience with broader social value.",
        },
      ],
    },
    why: {
      kicker: "Why PUIUX?",
      heading: "What sets us apart",
      items: [
        { title: "Because We Don't Build One Solution for Everyone", copy: "Every project has its own goals, users, and challenges. We start with understanding before execution." },
        { title: "Because Design and Technology Belong Together", copy: "We connect design thinking with engineering to create products that are both beautiful and functional." },
        { title: "Because We Think Beyond the Product", copy: "We consider the business goals behind the product, not just its technical requirements." },
        { title: "Because Details Matter", copy: "We care about every stage and every interaction that shapes the final experience." },
        { title: "Because We Build for What's Next", copy: "We consider scalability and future growth from the very beginning." },
      ],
    },
    partner: {
      kicker: "More Than a Service Provider",
      heading: "Your Digital Transformation Partner",
      copy: "We are more than a team that simply executes requirements. We work alongside our clients to understand the challenge, shape the solution, design the experience, build the product, and help it evolve over time.",
      equationParts: ["Strategy", "Design", "Technology", "Business Understanding"],
      equationResult: "Digital Product",
      qualityKicker: "Quality at Every Stage",
      qualityHeading: "Quality at Every Stage",
      qualityCopy: "We make quality part of the entire product journey — from the first requirement to the post-launch phase.",
      qualityTags: ["User Experience", "Responsive Design", "Performance", "Scalability", "Testing", "Integration", "Technical Quality", "Continuous Improvement"],
    },
    future: {
      kicker: "Looking Ahead",
      heading: "Technology Changes. So Do We.",
      items: [
        { title: "Artificial Intelligence", copy: "Embedding AI capabilities into products and workflows to create smarter digital experiences." },
        { title: "Automation", copy: "Turning repetitive processes into streamlined and efficient workflows." },
        { title: "Digital Products", copy: "Building user-focused products designed for continuous growth and improvement." },
        { title: "Digital Transformation", copy: "Helping organizations move from traditional processes toward more efficient digital ecosystems." },
        { title: "Scalable Platforms", copy: "Creating systems and platforms capable of evolving alongside businesses and their users." },
      ],
      partnershipsKicker: "Our Partnerships",
      partnershipsHeading: "Trust Built Over Time",
      partnershipsCopy:
        "We value the trust our clients place in us and the relationships that grow beyond individual projects. For us, success is not measured only by the number of projects delivered, but by the value and lasting impact we create for every client we work with.",
      testimonialsKicker: "Client Testimonials",
      testimonialsHeading: "What Our Clients Say",
      testimonials: [
        { quote: "A highly professional team with an excellent approach to delivering their services.", name: "Mohammed Al-Tamimi", role: "Al-Tamimi Law Firm" },
        { quote: "Your team is creative and ambitious, which encouraged us to continue working with you.", name: "Amer Bin Saleh", role: "Business Development Manager" },
      ],
    },
    impact: {
      lines: ["An idea alone is not enough.", "Design alone is not enough.", "Code alone is not enough."],
      joiner: "Real value happens when they come together:",
      final: "That is where PUIUX begins.",
    },
    cta: {
      kicker: "Have an Idea?",
      heading: "Let's Make It Digital.",
      copy: "Whether you are starting with a new idea, evolving an existing product, or looking for a technology partner for your next project, we start by understanding what you need and turn it into a digital solution built for execution and growth.",
      button: "Start Your Project",
    },
    contact: {
      kicker: "Contact Us",
      heading: "PUIUX",
      subheading: "Web / Apps Solutions",
      emailLabel: "Email",
      email: "Welcome@puiux.com",
      phoneLabel: "Phone",
      phones: ["0544420258", "0966115101667"],
      websiteLabel: "Website",
      website: "Puiux.com",
      ourWorkLabel: "Our Work",
      ourWorkUrl: "https://puiux.com/أعمالنا/",
      socialLabel: "Follow Us",
      social: [
        { name: "Facebook", handle: "PUIUX", url: "https://www.facebook.com/PUIUX" },
        { name: "X (Twitter)", handle: "@PUIUX_Co", url: "https://twitter.com/PUIUX_Co/" },
        { name: "Instagram", handle: "@puiux_co", url: "https://www.instagram.com/puiux_co/" },
        { name: "Behance", handle: "PUIUX", url: "https://www.behance.net/PUIUX" },
      ],
      bankTitle: "Bank Account Details",
      bankSubtitle: "For invoicing and wire transfers",
      bankFields: [
        { label: "Company Name", value: "Capital Tree Company" },
        { label: "Bank", value: "Bank AlJazira" },
        { label: "Account Number", value: "085782223613001" },
        { label: "IBAN", value: "SA2660100085782223613001" },
        { label: "SWIFT Code", value: "BJAZSAJE" },
      ],
      footerLine: "Web / Apps Solutions",
      rights: "All rights reserved.",
    },
    closing: {
      tagline: "Don't Repeat. Be Unique.",
      studioLine: "Web / Apps Solutions",
      website: "www.puiux.com",
      thankYou: "Thank You",
    },
  },
  ar: {
    meta: {
      title: "PUIUX — Web / Apps Solutions | الملف التعريفي للشركة",
      description:
        "PUIUX شركة متخصصة في تصميم وتطوير الحلول الرقمية، تجمع بين التصميم والتقنية وفهم احتياجات الأعمال لبناء تجارب ومنتجات رقمية متكاملة.",
    },
    nav: { studioLine: "Web / Apps Solutions", menuClose: "إغلاق", langSwitch: "English" },
    sectionIndex: sectionIndexAr,
    cover: {
      badge: "الملف التعريفي",
      tagline: "Web / Apps Solutions",
      motto: "لا تكن متكررًا، كن فريدًا.",
      tags: "UI/UX · Web · Mobile · E-Commerce · SaaS · AI",
      scroll: "مرر للأسفل",
      website: "www.puiux.com",
    },
    about: {
      kicker: "من نحن",
      heading: "من نحن",
      paragraphs: [
        "PUIUX شركة متخصصة في تصميم وتطوير الحلول الرقمية، تجمع بين التصميم، التقنية، وفهم احتياجات الأعمال لبناء تجارب ومنتجات رقمية متكاملة.",
        "منذ انطلاقتنا، عملنا على تطوير مجموعة متنوعة من المواقع والتطبيقات والمنصات والأنظمة الرقمية لمختلف القطاعات، مع الحرص على تقديم حلول تجمع بين جودة التصميم، قوة التقنية، وسهولة الاستخدام.",
        "نؤمن أن الحل الرقمي الناجح لا يبدأ بالكود، بل يبدأ بفهم المشكلة، واحتياجات المستخدم، والأهداف التي يسعى العمل إلى تحقيقها.",
        "ومن هنا، نعمل على تحويل الأفكار والتحديات إلى حلول رقمية عملية، واضحة، وقابلة للنمو.",
      ],
    },
    numbers: {
      kicker: "PUIUX بالأرقام",
      heading: "خبرة تُقاس بالأثر",
      stats: [
        { value: "+3,000", label: "مشروع تم تنفيذه" },
        { value: "+50", label: "متخصصًا ضمن فريق العمل" },
        { value: "+10", label: "سنوات من الخبرة" },
        { value: "2016", label: "عام الانطلاقة" },
      ],
    },
    vision: {
      kicker: "رؤيتنا ورسالتنا",
      visionTitle: "رؤيتنا",
      visionCopy:
        "أن نكون جزءًا من تطوير المشهد التقني العربي، من خلال تقديم حلول رقمية تجمع بين جودة التصميم، قوة التقنية، ووضوح الهدف. لا نطمح إلى إنتاج المزيد من الحلول الرقمية فقط، بل إلى إنتاج حلول أفضل، أكثر ذكاءً، وأكثر قدرة على صناعة أثر حقيقي.",
      missionTitle: "رسالتنا",
      missionCopy:
        "تحويل الأفكار والتحديات التجارية إلى منتجات وتجارب رقمية عملية، سهلة الاستخدام، قابلة للتوسع، ومبنية على أسس قوية في التصميم والتقنية.",
      equationParts: ["أهداف الأعمال", "احتياجات المستخدم", "التكنولوجيا"],
      equationResult: "حلول رقمية متكاملة",
    },
    beliefs: {
      kicker: "ما نؤمن به",
      heading: "المبادئ التي تقود كل منتج",
      items: [
        { title: "التصميم له هدف", copy: "التصميم ليس مجرد مظهر بصري؛ بل وسيلة لفهم المشكلات وصناعة تجارب أفضل وتحقيق أهداف واضحة." },
        { title: "التقنية يجب أن تبسّط", copy: "التكنولوجيا الفعالة هي التي تجعل العمليات أكثر سهولة، والمنتجات أكثر كفاءة، والتجارب أكثر وضوحًا." },
        { title: "لكل مشروع هويته", copy: "لا نؤمن بالحلول المكررة. لكل مشروع جمهوره، وتحدياته، وأهدافه، ولذلك يستحق حلًا مصممًا خصيصًا له." },
        { title: "التفاصيل تصنع الفرق", copy: "الجودة لا تتوقف عند الصورة الكبيرة؛ فالتفاصيل الصغيرة هي التي تصنع تجربة متكاملة." },
        { title: "الإطلاق ليس النهاية", copy: "نرى أن إطلاق المنتج هو بداية مرحلة جديدة من التطوير والتحسين، وليس نقطة النهاية." },
      ],
    },
    values: {
      kicker: "قيمنا",
      heading: "ما يوجّه طريقة عملنا",
      items: [
        { title: "الدقة", copy: "نؤمن أن الدقة هي الفارق بين العمل الجيد والعمل الاحترافي، لذلك نهتم بالتفاصيل في كل مرحلة." },
        { title: "التفرد", copy: "نسعى دائمًا إلى تقديم أعمال تحمل شخصية واضحة وتبتعد عن الحلول التقليدية والمكررة." },
        { title: "العمل الجماعي", copy: "نجمع الخبرات المختلفة للوصول إلى أفكار أفضل ونتائج أكثر تكاملًا." },
        { title: "التجديد المستمر", copy: "نواصل تطوير مهاراتنا وأساليب عملنا لمواكبة التغير المستمر في عالم التقنية." },
        { title: "المسؤولية", copy: "نتعامل مع كل مشروع باعتباره مسؤولية مشتركة، ونحرص على فهم أهدافه والتحديات المرتبطة به." },
      ],
    },
    services: {
      kicker: "خدماتنا",
      heading: "ماذا نقدّم",
      items: [
        { no: "01", title: "UI / UX Design", copy: "نصمم تجارب رقمية تبدأ من فهم المستخدم واحتياجاته، وتتحول إلى واجهات واضحة وسهلة الاستخدام ومتوافقة مع أهداف المشروع.", tags: ["UX Strategy", "User Flows", "Wireframes", "UI Design", "Prototyping", "Design Systems", "Responsive Design"] },
        { no: "02", title: "Web Development", copy: "نطور مواقع ومنصات ويب تجمع بين الأداء، المرونة، سهولة الاستخدام، وقابلية التوسع.", tags: ["Corporate Websites", "Web Platforms", "Web Applications", "Portals", "Custom Web Solutions", "Dashboards"] },
        { no: "03", title: "Mobile Applications", copy: "نحوّل الأفكار إلى تطبيقات رقمية متكاملة تقدم تجربة سلسة ومناسبة لمختلف احتياجات المستخدمين.", tags: ["iOS", "Android", "Cross-platform", "API Integration", "Payment Integration", "Notifications"] },
        { no: "04", title: "E-Commerce", copy: "نبني تجارب تجارة إلكترونية متكاملة تساعد العلامات التجارية على الوصول إلى عملائها وإدارة عمليات البيع بكفاءة.", tags: ["Online Stores", "Multi-vendor Platforms", "Product Management", "Order Management", "Payment Integration", "Customer Experience"] },
        { no: "05", title: "SaaS & Digital Platforms", copy: "نطور منصات رقمية وأنظمة SaaS مصممة لتلبية احتياجات الأعمال المختلفة وقابلة للتوسع مع نمو المستخدمين.", tags: ["SaaS Platforms", "Subscription Systems", "Multi-role Platforms", "Customer Portals", "Business Dashboards", "Digital Management Systems"] },
        { no: "06", title: "Custom Software", copy: "نطور حلولًا برمجية مخصصة وفق العمليات الفعلية لكل مؤسسة، بدل الاعتماد على حلول جاهزة لا تتناسب مع احتياجاتها.", tags: ["Business Systems", "Management Systems", "Admin Panels", "APIs", "Integrations", "Workflow Solutions"] },
        { no: "07", title: "AI & Automation", copy: "نساعد الأعمال على الاستفادة من الذكاء الاصطناعي والأتمتة لتطوير المنتجات وتحسين العمليات ورفع كفاءة التجربة الرقمية.", tags: ["AI-powered Features", "AI Assistants", "Intelligent Workflows", "Automation", "AI Integration"] },
        { no: "08", title: "Graphic Design", copy: "نقدم حلولًا بصرية تساعد العلامات التجارية على بناء حضور متناسق وواضح، بداية من فهم الجمهور وطبيعة النشاط وصولًا إلى التنفيذ البصري.", tags: ["Visual Identity", "Digital Branding", "Marketing Materials", "Social Media Design", "Graphic Design"] },
      ],
    },
    process: {
      kicker: "كيف نعمل؟",
      heading: "من الفكرة إلى المنتج",
      steps: [
        { no: "01", title: "الاستكشاف", copy: "نفهم الفكرة، احتياجات المشروع، المستخدمين، والتحديات التي نحتاج إلى حلها." },
        { no: "02", title: "التعريف", copy: "نحدد نطاق المشروع، الأولويات، المتطلبات، والنتائج المستهدفة." },
        { no: "03", title: "التصميم", copy: "نحوّل المتطلبات إلى تجربة رقمية واضحة من خلال بناء هيكل الاستخدام وتصميم الواجهات." },
        { no: "04", title: "التطوير", copy: "نحوّل التصميم إلى منتج فعلي من خلال البرمجة وربط الأنظمة والتقنيات المطلوبة." },
        { no: "05", title: "الاختبار", copy: "نختبر المنتج والوظائف والتجربة للتأكد من جودة الأداء وسلامة التنفيذ." },
        { no: "06", title: "الإطلاق", copy: "نجهز المنتج للإطلاق ونساعد على انتقاله من مرحلة التطوير إلى الاستخدام الفعلي." },
        { no: "07", title: "التطوير المستمر", copy: "نواصل تطوير المنتج وتحسينه وفق الاحتياجات الجديدة ونتائج الاستخدام." },
      ],
    },
    approach: {
      kicker: "منهجيتنا",
      heading: "المبادئ التي نعتمد عليها",
      items: [
        { title: "User-Centered", copy: "نبدأ من المستخدم واحتياجاته لفهم ما يجعل التجربة أكثر وضوحًا وسهولة." },
        { title: "Business-Oriented", copy: "نربط قرارات التصميم والتطوير بالأهداف الفعلية للمشروع." },
        { title: "Scalable", copy: "نبني الحلول مع التفكير في احتياجات النمو والتوسع المستقبلية." },
        { title: "Quality-Driven", copy: "نهتم بجودة التصميم، الأداء، قابلية الاستخدام، والاستقرار التقني." },
        { title: "Long-Term Mindset", copy: "لا نرى المشروع كعملية تسليم لمرة واحدة، بل كمنتج يمكن تطويره وتحسينه باستمرار." },
      ],
    },
    expertise: {
      kicker: "قدراتنا التقنية",
      heading: "الأدوات والتقنيات التي نعمل بها",
      groups: [
        { group: "Front-end", items: ["React", "Next.js", "HTML", "CSS", "JavaScript"] },
        { group: "Mobile", items: ["Flutter", "React Native", "Swift", "Kotlin"] },
        { group: "Back-end", items: ["Node.js", "Laravel", ".NET"] },
        { group: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
        { group: "Design", items: ["Figma", "Adobe Creative Cloud"] },
        { group: "Integrations", items: ["APIs", "Payment Gateways", "Third-party Integrations", "Cloud Solutions"] },
      ],
    },
    industries: {
      kicker: "القطاعات التي نخدمها",
      heading: "خبراتنا في مجالات متعددة",
      items: ["العقارات", "الرعاية الصحية", "التعليم", "الضيافة", "السفر والسياحة", "الأغذية والمشروبات", "الصناعة", "التجارة الإلكترونية", "الشركات والمؤسسات", "الجهات الحكومية وغير الربحية", "التقنية", "الخدمات المهنية"],
      copy: "تنوع المشاريع يمنحنا القدرة على فهم احتياجات مختلفة والتعامل مع تحديات متعددة. من العقارات إلى الرعاية الصحية، ومن التعليم إلى السفر والضيافة، ومن التجارة الإلكترونية إلى الحلول المؤسسية والحكومية. هذا التنوع يساعدنا على النظر إلى كل مشروع من زاويته الخاصة، بدل الاعتماد على نموذج واحد للجميع.",
    },
    projects: {
      kicker: "أعمالنا",
      heading: "PUIUX PROJECTS",
      subheading: "نفخر بالتعامل مع مجموعة من الجهات الرسمية والشركات الرائدة في مجالاتها، والمشاركة في تطوير تجاربهم وحلولهم الرقمية.",
      items: projectsAr,
      websitesLabel: "المواقع الإلكترونية",
      appsLabel: "التطبيقات",
    },
    stories: {
      kicker: "قصص من أعمالنا",
      heading: "حكايات من رحلتنا",
      items: [
        {
          title: "بداية",
          copy: "إيمانًا منا بأهمية التنوع في الخدمات واتساع نطاقها، كان المجال الطبي من المجالات التي حرصنا على العمل فيها، وبالتحديد مجال معالجة الإدمان. قمنا بتصميم موقع إلكتروني لشريكنا الإبداعي في بداية، مع التركيز على تقديم تجربة رقمية متميزة تعكس طبيعة المشروع وتترجم مبدأ الفرادة الذي نؤمن به.",
          closing: "وهذا ما تم بالفعل.",
        },
        {
          title: "تطور",
          copy: "انطلاقًا من أهمية الجانب العلمي ودوره في تطوير المجتمع، كانت الحلول التعليمية من المجالات التي حظيت باهتمامنا، لما يمكن أن تقدمه من أثر إيجابي ومستدام. كانت منصة تطور إحدى المنصات العُمانية التي قمنا بتنفيذ أعمالها، بهدف تقديم تجربة رقمية مميزة وذات فائدة عامة.",
        },
      ],
    },
    why: {
      kicker: "لماذا PUIUX؟",
      heading: "ما الذي يميّزنا",
      items: [
        { title: "لأننا لا نقدم حلًا واحدًا للجميع", copy: "لكل مشروع أهدافه ومستخدموه وتحدياته، ولذلك نبدأ من الفهم قبل التنفيذ." },
        { title: "لأن التصميم والتقنية يعملان معًا", copy: "نربط بين التفكير التصميمي والهندسة البرمجية للوصول إلى منتج متكامل." },
        { title: "لأننا نفكر في الأعمال", copy: "لا نركز على الجانب التقني فقط، بل نربط الحل بالأهداف التي يسعى المشروع إلى تحقيقها." },
        { title: "لأننا نؤمن بالتفاصيل", copy: "نهتم بكل مرحلة وكل تفصيلة للوصول إلى تجربة أكثر احترافية." },
        { title: "لأننا نبني للمستقبل", copy: "نضع قابلية التطوير والتوسع في الاعتبار منذ البداية." },
      ],
    },
    partner: {
      kicker: "أكثر من مزود خدمة",
      heading: "شريكك في التحول الرقمي",
      copy: "لا نرى أنفسنا كمجرد جهة تنفذ المتطلبات. نعمل كشريك يساعد على فهم المشكلة، صياغة الحل، تصميم التجربة، تطوير المنتج، وإطلاقه وتطويره مع الوقت.",
      equationParts: ["Strategy", "Design", "Technology", "Business Understanding"],
      equationResult: "Digital Product",
      qualityKicker: "الجودة في كل مرحلة",
      qualityHeading: "الجودة في كل مرحلة",
      qualityCopy: "نحرص على أن تكون الجودة جزءًا من دورة العمل كاملة، بداية من فهم المتطلبات وحتى ما بعد الإطلاق.",
      qualityTags: ["User Experience", "Responsive Design", "Performance", "Scalability", "Testing", "Integration", "Technical Quality", "Continuous Improvement"],
    },
    future: {
      kicker: "نحو المستقبل",
      heading: "التقنية تتغير. ونحن نتغير معها.",
      items: [
        { title: "الذكاء الاصطناعي", copy: "دمج تقنيات الذكاء الاصطناعي في المنتجات والعمليات لتقديم تجارب أكثر ذكاءً." },
        { title: "الأتمتة", copy: "تحويل العمليات المتكررة إلى تدفقات عمل أكثر كفاءة." },
        { title: "المنتجات الرقمية", copy: "بناء منتجات رقمية تركز على احتياجات المستخدم وقابلة للتطوير." },
        { title: "التحول الرقمي", copy: "مساعدة المؤسسات على الانتقال من العمليات التقليدية إلى حلول رقمية أكثر كفاءة." },
        { title: "المنصات القابلة للتوسع", copy: "تطوير أنظمة ومنصات يمكنها النمو مع احتياجات الأعمال والمستخدمين." },
      ],
      partnershipsKicker: "شراكاتنا",
      partnershipsHeading: "ثقة تُبنى مع الوقت",
      partnershipsCopy: "نفخر بالثقة التي منحنا إياها عملاؤنا، وبالعلاقات التي تحولت من مشاريع إلى شراكات مستمرة. نؤمن أن نجاحنا الحقيقي لا يقاس فقط بعدد المشاريع التي تم تنفيذها، بل بالقيمة التي نتركها لدى كل عميل نتعامل معه.",
      testimonialsKicker: "آراء عملائنا",
      testimonialsHeading: "ما يقوله عملاؤنا",
      testimonials: [
        { quote: "مستوى عالٍ من الاحترافية في التعامل وتقديم الخدمات.", name: "محمد التميمي", role: "التميمي للمحاماة" },
        { quote: "فريقكم مبدع وطموح، وهذا الأمر حفزنا وشجعنا للتعامل المستمر معكم.", name: "عامر بن صالح", role: "مدير تطوير الأعمال" },
      ],
    },
    impact: {
      lines: ["الفكرة وحدها لا تكفي.", "والتصميم وحده لا يكفي.", "والكود وحده لا يكفي."],
      joiner: "القيمة الحقيقية تظهر عندما تجتمع:",
      final: "وهنا تبدأ PUIUX.",
    },
    cta: {
      kicker: "هل لديك فكرة؟",
      heading: "Let's Make It Digital.",
      copy: "سواء كنت تبدأ من فكرة جديدة، أو تطور منتجًا قائمًا، أو تبحث عن شريك تقني لمشروعك القادم، نبدأ معك من فهم احتياجك ونحوّله إلى حل رقمي قابل للتنفيذ والنمو.",
      button: "ابدأ مشروعك معنا",
    },
    contact: {
      kicker: "تواصل معنا",
      heading: "PUIUX",
      subheading: "Web / Apps Solutions",
      emailLabel: "البريد الإلكتروني",
      email: "Welcome@puiux.com",
      phoneLabel: "الجوال",
      phones: ["0544420258", "0966115101667"],
      websiteLabel: "الموقع الإلكتروني",
      website: "Puiux.com",
      ourWorkLabel: "أعمالنا",
      ourWorkUrl: "https://puiux.com/أعمالنا/",
      socialLabel: "تابعنا",
      social: [
        { name: "فيسبوك", handle: "PUIUX", url: "https://www.facebook.com/PUIUX" },
        { name: "إكس (تويتر)", handle: "@PUIUX_Co", url: "https://twitter.com/PUIUX_Co/" },
        { name: "إنستغرام", handle: "@puiux_co", url: "https://www.instagram.com/puiux_co/" },
        { name: "بيهانس", handle: "PUIUX", url: "https://www.behance.net/PUIUX" },
      ],
      bankTitle: "بيانات الحساب البنكي",
      bankSubtitle: "للفوترة والتحويلات البنكية",
      bankFields: [
        { label: "اسم الشركة", value: "شركة كابيتال تري" },
        { label: "البنك", value: "بنك الجزيرة" },
        { label: "رقم الحساب", value: "085782223613001" },
        { label: "رقم الآيبان (IBAN)", value: "SA2660100085782223613001" },
        { label: "رمز السويفت (SWIFT)", value: "BJAZSAJE" },
      ],
      footerLine: "Web / Apps Solutions",
      rights: "جميع الحقوق محفوظة.",
    },
    closing: {
      tagline: "لا تكن متكررًا، كن فريدًا.",
      studioLine: "Web / Apps Solutions",
      website: "www.puiux.com",
      thankYou: "شكرًا لكم",
    },
  },
};
