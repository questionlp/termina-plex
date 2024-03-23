/*
 * Based on the Theme Controls by Ryan Mulligan
 * Blog Post: https://ryanmulligan.dev/blog/themes-and-schemes/
 * CodePen: https://codepen.io/hexagoncircle/pen/zYPrjNd
 */

const html = document.documentElement;
const themeControls = document.querySelector("[data-theme-controls]");
const toggle = themeControls.querySelector(".color-scheme-toggle");
const colorSchemeStatus = themeControls.querySelector(".color-scheme-status");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

const setToggleLabel = () => {
  let mode;

  mode = !html.dataset.colorScheme ?
  prefersDark.matches ?
  "dark" :
  "light" :
  html.dataset.colorScheme;

  toggle.setAttribute("title", `Enable ${mode === "dark" ? "light" : "dark"} mode`);
};

const setColorScheme = value => {
  html.dataset.colorScheme = value;
  localStorage.setItem("color-scheme", value);
  setToggleLabel();
};

const setTheme = value => {
  const theme = themeFlavors[value - 1];
  html.dataset.theme = theme;
  localStorage.setItem("theme", theme);

  if (!html.dataset.colorScheme) {
    const scheme = prefersDark.matches ? "dark" : "light";
    setColorScheme(scheme);
  }
};

const init = () => {
  const scheme = localStorage.getItem("color-scheme");
  if (scheme) {
    setColorScheme(scheme);
  }
  setToggleLabel();
};

toggle.addEventListener("click", () => {
  if (!html.dataset.colorScheme && prefersDark.matches) {
    setColorScheme("light");
    return;
  }

  const scheme = html.dataset.colorScheme === "dark" ? "light" : "dark";
  setColorScheme(scheme);
});

init();
