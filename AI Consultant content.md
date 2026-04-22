---

# ==============================================================

# PORTFOLIO SITE CONTENT

# Anas Ahammed — AI Adoption Consultant

#

# This file drives all content across the site. Edit here,

# rebuild, done. No touching components unless adding features.

#

# Structure:

# meta — site-wide info (name, contact, SEO)

# hero — landing section

# about — bio / philosophy

# case_studies — 5 main case studies (in display order)

# projects — additional projects (Halcyon01 etc.)

# capabilities — skills/tools grouped by category

# experience — condensed work history

# contact — CTA + form config

# ==============================================================

meta:
name: "Anas Ahammed"
role: "AI Adoption Consultant"
tagline: "Helping teams adopt AI that actually sticks"
location: "Newtown, Sydney, NSW"
email: "anasmoin@gmail.com"
phone: "0451 298 483"
linkedin: "" # add when ready
github: "" # add when ready
seo_title: "Anas Ahammed — AI Adoption Consultant, Sydney"
seo_description: "I embed with SMB and mid-market teams to find where AI creates real leverage, then build the tools and internal capability that make adoption stick."

# --------------------------------------------------------------

# HERO

# --------------------------------------------------------------

# Design: left-aligned text on clean surface. No hero image.

# Typography does the work. One line headline (large serif or

# neutral sans), supporting paragraph, two CTAs.

# --------------------------------------------------------------

hero:
headline: "I help teams adopt AI that actually sticks."
subheadline: "Embedded consulting for SMB and mid-market teams. Audit workflows, identify where AI creates real leverage, build the tools and internal capability that make the change hold."
primary_cta:
label: "See my work"
link: "#case-studies"
secondary_cta:
label: "Get in touch"
link: "#contact"

# Small caption beneath CTAs — optional, adds texture

caption: "Currently working with clients across healthcare, property, and franchise operations in Sydney and regional NSW."

# --------------------------------------------------------------

# ABOUT

# --------------------------------------------------------------

# Design: single column, narrow text measure (~60 characters).

# Three paragraphs max. Generous line height. A small pull quote

# or philosophy line can break it up visually.

# --------------------------------------------------------------

about:
heading: "About"
paragraphs: - "I'm an AI adoption consultant based in Sydney. I spend most of my time inside client teams — sitting with the people who actually do the work, mapping where time is being lost, and building AI solutions with human-in-the-loop design where trust matters. The goal is always the same: the team can run what I built after I leave." - "Before consulting, I spent seven and a half years at a Sydney micro-SaaS startup running enterprise account management for brands including PPG Paints, Nespresso, and Unilever Food Solutions. I built and shipped an AI-driven landing page platform that cut production time by 90%. I have a business degree, not a computer science one — the technical depth came from necessity and curiosity, not a curriculum." - "The through-line across everything I do: I care more about whether an engagement leaves a team more capable than when I started, than whether it produced a polished deliverable. Tools are the easy part. Adoption is the job."
philosophy_line: "Tools are the easy part. Adoption is the job."

# --------------------------------------------------------------

# CASE STUDIES

# --------------------------------------------------------------

# Design: Grid of 5 cards on desktop (2 columns, last row spans

# one or sits alone), stacked on mobile. Each card shows:

# - case_number / tag

# - headline

# - one-line summary

# - "Read case study →" link

# Clicking opens a dedicated case study page (/case/slug) with

# the full structure from the `sections` array below.

#

# Reveal: progressive — each card fades in on scroll.

# --------------------------------------------------------------

case_studies:

