# HAJonSoft Copy Audit

Date: 2026-07-07 UTC

## Scope

This audit compares the archived live site at `https://hajonsoft.net/` against the current React site in this folder.

The old site is treated as the source of truth. The current React app was not edited during this audit.

## Artifacts Created

- `old-site/hajonsoft.net/index.html` - raw homepage HTML from the live site.
- `old-site/hajonsoft.net/headers.txt` - HTTP response headers.
- `old-site/hajonsoft.net/static/js/main.fcbf45bc.js` - old site's React bundle.
- `old-site/hajonsoft.net/static/css/main.565c96e2.css` - old site's CSS bundle.
- `old-site/hajonsoft.net/extracted-copy.en.json` - extracted English source-truth copy.
- `old-site/hajonsoft.net/extracted-copy.en.txt` - readable English source-truth copy.
- `old-site/current-site-copy.en.json` - extracted current React English copy.
- `old-site/current-site-copy.en.txt` - readable current React English copy.

## Method

The old HTML is only a React mount shell, so the real copy was extracted from the production JavaScript bundle. The English translation object contains 128 source-truth strings.

The current React site copy was extracted from English translation objects and direct JSX visible text. That produced 279 copy records.

Analogy: this is like comparing the old approved brochure against the new brochure. Generic labels are low risk. Numbers, certifications, pricing, legal/compliance, integrations, and performance promises are high risk.

## Source-Truth Positioning

The old site consistently says HAJonSoft provides AI agents for Saudi Arabia visa workflows:

- 4 intelligent AI agents for travel agencies and visa processing centers worldwide: Umrah, Hajj, Visit Visa, and Nusuk. See `old-site/hajonsoft.net/extracted-copy.en.txt:41`.
- The broader product includes Umrah, Hajj, Visit Visa, Nusuk, Passport Scanning, and custom agents like Rawda. See `old-site/hajonsoft.net/extracted-copy.en.txt:18`.
- The core promise is automatically sending traveller information to Saudi Arabia visa sites/systems. See `old-site/hajonsoft.net/extracted-copy.en.txt:12`, `old-site/hajonsoft.net/extracted-copy.en.txt:17`, and `old-site/hajonsoft.net/extracted-copy.en.txt:54`.
- Passport scanning reads passport data from images, including Arabic names and birthplace fields, and reads both MRZ and the visual area of the passport page. See `old-site/hajonsoft.net/extracted-copy.en.txt:27`.
- Support is hands-on through meetings, video calls, and remote assistance. See `old-site/hajonsoft.net/extracted-copy.en.txt:121`.
- Global coverage is stated as serving clients across 40+ countries. See `old-site/hajonsoft.net/extracted-copy.en.txt:123`.

## High-Risk Unsupported Current Copy

