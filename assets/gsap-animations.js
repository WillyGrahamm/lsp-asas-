"use strict";

/**
 * GadgetVerse Motion Layer (GSAP + ScrollTrigger)
 * Dipisahkan dari logika DOM & state utama di assets/script.js.
 */
(function initGadgetVerseMotion() {
  const prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || !window.gsap || !window.ScrollTrigger) {
    return;
  }

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add("has-gsap");

  let cardTriggers = [];

  function getLuxuryEase(snappy = false) {
    const designId = document.documentElement.dataset.design;
    if (designId === "mew") {
      return snappy ? "back.out(1.28)" : "back.out(1.16)";
    }
    if (designId === "space") {
      return "power4.out";
    }
    return "expo.out";
  }

  function revealBatchTo(elements, { duration = 0.9, stagger = 0.1, snappy = false, delay = 0 } = {}) {
    return gsap.to(elements, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration,
      delay,
      stagger: { each: stagger, from: "start" },
      ease: getLuxuryEase(snappy),
      overwrite: "auto",
      clearProps: "transform,opacity",
    });
  }

  function createScrollCascade({
    trigger,
    items,
    start = "top 85%",
    y = 30,
    scale = 0.97,
    duration = 0.9,
    stagger = 0.09,
    snappy = false,
  }) {
    const triggerEl =
      typeof trigger === "string" ? document.querySelector(trigger) : trigger;
    const targets = gsap.utils.toArray(items);

    if (!triggerEl || targets.length === 0) return;

    // Jika halaman langsung dibuka/lompat di posisi bawah, jangan sembunyikan section di atasnya
    const rect = triggerEl.getBoundingClientRect();
    if (rect.bottom < 0) return;

    gsap.set(targets, { opacity: 0, y, scale });

    ScrollTrigger.create({
      trigger: triggerEl,
      start,
      once: true,
      onEnter: () => revealBatchTo(targets, { duration, stagger, snappy }),
      onEnterBack: () => revealBatchTo(targets, { duration: 0.65, stagger: 0.06, snappy }),
    });
  }

  function initHeroChoreography() {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    const badge = hero.querySelector("#august26");
    const heading = hero.querySelector(".hero-content h1");
    const copy = hero.querySelector(".hero-content p");
    const ctaButtons = gsap.utils.toArray(".button-upper button");
    const heroGadget = hero.querySelector(".hero-gadget");
    const statItems = gsap.utils.toArray(".tag-itemv3 .stat-item");

    if ((window.scrollY || 0) < 280) {
      const tl = gsap.timeline({
        defaults: { ease: getLuxuryEase(), clearProps: "transform,opacity" },
      });

      if (badge) {
        tl.fromTo(
          badge,
          { opacity: 0, y: 18, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.72 },
        );
      }
      if (heading) {
        tl.fromTo(
          heading,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.95 },
          "-=0.48",
        );
      }
      if (copy) {
        tl.fromTo(
          copy,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.85 },
          "-=0.65",
        );
      }
      if (ctaButtons.length > 0) {
        tl.fromTo(
          ctaButtons,
          { opacity: 0, y: 18, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.78, stagger: 0.1 },
          "-=0.58",
        );
      }
      if (heroGadget) {
        tl.fromTo(
          heroGadget,
          { opacity: 0, y: 26, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 1.05, ease: getLuxuryEase(true) },
          "-=0.82",
        );
      }
      if (statItems.length > 0) {
        tl.fromTo(
          statItems,
          { opacity: 0, y: 22, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.75, stagger: 0.085 },
          "-=0.65",
        );
      }
    }

    // Efek parallax halus mengikuti scroll pada ilustrasi hero
    if (heroGadget) {
      gsap.to(heroGadget, {
        yPercent: -7,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1.15,
        },
      });
    }
  }

  function initStaticScrollSections() {
    createScrollCascade({
      trigger: "#brand",
      items: "#brand .brand-title > *",
      start: "top 86%",
      y: 26,
      duration: 0.88,
      stagger: 0.09,
    });

    createScrollCascade({
      trigger: "#brand .brand-tag",
      items: "#brand .brand-item",
      start: "top 84%",
      y: 28,
      scale: 0.94,
      duration: 0.82,
      stagger: 0.065,
      snappy: true,
    });

    createScrollCascade({
      trigger: "#title",
      items: "#title .katalog span, #title #aksesori, #title h1, #title p",
      start: "top 86%",
      y: 24,
      duration: 0.86,
      stagger: 0.08,
    });

    const liveBox = document.querySelector(".live");
    const liveControls = gsap.utils.toArray(
      ".live-input, .category-filters .category-filter, .search-results",
    );
    if (liveBox && liveBox.getBoundingClientRect().bottom >= 0) {
      gsap.set(liveBox, { opacity: 0, y: 28, scale: 0.985 });
      if (liveControls.length > 0) {
        gsap.set(liveControls, { opacity: 0, y: 16, scale: 0.95 });
      }

      const playLiveSection = () => {
        const tl = gsap.timeline({
          defaults: { ease: getLuxuryEase(), clearProps: "transform,opacity" },
        });
        tl.to(liveBox, { opacity: 1, y: 0, scale: 1, duration: 0.85 });
        if (liveControls.length > 0) {
          tl.to(
            liveControls,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.72,
              stagger: { each: 0.045, from: "start" },
              ease: getLuxuryEase(true),
            },
            "-=0.55",
          );
        }
      };

      ScrollTrigger.create({
        trigger: liveBox,
        start: "top 86%",
        once: true,
        onEnter: playLiveSection,
        onEnterBack: playLiveSection,
      });
    }

    createScrollCascade({
      trigger: "#recc",
      items: "#recc .section-heading > *",
      start: "top 85%",
      y: 26,
      duration: 0.88,
      stagger: 0.09,
    });

    createScrollCascade({
      trigger: "#recc .highlights-grid",
      items: "#recc .highlight-card",
      start: "top 83%",
      y: 36,
      scale: 0.96,
      duration: 0.95,
      stagger: 0.14,
      snappy: true,
    });

    createScrollCascade({
      trigger: "#road",
      items: "#road .section-heading > *",
      start: "top 85%",
      y: 26,
      duration: 0.88,
      stagger: 0.09,
    });

    createScrollCascade({
      trigger: "#road .roadmap-steps",
      items: "#road .roadmap-step",
      start: "top 84%",
      y: 32,
      scale: 0.96,
      duration: 0.9,
      stagger: 0.13,
      snappy: true,
    });

    createScrollCascade({
      trigger: "#faq-list",
      items: "#faq-list .faq-item",
      start: "top 87%",
      y: 24,
      scale: 0.98,
      duration: 0.8,
      stagger: 0.1,
    });

    createScrollCascade({
      trigger: ".promo",
      items: ".promo",
      start: "top 95%",
      y: 22,
      scale: 0.99,
      duration: 0.78,
      stagger: 0,
    });

    createScrollCascade({
      trigger: "#footer",
      items: "#footer .lower > *",
      start: "top 94%",
      y: 20,
      scale: 0.98,
      duration: 0.82,
      stagger: 0.08,
    });
  }

  function setupCatalogCardAnimations({ isFilterUpdate = false } = {}) {
    cardTriggers.forEach((trigger) => trigger.kill());
    cardTriggers = [];

    const catalogGrid = document.getElementById("main");
    if (!catalogGrid) return;

    gsap.killTweensOf("#main .card, #main .search-empty");

    const emptyState = catalogGrid.querySelector(".search-empty");
    if (emptyState) {
      gsap.fromTo(
        emptyState,
        { opacity: 0, y: 18, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          ease: getLuxuryEase(),
          clearProps: "transform,opacity",
        },
      );
      ScrollTrigger.refresh();
      return;
    }

    const cards = gsap.utils.toArray("#main .card");
    if (cards.length === 0) return;

    const pendingCards = [];
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      // Kartu yang sudah terlewati di atas viewport dibiarkan langsung terlihat
      if (rect.bottom < 0) {
        gsap.set(card, { opacity: 1, y: 0, scale: 1, clearProps: "transform,opacity" });
      } else {
        pendingCards.push(card);
      }
    });

    if (pendingCards.length === 0) return;

    gsap.set(pendingCards, { opacity: 0, y: 40, scale: 0.96 });

    const revealCardBatch = (batch) => {
      revealBatchTo(batch, {
        duration: isFilterUpdate ? 0.68 : 0.88,
        stagger: isFilterUpdate ? 0.085 : 0.115,
        snappy: true,
      });
    };

    let scrollCards = pendingCards;
    if (isFilterUpdate) {
      const visibleNow = [];
      scrollCards = [];
      pendingCards.forEach((card) => {
        if (card.getBoundingClientRect().top < window.innerHeight * 0.92) {
          visibleNow.push(card);
        } else {
          scrollCards.push(card);
        }
      });
      if (visibleNow.length > 0) {
        revealCardBatch(visibleNow);
      }
    }

    if (scrollCards.length > 0) {
      const batchTriggers = ScrollTrigger.batch(scrollCards, {
        start: "top 89%",
        once: true,
        onEnter: revealCardBatch,
        onEnterBack: revealCardBatch,
      });
      cardTriggers = Array.isArray(batchTriggers) ? batchTriggers : [];
    }

    ScrollTrigger.refresh();
  }

  initHeroChoreography();
  initStaticScrollSections();
  setupCatalogCardAnimations({ isFilterUpdate: false });

  document.addEventListener("gadgetverse:catalog-rendered", (event) => {
    setupCatalogCardAnimations({
      isFilterUpdate: Boolean(event.detail && event.detail.isFilterUpdate),
    });
  });

  document.addEventListener("gadgetverse:layout-changed", () => {
    window.requestAnimationFrame(() => ScrollTrigger.refresh());
  });

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
})();