- slug: "sydney-health-clinic"
  case_number: "01"
  tag: "Health & beauty clinic"
  status: "Live"
  headline: "Turning a clinical admin task into a branded sales tool — and processing 300+ reports with zero compliance incidents"
  one_liner: "Compliance-grade AI pipeline for blood-test report processing at a Sydney health clinic."
  client:
  display_name: "A Sydney health and beauty clinic"
  anonymised: true
  context: "High-value clinical practice — over 200 treatment patients per month, treatments averaging $1,000+."
  scope: "Full build + ongoing"
  stats:
  - value: "300+"
    label: "Reports processed"
  - value: "~2 hrs"
    label: "Saved per patient"
  - value: "0"
    label: "Compliance incidents"
  - value: "Phase 2"
    label: "Scoping in progress"
    sections:
  - heading: "The client"
    body: |
    A Sydney health and beauty clinic offering peptide therapies and high-value treatments — typical spend per patient is over $1,000. Before any treatment, every patient needs a blood test analysed and approved by a medical practitioner. That's a compliance requirement and also a trust signal for their clients. The clinic processes over 200 treatment patients a month, but they're running blood tests for significantly more — people come in, get tested, and use the consultation to decide whether to proceed.
  - heading: "The problem as they described it"
    body: |
    The existing process was completely manual. A patient came in for a consultation, the clinic staff would sit with them and walk through a standard lab report — small text, tiny decimal points, medical jargon — trying to explain what each marker meant and what it suggested about their health. It took about two hours per patient. It didn't scale, it wasn't repeatable across staff, and the output was a generic lab PDF that looked exactly like every other blood test they'd had in their life.

    The owner had a sharper insight than just "automate this." He pointed out that the consultation was also the highest-value moment in the sales funnel — the point where a patient decides whether to book a $1,000+ treatment. A hard-to-read lab report was actively working against that moment. He wanted a tool that did two things at once: make the data clinically useful, and be a beautiful, branded take-home asset that the patient would remember. A processing tool and a sales tool in one.

  - heading: "What I did"
    body: |
    The hardest part of this build was never the dashboard — it was the data extraction. Blood reports come in wildly different formats depending on the lab, most of them as scanned PDFs, with numbers, units, and reference ranges arranged in inconsistent layouts. I spent about a week trying different extraction methods. Traditional OCR failed fast — you can't hardcode formatting rules when the formatting itself is a moving target. I tried a few OCR libraries and parsers before landing on Google Document AI, which handled scanned layouts far better and had AI-backed pre-categorisation of the extracted values.

    After extraction, I passed the data through an LLM with a medical terminology dictionary to sense-check the markers — standardising names, catching obvious extraction errors, flagging values outside reference ranges. From there I built the dashboard: clean marker presentation with plain-English explanations, flagged high/low readings, health and beauty recommendations aligned to the findings, and a biological age calculation. All branded to the clinic.

    Compliance shaped the architecture from day one. Australian health data regulations require strict handling — patient names and personal details are stripped before processing and stored separately in secure cloud storage rather than locally. Original lab reports are held ephemerally during processing and purged afterwards. All processing happens onshore. Every generated report routes to a medical practitioner for approval before it can reach a patient — they cross-check the generated report against the original lab report and sign off. The doctor is still in the loop at the point that matters; the AI just removes two hours of prep from their workflow.

    The technical side: web app hosted on Render, authenticated access for clinic staff and the approving practitioner, PDF upload per report to keep the flow simple. The clinic is now scoping a phase two with me — a full patient-facing dashboard with historical data and treatment history over time.

  - heading: "The result"
    body: |
    The system is live. Over 300 reports have been generated through the pipeline. Patients receive a branded PDF by email — the clinic doesn't yet expose the web app directly to patients, that's coming in phase two. What was a two-hour manual task is now an approval workflow that takes the practitioner a few minutes per report.

    The clinic has turned a boring, uninteresting document into something that actively helps drive business and helps their customers actually understand what their blood tests mean.

  - heading: "What I learned"
    body: |
    The technical problem looked like the hard part. It wasn't. The hard part was earning trust in a regulated, high-stakes context. A decimal point in the wrong place on a blood marker isn't a bug — it's a patient being told something wrong about their health. So the most valuable work I did on this project wasn't writing code. It was collecting over 200 real lab reports, manually verifying the expected extraction results, and writing a test suite that ran after every processing change to catch regressions. That's the work that made the system trustworthy enough for a doctor to stake their signature on.

          The other lesson is about reframing the brief. The owner didn't just want a processing tool — he wanted a sales tool. Recognising that early changed the entire design. The reports aren't just accurate; they're beautiful, branded, and something the patient wants to read. That's the difference between solving a task and solving a business problem.

    tools: ["Google Document AI", "Gemini", "Python", "Render"]

