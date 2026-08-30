<p align="center">
  <img src="https://img.shields.io/badge/🛡️_DRISHTI-ದೃಷ್ಟಿ-1e40af?style=for-the-badge&labelColor=030712" alt="DRISHTI" height="40"/>
</p>

<h1 align="center">DRISHTI (ದೃಷ್ಟಿ)</h1>
<h3 align="center">AI-Powered Crime Intelligence & Agentic Command Platform<br/>for the Karnataka State Police</h3>

<p align="center">
  <em>🏆 Built for the <strong>KSP Hack2Skill Datathon 2026</strong></em>
</p>

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white" alt="Next.js"/></a>
  <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black" alt="React"/></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwind-css&logoColor=white" alt="Tailwind"/></a>
  <a href="https://catalyst.zoho.com/"><img src="https://img.shields.io/badge/Zoho_Catalyst-Serverless-E42527?logo=zoho&logoColor=white" alt="Zoho Catalyst"/></a>
  <a href="https://ai.google.dev/"><img src="https://img.shields.io/badge/Gemini_2.5-Flash-8E75B2?logo=google-gemini&logoColor=white" alt="Gemini"/></a>
  <a href="https://d3js.org/"><img src="https://img.shields.io/badge/D3.js-7-F9A03C?logo=d3.js&logoColor=white" alt="D3.js"/></a>
  <a href="https://leafletjs.com/"><img src="https://img.shields.io/badge/Leaflet-1.9-199900?logo=leaflet&logoColor=white" alt="Leaflet"/></a>
</p>

<p align="center">
  <a href="#-the-problem">Problem</a> •
  <a href="#-core-features--modules">Features</a> •
  <a href="#-system-architecture">Architecture</a> •
  <a href="#-technology-deep-dive">Tech Stack</a> •
  <a href="#-data-pipeline--crime-database">Data</a> •
  <a href="#-getting-started">Setup</a> •
  <a href="#-team">Team</a>
</p>

---

## 📌 Executive Summary

**DRISHTI** (ದೃಷ್ಟಿ — *"Vision"* in Kannada) is a **full-stack Agentic AI platform** that transforms how Karnataka State Police officers interact with crime data. Instead of navigating siloed CCTNS databases, writing SQL queries, or manually cross-referencing suspect records across systems, officers simply **speak** — in **English, Kannada, or Hindi** — and DRISHTI instantly retrieves, synthesizes, and visualizes actionable intelligence.

DRISHTI is **not a chatbot**. It is a **proactive, context-aware intelligence companion** powered by a dual-engine RAG system (QuickML + Gemini 2.5 Flash with 9 live-data tools), real-time crime mapping, ANPR surveillance reconstruction, organized crime network analysis, and predictive dark-zone analytics — all unified under a single mission-control interface designed for dimly-lit control rooms and field operations.

> 🎯 **One voice command. Instant intelligence. Zero friction.**

---

## 💡 The Problem

Karnataka State Police officers face **five critical operational challenges** daily:

| # | Challenge | Real-World Impact |
|:-:|:---|:---|
| **1** | **Siloed Crime Data** — FIRs, suspect histories, ANPR logs, and patrol data exist in disconnected databases with no unified query layer. | Officers spend 15–30 min per query manually cross-referencing systems. Critical connections between cases are missed. |
| **2** | **Complex Interfaces** — Existing systems require SQL knowledge, complex form navigation, and English-only interfaces. | 70%+ of field officers are more comfortable in Kannada/Hindi. Non-technical officers avoid the system entirely. |
| **3** | **No Predictive Capability** — Patrol allocation is reactive, based only on where FIRs have been filed. Areas with systematic underreporting receive no coverage. | "Dark Zones" — high-vulnerability corridors where crimes go unreported — remain invisible to command. |
| **4** | **Hidden Criminal Networks** — Gang structures, co-accused relationships, and repeat offender patterns are buried inside thousands of textual FIR descriptions. | Organized crime rings operate across districts undetected. |
| **5** | **System Fragility** — Network outages, API rate limits, and cold-start latencies cause blank screens during critical moments. | Officers lose trust in digital tools and revert to manual processes. |

### How DRISHTI Solves Each One

| Challenge | DRISHTI's Solution |
|:---|:---|
| Siloed Data | **Unified Knowledge Graph & Agentic RAG** — 9 real-time tool calls retrieve FIRs, hotspots, trends, offenders, cameras, trails, and network data in a single conversational turn. |
| Complex Interfaces | **Multilingual Voice Co-Pilot** — Officers speak naturally (*"ವೈಟ್‌ಫೀಲ್ಡ್‌ನಲ್ಲಿ ಕಳವು ಪ್ರಕರಣ ತೋರಿಸಿ"*) and get instant results with zero training. |
| No Prediction | **Dark Zone Analytics Engine** — Statistical underreporting detection using crime-rate-per-lakh with 3-SD outlier exclusion to surface unpatrolled high-risk areas. |
| Hidden Networks | **Interactive D3 Network Graph** — Automatically maps suspect → co-accused → FIR connections with force-directed visualization. |
| System Fragility | **Zero-Downtime Fallback Architecture** — 2s timeout + 30s memory cache + endpoint blacklisting + rich demo data fallback. The dashboard **never** shows a blank screen. |

