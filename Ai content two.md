---
# ==============================================================
# PORTFOLIO SITE CONTENT
# Ahmed Ahammed — AI Builder & Adoption Specialist
#
# This file drives all content on the site. Edit here, rebuild,
# done. Components only get touched for layout or new features.
#
# Structure:
#   meta         — site-wide info
#   hero         — landing section
#   facts_bar    — "a few things about me" (replaces stats bar)
#   about        — bio
#   case_studies — 5 main case studies, each with its own facts
#   projects     — personal projects (Genie, Project Muse)
#   capabilities — skills/tools grouped by category
#   experience   — condensed work history
#   contact      — CTA + form
#   build_notes  — instructions for the coding agent on UI/UX
# ==============================================================

meta:
  name: "Ahmed Ahammed"
  role: "AI Builder & Adoption Specialist"
  tagline: "I build AI tools for small and mid-size teams — and I stick around to make sure people actually use them"
  location: "Newtown, Sydney, NSW"
  email: "anasmoin@gmail.com"
  phone: "0451 298 483"
  linkedin: "https://www.linkedin.com/in/anas-ahammed-4787b8144/"
  github: ""
  seo_title: "Ahmed Ahammed — AI Builder & Adoption Specialist, Sydney"
  seo_description: "I build AI tools for small and mid-size teams, and I stick around to make sure people actually use them. Based in Sydney."

# --------------------------------------------------------------
# HERO
# --------------------------------------------------------------
hero:
  headline: "I build AI tools. Then I stick around to make sure people actually use them."
  subheadline: "Most AI projects don't fail because the tool is bad. They fail because nobody's using it six months later. I'm the person who builds the thing and stays for the part that matters."
  primary_cta:
    label: "See what I've built"
    link: "#case-studies"
  secondary_cta:
    label: "Say hi"
    link: "#contact"
  caption: "Currently building with teams across healthcare, property, and franchise operations in Sydney and regional NSW."

# --------------------------------------------------------------
# FACTS BAR — replaces the old stats bar
# Short, punchy, about me as a person
# --------------------------------------------------------------
facts_bar:
  intro_label: "A few things about me"
  facts:
    - value: "4"
      label: "AI apps built from scratch"
    - value: "7.5"
      label: "Years in startup mode"
    - value: "1"
      label: "Genuine obsession"
    - value: "∞"
      label: "YouTube tutorials watched"

# --------------------------------------------------------------
# ABOUT
# --------------------------------------------------------------
about:
  heading: "About"
  paragraphs:
    - "Hi, call me Ahmed. I build AI tools for a living, and in my spare time I build more AI tools for fun. Agentic coding, RAG systems, voice interfaces, automations that get software to talk to software that was never meant to talk — this is the stuff I can't stop thinking about. When new AI features drop, I'm the person flashing an old laptop with Linux at 11pm to try them out."
    - "I spent seven and a half years at a small Sydney startup called Pitchpocket, doing whatever the business needed next. I started by cleaning phone number lists. A year or two later my boss asked if I could build a mobile app. I'd never built one, so I said yes and taught myself on YouTube. That app ended up becoming the company's core product. The pattern never really changed — something needed doing, I figured out how to do it, and over seven years I ended up running enterprise accounts for brands like Nespresso, PPG Paints, and Unilever, and eventually shipping an AI-powered SaaS platform on my own."
    - "What I actually believe: AI is a superpower for small and mid-size businesses. Not because it replaces people — because it takes the draining, repetitive parts of a job and gets them out of the way. One person who can suddenly do more, without being stretched thinner, is a genuine competitive advantage. That's what I'm trying to build for the teams I work with."
  philosophy_line: "Tools are the easy part. Getting people to actually use them is the job."

