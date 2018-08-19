
!function(){
    var code1=`
    /*首先准备好皮卡丘的皮*/
    #preview {background: #f2e55a;}
    /*小小的鼻子*/
    .nose {
        border-width: 12px 13px;
        border-style:solid;
        border-radius: 50%;
        border-color: #000 transparent transparent transparent;
        position: absolute;
        top: 20px;
        left: 50%;
        margin-left: -12px;
    }
    /*接下来画眼睛*/
    .eye {
        background: #2e2e2e;
        width: 45px;
        height: 45px; 
        border: 2px solid #000;
        border-radius: 50%;
        position: absolute;
    }
    /*我的眼睛里都是你，甜甜蜜蜜you love 大米*/
    .eye::before {
        background: #fff;
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        position: absolute;
        left: 5px;
    }
    /*左边的眼睛在左边*/
    .eye.left {
        right: 50%;
        margin-right: 90px;
    }
    /*右边的眼睛在右边*/
    .eye.right {
        left: 50%;
        margin-left: 90px;
    }
    /*接下来开始画皮卡丘要害羞了*/
    .cheek {
        background: #d25927;
        position: absolute;
        width: 68px;
        height: 68px;
        border: 3px solid #000;
        border-radius: 50%;
        top:85px;
    }
    /*嘿嘿，左脸颊在左边*/
    .cheek.left {
        right: 50%;
        margin-right: 116px;
    }
    /*右脸颊在右边*/
    .cheek.right {
        position: absolute;
        left: 50%;
        margin-left: 116px;
    }
    /*性感的上嘴唇马上就要出现啦*/
    .upperlip {
        background: #f2e55a;
        border: 3px solid #000;
        position: absolute;
        width: 80px;
        height: 20px;
        top: 52px;
    }
    /*左边的嘴唇*/
    .upperlip.left {
        right: 50%;
        border-bottom-left-radius: 40px 20px;
        border-top: none;
        border-right: none;
        transform: rotate(-20deg);
    }
    /*右边的嘴唇*/
    .upperlip.right {
        left: 50%;
        border-bottom-right-radius: 40px 20px;
        border-top: none;
        border-left: none;
        transform: rotate(20deg);
    }
    /*接下来开始画下嘴唇*/
    
    .lowerlip {
        background: #7f361c;
        border: 2px solid #000;
        width: 300px;
        height: 3500px;
        border-radius: 200px/2000px;
        position: absolute;
        left: 50%;
        bottom: 0;
        margin-left: -150px;
        overflow: hidden;
    }
    /*哇哇哇,小舌头*/
    .lowerlip::before {
        background: #d66e62;
        position: absolute;
        left: 50%;
        bottom: -10px;
        margin-left: -50px;
        content: "";
        display: block;
        width: 100px;
        height: 100px;
        border-radius: 50%;   
    }
    /*我萌吗？*/
    /*我可是会放电的奥*/
    /*你要想清楚了奥*/
    /*我不管我就是天下第一萌的皮卡丘，啾啾啾啾*/
    `;
    /**/
    var timer=30;

    WriteCode(code1,()=>{});

    function WriteCode(code,fn){
        let n=0;
        let id=window.setTimeout(function fn(){
        n++;
        styleCode.innerHTML=code.slice(0,n);
        codeTag.innerHTML=code.slice(0,n);
        codeTag.scrollTop=10000;
        if(n>=code.length){
            window.clearTimeout(id);
            fn.call();
        }else{
            setTimeout(fn,timer)   //递归调用，用setTimeout来模仿setInterval.setInterval的时间一旦设定无法改变。
        }
        },timer);
    }

    var $buttons=$('#buttons');
    $buttons.on('click','button',(e)=>{
        var $button=$(e.currentTarget);
        $button.addClass('active').siblings('.active').removeClass('active');
        var speed=$button.attr('data-speed');
        if(speed==='slow'){
            timer=60;
        }else if(speed==='middle'){
            timer=30;
        }else{
            timer=10;
        }
    });

}.call();