- slug: "franchise-network"
  case_number: "02"
  tag: "Franchise operations"
  status: "Near completion"
  headline: "Recovering $6k/month in lost revenue by replacing a 2-hour manual window with an automated marketplace"
  one_liner: "Email-to-marketplace automation for a 4-franchise maintenance services network."
  client:
  display_name: "A maintenance services franchise network"
  anonymised: true
  context: "4 franchise territories across regional Australia, ~80 maintenance requests per day per franchise."
  scope: "4-week build, currently in week 2"
  stats:
  - value: "$6k/mo"
    label: "Revenue recovery target"
  - value: "4 wk"
    label: "Build timeline"
  - value: "15%"
    label: "Of jobs being captured"
  - value: "4"
    label: "Franchises onboarding"
    sections:
  - heading: "The client"
    body: |
    A regional Australian maintenance services business running four franchise territories. Combined, the franchises receive around 80 maintenance requests per day per franchise — a high-volume, fast-moving operation where most jobs are small, time-sensitive, and spread across wide geographies in rural Australia.
  - heading: "The problem as they described it"
    body: |
    About 15% of incoming maintenance requests couldn't be fulfilled in-house — limited personnel, long driving distances between jobs, not enough hours in the day. Normally that's fine, because the franchise has a two-hour window to either assign the job to another licensed contractor or on-sell it. But if that window expires, the franchisor takes the job back and on-sells it themselves — and the franchise gets no cut.

    The whole thing depended on the owner manually forwarding an email or SMS to a list of contractors within two hours. If he was busy, driving, or just missed the notification, the job and the lead fee disappeared. Across four franchises, this was costing them around $6,000 a month. Not a strategy failure. Not a capacity problem. A process failure, repeated hundreds of times a month.

  - heading: "What I did"
    body: |
    I started with a remote workshop to map out the current process end-to-end — where the bottlenecks were, what an ideal flow would look like, what the repeat friction points were. The design followed from there.

    Inbound jobs land in the franchise inbox. A Postmark inbound server captures and parses the email. From there, Grok extracts the structured data — location, job type, urgency, contact details — and hits Google Maps for geocoding before pushing a structured JSON payload to a Sharetribe marketplace. Available contractors see new jobs appear on the marketplace in near-real-time and can claim them directly. The 2-hour window is now a background timer, not a human responsibility.

    The architectural decision I want to flag is Sharetribe. I could have built a custom marketplace — auth, user management, payments, admin tooling — but that would have meant months of work, bugs, and ongoing maintenance for a small business. Sharetribe gives us mature, battle-tested infrastructure for secure payments, user management, and private customer data handling out of the box. The right call here was to pick a platform that transfers risk to a vendor whose job is managing that risk at scale. For a small business, that's the difference between a system they own and a system they can run.

    Alongside the core pipeline I built a branded landing page, a user dashboard, and a credit-based promotional system (first 6 leads free, buy 10 get 2 free) to drive contractor onboarding. A working demo has been delivered and signed off; the remaining two weeks are Stripe integration for live payments and multi-user production testing.

  - heading: "The result"
    body: |
    Automated listing generation is working end-to-end. The client has approved the demo, sample look-and-feel, and promotional framework. Launch is scheduled for end of week 4. Once live, the previously lost 15% of maintenance requests will flow to contractors automatically — no one has to remember to forward an email, no two-hour window is wasted on manual handling.
  - heading: "What I learned"
    body: |
    The insight I took away from this wasn't about the automation itself — it was about how easy it is to walk past a recurring process failure. The owner had been losing $6,000 a month for years, and because it was a steady leak rather than a dramatic event, it never felt urgent. It's the kind of problem that gets normalised by repetition. Someone has to stop and do the maths: 15% of a high-volume pipeline, multiplied across four franchises, compounding month after month.

          The other lesson is about what counts as an AI use case. There's barely any AI in this system — a small LLM call to parse unstructured emails into structured JSON, that's it. The rest is boring infrastructure: email parsing, API integration, marketplace configuration. But this is exactly the kind of project that delivers the clearest ROI. Not everything worth building needs to be an "AI project" in the flashy sense. The leverage here comes from identifying the hinge point and automating it cleanly.

    tools: ["Postmark", "Grok", "Sharetribe", "Google Maps API", "Stripe"]