# --------------------------------------------------------------
# CASE STUDIES
# Five stories. Each one:
#   - friendly, conversational opener
#   - "a few facts" replacing stats
#   - shorter sections, pull quotes, callouts
# --------------------------------------------------------------
case_studies:
  - slug: "sydney-health-clinic"
    case_number: "01"
    tag: "Health & beauty clinic"
    status: "Live"
    headline: "A boring medical PDF, turned into a sales tool that actually drives business"
    one_liner: "Built an AI pipeline that turns scanned blood test reports into branded, easy-to-read health dashboards for a Sydney clinic."
    client:
      display_name: "A Sydney health and beauty clinic"
      anonymised: true
      context: "Over 200 treatment patients a month. Treatments starting at $1,000+."
    scope: "Full build + ongoing"
    facts:
      - value: "300+"
        label: "Reports running through the system"
      - value: "~2 hrs"
        label: "Saved per patient consultation"
      - value: "200+"
        label: "Real lab reports tested against"
      - value: "Phase 2"
        label: "Already in scoping"
    pull_quote: "The owner didn't want a processing tool. He wanted a sales tool. Recognising that changed the whole design."
    sections:
      - heading: "The setup"
        body: |
          A Sydney clinic doing peptide therapies and high-end treatments — typical spend per patient is over a thousand dollars. Before any treatment, every patient needs a blood test analysed and signed off by a doctor. Partly because it's the law. Partly because it's how the clinic earns trust with patients about to hand over a lot of money.

          They process over 200 treatment patients a month, and they run blood tests for significantly more — people come in, get tested, and use the consultation to decide whether to go ahead.
      - heading: "The problem"
        body: |
          The whole thing was manual. A patient would come in, and a staff member would sit with them for two hours walking through a standard lab report — tiny numbers, medical jargon, reference ranges in fine print — trying to explain what it all meant. It didn't scale. It wasn't repeatable. And the take-home document was a generic lab PDF that looked exactly like every other blood test the patient had ever received.

          The owner spotted something sharper than "let's automate this." He pointed out that the consultation was also the moment a patient decides whether to book a $1,000+ treatment. A confusing lab report was actively working against that moment. He wanted the same tool to do two jobs — make the data clinically useful, AND be a beautiful, branded thing the patient actually wants to keep.
      - heading: "What I built"
        body: |
          The hardest bit wasn't the dashboard. It was the extraction. Blood reports come in wildly different layouts depending on the lab, and most of them arrive as scanned PDFs with numbers and units scattered all over the page. Traditional OCR failed fast — you can't write rules for something that has no consistent shape.

          After a week of trying different approaches, I landed on Google Document AI for the extraction, then passed the data through an LLM with a medical dictionary to sense-check and standardise it. From there it became a clean, branded dashboard — plain-English marker explanations, high/low flags, health and beauty recommendations tied to the findings, and a biological age calculation.

          Compliance shaped the architecture from day one. Patient names get stripped before processing. Original lab PDFs are held only for as long as processing takes, then purged. All processing happens onshore. And every generated report routes to a doctor for approval before it reaches the patient. The doctor is still in the loop where it counts — the AI just takes two hours of prep out of their day.
      - heading: "How it landed"
        body: |
          The system is live. Over 300 reports have gone through it. Patients receive a branded PDF by email. What was a two-hour manual task is now a quick approval step. The clinic is already scoping phase two with me — a patient-facing dashboard that tracks their results over time.

          A boring, unreadable lab document became something that actively helps drive the business and helps customers understand what their body is telling them.
      - heading: "What I learned"
        body: |
          The technical problem looked like the hard part. It wasn't. The hard part was earning trust in a space where a decimal point in the wrong place means a patient is told something wrong about their health. So the most valuable work I did wasn't writing code — it was collecting 200+ real lab reports, manually verifying every extraction, and writing a test suite that catches regressions every time something changes. That's the work that made it safe for a doctor to sign off.

          The bigger lesson was about reframing the brief. The owner didn't ask for a processing tool — he asked for a sales tool. Spotting that upfront changed the entire design. That's the difference between solving a task and solving a business problem.
    tools: ["Google Document AI", "Gemini", "Python", "Render"]

  - slug: "franchise-network"
    case_number: "02"
    tag: "Franchise operations"
    status: "Near launch"
    headline: "$6,000 a month was slipping through a two-hour window. We closed the window."
    one_liner: "Built an email-to-marketplace automation that captures jobs a franchise was losing because nobody could forward an email fast enough."
    client:
      display_name: "A maintenance services franchise network"
      anonymised: true
      context: "4 franchise territories across regional Australia. ~80 maintenance requests per day per franchise."
    scope: "4-week build, currently week 2 of 4"
    facts:
      - value: "$6k"
        label: "Lost every single month"
      - value: "15%"
        label: "Of jobs that kept disappearing"
      - value: "2 hrs"
        label: "The window nobody could hit"
      - value: "4"
        label: "Franchises rolling this out"
    pull_quote: "Barely any AI in this system. Just a small LLM call to parse unstructured emails. The leverage came from spotting the hinge point, not the tech."
    sections:
      - heading: "The setup"
        body: |
          A regional Australian maintenance services business running four franchise territories. Big volumes — about 80 maintenance requests per day per franchise. Small jobs, wide geographies, rural Australia. Everything is time-sensitive.
      - heading: "The problem"
        body: |
          Roughly 15% of incoming requests couldn't be fulfilled in-house — not enough people, too much distance between jobs. That's fine, because the franchise has a two-hour window to either assign the job to another licensed contractor or on-sell it. But if the window closes, the franchisor takes the job back and sells it themselves. The franchise gets nothing.

          The whole thing depended on the owner manually forwarding an email or SMS to a list of contractors within two hours. If he was busy, driving, or just missed the notification, the job and the lead fee disappeared. Across four franchises, this was quietly costing them around $6,000 every month. A process failure, repeating hundreds of times a month.
      - heading: "What I built"
        body: |
          I started with a remote workshop to map the current flow end-to-end — where the bottlenecks were, what an ideal version would look like, what the repeat friction points were.

          The build is straightforward. Inbound jobs hit the franchise inbox. A Postmark inbound server catches the email and parses it. An LLM pulls the structured bits — location, job type, urgency, contact details — and hits Google Maps for geocoding. A JSON payload gets pushed to a Sharetribe marketplace. Contractors see new jobs appear in near real-time and claim them directly. The two-hour window is now a background timer, not a human responsibility.

          One architectural call worth flagging: Sharetribe. I could have built a custom marketplace — auth, payments, admin tooling — but that's months of work and ongoing maintenance for a small business. Sharetribe gives us mature infrastructure for secure payments and user management out of the box. Right call was to transfer that risk to a vendor whose job is managing it at scale.

          Alongside the core pipeline I built a landing page, a user dashboard, and a credit-based promo system (first 6 leads free, buy 10 get 2 free) to pull contractors in.
      - heading: "How it landed"
        body: |
          Automated listing generation is working end-to-end. Client has signed off on the demo. The remaining two weeks are Stripe integration and multi-user production testing. Once live, 15% of previously-lost jobs flow to contractors automatically. Nobody has to remember to forward an email.
      - heading: "What I learned"
        body: |
          The big takeaway wasn't about the automation. It was about how easy it is to walk past a recurring failure when it's a steady leak rather than a dramatic event. The owner had been losing $6,000 a month for years. Nothing felt urgent because nothing ever broke loudly. Someone has to stop and do the maths.

          The other lesson: there's barely any AI in this system. The real leverage came from spotting the hinge point in the process, not from the AI itself. Not everything worth building needs to be an "AI project." Sometimes the AI is a small assist inside a much bigger fix.
    tools: ["Postmark", "LLM parsing", "Sharetribe", "Google Maps API", "Stripe"]

  - slug: "regional-real-estate"
    case_number: "03"
    tag: "Real estate"
    status: "Delivered"
    headline: "A 25-year-old real estate office changed their mind about AI in 60 seconds"
    one_liner: "Coached a skeptical team from 'let's hire a developer' to 'oh wait, we can do this ourselves' — by showing, not telling."
    client:
      display_name: "A regional NSW real estate agency"
      anonymised: true
      context: "25-year-old agency, 6 staff. Residential, rural, and commercial property. Six hours south of Sydney."
    scope: "2–3 working sessions"
    facts:
      - value: "25"
        label: "Years in business before AI"
      - value: "2–3"
        label: "Sessions that changed their mind"
      - value: "60s"
        label: "To flip them from skeptical to excited"
      - value: "$0"
        label: "Spent on dev tools"
    pull_quote: "I stopped talking and started showing. Their body language changed in under a minute."
    sections:
      - heading: "The setup"
        body: |
          A small real estate agency six hours south of Sydney. Two principals, six staff, 25 years in business. They sell everything — first homes, rural land, commercial property. Their website looked dated next to their competitors, they were running out of social content, and they had a feeling something needed to change. No idea where to start.
      - heading: "The problem"
        body: |
          When I first sat down with them, the ask was simple: "make our website look like our competitors'." They were planning to hire a regular web developer and hand them that brief. I pointed them toward platforms like Fiverr to get a cheaper quote — but it quickly became clear they didn't actually know what they wanted. They couldn't tell a developer what to build, which meant whichever developer they picked would get to decide for them.

          Underneath all of that was skepticism about AI. "We won't know how to use it." "It sounds too complicated." "We don't have the skills." Not hostile — just a sense that this was a world they weren't invited into.
      - heading: "What I did"
        body: |
          I stopped talking and started showing. Opened Gemini, wrote a simple prompt pointing at their existing site, and within 60 seconds had a live mockup of a refreshed version. Their body language changed instantly. They'd expected this to take weeks and cost thousands. Watching it happen in real time did more than any explanation could.

          From there we ran two or three working sessions together. We locked down the look and feel, where things should sit, their branding, and — most importantly — a clear technical brief for a developer. That brief was the actual deliverable. Armed with it, they could ask for competitive quotes, compare them properly, and pick a developer they felt good about. AI didn't replace the developer. It replaced the confusion that usually makes the developer-hiring conversation so one-sided.

          They decided not to use AI to build the site itself, and their reasoning was correct: they worried about ongoing upkeep. If something broke, they didn't want to be stuck prompting their way out. Fair call. The AI's job here was to sharpen their thinking, not to ship their website.

          For ongoing content, I built them a small prompt library using custom Gems in Gemini. Each prompt asks them a few simple questions — property name, features, target buyer — and generates social media copy. Since they already lived in Google Workspace, Gemini was the obvious pick.
      - heading: "How it landed"
        body: |
          They walked in expecting to hire a developer and hope for the best. They walked out with a scoped brief, a branding guide, and a prompt library they could run themselves. Their website is being built by a developer they chose deliberately, using a spec they wrote with confidence. They post social content consistently now — fill in a few variables, Gemini drafts the post.

          The real win is that they're not afraid of AI anymore. It's a tool in their drawer now.
      - heading: "What I learned"
        body: |
          The instinct starting a consulting-style project is to look for big end-to-end transformations. This taught me the opposite. For slow adopters — people who've been successful for decades doing things a certain way — a feather touch matters way more than a big intervention. Live-prototyping one idea in 60 seconds did more than any explanation could have.

          Second lesson: not every AI engagement needs to end with AI doing the work. Sometimes the right outcome is a business making a better decision with AI's help — and then hiring a human for the execution. Recommending they stick with a human developer, and leaving them with better tools to brief that developer, was a better outcome than a full AI build would have been.
    tools: ["Gemini Canvas", "Google Gems", "Google Workspace"]

  - slug: "stakaroo"
    case_number: "04"
    tag: "AI SaaS platform"
    status: "Shipped — codebase retained"
    headline: "Built an AI SaaS platform solo. Also figured out why most AI-coded projects never finish."
    one_liner: "Shipped a full-stack AI landing page platform with no dev team. The project management method turned out to matter more than the code."
    client:
      display_name: "Pitchpocket (final major project)"
      anonymised: false
      context: "The last big thing I built before leaving Pitchpocket. Started as an internal scaling problem, ended as a self-service product."
    scope: "Solo — architect, builder, everything"
    facts:
      - value: "~90%"
        label: "Production time cut vs manual"
      - value: "1"
        label: "Developer on the project (me)"
      - value: "100%"
        label: "Self-taught as I went"
      - value: "0"
        label: "Times the project stalled"
    pull_quote: "The most important thing I did on this project wasn't write code. It was write a manifesto before I wrote a single line."
    sections:
      - heading: "The setup"
        body: |
          Stakaroo was the last big project I built at Pitchpocket before leaving. The business made bespoke marketing landing pages by hand — copy, design, build — and it couldn't scale. One designer-developer pair could do about two pages a day. With a thousand users on our apps and enterprise clients queuing up for campaign assets, that pipeline was the bottleneck of the whole business.

          The only way out was to turn the production process into a product — a self-service platform where any small business could generate and publish a professional landing page in minutes, without a designer or a developer.
      - heading: "The problem (including the personal one)"
        body: |
          This would normally be a hundreds-of-thousands-of-dollars project at an agency. We didn't have that budget and weren't going to get it. And I'd never shipped a full-stack SaaS before — multi-tenancy, auth, Stripe payments, hosted landing pages, all of it.

          At the same time, AI coding tools were becoming good enough that a non-developer could, in theory, build something this ambitious. Most people were trying. Most were failing — projects fizzled out halfway through, the agent hallucinated into dead ends, codebases got unmaintainable. That failure pattern was the real problem I had to solve, more than any single technical challenge.
      - heading: "What I built"
        body: |
          I started in the Canvas features of Claude and Gemini, prototyping small pieces to see how far I could get. Once I realised I could iterate effectively, I committed fully — moved into VS Code with a coding agent integrated into the IDE.

          The most important thing I did on this project wasn't write code. It was write a manifesto. Before building anything, I wrote a product requirements document describing what the platform was for, what it had to do, and what it must never do. I broke development into phases with explicit goals and tests. Then — this is the part that mattered — I wrote a system prompt telling the AI agent to check the manifesto before making any decision. Every new idea had to either align with the manifesto or trigger an explicit manifesto update. Every phase started with the agent proposing a plan for me to approve. Every change included a test I could run.

          This is now standard practice in agentic coding. At the time it wasn't. I built it because I'd watched too many other people's projects collapse into chaos and I wanted mine to finish.

          The platform shipped: Vue.js 3 frontend with drag-and-drop panel reordering, Firebase backend (Auth, Firestore, Cloud Functions, Hosting, Storage), Gemini API for copy, Imagen 3 for images, Stripe integration, QR code generation, analytics. Users pick their industry, enter a topic, get a branded landing page in minutes.

          The hardest bits were the things I'd never done before — auth, Stripe webhooks, multi-tenant database structure without runaway API costs, custom styling that didn't break across templates. Took real time. But the project never fizzled out, and it finished.
      - heading: "How it landed"
        body: |
          The platform went live. Internal reaction was strong — this was something that would have cost the business six figures at an agency, delivered solo in a few months. After I left, they didn't maintain it and fell back into traditional agency work. I kept the codebase and the license. I'll rebrand and relaunch it independently when the right moment comes.
      - heading: "What I learned"
        body: |
          The technical skill to build something ambitious with AI assistance is real but learnable. The meta-skill — keeping the AI agent accountable across the length of a whole project — is the thing almost nobody talks about, and it's what separates finished projects from abandoned ones. You need a clear outcome before you start, a system for checking every step is still on plan, and a willingness to explicitly update your plan when something surprises you.

          Second lesson: ownership. At the time I was proud of the technical achievement. In hindsight, the more valuable thing was internalising a method for AI-assisted building that I've used on every project since — the clinic dashboard, the franchise marketplace, everything. Stakaroo wasn't just a product. It was the apprenticeship I gave myself.
    tools: ["Vue.js 3", "Firebase", "Gemini API", "Imagen 3", "Stripe", "Cloud Functions"]

  - slug: "pitchpocket"
    case_number: "05"
    tag: "The 7.5-year story"
    status: "Feb 2018 — Oct 2025"
    headline: "From cleaning phone number lists to shipping an AI platform. What seven and a half years of figuring it out actually looks like."
    one_liner: "Campaign assistant → self-taught app builder → enterprise account lead → AI platform founder. All at one small startup."
    client:
      display_name: "Pitchpocket (Sydney)"
      anonymised: false
      context: "Small Sydney startup building mobile apps and landing page tools for enterprise marketing and training."
    scope: "Every role the business needed filling"
    facts:
      - value: "7.5"
        label: "Years at one company"
      - value: "8,000+"
        label: "Retail training sessions delivered"
      - value: "500k+"
        label: "Content views across campaigns"
      - value: "6+"
        label: "Enterprise brands I ran accounts for"
    pull_quote: "My boss asked if I could build an app. I'd never built one. I said yes anyway, and then I watched YouTube videos until it worked."
    sections:
      - heading: "Where it started"
        body: |
          I joined Pitchpocket in February 2018, a month after finishing university. The job was unglamorous. Sort and clean big lists of mobile phone numbers. Manage unsubscribe lists. Write two or three versions of SMS copy. Test different send times. Pull open-rate reports. Campaign assistant stuff. I was good at it, and I didn't think it was beneath me — I just got it done.

          What changed things was Photoshop. I already knew it, and nobody else on the team did particularly well. So I started mocking up landing pages. Then building them. Then one day I noticed something: you could chain HTML links together, pre-load a phone number into a call button with a tap, connect pages into experiences rather than isolated screens. Basically a primitive version of Linktree before Linktree was a thing.
      - heading: "The leap — 'can you build an app?'"
        body: |
          My boss saw what I was doing with the chained pages and asked if I could turn it into an app. I had never built an app. I said yes.

          I spent weeks watching YouTube videos, studying boilerplate code, and teaching myself Android Studio. The idea was simple: folders containing landing pages, shareable, trackable, living on a phone. It worked. We started onboarding clients onto it. The app became Pitchpocket's core selling point — "everything new and unexplained, right in the palm of your hands." We made enough money from it to hire a proper overseas dev team to rebuild it professionally for both Android and iOS.

          My role shifted. I became project manager and primary contact for the overseas team. Wrote the technical brief, built wireframes, ran testing, managed feedback loops. I was 23 and had gone from sorting spreadsheets to shipping a commercial mobile product in under two years. Not by being trained for any of it — by saying yes to whatever came next and then figuring it out.
      - heading: "All the roles in between"
        body: |
          Pitchpocket was small enough that there was no such thing as a fixed job description. Over the years I covered a lot of ground.

          Internally, I became the person who gave abstract ideas a shape. When leadership sat in a room throwing loose thoughts around about a new product or service, I'd take notes and come back with a presentation, a website mockup, or a prototype — something with edges that people could react to and critique. Taking a half-formed idea and making it tangible enough for a room to have a real conversation about it turned out to be one of the most useful skills I've ever picked up.

          On the marketing side, I built sales enablement — decks, videos, infographics, email sequences, sales playbooks. I found leads, built outreach lists, wrote the copy. Ran LinkedIn campaigns. Filmed testimonials. Built performance dashboards in Google Analytics and Firebase. Ran data pipelines for the field staff who were doing brand activations on the ground.

          When the business pivoted into enterprise training — helping brands like PPG Paints and Australian Homeware Enterprises train retail staff in-aisle at Bunnings — I moved into full account management. Pitching to corporate L&D teams. Running discovery workshops. Writing requirements documents. Briefing an overseas dev team. Doing site visits to actually watch staff use the product. Sending monthly analytics reports. Across multiple clients at once, for years.
      - heading: "The big enterprise engagement — PPG Paints"
        body: |
          PPG Paints is the relationship I'm proudest of from that period. They needed to train Bunnings retail staff on paint products, but their existing approach was expensive and slow — multi-hour sessions that pulled staff off the floor. They needed something a rep could do in five minutes, in-aisle, on a phone.

          I sat with their L&D team, mapped annual learning goals, broke them into micro-topics, and built mobile-optimised learning modules on our platform. The relationship ran about a year and evolved significantly — I started building everything myself; later I made a simple PowerPoint briefing template so PPG's team could brief new modules themselves, in a tool they already knew. That template probably saved the relationship. Dramatically cut revision cycles. Made the whole programme sustainable.

          Across the year, we delivered over 8,000 training sessions to retail staff across Australia and New Zealand, covering more than 10 products. PPG had real-time national visibility of training activity for the first time ever. Their previous programme had never delivered that.
      - heading: "How it ended — Stakaroo"
        body: |
          My final project was Stakaroo — a self-service AI platform that lets any business generate and publish a professional landing page in minutes. Built solo, no dev budget, using AI coding tools and a specification-first method I had to invent because nothing like it existed yet.

          It shipped. It worked. For the full story, see case study 04.
      - heading: "What 7.5 years actually taught me"
        body: |
          The biggest thing: adoption is a staff problem, not a management problem. I watched it play out over and over. A brand manager signs off on a tool. Staff get a 45-minute onboarding. Three months later, half the team has stopped using it. The programmes that stuck were the ones where we sat with the people doing the actual work, ran check-ins, asked what was hard. Management theatre doesn't make tools land.

          Second thing: the tools that get adopted feel like they're making someone's existing job easier — not like an extra thing they have to learn. The moment it feels like homework, adoption dies. That's the lens I bring to everything I build now. If the person using it has to think too hard about how to use it, the build isn't done.

          Third thing, and I only really understood this looking back — I spent seven and a half years becoming the person a small team calls when something difficult needs figuring out. Not because I was trained for it. Because I said yes, and then I worked it out.
    tools: ["HubSpot CRM", "Firebase", "Retool", "Looker Studio", "Adobe Creative Suite", "Android Studio"]

