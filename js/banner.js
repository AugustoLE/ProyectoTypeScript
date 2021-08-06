$(document).ready(function(){
    var banner = $ ('#banner');
    function alturaBanner{
    function vpaltura = $(window).height();
    banner.css('height', vpaltura);
}
    alturaBanner();

    $(window).resize(alturaBanner);
});