- slug: "regional-real-estate"
  case_number: "03"
  tag: "Real estate"
  status: "Delivered"
  headline: "From 'hire a developer' to AI-assisted marketing — without building anything in AI"
  one_liner: "Strategy and coaching engagement with a 25-year-old regional NSW real estate agency."
  client:
  display_name: "A regional NSW real estate agency"
  anonymised: true
  context: "25-year-old agency, 6 staff, residential/rural/commercial property. 6 hours south of Sydney."
  scope: "2–3 working sessions"
  stats:
  - value: "25 yr"
    label: "In business"
  - value: "2–3"
    label: "Working sessions"
  - value: "$0"
    label: "Spent on dev tools"
  - value: "Live"
    label: "Website in progress"
    sections:
  - heading: "The client"
    body: |
    A small real estate agency six hours south of Sydney. Two principals, about six staff, 25 years in business — they sell everything from first homes to rural land and commercial property. Their existing website looked dated next to their competitors, and they were running out of things to post on social media. They had the instinct that something needed to change, but no idea where to start.
  - heading: "The problem as they described it"
    body: |
    When I first sat down with them, the ask was straightforward: "make our website look like our competitors'." They were planning to hire a conventional web developer and hand them that brief. I gently pointed them toward Fiverr and similar platforms to get a cost-effective quote — but as we talked it became clear they didn't actually have a scoped outcome. They couldn't tell a developer what they wanted, which meant whoever they hired would get to define the project for them.

    The bigger issue underneath was skepticism about AI. "We won't know how to use it." "It sounds too complicated." "We don't have the skills." Not hostility — more a feeling that this was a world they weren't invited into.

  - heading: "What I did"
    body: |
    I stopped talking and started showing. I opened Gemini, wrote a simple prompt referencing their existing site, and within a minute had a live mockup of what a refreshed version could look like. Their body language changed immediately. They'd expected this to take weeks and cost thousands. Watching it happen in under 60 seconds was the whole argument.

    From there we ran two or three working sessions together. We locked down the look and feel of the new site, where elements should sit, their branding guide, and — most importantly — a clear technical briefing document for a developer. That briefing document was the actual deliverable. With it in hand, they could request competitive quotes, compare them meaningfully, and choose a developer they felt comfortable with. The AI hadn't replaced the developer. It had replaced the confusion that usually makes that conversation so one-sided.

    They decided not to use AI to build the site itself, and I think their reasoning was correct: they were worried about ongoing upkeep. If something broke or needed a change, they didn't want to be dependent on prompting their way out of it. That's a legitimate concern for a small business, and I respected it. The AI's job here was to sharpen their thinking, not to ship their website.

    For the content side, I built them a small prompt library using custom Gems in Gemini. Each prompt asks them a couple of simple questions — property name, key features, target buyer — then generates social media copy tailored to the platform. Because they already live in Google Workspace, recommending Gemini wasn't brand preference; it was the tool that integrated most cleanly into the systems they already used.

  - heading: "The result"
    body: |
    They came in expecting to hire a developer and hope for the best. They left with a scoped brief, a branding guide, and a prompt library they could run themselves. Their website is currently being built by a developer they picked deliberately, using a specification they wrote with confidence. They post social content consistently without needing to write copy from scratch each time — they fill in a few variables and Gemini drafts the post.

    The real win is that they're not scared of AI anymore. It's a tool in their drawer now, not a foreign language.

  - heading: "What I learned"
    body: |
    The instinct when you start a consulting engagement is to look for big automations and end-to-end transformations. This engagement taught me the opposite. For slow adopters — people who've been successful for decades doing things a particular way — the feather touch matters more than the big intervention. Live-prototyping one idea in under a minute changed more minds than any explanation I could have given.

          The other lesson: not every engagement needs to end with AI doing the work. Sometimes the right outcome is a small business making a better decision with AI's help — and then hiring a human for the execution. Recommending they stick with a human developer, and leaving them with tools to brief that developer properly, was a better outcome than a full AI build would have been. Consulting isn't about the most ambitious possible recommendation. It's about the one that actually fits the client.

    tools: ["Gemini Canvas", "Google Gems", "Google Workspace"]

