(function () {
    var owChang = document.getElementsByClassName('workChange');
    var oUl = document.getElementsByClassName('point')[0];
    var oLi = oUl.getElementsByTagName('li');
    var timer = null;
    var n = 0;

    console.log(owChang);
    console.log(oLi);

    if (timer) {
        clearInterval(timer);
        timer = null;
    }

    timer = setInterval(changeImg, 4000);

    function changeImg() {
        n++;
        if (n == owChang.length) n = 0;
        workChang(n);
    }

    function workChang(num) {
        for (let i = 0; i < owChang.length; i++) {
            /* owChang[i].style.display = 'none'; */
            owChang[i].style.opacity = 0;
            oLi[i].style.width = '15px';
            oLi[i].style.height = '15px';
        }

        owChang[num].style.opacity = 1;
        oLi[num].style.width = '20px';
        oLi[num].style.height = '20px';
    }

    for (let j = 0; j < oLi.length; j++) {
        oLi[j].onmouseover = function () {
            clearInterval(timer);
            workChang(j);
        }

        oLi[j].onmouseout = function () {
            n = j;
            timer = setInterval(changeImg, 4000);
        }
    }

    var oHeader = document.getElementById('header');
    var oHtop = document.getElementById('htop');
    window.onscroll = function(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if(scrollTop>635){
            oHeader.style.position="fixed";
            oHeader.style.top="0";
            oHeader.style.left="0";
            oHeader.style.zIndex=99;
            oHtop.style.opacity = 1;
        }else{
            oHeader.style.position="unset"
            oHtop.style.opacity = 0;
        }
    }

    oHtop.onclick = function(){
        scrollTo(0,0);
    }
    
})()