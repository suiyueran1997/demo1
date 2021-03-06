var swiper = new Swiper(".swiper-container", {
    autoplay: {delay: 5e3, disableOnInteraction: !1},
    speed: 700,
    allowTouchMove: !1,
    lazy: {loadPrevNext: !0, loadPrevNextAmount: 3},
    centeredSlides: !0,
    spaceBetween: 50,
    slidesOffsetBefore: 40,
    loop: !0,
    slidesPerView: "auto",
    on: {
        slideChangeTransitionEnd: function () {
            this.slides.transition(this.params.autoplay.delay + this.params.speed).transform("translate3d(-60px, 0, 0)")
        }, slideChangeTransitionStart: function () {
            this.slides.transition(this.params.speed).transform("translate3d(0, 0, 0)")
        }
    },
    pagination: {
        el: ".swiper-pagination", clickable: !0, renderBullet: function (e, n) {
            return '<div class="' + n + '"><span></span><i></i></div>'
        }
    },
    navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}
});
window.onresize = function () {
    swiper.update()
};
let demo = 123123;
demo = 4564543;
