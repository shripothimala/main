$(document).ready(function () {
  function openOverlay(e) {
    e.preventDefault();
    $(".overlayVeil").addClass("open");
  }

  function closeOverlay(e) {
    console.log("clicked");
    e.preventDefault();
    $(".overlayVeil").removeClass("open");
  }

  function GalleryInit() {
    $(".photoGalleryList").slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }

  function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };

    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  // Initialize and add the map
  function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };

    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

  function init() {
    GalleryInit();
    if ($(".contactPothimala").length) {
      initMap();
    }

    $(".galleryList").masonry({
      itemSelector: ".galleryListItem",
      columnWidth: 300,
    });

    // if ($(".pothimalaGallery").length) {
    //   $(".galleryList").masonryGrid();
    // }

    $(".featuredEventsImg").on("click", openOverlay);
    $(".overlayCloseBtn").on("click", closeOverlay);
  }

  init();
});