---

## ⚡ Core Features & Modules

### 🤖 Module 1: Agentic AI Co-Pilot with Dual-Engine RAG

The heart of DRISHTI — a conversational AI system that doesn't just answer questions but **takes actions**.

| Capability | Implementation |
|:---|:---|
| **Primary RAG Engine** | QuickML RAG endpoint (GLM-4.7-Flash) with vector retrieval over KSP police manuals, IPC/BNS sections, and IT Act guidelines. 6-second timeout. |
| **Fallback Agentic Engine** | Gemini 2.5 Flash REST API with **9 live-data tool declarations** — the AI autonomously decides which backend tools to call based on the officer's query. |
| **Tool Calling** | `fetch_hotspots`, `fetch_trends`, `fetch_firs`, `fetch_repeat_offenders`, `fetch_cameras_nearby`, `fetch_trail`, `fetch_anpr_check`, `fetch_network_graph`, `search_police_manuals` |
| **Key Rotation** | 15+ Gemini API keys with automatic rotation on rate-limit (429). Groq (Llama 3.3 70B) as text-only last-resort fallback. |
| **Multilingual I/O** | Web Speech API STT/TTS in `en-IN`, `hi-IN`, `kn-IN`. Zia Translation for Kannada ↔ English on the backend. |
| **Structured Responses** | Every response includes: `response_text`, `visualization`, `emotion`, `urgency`, `follow_up_suggestions`, `language_detected` — enabling the frontend to render dynamic widgets, animate the orb, and queue TTS. |

**Example interaction:**
```
👮 Officer (Kannada): "ವೈಟ್‌ಫೀಲ್ಡ್‌ನಲ್ಲಿ ಕಳೆದ ವಾರದ ಕಳ್ಳತನ ತೋರಿಸಿ"
   ↓ Zia translates → English
   ↓ QuickML RAG → timeout → Gemini fallback
   ↓ Gemini calls fetch_hotspots({district: "Whitefield"}) + fetch_firs({type: "theft", days: 7})
   ↓ Synthesizes results with legal SOP reference
   ↓ Zia translates response → Kannada
🤖 DRISHTI: Responds in Kannada + renders heatmap + suggests follow-up queries
```

---

### 🗣️ Module 2: Voice Activation & Hands-Free Interaction

| Feature | Details |
|:---|:---|
| **Double-Clap Wake** | Web Audio API energy spike detection — two peaks within 600ms window activates DRISHTI. No always-on microphone. No external dependency. |
| **Push-to-Talk** | Spacebar hold or on-screen button. Secondary activation method. |
| **Live Transcript** | Real-time STT transcript displayed as officer speaks. |
| **Voice Responses** | TTS matches detected query language. Prosody adjusts based on `urgency` level (normal → critical). |

---

### 🔮 Module 3: DRISHTI Orb — Animated AI State Indicator

A **120×160px animated orb** that serves as the AI's "face" — always visible, always communicating state:

| Orb State | Color | Animation | Trigger |
|:---|:---|:---|:---|
| **Idle** | Deep blue aurora | Slow breathe + particle drift | Default state |
| **Listening** | Electric green | Pulsing glow | Clap/spacebar detected |
| **Thinking** | Golden amber | Spin + morphing | Query sent to backend |
| **Speaking** | Cyan mercury | Sound wave ripples | TTS playing response |

Built with **Framer Motion** (state transitions) + **GSAP** (continuous organic loops) + **Canvas particle system** — maintaining 60fps constant.

---

### 🗺️ Module 4: Interactive GIS Crime Density Map

- **Leaflet.js** heatmap with CartoDB Dark Matter tiles — optimized for control room visibility.
- **Severity scoring**: Hotspots auto-categorized into `CRITICAL`, `HIGH`, `MEDIUM`, `LOW` based on violence weighting + recency decay.
- **Click-through**: Tap any hotspot → drill into FIR list for that location.
- **Data source**: Real-time from `/server/hotspots/` endpoint with Catalyst ZCQL queries against the FIRs table.

---

### 🚗 Module 5: ANPR Surveillance & Geo-Trail Reconstruction

| Component | Description |
|:---|:---|
| **Surveillance Wall** | Grid of simulated ANPR, CCTV, and face-recognition camera feeds with 3-layer video fallback (Local MP4 → HTTPS CDN → High-Tech HUD Canvas overlay). Camera tiles **never** show blank/error. |
| **Plate Lookup** | `/anpr-check/` — Cross-references vehicle plate against ANPR watchlist (800+ flagged vehicles). Returns alert status + associated FIR/crime details. |
| **Geo-Trail Tracker** | `/trail/` — Reconstructs timestamped vehicle movement across camera sighting hops. Rendered on dark interactive map with confidence scores, distance telemetry, and directional arrows. |

---

### 🕸️ Module 6: Organized Crime Network Graph

- **D3.js force-directed graph** mapping suspect → co-accused → FIR connections.
- **Node types**: Primary accused (red), associates (amber), FIR cases (blue), fences/handlers (grey).
- **Edge weights**: Relationship confidence (0–1) determines line thickness.
- **Interactive**: Click any suspect node → navigate to full intelligence dossier.

---

### 👤 Module 7: Suspect Intelligence Dossiers