# --------------------------------------------------------------
# PERSONAL PROJECTS
# Structure per project:
#   - playful framing (what is this, why is it cool) — TOP
#   - "Under the hood, for my fellow nerds" — EXPANDABLE
# --------------------------------------------------------------
projects:
  section_heading: "Things I built because I couldn't stop"
  section_intro: "These aren't client work. They're what happens when I get curious about something at 11pm and need to find out if it's possible. Most of what ends up in the work I do for others was first messed around with somewhere in here."

  items:
    - slug: "genie"
      title: "Genie"
      subtitle: "Talk to a document. Watch it become a webpage."
      year: "2025"
      status: "Ongoing personal experiment"
      playful_description: |
        You upload a document. You talk to it. A webpage appears.

        That's genuinely the whole idea. Upload your product brief, say out loud "make me a pricing page that feels clean and confident," and watch the page get built in front of you. No typing. No templates. No clicking around a page builder.

        I built it because I wanted to know if a voice-first creative tool could actually feel good to use, or whether it would just feel like shouting at your laptop. Turns out it can feel good — but only if you solve about a hundred small UX problems nobody warns you about first.
      nerds_section_heading: "Under the hood, for my fellow nerds"
      nerds_description: |
        The voice part was harder than it sounds. Browser audio has a habit of cutting out after a few seconds, so I had to build around that with chunked recording and live transcription via OpenAI Whisper. You can speak continuously for as long as you need and the system holds on.

        Grounding was the other hard problem. Without careful architecture, the model will confidently fill in gaps that aren't in your source document. So I built a retrieval system on top of ChromaDB and Sentence Transformers (all-MiniLM-L6-v2) that chunks your uploaded material, scores semantic relevance, and only lets the model generate from what you actually provided.

        On top of that, a custom MCP-style pipeline that classifies the user's intent, expands vague voice queries into targeted vector searches, and routes tasks to the most cost-effective model for the job. Plus a post-generation validation step that audits generated HTML and injects Tailwind animations, GPU optimisations, and ARIA accessibility standards without needing another LLM call.

        And because why not, an "amp-style" dashboard where you can fine-tune the model's verbosity, tone, and how strictly it sticks to the source — via visual knobs. Real-time. Because tuning AI behaviour should feel like playing an instrument, not editing a config file.
      tech_stack:
        - label: "Backend"
          value: "Python, FastAPI, SQLite, SQLAlchemy"
        - label: "AI / ML"
          value: "OpenAI (GPT-4o, Whisper), ChromaDB, Sentence Transformers"
        - label: "Frontend"
          value: "Vanilla JS, HTML5, Web Audio API, Tailwind CSS"
        - label: "Architecture"
          value: "RAG, custom MCP routing, vector embeddings"
      tools: ["OpenAI Whisper", "GPT-4o", "ChromaDB", "FastAPI", "Tailwind CSS"]

    - slug: "project-muse"
      title: "Project Muse"
      subtitle: "An AI that actually remembers you, and runs entirely on your own machine."
      year: "2025"
      status: "Ongoing personal experiment"
      playful_description: |
        Most AI tools treat every conversation like it's the first one. Project Muse is my attempt at the opposite — an AI companion that runs entirely on your own machine, builds a picture of you over time, and adapts how it talks to you based on what it learns.

        While you're not using it, it's working. A background engine reads through your past conversations, notices patterns in how you think and what you care about, and quietly updates its model of you. Next time you open it, it's a little more you-shaped.

        The fun part is that under the hood it's not one AI — it's a little team of specialists (one for psychology, one for philosophy, one for literature) and a coordinator deciding who to call in. Sometimes you get one expert. Sometimes you get a synthesised response from a committee. I built it to find out what happens when you take personalisation seriously and privacy as a given, not an afterthought.
      nerds_section_heading: "Under the hood, for my fellow nerds"
      nerds_description: |
        Core architecture is an asynchronous AgentCoordinator that routes user input to specialised domain agents (Psychology, Philosophy, Literature, Cinema). The coordinator decides whether a single-agent response or a synthesised multi-agent narrative better fits the context — the goal being a coherent personality rather than a committee report.

        The real novelty is the RuminationEngine — a background process that runs during downtime, analyses queued interactions, extracts emotional indicators and topic preferences, and updates the user's persistent psyche profile. That profile is modelled on the Big Five (OCEAN) and used to subtly adjust how the system responds next time.

        Everything runs 100% locally. Ollama for local LLM inference (Qwen models), ChromaDB for vector-based long-term memory. Zero data leaves the machine. A RAG system grounds the AI's core identity by pulling from a curated vector collection of literary texts (Oscar Wilde-inspired, because why not), injecting philosophical and stylistic context into its prompts.

        Context-aware tooling via Geopy, Open-Meteo, and Suntime gives the system real-time environmental awareness — local weather, astronomical data, time-of-day context, all flowing into the persona. And a Three.js/WebGL frontend visualises agent activity and inter-agent communication in real-time 3D, because building an AI with no way to see what it's doing feels wrong.
      tech_stack:
        - label: "Core"
          value: "Python, asyncio"
        - label: "AI / ML"
          value: "Ollama (local LLMs), ChromaDB (vector DB)"
        - label: "APIs & data"
          value: "Open-Meteo, Geopy, Suntime"
        - label: "Visualisation"
          value: "HTML5, Three.js, WebGL"
        - label: "Architecture"
          value: "Multi-agent system, RAG, background processing"
      tools: ["Ollama", "ChromaDB", "Python asyncio", "Three.js"]

