// ================================
// main.js
// Nav interactions, section highlighting,
// fade-in, filters, scroll-to-top, footer year
// ================================

(function () {
  // Mobile nav toggle (exposed globally for inline onclick)
  function toggleNav() {
    const nav = document.getElementById("navLinks");
    if (!nav) return;
    nav.classList.toggle("show");
  }
  window.toggleNav = toggleNav;

  // Active nav link based on section in view
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (entry.isIntersecting && id) {
            navLinks.forEach((link) => {
              link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + id
              );
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  // Fade-in sections
  const fadeSections = document.querySelectorAll(".fade-in");
  if (fadeSections.length) {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    fadeSections.forEach((sec) => fadeObserver.observe(sec));
  }

  // Project filters
  const filterChips = document.querySelectorAll(".filter-chip");
  const projectCards = document.querySelectorAll(".project-card");

  if (filterChips.length && projectCards.length) {
    filterChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const filter = chip.getAttribute("data-filter");
        filterChips.forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");

        projectCards.forEach((card) => {
          const category = card.getAttribute("data-category");
          const show = filter === "all" || category === filter;
          card.setAttribute("data-hidden", show ? "false" : "true");
        });
      });
    });
  }

  // Scroll-to-top button
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 260) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
})();