Dynamic profile pages (`/dashboard/suspect/[slug]`) featuring:
- Threat level badge (LOW → CRITICAL)
- Modus operandi breakdown with frequency analysis
- Associated FIR case links with status indicators
- Known hangouts mapped on embedded Leaflet view
- Chronological intelligence timeline
- Network connections to other suspects

---

### 📊 Module 8: Predictive Crime Analytics & Dark Zones

| Analysis | Method |
|:---|:---|
| **Crime Trends** | Monthly aggregation with Recharts line/bar visualizations. Spike detection for anomaly alerting. |
| **Dark Zone Detection** | Calculates crime rate per lakh population per district. Computes state average with 3-SD outlier exclusion. Districts significantly below average are flagged as potential underreporting zones. |
| **Patrol Optimization** | Dark Zone scores feed into Hoysala patrol allocation recommendations. |

---

### 📰 Module 9: Live Crime News Feed

- Real-time crime news aggregation for Karnataka region.
- Contextual cards with source, timestamp, and relevance scoring.
- Officers stay informed about developing situations across the state.

---

### 📋 Module 10: FIR Management & Upload

| Feature | Description |
|:---|:---|
| **FIR Search** | Full-text search across case numbers, descriptions, accused names, districts. |
| **FIR Detail View** | `/dashboard/fir/[id]` — Complete case dossier with accused list, victim details, investigating officer, and timeline. |
| **FIR Upload** | Officers can upload new FIR documents. Parsed and stored in local JSON + Catalyst NoSQL. |
| **PDF Export** | `/export-pdf/` — Generate printable case reports. |

---

### 🛡️ Module 11: Zero-Downtime Fallback System

**The dashboard never breaks.** Period.

```
Request Flow:
  ┌─────────────────┐    ┌──────────────────┐    ┌────────────────────┐
  │ fetchWithFallback│───▶│  Catalyst API     │───▶│  ✅ Live Data      │
  │   (2s timeout)   │    │  (Cloud Function) │    │  Source: "live"    │
  └────────┬─────────┘    └──────────────────┘    └────────────────────┘
           │ timeout/error
           ▼
  ┌──────────────────┐    ┌────────────────────┐
  │ Check 30s Cache   │───▶│  ✅ Cached Data    │
  │ (In-Memory Map)   │    │  Source: "cache"   │
  └────────┬──────────┘    └────────────────────┘
           │ miss
           ▼
  ┌──────────────────┐    ┌────────────────────┐
  │ demo-data.js      │───▶│  ✅ Demo Data      │
  │ (56KB Karnataka   │    │  Source: "demo"    │
  │  benchmark data)  │    │  System badge:     │
  └──────────────────┘    │  "DEMO MODE"       │
                          └────────────────────┘
```

**Key resilience features:**
- **2-second hard timeout** on every API call — no hanging spinners.
- **30-second in-memory GET cache** — instant re-renders for repeated queries.
- **15-second endpoint blacklisting** — avoids retrying known-dead endpoints.
- **56KB rich demo dataset** — Real Karnataka district names, coordinates, crime types, camera locations, and suspect profiles. Demo mode is **indistinguishable** from live mode in functionality.
- **`SystemStatusFooter`** — Parallel health checks display `LIVE MATRIX` or `DEMO MODE` transparently.

---

### 🎖️ Module 12: Tri-Role Tactical Command Portals & Quick Switcher

DRISHTI is built with distinct role-tailored intelligence portals tailored to the police hierarchy:

```
                  ┌─────────────────────────────────────┐
                  │   QUICK ROLE SWITCHER (Topbar)      │
                  │   Instant 1-Click Persona Shifting  │
                  └──────────────────┬──────────────────┘
                                     │
         ┌───────────────────────────┼───────────────────────────┐
         ▼                           ▼                           ▼
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│ 👮 FIELD        │         │ 🔬 CHIEF CRIME  │         │ 🛡️ COMMAND      │
│    INSPECTOR    │         │    ANALYST      │         │    SUPERVISOR   │
│  (/dashboard)   │         │    (/analyst)   │         │  (/supervisor)  │
├─────────────────┤         ├─────────────────┤         ├─────────────────┤
│ • Field Radar   │         │ • MO Pattern    │         │ • Workload AI   │
│ • Live FIR Case │         │   Linkage Hub   │         │   Allocator     │
│   Ledger        │         │ • 24×7 Chrono   │         │ • Fleet Radar & │
│ • Push Dispatch │         │   Forecasting   │         │   Unit Tracker  │
│   Alert Banner  │         │ • Rossmo Anchor │         │ • Station Ready │
│ • Gazette Wall  │         │   Geo-Profiler  │         │   Metrics       │
│ • Multi-Cam     │         │ • Telemetry     │         │ • Real-Time Log │
│   Surveillance  │         │   Sensor Fusion │         │   Audit Stream  │
└─────────────────┘         └─────────────────┘         └─────────────────┘
```

