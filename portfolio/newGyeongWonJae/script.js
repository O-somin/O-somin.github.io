var roomImgSlider = new Swiper(".room-img", {
    autoplay: true,
    pagination: {
    el: ".swiper-pagination",
    },
    navigation: {
        prevEl:'.prev',
        nextEl:'.next'
    }
});
var roomInfoSlider = new Swiper(".room-info", {
    navigation: {
        prevEl:'.prev',
        nextEl:'.next'
    }
})
