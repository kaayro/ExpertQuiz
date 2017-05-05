var app = {
    ready: function(){
        app.init();
        //document.addEventListener('deviceready',app.init,false);
    },
    init: function(){
        var ln = x=window.navigator.language||navigator.browserLanguage;
        alert(ln);
    }
}
window.addEventListener('load',app.ready,false);