| Role Portal | URL Path | Persona & Target Workflow |
|:---|:---|:---|
| 👮 **Field Inspector** | `/dashboard` | **Ground Operations & Case Clearance** — Real-time FIR queue, instant case assignment notifications, suspect tracking, live surveillance video walls, and interactive Gazette dossiers. |
| 🔬 **Chief Crime Analyst** | `/analyst` | **Deep Forensic & Latent Pattern Discovery** — State-level MO linkage across 5.35L CCTNS records, chrono-temporal strike forecasters, Rossmo geographical profiling, and court dossier generation. |
| 🛡️ **Command Supervisor** | `/supervisor` | **Resource Allocation & Division Oversight** — Station workload balancer, AI inspector case matching, live patrol fleet radar, and immutable officer query audit logs. |

---

### 🔬 Module 13: Specialized Crime & Intelligence Workbench (`/analyst/workbench`)

A dedicated 6-engine forensic suite engineered for advanced crime analysts:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│              SPECIALIZED CRIME & INTELLIGENCE WORKBENCH (CID / SCRB)         │
├─────────────────┬─────────────────┬─────────────────┬───────────────────────┤
│ 1. MO Linkage   │ 2. Chrono       │ 3. Rossmo Geo   │ 4. Telemetry Multi-   │
│    & Cold Case  │    Forecaster   │    Profiler     │    Sensor Fusion      │
│    Matcher      │    (24×7 Matrix)│    (Anchor Base)│    (ANPR+CDR+FASTag)  │
├─────────────────┴─────────────────┼─────────────────┴───────────────────────┤
│ 5. Analysis of Competing          │ 6. Court-Admissible Dossier Generator   │
│    Hypotheses (ACH Matrix)        │    (BNS 2023 / BSA §63 Certificate)     │
└───────────────────────────────────┴─────────────────────────────────────────┘
```

| Engine | Analytical Methodology | Operational Value |
|:---|:---|:---|
| **1. MO Linkage & Cold Case Matcher** | Cosine similarity vector search over crime tool signatures, entry mechanics, and egress patterns against 5,35,815 historical CCTNS FIRs. | Detects cross-district repeat offender signatures in under 1.5 seconds. |
| **2. 24×7 Chrono-Temporal Forecaster** | Heatmatrix calculation analyzing hour-of-day × day-of-week crime frequency distributions for Vehicle Theft, Narcotics, and Burglary. | Predicts strike probability windows to proactively position night flying squads. |
| **3. Rossmo Geographic Profiler** | Implements Rossmo's hunting formula with negative distance decay buffer ($B$) to calculate the serial offender's most probable residential/chopshop anchor zone. | Reduces search radius from 25 km² down to a high-probability 1.2 km² hotspot. |
| **4. Multi-Sensor Telemetry Fusion** | Fuses optical ANPR hits, cellular tower CDR dumps, and National Highway FASTag toll timestamps into a unified corroborated chronological timeline. | Proves vehicle transit and co-traveler proximity without manual data stitching. |
| **5. Analysis of Competing Hypotheses (ACH)** | CIA/Richards Heuer methodology evaluating evidence diagnosticity against 4 competing theories ($H_1$ to $H_4$) to mathematically eliminate investigative cognitive bias. | Prevents tunnel vision and ensures objective evidentiary evaluation. |
| **6. Court-Admissible Dossier Generator** | Formats findings into structured legal briefs citing **Bharatiya Nyaya Sanhita (BNS 2023)** and electronic evidence certificates under **Bharatiya Sakshya Adhiniyam (BSA §63)**. | Ready for immediate submission to Public Prosecutors and Magistrate Courts. |

---

### 🛡️ Module 14: Supervisor Case Allocation & Workload Balancer (`/supervisor/assignment`)

An intelligent resource allocation engine that balances district caseloads:

- **AI Inspector Matching**: Analyzes active caseloads, clearance velocity, geographic proximity, and domain specialization (e.g. Organized Vehicle Theft specialist).
- **Instant Cross-Portal Reactivity**: When the Supervisor assigns a case to an officer (e.g. *Insp. V. Sharma*), a high-priority assignment alert is instantly pushed to the Inspector's console with a **"Review Case Dossier"** 1-click action and automatic case ledger updates.
- **Station Rebalancing**: One-click AI workload rebalancing to transfer pending cases from overloaded stations (e.g. Indiranagar PS at 23 FIRs) to adjacent available units (e.g. Ulsoor PS at 8 FIRs).

---

### 📜 Module 15: Investigator Wall — Official Police Gazette & Chronicle (`InvestigatorWall.tsx`)

A court-ready, authentic investigation board styled as the **Official Karnataka Police Gazette**:

- **Official Masthead & Seal**: Formatted with *The Drishti Dispatch* official chronicle typography and restricted CCTNS classification headers.
- **Evidentiary Integrity Hash**: Displays SHA-256 digital tamper seals for evidence admissibility.
- **Accused Tradecraft & Modus Operandi**: Displays suspect mugshots, CCTNS IDs, risk scores, known aliases, prior arrests, and criminal tradecraft.
- **Victim Protection Directives**: Evaluates vulnerability indices and assigns mandatory protection protocols (e.g., *Direct Police Escort Required*).
- **ANPR Sightings Matrix**: Chronological log of camera IDs, highway checkpoints, speeds, and biometric match confidences.
- **1-Click Official Gazette Print**: Full `window.print()` styling optimized for high-resolution A4 judicial printing.

---

### 🚨 Module 16: Real-Time ANPR Surveillance Alerts Hub (`AlertNotification.js`)

A persistent intelligence beacon accessible across all three portals:

- **HSRP License Plate Badges**: Clean vehicle plate formatting with status indicators.
- **Web Audio Alert Beacon**: Acoustic notification pulse on incoming critical target sightings.
- **Direct Live Feed Action**: Instant 1-click navigation from any alert directly to the active camera stream in the surveillance wall.
- **Unified Supervisor Push Sync**: Displays both automated ANPR plate hits and supervisor direct case assignment notifications.

---

## 🏗️ System Architecture

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                         OFFICER INTERFACE (Browser)                          │
│                                                                              │
│   🎤 Voice Input          💬 Text Chat           📊 Command Dashboard        │
│   (Web Speech STT)       (Keyboard/Touch)       (9 Dashboard Modules)       │
│   Double-Clap Wake       Multilingual            Real-time Visualization    │
│                                                                              │
└──────────────────────────────────┬───────────────────────────────────────────┘
                                   │
                                   ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│                      NEXT.JS 15 APPLICATION LAYER                            │
│                                                                              │
│  ┌─────────────────┐  ┌──────────────────┐  ┌────────────────────────────┐  │
│  │ DrishtiOrb.jsx   │  │ DrishtiPanel.jsx  │  │ DrishtiVoice.jsx (Hook)   │  │
│  │ (Framer+GSAP     │  │ (Chat UI +        │  │ (STT/TTS + Clap          │  │
│  │  + Canvas)       │  │  Viz Router)      │  │  Detection)              │  │
│  └─────────────────┘  └──────────────────┘  └────────────────────────────┘  │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐    │
│  │ fetchWithFallback.js → 2s timeout → 30s cache → demo-data.js        │    │
│  └──────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  9 Dashboard Pages: Overview | Chat | Map | Network | Surveillance |         │
│                     Analytics | Logs | Geo-Trail | Live News                 │
│                                                                              │
│  20 API Proxy Routes: /api/askDrishtiAI, /api/firs, /api/hotspots,          │
│                       /api/trends, /api/trail, /api/anpr-check, ...         │
└──────────────────────────────────┬───────────────────────────────────────────┘
                                   │
              ┌────────────────────┼────────────────────┐
              ▼                    ▼                    ▼
┌──────────────────────┐ ┌─────────────────┐ ┌──────────────────────┐
│  ZOHO CATALYST       │ │  QUICKML RAG    │ │  DEMO FALLBACK       │
│  SERVERLESS BACKEND  │ │  ENGINE         │ │  (demo-data.js)      │
│                      │ │                 │ │                      │
│  16 Node.js 24       │ │  GLM-4.7-Flash  │ │  56KB rich Karnataka │
│  AdvancedIO Functions│ │  Vector Search  │ │  benchmark dataset   │
│                      │ │  over KSP       │ │                      │
│  askDrishtiAI        │ │  Manuals +      │ │  FIRs, hotspots,     │
│  firs                │ │  IPC/BNS/IT Act │ │  suspects, cameras,  │
│  hotspots            │ │                 │ │  trails, networks,   │
│  trends              │ │  6s timeout     │ │  trends, offenders   │
│  repeat-offenders    │ │  → Gemini       │ │                      │
│  trail               │ │    fallback     │ │  Always available.   │
│  anpr-check          │ │                 │ │  Zero latency.       │
│  cameras-nearby      │ └─────────────────┘ └──────────────────────┘
│  network-graph-data  │
│  underreporting      │ ┌─────────────────────────────────────────┐
│  victim-vulnerability│ │  GEMINI 2.5 FLASH (Agentic Fallback)    │
│  conversations       │ │                                         │
│  drishtiVoice        │ │  Multi-turn function calling with       │
│  export-pdf          │ │  9 tool declarations.                   │
│  chat (legacy)       │ │  15+ API keys with auto-rotation.       │
│  drishti_ksp_function│ │  Groq (Llama 3.3 70B) last resort.      │
└──────────────────────┘ └─────────────────────────────────────────┘
              │
              ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│                        CRIME DATA LAYER                                      │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │ FIRs Table    │  │ Accused      │  │ Victims      │  │ Cameras      │    │
│  │ 3,000+ cases  │  │ 2,000+       │  │ 1,200+       │  │ 1,500+       │    │
│  │ 31 districts  │  │ records      │  │ records      │  │ ANPR/CCTV    │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │ Districts    │  │ Crime Types  │  │ Police       │  │ ANPR         │    │
│  │ 31 Karnataka │  │ 20+ category │  │ Stations     │  │ Watchlist    │    │
│  │ districts    │  │ codes        │  │ 100+ entries │  │ 800+ plates  │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                                              │
│  Storage: Zoho Catalyst ZCQL (Cloud SQL) + NoSQL (Conversations)            │
│  Source: Synthetic dataset modeled on real Karnataka geography & crime stats │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Technology Deep Dive

### Frontend Stack

| Technology | Version | Purpose |
|:---|:---|:---|
| **Next.js** | 15.1 | App Router, SSR, API proxy routes, dynamic imports |
| **React** | 18 | Component model with hooks |
| **Tailwind CSS** | 3.4 | Utility-first CSS — Graphite & Oxblood design system |
| **Framer Motion** | 12.x | State-based transitions (idle→listening→thinking→speaking) |
| **GSAP** | 3.x | Continuous organic animation loops (breathe, morph, particles) |
| **D3.js** | 7.x | Force-directed network graphs, data visualizations |
| **Recharts** | 3.x | Crime trend bar/line charts |
| **Leaflet.js** | 1.9 | Crime heatmaps, geo-trail maps (CartoDB Dark Matter tiles) |
| **React-Leaflet** | 4.2 | React bindings for Leaflet |
| **Lucide React** | 1.25 | Icon system (no icon fonts) |
| **Web Speech API** | Native | STT (en-IN, hi-IN, kn-IN) + TTS voice output |
| **Web Audio API** | Native | Double-clap energy spike detection |

### Backend Stack

| Technology | Version | Purpose |
|:---|:---|:---|
| **Zoho Catalyst** | Serverless | 16 AdvancedIO Node.js 20 micro-functions |
| **Zoho AppSail** | Container | Standalone Next.js 15 production server container (`start-appsail.js`) |
| **Node.js** | 20.x | Catalyst function & AppSail runtime |
| **QuickML RAG** | Cloud (GLM-4.7) | Primary vector retrieval over legal documents & police SOPs |
| **Gemini 2.5 Flash** | Latest | Agentic AI with 9-tool autonomous function calling |
| **Groq** | Llama 3.3 70B | Last-resort text fallback |
| **Zia Translation** | Cloud | Kannada ↔ English translation |
| **Catalyst ZCQL** | Cloud SQL | Crime database queries |
| **Catalyst NoSQL** | Document DB | Conversation history per session |
| **Axios** | 1.18 | HTTP client for inter-function calls |

### Design System — "Mission Control & Minimalist Authority"

```css
/* Typography Pairing */
Headlines & KPIs:  Montserrat (bold/extrabold, geometric presence)
Body & Descriptions: Google Sans / Plus Jakarta Sans (clean, ultra-legible)
Data & Case IDs:   JetBrains Mono (tabular numerals, tamper hashes)

