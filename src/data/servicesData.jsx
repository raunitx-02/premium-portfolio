import React from 'react';
import { Layout, ShoppingCart, Smartphone, LineChart, PenTool, Share2 } from 'lucide-react';

export const servicesData = [
  {
    id: "01",
    slug: "wordpress-development",
    title: "WordPress Development",
    icon: <Layout size={28} color="#2563EB" />,
    shortDescription: "Custom theme & plugin development for blogs, portfolios, and complex multi-page company sites. All builds are fast, secure, SEO-optimized, WooCommerce-ready, and easy for your team to manage.",
    fullDescription: "WordPress isn't just about templates—it's a powerful CMS that powers over 40% of the web. I build completely custom, high-performance WordPress platforms engineered specifically for your business logic. Whether you need a lightning-fast headless setup using React, a fully customized theme developed from scratch to perfectly match your brand identity, or robust plugin integration to handle complex backend data processing, I deliver scalable solutions that are heavily optimized for both speed and search engines.",
    process: [
      { step: "Consultation & Scope", desc: "Deep dive into your business requirements, target audience, and required functionalities." },
      { step: "Wireframing & UI Design", desc: "Crafting a unique layout structure optimized for user journey and high conversions." },
      { step: "Custom Development", desc: "Writing clean PHP/JS code for custom themes, post types, and tailored taxonomies." },
      { step: "Optimization & Delivery", desc: "Hardening security protocols, optimizing database queries for sub-second load times, and final server deployment." }
    ],
    techStack: ["WordPress Core", "PHP 8+", "MySQL", "React (Headless)", "Tailwind CSS"],
    deliverables: ["Custom WordPress Theme", "Admin Dashboard Setup", "Basic SEO Foundation", "Security Configuration", "Client Training Document"]
  },
  {
    id: "02",
    slug: "ecommerce-development",
    title: "E-Commerce Development",
    icon: <ShoppingCart size={28} color="#2563EB" />,
    shortDescription: "High-converting Shopify, WooCommerce & Magento stores built for real sales from day one, equipped with payment gateways and funnels.",
    fullDescription: "A successful online store requires more than just a cart button—it requires a friction-less user experience built to maximize Average Order Value (AOV) and conversion rates. I specialize in building end-to-end e-commerce solutions on robust platforms like Shopify and WooCommerce. From advanced dynamic product filtering, smart search implementations, abandon cart recovery systems, to headless storefronts using Next.js—my stores are built to look stunning and scale revenue seamlessly.",
    process: [
      { step: "Platform Strategy", desc: "Selecting the ideal technical stack (Shopify, Custom Cart, WooCommerce) based on inventory size and budget." },
      { step: "Storefront Design", desc: "Designing high-conversion product pages, intuitive checkout flows, and trust-building UI elements." },
      { step: "Payment & Shipping Integration", desc: "Hooking up Stripe, Razorpay, or PayPal securely alongside dynamic shipping calculators." },
      { step: "Analytics & Launch", desc: "Integrating Google Analytics 4, Meta Pixel, and heatmapping tools before doing a soft launch test sequence." }
    ],
    techStack: ["Shopify Liquid", "WooCommerce", "Next.js (Headless)", "Stripe API", "Node.js"],
    deliverables: ["Fully Configured Storefront", "Secure Checkout Funnel", "Inventory Management Setup", "Conversion Tracking Analytics"]
  },
  {
    id: "03",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    icon: <Smartphone size={28} color="#2563EB" />,
    shortDescription: "Cross-platform Android & iOS apps built with Flutter (Dart). Single codebase, blazing fast UI, and secure Firebase authentication.",
    fullDescription: "With mobile traffic dominating the digital space, having a native-feeling mobile application is crucial for customer retention. I develop high-performance, cross-platform mobile applications using Flutter and React Native. This means you get two beautifully native-feeling applications (iOS and Android) from a single, maintainable codebase. I handle the entire lifecycle: from the first UI pixel drawn on Figma, integrating complex REST APIs and Firebase data streams, setting up local push notifications, all the way to jumping through the complex hoops of Apple App Store and Google Play Store deployment guidelines.",
    process: [
      { step: "Architecture & Flow", desc: "Mapping out application state management, database schema, and core mobile user journeys." },
      { step: "UX/UI Prototyping", desc: "Designing mobile-first interfaces following strict Apple Human Interface Guidelines and Google Material Design." },
      { step: "Agile Development", desc: "Coding the app in two-week sprint intervals, delivering testable APK/IPA files via TestFlight." },
      { step: "App Store Publishing", desc: "Handling certificates, provisioning profiles, privacy policies, and final App Store submission." }
    ],
    techStack: ["Flutter (Dart)", "React Native", "Firebase Auth / Firestore", "RESTful APIs", "SQLite / Room"],
    deliverables: ["Compiled iOS & Android Apps", "Clean Source Code", "API Integration Layer", "App Store Publisher Support"]
  },
  {
    id: "04",
    slug: "seo-optimization",
    title: "SEO Optimization",
    icon: <LineChart size={28} color="#2563EB" />,
    shortDescription: "Data-driven SEO for sustainable, long-term organic growth. Comprehensive technical audits, keyword research, and on-page optimization.",
    fullDescription: "A beautiful website is useless if nobody can find it. I deploy aggressive, data-driven Search Engine Optimization (SEO) strategies designed to dominate the Google SERPs (Search Engine Results Pages) for highly lucrative keywords. I don't rely on 'hacks'—instead, I build sustainable organic traffic pipelines through rigorous technical SEO audits (improving Core Web Vitals, fixing indexation bloat, generating dynamic XML sitemaps), strategic long-tail keyword content mapping, and authoritative technical backlink outreach. My SEO campaigns construct a digital moat around your brand.",
    process: [
      { step: "Technical Site Audit", desc: "Analyzing crawlability, canonical tags, 404/301 loops, and Core Web Vitals on mobile." },
      { step: "Keyword & Competitor Research", desc: "Identifying high-volume, low-difficulty semantic keywords your competitors are ignoring." },
      { step: "On-Page & Schema Markup", desc: "Injecting valid JSON-LD schema, optimizing heading structures, and semantic density." },
      { step: "Off-Page Authority Building", desc: "Acquiring high Domain Authority (DA) contextual backlinks and establishing local citations." }
    ],
    techStack: ["Ahrefs / SEMrush", "Google Search Console", "Screaming Frog", "Rank Math / Yoast", "Schema.org"],
    deliverables: ["Technical Audit Report", "Keyword Mapping Strategy", "Optimized Landing Pages", "Monthly Ranking Dashboards"]
  },
  {
    id: "05",
    slug: "ui-ux-design",
    title: "Web Design & UI/UX",
    icon: <PenTool size={28} color="#2563EB" />,
    shortDescription: "Human-centric, conversion-optimized design from discovery to delivery. Responsive, WCAG accessible, and uniquely branded.",
    fullDescription: "Design is not just what it looks like and feels like. Design is how it works. My UI/UX philosophy bridges the gap between massive aesthetic appeal and rigid psychological conversion optimization. I craft bespoke, immersive digital interfaces using tools like Figma, focusing heavily on micro-interactions, responsive typography scaling, and 'Glassmorphism' or 'Neumorphism' design trends when appropriate. Before writing a single line of code, we will iterate over high-fidelity interactive prototypes ensuring the final product looks like thousands of dollars of value was poured into it.",
    process: [
      { step: "Discovery & Empathy Mapping", desc: "Creating user personas, defining pain points, and establishing exact brand voice guidelines." },
      { step: "Wireframing & Information Architecture", desc: "Building low-fidelity structural skeletons to test logical content hierarchies." },
      { step: "High-Fidelity Visual Design", desc: "Applying color theory, typography pairings, and layout structures to build stunning screens." },
      { step: "Interactive Prototyping", desc: "Linking screens in Figma with smart-animations to simulate the real application flow perfectly." }
    ],
    techStack: ["Figma", "Adobe XD", "Framer", "Illustrator", "ProtoPie"],
    deliverables: ["Interactive Figma Prototype", "Comprehensive Design System", "Developer Handoff Specs", "Branded Assets Library"]
  },
  {
    id: "06",
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    icon: <Share2 size={28} color="#2563EB" />,
    shortDescription: "Full-service social media management across platforms. Content strategy, branded graphics, and paid ad campaigns for real ROI.",
    fullDescription: "In the modern attention economy, organic and paid social media distribution is the lifeblood of customer acquisition. I engineer full-funnel social media pipelines that turn casual scrollers into verified leads. This spans organic content sprint planning (curating high-retention short-form video strategies for Reels and TikTok), executing professional B2B LinkedIn thought-leadership campaigns, and managing high-budget Meta Ads (Facebook/Instagram) utilizing dynamic creative testing and pixel-based retargeting audiences to drastically lower Customer Acquisition Costs (CAC).",
    process: [
      { step: "Audit & Strategy Documentation", desc: "Analyzing current social footprint and writing a 3-month actionable content calendar." },
      { step: "Content Production Sprint", desc: "Designing cohesive carousels, writing compelling copy, and editing short-form video hooks." },
      { step: "Community Management", desc: "Actively engaging with followers, managing DM pipelines, and collaborating with micro-influencers." },
      { step: "Paid Meta & Google Ads", desc: "Deploying sophisticated A/B tested ad sets aimed at converting bottom-of-funnel traffic." }
    ],
    techStack: ["Meta Business Manager", "Later / Buffer", "Canva / Photoshop", "CapCut Pro", "Google Analytics"],
    deliverables: ["3-Month Content Strategy", "Packaged Social Graphics", "Ad Campaign Setup", "Bi-Weekly Performance ROI Report"]
  }
];
