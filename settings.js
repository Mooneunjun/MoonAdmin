const NavDashboard = document.querySelector(".nav-dashboard");
const NavSettings = document.querySelector(".nav-settings");
const NavUsers = document.querySelector(".nav-users");
const BxGroup = document.querySelector(".bx-group");
const BxsDashboard = document.querySelector(".bxs-dashboard");
const BxCog = document.querySelector(".bx-cog");

BxCog.addEventListener("click", () => {
  NavDashboard.classList.add("hidden");
  NavUsers.classList.add("hidden");
  NavSettings.classList.remove("hidden");
});

BxsDashboard.addEventListener("click", () => {
  NavUsers.classList.add("hidden");

  NavSettings.classList.add("hidden");
  NavDashboard.classList.remove("hidden");
});

BxGroup.addEventListener("click", () => {
  NavDashboard.classList.add("hidden");
  NavSettings.classList.add("hidden");
  NavUsers.classList.remove("hidden");
});
