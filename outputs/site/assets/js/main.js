(function () {
  var toggle = document.querySelector(".menu-toggle");

  if (toggle) {
    toggle.addEventListener("click", function () {
      var isOpen = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.addEventListener("click", function (event) {
    if (!document.body.classList.contains("nav-open")) return;
    if (event.target.closest(".site-header")) return;
    document.body.classList.remove("nav-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  });
})();
