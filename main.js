//cargar el service worker

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').then(function (registration) {
          console.log('Service worker successfully registered on scope', registration.scope);
      }).catch(function (error) {
          console.log('Service worker failed to register');
      });
  });
}

//Scroll suavisado
$(function (){
    $("#menu a").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        })
        return false;
    });
});