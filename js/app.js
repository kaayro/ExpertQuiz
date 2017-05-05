var app = {
    ready: function(){
        app.loading.show();
        app.init();
        //document.addEventListener('deviceready',app.init,false);
    },
    init: function(){
        lang.init(function(){app.loading.hide();},'lang');
    },
    loading: {
        show: function(){
            document.getElementById('loading').style.display = 'block';
        },
        hide: function(){
            document.getElementById('loading').style.display = 'none';
        }
    },
}
window.addEventListener('load',app.ready,false);