# --------------------------------------------------------------
# CAPABILITIES
# --------------------------------------------------------------
capabilities:
  section_heading: "Tools I work with"
  section_intro: "Grouped by what they do, not by logo. The list is ever-evolving — knowing the right tool for the problem matters more than loyalty to a stack."

  categories:
    - name: "AI ecosystem"
      description: "Daily-driver tools for client work and experimentation"
      tools:
        - "Claude (Opus / Sonnet / Haiku)"
        - "Claude Code — terminal-native coding"
        - "Claude Cowork — agentic desktop"
        - "Google Gemini, Imagen, Vertex AI"
        - "Google Document AI"
        - "OpenAI (GPT-4o, Whisper)"
        - "ChromaDB, MCP integrations"
        - "Ollama (local LLM inference)"

    - name: "Consulting & adoption"
      description: "How the work gets delivered and made to stick"
      tools:
        - "AI readiness audits"
        - "Process documentation & SOP capture"
        - "Workshop facilitation"
        - "Change management"
        - "Service packaging & pricing"
        - "Stakeholder & client management"
        - "Enterprise account management"

    - name: "Build"
      description: "Full-stack delivery for client engagements"
      tools:
        - "Vue.js 3 (Composition API)"
        - "Firebase (Auth, Firestore, Functions, Hosting)"
        - "Python, FastAPI"
        - "Sharetribe marketplace platform"
        - "Postmark inbound email"
        - "Stripe payments"
        - "Retool admin panels"
        - "HubSpot CRM"
        - "Wix, Webflow, custom HTML/CSS/JS"

    - name: "Data & analytics"
      description: "Making performance visible"
      tools:
        - "Looker Studio dashboards"
        - "Google Analytics"
        - "Firebase real-time data"
        - "Data extraction pipelines"
        - "Campaign reporting & attribution"

    - name: "Content & design"
      description: "The craft layer — built up over 7.5 years of enterprise work"
      tools:
        - "Adobe Photoshop, Illustrator, InDesign"
        - "Adobe Premiere, After Effects"
        - "Video production (end-to-end)"
        - "Infographic & visual translation"
        - "Mobile-first design"
        - "Canva, CapCut"

