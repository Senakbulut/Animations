

        var resim=document.getElementsByClassName("resim");
        var kutucuk=document.getElementsByTagName("li");
        var index=0;
     
        galeri();
        basla();
        function galeri(){
            if(index>= resim.length){ //iflerle kontrol ettim indexleri
                index=0;
            }
            else if(index < 0){
                index=resim.length-1;
            }
            for(i=0;i<resim.length;i++){
                resim[i].classList.remove("aktif");
                kutucuk[i].classList.remove("aktiflist");
            }
            resim[index].classList.add("aktif");
            kutucuk[index].classList.add("aktiflist");
        }
        
        function ileri(){
            index++;
            galeri();
        }
        function geri(){
            index--;
            galeri();
        }
        function dur(){
            clearInterval(sure);
        }
        function basla(){
            sure=setInterval(ileri,2000);
        }