| Area | Current copy | Source-truth finding | Risk |
| --- | --- | --- | --- |
| Accreditation | `NEW ACCREDITATION: Fully compliant with the 2026/1448H Ministry of Hajj & Umrah Direct GDS Visa protocol` in `src/App.tsx:62` | Old copy does not mention a 2026/1448H accreditation, Direct GDS protocol, or formal compliance approval. | Very high |
| Ministry certification | `Fully certified by the Saudi Ministry of Hajj & Umrah` in `src/components/Hero.tsx:12`; `fully certified visa autofill` in `src/components/Footer.tsx:11` | Old copy says data is sent to Saudi systems and photo requirements are matched, but does not claim certification by the Ministry. | Very high |
| Live H2H/API | `H2H Cloud API integration is live` in `src/components/Hero.tsx:11`; `Ministry H2H Cloud API` in `src/components/Features.tsx:37`; `MoHU API Gateway: 100% OPERATIONAL` in `src/components/Footer.tsx:13` and `src/components/Footer.tsx:14` | Old copy does not mention H2H, Direct GDS, cloud API, gateway status, uptime, or a live Ministry API. | Very high |
| Exact speed | `1.8s per passport auto-fill` in `src/components/Hero.tsx:23`; `exactly 1.8 seconds` in `src/components/Sandbox.tsx:40`; `8 minutes down to 2 seconds` in `src/components/Features.tsx:14` | Old copy says "in seconds" and "skip hours", not exact timing. See `old-site/hajonsoft.net/extracted-copy.en.txt:117` and `old-site/hajonsoft.net/extracted-copy.en.txt:17`. | High |
| Exact OCR accuracy | `99.94%` in `src/components/Hero.tsx:26`; `99.9% OCR accuracy` in `src/components/VideoDemo.tsx:8`; `99.9% Accurate` in `src/components/Features.tsx:23` | Old copy says "high accuracy" only. See `old-site/hajonsoft.net/extracted-copy.en.txt:27`. | High |
| Volume processed | `4.8M+` pilgrims processed in `src/components/Hero.tsx:29` | Old copy has no processed-volume claim. | High |
| Superlatives | `absolute gold standard` in `src/components/Hero.tsx:17`; `world's most popular` in `src/components/Features.tsx:14`; `world's leading` in `src/components/Footer.tsx:7` | Old copy says trusted worldwide and 40+ countries, but not market leadership or most popular. | High |
| GDPR and privacy compliance | `GDPR & Ministry Guardrails` and GDPR compliance in `src/components/Features.tsx:53` and `src/components/Features.tsx:54`; `compliant and private` in `src/components/VideoDemo.tsx:14` | Old copy does not mention GDPR. It says secure submission and accurate processing in a general way. | High |
| Encryption | `Bank-grade MRZ extraction encryption & local storage` in `src/components/Hero.tsx:13`; `Robust local encryption` in `src/components/VideoDemo.tsx:14` | Old copy does not claim bank-grade encryption or local encryption. | High |
| Pricing model | Monthly plans at `$49`, `$149`, `$499` in `src/components/Pricing.tsx:14`, `src/components/Pricing.tsx:31`, `src/components/Pricing.tsx:49` | Old copy is built around one-time purchase, seasonal support, 15-year support, and volume pricing. See `old-site/hajonsoft.net/extracted-copy.en.txt:74`, `old-site/hajonsoft.net/extracted-copy.en.txt:85`, and `old-site/hajonsoft.net/extracted-copy.en.txt:88`. | Very high |
| Cancel/fees promise | `No installation fees or hidden submission charges. Cancel anytime.` in `src/components/Pricing.tsx:8` | Old copy explicitly says the basic purchase is one-time and non-refundable. See `old-site/hajonsoft.net/extracted-copy.en.txt:74`. | Very high |
| Portal support | Muqeem, Sejel, Tawaf, WayToUmrah in `src/components/Hero.tsx:14`, `src/components/Features.tsx:14`, and `src/components/Footer.tsx:142` to `src/components/Footer.tsx:146` | Old English source names Bab Al-Umrah, eHaj, Masar, Saudi visa portal, Nusuk, and Dove. It does not name Muqeem, Sejel, Tawaf, or WayToUmrah. | High |
| Print/badge product | Badge, wristband, luggage tag engine, Zebra/Brother compatibility, 300DPI, PDF maps in `src/components/BadgeGenerator.tsx:37` to `src/components/BadgeGenerator.tsx:46` | Old copy does not mention badge printing, wristbands, luggage tags, Zebra, Brother, QR codes, 300DPI, or PDF maps. | High |
| Enterprise feature set | White-labeled portals, webhooks, dedicated account manager, unlimited branches in `src/components/Pricing.tsx:55` to `src/components/Pricing.tsx:59` | Old copy mentions dedicated sales/admin portals and support, but not these enterprise features. | High |
| Company/legal identity | `Hajonsoft International`, `Registered trademark`, and `London, United Kingdom` in `src/components/Footer.tsx:15` and `src/components/Footer.tsx:117` | Old copy exposes `1 (949) 522-1879` and `hajonsoft@gmail.com` in the bundle. It does not support London, Hajonsoft International, or registered trademark. See `old-site/hajonsoft.net/extracted-copy.en.txt:65`. | High |

