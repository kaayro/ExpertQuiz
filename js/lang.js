var lang = {
    ln: null,
    init: function(callback,folder){
        var ln = x=window.navigator.language||navigator.browserLanguage;
        lang.ln = ln.substr(0,2);
        lang.callback = callback;
        lang.folder = folder;
        lang.select();
    },
    select: function(){
        var xhr = new XMLHttpRequest();
 
        xhr.open("GET","js/"+lang.folder+"/"+lang.ln+".json",true);
        xhr.send();
 
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 404){
                    lang.ln = 'en';
                    lang.select();
                }else{
                    lang.text = JSON.parse(xhr.responseText);
                    lang.writeText();
                }
            }
        };
    },
    writeText: function(){
        var itm = document.querySelectorAll('.lang-item');
        for(i=0;i<itm.length;i++){
            var item = itm[i];
            var data = item.getAttribute('data-lang');
            data = data.split('&');
            item.innerHTML = eval("lang.text[data[0]]."+data[1]);
        }
        lang.callback();
    }
}