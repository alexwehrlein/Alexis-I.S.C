//cargar el service worker

if ("serviceWorker" in navigator) {
    console.log("Puedes usar los service worker")
    navigator.serviceWorker.register('js/sw.js')
    .then(res => console.log('service worker cargado correctamente' , res))
    .catch(err => console.log('Service worker no se a podido registrar' , err))

} else {
    console.error("no puedes")
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