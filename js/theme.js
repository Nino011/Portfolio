// ================================
// theme.js
// Dark / light theme toggle
// ================================

(function () {
  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");

  if (!themeToggle) return;

  function applyTheme(theme) {
    if (theme === "light") {
      body.classList.add("light-theme");
      themeToggle.textContent = "☀️ Light";
    } else {
      body.classList.remove("light-theme");
      themeToggle.textContent = "🌙 Dark";
    }
  }

  // Load saved theme
  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    applyTheme(savedTheme);
  }

  themeToggle.addEventListener("click", () => {
    const newTheme = body.classList.contains("light-theme") ? "dark" : "light";
    applyTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
  });

  // Expose in case you ever need it elsewhere
  window.applyTheme = applyTheme;
})();
