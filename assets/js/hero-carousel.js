document.addEventListener("DOMContentLoaded", function() {


    const heroCarousel = document.getElementById("carouselExampleFade");

   
    if (!heroCarousel) return;

    
    function playCaptionAnimation(captionEl) {
        if (!captionEl) return;

        
        captionEl.classList.remove("animate-in");

        
        void captionEl.offsetWidth;

        
        captionEl.classList.add("animate-in");
    }

    
    const firstCaption = heroCarousel.querySelector(".carousel-item.active .carousel-caption");
    playCaptionAnimation(firstCaption);

    
    heroCarousel.addEventListener("slide.bs.carousel", function(e) {
        const nextCaption = e.relatedTarget.querySelector(".carousel-caption");
        playCaptionAnimation(nextCaption);
    });

});