# --------------------------------------------------------------
# EXPERIENCE
# --------------------------------------------------------------
experience:
  section_heading: "Experience"

  entries:
    - role: "AI Builder & Adoption Specialist"
      organisation: "Freelance — Sydney & regional NSW"
      start_date: "Jan 2026"
      end_date: "Present"
      summary: "Building AI tools and workflows with SMB teams across healthcare, property, and franchise operations. See case studies 01, 02, and 03."

    - role: "Technical Marketing Lead & Multimedia Specialist"
      organisation: "Pitchpocket — Sydney"
      start_date: "Feb 2018"
      end_date: "Oct 2025"
      summary: "Seven and a half years at a small Sydney startup, across pretty much every role the business needed filling. Campaign assistant → self-taught app builder → enterprise account lead → AI platform founder. Clients included PPG Paints, Nespresso, Unilever Food Solutions, Evergreen Garden Care. See case studies 04 and 05."

  education:
    - institution: "University of Sydney"
      qualification: "Bachelor of Commerce"
      focus: "Marketing & Business Information Systems"
      start_date: "2015"
      end_date: "2018"

# --------------------------------------------------------------
# CONTACT
# --------------------------------------------------------------
contact:
  section_heading: "Say hi"
  intro: "Whether you're exploring AI for your team, thinking about a build, or hiring for a role where this kind of work would land — I'd genuinely love to hear from you. Email's the fastest way."
  email_cta: "anasmoin@gmail.com"
  form:
    enabled: true
    fields:
      - name: "name"
        label: "Name"
        type: "text"
        required: true
      - name: "email"
        label: "Email"
        type: "email"
        required: true
      - name: "message"
        label: "What's on your mind?"
        type: "textarea"
        required: true
  footer_note: "Based in Newtown, Sydney. Open to remote and hybrid across Australia."

