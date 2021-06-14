const sidebar = document.querySelector(".sidebar");
const sidebarButton = document.querySelector("#menu-sidebar-button");
const linksItems = document.querySelectorAll(
  ".sidebar__navigation__list__item"
);

sidebarButton.addEventListener("click", () =>
  sidebar.classList.toggle("is-open")
);

linksItems.forEach((item) =>
  item.addEventListener("click", function () {
    document
      .querySelector(".sidebar__navigation__list__item--active")
      .classList.remove("sidebar__navigation__list__item--active");
    item.classList.add("sidebar__navigation__list__item--active");
  })
);
