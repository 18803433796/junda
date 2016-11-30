$(function(){
var clientH=$(window).height();
    var num=0;
    var flag=true;
    touch.on("body","swipeup","#fullpage",function(e){
        if(!flag){
           return;
        }
        num++;
  //alert(1)
        //document.title=num;
        if(num==$("section").length){
            alert(1);
            num=$("section").length-1;
            document.title=num;
            return;
        }
        flag=false;
        $("#fullpage").css("marginTop",-num*clientH)
    })
    touch.on("body","swipedown","#fullpage",function(e){
        if(!flag){
            return;
        }
        num--;
        document.title=num;
        if(num==-1){
            num=0;
            document.title=num;
            return;
        }
        flag=false;
        $("#fullpage").css("marginTop",-num*clientH);
    })
    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
    })
})
