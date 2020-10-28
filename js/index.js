$(document).ready(function () {
    $("img").hover(function () {
        $(this).attr({ src: "img/img2.jpg", alt: "메인이미지" });

    },
        function () {
            $(this).attr({ src: "img/img1.jpg", alt: "오프닝이미지" });

        },
    );


});