- slug: "stakaroo"
  case_number: "04"
  tag: "SaaS platform"
  status: "Deployed — codebase retained"
  headline: "Building an AI SaaS platform solo without a development background — and why most vibe-coded projects fail"
  one_liner: "Self-service AI landing page platform shipped in months without formal dev background."
  client:
  display_name: "Pitchpocket (final major project)"
  anonymised: false
  context: "Last major project before leaving Pitchpocket. Built to solve a scaling bottleneck internally and productise it for clients."
  scope: "Solo architect + builder"
  stats:
  - value: "90%"
    label: "Production time cut"
  - value: "1"
    label: "Developer (me)"
  - value: "$0"
    label: "Outsourced budget"
  - value: "Full"
    label: "Stack shipped"
    sections:
  - heading: "The context"
    body: |
    Stakaroo was the last major project I built at Pitchpocket before leaving. The business made bespoke marketing landing pages for clients by hand — copy, design, build — and it was impossible to scale. One designer-developer pair could produce about two pages a day. With over a thousand users on our apps and enterprise clients queuing for campaign assets, that pipeline was the bottleneck of the entire business. The only way out was to turn the production process into a product — a self-service platform where a small business could generate and publish a professional landing page in minutes, without needing a designer or a developer.
  - heading: "The problem — including the personal one"
    body: |
    I'm not a trained developer. I have a business degree. I'd built things before — a mobile app MVP years earlier by watching YouTube tutorials — but this was a full-stack SaaS with AI integration, multi-tenancy, authentication, Stripe payments, and hosted landing pages. In 2025 that would have been a hundreds-of-thousands-of-dollars project at an agency. We didn't have that budget and weren't going to get it.

    At the same time, AI coding assistants were becoming good enough that a non-developer could, in theory, build something this ambitious. Most people were trying. Most were failing — projects fizzled out halfway through, the agent hallucinated its way into dead ends, codebases became unmaintainable. That failure pattern was the real problem I had to solve, more than any individual technical challenge.

  - heading: "What I did"
    body: |
    I started by experimenting with the Canvas features in Claude and Gemini, prototyping small pieces of the platform to see how far I could get. When I realised I could iterate effectively, I committed fully — moving from copy-pasting code into VS Code to integrating a coding agent directly into the IDE.

    The most important thing I did on this project wasn't write code. It was write a manifesto. Before building anything, I wrote a product requirements document describing what the platform was for, what it must do, and what it must never do. I divided development into phases with explicit goals and tests. Then — and this is the part that mattered — I wrote a system prompt that instructed the AI agent to reference the manifesto before every decision. Every new idea had to either align with the manifesto or trigger an explicit manifesto update. Every phase started with the agent proposing a plan for me to approve. Every change included a way for me to test it before moving on.

    This is now standard practice in agentic coding — specification documents, plan-first workflows, test-checkpoints. At the time it wasn't. I built it myself because I watched so many other people's projects collapse into chaos and I wanted to finish mine.

    The platform shipped: Vue.js 3 frontend with drag-and-drop panel reordering, Firebase backend (Auth, Firestore, Cloud Functions, Hosting, Storage), Gemini API for generated copy, Imagen 3 for generated images, Stripe integration, QR code generation, built-in analytics for landing page view tracking. Users pick their industry, enter a topic, and get a branded landing page in minutes.

    The hardest technical problems were the ones I hadn't done before — authentication, Stripe webhooks, multi-tenant database structure without runaway API costs, custom styling that didn't break across templates. Those took real time. But the project never fizzled out, and it finished.

  - heading: "The result"
    body: |
    The platform deployed and went live. The reaction internally was strong — this was a product that would have cost the business hundreds of thousands of dollars to build conventionally, and I'd delivered it solo in a matter of months. After I left, the business didn't maintain or pursue it; they fell back into traditional agency and staffing work because I was the one leading the project. That's a legitimate outcome for them, and I retain the codebase and license. My intention is to rebrand and relaunch it independently — the right timing just hasn't arrived yet.
  - heading: "What I learned"
    body: |
    The technical skill you need to build something ambitious with AI assistance is real but teachable. The meta-skill — holding the AI agent accountable across the full length of a project — is the thing almost nobody talks about and the thing that separates finished projects from abandoned ones. You need a clear outcome mapped out before you start, a system for checking that every step is still on plan, and a willingness to update your plan explicitly when the work reveals something you didn't anticipate.

          The second lesson is about ownership. At the time I was proud of the technical achievement. In hindsight, the more valuable outcome was internalising a working method for AI-assisted building that I've used on every project since — the health clinic dashboard, the franchise marketplace, every freelance build. Stakaroo wasn't just a product. It was the apprenticeship I gave myself.

    tools: ["Vue.js 3", "Firebase", "Gemini API", "Imagen 3", "Stripe", "Cloud Functions"]

