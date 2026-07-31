  const button = document.getElementById("scrollbtn");
        window.onscroll = function () {
            if (window.scrollY <= 300) {
                button.style.display = "none";
            } else {
                button.style.display = "block";
            }
        }

    button.onclick= function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
}