export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  image: string;
  imageGrid?: {
    image2?: string;
    image3?: string;
    image4?: string;
    image5?: string;
  };
  content?: {
    overview: string;
    problem: string;
    solution: string;
    results: string[];
    reflection: string;
    links?: {
      demo?: string;
      github?: string;
    };
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "From Book to App: Automating a 1,100-Question Study System",
    slug: "claudipedia",
    description:
      "A gamified study app that turns a counseling exam book into an interactive 'Arcade Mode'.",
    tags: ["nextjs", "n8n", "supabase"],
    image: "/assets/claudipedia-1.png",
    imageGrid: {
      image2: "/assets/claudipedia-2.png",
      image3: "/assets/claudipedia-3.png",
      image4: "/assets/claudipedia-4.png",
      image5: "/assets/claudipedia-5.png",
    },
    content: {
      overview:
        "This is Claudipedia, an application I built for my girlfriend, Claudine. What started as a thick, pdf-based counseling exam book is now a fully interactive study platform. Using automation, AI parsing, and a modern full-stack app, I turned 1,100 questions into a gamified 'Arcade Mode' experience. The system combines n8n workflows, an AI extraction pipeline, and Supabase as the data backbone, all tied together in a Next.js web app.",
      problem:
        "Preparing for board exams with a static book has obvious limits: static content that can't be randomized or tracked, slow practice due to flipping pages, and zero analytics to measure progress. The challenge was clear—digitize the book, structure the content, and design a review tool that motivates consistent practice.",
      solution:
        "I designed and built an automated ingestion pipeline and a gamified frontend app. First, I used n8n to orchestrate the extraction of 1,100+ questions, passing them through AI parsing and validation before storing them in Supabase as clean, queryable records. The pipeline was built to be re-runnable so updates or new question sets can be added easily. On top of this, I created a Next.js + Supabase web app featuring multiple study modes (randomized practice, chapter-specific review, progress tracking). The highlight was a fast-paced 'Arcade Mode' interface that transformed studying into something engaging and motivating. With Supabase Auth, users get real-time data, secure sessions, and a responsive UI that works across devices.",
      results: [
        "Scale: 1,100+ questions ingested, structured, and stored in a database",
        "Engagement: Faster sessions with a quiz-like interface and analytics-driven review",
        "Maintainability: Automated ingestion pipeline can be re-run for future updates",
      ],
      reflection:
        "This project was more than just technical execution—it was about turning a tedious process into a motivating experience. The automation handled the heavy lifting of digitizing and cleaning the content, while gamification made practice fun and engaging. It proved to me how powerful it is to combine AI, low-code tools like n8n, and full-stack development into a seamless system. Beyond saving time, it created something with real impact: a smarter, interactive way for learners to prepare for their exams.",
    },
  },
  {
    id: 2,
    title: "A Mobile-First Expense Tracker with Next.js + Supabase",
    slug: "easyspend",
    description:
      "A fast, mobile-optimized PWA for logging expenses with secure auth, offline support, analytics—and automated receipt ingestion via Telegram using n8n + AI.",
    tags: ["nextjs", "n8n", "supabase"],
    image: "/assets/easyspend-1.png",
    imageGrid: {
      image2: "/assets/easyspend-2.png",
      image3: "/assets/easyspend-3.png",
    },
    content: {
      overview:
        "EasySpend is my personal expense tracking platform built with Next.js 14 and Supabase. Beyond quick manual entry and clear analytics, it also supports automated expense ingestion: send a receipt photo via Telegram and an n8n + AI pipeline parses it, formats it, and adds it to your Supabase account.",
      problem:
        "People struggle to consistently track expenses because tools are slow on mobile, lack offline resilience, and don’t surface actionable insights. Spreadsheets and generic apps make it hard to quickly log purchases, visualize patterns, or stay motivated to build a habit.",
      solution:
        "I built a modern full-stack app using Next.js (App Router) and Supabase (PostgreSQL, Auth, Realtime). The app implements magic-link authentication, strict Row Level Security, and a clean expense schema. Users can add, edit, filter, and bulk-manage expenses with React Hook Form + Zod validations, while analytics provide category breakdowns, monthly trends, and daily heatmaps. In addition, an n8n workflow listens for Telegram uploads; an AI agent performs OCR and parsing, validates fields, then upserts the expense into Supabase—so snapping a receipt becomes a one-step add.",
      results: [
        "Speed: Time-to-log-expense targeted under 10 seconds on mobile",
        "Automation: Add expenses by sending a receipt image via Telegram (n8n + AI → Supabase)",
        "Insights: Clear category breakdowns and trends",
      ],
      reflection:
        "This project blends a great mobile UX with an automated ingestion pipeline that removes friction. The Telegram → n8n → AI flow turns receipt photos into structured entries with minimal effort, while Next.js + Supabase provide a secure, scalable backbone. With this foundation, the app is ready for extensions like budgets, recurring expenses, and receipt capture enhancements.",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