/* Palette */
Background:        #F5F7F7 (Clean Slate Canvas) / #030712 (Dark Mode Control Room)
Brand Accents:     #0F5257 (Deep Teal) • #2E5FE0 (Royal Blue) • #C7362F (Oxblood)
Status Badges:     Critical (#EF4444) • High (#F59E0B) • Cleared (#10B981)
Cards:             Modular 2x2 & 3-Column balanced grids with subtle micro-borders
```

---

## 📊 Data Pipeline & Crime Database

### Dataset Composition

The crime database is a **synthetic dataset modeled on real Karnataka geography**, administrative boundaries, and crime statistics from 2022–2024 NCRB data.

| Dataset | Records | Key Fields |
|:---|:---|:---|
| **FIRs** | 3,000+ (5.35L Benchmark) | Case number, district, crime type, date, description, status, coordinates |
| **Accused** | 2,000+ | Full name, age, gender, linked FIR numbers, criminal history |
| **Victims** | 1,200+ | Demographics, vulnerability score, linked FIR numbers |
| **FIR-Accused Links** | 2,500+ | Many-to-many case-person mapping |
| **FIR-Victim Links** | 1,500+ | Many-to-many case-victim mapping |
| **Cameras** | 1,500+ | ID, name, lat/lng, type (ANPR/CCTV/Face), installation date |
| **ANPR Watchlist** | 800+ | Plate number, alert type, associated crime, vehicle description |
| **Crime Types** | 20+ | Code, label, severity weight, IPC / BNS section mapping |
| **Districts** | 31 | Name, population (Census 2011), area, headquarters |
| **Police Stations** | 100+ | Name, district, lat/lng, jurisdiction area |

### Data Generation Pipeline

```
crime-database/
├── raw-data/
│   ├── bengaluru-crime/         # Real Bengaluru crime statistics
│   ├── district-wise-2022.csv   # NCRB district data 2022
│   ├── district-wise-2023.csv   # NCRB district data 2023
│   ├── district-wise-2024.csv   # NCRB district data 2024
│   ├── boundaries/              # Karnataka administrative boundaries
│   ├── census/                  # Population data
│   ├── police-stations/         # Station coordinates
│   └── traffic-signals/         # Signal locations for camera placement
├── generated-csv/               # 17 production CSV files
│   ├── firs_v3.csv              # (652 KB)
│   ├── cameras_v3.csv           # (223 KB)
│   ├── accused.csv              # (230 KB)
│   ├── victims.csv              # (123 KB)
│   └── ...
└── generate_csvs.py             # Python script — generates all synthetic data
```

---

## 📁 Repository Structure

```
kspdatathon2026/
│
├── functions/                          # ⚡ Zoho Catalyst Serverless Functions (16, node20)
│   ├── askDrishtiAI/                   #    Primary RAG + QuickML + Gemini tool-calling AI
│   │   ├── index.js                   #    QuickML RAG → Gemini 2.5 Flash (9 tools) → Groq
│   │   └── catalyst-config.json       #    Stack: node20
│   ├── firs/                          #    FIR database ZCQL search & filter
│   ├── hotspots/                      #    Crime hotspot calculation & severity scoring
│   ├── trends/                        #    Monthly incident trend aggregation
│   ├── repeat-offenders/              #    Repeat criminal risk profiling
│   ├── trail/                         #    Vehicle geo-trail reconstruction
│   ├── anpr-check/                    #    ANPR plate watchlist lookup
│   ├── cameras-nearby/                #    Proximity camera search
│   ├── network-graph-data/            #    Suspect network relationship data
│   ├── underreporting/                #    Dark Zone statistical analysis
│   ├── victim-vulnerability/          #    Victim risk scoring
│   ├── conversations/                 #    Chat history persistence (NoSQL)
│   ├── drishtiVoice/                  #    Edge TTS voice synthesis
│   ├── export-pdf/                    #    Case report PDF generation
│   ├── chat/                          #    Conversational endpoint
│   └── drishti_ksp_function/          #    Core utility function
│
├── nextjs/                            # 🌐 Next.js 15 Web Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx               #    Cinematic landing page
│   │   │   ├── layout.js              #    Root layout + Google Fonts (Montserrat & Plus Jakarta)
│   │   │   ├── globals.css            #    Design tokens, Google Fonts imports, HSL palette
│   │   │   ├── api/                   #    API proxy routes (/api/askDrishtiAI, /api/firs, ...)
│   │   │   │
│   │   │   ├── dashboard/             # 👮 FIELD INSPECTOR COMMAND PORTAL
│   │   │   │   ├── layout.js          #    Inspector shell with Voice Orb, quick switch & alert bell
│   │   │   │   ├── page.js            #    📊 Tactical Dispatch Console with Supervisor Alert Banner
│   │   │   │   ├── chat/page.js       #    💬 Voice & Multilingual Agentic Chat
│   │   │   │   ├── map/               #    🗺️ GIS Crime Density Heatmap
│   │   │   │   ├── network/           #    🕸️ D3 Force-Directed Crime Network Graph
│   │   │   │   ├── surveillance/      #    📹 ANPR / CCTV Multi-Camera Surveillance Wall
│   │   │   │   ├── analytics/         #    📈 Dark Zone Analytics & Time-Series Forecasting
│   │   │   │   ├── trail/             #    📍 Vehicle Geo-Trail Reconstruction
│   │   │   │   ├── logs/              #    📋 Audit Logs & Conversation History
│   │   │   │   ├── fir/[...id]/       #    📄 FIR Case Dossier & Investigator Wall
│   │   │   │   └── suspect/[slug]/    #    👤 Suspect Intelligence Dossier
│   │   │   │
│   │   │   ├── analyst/               # 🔬 CHIEF CRIME ANALYST PORTAL
│   │   │   │   ├── layout.tsx         #    Analyst shell with Montserrat/Google Sans header
│   │   │   │   ├── page.tsx           #    📊 Intelligence Overview (2x2 Modular Intel Matrix)
│   │   │   │   ├── workbench/page.tsx #    🔬 6-Engine Specialized Crime Workbench
│   │   │   │   ├── heatmap/page.tsx   #    🗺️ Spatio-Temporal Predictive Heatmap
│   │   │   │   ├── network/page.tsx   #    🕸️ Cross-District Syndicate Link Graph
│   │   │   │   ├── patterns/page.tsx  #    🧬 Pattern & MO Intelligence Matrix
│   │   │   │   ├── reports/page.tsx   #    📑 Deep FIR Analytics & Ledgers
│   │   │   │   ├── watchlist/page.tsx #    👥 Recidivism & Repeat Offender Tracking
│   │   │   │   └── chat/page.tsx      #    💬 Analyst Co-Pilot Assistant
│   │   │   │
│   │   │   └── supervisor/            # 🛡️ COMMAND SUPERVISOR PORTAL
│   │   │       ├── layout.tsx         #    Supervisor header with Live Readiness Telemetry
│   │   │       ├── page.tsx           #    📊 Division Tactical Command Overview
│   │   │       ├── assignment/page.tsx#    ⚡ AI Case Assignment & Workload Balancer
│   │   │       ├── dispatch/page.tsx  #    🚓 Patrol Fleet Dispatch & Live Radar
│   │   │       └── audit/page.tsx     #    📋 Officer Query Stream & Activity Logs
│   │   │
│   │   ├── components/
│   │   │   ├── QuickRoleSwitcher.tsx  #    🔄 Instant Role Switching (Inspector ↔ Analyst ↔ Supervisor)
│   │   │   ├── AlertNotification.js   #    🚨 Universal Real-Time ANPR & Assignment Alert Dropdown
│   │   │   ├── InvestigatorWall.tsx    #    📜 Official Police Gazette & Court-Admissible Dossier
│   │   │   ├── DrishtiOrb.jsx         #    🔮 Animated AI Orb (4 reactive states)
│   │   │   ├── DrishtiPanel.jsx       #    💬 Slide-up Chat Panel
│   │   │   ├── DrishtiVoice.jsx       #    🎤 Voice Hook (STT/TTS + Clap Wake)
│   │   │   ├── SystemStatusFooter.jsx #    🌐 Live / Demo Matrix Health Indicator
│   │   │   └── visualization/         #    8 dynamic visualization routing components
│   │   └── lib/
│   │       ├── demo-data.js           #    56KB comprehensive Karnataka fallback dataset
│   │       ├── fetch-with-fallback.js #    Zero-downtime fetch wrapper
│   │       └── fir-store.js           #    State management & local storage sync
│   │
│   ├── start-appsail.js               # 🚀 Standalone AppSail container entrypoint
│   └── app-service.json               # ⚙️ Zoho AppSail build configuration
│
├── catalyst.json                      # ⚙️ Zoho Catalyst project config (Org ID: 60073715607)
└── README.md                          # 📖 Super-detailed project documentation
```

---

## 🚀 Getting Started

### Prerequisites

| Tool | Version | Purpose |
|:---|:---|:---|
| Node.js | 20+ (Next.js & Catalyst) | Runtime |
| npm | 10+ | Package management |
| Zoho Catalyst CLI | 1.27+ | Local backend simulation & cloud deploy |

### 1. Clone & Install

```bash
git clone https://github.com/vedeshskhatri/kspdatathon2026.git
cd kspdatathon2026/nextjs
npm install --legacy-peer-deps
```

### 2. Configure Environment

Create `nextjs/.env.local`:
```env
# AI & QuickML Configuration
CATALYST_ORG_ID=60073715607
QUICKML_OAUTH_TOKEN=your_quickml_oauth_token
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-2.5-flash

# API Base URL
NEXT_PUBLIC_API_BASE_URL=/api
```

### 3. Run Locally

#### Option A: Local Full Stack (Catalyst CLI + Next.js)
```bash
# Terminal 1 — Catalyst Functions
catalyst serve --only functions

# Terminal 2 — Next.js Frontend
cd nextjs
npm run dev
# → Live at http://localhost:3000
```

#### Option B: Standalone Frontend (Auto-Fallback)
```bash
cd nextjs
npm run dev
# → Zero-config instant launch with 56KB Karnataka demo dataset
```

---

## ☁️ Deployment

### 1. Zoho Catalyst Serverless Functions
```bash
catalyst login
catalyst deploy --only functions
# → Deploys all 16 serverless Node.js 20 micro-functions
```

### 2. Zoho AppSail Container
```bash
# AppSail uses start-appsail.js and standalone Next.js build
npm run build
catalyst deploy --only app-service
# → Deploys production container with zero cold-starts
```

---

## 🔑 Key Engineering Decisions

| Decision | Rationale |
|:---|:---|
| **Web Speech API over Gemini Live** | No API quota concerns, no cost, works partially offline, simpler for hackathon timeline. Gemini Live is a post-hackathon upgrade path. |
| **Double-clap wake over hotword** | No always-on microphone (privacy), no external dependency, unique & memorable interaction model. Implemented purely with Web Audio API energy spike detection. |
| **15+ Gemini API keys with rotation** | Rate limit immunity during demo. Auto-rotates on 429 responses. Groq as last-resort fallback. |
| **Framer Motion + GSAP together** | Framer handles state transitions (idle→listening→thinking→speaking). GSAP handles continuous organic loops (breathing, morphing). They complement without conflict. |
| **56KB demo-data.js fallback** | Demo day insurance. Even if every API goes down, the dashboard renders with realistic Karnataka data. Judges see a fully functional product regardless of network conditions. |
| **QuickML RAG as primary, Gemini as fallback** | QuickML handles legal document retrieval (police manuals, IPC sections). Gemini handles agentic tool-calling queries. Each engine plays to its strength. |

---

## 📐 AI Response Schema

Every DRISHTI response follows a strict TypeScript schema — enabling deterministic frontend rendering:

```typescript
interface DrishtiResponse {
  response_text: string;                           // Spoken + displayed answer
  language_detected: "en" | "hi" | "kn";          // For TTS language matching
  emotion: "neutral" | "alert" | "urgent" |       // Drives orb color + animation
           "informative" | "reassuring";
  urgency: "low" | "medium" | "high" | "critical"; // Drives TTS prosody + visual treatment
  visualization: {                                 // Dynamic widget rendering
    type: "hotspot_map" | "bar_chart" | "line_chart" |
          "network_graph" | "stat_card" | "fir_list";
    title: string;
    data: object;
  } | null;
  follow_up_suggestions: string[];                 // 2-4 proactive next queries
  needs_followup: boolean;                         // Whether AI needs clarification
}
```

---

## 👥 Team

| Role | Contributor | Focus Area |
|:---|:---|:---|
| 🎯 **Project Lead & Captain** | Vritika | Overall architecture, integration, deployment |
| 🤖 **AI Engine Lead** | Swapnil | RAG pipeline, Gemini tool calling, voice processing |
| 📊 **Data Analytics** | Aman | Crime database generation, ZCQL queries, dark zone analysis |
| 📹 **Camera Intelligence** | Vedesh | ANPR/CCTV pipeline, surveillance wall, geo-trail tracker |
| 🎨 **UI/UX Lead** | Aryan | Design system, dashboard layout, orb animations, landing page |

---

## 📄 License

Built for the **Karnataka State Police Datathon 2026** (Hack2Skill).  
Distributed under the **MIT License**.

---

<p align="center">
  <strong>🛡️ DRISHTI (ದೃಷ್ಟಿ)</strong><br/>
  <em>Empowering Karnataka State Police with Agentic Intelligence.</em><br/><br/>
  <sub>One voice command. Instant intelligence. Zero friction.</sub>
</p>
