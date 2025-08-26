Working Title Ideas
From Book to App: Automating a 1,100-Question Study System

Executive Summary
What it is: A gamified study app that turns a counseling exam book into an interactive “Arcade Mode.”
What I did: Automated extraction of 1,100 questions using n8n + an AI model + Supabase, and built a full-stack Next.js app around it.
Why it matters: Demonstrates full-stack delivery with robust data engineering and AI automation.
Problem
Challenge: Paper-based question banks are static, slow to practice with, and hard to analyze.
Goal: Digitize and structure the content to enable fast practice, analytics, and review.
Solution Overview
Automated pipeline: n8n orchestrates ingestion → AI parsing → validation → Supabase storage.
Web app: Next.js + Supabase auth, real-time data, and a responsive UI with an arcade experience.
Outcomes: Searchable, structured questions; timed sessions; progress tracking; post-session analytics.
Architecture at a Glance
Frontend: Next.js App Router, server components, client-side hooks, and reusable UI.
Backend: API routes for sessions, answers, analytics; Supabase as DB and auth.
Automation: n8n workflows for batch processing and re-runs; AI model for parsing/extraction.
Data: Supabase tables for questions, answers, sessions, attempts, and analytics.
The Data Pipeline (AI Automation)
Input: Book content (pages/chapters).
Orchestration (n8n): Chunking, rate-limiting, retries, and logging.
AI Model: Extracts question, options, correct answer, rationale; normalizes format.
Validation: Heuristics and spot checks; re-queue uncertain items.
Storage (Supabase): Structured schema for efficient querying and app performance.
Result: 1,100+ high-quality, structured questions ready for the app.
App Features
Arcade Mode: Timed sessions, keyboard shortcuts, progress bar, instant feedback or review-first modes.
Review Flow: Per-question rationale, correct/incorrect breakdowns, chapter filtering.
Analytics: Session summaries, streaks, accuracy by topic, time-per-question insights.
Auth & Persistence: Secure login, saved history, cross-device continuity.
Tech Stack Highlights
Frontend: Next.js, React, Tailwind, custom UI components.
Backend: API routes, server actions, middleware.
Data & Auth: Supabase (Postgres, RLS, auth).
Automation & AI: n8n workflows, AI model for structured extraction.
DX: TypeScript, ESLint, modular components, hooks, and stores.
My Role and Impact
Full-Stack: Designed schema, built APIs, implemented UI/UX, auth, and analytics.
AI Automation: Architected n8n pipeline, prompt design, QA loop, and data validation.
Delivery: End-to-end productization—from raw book to polished study experience.
Challenges and How I Solved Them
Parsing reliability: Added guardrails, schema checks, and re-queue logic in n8n.
Data consistency: Wrote normalization rules and content validators.
Performance: Batched queries, indexed tables, memoized client state.
UX for speed: Keyboard shortcuts, optimistic interactions, minimal friction UI.
Results
Scale: 1,100+ questions processed into clean, queryable records.
Engagement: Faster sessions with analytics-driven review.
Maintainability: Re-runnable ingestion pipeline for updates and new sources.
Visuals to Include
System diagram: Book → n8n → AI → Validation → Supabase → Next.js app.
Screens: Arcade session, review page, analytics dashboard.
Workflow: n8n workflow nodes with success/fail branches.
What’s Next
Adaptive difficulty: Personalize question queues.
Improved QA: Human-in-the-loop review tools.
Mobile-first polish: Offline mode and PWA.
Content expansion: New books and topics via the same pipeline.
Call to Action
Try the demo: Link to live app.
Read the code: Link to repo.
Hire me: I build AI-powered products end-to-end—from data pipelines to delightful UIs.
