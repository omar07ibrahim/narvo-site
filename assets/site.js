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
      "nav.platform": "Platform", "nav.solutions": "Solutions", "nav.films": "Films", "nav.pilot": "Pilot", "nav.about": "About", "nav.talk": "Contact", "nav.lang": "عربي",
      "cta.talk": "Talk to NARVO", "cta.film": "Watch the film", "cur.play": "Play",
      "hero.found": "Emirati-founded. Abu Dhabi-based.", "hero.l1": "Technology you control.", "hero.l2": "Built around your requirement.",
      "hero.sub": "Private, Arabic-first AI that runs on your own servers. One core, twenty solutions, a person approving every action — and zero bytes leaving your organisation.",
      "hero.k1": "bytes leave your organisation", "hero.k2": "solutions on one private core", "hero.k3": "weeks from pilot to decision",
      "hero.backed": "Backed by the MBZUAI Incubation and Entrepreneurship Center",
      "film.kicker": "The film", "film.name": "NARVO — platform overview", "film.play": "Play with sound",
      "film.title": "Most AI asks you to send your data away. NARVO brings the AI to your data.",
      "pr.kicker": "Private by design", "zr.t": "bytes leave your organisation.",
      "zr.d": "Models, data and the audit trail stay on your servers or UAE sovereign cloud. Disconnect the internet, and everything keeps working.",
      "pr.1t": "On your servers", "pr.1d": "Open-weight models run on your own infrastructure or UAE sovereign cloud — not on foreign AI services. Disconnect the internet and everything keeps working.",
      "pr.2t": "Arabic-first", "pr.2d": "Modern Standard Arabic, Emirati dialect and English — in speech, scanned documents and conversation.",
      "pr.3t": "A person approves", "pr.3d": "The AI reads, checks and drafts. A named official approves every action that matters — nothing changes without a person.",
      "pr.4t": "Every action on record", "pr.4d": "Every model call, approval and action is written to an audit trail on your infrastructure. Numbers are computed from your data — never invented by the model.",
      "st.kicker": "The architecture", "st.title": "Five layers, all under your control.",
      "st.5": "Twenty solutions", "st.5d": "cases · customers · decisions · documents · operations · sites",
      "st.4": "The NARVO core", "st.4d": "agents · rules engine · retrieval · speech · governance · audit",
      "st.3": "Model runtime", "st.3d": "vLLM · OpenAI-compatible · on CPU or GPU",
      "st.2": "Open-weight models", "st.2d": "Qwen · Whisper · forecasting — weights you hold",
      "st.1": "Your hardware", "st.1d": "on-premises server · private cloud · UAE sovereign cloud",
      "so.kicker": "Twenty solutions", "so.title": "Starting points, built around your requirement.",
      "so.lede": "We don't start from a product. We start from your requirement — and build, adapt or integrate around it.",
      "so.all": "All", "so.film": "Film", "so.watch": "Watch the film", "so.ask": "Discuss with the concierge",
      "area.1": "Enterprise", "area.2": "Documents", "area.3": "Customers", "area.4": "People", "area.5": "Operations", "area.6": "Sites & field",
      "mq.kicker": "In the pilot stage", "mq.title": "Muqarrir — the AI meeting rapporteur",
      "mq.lede": "Built for a UAE government entity: it listens to the meeting live, in fuṣḥā, Emirati dialect and English — and the official minutes are ready before you leave the room.",
      "mq.b1": "Live transcript with speakers recognised", "mq.b2": "Numbered decisions and actions with owners and deadlines",
      "mq.b3": "Every decision linked to the original recording — click and listen", "mq.b4": "Approve, stamp and export in Arabic and English",
      "mq.b5": "Runs on your own GPU server — no internet, no cloud", "mq.cta": "Watch Muqarrir in action",
      "cs.kicker": "Films", "cs.title": "Real systems, recorded on real screens.",
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
      "ab.p1n": "Ahmed Alawlaqi", "ab.p2n": "Ali AlMehrzi", "ab.p3n": "Hamdan Bin Rakkad",
      "ab.p1": "Co-founder & CEO", "ab.p2": "Co-founder · Commercial Operations", "ab.p3": "Co-founder · Strategic Markets & Affairs",
      "ab.a1n": "Dr. Mohamed Alloghani", "ab.a1": "Applied AI & AI systems · first Emirati PhD focused on AI",
      "ab.a2n": "Daniel Searle", "ab.a2": "AI transformation & growth · €1bn+ total contract value",
      "ab.a3n": "Prof. Olivier Oullier", "ab.a3": "AI, innovation & strategy · 300+ publications",
      "ab.a4n": "Tom Hudson", "ab.a4": "Government & international markets · $20bn+ UAE deals",
      "tk.kicker": "Start a conversation", "tk.title": "Start with one priority.",
      "tk.lede": "Talk to our AI concierge — describe your challenge and agree the next step. At the end, your summary goes to our team on WhatsApp in one tap.",
      "tk.privacy": "Voice conversations on this website run through our voice partner, ElevenLabs. NARVO deployments for clients run entirely on their own servers.",
      "tk.writeT": "Prefer to write?", "tk.writeD": "Fill this in — WhatsApp opens with your request already written. Just press send.", "tk.addr": "Masdar City, Abu Dhabi",
      "f.name": "Full name", "f.org": "Organisation", "f.role": "Role", "f.email": "Work email (optional)", "f.need": "What would you like AI to do for your organisation?", "f.send": "Send on WhatsApp",
      "ft.tag": "Technology you control.", "ft.rights": "Masdar City, Abu Dhabi",
      "cg.name": "NARVO concierge", "cg.connecting": "Connecting…", "cg.listening": "Listening", "cg.speaking": "Speaking", "cg.ended": "Conversation ended",
      "cg.mute": "Mute", "cg.unmute": "Unmute", "cg.end": "End", "cg.finish": "Finish & send on WhatsApp", "cg.wa": "Send on WhatsApp",
      "cg.waReady": "Your summary is ready", "cg.waFallback": "Continue on WhatsApp", "cg.saved": "Summary ready — tap the green button",
      "cg.finishMsg": "I'd like to finish now and send my request to the team on WhatsApp.",
      "cg.auto": "Opening WhatsApp in {n}…", "cg.stay": "Stay here",
      "cg.mic": "Microphone access is needed to talk. You can also write to us on WhatsApp.", "cg.error": "Couldn't connect. Please try again, or write to us on WhatsApp.",
      "player.ar": "العربية", "player.en": "English",
      "wa.hello": "Hello NARVO 👋", "wa.agent": "I've just spoken with your AI concierge on narvo.ae.", "wa.form": "I'm writing from narvo.ae.",
      "wa.me": "About me", "wa.discussed": "What we discussed", "wa.need": "What I need", "wa.interest": "Solution", "wa.timeline": "Timeline",
      "wa.agreed": "What we agreed", "wa.questions": "Notes", "wa.said": "What I said", "wa.cont": "I'd like to continue here.", "wa.ref": "Ref.",
      "wa.direct": "Hello NARVO 👋 I'd like to talk about a project.",
    },
    ar: {
      "nav.platform": "المنصة", "nav.solutions": "الحلول", "nav.films": "الأفلام", "nav.pilot": "التجربة", "nav.about": "من نحن", "nav.talk": "تواصل", "nav.lang": "English",
      "cta.talk": "تحدّث مع نارفو", "cta.film": "شاهد الفيلم", "cur.play": "تشغيل",
      "hero.found": "شركةٌ إماراتية، مقرّها أبوظبي.", "hero.l1": "تقنيةٌ تحت سيطرتك.", "hero.l2": "مبنيّةٌ حول متطلباتك.",
      "hero.sub": "ذكاءٌ اصطناعي خاص، بالعربية أولاً، يعمل على خوادمكم. نواةٌ واحدة، وعشرون حلاً، وإنسانٌ يعتمد كل إجراء — وصفرُ بايت يغادر جهتكم.",
      "hero.k1": "بايت تغادر جهتكم", "hero.k2": "حلاً على نواةٍ خاصة واحدة", "hero.k3": "أسابيع من التجربة إلى القرار",
      "hero.backed": "بدعمٍ من مركز الاحتضان وريادة الأعمال في جامعة محمد بن زايد للذكاء الاصطناعي",
      "film.kicker": "الفيلم", "film.name": "نارفو — نظرة على المنصة", "film.play": "شاهد مع الصوت",
      "film.title": "معظمُ حلول الذكاء الاصطناعي تطلب منك أن ترسل بياناتك إليها. «نارفو» تأتي بالذكاء الاصطناعي إلى بياناتك.",
      "pr.kicker": "الخصوصية في التصميم", "zr.t": "بايت يغادر جهتكم.",
      "zr.d": "النماذج والبيانات وسجل التدقيق تبقى على خوادمكم أو على السحابة السيادية في الإمارات. افصلوا الإنترنت، ويستمر كل شيء بالعمل.",
      "pr.1t": "على خوادمكم", "pr.1d": "نماذج مفتوحة الأوزان تعمل على بنيتكم التحتية أو على السحابة السيادية في الإمارات — لا على خدمات ذكاء اصطناعي أجنبية. افصلوا الإنترنت، ويستمر كل شيء بالعمل.",
      "pr.2t": "العربية أولاً", "pr.2d": "الفصحى واللهجة الإماراتية والإنجليزية — في الكلام والوثائق الممسوحة والمحادثة.",
      "pr.3t": "الإنسان يعتمد", "pr.3d": "الذكاء الاصطناعي يقرأ ويدقق ويصوغ، والموظف المسؤول بالاسم يعتمد كل إجراءٍ مهم — لا يتغيّر شيءٌ دون إنسان.",
      "pr.4t": "كل إجراءٍ مسجّل", "pr.4d": "كل استدعاءٍ للنموذج وكل اعتمادٍ وكل إجراء يُسجَّل في سجل تدقيق على بنيتكم التحتية. والأرقام تُحسب من بياناتكم — لا يخترعها النموذج.",
      "st.kicker": "البنية", "st.title": "خمس طبقات، كلّها تحت سيطرتكم.",
      "st.5": "عشرون حلاً", "st.5d": "الحالات · المتعاملون · القرار · المستندات · العمليات · المواقع",
      "st.4": "نواة نارفو", "st.4d": "الوكلاء · محرك القواعد · الاسترجاع · الكلام · الحوكمة · التدقيق",
      "st.3": "تشغيل النماذج", "st.3d": "vLLM · متوافق مع OpenAI · على المعالج أو وحدة الرسوميات",
      "st.2": "نماذج مفتوحة الأوزان", "st.2d": "Qwen · Whisper · التنبؤ — أوزانٌ تملكونها",
      "st.1": "أجهزتكم", "st.1d": "خادم داخل الجهة · سحابة خاصة · سحابة سيادية إماراتية",
      "so.kicker": "عشرون حلاً", "so.title": "نقاط انطلاق… تُبنى حول متطلباتكم.",
      "so.lede": "لا نبدأ من منتج، بل من متطلباتكم — ثم نبني أو نكيّف أو ندمج حولها.",
      "so.all": "الكل", "so.film": "فيلم", "so.watch": "شاهد الفيلم", "so.ask": "ناقشه مع المساعد الذكي",
      "area.1": "المؤسسة", "area.2": "المستندات", "area.3": "العملاء", "area.4": "الموظفون", "area.5": "العمليات", "area.6": "المواقع والميدان",
      "mq.kicker": "في مرحلة التجربة", "mq.title": "مُقرِّر — مقرّر الاجتماعات الذكي",
      "mq.lede": "صُمّم لجهةٍ حكومية في الإمارات: يستمع إلى الاجتماع مباشرةً بالفصحى واللهجة الإماراتية والإنجليزية — ويكون المحضر الرسمي جاهزاً قبل أن تغادر القاعة.",
      "mq.b1": "تفريغٌ مباشر مع تمييز المتحدثين", "mq.b2": "قراراتٌ مرقّمة وتكليفاتٌ بأسماء المسؤولين ومواعيدها",
      "mq.b3": "كل قرارٍ مرتبط بلحظته في التسجيل الأصلي — انقر واسمع", "mq.b4": "اعتمادٌ وختمٌ وتصدير بالعربية والإنجليزية",
      "mq.b5": "يعمل على خادم الجهة — لا إنترنت، لا سحابة", "mq.cta": "شاهد «مُقرِّر» أثناء العمل",
      "cs.kicker": "الأفلام", "cs.title": "أنظمةٌ حقيقية، مسجّلة على شاشاتٍ حقيقية.",
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
      "tk.lede": "تحدّث مع مساعدنا الذكي — صِف التحدي واتفق على الخطوة التالية. وفي النهاية يصل ملخّصك إلى فريقنا عبر واتساب بضغطةٍ واحدة.",
      "tk.privacy": "تتم المحادثات الصوتية على هذا الموقع عبر شريكنا الصوتي ElevenLabs. أما حلول نارفو لدى العملاء فتعمل بالكامل على خوادمهم.",
      "tk.writeT": "تفضّل الكتابة؟", "tk.writeD": "املأ هذه الحقول — يفتح واتساب وطلبك مكتوبٌ وجاهز. اضغط إرسال فقط.", "tk.addr": "مدينة مصدر، أبوظبي",
      "f.name": "الاسم الكامل", "f.org": "الجهة", "f.role": "المسمّى الوظيفي", "f.email": "البريد الإلكتروني (اختياري)", "f.need": "ما الذي تودّ أن يقوم به الذكاء الاصطناعي في جهتك؟", "f.send": "إرسال عبر واتساب",
      "ft.tag": "تقنيةٌ تحت سيطرتك.", "ft.rights": "مدينة مصدر، أبوظبي",
      "cg.name": "مساعد نارفو الذكي", "cg.connecting": "جارٍ الاتصال…", "cg.listening": "أستمع إليك", "cg.speaking": "يتحدث", "cg.ended": "انتهت المحادثة",
      "cg.mute": "كتم", "cg.unmute": "إلغاء الكتم", "cg.end": "إنهاء", "cg.finish": "إنهاء وإرسال عبر واتساب", "cg.wa": "إرسال عبر واتساب",
      "cg.waReady": "ملخّصك جاهز", "cg.waFallback": "تابع عبر واتساب", "cg.saved": "الملخّص جاهز — اضغط الزر الأخضر",
      "cg.finishMsg": "أودّ إنهاء المحادثة الآن وإرسال طلبي إلى الفريق عبر واتساب.",
      "cg.auto": "سيُفتح واتساب خلال {n}…", "cg.stay": "البقاء هنا",
      "cg.mic": "يلزم الإذن باستخدام الميكروفون للتحدث. ويمكنك أيضاً مراسلتنا عبر واتساب.", "cg.error": "تعذّر الاتصال. حاول مجدداً، أو راسلنا عبر واتساب.",
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
    document.title = lang === "ar" ? "نارفو — تقنيةٌ تحت سيطرتك" : "NARVO — Technology you control";
    $("#waDirect").href = waUrl(t("wa.direct"));
    renderSolutions();
    renderFilms();
    renderDurations();
    try { localStorage.setItem("narvo-lang", lang); } catch {}
  }
  $("#langBtn").addEventListener("click", () => { lang = lang === "ar" ? "en" : "ar"; applyLang(); });

  /* ------------------------------------------------------------------ header, menu, floating talk */
  const menu = $("#menu"), menuBtn = $("#menuBtn");
  const setMenu = (open) => { menu.hidden = !open; menuBtn.setAttribute("aria-expanded", String(open)); document.body.style.overflow = open ? "hidden" : ""; };
  menuBtn.addEventListener("click", () => setMenu(menu.hidden));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  const floatTalk = $(".float-talk"), hd = $("#hd");
  let lastY = scrollY;
  const onScroll = () => {
    const y = scrollY;
    // the header steps away while reading down, and returns on the way up
    if (Math.abs(y - lastY) > 6) { hd.classList.toggle("away", y > lastY && y > innerHeight * 0.6 && menu.hidden); lastY = y; }
    const talkTop = $("#talk").getBoundingClientRect().top;
    floatTalk.classList.toggle("show", scrollY > innerHeight * 0.85 && talkTop > innerHeight * 0.4);
    stackProgress();
  };
  addEventListener("scroll", onScroll, { passive: true });

  /* ------------------------------------------------------------------ reveals */
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add("in");
      io.unobserve(e.target);
      if (e.target.id === "zeroDigits") countdown(e.target);
    }
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
  function observe(root = document) {
    $$(".reveal", root).forEach((el) => {
      const sibs = [...el.parentElement.children].filter((x) => x.classList.contains("reveal"));
      el.style.setProperty("--d", `${Math.min(sibs.indexOf(el), 5) * 0.07}s`);
      io.observe(el);
    });
    $$("[data-split], .ft-word, #zeroDigits", root).forEach((el) => io.observe(el));
  }
  // the zero counts down from nine as it arrives
  function countdown(el) {
    if (reduced) return;
    let n = 9;
    el.textContent = "9";
    const id = setInterval(() => { n -= 1; el.textContent = String(n); if (n <= 0) clearInterval(id); }, 95);
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
      gl.uniform1f(U.uScale, wide ? 0.8 : 0.46);
      gl.uniform1f(U.uScroll, sc);
      gl.uniform1f(U.uMirror, rtl ? -1 : 1);
      gl.uniform1f(U.uRot, wide ? 0 : (rtl ? 1 : -1) * 1.05);
      gl.uniform2f(U.uOff, wide ? (rtl ? -1 : 1) * Math.min(0.95, (asp - 1) * 0.85 + 0.25) : (rtl ? 0.1 : -0.1), wide ? -0.02 : 0.8 + sc * 0.1);
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
  ribbon($("#talkRibbon"), (W, H) => ({ lines: W >= 860 ? 180 : 110, x0: -0.08, x1: 1.08, y0: 0.95, y1: 0.18, bow: -0.04, w: W >= 860 ? 0.16 : 0.1, twist: 1.1, alpha: 0.32, lw: 0.6 }));

  /* ------------------------------------------------------------------ the film: a silent reel in the frame, sound in the player */
  (function reel() {
    const v = $("#reel");
    const save = navigator.connection && (navigator.connection.saveData || /2g/.test(navigator.connection.effectiveType || ""));
    if (!v || !MEDIA.reel || save || reduced) return;
    let loaded = false;
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        if (!loaded) { loaded = true; v.src = MEDIA.reel; v.addEventListener("playing", () => v.classList.add("on"), { once: true }); }
        v.play().catch(() => {});
      } else v.pause();
    }, { threshold: 0.25 }).observe(v);
  })();

  /* the play cursor over films */
  const cursor = $("#cursor");
  if (fine && cursor) {
    let cx = -200, cy = -200, x = -200, y = -200, on = false, ticking = false;
    const loop = () => { x += (cx - x) * 0.22; y += (cy - y) * 0.22; cursor.style.transform = `translate3d(${x}px,${y}px,0)`; if (Math.abs(cx - x) + Math.abs(cy - y) > 0.3 || on) requestAnimationFrame(loop); else ticking = false; };
    addEventListener("pointermove", (e) => {
      cx = e.clientX; cy = e.clientY;
      const over = !!e.target.closest?.("[data-cursor]");
      if (over !== on) { on = over; cursor.classList.toggle("on", on); }
      if (!ticking) { ticking = true; if (!on) { x = cx; y = cy; } requestAnimationFrame(loop); }
    }, { passive: true });
  }

  /* ------------------------------------------------------------------ the stack separates as you scroll through it */
  const iso = $("#iso"), stackEl = $("#stack");
  function stackProgress() {
    if (!iso) return;
    const r = stackEl.getBoundingClientRect();
    const p = clamp((innerHeight - r.top) / (innerHeight + r.height * 0.6), 0, 1);
    iso.style.setProperty("--gap", `${(4 + 24 * Math.sin(p * Math.PI * 0.5)).toFixed(1)}px`);
  }
  const lightPlate = (l) => { $$(".plate", iso).forEach((p) => p.classList.toggle("on", p.dataset.l === l)); $$("#layers li").forEach((li) => li.classList.toggle("on", li.dataset.l === l)); };
  $$("#layers li").forEach((li) => {
    li.addEventListener("pointerenter", () => lightPlate(li.dataset.l));
    li.addEventListener("click", () => lightPlate(li.dataset.l));
  });
  $("#layers").addEventListener("pointerleave", () => lightPlate(null));

  /* ------------------------------------------------------------------ the twenty solutions, as an index */
  let SOL = [], area = 0;
  const openRows = new Set();
  fetch("assets/solutions.json").then((r) => r.json()).then((d) => { SOL = d; renderSolutions(); }).catch(() => {});
  const caseFor = (n) => Object.entries(MEDIA).find(([, m]) => m.solution === n)?.[0];
  const play = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>`;
  function renderSolutions() {
    const list = $("#soList"), bar = $("#filters");
    if (!list || !SOL.length) return;
    const count = (a) => (a ? SOL.filter((s) => s.area === a).length : SOL.length);
    bar.innerHTML = [0, 1, 2, 3, 4, 5, 6].map((a) => `<button role="tab" type="button" aria-selected="${a === area}" data-area="${a}">${a ? t("area." + a) : t("so.all")}<sup>${count(a)}</sup></button>`).join("");
    list.innerHTML = SOL.map((s) => {
      const key = caseFor(s.n), open = openRows.has(s.n);
      const ar = lang === "ar";
      return `<li class="${area && s.area !== area ? "dim" : ""}${open ? " open" : ""}" data-n="${s.n}"${key ? ` data-key="${key}"` : ""}>
        <button class="row-h" type="button" aria-expanded="${open}">
          <span class="n">${s.n}</span>
          <span class="t">${esc(ar ? s.ar : s.en)}${key ? `<span class="tag-film">${play}${t("so.film")}</span>` : ""}</span>
          <span class="g">${esc(ar ? s.par : s.pen)}</span>
          <span class="a">${t("area." + s.area)}</span>
          <span class="pl" aria-hidden="true"></span>
        </button>
        <div class="row-b"><div><div class="in">
          <p class="body">${esc(ar ? s.sar : s.sen)}</p>
          <div class="acts">${key ? `<button class="pill pill-ink" type="button" data-video="${key}">${play}<span>${t("so.watch")}</span></button>` : ""}<button class="pill pill-line talk-open" type="button" data-topic="${s.n} ${esc(s.en)}"><span>${t("so.ask")}</span></button></div>
        </div></div></div>
      </li>`;
    }).join("");
  }
  $("#filters").addEventListener("click", (e) => { const b = e.target.closest("button"); if (!b) return; area = Number(b.dataset.area); renderSolutions(); });
  $("#soList").addEventListener("click", (e) => {
    const h = e.target.closest(".row-h"); if (!h) return;
    const li = h.parentElement, n = li.dataset.n;
    const open = !li.classList.contains("open");
    li.classList.toggle("open", open); h.setAttribute("aria-expanded", String(open));
    if (open) openRows.add(n); else openRows.delete(n);
  });
  // a still from the film floats beside the row
  const peek = $("#peek");
  if (fine && peek) {
    let shown = null;
    $("#soList").addEventListener("pointermove", (e) => {
      const li = e.target.closest("li[data-key]");
      const key = li && !li.classList.contains("open") ? li.dataset.key : null;
      if (key !== shown) {
        shown = key;
        if (key) { $("img", peek).src = MEDIA[key].poster; $("span", peek).textContent = `▶ ${t("so.film")} · ${fmt(MEDIA[key].dur?.[lang] || MEDIA[key].dur?.ar || MEDIA[key].dur?.en || 0)}`; }
        peek.classList.toggle("on", !!key);
      }
      if (key) peek.style.transform = `translate3d(${e.clientX + (lang === "ar" ? -344 : 24)}px, ${e.clientY - 200}px, 0)`;
    });
    $("#soList").addEventListener("pointerleave", () => { shown = null; peek.classList.remove("on"); });
  }

  /* ------------------------------------------------------------------ films */
  const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, "0")}`;
  function renderFilms() {
    const strip = $("#strip"); if (!strip) return;
    const order = ["overview", "muqarrir", ...Object.keys(MEDIA).filter((k) => MEDIA[k].solution).sort((a, b) => MEDIA[a].solution.localeCompare(MEDIA[b].solution))];
    const list = order.filter((k) => MEDIA[k] && MEDIA[k].src);
    $("#films").hidden = !list.length;
    strip.innerHTML = list.map((key, i) => {
      const m = MEDIA[key];
      const d = m.dur?.[lang] || m.dur?.ar || m.dur?.en;
      return `<article class="card">
        <button class="thumb" type="button" data-video="${key}" data-cursor="film" aria-label="${esc(m.title[lang] || m.title.en)}"><img src="${m.poster}" alt="" loading="lazy"></button>
        <div class="meta"><i>${m.solution || String(i + 1).padStart(2, "0")}</i><b>${esc(m.title[lang] || m.title.en)}</b><span class="dur">${d ? fmt(d) : ""}</span></div>
        ${m.blurb ? `<p>${esc(m.blurb[lang] || m.blurb.en)}</p>` : ""}
        <div class="langs">${["ar", "en"].filter((x) => m.src[x]).map((x) => `<button type="button" data-video="${key}" data-l="${x}">${t("player." + x)}</button>`).join("")}</div>
      </article>`;
    }).join("");
  }
  const stripStep = (dir) => { const s = $("#strip"), c = $(".card", s); if (!c) return; const w = c.getBoundingClientRect().width + 24; s.scrollBy({ left: dir * w * (document.documentElement.dir === "rtl" ? -1 : 1), behavior: "smooth" }); };
  $("#stripPrev").addEventListener("click", () => stripStep(-1));
  $("#stripNext").addEventListener("click", () => stripStep(1));
  function renderDurations() {
    $$("[data-dur]").forEach((el) => { const m = MEDIA[el.dataset.dur]; const d = m && (m.dur?.[lang] || m.dur?.ar || m.dur?.en); el.textContent = d ? fmt(d) : ""; });
  }

  /* ------------------------------------------------------------------ the player */
  const player = $("#player"), pv = $("#playerVideo");
  let current = null;
  function openVideo(key, l = lang) {
    const m = MEDIA[key]; if (!m || !m.src) return;
    const chosen = m.src[l] ? l : m.src.ar ? "ar" : "en";
    current = key;
    pv.poster = m.poster || "";
    pv.src = m.src[chosen];
    $("#playerTitle").textContent = m.title[lang] || m.title.en;
    $("#playerLangs").innerHTML = ["ar", "en"].filter((x) => m.src[x]).map((x) => `<button type="button" data-l="${x}" aria-pressed="${x === chosen}">${t("player." + x)}</button>`).join("");
    if (!player.open) player.showModal();
    pv.play().catch(() => {});
  }
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
    out.push(`👤 ${d.name || "—"}${d.role ? ` — ${d.role}` : ""}`);
    if (d.organization) out.push(`🏢 ${d.organization}`);
    if (d.email) out.push(`✉️ ${d.email}`);
    if (d.phone) out.push(`📞 ${d.phone}`);
    const sec = (title, body, mark = "") => { if (body && String(body).trim()) out.push("", `${mark ? mark + " " : ""}*${title}*`, String(body).trim()); };
    sec(k("wa.discussed"), d.summary, "💬");
    sec(k("wa.need"), d.use_case, "🎯");
    if (d.interest || d.timeline) out.push("");
    if (d.interest) out.push(`🧩 *${k("wa.interest")}:* ${d.interest}`);
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
  const cg = $("#cg"), cgPick = $("#cgPick"), cgTalk = $("#cgTalk"), cgLog = $("#cgLog"), cgStatus = $("#cgStatus"), cgWa = $("#cgWa");
  let conv = null, cl = lang, muted = false, lead = null, mine = [], topic = null, sdk = null, wave = null, live = false;
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
    lead = null; mine = []; cgLog.innerHTML = ""; cgWa.hidden = true; muted = false;
    cg.hidden = false; document.body.style.overflow = "hidden";
    loadSdk().catch(() => {});
    if (opts.lang) begin(opts.lang);
    else { cgPick.hidden = false; cgTalk.hidden = true; cg.lang = lang; cg.dir = lang === "ar" ? "rtl" : "ltr"; cl = lang; localise(); setStatus(null); }
  }
  function localise() {
    $$("[data-i18n]", cg).forEach((el) => { el.textContent = tc(el.dataset.i18n); });
  }
  async function begin(l) {
    cl = l; cg.lang = l; cg.dir = l === "ar" ? "rtl" : "ltr";
    cgPick.hidden = true; cgTalk.hidden = false; localise();
    $("#cgMute span").textContent = tc("cg.mute");
    setStatus("cg.connecting");
    wave?.stop(); wave = drawWave($("#cgWave"));
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true }).then((s) => s.getTracks().forEach((x) => x.stop()));
    } catch { setStatus(null); say(tc("cg.mic"), "sys"); showWa(waFallback(cl, []), true); return; }
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
        onConnect: () => { live = true; setStatus("cg.listening"); if (topic) setTimeout(() => conv?.sendContextualUpdate?.(`The visitor opened this conversation from solution ${topic} on the website.`), 400); },
        onDisconnect: () => {
          live = false; conv = null; speaking = false; setStatus("cg.ended");
          if (lead) armAuto();
          else if (mine.length) showWa(waFallback(cl, mine), true);
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
      conv = await Conversation.startSession(opts("webrtc")).catch(() => Conversation.startSession(opts("websocket")));
    } catch (e) {
      setStatus("cg.error"); console.error(e);
      showWa(waFallback(cl, mine), true);
    }
  }
  async function endTalk(close) {
    const c = conv; conv = null;
    try { await c?.endSession(); } catch {}
    if (close || cgWa.hidden) {
      wave?.stop(); wave = null; cg.hidden = true; document.body.style.overflow = "";
    }
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest(".talk-open"); if (!b) return;
    e.preventDefault(); openConcierge({ lang: b.dataset.lang, topic: b.dataset.topic });
  });
  $$(".cg-choices button").forEach((b) => b.addEventListener("click", () => begin(b.dataset.lang)));
  $("#cgEnd").addEventListener("click", () => endTalk(false));
  $("#cgClose").addEventListener("click", () => endTalk(true));
  $("#cgMute").addEventListener("click", () => { if (!conv) return; muted = !muted; conv.setMicMuted(muted); $("#cgMute span").textContent = tc(muted ? "cg.unmute" : "cg.mute"); });
  $("#cgFinish").addEventListener("click", () => {
    if (lead) { $("#cgWaBtn").click(); return; }
    if (conv && live) {
      // the agent hears it as the visitor's wish and closes: details, read-back, then the summary
      conv.sendUserMessage?.(tc("cg.finishMsg"));
      say(tc("cg.finishMsg"), "me");
      return;
    }
    const text = waFallback(cl, mine);
    showWa(text, true);
    window.open(waUrl(text), "_blank", "noopener");
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

  /* ------------------------------------------------------------------ go */
  applyLang();
  observe();
  onScroll();
})();
