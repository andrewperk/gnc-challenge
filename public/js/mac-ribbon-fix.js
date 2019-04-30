$(document).ready(function(){
    // Had mac/pc issue, this aligns ribbon on mac
    if (navigator.userAgent.match(/Macintosh/)) {
        $('.ribbon').addClass('mac');
        $('.ribbon .ribbon-inner').addClass('mac');
    }
});
