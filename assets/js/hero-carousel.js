document.addEventListener("DOMContentLoaded", function() {

    // 1) بنجيب عنصر الكاروسيل نفسه بالـ id بتاعه
    const heroCarousel = document.getElementById("carouselExampleFade");

    // 2) لو الصفحة دي مفيهاش كاروسيل أصلاً، نوقف من غير ما نكمل (تأمين)
    if (!heroCarousel) return;

    // 3) دالة صغيرة بتاخد الـ caption (النص) اللي المفروض يظهر، وتشغّل الحركة عليه
    function playCaptionAnimation(captionEl) {
        if (!captionEl) return;

        // بنشيل كلاس "animate-in" الأول (لو كان موجود من قبل) عشان نقدر نضيفه تاني
        captionEl.classList.remove("animate-in");

        // ".offsetWidth" ده "حيلة" بنستخدمها عشان نجبر المتصفح يعيد رسم العنصر فورًا
        // من غير السطر ده، المتصفح ممكن "يفتكر" إن الكلاس لسه موجود ومايشغلش الحركة تاني
        void captionEl.offsetWidth;

        // دلوقتي نضيف الكلاس تاني، فتشتغل حركة الـ fade-in-up من الأول
        captionEl.classList.add("animate-in");
    }

    // 4) لما الصفحة تفتح لأول مرة، شغّلي الحركة على أول سلايد (الـ active) على طول
    const firstCaption = heroCarousel.querySelector(".carousel-item.active .carousel-caption");
    playCaptionAnimation(firstCaption);

    // 5) بوتستراب بيبعت "حدث" (event) اسمه slide.bs.carousel لحظة ما السلايد يبدأ يتحرك
    //    الحدث ده بيجيلنا بيانات فيها e.relatedTarget = السلايد الجاي (اللي هيبقى active)
    heroCarousel.addEventListener("slide.bs.carousel", function(e) {
        const nextCaption = e.relatedTarget.querySelector(".carousel-caption");
        playCaptionAnimation(nextCaption);
    });

});