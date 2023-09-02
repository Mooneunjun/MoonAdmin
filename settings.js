const NavDashboard = document.querySelector(".nav-dashboard");
const NavSettings = document.querySelector(".nav-settings");
const NavUsers = document.querySelector(".nav-users");
const NavUsersBtn = document.querySelector(".nav-users-btn");
const NavDashboardBtn = document.querySelector(".nav-dashboard-btn");
const NavSettingsBtn = document.querySelector(".nav-settings-btn");

NavSettingsBtn.addEventListener("click", () => {
  NavDashboard.classList.add("hidden");
  NavUsers.classList.add("hidden");
  NavSettings.classList.remove("hidden");
});

NavDashboardBtn.addEventListener("click", () => {
  NavUsers.classList.add("hidden");

  NavSettings.classList.add("hidden");
  NavDashboard.classList.remove("hidden");
});

NavUsersBtn.addEventListener("click", () => {
  NavDashboard.classList.add("hidden");
  NavSettings.classList.add("hidden");
  NavUsers.classList.remove("hidden");
});
