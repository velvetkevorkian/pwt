$(document).ready(function(){
    $('.graphic h4, .date h2, .content h3, .djs h2').fitText();
    $('.djs h5').fitText(1.5);
    
    var time= new Date(2013, 11-1, 7, 21, 0, 0);
    
    $('#countdown').countdown({
        until: time 
    });
    
    setupLink($("[href='#what']"), $('#what'));
    setupLink($("[href='#drinksText']"), $('#drinksText'));
    setupLink($("[href='#pensText']"), $('#pensText'));

    
    
});


function setupLink(theLink, theTarget) {
    theLink.click(function (e) {
        e.preventDefault();
        var s = theTarget.offset().top-200;
        $("body, html").animate({
            scrollTop: s
        }, 500);
    });
}