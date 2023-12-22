//get current Year
$('#year').text(new Date().getFullYear());


//init scroll spy
$('body').scrollspy({target: '#main-navbar'});

//smooth Scrolling
$('#main-navbar a').on('click', function(event){
    if(this.hash !== ""){
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
});
