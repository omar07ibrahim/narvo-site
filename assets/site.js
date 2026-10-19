/* NARVO — site behaviour: language, motion, the ribbon, the catalogue, films, the player,
   the voice concierge and its hand-off to the NARVO team on WhatsApp. */
(() => {
  "use strict";
  const AGENT_ID = "agent_8801m50tmrb1fngt81fay6c5xmr1";
  const SDK_SRC = "vendor/elevenlabs-client-1.26.0.js";
  const WA_NUMBER = "971561296035";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  /* ------------------------------------------------------------------ the films (written by site/build-media.mjs) */
  const MEDIA = window.NARVO_MEDIA || {};

  /* ------------------------------------------------------------------ copy */
  const T = {
    en: {
      "nav.solutions": "Tailored solutions", "nav.pilot": "How we work", "nav.mq": "Muqarrir", "nav.films": "Films", "nav.about": "About", "nav.talk": "Contact", "nav.lang": "عربي",
      "cta.talk": "Talk to NARVO", "cta.film": "Watch the film",
      "hero.l1": "Technology you control.", "hero.l2": "Built around your requirement.",
      "hero.sub": "Private AI for Arabic and English that runs on your own servers. Twenty solutions, already built, each one tailored to the way your organisation works.",
      "hero.found": "Emirati founded. Based in Abu Dhabi.", "hero.backed": "Backed by",
      "film.name": "NARVO, the platform", "film.langs": "Arabic and English",
      "pf.title": "The AI comes to your data.",
      "pf.lede": "Your documents, conversations and records stay inside your organisation. Switch the internet off and everything keeps working.",
      "pf.1t": "On your servers", "pf.1d": "Open models run inside your organisation or on UAE sovereign cloud. Nothing depends on a foreign AI service.",
      "pf.2t": "Arabic and English", "pf.2d": "Modern Standard Arabic, Emirati dialect and English, in speech, scanned documents and conversation.",
      "pf.3t": "A person approves", "pf.3d": "The AI reads, checks and drafts. A named official approves every action that matters, and every step stays on record.",
      "so.title": "Twenty solutions, tailored to you.",
      "so.lede": "Each one is already built and working. We tailor it to your processes, systems and data, so you start from something proven and finish with something that is yours.",
      "so.else": "Need something that is not on the list? We start from your requirement and build, adapt or integrate around it.", "so.elseCta": "Tell us what you need",
      "so.tailor": "We tailor it to your processes, systems and data before it goes live.",
      "so.watch": "Watch the film", "so.discuss": "Discuss it with the concierge",
      "area.1": "Enterprise", "area.2": "Documents", "area.3": "Customers", "area.4": "People", "area.5": "Operations", "area.6": "Sites and field",
      "pi.title": "From your requirement to a working system in four weeks.",
      "pi.lede": "One priority, tailored on your data and under your control. You see it work before you commit to anything larger.",
      "pi.s1t": "Before we start", "pi.s1": "Requirements session", "pi.s1d": "We agree the use case, what success looks like, data access and where it runs.",
      "pi.s2t": "Week 1", "pi.s2": "First working version", "pi.s2d": "We tailor the solution to your real or representative data.",
      "pi.s3t": "Weeks 2 to 4", "pi.s3": "Use, refine, decide", "pi.s3d": "Your team uses it and we refine it together. Then you decide to scale, adjust or stop.",
      "mq.title": "Muqarrir, the meeting rapporteur",
      "mq.lede": "In every government meeting, someone has to write the minutes. Muqarrir listens alongside them in fuṣḥā, Emirati dialect and English, and the minutes are ready before you leave the room.",
      "mq.b1": "Speakers recognised as they talk", "mq.b2": "Decisions and actions with owners and deadlines",
      "mq.b3": "Every decision linked to the moment it was said", "mq.b4": "Runs on your own server, with no internet",
      "mq.note": "Built for a UAE government entity and now in pilot.", "mq.more": "What it does",
      "mm.line": "clips of real Arabic speech, transcribed by people, stand behind every figure we quote.", "mm.film": "Watch the technical film",
      "cs.title": "Real systems, filmed on real screens.", "cs.lede": "Each film shows a NARVO system at work in under two minutes, in Arabic and in English.",
      "cs.pilot": "In pilot", "cs.tech": "Technical", "cs.more": "Show all {n} films",
      "ab.title": "Emirati founded, based in Abu Dhabi, built with MBZUAI engineers.",
      "ab.lede": "NARVO is an Emirati advanced technology company in Masdar City. We turn institutional requirements into working systems and stay accountable for the delivery.",
      "ab.founders": "Founders and leadership", "ab.advisors": "Strategic advisors",
      "ab.p1n": "Ahmed Alawlaqi", "ab.p2n": "Ali AlMehrzi", "ab.p3n": "Hamdan Bin Rakkad",
      "ab.p1": "Cofounder and CEO", "ab.p2": "Cofounder, Commercial Operations", "ab.p3": "Cofounder, Strategic Markets and Affairs",
      "ab.a1n": "Dr. Mohamed Alloghani", "ab.a1": "Applied AI and AI systems. First Emirati PhD focused on AI.",
      "ab.a2n": "Daniel Searle", "ab.a2": "AI transformation and growth. €1bn+ total contract value.",
      "ab.a3n": "Prof. Olivier Oullier", "ab.a3": "AI, innovation and strategy. 300+ publications.",
      "ab.a4n": "Tom Hudson", "ab.a4": "Government and international markets. $20bn+ in UAE deals.",
      "ab.backed": "Backed by the Incubation and Entrepreneurship Center of Mohamed bin Zayed University of Artificial Intelligence",
      "tk.title": "Start with one priority.",
      "tk.lede": "Tell our AI concierge what you need and agree the next step together. Your summary reaches our team on WhatsApp in one tap.",
      "tk.cta": "Talk to our AI concierge", "tk.ctaSub": "Arabic or English · about five minutes · no account needed",
      "tk.privacy": "Voice conversations on this website run through our voice partner, ElevenLabs. NARVO deployments for clients run entirely on their own servers.",
      "tk.writeT": "Prefer to write?", "tk.writeD": "Fill this in and WhatsApp opens with your request already written. Just press send.", "tk.addr": "Masdar City, Abu Dhabi",
      "f.name": "Full name", "f.org": "Organisation", "f.role": "Role", "f.email": "Work email", "f.need": "What would you like AI to do for your organisation?", "f.send": "Send on WhatsApp",
      "ft.tag": "Technology you control.", "ft.rights": "Masdar City, Abu Dhabi",
      "cg.name": "NARVO concierge", "cg.connecting": "Connecting…", "cg.listening": "Listening", "cg.speaking": "Speaking", "cg.ended": "Conversation ended",
      "cg.mute": "Mute", "cg.unmute": "Unmute", "cg.end": "End", "cg.wa": "Send on WhatsApp",
      "cg.waReady": "Your summary is ready", "cg.waFallback": "Continue on WhatsApp", "cg.saved": "Summary ready. Tap the green button.",
      "cg.auto": "Opening WhatsApp in {n}…", "cg.stay": "Stay here",
      "cg.mic": "To talk, allow the microphone in your browser and try again, or write to us instead.", "cg.error": "Couldn't connect. Please try again, or write to us instead.",
      "cg.dropped": "The conversation ended before the summary.", "cg.again": "Try again", "cg.write": "Write instead",
      "player.ar": "العربية", "player.en": "English",
      "wa.hello": "Hello NARVO 👋", "wa.agent": "I've just spoken with your AI concierge on narvo.ae.", "wa.form": "I'm writing from narvo.ae.",
      "wa.me": "About me", "wa.discussed": "What we discussed", "wa.need": "What I need", "wa.interest": "Solution", "wa.timeline": "Timeline",
      "wa.agreed": "What we agreed", "wa.questions": "Notes", "wa.said": "What I said", "wa.cont": "I'd like to continue here.", "wa.ref": "Ref.",
      "wa.direct": "Hello NARVO 👋 I'd like to talk about a project.",
    },
    ar: {
      "nav.solutions": "حلول مخصّصة", "nav.pilot": "كيف نعمل", "nav.mq": "مُقرِّر", "nav.films": "الأفلام", "nav.about": "من نحن", "nav.talk": "تواصل", "nav.lang": "English",
      "cta.talk": "تحدّث مع نارفو", "cta.film": "شاهد الفيلم",
      "hero.l1": "تقنيةٌ تحت سيطرتك.", "hero.l2": "مبنيّةٌ حول متطلباتك.",
      "hero.sub": "ذكاءٌ اصطناعي خاص بالعربية والإنجليزية، يعمل على خوادمكم. عشرون حلاً جاهزاً، نخصّص كلاً منها لطريقة عمل جهتكم.",
      "hero.found": "شركةٌ إماراتية، مقرّها أبوظبي.", "hero.backed": "بدعمٍ من",
      "film.name": "نارفو: نظرة على المنصة", "film.langs": "بالعربية والإنجليزية",
      "pf.title": "الذكاء الاصطناعي يأتي إلى بياناتكم.",
      "pf.lede": "تبقى مستنداتكم ومحادثاتكم وسجلاتكم داخل جهتكم. افصلوا الإنترنت، ويستمر كل شيءٍ بالعمل.",
      "pf.1t": "على خوادمكم", "pf.1d": "نماذج مفتوحة تعمل داخل جهتكم أو على السحابة السيادية في الإمارات، دون الاعتماد على أي خدمة ذكاء اصطناعي أجنبية.",
      "pf.2t": "بالعربية والإنجليزية", "pf.2d": "الفصحى واللهجة الإماراتية والإنجليزية، في الكلام والمستندات الممسوحة والمحادثة.",
      "pf.3t": "الإنسان يعتمد", "pf.3d": "الذكاء الاصطناعي يقرأ ويدقّق ويصوغ، والمسؤول المعني يعتمد كل إجراءٍ مهم، وتبقى كل خطوةٍ مسجّلة.",
      "so.title": "عشرون حلاً، مخصّصةٌ لكم.",
      "so.lede": "كل حلٍّ منها مبنيٌّ ويعمل. نخصّصه لإجراءاتكم وأنظمتكم وبياناتكم، فتبدؤون من شيءٍ مُجرَّب وتنتهون بنظامٍ يخصّكم.",
      "so.else": "تحتاجون شيئاً غير موجود في القائمة؟ نبدأ من متطلباتكم، ثم نبني أو نكيّف أو ندمج حولها.", "so.elseCta": "أخبرونا بما تحتاجونه",
      "so.tailor": "نخصّصه لإجراءاتكم وأنظمتكم وبياناتكم قبل التشغيل.",
      "so.watch": "شاهد الفيلم", "so.discuss": "ناقشه مع المساعد الذكي",
      "area.1": "المؤسسة", "area.2": "المستندات", "area.3": "العملاء", "area.4": "الموظفون", "area.5": "العمليات", "area.6": "المواقع والميدان",
      "pi.title": "من متطلباتكم إلى نظامٍ يعمل خلال أربعة أسابيع.",
      "pi.lede": "أولويةٌ واحدة، نخصّص لها الحل على بياناتكم وتحت سيطرتكم. ترونه يعمل قبل أن تلتزموا بأي شيءٍ أكبر.",
      "pi.s1t": "قبل البدء", "pi.s1": "جلسة المتطلبات", "pi.s1d": "نتفق على حالة الاستخدام ومعايير النجاح والوصول إلى البيانات ومكان التشغيل.",
      "pi.s2t": "الأسبوع الأول", "pi.s2": "أول نسخةٍ تعمل", "pi.s2d": "نخصّص الحل لبياناتكم الحقيقية أو التمثيلية.",
      "pi.s3t": "من الأسبوع الثاني إلى الرابع", "pi.s3": "استخدام وتحسين وقرار", "pi.s3d": "يستخدمه فريقكم ونحسّنه معاً، ثم تقررون التوسيع أو التعديل أو الإيقاف.",
      "mq.title": "مقرّر الاجتماعات الذكي",
      "mq.lede": "في كل اجتماعٍ حكومي هناك من يكتب المحضر. «مُقرِّر» يستمع معه بالفصحى واللهجة الإماراتية والإنجليزية، ويكون المحضر جاهزاً قبل أن تغادروا القاعة.",
      "mq.b1": "تمييز المتحدثين أثناء الكلام", "mq.b2": "قراراتٌ وتكليفات بأسماء المسؤولين ومواعيدها",
      "mq.b3": "كل قرارٍ مرتبط بلحظة قوله في التسجيل", "mq.b4": "يعمل على خادمكم دون إنترنت",
      "mq.note": "صُمّم لجهةٍ حكومية في الإمارات، وهو الآن في مرحلة التجربة.", "mq.more": "ماذا يفعل",
      "mm.line": "مقطعاً من كلامٍ عربي حقيقي فرّغه بشر، تقف وراء كل رقمٍ نذكره.", "mm.film": "شاهد الفيلم التقني",
      "cs.title": "أنظمةٌ حقيقية، مسجّلة على شاشاتٍ حقيقية.", "cs.lede": "كل فيلمٍ يعرض نظاماً من نارفو أثناء العمل في أقل من دقيقتين، بالعربية والإنجليزية.",
      "cs.pilot": "في التجربة", "cs.tech": "تقني", "cs.more": "عرض جميع الأفلام ({n})",
      "ab.title": "شركةٌ إماراتية في أبوظبي، بمهندسين من جامعة محمد بن زايد للذكاء الاصطناعي.",
      "ab.lede": "«نارفو» شركةٌ إماراتية للتقنيات المتقدمة في مدينة مصدر. نحوّل متطلبات المؤسسات إلى أنظمةٍ تعمل، ونتحمّل مسؤولية التنفيذ.",
      "ab.founders": "المؤسسون والقيادة", "ab.advisors": "المستشارون الاستراتيجيون",
      "ab.p1": "شريكٌ مؤسس والرئيس التنفيذي", "ab.p2": "شريكٌ مؤسس، العمليات التجارية", "ab.p3": "شريكٌ مؤسس، الأسواق الاستراتيجية والعلاقات",
      "ab.a1n": "د. محمد اللوغاني", "ab.a1": "الذكاء الاصطناعي التطبيقي وأنظمته. أول إماراتي يحصل على دكتوراه في الذكاء الاصطناعي.",
      "ab.a2": "التحول بالذكاء الاصطناعي والنمو. عقودٌ تتجاوز مليار يورو.", "ab.a3n": "البروفيسور أوليفييه أولييه", "ab.a3": "الذكاء الاصطناعي والابتكار والاستراتيجية. أكثر من 300 منشور.",
      "ab.a4": "الحكومة والأسواق الدولية. صفقاتٌ في الإمارات تتجاوز 20 مليار دولار.",
      "ab.backed": "بدعمٍ من مركز الاحتضان وريادة الأعمال في جامعة محمد بن زايد للذكاء الاصطناعي",
      "tk.title": "ابدأ بأولويةٍ واحدة.",
      "tk.lede": "أخبِر مساعدنا الذكي بما تحتاجه، واتفقا معاً على الخطوة التالية. يصل ملخّصك إلى فريقنا عبر واتساب بضغطةٍ واحدة.",
      "tk.cta": "تحدّث مع مساعدنا الذكي", "tk.ctaSub": "بالعربية أو الإنجليزية · نحو خمس دقائق · دون تسجيل",
      "tk.privacy": "تتم المحادثات الصوتية على هذا الموقع عبر شريكنا الصوتي ElevenLabs. أما حلول نارفو لدى العملاء فتعمل بالكامل على خوادمهم.",
      "tk.writeT": "تفضّل الكتابة؟", "tk.writeD": "املأ هذه الحقول ويُفتح واتساب وطلبك مكتوب. اضغط إرسال فقط.", "tk.addr": "مدينة مصدر، أبوظبي",
      "f.name": "الاسم الكامل", "f.org": "الجهة", "f.role": "المسمّى الوظيفي", "f.email": "البريد الإلكتروني للعمل", "f.need": "ما الذي تودّ أن يقوم به الذكاء الاصطناعي في جهتك؟", "f.send": "إرسال عبر واتساب",
      "ft.tag": "تقنيةٌ تحت سيطرتك.", "ft.rights": "مدينة مصدر، أبوظبي",
      "cg.name": "مساعد نارفو الذكي", "cg.connecting": "جارٍ الاتصال…", "cg.listening": "أستمع إليك", "cg.speaking": "يتحدث", "cg.ended": "انتهت المحادثة",
      "cg.mute": "كتم", "cg.unmute": "إلغاء الكتم", "cg.end": "إنهاء", "cg.wa": "إرسال عبر واتساب",
      "cg.waReady": "ملخّصك جاهز", "cg.waFallback": "تابع عبر واتساب", "cg.saved": "الملخّص جاهز. اضغط الزر الأخضر.",
      "cg.auto": "سيُفتح واتساب خلال {n}…", "cg.stay": "البقاء هنا",
      "cg.mic": "للتحدث، اسمح باستخدام الميكروفون في المتصفح وحاول مجدداً، أو اكتب لنا بدلاً من ذلك.", "cg.error": "تعذّر الاتصال. حاول مجدداً، أو اكتب لنا بدلاً من ذلك.",
      "cg.dropped": "انتهت المحادثة قبل إعداد الملخّص.", "cg.again": "حاول مجدداً", "cg.write": "اكتب لنا",
      "player.ar": "العربية", "player.en": "English",
      "wa.hello": "مرحباً نارفو 👋", "wa.agent": "تحدّثتُ للتو مع المساعد الذكي على موقع narvo.ae.", "wa.form": "أكتب إليكم من موقع narvo.ae.",
      "wa.me": "بياناتي", "wa.discussed": "ما ناقشناه", "wa.need": "ما أحتاجه", "wa.interest": "الحل", "wa.timeline": "الإطار الزمني",
      "wa.agreed": "ما اتفقنا عليه", "wa.questions": "ملاحظات", "wa.said": "ما قلته", "wa.cont": "وأودّ المتابعة هنا.", "wa.ref": "المرجع",
      "wa.direct": "مرحباً نارفو 👋 أودّ مناقشة مشروع.",
    },
  };

  /* ------------------------------------------------------------------ language */
  const qsLang = new URLSearchParams(location.search).get("lang");
  let stored = null;
  try { stored = localStorage.getItem("narvo-lang"); } catch {}
  let lang = qsLang === "ar" || qsLang === "en" ? qsLang : stored || ((navigator.language || "").startsWith("ar") ? "ar" : "en");
  const tl = (l, k) => T[l][k] ?? T.en[k] ?? k;
  const t = (k) => tl(lang, k);

  // the words of a heading rise one after another
  function split(el) {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map((w, i) => `<span class="w"><span style="--i:${i}">${esc(w)}</span></span>`).join(" ");
  }
  function applyLang() {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    $$("[data-i18n]").forEach((el) => { if (!el.closest("#cg")) el.textContent = t(el.dataset.i18n); });
    $$("[data-split]").forEach(split);
    document.title = lang === "ar" ? "نارفو · تقنيةٌ تحت سيطرتك" : "NARVO · Technology you control";
    $("#waDirect").href = waUrl(t("wa.direct"));
    // each film has a poster per language: the system's own screen in that language
    $$("img[data-poster]").forEach((im) => { const m = MEDIA[im.dataset.poster]; const src = m && posterSrc(m); if (src && im.getAttribute("src") !== src) im.src = src; });
    renderSolutions();
    renderFilms();
    renderDurations();
    observe();
    try { localStorage.setItem("narvo-lang", lang); } catch {}
  }
  $("#langBtn").addEventListener("click", () => { lang = lang === "ar" ? "en" : "ar"; applyLang(); });

  /* ------------------------------------------------------------------ header, menu, floating talk */
  const menu = $("#menu"), menuBtn = $("#menuBtn"), hd = $("#hd");
  const setMenu = (open) => { menu.hidden = !open; menuBtn.setAttribute("aria-expanded", String(open)); hd.classList.toggle("menu-open", open); document.body.style.overflow = open ? "hidden" : ""; };
  menuBtn.addEventListener("click", () => setMenu(menu.hidden));
  menu.addEventListener("click", (e) => { if (e.target.closest("a, .talk-open")) setMenu(false); });
  const floatTalk = $(".float-talk");
  const chapters = $$("main > section");
  // the theme of the chapter at a given height of the screen
  const themeAt = (y) => { for (const s of chapters) { const r = s.getBoundingClientRect(); if (r.top <= y && r.bottom > y) return s.classList.contains("dark") ? "dark" : "paper"; } return "dark"; };
  const onScroll = () => {
    hd.classList.toggle("solid", scrollY > 24);
    // the header takes the colour of the chapter beneath it, and so does the floating button
    const theme = themeAt(36);
    if (hd.dataset.theme !== theme) hd.dataset.theme = theme;
    const below = themeAt(innerHeight - 40);
    if (floatTalk.dataset.theme !== below) floatTalk.dataset.theme = below;
    const talkTop = $("#talk").getBoundingClientRect().top;
    floatTalk.classList.toggle("show", scrollY > innerHeight * 0.85 && talkTop > innerHeight * 0.5);
  };
  addEventListener("scroll", onScroll, { passive: true });

  /* ------------------------------------------------------------------ reveals */
  // A block rises as soon as its top passes the lower edge of the screen, so nothing on screen is ever still waiting.
  // The first screen does not wait for scrolling at all: it plays as one sequence when the page opens.
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) { if (!e.isIntersecting) continue; e.target.classList.add("in"); io.unobserve(e.target); }
  }, { rootMargin: "0px 0px -4% 0px", threshold: 0 });
  function watch(el) {
    if (el.classList.contains("in")) return;
    // two frames later, so the browser has painted the start of the transition
    if (el.closest("#hero")) { requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("in"))); return; }
    io.unobserve(el); io.observe(el);
  }
  function observe(root = document) {
    $$(".reveal, [data-split]", root).forEach((el) => {
      if (el.classList.contains("reveal") && !el.style.getPropertyValue("--d")) {
        const sibs = [...el.parentElement.children].filter((x) => x.classList.contains("reveal"));
        el.style.setProperty("--d", `${Math.min(sibs.indexOf(el), 7) * 0.06}s`);
      }
      watch(el);
    });
  }

  /* ------------------------------------------------------------------ the twenty solutions: an index by area, and a sheet with the detail */
  let SOL = [];
  fetch("assets/solutions.json").then((r) => r.json()).then((d) => { SOL = d; renderSolutions(); }).catch(() => {});
  const caseFor = (n) => Object.entries(MEDIA).find(([, m]) => m.solution === n)?.[0];
  const play = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>`;
  const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, "0")}`;
  const durOf = (m) => m.dur?.[lang] || m.dur?.ar || m.dur?.en || 0;
  function posterSrc(m) { return typeof m.poster === "string" ? m.poster : m.poster?.[lang] || m.poster?.ar || m.poster?.en || ""; }
  const posterOf = (key, m, cls = "poster poster-sm play", chip = "") => `<button class="${cls}" type="button" data-video="${key}" aria-label="${esc(m.title[lang] || m.title.en)}">
      <img src="${posterSrc(m)}" alt="" loading="lazy" decoding="async"><span class="play-big" aria-hidden="true">${play}</span>${chip ? `<span class="chip">${chip}</span>` : ""}
      <span class="poster-meta"><b>${esc(m.title[lang] || m.title.en)}</b><span><span class="dur">${durOf(m) ? fmt(durOf(m)) : ""}</span></span></span>
    </button>`;
  function renderSolutions() {
    const box = $("#soIndex");
    if (!box || !SOL.length) return;
    const ar = lang === "ar";
    // six areas, each opened on request: the page stays short, all twenty are one tap away
    const open = new Set($$("details.grp[open]", box).map((d) => d.dataset.area));
    box.innerHTML = [1, 2, 3, 4, 5, 6].map((a) => {
      const list = SOL.filter((s) => s.area === a);
      return `<details class="grp" data-area="${a}"${open.has(String(a)) ? " open" : ""}><summary><h3>${t("area." + a)}</h3><span class="n">${list.length}</span><i class="plus" aria-hidden="true"></i></summary><ul>${list
        .map((s) => `<li><button type="button" data-sol="${s.n}">${esc(ar ? s.ar : s.en)}</button></li>`).join("")}</ul></details>`;
    }).join("");
    watch(box);
  }
  const solSheet = $("#sheet");
  function openSheet(n) {
    const s = SOL.find((x) => x.n === n); if (!s) return;
    const key = caseFor(n), m = key && MEDIA[key], ar = lang === "ar";
    $("#sheetIn").innerHTML = `
      <p class="area">${t("area." + s.area)}</p>
      <h3>${esc(ar ? s.ar : s.en)}</h3>
      <p class="pitch">${esc(ar ? s.par : s.pen)}</p>
      <p class="desc">${esc(ar ? s.sar : s.sen)} ${t("so.tailor")}</p>
      ${m ? posterOf(key, m) : ""}
      <div class="acts"><button class="pill pill-ink talk-open" type="button" data-topic="${s.n} ${esc(s.en)}"><i class="live"></i><span>${t("so.discuss")}</span></button>${m ? `<button class="pill pill-line play" type="button" data-video="${key}"><svg class="ico" viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z"/></svg><span>${t("so.watch")}</span></button>` : ""}</div>`;
    $("#sheetIn").scrollTop = 0;
    if (!solSheet.open) solSheet.showModal();
    requestAnimationFrame(() => requestAnimationFrame(() => solSheet.classList.add("on")));
  }
  function closeSheet(now = false) {
    if (!solSheet.open) return;
    solSheet.classList.remove("on");
    if (now) solSheet.close(); else setTimeout(() => { if (solSheet.open) solSheet.close(); }, 450);
  }
  $("#soIndex").addEventListener("click", (e) => { const c = e.target.closest("[data-sol]"); if (c) openSheet(c.dataset.sol); });
  $("#sheetClose").addEventListener("click", () => closeSheet());
  solSheet.addEventListener("click", (e) => { if (e.target === solSheet) closeSheet(); });
  solSheet.addEventListener("cancel", (e) => { e.preventDefault(); closeSheet(); });

  /* ------------------------------------------------------------------ the films: a grid of posters, the first five and then the rest on request */
  let filmsAll = false;
  function renderFilms() {
    const grid = $("#filmsGrid"); if (!grid) return;
    const order = ["muqarrir", "muqarrir_tech", ...Object.keys(MEDIA).filter((k) => MEDIA[k].solution).sort((a, b) => MEDIA[a].solution.localeCompare(MEDIA[b].solution))];
    const list = order.filter((k) => MEDIA[k] && MEDIA[k].src);
    $("#films").hidden = !list.length;
    const cut = filmsAll ? list.length : Math.min(list.length, 5);
    grid.innerHTML = list.slice(0, cut).map((key) => {
      const m = MEDIA[key], d = durOf(m);
      const chip = key === "muqarrir" ? t("cs.pilot") : key === "muqarrir_tech" ? t("cs.tech") : "";
      return `<article class="fcard reveal${key === "muqarrir" ? " feat" : ""}">
        ${posterOf(key, m, "poster poster-sm play", chip)}
        <div class="fmeta"><b>${esc(m.title[lang] || m.title.en)}</b>
          <span class="line"><span class="dur">${d ? fmt(d) : ""}</span>${["ar", "en"].filter((x) => m.src[x]).map((x) => `<button type="button" data-video="${key}" data-l="${x}">${t("player." + x)}</button>`).join("")}</span>
        </div>
      </article>`;
    }).join("");
    const more = $("#filmsMore");
    more.hidden = cut >= list.length;
    more.querySelector("span").textContent = t("cs.more").replace("{n}", list.length);
    observe(grid);
  }
  $("#filmsMore").addEventListener("click", () => { filmsAll = true; renderFilms(); });
  function renderDurations() {
    $$("[data-dur]").forEach((el) => { const m = MEDIA[el.dataset.dur]; const d = m && durOf(m); el.textContent = d ? fmt(d) : ""; });
  }
  /* ------------------------------------------------------------------ the ribbon: a ruled surface drawn in hairlines */
  function ribbon(canvas, cfg) {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const DPR = Math.min(devicePixelRatio || 1, 2);
    let W = 0, H = 0, run = true, raf = 0, tt = Math.random() * 40, px = 0.5, tpx = 0.5, last = performance.now();
    const silver = [233, 229, 221], bronze = [205, 172, 122], steel = [143, 171, 204];
    const mix = (a, b, k) => a.map((v, i) => Math.round(v + (b[i] - v) * k));
    const sstep = (a, b, x) => { const k = clamp((x - a) / (b - a), 0, 1); return k * k * (3 - 2 * k); };
    function resize() {
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = Math.round(W * DPR); canvas.height = Math.round(H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    function frame(now) {
      const dt = Math.min(0.05, (now - last) / 1000); last = now;
      tt += dt; px += (tpx - px) * 0.03;
      const c = cfg(W, H);
      const N = c.lines, f = 1100;
      const fade = c.fade ? c.fade() : 1;
      ctx.clearRect(0, 0, W, H);
      if (fade <= 0.01) { if (run) raf = requestAnimationFrame(frame); return; }
      // the centre line of the ribbon
      const C = [];
      for (let i = 0; i < N; i++) {
        const u = i / (N - 1);
        const e = u * u * (3 - 2 * u);
        const x = W * (c.x0 + (c.x1 - c.x0) * u) - W * c.bow * Math.sin(Math.PI * u);
        const y = H * (c.y0 + (c.y1 - c.y0) * e) + H * 0.035 * Math.sin(u * 5.2 + tt * 0.45);
        C.push([x, y]);
      }
      const A = [], B = [];
      ctx.lineWidth = c.lw;
      for (let i = 0; i < N; i++) {
        const u = i / (N - 1);
        const p = C[i], q = C[Math.min(N - 1, i + 1)], r = C[Math.max(0, i - 1)];
        let tx = q[0] - r[0], ty = q[1] - r[1];
        const tl2 = Math.hypot(tx, ty) || 1; tx /= tl2; ty /= tl2;
        const nx = -ty, ny = tx;
        const w = H * c.w * (0.3 + 0.7 * Math.pow(Math.sin(Math.PI * clamp(u * 1.08, 0, 1)), 0.8));
        const th = c.twist * Math.PI * u + tt * 0.32 + (px - 0.5) * 1.1;
        const cs = Math.cos(th), sn = Math.sin(th);
        const z = w * sn;
        const s1 = f / (f + z), s2 = f / (f - z);
        const ax = p[0] + nx * w * cs * s1, ay = p[1] + ny * w * cs * s1;
        const bx = p[0] - nx * w * cs * s2, by = p[1] - ny * w * cs * s2;
        A.push([ax, ay]); B.push([bx, by]);
        const lit = 0.5 + 0.5 * Math.cos(th - 0.9);
        const ends = sstep(0, 0.1, u) * sstep(1, 0.9, u);
        const al = c.alpha * fade * ends * (0.16 + 0.84 * lit * lit);
        const col = cs >= 0 ? mix(silver, bronze, 0.25 + 0.45 * (0.5 + 0.5 * Math.sin(u * 3.1 + tt * 0.2))) : mix(steel, silver, 0.2 * lit);
        ctx.strokeStyle = `rgba(${col[0]},${col[1]},${col[2]},${al.toFixed(3)})`;
        ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
      }
      // the two edges, a little brighter
      ctx.lineWidth = c.lw * 1.5;
      for (const E of [A, B]) {
        ctx.strokeStyle = `rgba(233,229,221,${(c.alpha * 0.9 * fade).toFixed(3)})`;
        ctx.beginPath();
        E.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
        ctx.stroke();
      }
      if (run) raf = requestAnimationFrame(frame);
    }
    resize();
    canvas.classList.add("on");
    addEventListener("resize", resize, { passive: true });
    if (fine) addEventListener("pointermove", (e) => { tpx = e.clientX / innerWidth; }, { passive: true });
    if (reduced) { frame(performance.now()); return; }
    new IntersectionObserver(([e]) => {
      run = e.isIntersecting; cancelAnimationFrame(raf);
      if (run) { last = performance.now(); raf = requestAnimationFrame(frame); }
    }).observe(canvas);
  }
  /* ------------------------------------------------------------------ the sheet: the sculpted ribbon of the NARVO cover, lit in WebGL */
  function sheet(canvas) {
    const gl = canvas.getContext("webgl", { antialias: true, alpha: false, powerPreference: "high-performance" });
    if (!gl) return false;
    const VS = `
      attribute vec2 aUV;
      uniform float uT, uAsp, uScale, uScroll, uMirror, uRot; uniform vec2 uOff, uPtr;
      varying vec3 vN; varying vec3 vP; varying float vV; varying float vU;
      const vec3 P0 = vec3(-1.05, -1.8, 0.1), P1 = vec3(1.9, -1.0, 0.45), P2 = vec3(-0.55, 0.55, -0.45), P3 = vec3(1.85, 1.75, 0.15);
      vec3 bez(float u) { float a = 1.0 - u; return a*a*a*P0 + 3.0*a*a*u*P1 + 3.0*a*u*u*P2 + u*u*u*P3; }
      vec3 dbez(float u) { float a = 1.0 - u; return 3.0*a*a*(P1-P0) + 6.0*a*u*(P2-P1) + 3.0*u*u*(P3-P2); }
      vec3 surf(float u, float v) {
        vec3 c = bez(u);
        vec3 T = normalize(dbez(u));
        vec3 N = normalize(cross(T, vec3(0.0, 0.0, 1.0)));
        vec3 B = cross(T, N);
        float th = 0.55 + 3.5*u + 0.42*sin(uT*0.21 + u*2.6) + uPtr.x*0.22 + uScroll*1.1;
        float w = (0.24 + 0.22*sin(3.14159*u)) * (1.0 + 0.06*sin(uT*0.37 + u*4.0));
        vec3 d = N*cos(th) + B*sin(th);
        vec3 e = -N*sin(th) + B*cos(th);
        return c + d*(w*v) + e*(0.2*w*v*v) + vec3(0.0, 0.0, 0.06*sin(uT*0.31 + u*6.0 + v*1.5));
      }
      void main() {
        float u = aUV.x, v = aUV.y;
        vec3 p = surf(u, v);
        vec3 n = normalize(cross(surf(u + 0.002, v) - p, surf(u, v + 0.01) - p));
        float ry = uPtr.x*0.07, rx = -uPtr.y*0.05;
        mat3 R = mat3(cos(ry), 0.0, -sin(ry), 0.0, 1.0, 0.0, sin(ry), 0.0, cos(ry)) * mat3(1.0, 0.0, 0.0, 0.0, cos(rx), sin(rx), 0.0, -sin(rx), cos(rx));
        p = R*p; n = R*n;
        p *= uScale; p.x *= uMirror; n.x *= uMirror;
        mat2 Q = mat2(cos(uRot), sin(uRot), -sin(uRot), cos(uRot));
        p.xy = Q*p.xy; n.xy = Q*n.xy;
        p.xy += uOff;
        vP = p; vN = n; vV = v; vU = u;
        float f = 1.0 / tan(radians(17.5));
        float z = p.z - 3.2;
        gl_Position = vec4(p.x*f/uAsp, p.y*f, (z*(20.1/-19.9) + (2.0*20.0*0.1)/-19.9), -z);
      }`;
    const FS = `
      precision highp float;
      varying vec3 vN; varying vec3 vP; varying float vV; varying float vU;
      uniform float uT;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      void main() {
        vec3 n = normalize(vN);
        vec3 V = normalize(vec3(0.0, 0.0, 3.2) - vP);
        if (dot(n, V) < 0.0) n = -n;
        vec3 L1 = normalize(vec3(-0.55, 0.8, 0.55));
        vec3 L2 = normalize(vec3(0.75, -0.4, 0.45));
        float d1 = max(dot(n, L1), 0.0), d2 = max(dot(n, L2), 0.0);
        float s1 = pow(max(dot(n, normalize(L1 + V)), 0.0), 16.0);
        float fr = pow(1.0 - max(dot(n, V), 0.0), 3.0);
        vec3 base = vec3(0.07, 0.074, 0.08);
        vec3 warm = vec3(0.92, 0.85, 0.75), cool = vec3(0.4, 0.55, 0.8);
        vec3 col = base + warm*d1*d1*0.78 + cool*d2*d2*0.42 + warm*s1*0.3 + mix(warm, cool, 0.55)*fr*0.22;
        col += warm * smoothstep(0.94, 1.0, abs(vV)) * (0.16 + 0.5*d1);
        if (!gl_FrontFacing) col *= vec3(0.8, 0.9, 1.1);
        col += (hash(gl_FragCoord.xy + floor(uT*24.0)) - 0.5) * 0.04;
        float ends = smoothstep(0.0, 0.1, vU) * smoothstep(1.0, 0.9, vU);
        gl_FragColor = vec4(mix(vec3(0.047, 0.067, 0.082), col, ends), 1.0);
      }`;
    const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; };
    let prog;
    try {
      prog = gl.createProgram();
      gl.attachShader(prog, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS));
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
    } catch (e) { console.warn(e); return false; }
    gl.useProgram(prog);
    const NU = innerWidth < 860 ? 150 : 240, NV = 30, uv = [], idx = [];
    for (let i = 0; i <= NU; i++) for (let j = 0; j <= NV; j++) uv.push(i / NU, (j / NV) * 2 - 1);
    for (let i = 0; i < NU; i++) for (let j = 0; j < NV; j++) { const a = i * (NV + 1) + j, b = a + NV + 1; idx.push(a, b, a + 1, b, b + 1, a + 1); }
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer()); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uv), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer()); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(idx), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "aUV"); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const U = Object.fromEntries(["uT", "uAsp", "uScale", "uScroll", "uMirror", "uRot", "uOff", "uPtr"].map((k) => [k, gl.getUniformLocation(prog, k)]));
    gl.enable(gl.DEPTH_TEST); gl.clearColor(0.047, 0.067, 0.082, 1);
    const DPR = Math.min(devicePixelRatio || 1, 2);
    let W = 0, H = 0, run = true, raf = 0, t0 = performance.now() - Math.random() * 20000, ptr = [0, 0], tp = [0, 0], sc = 0;
    const size = () => { W = canvas.clientWidth; H = canvas.clientHeight; canvas.width = Math.round(W * DPR); canvas.height = Math.round(H * DPR); gl.viewport(0, 0, canvas.width, canvas.height); };
    size(); addEventListener("resize", size, { passive: true });
    if (fine) addEventListener("pointermove", (e) => { tp = [e.clientX / innerWidth * 2 - 1, e.clientY / innerHeight * 2 - 1]; }, { passive: true });
    function draw(now) {
      const tt = (now - t0) / 1000;
      ptr = ptr.map((v, i) => v + (tp[i] - v) * 0.035);
      sc += (clamp(scrollY / Math.max(1, canvas.clientHeight), 0, 1.2) - sc) * 0.08;
      const asp = W / Math.max(1, H), wide = asp > 1.05, rtl = document.documentElement.dir === "rtl";
      gl.uniform1f(U.uT, reduced ? 6 : tt);
      gl.uniform1f(U.uAsp, asp);
      // a tablet held upright has a tall sky above the title: the ribbon grows to fill it
      const tab = !wide && W >= 700;
      gl.uniform1f(U.uScale, wide ? 0.86 : tab ? 0.64 : 0.46);
      gl.uniform1f(U.uScroll, sc);
      gl.uniform1f(U.uMirror, rtl ? -1 : 1);
      gl.uniform1f(U.uRot, wide ? 0 : (rtl ? 1 : -1) * 1.05);
      // on a wide screen the ribbon stands beside the title, its twist inside the frame
      gl.uniform2f(U.uOff, wide ? (rtl ? -1 : 1) * Math.min(0.95, (asp - 1) * 0.5 + 0.16) : (rtl ? 0.1 : -0.1), wide ? -0.02 : (tab ? 0.6 : 0.86) + sc * 0.1);
      gl.uniform2f(U.uPtr, ptr[0], ptr[1]);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.drawElements(gl.TRIANGLES, idx.length, gl.UNSIGNED_SHORT, 0);
      if (run && !reduced) raf = requestAnimationFrame(draw);
    }
    new IntersectionObserver(([e]) => { run = e.isIntersecting; cancelAnimationFrame(raf); if (run) raf = requestAnimationFrame(draw); }).observe(canvas);
    raf = requestAnimationFrame(draw);
    canvas.classList.add("gl");
    return true;
  }
  const heroEl = $("#hero");
  if (!sheet($("#heroRibbon"))) ribbon($("#heroRibbon"), (W, H) => W >= 860
    ? { lines: 210, x0: 0.3, x1: 1.12, y0: 1.12, y1: -0.08, bow: 0.1, w: 0.2, twist: 1.35, alpha: 0.5, lw: 0.7, fade: () => 1 - clamp(scrollY / (heroEl.offsetHeight * 0.9), 0, 1) * 0.7 }
    : { lines: 130, x0: -0.15, x1: 1.2, y0: 0.66, y1: 0.0, bow: 0.06, w: 0.13, twist: 1.2, alpha: 0.42, lw: 0.6, fade: () => 1 - clamp(scrollY / (heroEl.offsetHeight * 0.9), 0, 1) * 0.7 });

  /* ------------------------------------------------------------------ the player */
  const player = $("#player"), pv = $("#playerVideo");
  let current = null;
  function openVideo(key, l = lang) {
    const m = MEDIA[key]; if (!m || !m.src) return;
    const chosen = m.src[l] ? l : m.src.ar ? "ar" : "en";
    current = key;
    pv.poster = posterSrc(m);
    pv.src = m.src[chosen];
    $("#playerTitle").textContent = m.title[lang] || m.title.en;
    $("#playerLangs").innerHTML = ["ar", "en"].filter((x) => m.src[x]).map((x) => `<button type="button" data-l="${x}" aria-pressed="${x === chosen}">${t("player." + x)}</button>`).join("");
    if (!player.open) player.showModal();
    pv.play().catch(() => {});
    if (phone && !document.fullscreenElement) landscape();
  }
  // on a phone the film goes full screen and turns sideways (Android locks landscape; iOS uses its own player)
  const phone = matchMedia("(pointer: coarse)").matches && Math.min(screen.width, screen.height) < 820;
  function landscape() {
    const fs = pv.requestFullscreen || pv.webkitRequestFullscreen;
    try {
      if (fs) Promise.resolve(fs.call(pv)).then(() => screen.orientation?.lock?.("landscape")).catch(() => {});
      else if (pv.webkitEnterFullscreen) pv.webkitEnterFullscreen();
    } catch {}
  }
  document.addEventListener("fullscreenchange", () => { if (!document.fullscreenElement) try { screen.orientation?.unlock?.(); } catch {} });
  const closePlayer = () => { pv.pause(); pv.removeAttribute("src"); pv.load(); if (player.open) player.close(); };
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-video]"); if (!b) return;
    e.preventDefault(); openVideo(b.dataset.video, b.dataset.l || lang);
  });
  $("#playerLangs").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b || !current) return;
    const at = pv.currentTime;
    openVideo(current, b.dataset.l);
    pv.addEventListener("loadedmetadata", () => { pv.currentTime = Math.min(at, pv.duration - 1); }, { once: true });
  });
  $("#playerClose").addEventListener("click", closePlayer);
  player.addEventListener("cancel", (e) => { e.preventDefault(); closePlayer(); });

  /* ------------------------------------------------------------------ WhatsApp */
  // api.whatsapp.com directly: the wa.me redirect turns emoji into "�"
  const waUrl = (text) => `https://api.whatsapp.com/send/?phone=${WA_NUMBER}&text=${encodeURIComponent(text.slice(0, 3500))}&type=phone_number&app_absent=0`;
  const refNo = () => "NRV-" + Date.now().toString(36).toUpperCase().slice(-6);
  // the message the visitor sends: first person, in the language of the conversation
  function waMessage(d) {
    const l = d.language === "ar" ? "ar" : d.language === "en" ? "en" : lang;
    const k = (x) => tl(l, x);
    const out = [k("wa.hello"), k(d.source === "form" ? "wa.form" : "wa.agent"), "", `*${k("wa.me")}*`];
    out.push(`👤 ${d.name || ""}${d.role ? `, ${d.role}` : ""}`);
    if (d.organization) out.push(`🏢 ${d.organization}`);
    if (d.email) out.push(`✉️ ${d.email}`);
    if (d.phone) out.push(`📞 ${d.phone}`);
    const sec = (title, body, mark = "") => { if (body && String(body).trim()) out.push("", `${mark ? mark + " " : ""}*${title}*`, String(body).trim()); };
    sec(k("wa.discussed"), d.summary, "💬");
    sec(k("wa.need"), d.use_case, "🎯");
    if (d.interest || d.timeline) out.push("");
    // solution names never carry brackets: anything in brackets is the model talking to itself
    const interest = String(d.interest || "").replace(/\s*[(（][^)）]*[)）]/g, "").trim();
    if (interest) out.push(`🧩 *${k("wa.interest")}:* ${interest}`);
    if (d.timeline) out.push(`🗓️ *${k("wa.timeline")}:* ${d.timeline}`);
    sec(k("wa.agreed"), d.agreed, "✅");
    sec(k("wa.questions"), d.notes, "📝");
    out.push("", `${k("wa.ref")} ${d.reference} · narvo.ae`);
    return out.join("\n");
  }
  // when a call ends before the agent wrote the summary: the visitor's own words
  function waFallback(l, lines) {
    const k = (x) => tl(l, x);
    const said = lines.slice(-6).map((s) => `• ${s.length > 220 ? s.slice(0, 217) + "…" : s}`);
    return [k("wa.hello"), `${k("wa.agent")} ${k("wa.cont")}`, ...(said.length ? ["", `💬 *${k("wa.said")}*`, ...said] : []), "", `${k("wa.ref")} ${refNo()} · narvo.ae`].join("\n");
  }

  /* ------------------------------------------------------------------ the voice concierge */
  // WhatsApp appears only at the end: when the agent has written the summary, or (as a fallback) after a call
  // that ended before it. While the visitor talks, the bar holds nothing but Mute and End.
  const cg = $("#cg"), cgPick = $("#cgPick"), cgTalk = $("#cgTalk"), cgLog = $("#cgLog"), cgStatus = $("#cgStatus"), cgWa = $("#cgWa"), cgAfter = $("#cgAfter");
  let conv = null, cl = lang, muted = false, lead = null, mine = [], topic = null, sdk = null, wave = null, live = false, leaving = false, session = 0;
  const setState = (s) => { cg.dataset.state = s; };
  // nothing to summarise: say why, and offer to try again or to write instead
  function after(k) {
    $("#cgAfterT").textContent = tc(k);
    cgAfter.hidden = false;
    setState("ended");
  }
  const tc = (k) => tl(cl, k);
  const loadSdk = () => sdk || (sdk = new Promise((res, rej) => {
    if (window.ElevenLabsClient) return res(window.ElevenLabsClient);
    const s = document.createElement("script"); s.src = SDK_SRC; s.async = true;
    s.onload = () => res(window.ElevenLabsClient); s.onerror = () => { sdk = null; rej(new Error("sdk")); }; document.head.appendChild(s);
  }));
  const setStatus = (k) => { cgStatus.textContent = k ? tc(k) : ""; };
  const say = (text, cls = "") => {
    const p = document.createElement("p"); p.className = cls; p.textContent = text;
    cgLog.appendChild(p);
    while (cgLog.children.length > 40) cgLog.firstElementChild.remove();
    cgLog.scrollTop = cgLog.scrollHeight;
  };
  function showWa(text, fallback = false) {
    $(".label", cgWa).textContent = tc(fallback ? "cg.waFallback" : "cg.waReady");
    $("#cgWaText").textContent = text;
    $("#cgWaBtn").href = waUrl(text);
    cgWa.hidden = false;
  }
  // once the agent has said goodbye, WhatsApp opens by itself — the visitor only presses send
  let countT = null, speaking = false, saidBye = false;
  const cgCount = $("#cgCount");
  function armAuto() {
    if (countT || !lead) return;
    let n = 6;
    const tick = () => {
      cgCount.innerHTML = `${esc(tc("cg.auto").replace("{n}", Math.max(n, 1)))}<button type="button" id="cgStay">${esc(tc("cg.stay"))}</button>`;
      if (n <= 0 && !speaking) { clearInterval(countT); countT = "done"; cgCount.textContent = ""; goWa(); return; }
      n -= 1;
    };
    tick(); countT = setInterval(tick, 1000);
  }
  function stopAuto(mark = "stopped") { if (countT && countT !== "done") clearInterval(countT); countT = mark; cgCount.textContent = ""; }
  function goWa() {
    const url = $("#cgWaBtn").href;
    endTalk(false);
    const w = window.open(url, "_blank", "noopener");
    if (!w) location.href = url;
  }
  cgCount.addEventListener("click", (e) => { if (e.target.id === "cgStay") stopAuto(); });
  $("#cgWaBtn").addEventListener("click", () => { stopAuto("done"); setTimeout(() => endTalk(false), 300); });

  function openConcierge(opts = {}) {
    topic = opts.topic || null;
    stopAuto(null); speaking = false; saidBye = false;
    lead = null; mine = []; cgLog.innerHTML = ""; cgWa.hidden = true; cgAfter.hidden = true; muted = false;
    cg.hidden = false; document.body.style.overflow = "hidden";
    loadSdk().catch(() => {});
    if (opts.lang) begin(opts.lang);
    else { setState("pick"); cgPick.hidden = false; cgTalk.hidden = true; cg.lang = lang; cg.dir = lang === "ar" ? "rtl" : "ltr"; cl = lang; localise(); setStatus(null); }
  }
  function localise() {
    $$("[data-i18n]", cg).forEach((el) => { el.textContent = tc(el.dataset.i18n); });
  }
  async function begin(l) {
    const my = ++session;
    cl = l; cg.lang = l; cg.dir = l === "ar" ? "rtl" : "ltr";
    cgPick.hidden = true; cgTalk.hidden = false; cgAfter.hidden = true; localise();
    setState("connecting");
    $("#cgMute span").textContent = tc("cg.mute"); $("#cgMute").setAttribute("aria-pressed", "false");
    setStatus("cg.connecting");
    wave?.stop(); wave = drawWave($("#cgWave"));
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true }).then((s) => s.getTracks().forEach((x) => x.stop()));
    } catch { if (my === session) { setStatus(null); after("cg.mic"); } return; }
    if (my !== session) return;
    try {
      const { Conversation } = await loadSdk();
      const opts = (connectionType) => ({
        agentId: AGENT_ID,
        connectionType,
        overrides: { agent: { language: l } },
        clientTools: {
          submit_request: async (p) => {
            const reference = refNo();
            lead = { ...p, reference, language: p.language === "ar" || p.language === "en" ? p.language : cl, source: "concierge" };
            showWa(waMessage(lead));
            say(tc("cg.saved"), "sys");
            // the countdown starts when the agent finishes its goodbye (or after a while regardless)
            setTimeout(armAuto, 16000);
            return JSON.stringify({ ok: true, reference, whatsapp_button_shown: true, whatsapp_opens_automatically_after_goodbye: true });
          },
        },
        onConnect: () => { live = true; setState("live"); setStatus("cg.listening"); if (topic) setTimeout(() => conv?.sendContextualUpdate?.(`The visitor opened this conversation from solution ${topic} on the website.`), 400); },
        onDisconnect: () => {
          if (my !== session) return;
          live = false; conv = null; speaking = false; setStatus("cg.ended"); setState("ended");
          if (lead) armAuto();
          // the call ended before the summary: offer what the visitor said, if they said enough to continue from
          else if (mine.length >= 2) showWa(waFallback(cl, mine), true);
          else if (!leaving) after("cg.dropped");
        },
        onError: () => { setStatus("cg.error"); },
        onModeChange: ({ mode }) => {
          speaking = mode === "speaking";
          setStatus(speaking ? "cg.speaking" : "cg.listening");
          if (!speaking && lead && saidBye) setTimeout(() => { if (!speaking) armAuto(); }, 1500);
          if (speaking && lead) saidBye = true;
        },
        onMessage: ({ message, source, role }) => {
          if (!message) return;
          const me = (source || role) === "user";
          // the voice model's delivery tags ("[warm]") are for the voice, not the transcript
          const text = me ? message : message.replace(/\[[^\]]{1,30}\]\s*/g, "").trim();
          if (!text) return;
          if (me) mine.push(text);
          say(text, me ? "me" : "");
        },
      });
      // WebRTC first (best on phones); plain WebSocket if a network blocks it
      const c = await Conversation.startSession(opts("webrtc")).catch(() => Conversation.startSession(opts("websocket")));
      // closed while it was connecting: hang up at once
      if (my !== session) { c.endSession().catch(() => {}); return; }
      conv = c;
    } catch (e) {
      console.error(e);
      if (my !== session) return;
      setStatus(null);
      if (mine.length >= 2) { setState("ended"); showWa(waFallback(cl, mine), true); } else after("cg.error");
    }
  }
  function hideCg() { session++; stopAuto(null); wave?.stop(); wave = null; cg.hidden = true; document.body.style.overflow = ""; }
  async function endTalk(close) {
    const c = conv; conv = null; leaving = true;
    try { await c?.endSession(); } catch {}
    leaving = false;
    // keep the screen open while it holds something to act on: the summary, or the way forward
    if (close || (cgWa.hidden && cgAfter.hidden)) hideCg();
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest(".talk-open"); if (!b) return;
    e.preventDefault(); closeSheet(true); openConcierge({ lang: b.dataset.lang, topic: b.dataset.topic });
  });
  $$(".cg-choices button").forEach((b) => b.addEventListener("click", () => begin(b.dataset.lang)));
  $("#cgEnd").addEventListener("click", () => endTalk(false));
  $("#cgClose").addEventListener("click", () => endTalk(true));
  $("#cgMute").addEventListener("click", () => {
    if (!conv) return;
    muted = !muted; conv.setMicMuted(muted);
    $("#cgMute span").textContent = tc(muted ? "cg.unmute" : "cg.mute");
    $("#cgMute").setAttribute("aria-pressed", String(muted));
  });
  $("#cgAgain").addEventListener("click", () => openConcierge({ lang: cl, topic }));
  $("#cgWrite").addEventListener("click", async () => {
    await endTalk(true);
    // the form speaks the language of the conversation the visitor chose
    if (cl !== lang) { lang = cl; applyLang(); }
    const f = $("#leadForm");
    $("#leadBox").open = true;
    f.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
    if (fine) setTimeout(() => f.querySelector("input[name=name]")?.focus({ preventScroll: true }), 700);
  });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !cg.hidden) endTalk(true); });

  // two hairlines: NARVO's voice in silver, the visitor's in steel
  function drawWave(canvas) {
    const ctx = canvas.getContext("2d"), DPR = Math.min(devicePixelRatio || 1, 2);
    let W = 0, H = 0, run = true, tt = 0, ao = 0, ai = 0;
    const size = () => { W = canvas.clientWidth; H = canvas.clientHeight; canvas.width = W * DPR; canvas.height = H * DPR; ctx.setTransform(DPR, 0, 0, DPR, 0, 0); };
    size(); addEventListener("resize", size);
    const line = (amp, col, ph, k) => {
      ctx.strokeStyle = col; ctx.lineWidth = 1.2; ctx.beginPath();
      for (let x = 0; x <= W; x += 3) {
        const u = x / W, env = Math.pow(Math.sin(Math.PI * u), 2);
        const y = H / 2 + env * amp * (Math.sin(u * 9 * k + tt * 2.1 + ph) * 0.6 + Math.sin(u * 23 * k - tt * 3.3 + ph) * 0.28 + Math.sin(u * 4 + tt * 0.8) * 0.12);
        x ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.stroke();
    };
    const step = () => {
      tt += 0.016;
      ao += ((conv?.getOutputVolume?.() || 0) - ao) * 0.2;
      ai += ((conv?.getInputVolume?.() || 0) - ai) * 0.2;
      ctx.clearRect(0, 0, W, H);
      line(4 + ai * H * 0.9, "rgba(143,171,204,.85)", 1.7, 0.8);
      line(4 + ao * H * 1.1, "rgba(233,229,221,.95)", 0, 1);
      if (run) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    return { stop() { run = false; } };
  }

  /* ------------------------------------------------------------------ write instead: the form opens WhatsApp */
  $("#leadForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.target));
    if (d.company_website) return;
    const text = waMessage({ name: d.name, organization: d.organization, role: d.role, email: d.email, use_case: d.use_case, language: lang, reference: refNo(), source: "form" });
    const w = window.open(waUrl(text), "_blank", "noopener");
    if (!w) location.href = waUrl(text);
  });

  // ?debug exposes the live conversation for rehearsals (text turns instead of a microphone)
  if (new URLSearchParams(location.search).has("debug")) window.NARVO_DEBUG = { get conv() { return conv; }, get lead() { return lead; }, waMessage };

  /* ------------------------------------------------------------------ the opening: the wordmark draws, then the page rises */
  (function intro() {
    const el = $("#intro");
    if (!document.body.classList.contains("loading")) { el.remove(); return; }
    try { sessionStorage.setItem("narvo-intro", "1"); } catch {}
    const go = () => {
      el.classList.add("draw");
      setTimeout(() => { el.classList.add("off"); document.body.classList.remove("loading"); }, 1150);
      setTimeout(() => el.remove(), 2200);
    };
    (document.fonts?.ready || Promise.resolve()).then(go, go);
  })();

  /* ------------------------------------------------------------------ go */
  applyLang();
  onScroll();
})();
