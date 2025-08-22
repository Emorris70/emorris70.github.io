/**
 * Author - Emile Morris
 *
 */

// Main Function
const init = () => {
  "use strict";

  initTypedAnimations();
  initTheme();
  listDescription();
};

// Animation for the hero section
const initTypedAnimations = () => {
  "use strict";

  const typedH1 = new Typed("#typed-output-h1", {
    strings: [
      '<span class="h1-light-mode">Hi, I\'m </span><span class="span-deco">Emile Morris.</span>',
    ],
    typeSpeed: 60,
    backSpeed: 0,
    loop: false,
    showCursor: true,
    cursorChar: "|",
    onComplete: () => {
      new Typed("#typed-output-h2", {
        strings: ['<span class="h2-light-mode">A Software Developer.</span>'],
        typeSpeed: 50,
        backSpeed: 0,
        loop: false,
        showCursor: true,
        cursorChar: "|",
        startDelay: 500,
      });
    },
  });
};

// Stores saved theme
const initTheme = () => {
  "use strict";

  const themeToggleButton = document.getElementById("theme-toggle-btn");

  themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("light-mode") ? "light" : "dark"
    );
  });

  const savedTheme = localStorage.getItem("theme");
  document.body.classList.toggle("light-mode", savedTheme === "light");
};

// handles pop up logic
const listDescription = () => {
  const modal = document.getElementById("skillModal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const closeBtn = document.querySelector(".close-btn");

  const skillItems = document.querySelectorAll(".tech-c-deco");

  skillItems.forEach(item => {
    item.addEventListener("click", () => {
      const fullLabel = item.getAttribute("aria-label");
      const [name, description] = fullLabel.split(" - ");

      modalTitle.textContent = name.trim();
      modalDescription.textContent = description.trim();

      modal.classList.add("show");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  window.addEventListener("click", event => {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });
};
window.addEventListener("DOMContentLoaded", init);
