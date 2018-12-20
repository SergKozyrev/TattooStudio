$(document).ready(function () {
    $().fancybox({
        selector: '.fancy-box .fancy-img',
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close"
        ],
        loop: true,
        keyboard: true
    });
});