# ==============================================================
# BUILD NOTES FOR THE CODING AGENT
# These are instructions for the person building the site from
# this content.md. They're not rendered to users.
# ==============================================================
build_notes:

  # ---- OVERALL TONE ----
  tone: |
    The site should feel like a person, not a consultancy. Warm, curious,
    slightly self-deprecating, passionate about the tools. Think "smart
    friend explaining something cool" rather than "agency landing page."
    Minimal corporate language. Real sentences. Personality over polish.

  # ---- FACTS BAR (replaces the old stats bar) ----
  facts_bar:
    placement: "Directly below the hero, full width"
    style: |
      Horizontal row of 4 facts. Large value on top, small label below.
      No heavy borders or card shadows. Clean and airy.
      On hover of each fact, consider a subtle tooltip with a one-line
      personality note (e.g. hovering "∞ YouTube tutorials" shows
      "yes, including the one that taught me to build an Android app").
    responsive: "Stacks to 2x2 grid on tablet, single column on mobile"

  # ---- CASE STUDY PAGES ----
  case_study_layout:
    structure: |
      Each case study page should follow this visual rhythm:

      1. Case number + tag (e.g. "01 · Health & beauty clinic") — small, quiet
      2. Big headline — confident, narrative
      3. One-liner subhead — sets expectation
      4. Facts row (4 facts, not stats) — see per-case-study `facts` array
      5. Pull quote section — large, offset, visually distinctive.
         Use the `pull_quote` field. Consider 2x normal font size,
         different font weight or italic, with a subtle vertical
         accent bar on the left.
      6. Sections, rendered as the existing structure (heading + body).
         BUT break up the visual monotony:
           - Every 2-3 paragraphs, consider a small inline callout box
             with a relevant one-liner (can be auto-pulled from the
             section or manually added later)
           - Use subtle section dividers (thin horizontal rule or small
             chapter number) between sections
      7. Tools used — small chip-style tags at the bottom
      8. Next case study / back to work — navigation

    interactive_elements: |
      - Progress indicator (thin top bar) showing scroll progress through
        the case study
      - Sticky "back to work" link in the top-left after scrolling
      - Pull quote should fade in slightly as it enters viewport
      - The facts row: subtle count-up animation for numeric values on
        first scroll into view

    avoid: |
      - Large hero images that push content below the fold
      - Heavy card-based layouts for the section content
      - Icons next to every section heading — keep it quiet
      - Excessive use of bold/italic within paragraphs — let prose breathe

  # ---- PERSONAL PROJECTS SECTION ----
  projects_layout:
    structure: |
      For each project:
        1. Title + subtitle — title larger, subtitle in a softer colour
        2. `playful_description` rendered prominently — this is the hook
        3. An expandable accordion/disclosure labelled with
           `nerds_section_heading` (e.g. "Under the hood, for my fellow nerds").
           When expanded, show `nerds_description` + `tech_stack` table.
        4. Tools as small chips at the bottom of the expanded section.

    style: |
      Two projects side-by-side on desktop, stacked on mobile.
      The "Under the hood" disclosure should feel inviting to click,
      not hidden. Consider a small chevron/arrow that rotates when
      opened, and a "wrench" or "gear" emoji next to the label if
      appropriate — this is one of the few places the tone can be playful.

    interactive_elements: |
      - Smooth accordion expand/collapse with a short easing transition
      - When the "Under the hood" section is open, the tech_stack renders
        as a clean 2-column table (label → value)
      - Consider adding a placeholder slot for screenshots/screen
        recordings in the expanded section — Ahmed may add those later

  # ---- HERO SECTION ----
  hero_layout:
    structure: |
      - Role tag (small, quiet): "AI Builder & Adoption Specialist · Sydney"
      - Headline (large, confident)
      - Subheadline (supporting paragraph)
      - Two CTAs side by side
      - Caption below CTAs (smallest text, can be slightly muted)
    style: |
      Left-aligned text on clean surface. No hero image. Typography does
      the work. Generous vertical whitespace above and below.
    interactive_elements: |
      - Primary CTA has a subtle hover state (background fill, no heavy shadow)
      - Secondary CTA is underlined text style, not a boxed button

  # ---- NAVIGATION ----
  navigation:
    structure: "Top nav: Work · About · Contact · CV (download link)"
    style: "Flat. No dropdowns. No mega-menus."
    mobile: "Inline horizontal scroll or simple overlay — no hamburger gymnastics."

  # ---- TYPOGRAPHY ----
  typography: |
    - One serif (optional) for headlines, one neutral sans for body
    - Suggestions: Inter, Söhne, Graphik, or GT Walsheim for body.
      Tiempos or Söhne Breit for headlines if serif.
    - Body 16px, line-height 1.7, max-width 640–720px
    - Avoid display fonts like Unbounded — they read as
      "portfolio-for-designers," not "portfolio for a builder."

  # ---- COLOUR ----
  colour: |
    - Monochrome base: near-black text (#1a1a1a, not pure black) on
      off-white or bone background (#fafaf7 or similar)
    - ONE restrained accent colour for links, active states, and
      pull-quote accents. Suggestions: muted teal (#2f6b6b),
      warm clay (#c15a3f), or deep navy (#1e3a5f). Not electric.
    - Use the accent sparingly. It should feel like punctuation,
      not decoration.

  # ---- MOTION ----
  motion: |
    - Subtle. Fade + 8px translate on scroll-reveal. Nothing bouncy.
    - Count-up animation on numeric facts (0.8s, ease-out)
    - Pull quotes can have a slightly longer fade (1.2s) — they're
      the visual pause in a case study
    - No parallax. No auto-playing carousels. No heavy JS animations.

  # ---- OPTIONAL FUTURE ENHANCEMENTS ----
  future_ideas: |
    - Pitchpocket case study: a visual timeline showing the 7.5-year
      arc with milestones (app shipped, PPG onboarded, Stakaroo live, etc.)
    - Health clinic case study: a simple diagram of the data pipeline
      (scanned PDF → Document AI → LLM sense-check → branded dashboard)
    - Franchise case study: a before/after diagram showing the email
      flow (manual 2-hour window → automated marketplace)
    - Per-project screen recordings for Genie and Project Muse once
      Ahmed opens those codebases again
