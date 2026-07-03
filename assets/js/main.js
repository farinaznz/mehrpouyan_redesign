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

  var galleryLinks = document.querySelectorAll("[data-lightbox]");

  if (galleryLinks.length) {
    var lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML =
      '<div class="lightbox__inner" role="dialog" aria-modal="true">' +
      '<img alt="">' +
      '<div class="lightbox__caption"><p></p><button class="lightbox__close" type="button" aria-label="Close">×</button></div>' +
      "</div>";
    document.body.appendChild(lightbox);

    var image = lightbox.querySelector("img");
    var caption = lightbox.querySelector("p");
    var close = lightbox.querySelector(".lightbox__close");

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    galleryLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        image.src = link.href;
        image.alt = link.querySelector("img") ? link.querySelector("img").alt : "";
        caption.textContent = link.dataset.caption || link.textContent.trim();
        lightbox.classList.add("is-open");
        document.body.style.overflow = "hidden";
      });
    });

    close.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
    });
  }
})();
