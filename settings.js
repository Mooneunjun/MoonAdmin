const NavDashboard = document.querySelector(".nav-dashboard");
const NavSettings = document.querySelector(".nav-settings");
const BxsDashboard = document.querySelector(".bxs-dashboard");
const BxCog = document.querySelector(".bx-cog");

BxCog.addEventListener("click", () => {
  NavDashboard.classList.add("hidden");
  NavSettings.classList.remove("hidden");
});

BxsDashboard.addEventListener("click", () => {
  NavDashboard.classList.remove("hidden");
  NavSettings.classList.add("hidden");
});
