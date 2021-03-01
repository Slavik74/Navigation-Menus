function openPage(caption, showmap = false) {

    w = 500;
    h = 500;

    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    OpenWindow = window.open('page.html');

    OpenWindow.onload = function() {
        OpenWindow.document.getElementById("pageheader").innerHTML = caption;

        if (showmap) {
            OpenWindow.document.getElementById("map").innerHTML =
                '<div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://yt2.org/es/youtube-to-mp3-ALeKk00qEW0sxByTDSpzaRvl8WxdMAeMytQ1611842368056QMMlSYKLwAsWUsAfLipqwCA2ahUKEwiikKDe5L7uAhVFCuwKHUuFBoYQ8tMDegUAQCSAQCYAQCqAQdnd3Mtd2l6"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div>';
        }
    };
}