- slug: "pitchpocket"
  case_number: "05"
  tag: "Enterprise account management"
  status: "7.5 years (concluded Oct 2025)"
  headline: "A 7-year run at a micro-SaaS startup managing enterprise clients — from first pitch to 8,000 in-aisle retail training sessions"
  one_liner: "Enterprise relationships with Nespresso, PPG Paints, Unilever Food Solutions, and more."
  client:
  display_name: "Pitchpocket (Sydney)"
  anonymised: false
  context: "Micro-SaaS startup building mobile apps and landing page tools for enterprise marketing and training."
  scope: "Full account management + technical delivery"
  stats:
  - value: "8,000+"
    label: "Training sessions (PPG/AHE)"
  - value: "500k+"
    label: "Content views"
  - value: "7.5 yr"
    label: "Tenure"
  - value: "6+"
    label: "Enterprise brands"
    sections:
  - heading: "The context"
    body: |
    I spent seven and a half years at Pitchpocket, a Sydney-based micro-SaaS startup building mobile apps and landing page tools for enterprise marketing and training. It was a small team, which meant I ran the full stack of an account — pitching the tool, onboarding the client, building the content, managing the relationship, reporting the results. Clients included Nespresso, Unilever Food Solutions, PPG Paints, Evergreen Garden Care, Pringles, and Australian Homeware Enterprises.

    The work that's most relevant to a consulting or adoption role isn't any single project — it's the shape of the role itself. I was the translator between clients who had training problems and an overseas dev team who built the tool. That meant running the discovery, writing the brief, managing feedback loops, and making sure what got built solved the actual problem rather than the one the client had first described.

  - heading: "The headline engagement — PPG Paints"
    body: |
    PPG Paints came on board needing a new way to train Bunnings retail staff. Their existing training was robust but time-consuming and expensive: multi-hour sessions, staff pulled off the shop floor, inconsistent reach across hundreds of stores. They needed something that could train a staff member in five minutes, in-aisle, on a phone — without interrupting customer service.

    I sat with their L&D team to map annual learning goals, broke the goals into micro-topics, and built mobile-optimised learning modules on our platform. The relationship ran for around a year. The work evolved from me-building-everything to a repeatable briefing process: I built a simple PowerPoint template that let their team brief new modules in the tool they already knew, which dramatically shortened the revision cycles that had been consuming the relationship.

    Across the programme, we delivered over 8,000 training sessions to retail staff at Bunnings and independent hardware stores across Australia and New Zealand, covering more than 10 products. The brand had real-time visibility of training activity nationally — something their previous programme never delivered.

  - heading: "The operating pattern across all enterprise clients"
    body: |
    Every engagement followed the same arc. Pitch meeting. Workshop with the client's marketing or L&D team to map what success looked like. Requirements document. Feedback loops during build. Site visits to watch their staff actually use the tool in the field — the step that most vendors skip. Monthly analytics reports. Cycle again.

    Most of the tangible deliverables were content and tooling: scripts written in plain English for technical products (OH&S training at Craveable Brands, lawn care science at Evergreen, product features at Nespresso), landing pages designed mobile-first, infographics, short-form video production end-to-end. But the deliverable that actually kept clients renewing was the discipline of treating their staff — not their brand managers — as the real users of the product.

  - heading: "The result"
    body: |
    Across the seven and a half years I managed enterprise relationships, shipped the Stakaroo SaaS platform (see case study 04), ran the LinkedIn B2B campaign that brought in $100,000+ in conversions on a micro-budget, and built the internal dashboards that made it possible to run campaigns across thousands of users without a dedicated ops team.
  - heading: "What I learned about adoption"
    body: |
    Adoption is a staff problem, not a management problem. The pattern I saw again and again: a brand manager or L&D head signs off on a tool, staff get a 45-minute training session, and three months later half the team has forgotten it exists. The engagements that stuck were the ones where we sat with staff, ran check-ins, sent surveys, actually asked what was hard. Everything else was marketing theatre.

          The tools that get adopted share a property that's easy to describe and hard to deliver: they feel like they're making someone's existing job easier, not adding an extra thing to learn. The moment a tool feels like homework, adoption dies. That's the lens I now bring to every AI adoption engagement — is this making the person's day easier, or am I asking them to do a new thing to get a future benefit? If it's the second, the project will struggle regardless of how good the AI is.

    tools: ["HubSpot CRM", "Firebase", "Retool", "Looker Studio", "Adobe Creative Suite"]

# --------------------------------------------------------------

# ADDITIONAL PROJECTS

# --------------------------------------------------------------

# Design: Smaller section than case studies. Grid of cards,

# denser, less real estate. These are "things I built because I

# was curious" projects — frame as the laboratory behind the

# consulting work. Each card opens a simple modal or expands

# inline, not a full page.

# --------------------------------------------------------------

projects:
section_heading: "Side projects & research"
section_intro: "The consulting work is the output. These are the experiments and personal projects where I test working methods, push the tools past their defaults, and build things I'd want to use myself. Most of what ends up in client work was first stress-tested here."

