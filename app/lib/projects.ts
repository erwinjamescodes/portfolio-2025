export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  image: string;
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
    image: "/assets/placeholder-project.jpeg",
    content: {
      overview:
        "What started as a thick, paper-based counseling exam book is now a fully interactive study platform. Using automation, AI parsing, and a modern full-stack app, I turned 1,100 questions into a gamified 'Arcade Mode' experience. The system combines n8n workflows, an AI extraction pipeline, and Supabase as the data backbone, all tied together in a Next.js web app.",
      problem:
        "Preparing for board exams with a physical book has obvious limits: static content that can't be randomized or tracked, slow practice due to flipping pages, and zero analytics to measure progress. The challenge was clear—digitize the book, structure the content, and design a review tool that motivates consistent practice.",
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
    title: "From Book to App: Automating a 1,100-Question Study System",
    slug: "claudipedia",
    description:
      "A gamified study app that turns a counseling exam book into an interactive 'Arcade Mode'.",
    tags: ["nextjs", "n8n", "supabase"],
    image: "/assets/placeholder-project.jpeg",
    content: {
      overview:
        "What started as a thick, paper-based counseling exam book is now a fully interactive study platform. Using automation, AI parsing, and a modern full-stack app, I turned 1,100 questions into a gamified 'Arcade Mode' experience. The system combines n8n workflows, an AI extraction pipeline, and Supabase as the data backbone, all tied together in a Next.js web app.",
      problem:
        "Preparing for board exams with a physical book has obvious limits: static content that can't be randomized or tracked, slow practice due to flipping pages, and zero analytics to measure progress. The challenge was clear—digitize the book, structure the content, and design a review tool that motivates consistent practice.",
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
];
