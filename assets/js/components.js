const root = document.documentElement;

const animClass = ".anim";
const animInitClass = "anim-init";
const collapse = ".collapse-button";


root.className += " js";

function boxTop(id) {
    var boxOffset = $(id).offset().top;
    return boxOffset;
}

$(document).ready(function() {
    var target = $(animClass),
        windowHeight = $(window).height(),
        offset = windowHeight - windowHeight / 5

    function animScroll() {
        var documentTop = $(document).scrollTop();
        target.each(function() {
            if (documentTop > boxTop(this) - offset)
                $(this).addClass(animInitClass);
            if (documentTop + windowHeight < boxTop(this))
                $(this).removeClass(animInitClass);
        })
    }
    animScroll();

    $(".collapse").each(function() {
        $(this).click(() => {
            $(this).toggleClass("active");
            $(this).children(".collapse-content").slideToggle();
        })
    })

    $(document).scroll(function() {
        animScroll();
    })
})



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}