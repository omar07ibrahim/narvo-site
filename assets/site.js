/* NARVO — site behaviour: language, motion, catalogue, video player and the voice concierge. */
(() => {
  "use strict";
  const AGENT_ID = "agent_8801m50tmrb1fngt81fay6c5xmr1";
  const SDK_SRC = "vendor/elevenlabs-client-1.26.0.js";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------ media manifest (filled by the build) */
  const MEDIA = window.NARVO_MEDIA || {};

  /* ------------------------------------------------------------------ copy */
  const T = {
    en: {
      "nav.platform": "Platform", "nav.solutions": "Solutions", "nav.cases": "Case studies", "nav.pilot": "Pilot", "nav.about": "About", "nav.lang": "العربية",
      "cta.talk": "Talk to NARVO", "cta.talkLong": "Talk to our AI concierge", "cta.film": "Watch the film", "cta.tap": "Tap to talk",
      "hero.eyebrow": "Emirati-founded · Abu Dhabi", "hero.title": "Technology<br><em>you control.</em>",
      "hero.sub": "Private, Arabic-first AI that runs on your own servers. One core, twenty solutions, a person approving every action — and zero bytes leaving your organisation.",
      "hero.k1": "bytes leave your organisation", "hero.k2": "solutions on one private core", "hero.k3": "weeks from pilot to decision",
      "film.kicker": "The film", "film.title": "Most AI asks you to send your data away. NARVO brings the AI to your data.", "film.name": "NARVO — platform overview",
      "pr.kicker": "Private by design", "pr.title": "Intelligence that stays where your data lives.",
      "pr.1t": "On your servers", "pr.1d": "Open-weight models run on your own infrastructure or UAE sovereign cloud — not on foreign AI services. Disconnect the internet and everything keeps working.",
      "pr.2t": "Arabic-first", "pr.2d": "Modern Standard Arabic, Emirati dialect and English — in speech, scanned documents and conversation.",
      "pr.3t": "A person approves", "pr.3d": "The AI reads, checks and drafts. A named official approves every action that matters — nothing changes without a person.",
      "pr.4t": "Every action on record", "pr.4d": "Every model call, approval and action is written to an audit trail on your infrastructure. Numbers are computed from your data — never invented by the model.",
      "st.5": "Twenty solutions", "st.5d": "cases · customers · decisions · documents · operations · sites",
      "st.4": "The NARVO core", "st.4d": "agents · rules engine · retrieval · speech · governance · audit",
      "st.3": "Model runtime", "st.3d": "vLLM · OpenAI-compatible · on CPU or GPU",
      "st.2": "Open-weight models", "st.2d": "Qwen · Whisper · forecasting — weights you hold",
      "st.1": "Your hardware", "st.1d": "on-premises server · private cloud · UAE sovereign cloud",
      "so.kicker": "Twenty solutions", "so.title": "Starting points, built around your requirement.",
      "so.lede": "We don't start from a product. We start from your requirement — and build, adapt or integrate around it.",
      "so.all": "All", "so.watch": "Watch the demo",
      "area.1": "Enterprise", "area.2": "Documents", "area.3": "Customers", "area.4": "People", "area.5": "Operations", "area.6": "Sites & field",
      "mq.kicker": "In the pilot stage", "mq.title": "Muqarrir — the AI meeting rapporteur",
      "mq.lede": "Built for a UAE government entity: it listens to the meeting live, in fuṣḥā, Emirati dialect and English — and the official minutes are ready before you leave the room.",
      "mq.b1": "Live transcript with speakers recognised", "mq.b2": "Numbered decisions and actions with owners and deadlines",
      "mq.b3": "Every decision linked to the original recording — click and listen", "mq.b4": "Approve, stamp and export in Arabic and English",
      "mq.b5": "Runs on your own GPU server — no internet, no cloud", "mq.cta": "Watch Muqarrir in action",
      "cs.kicker": "See it working", "cs.title": "Real systems, recorded on real screens.",
      "pi.kicker": "The pilot programme", "pi.title": "A working pilot in weeks, not quarters.",
      "pi.lede": "One priority use case becomes a working AI system — built on your data, under your control. You see it work before you commit to anything larger.",
      "pi.s1t": "Before we start", "pi.s1": "Requirements session", "pi.s1d": "Agree the use case, success criteria, data access and deployment.",
      "pi.s2t": "Week 1", "pi.s2": "First working version", "pi.s2d": "We build, adapt or integrate a working system on your real or representative data.",
      "pi.s3t": "Weeks 2–4", "pi.s3": "Refine, measure, decide", "pi.s3d": "Your team uses it, we refine it together — and you decide: scale, adjust or stop.",
      "pk.1": "Private & sovereign AI", "pk.1d": "Arabic dictation and meeting notes, a private assistant, internal search.",
      "pk.2": "AI agents for operations", "pk.2d": "Case intake, approvals routing, customer requests, documenting legacy systems.",
      "pk.3": "Arabic-first document & knowledge AI", "pk.3d": "Policy Q&A, contract review, bilingual document processing.",
      "pk.4": "Predictive ML & decision intelligence", "pk.4d": "Demand forecasting, risk flags, operational performance briefs.",
      "ab.kicker": "Who we are", "ab.title": "Emirati-founded. Abu Dhabi-based. Built with MBZUAI engineers.",
      "ab.lede": "NARVO is an Emirati advanced-technology company in Masdar City, Abu Dhabi. We turn institutional requirements into working technology systems — keeping the solution path open and the delivery accountable.",
      "ab.founders": "Founders & leadership", "ab.advisors": "Strategic advisors",
      "ab.p1": "Co-founder & CEO", "ab.p2": "Co-founder · Commercial Operations", "ab.p3": "Co-founder · Strategic Markets & Affairs",
      "ab.a1n": "Dr. Mohamed Alloghani", "ab.a1": "Applied AI & AI systems · first Emirati PhD focused on AI",
      "ab.a2": "AI transformation & growth · €1bn+ total contract value", "ab.a3n": "Prof. Olivier Oullier", "ab.a3": "AI, innovation & strategy · 300+ publications",
      "ab.a4": "Government & international markets · $20bn+ UAE deals",
      "tk.kicker": "Start a conversation", "tk.title": "Start with one priority.",
      "tk.lede": "Talk to our AI concierge in Arabic or English — describe your challenge, and book a requirements session. You'll leave with a scope, success criteria and a pilot start date.",
      "tk.addr": "Masdar City, Abu Dhabi", "tk.note": "Uses your microphone. Prefer to write? Use the form below.",
      "f.name": "Full name", "f.org": "Organisation", "f.email": "Work email", "f.phone": "Phone (optional)", "f.need": "What would you like AI to do for your organisation?",
      "f.send": "Request a requirements session", "f.ok": "Thank you — the NARVO team will contact you shortly.", "f.mail": "Your email app will open with the request — just press send.",
      "ft.tag": "Technology you control.", "ft.c1": "Company", "ft.c2": "Platform", "ft.c3": "Reach us", "ft.contact": "Contact", "ft.private": "Private by design", "ft.rights": "Emirati-founded. Abu Dhabi-based.",
      "cg.connecting": "Connecting…", "cg.listening": "Listening…", "cg.speaking": "NARVO is speaking", "cg.ended": "Conversation ended", "cg.mute": "Mute", "cg.unmute": "Unmute", "cg.end": "End conversation",
      "cg.mic": "Microphone access is needed to talk. You can also write to contact@narvo.ae.", "cg.error": "Couldn't connect. Please try again, or write to contact@narvo.ae.",
      "cg.saved": "Request sent to the NARVO team", "player.ar": "Arabic", "player.en": "English",
    },
    ar: {
      "nav.platform": "المنصة", "nav.solutions": "الحلول", "nav.cases": "دراسات الحالة", "nav.pilot": "التجربة", "nav.about": "من نحن", "nav.lang": "English",
      "cta.talk": "تحدّث مع نارفو", "cta.talkLong": "تحدّث مع مساعدنا الذكي", "cta.film": "شاهد الفيلم", "cta.tap": "اضغط للتحدث",
      "hero.eyebrow": "شركة إماراتية · أبوظبي", "hero.title": "تقنيةٌ…<br><em>تحت سيطرتك.</em>",
      "hero.sub": "ذكاءٌ اصطناعي خاص، بالعربية أولاً، يعمل على خوادمكم. نواةٌ واحدة، وعشرون حلاً، وإنسانٌ يعتمد كل إجراء — وصفرُ بايت يغادر جهتكم.",
      "hero.k1": "بايت تغادر جهتكم", "hero.k2": "حلاً على نواةٍ خاصة واحدة", "hero.k3": "أسابيع من التجربة إلى القرار",
      "film.kicker": "الفيلم", "film.title": "معظمُ حلول الذكاء الاصطناعي تطلب منك أن ترسل بياناتك إليها. «نارفو» تأتي بالذكاء الاصطناعي إلى بياناتك.", "film.name": "نارفو — نظرة على المنصة",
      "pr.kicker": "الخصوصية في التصميم", "pr.title": "ذكاءٌ يبقى حيث تعيش بياناتكم.",
      "pr.1t": "على خوادمكم", "pr.1d": "نماذج مفتوحة الأوزان تعمل على بنيتكم التحتية أو على السحابة السيادية في الإمارات — لا على خدمات ذكاء اصطناعي أجنبية. افصلوا الإنترنت، ويستمر كل شيء بالعمل.",
      "pr.2t": "العربية أولاً", "pr.2d": "الفصحى واللهجة الإماراتية والإنجليزية — في الكلام والوثائق الممسوحة والمحادثة.",
      "pr.3t": "الإنسان يعتمد", "pr.3d": "الذكاء الاصطناعي يقرأ ويدقق ويصوغ، والموظف المسؤول بالاسم يعتمد كل إجراءٍ مهم — لا يتغيّر شيءٌ دون إنسان.",
      "pr.4t": "كل إجراءٍ مسجّل", "pr.4d": "كل استدعاءٍ للنموذج وكل اعتمادٍ وكل إجراء يُسجَّل في سجل تدقيق على بنيتكم التحتية. والأرقام تُحسب من بياناتكم — لا يخترعها النموذج.",
      "st.5": "عشرون حلاً", "st.5d": "الحالات · المتعاملون · القرار · المستندات · العمليات · المواقع",
      "st.4": "نواة نارفو", "st.4d": "الوكلاء · محرك القواعد · الاسترجاع · الكلام · الحوكمة · التدقيق",
      "st.3": "تشغيل النماذج", "st.3d": "vLLM · متوافق مع OpenAI · على المعالج أو وحدة الرسوميات",
      "st.2": "نماذج مفتوحة الأوزان", "st.2d": "Qwen · Whisper · التنبؤ — أوزانٌ تملكونها",
      "st.1": "أجهزتكم", "st.1d": "خادم داخل الجهة · سحابة خاصة · سحابة سيادية إماراتية",
      "so.kicker": "عشرون حلاً", "so.title": "نقاط انطلاق… تُبنى حول متطلباتكم.",
      "so.lede": "لا نبدأ من منتج، بل من متطلباتكم — ثم نبني أو نكيّف أو ندمج حولها.",
      "so.all": "الكل", "so.watch": "شاهد العرض",
      "area.1": "المؤسسة", "area.2": "المستندات", "area.3": "العملاء", "area.4": "الموظفون", "area.5": "العمليات", "area.6": "المواقع والميدان",
      "mq.kicker": "في مرحلة التجربة", "mq.title": "مقرّر الاجتماعات الذكي",
      "mq.lede": "صُمّم لجهةٍ حكومية في الإمارات: يستمع إلى الاجتماع مباشرةً بالفصحى واللهجة الإماراتية والإنجليزية — ويكون المحضر الرسمي جاهزاً قبل أن تغادر القاعة.",
      "mq.b1": "تفريغٌ مباشر مع تمييز المتحدثين", "mq.b2": "قراراتٌ مرقّمة وتكليفاتٌ بأسماء المسؤولين ومواعيدها",
      "mq.b3": "كل قرارٍ مرتبط بلحظته في التسجيل الأصلي — انقر واسمع", "mq.b4": "اعتمادٌ وختمٌ وتصدير بالعربية والإنجليزية",
      "mq.b5": "يعمل على خادم الجهة — لا إنترنت، لا سحابة", "mq.cta": "شاهد «مُقرِّر» أثناء العمل",
      "cs.kicker": "شاهدها تعمل", "cs.title": "أنظمةٌ حقيقية، مسجّلة على شاشاتٍ حقيقية.",
      "pi.kicker": "برنامج التجربة", "pi.title": "تجربةٌ عاملة خلال أسابيع، لا أرباع سنة.",
      "pi.lede": "أولويةٌ واحدة تتحول إلى نظام ذكاء اصطناعي عامل — على بياناتكم وتحت سيطرتكم. ترونه يعمل قبل أن تلتزموا بأي شيءٍ أكبر.",
      "pi.s1t": "قبل البدء", "pi.s1": "جلسة المتطلبات", "pi.s1d": "نتفق على حالة الاستخدام ومعايير النجاح والوصول إلى البيانات وطريقة النشر.",
      "pi.s2t": "الأسبوع الأول", "pi.s2": "أول نسخةٍ عاملة", "pi.s2d": "نبني أو نكيّف أو ندمج نظاماً عاملاً على بياناتكم الحقيقية أو التمثيلية.",
      "pi.s3t": "الأسابيع 2–4", "pi.s3": "تحسين، قياس، قرار", "pi.s3d": "يستخدمه فريقكم ونحسّنه معاً — ثم تقررون: التوسيع أو التعديل أو الإيقاف.",
      "pk.1": "ذكاءٌ اصطناعي خاص وسيادي", "pk.1d": "الإملاء العربي ومحاضر الاجتماعات، ومساعدٌ خاص، وبحثٌ داخلي.",
      "pk.2": "وكلاء ذكيون للعمليات", "pk.2d": "استقبال الحالات، وتوجيه الاعتمادات، وطلبات المتعاملين، وتوثيق الأنظمة القديمة.",
      "pk.3": "ذكاء المستندات والمعرفة بالعربية أولاً", "pk.3d": "أسئلة السياسات، ومراجعة العقود، ومعالجة المستندات ثنائية اللغة.",
      "pk.4": "التعلم التنبؤي وذكاء القرار", "pk.4d": "التنبؤ بالطلب، وإشارات المخاطر، وموجزات الأداء التشغيلي.",
      "ab.kicker": "من نحن", "ab.title": "شركةٌ إماراتية في أبوظبي، بمهندسين من جامعة محمد بن زايد للذكاء الاصطناعي.",
      "ab.lede": "«نارفو» شركة إماراتية للتقنيات المتقدمة في مدينة مصدر بأبوظبي. نحوّل متطلبات المؤسسات إلى أنظمةٍ تقنية عاملة — مع إبقاء خيارات الحلول مفتوحة وتحمّل مسؤولية التنفيذ.",
      "ab.founders": "المؤسسون والقيادة", "ab.advisors": "المستشارون الاستراتيجيون",
      "ab.p1": "شريكٌ مؤسس والرئيس التنفيذي", "ab.p2": "شريكٌ مؤسس · العمليات التجارية", "ab.p3": "شريكٌ مؤسس · الأسواق الاستراتيجية والعلاقات",
      "ab.a1n": "د. محمد اللوغاني", "ab.a1": "الذكاء الاصطناعي التطبيقي وأنظمته · أول إماراتي يحصل على دكتوراه في الذكاء الاصطناعي",
      "ab.a2": "التحول بالذكاء الاصطناعي والنمو · عقودٌ تتجاوز مليار يورو", "ab.a3n": "البروفيسور أوليفييه أولييه", "ab.a3": "الذكاء الاصطناعي والابتكار والاستراتيجية · أكثر من 300 منشور",
      "ab.a4": "الحكومة والأسواق الدولية · صفقات في الإمارات تتجاوز 20 مليار دولار",
      "tk.kicker": "ابدأ المحادثة", "tk.title": "ابدأ بأولويةٍ واحدة.",
      "tk.lede": "تحدّث مع مساعدنا الذكي بالعربية أو الإنجليزية — صِف التحدي واحجز جلسة المتطلبات. ستخرج بنطاق عمل ومعايير نجاح وموعدٍ لبدء التجربة.",
      "tk.addr": "مدينة مصدر، أبوظبي", "tk.note": "يستخدم الميكروفون. تفضّل الكتابة؟ استخدم النموذج أدناه.",
      "f.name": "الاسم الكامل", "f.org": "الجهة", "f.email": "البريد الإلكتروني للعمل", "f.phone": "الهاتف (اختياري)", "f.need": "ما الذي تودّ أن يقوم به الذكاء الاصطناعي في جهتك؟",
      "f.send": "اطلب جلسة متطلبات", "f.ok": "شكراً لك — سيتواصل معك فريق نارفو قريباً.", "f.mail": "سيفتح تطبيق البريد مع طلبك — اضغط إرسال فقط.",
      "ft.tag": "تقنيةٌ تحت سيطرتك.", "ft.c1": "الشركة", "ft.c2": "المنصة", "ft.c3": "تواصل معنا", "ft.contact": "تواصل", "ft.private": "الخصوصية في التصميم", "ft.rights": "شركةٌ إماراتية في أبوظبي.",
      "cg.connecting": "جارٍ الاتصال…", "cg.listening": "أستمع إليك…", "cg.speaking": "نارفو يتحدث", "cg.ended": "انتهت المحادثة", "cg.mute": "كتم", "cg.unmute": "إلغاء الكتم", "cg.end": "إنهاء المحادثة",
      "cg.mic": "يلزم الإذن باستخدام الميكروفون للتحدث. ويمكنك أيضاً مراسلتنا على contact@narvo.ae.", "cg.error": "تعذّر الاتصال. حاول مجدداً، أو راسلنا على contact@narvo.ae.",
      "cg.saved": "أُرسل الطلب إلى فريق نارفو", "player.ar": "العربية", "player.en": "English",
    },
  };

  /* ------------------------------------------------------------------ language */
  const qsLang = new URLSearchParams(location.search).get("lang");
  let stored = null;
  try { stored = localStorage.getItem("narvo-lang"); } catch {}
  let lang = qsLang === "ar" || qsLang === "en" ? qsLang : stored || ((navigator.language || "").startsWith("ar") ? "ar" : "en");
  const t = (k) => T[lang][k] ?? T.en[k] ?? k;
  function applyLang() {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$("[data-ph]").forEach((el) => { el.placeholder = t(el.dataset.ph); });
    document.title = lang === "ar" ? "نارفو — تقنيةٌ تحت سيطرتك" : "NARVO — Technology you control";
    renderSolutions();
    renderCases();
    renderDurations();
    try { localStorage.setItem("narvo-lang", lang); } catch {}
  }
  $("#langBtn").addEventListener("click", () => { lang = lang === "ar" ? "en" : "ar"; applyLang(); });

  /* ------------------------------------------------------------------ nav + reveal + counters */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("solid", scrollY > 30);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add("in");
      io.unobserve(e.target);
      $$("[data-count]", e.target).forEach(countUp);
    }
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  const observeReveals = (root = document) => {
    $$(".reveal", root).forEach((el, i) => { if (!el.style.getPropertyValue("--d")) el.style.setProperty("--d", `${Math.min(i % 4, 3) * 0.08}s`); io.observe(el); });
    $$(".pr, .stack, .timeline", root).forEach((el) => io.observe(el));
  };
  function countUp(el) {
    const to = Number(el.dataset.count);
    if (reduced || !to) { el.textContent = String(to); return; }
    const t0 = performance.now(), D = 1600;
    const step = (now) => { const k = Math.min(1, (now - t0) / D); el.textContent = String(Math.round(to * (1 - Math.pow(1 - k, 4)))); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }

  /* ------------------------------------------------------------------ hero: a field of data drawn toward one core */
  const field = $("#field");
  (function heroField() {
    if (!field) return;
    const ctx = field.getContext("2d");
    const DPR = Math.min(devicePixelRatio || 1, 1.5);
    let W = 0, H = 0, parts = [], running = true, raf = 0;
    const N = innerWidth < 720 ? 70 : 150;
    function resize() {
      W = field.clientWidth; H = field.clientHeight;
      field.width = W * DPR; field.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    function spawn(p = {}) {
      const a = Math.random() * Math.PI * 2, r = Math.max(W, H) * (0.55 + Math.random() * 0.45);
      p.x = W * 0.5 + Math.cos(a) * r; p.y = H * 0.42 + Math.sin(a) * r * 0.62;
      p.v = 0.18 + Math.random() * 0.5; p.s = 0.6 + Math.random() * 1.6; p.gold = Math.random() < 0.72; p.life = 0;
      return p;
    }
    resize();
    for (let i = 0; i < N; i++) { const p = spawn(); p.life = Math.random(); parts.push(p); }
    addEventListener("resize", resize, { passive: true });
    function frame() {
      ctx.clearRect(0, 0, W, H);
      const cx = W * 0.5, cy = H * 0.42;
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(W, H) * 0.5);
      g.addColorStop(0, "rgba(201,173,110,0.10)"); g.addColorStop(1, "rgba(201,173,110,0)");
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      for (const p of parts) {
        const dx = cx - p.x, dy = cy - p.y, d = Math.hypot(dx, dy) || 1;
        // spiral in: mostly toward the core, a little around it
        p.x += (dx / d) * p.v + (-dy / d) * p.v * 0.35;
        p.y += (dy / d) * p.v + (dx / d) * p.v * 0.35;
        p.life = Math.min(1, p.life + 0.004);
        const fade = Math.min(1, d / 120) * p.life;
        ctx.fillStyle = p.gold ? `rgba(226,201,143,${0.55 * fade})` : `rgba(95,184,173,${0.45 * fade})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2); ctx.fill();
        if (d < 14) spawn(p);
      }
      if (running) raf = requestAnimationFrame(frame);
    }
    if (reduced) { frame(); running = false; return; }
    new IntersectionObserver(([e]) => { running = e.isIntersecting; cancelAnimationFrame(raf); if (running) raf = requestAnimationFrame(frame); }).observe(field);
    raf = requestAnimationFrame(frame);
  })();

  // a silent reel under the hero — desktop only, and not on data saver
  (function heroReel() {
    const v = $("#heroVideo");
    const reel = MEDIA.reel;
    const save = navigator.connection && (navigator.connection.saveData || /2g/.test(navigator.connection.effectiveType || ""));
    if (!v || !reel || save || reduced || innerWidth < 900) return;
    v.src = reel;
    v.addEventListener("canplay", () => { v.classList.add("on"); v.play().catch(() => {}); }, { once: true });
    v.load();
  })();

  /* ------------------------------------------------------------------ solutions catalogue */
  let SOL = [], area = 0;
  fetch("assets/solutions.json").then((r) => r.json()).then((d) => { SOL = d; renderSolutions(); }).catch(() => {});
  const caseFor = (n) => Object.entries(MEDIA).find(([, m]) => m.solution === n)?.[0];
  function renderSolutions() {
    const grid = $("#soGrid"), bar = $("#filters");
    if (!grid || !SOL.length) return;
    bar.innerHTML = [0, 1, 2, 3, 4, 5, 6].map((a) => `<button role="tab" aria-selected="${a === area}" data-area="${a}">${a ? t("area." + a) : t("so.all")}</button>`).join("");
    grid.innerHTML = SOL.map((s) => {
      const key = caseFor(s.n);
      return `<article class="so${key ? " has-video" : ""}${area && s.area !== area ? " dim" : ""}" ${key ? `data-video="${key}" tabindex="0" role="button"` : ""}>
        <span class="n">${s.n}</span><h4>${lang === "ar" ? s.ar : s.en}</h4><p>${lang === "ar" ? s.par : s.pen}</p>
        ${key ? `<span class="tag"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z"/></svg>${t("so.watch")}</span>` : ""}</article>`;
    }).join("");
  }
  $("#filters").addEventListener("click", (e) => { const b = e.target.closest("button"); if (!b) return; area = Number(b.dataset.area); renderSolutions(); });
  $("#soGrid").addEventListener("pointermove", (e) => {
    const c = e.target.closest(".so"); if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", `${e.clientX - r.left}px`); c.style.setProperty("--my", `${e.clientY - r.top}px`);
  });

  /* ------------------------------------------------------------------ case videos */
  function renderCases() {
    const grid = $("#csGrid"); if (!grid) return;
    const list = Object.entries(MEDIA).filter(([, m]) => m.solution);
    $("#cases").hidden = !list.length;
    grid.innerHTML = list.map(([key, m]) => `<button class="cs reveal in" type="button" data-video="${key}">
      <span class="thumb"><img src="${m.poster}" alt="" loading="lazy"><span class="film-play"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z"/></svg></span></span>
      <span class="num">${m.solution}</span><b>${m.title[lang] || m.title.en}</b><p>${(m.blurb && (m.blurb[lang] || m.blurb.en)) || ""}</p></button>`).join("");
  }
  const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, "0")}`;
  function renderDurations() {
    $$("[data-dur]").forEach((el) => { const m = MEDIA[el.dataset.dur]; const d = m && (m.dur?.[lang] || m.dur?.ar || m.dur?.en); el.textContent = d ? fmt(d) : ""; });
  }

  /* ------------------------------------------------------------------ video player */
  const player = $("#player"), pv = $("#playerVideo");
  let current = null;
  function openVideo(key, l = lang) {
    const m = MEDIA[key]; if (!m) return;
    const src = m.src[l] || m.src.ar || m.src.en;
    const chosen = m.src[l] ? l : m.src.ar ? "ar" : "en";
    current = key;
    pv.poster = m.poster || "";
    pv.src = src;
    $("#playerTitle").textContent = m.title[lang] || m.title.en;
    $("#playerLangs").innerHTML = ["ar", "en"].filter((x) => m.src[x]).map((x) => `<button type="button" data-l="${x}" aria-pressed="${x === chosen}">${t("player." + x)}</button>`).join("");
    if (!player.open) player.showModal();
    pv.play().catch(() => {});
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-video]"); if (!b) return;
    e.preventDefault(); openVideo(b.dataset.video);
  });
  document.addEventListener("keydown", (e) => { if ((e.key === "Enter" || e.key === " ") && e.target.matches?.(".so.has-video")) { e.preventDefault(); openVideo(e.target.dataset.video); } });
  $("#playerLangs").addEventListener("click", (e) => { const b = e.target.closest("button"); if (b && current) { const at = pv.currentTime; openVideo(current, b.dataset.l); pv.addEventListener("loadedmetadata", () => { pv.currentTime = Math.min(at, pv.duration - 1); }, { once: true }); } });
  const closePlayer = () => { pv.pause(); pv.removeAttribute("src"); pv.load(); player.close(); };
  $("#playerClose").addEventListener("click", closePlayer);
  player.addEventListener("click", (e) => { if (e.target === player) closePlayer(); });
  player.addEventListener("cancel", (e) => { e.preventDefault(); closePlayer(); });

  /* ------------------------------------------------------------------ orbs */
  function orb(canvas, level) {
    const ctx = canvas.getContext("2d");
    const S = canvas.width, c = S / 2;
    let t0 = performance.now(), run = true, smooth = 0;
    function draw(now) {
      const tt = (now - t0) / 1000, lv = level();
      smooth += (lv - smooth) * 0.18;
      ctx.clearRect(0, 0, S, S);
      const R = S * (0.33 + smooth * 0.06 + Math.sin(tt * 1.3) * 0.006);
      // halo
      const h = ctx.createRadialGradient(c, c, R * 0.6, c, c, R * 1.5);
      h.addColorStop(0, `rgba(201,173,110,${0.22 + smooth * 0.3})`); h.addColorStop(1, "rgba(201,173,110,0)");
      ctx.fillStyle = h; ctx.beginPath(); ctx.arc(c, c, R * 1.5, 0, Math.PI * 2); ctx.fill();
      // body: three drifting colour lobes, clipped to the sphere
      ctx.save(); ctx.beginPath(); ctx.arc(c, c, R, 0, Math.PI * 2); ctx.clip();
      ctx.fillStyle = "#c9ad6e"; ctx.fillRect(0, 0, S, S);
      const lobe = (x, y, r, col) => { const g = ctx.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, col); g.addColorStop(1, "rgba(0,0,0,0)"); ctx.fillStyle = g; ctx.fillRect(0, 0, S, S); };
      lobe(c + Math.cos(tt * 0.7) * R * 0.5, c + Math.sin(tt * 0.9) * R * 0.45, R * (1.0 + smooth * 0.4), "rgba(95,184,173,0.85)");
      lobe(c + Math.cos(tt * 0.5 + 2) * R * 0.55, c + Math.sin(tt * 0.6 + 1) * R * 0.5, R * 0.9, "rgba(239,236,229,0.75)");
      lobe(c + Math.cos(tt * 0.8 + 4) * R * 0.4, c + Math.sin(tt * 0.7 + 3) * R * 0.5, R * 0.8, "rgba(140,108,52,0.85)");
      const sh = ctx.createRadialGradient(c - R * 0.35, c - R * 0.4, 0, c, c, R);
      sh.addColorStop(0, "rgba(255,255,255,0.35)"); sh.addColorStop(0.5, "rgba(255,255,255,0)"); sh.addColorStop(1, "rgba(0,0,0,0.35)");
      ctx.fillStyle = sh; ctx.fillRect(0, 0, S, S);
      ctx.restore();
      // rim
      ctx.strokeStyle = `rgba(239,236,229,${0.18 + smooth * 0.4})`; ctx.lineWidth = S * 0.004;
      ctx.beginPath(); ctx.arc(c, c, R + S * 0.012, 0, Math.PI * 2); ctx.stroke();
      if (run) requestAnimationFrame(draw);
    }
    if (reduced) { draw(performance.now()); return { stop() {} }; }
    requestAnimationFrame(draw);
    return { stop() { run = false; } };
  }
  orb($("#orbCanvas"), () => 0);

  /* ------------------------------------------------------------------ the concierge */
  const cg = $("#concierge"), cgStatus = $("#cgStatus"), cgLog = $("#cgLog");
  let conv = null, cgOrb = null, muted = false, sdk = null;
  const loadSdk = () => sdk || (sdk = new Promise((res, rej) => {
    if (window.ElevenLabsClient) return res(window.ElevenLabsClient);
    const s = document.createElement("script"); s.src = SDK_SRC; s.async = true;
    s.onload = () => res(window.ElevenLabsClient); s.onerror = rej; document.head.appendChild(s);
  }));
  // warm the SDK when the visitor is likely to talk
  ["pointerenter", "touchstart", "focus"].forEach((ev) => $$(".talk-open").forEach((b) => b.addEventListener(ev, () => loadSdk().catch(() => {}), { once: true, passive: true })));

  const say = (text, cls = "") => { const p = document.createElement("p"); p.className = cls; p.textContent = text; cgLog.appendChild(p); cgLog.scrollTop = cgLog.scrollHeight; };
  const refNo = () => "NRV-" + Date.now().toString(36).toUpperCase().slice(-6);

  async function saveLead(fields, source) {
    // Netlify Forms when hosted there; elsewhere the conversation itself is the record (ElevenLabs data collection)
    const body = new URLSearchParams({ "form-name": "narvo-request", source, ...fields });
    try {
      const r = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body });
      return r.ok;
    } catch { return false; }
  }

  async function startTalk() {
    cg.hidden = false; cgLog.innerHTML = ""; cgStatus.textContent = t("cg.connecting"); muted = false; $("#cgMute span").textContent = t("cg.mute");
    cgOrb?.stop(); cgOrb = orb($("#cgCanvas"), () => (conv ? Math.max(conv.getOutputVolume?.() || 0, (conv.getInputVolume?.() || 0) * 0.6) : 0));
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true }).then((s) => s.getTracks().forEach((x) => x.stop()));
    } catch { cgStatus.textContent = t("cg.mic"); return; }
    try {
      const { Conversation } = await loadSdk();
      const opts = (connectionType) => ({
        agentId: AGENT_ID,
        connectionType,
        overrides: { agent: { language: lang } },
        clientTools: {
          submit_request: async (p) => {
            const ref = refNo();
            const ok = await saveLead({ ...p, reference: ref }, "concierge");
            say(`${t("cg.saved")} · ${ref}`, "done");
            return JSON.stringify({ ok: true, reference: ref, stored: ok ? "website" : "conversation-record" });
          },
        },
        onConnect: () => { cgStatus.textContent = t("cg.listening"); },
        onDisconnect: () => { cgStatus.textContent = t("cg.ended"); conv = null; },
        onError: () => { cgStatus.textContent = t("cg.error"); },
        onModeChange: ({ mode }) => { cgStatus.textContent = mode === "speaking" ? t("cg.speaking") : t("cg.listening"); },
        onMessage: ({ message, source, role }) => { if (message) say(message, (source || role) === "user" ? "me" : ""); },
      });
      // WebRTC first (best on phones); plain WebSocket if a network blocks it
      conv = await Conversation.startSession(opts("webrtc")).catch(() => Conversation.startSession(opts("websocket")));
    } catch (e) {
      cgStatus.textContent = t("cg.error");
      console.error(e);
    }
  }
  async function endTalk() {
    try { await conv?.endSession(); } catch {}
    conv = null; cgOrb?.stop(); cg.hidden = true;
  }
  $$(".talk-open").forEach((b) => b.addEventListener("click", startTalk));
  $("#cgEnd").addEventListener("click", endTalk);
  $("#cgClose").addEventListener("click", endTalk);
  $("#cgMute").addEventListener("click", () => { if (!conv) return; muted = !muted; conv.setMicMuted(muted); $("#cgMute span").textContent = t(muted ? "cg.unmute" : "cg.mute"); });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !cg.hidden) endTalk(); });

  /* ------------------------------------------------------------------ lead form */
  $("#leadForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const f = e.target, data = Object.fromEntries(new FormData(f));
    if (data.company_website) return;
    const ok = await saveLead({ name: data.name, organization: data.organization, email: data.email, phone: data.phone, use_case: data.use_case, language: lang }, "form");
    if (ok) { $("#formMsg").textContent = t("f.ok"); f.reset(); return; }
    // no form backend on this host: hand the request to the visitor's mail app
    const subject = lang === "ar" ? `طلب جلسة متطلبات — ${data.organization}` : `Requirements session request — ${data.organization}`;
    const bodyTxt = `${data.name}\n${data.organization}\n${data.email}${data.phone ? "\n" + data.phone : ""}\n\n${data.use_case}`;
    location.href = `mailto:contact@narvo.ae?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyTxt)}`;
    $("#formMsg").textContent = t("f.mail");
  });

  /* ------------------------------------------------------------------ go */
  applyLang();
  observeReveals();
})();