items: - slug: "halcyon01"
title: "Halcyon01"
subtitle: "Personal digital twin — a voice-native AI meta-agent"
framing: "The agentic architecture work behind the consulting method"
one_liner: "A multi-modal AI agent that takes natural language commands, finds the right tool via semantic search, and executes. Built to stress-test how far agent-accountability patterns can scale."
year: "2025"
status: "Ongoing personal project"
long_description: |
Halcyon01 is the project where I push agent design past what any client engagement would reasonably require. The working method I use on client builds — specification-first, manifesto-driven, human-in-the-loop — gets its real workout here. If I want to understand why a technique works, I build the extreme version of it on Halcyon01 first.

        The core architecture is a semantic-search tool router. A local ChromaDB vector database indexes a library of modular Python functions. When I give a command in natural language, the agent performs a semantic search to find the most relevant tool, uses Gemini to extract the specific arguments from my phrasing, and executes. New tools can be added to the library without retraining anything — the semantic search just finds them.

        Around that core, the project layers multi-modal interfaces. A voice-native interface using asyncio for real-time interruptible conversations (Deepgram or Whisper for speech-to-text, OpenAI for text-to-speech). Vision capabilities via screenshots and OCR (Tesseract) to identify UI elements. A Tkinter GUI control panel for real-time monitoring. A Streamlit web dashboard with cost estimation and a code sandbox.

        The part I care about most is the digital-twin layer. An offline "rumination engine" analyses conversation history, tool usage patterns, and a personal journal to maintain a Psyche Profile based on the Big Five (OCEAN) personality traits. The agent uses this profile to tailor its assistance — whether it plans ahead for a "planner" personality or leaves space for a "tinkerer." Sensitive functions (system restarts, file deletions) require explicit confirmation.

        None of this is production-ready. It's not meant to be. It's the place where I find out what's hard about voice, what breaks when a confirmation system gets loud, how you index tools semantically without them colliding. Every insight that comes out of Halcyon01 ends up informing something I do with a client.
      tech_stack:
        - label: "Brain"
          value: "Google Gemini (reasoning, argument extraction)"
        - label: "Memory"
          value: "ChromaDB semantic search, JSON/Markdown logs"
        - label: "Voice"
          value: "asyncio, Deepgram, Whisper, OpenAI TTS"
        - label: "Vision"
          value: "Screenshots + Tesseract OCR"
        - label: "Interfaces"
          value: "Tkinter GUI panel, Streamlit dashboard"
        - label: "Safety"
          value: "Confirmation system for sensitive functions"
      key_learnings:
        - "Semantic tool routing works surprisingly well — adding new functions doesn't require retraining, just good naming and documentation in the vector store."
        - "Voice interruption is harder than voice output. Most of the complexity is in state management, not audio."
        - "The OCEAN personality modelling was a fun rabbit hole but its practical value was less than I expected — lightweight behaviour preferences (planner vs. tinkerer) did most of the work that the full psyche profile was meant to."
      tools: ["ChromaDB", "Google Gemini", "Python asyncio", "Deepgram", "Tesseract", "Streamlit", "Tkinter"]

    - slug: "blood-analysis-personal"
      title: "Suade — personal blood analysis dashboard"
      subtitle: "Medical PDF to visual health dashboard"
      framing: "The early prototype that became the Sydney clinic engagement"
      one_liner: "Built as a personal tool before the clinical version existed — Spotify-Wrapped-for-your-body from messy lab PDFs."
      year: "2025"
      status: "Prototype — led to commercial engagement"
      long_description: |
        This was the personal project that later grew into the Sydney health clinic engagement. The original version was built for me to track my own blood markers over time — turning the same messy lab PDFs into a clean, scrollable visual dashboard with trends, flagging, and plain-English explanations.

        Two things came out of the personal build. First, the technical pipeline (OCR → Document AI → LLM sense-check → dashboard) was developed and tested before any client saw it, which meant when the clinic engagement started I wasn't figuring out the hard parts on their data. Second, the "Spotify Wrapped for your body" visual idea — the thing that made the clinic owner say this could be a sales tool, not just a processing tool — was proven out here first.

        It's a good demonstration of the pattern I rely on: build the thing I want to exist, find out what's hard, and let the commercial version ride on the infrastructure I've already stress-tested.
      tech_stack:
        - label: "Data extraction"
          value: "Google Document AI + Cloud Healthcare NLP"
        - label: "Processing"
          value: "Python"
        - label: "Environment"
          value: "Google Cloud Platform"
      tools: ["Google Document AI", "Python", "GCP"]

# --------------------------------------------------------------

# CAPABILITIES

# --------------------------------------------------------------

# Design: Clean grid. 5 category cards in a row on desktop,

# single column on mobile. Each card: category name, short

# description, bullet list of tools. No icons — text does it.

# --------------------------------------------------------------

capabilities:
section_heading: "Tools & capabilities"
section_intro: "Grouped by what they do, not by logo. The list changes — consulting means matching the right tool to the problem, not maintaining allegiance to a stack."

categories: - name: "AI ecosystem"
description: "Daily-driver tools for client work and experimentation"
tools: - "Claude (Opus / Sonnet / Haiku)" - "Claude Cowork — agentic desktop" - "Claude Code — terminal-native coding" - "Google Gemini, Imagen, Vertex AI" - "Google Document AI" - "ChromaDB, Grok, OpenAI API" - "MCP (Model Context Protocol) integrations"

    - name: "Consulting"
      description: "How the work gets delivered"
      tools:
        - "AI readiness audits"
        - "Process documentation & SOP capture"
        - "Workshop facilitation"
        - "Change management"
        - "Service packaging & pricing"
        - "Stakeholder management"

    - name: "Build"
      description: "Full-stack delivery for client engagements"
      tools:
        - "Vue.js 3 (Composition API)"
        - "Firebase (Auth, Firestore, Cloud Functions, Hosting, Storage)"
        - "Sharetribe marketplace platform"
        - "Postmark inbound email"
        - "Stripe payments"
        - "Retool admin panels"
        - "HubSpot CRM implementation"
        - "Wix, Webflow, custom HTML/CSS/JS"

    - name: "Data & analytics"
      description: "Making the system visible"
      tools:
        - "Looker Studio dashboards"
        - "Google Analytics"
        - "Firebase real-time data"
        - "Data extraction pipelines"
        - "Multi-source reporting integrations"

    - name: "Content & design"
      description: "The craft layer from 7.5 years of enterprise work"
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