## Partially Supported But Overstated

These ideas exist in the old source, but the new copy sharpens them into claims that need proof or softer wording:

- Automated visa workflows: supported. Exact workflow speed, "touchless", and "zero manual typing" are not fully supported.
- Passport scanning/OCR: supported. Exact OCR accuracy, MRZ-only positioning, local hardware promises, webcam promises, and scanner model claims are not supported by the old English copy.
- Custom work: supported as "custom agents such as Rawda workflows". Current copy turns that into H2H developers integrating OCR with custom CRM/booking ledgers in `src/components/VideoDemo.tsx:150`, which is broader.
- Global reach: supported as "40+ countries". Current copy replaces it with `4.8M+ pilgrims processed across GBR, CAN, IDN & EU`, which is a new metric.
- Support: supported. "Priority 24/7 technical support response" in `src/components/Pricing.tsx:41` is not supported.

## Source-Truth Copy Missing Or Diluted In New Site

The new site should probably preserve these old-site ideas:

- "4 AI Agents for Saudi Arabia Visa Processing" is the old central positioning. See `old-site/hajonsoft.net/extracted-copy.en.txt:50` and `old-site/hajonsoft.net/extracted-copy.en.txt:52`.
- Agent names and workflows: Umrah, Hajj, Visit Visa, Nusuk, Passport Scanning, custom Rawda agents. See `old-site/hajonsoft.net/extracted-copy.en.txt:18`, `old-site/hajonsoft.net/extracted-copy.en.txt:23` to `old-site/hajonsoft.net/extracted-copy.en.txt:31`.
- eHaj and Masar are source-truth platform names. See `old-site/hajonsoft.net/extracted-copy.en.txt:20` and `old-site/hajonsoft.net/extracted-copy.en.txt:32`.
- Passport scanning should mention image-based reading, Arabic names, birthplace fields, MRZ, and visual passport page reading. See `old-site/hajonsoft.net/extracted-copy.en.txt:27`.
- Dove online storefront is missing from the new site. See `old-site/hajonsoft.net/extracted-copy.en.txt:29`.
- Old pricing/support structure is missing and contradicted by the monthly pricing grid. See `old-site/hajonsoft.net/extracted-copy.en.txt:70` to `old-site/hajonsoft.net/extracted-copy.en.txt:110`.
- Contact details changed. Old site source includes `1 (949) 522-1879`; bundle also includes `hajonsoft@gmail.com`. See `old-site/hajonsoft.net/extracted-copy.en.txt:65`.

## Recommendation

Do not treat the current React copy as approved marketing copy yet.

Suggested next step:

1. Replace high-risk claims with source-truth wording from `old-site/hajonsoft.net/extracted-copy.en.txt`.
2. Keep only claims that appear in the old source unless Ibrahim supplies proof for the new claims.
3. Use the old site's positioning as the rewrite backbone:
   - HAJonSoft provides AI agents for Saudi Arabia visa workflows.
   - Agents cover Umrah, Hajj, Visit Visa, Nusuk, Passport Scanning, and custom workflows.
   - The product sends traveller information to Saudi Arabia visa sites/systems.
   - Passport scanning reads passport images, MRZ, and visual-page fields.
   - Support is hands-on through meetings, video calls, and remote assistance.
   - Global reach is 40+ countries.
4. Remove or verify before publishing:
   - Ministry certification/accreditation.
   - 2026/1448H Direct GDS protocol.
   - Live H2H Cloud API/Gateway status.
   - Exact speed, accuracy, and processed-volume metrics.
   - Monthly pricing.
   - GDPR/bank-grade encryption claims.
   - Print/badge hardware compatibility.
   - Registered trademark/location claims.

