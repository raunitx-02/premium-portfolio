import React from 'react';

export const blogsData = {
  "cricket-seo": {
    title: "Cricket Blog Success: Proven Guide to 500K+ Monthly Visitors",
    subtitle: "A comprehensive deep-dive into how I scaled IPLPRO.IN to over half a million organic visitors during the height of the IPL season.",
    category: "SEO",
    date: "October 26, 2025",
    emoji: "📈",
    readingTime: "12 min read",
    content: (
      <>
        <section>
          <h2>The Challenge: Breaking into a Hyper-Competitive Niche</h2>
          <p>
            The cricket niche in India is one of the most saturated digital markets in the world. With giants like ESPNCricinfo and Cricbuzz dominating the search results, building a new platform that captures significant organic traffic seems almost impossible. 
            However, by identifying gaps in "real-time prediction" and "localized statistics," I was able to build <strong>IPLPRO.IN</strong> from a blank domain to a massive traffic magnet.
          </p>
        </section>

        <section>
          <h2>The 4 Pillars of Success</h2>
          <h3>1. Technical SEO & Core Web Vitals</h3>
          <p>
            In a sports niche where users want "Live Score" or "Toss Updates" instantly, speed is not just a ranking factor—it's a survival requirement. I built the site using a headless architecture to ensure:
          </p>
          <ul>
            <li><strong>LCP (Largest Contentful Paint)</strong> under 1.2 seconds.</li>
            <li><strong>Zero CLS (Cumulative Layout Shift)</strong> to prevent accidental ad clicks.</li>
            <li>Efficient caching strategies using Cloudflare Edge Workers.</li>
          </ul>

          <h3>2. The Seasonality Strategy (IPL Peak)</h3>
          <p>
            Cricket traffic in India isn't flat; it peaks violently during March-May. We started building "authority" content 5 months before the season. By the time the first ball was bowled, Google had already indexed our landing pages for high-volume keywords like <em>"Today's Match Prediction"</em> and <em>"Dream11 Winning Team."</em>
          </p>

          <h3>3. Schema Markup & Rich Results</h3>
          <p>
            I utilized <strong>Event Schema</strong> and <strong>Dataset Schema</strong> to win the "Google Discover" carousel. By providing structured data for match dates, venues, and squad lists, we saw a 400% increase in click-through rates (CTR) compared to standard blue-link results.
          </p>

          <h3>4. Monetization without Friction</h3>
          <p>
            Scaling to 500k visitors is expensive for server costs. We implemented Google AdSense with high-performing placements that didn't compromise the user experience. By focusing on "First Input Delay," we ensured that even with 5-6 ad units, the site felt lightweight and professional.
          </p>
        </section>

        <section>
          <h2>The Result</h2>
          <p>
            By the end of the IPL 2025 season, the site reached a peak of <strong>521,490 monthly organic visitors</strong>. The bounce rate remained below 45%, proving that our content was not just bringing people in, but keeping them engaged.
          </p>
        </section>
      </>
    )
  },

  "hackmap-build": {
    title: "How I Built HackMap India in 7 Days — React + Firebase",
    subtitle: "A technical post-mortem of a 7-day development sprint to build India's premier hackathon discovery platform.",
    category: "Development",
    date: "April 2026",
    emoji: "🚀",
    readingTime: "10 min read",
    content: (
      <>
        <section>
          <h2>The Vision: Solving the "Hackathon Discovery" Problem</h2>
          <p>
            Indian students often struggle to find hackathons outside of major platforms. HackMap India was designed to be a localized, map-based discovery engine that connects college students with tech fests and hackathons in their immediate vicinity.
          </p>
        </section>

        <section>
          <h2>Tech Stack Choice: Speed over Everything</h2>
          <p>
            To hit the 7-day deadline, I chose tools that allowed for rapid prototyping without sacrificing scalability:
          </p>
          <ul>
            <li><strong>Frontend:</strong> React 18 with Vite for ultra-fast HMR.</li>
            <li><strong>Backend/Auth:</strong> Firebase (Firestore for real-time DB, Auth for social logins).</li>
            <li><strong>Maps:</strong> React-Leaflet for lightweight geo-visualization.</li>
            <li><strong>Payments:</strong> Cashfree API for localized UPI transactions.</li>
          </ul>
        </section>

        <section>
          <h2>The 7-Day Sprint Breakdown</h2>
          <h3>Day 1-2: Data Architecture & Auth</h3>
          <p>
            Defining the Firestore schema was critical. We needed a flat structure for "Events" that could handle geo-queries. I implemented Firebase GeoQueries to find events within a 50km radius of the user's location.
          </p>

          <h3>Day 3-5: Map Integration & Search</h3>
          <p>
            Integrating Leaflet with React required careful ref management to prevent re-rendering the entire map every time a filter changed. I used <code>useMemo</code> to cache the marker layers, resulting in 60fps scrolling even with 100+ markers.
          </p>

          <h3>Day 6-7: Payment Integration & Polishing</h3>
          <p>
            The final hurdle was the payment gateway for ticketed fests. Using Cashfree's JS SDK, I built a seamless checkout flow that triggers a Firestore update as soon as the webhook confirms the payment.
          </p>
        </section>

        <section>
          <h2>Challenges Faced</h2>
          <p>
            The biggest challenge was handling the state of the "Team Finder" feature. Coordinating multiple users joining a team in real-time required using Firestore <code>transactions</code> to prevent race conditions during the final 30 minutes of registration.
          </p>
        </section>
      </>
    )
  },

  "autonomous-agent": {
    title: "Building an Autonomous CI/CD Agent with LangGraph & FastAPI",
    subtitle: "A deep dive into multi-agent systems and how I built an AI agent that monitors, fixes, and deploys production code automatically.",
    category: "AI & Automation",
    date: "February 2026",
    emoji: "🤖",
    readingTime: "15 min read",
    content: (
      <>
        <section>
          <h2>The Problem: The "Red Build" Fatigue</h2>
          <p>
            Developers spend 30% of their time fixing trivial CI/CD failures—linting errors, broken tests, or simple dependency mismatches. My goal was to build a <strong>"Self-Healing CI/CD Pipeline."</strong>
          </p>
        </section>

        <section>
          <h2>Architecture: LangGraph and the Multi-Agent Approach</h2>
          <p>
            Unlike a simple linear script, an autonomous agent needs to "reason." I used <strong>LangGraph</strong> to build a state machine consisting of three specialized agents:
          </p>
          <ol>
            <li><strong>The Watcher:</strong> Monitors GitHub Actions via Webhooks. If a build fails, it captures the logs.</li>
            <li><strong>The Fixer:</strong> Analyzes the logs, identifies the root cause, and generates code fixes using GPT-4o.</li>
            <li><strong>The Validator:</strong> Runs local tests on the proposed fix. If the tests pass, it pushes a PR.</li>
          </ol>
        </section>

        <section>
          <h2>Key Technical Breakthroughs</h2>
          <h3>Long-Context Analysis</h3>
          <p>
            Standard build logs can be 10,000+ lines. I implemented a "RAG-lite" system that filters for keywords like <code>Error:</code> or <code>Failed:</code> to provide the LLM with only the most relevant 2,000 tokens, reducing latency and cost.
          </p>

          <h3>Safe Execution with Docker</h3>
          <p>
            Letting an AI write and run code is dangerous. Every fix was executed in a transient, isolated Docker container with strict network egress rules. The Fixer agent only had access to the specific file that needed modification.
          </p>
        </section>

        <section>
          <h2>Impact</h2>
          <p>
            In our initial beta test during the RIFT 2026 Hackathon, the agent successfully resolved 14 out of 20 build failures without a single human intervention, reducing the "Time-to-Green" metric by 65%.
          </p>
        </section>
      </>
    )
  }
};
