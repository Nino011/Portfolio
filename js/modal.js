// ================================
// modal.js
// Open/close modal dialogs
// ================================

(function () {
  const modalTriggers = document.querySelectorAll("[data-modal-target]");
  const modalBackdrops = document.querySelectorAll(".modal-backdrop");

  function openModal(id) {
    const backdrop = document.getElementById(id);
    if (!backdrop) return;
    backdrop.classList.add("show");
    backdrop.setAttribute("aria-hidden", "false");
  }

  function closeModal(backdrop) {
    backdrop.classList.remove("show");
    backdrop.setAttribute("aria-hidden", "true");
  }

  modalTriggers.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-modal-target");
      openModal(id);
    });
  });

  modalBackdrops.forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closeModal(backdrop);
      }
    });

    const closeBtn = backdrop.querySelector("[data-modal-close]");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => closeModal(backdrop));
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modalBackdrops.forEach((backdrop) => {
        if (backdrop.classList.contains("show")) {
          closeModal(backdrop);
        }
      });
    }
  });
})();