# Design: Condensed timeline. Two entries — freelance and

# Pitchpocket — with dates right-aligned, role italicised,

# one-sentence summary. Keep this minimal. The case studies do

# the heavy lifting. This section is here for recruiters who

# want a chronological view at a glance.

# --------------------------------------------------------------

experience:
section_heading: "Experience"

entries: - role: "Independent AI Adoption Consultant"
organisation: "Freelance — Sydney & regional NSW"
start_date: "Jan 2026"
end_date: "Present"
summary: "Embedded AI adoption work with SMB clients across healthcare, property, and franchise operations. See case studies 01, 02, and 03."

    - role: "Technical Marketing Lead & Multimedia Specialist"
      organisation: "Pitchpocket"
      location: "Sydney"
      start_date: "Feb 2018"
      end_date: "Oct 2025"
      summary: "Enterprise account management and technical delivery at a micro-SaaS startup. Clients including PPG Paints, Nespresso, Unilever Food Solutions, Evergreen Garden Care. Shipped the Stakaroo AI platform as final project. See case studies 04 and 05."

education: - institution: "University of Sydney"
qualification: "Bachelor of Commerce"
focus: "Marketing & Business Information Systems"
start_date: "2015"
end_date: "2018"
detail: "Coursework across consumer behaviour, digital marketing, database management, business analytics, and systems analysis."

# --------------------------------------------------------------

# CONTACT

# --------------------------------------------------------------

# Design: Short, personal, direct. Not a huge form. A simple

# three-field form (name, email, message) or just an email

# address with clear CTA. The goal is lowering the activation

# cost to "let's talk," not collecting leads.

# --------------------------------------------------------------

contact:
section_heading: "Get in touch"
intro: "If you're exploring AI adoption for your team — or hiring for a role where this kind of work would land — I'd love to hear from you. Direct email is the fastest path."
email_cta: "anasmoin@gmail.com"
form:
enabled: true
fields: - name: "name"
label: "Name"
type: "text"
required: true - name: "email"
label: "Email"
type: "email"
required: true - name: "message"
label: "What's on your mind?"
type: "textarea"
required: true
footer_note: "Based in Newtown, Sydney. Open to remote and hybrid engagements across Australia."

# --------------------------------------------------------------

# DESIGN & LAYOUT NOTES

# --------------------------------------------------------------

# These don't render — they're editorial direction for when you

# touch the site components. Consulting-focused styling means:

#

# 1. TYPOGRAPHY OVER ORNAMENT

# - One serif for headlines (optional), one neutral sans for

# body. Inter, Söhne, Graphik, or similar. Avoid Unbounded

# and other display fonts — they read as portfolio-for-

# designers, not portfolio-for-consultants.

# - Heading hierarchy: 32/40/24/16/14. Tight.

# - Body 16px, line-height 1.7, max-width 640–720px.

#

# 2. WHITESPACE IS THE DESIGN

# - Generous vertical rhythm between sections (6–8rem on

# desktop, 3–4rem on mobile).

# - Narrow text column even on wide screens. Don't fill

# every pixel.

#

# 3. COLOUR: MONOCHROME + ONE ACCENT

# - Near-black text (#1a1a1a, not pure black).

# - Off-white or bone background.

# - One subtle accent colour for links, tags, and hover

# states. Pick something restrained — muted teal, soft

# clay, deep navy. Not electric.

#

# 4. NO SCRAPS, JELLY EFFECTS, OR DECORATIVE ANIMATIONS

# - The existing portfolio's charcoal/pink/scrap aesthetic

# is playful and signals creative generalist. The new

# positioning is professional consultant. Strip the

# ornament.

# - Reveal animations on scroll are fine — subtle fade + 8px

# translate. Nothing bouncy.

#

# 5. CASE STUDIES AS FIRST-CLASS PAGES

# - Each case study should have its own URL (/case/slug).

# - Structure every page identically so readers learn the

# pattern: stats bar → client context → problem → what I

# did → result → what I learned → tools used.

# - At the bottom of every case study: "Next case study →"

# link to keep readers moving through.

#

# 6. NAVIGATION

# - Top nav: Work · About · Contact · CV (download).

# - Keep it flat. No mega-menus, no dropdowns.

#

# 7. MOBILE

# - Everything stacks. No hamburger gymnastics. The nav can

# collapse to a simple overlay or inline scroll.

#

# 8. CV LINK

# - The "Download CV" button should hit a real PDF. Keep

# your current CV page (cv.html) if it still matches the

# new positioning, or regenerate from the CV we built.

# --------------------------------------------------------------
