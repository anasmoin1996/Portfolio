# --------------------------------------------------------------
# IMPLEMENTATION WORK
# Sits between case_studies and projects.
#
# DESIGN PRINCIPLE: this section is NOT a case study. It's a
# scannable, interactive surface. Almost nothing is prose by
# default. Cards are short. Clicks reveal depth. Mobile-first.
#
# Structure:
#   1. Section heading + one-line intro
#   2. Five "flavour" cards (clickable accordions)
#   3. Five "brand" tiles (clickable to expand)
#   4. One closing line (no closing paragraph)
#
# No facts bar. No pull quote. No "What I learned" closer.
# Those belong in case studies. This is the index page, not a
# story.
# --------------------------------------------------------------
implementation_work:
  section_heading: "Implementation work"
  section_intro: "Seven and a half years at Pitchpocket meant running enterprise client implementations end-to-end. Five flavours of the same job, played out across brands like PPG Paints, Nespresso, and Unilever. Tap to dig in."

  # ---- THE FIVE FLAVOURS ----
  # Visual: 5 clickable cards in a responsive grid.
  # Desktop: 3 across on top row, 2 across on bottom row (centred).
  # Tablet: 2x2 + 1 centred below.
  # Mobile: stacked single column.
  #
  # CLOSED CARD: shows icon (optional), label, one_liner. Hover/tap
  # reveals chevron. Tap to expand inline (accordion behaviour, not
  # modal). Open card pushes the cards below it down.
  #
  # OPEN CARD: shows the body in 2-3 short paragraphs maximum, plus
  # a callout chip (the "punchline" line). Optional small visual
  # element if specified.
  # --------------------------------------------------------------
  flavours_heading: "What the work actually looked like"

  flavours:
    - label: "Discovery and requirements"
      one_liner: "Sit with the team. Map the year. Break it into things we can ship."
      body: |
        With PPG it was sitting with the L&D team and breaking annual training goals into five-minute, in-aisle, mobile-delivered modules. With Nespresso it was the marketing team, working out what made each new coffee machine different and how that should sound to retail staff. With Unilever it was the brand team, mapping what offers they wanted to push to thousands of pubs and clubs and what data they needed back.

        Internally, the same discipline went the other way. Before the dev team built anything, I'd write user stories, sketch wireframes, write the requirements doc.
      callout: "The brief on day one is almost never the brief by week three."

    - label: "Translating between client, sales, and engineering"
      one_liner: "The part nobody puts on a CV. Requests came in through me. I held the chain together."
      body: |
        Client asks for something new. I'd work out what they actually needed (often a different thing from what they'd asked for), write a proposed solution, and pass it to my manager. He was the decision-maker. He'd weigh whether it fit our roadmap, what it would cost, whether it was a contract conversation.

        Money involved? Sales got looped in. Build call? Quote from the dev team. Then I'd go back to the client with a plan, a timeline, and a price.
      callout: "Clients don't care about your sprint backlog. Engineers don't care about a brand's campaign deadline. Making them meet is the work."

    - label: "Project management and delivery"
      one_liner: "Asana tickets, sprint timelines, rollout calendars. An unreasonable amount of follow-up."
      body: |
        Build the project plan with the client, schedule what's getting delivered when, brief the dev team, test the work myself before the client saw it, run feedback loops until it was right.

        On top of that, every engagement had a monthly cadence. Analytics report, performance review, what's next.
      callout: "Clients renew because the reporting was on time and someone was on top of what's coming. Not because of one big moment."

    - label: "Workarounds when speed mattered"
      one_liner: "When the build queue couldn't help, knowing the platform deeply enough to fake the feature."
      body: |
        Best example: PPG wanted to run an actual interactive learning module. Five-minute training, multiple-choice questions, answers revealed at the end. The proper feature was weeks away.

        We didn't have time. So I built it from parts we already had. A chain of landing pages, linked together with custom URI schemes, arranged so tapping an answer pulled up the next page in the sequence. From a staff member's phone, it looked like a single learning module with quiz logic. It was actually about eight landing pages duct-taped together with URL parameters.

        Client unblocked this week. Real feature scoped and shipped a few weeks later. Relationship kept moving.
      callout: "The most useful thing in an implementation is knowing exactly how the platform you're selling actually works. That's where the workarounds live."

    - label: "Adoption: training, dashboards, briefing templates"
      one_liner: "Shipping the build was halfway. Adoption was the rest."
      body: |
        Trained client staff to use the app, ran live and virtual onboarding for groups of up to fifty, monitored uptime, reached out proactively when something broke. Built real-time dashboards so PPG could see training session completion across Bunnings stores in AU/NZ, and Unilever could see SMS engagement and promotion redemptions as they happened.

        The single highest-leverage thing I built: a PowerPoint briefing template. Clients filled in a familiar PowerPoint with the information we needed to brief a new module. PPG used it themselves to brief new training landing pages, which kept the programme producing content without me as the bottleneck.
      callout: "If the client ends up doing the thing themselves, that's the win. They own the system, and you're not the single point of failure."

  # ---- THE BRANDS ----
  # Visual: 5 tiles in a horizontal grid (3+2 desktop, 2+2+1 tablet,
  # stacked mobile). Each tile is a clickable card.
  #
  # CLOSED TILE: brand name (large), duration tag (small, muted),
  # one short line of context. Subtle hover state. Tap to expand.
  #
  # OPEN TILE: expands to show 2-3 sentences of detail. Tap again
  # to collapse. Or use a "tap any other tile to swap" pattern,
  # so only one is open at a time. The latter keeps the section
  # compact and avoids accordion sprawl.
  # --------------------------------------------------------------
  brands_heading: "Brands I ran as accounts"
  brands_intro: "Tap a brand to see what the engagement actually involved."

  brands:
    - name: "PPG Paints"
      duration: "Year-long, ongoing"
      tagline: "Mobile-first micro-learning for Bunnings retail staff."
      detail: |
        Sat with their L&D team to map annual training goals, broke them into modules, shipped landing-page-based training that staff completed on their phones during quiet moments on the shop floor. 8,000+ training sessions across Australia and New Zealand, 10+ products, real-time national visibility for the brand. Built the briefing template the L&D team used themselves.

    - name: "Unilever Food Solutions"
      duration: "Multi-year"
      tagline: "SMS marketing programme to thousands of pubs and clubs."
      detail: |
        They'd send promotional offers and digital assets. I'd reformat each one as a mobile-optimised landing page, build the form mechanics, push it through their app accounts, report back on uptake and engagement. Worked closely with our internal sales team to scope new features each cycle to keep growing the contract. Did video editing in-house too, turning their static images into GIFs and short-form content.

    - name: "Craveable Brands"
      duration: "Multi-month"
      tagline: "Compliance and OH&S training for franchise staff."
      detail: |
        Sat with their compliance team to identify the specific health and safety points franchise staff needed to retain. Translated each topic into infographics, GIFs, and short videos. Pushed to staff phones, broken into modules they ticked off as they went. Gave Craveable visibility into compliance training completion across the franchise network.

    - name: "Nespresso"
      duration: "Multiple campaigns"
      tagline: "Sales enablement and retail training for new coffee machine launches."
      detail: |
        For each launch, sat with the marketing team to identify what was different about the new model, what mattered for retail staff to communicate, and how that should be packaged for the customer. Created landing pages, sales enablement materials, and product training content per launch.

    - name: "Evergreen Garden Care"
      duration: "Multi-month"
      tagline: "Translated technical lawn care science into visual training."
      detail: |
        Same shape as PPG. Sit with the L&D and product teams, break the science down into formats that work on a staff member's phone, deliver via the platform, monitor adoption.

  # ---- ONE CLOSING LINE (not a paragraph) ----
  # Single sentence. Sits below the brand tiles. Quiet typography.
  # No heading.
  # --------------------------------------------------------------
  closing_line: "Adoption is a staff problem, not a management problem. Everything above was in service of that."
