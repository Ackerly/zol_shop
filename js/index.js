var city = document.getElementsByClassName("city-name");
var city_ico = document.getElementsByClassName("ico-city");
var city_list = document.getElementsByClassName("city-list");
var ul = document.getElementById("nav-list");
var list = ul.getElementsByTagName("li");  
var nav = document.getElementsByClassName("nav-content");
var select_ul = document.getElementsByClassName("select-info");
var select_li = select_ul[0].getElementsByTagName("li");
var select_img = document.getElementsByClassName("toggle-img");
var toggle_img = select_img[0].getElementsByTagName("img");
//ico翻转
function ico_rotate(){
    var class_val = city_ico[0].getAttribute("class");
    var city_hover = document.getElementsByClassName("city-hover");
    //判断city是否存在
    if(city_hover.length !== 0){
        class_val = class_val.replace(" city-hover"," ");
        city_ico[0].setAttribute("class",class_val);
    }else{
        class_val = class_val.concat(" city-hover");
        city_ico[0].setAttribute("class",class_val);
    }
};
//显示隐藏
function toggle(className,num){
    var list = className[num].style.display;
    if(list == "block"){
        className[num].style.display = "none";
    }else{
        className[num].style.display = "block";
    };
}
//tab切换 循环绑定所有li实现
for(var i = 0;i<select_li.length;i++){
    select_li[i].onmouseover = function(){
        for(var k =0;k<select_li.length;k++){
            select_li[k].className = "";
        }
        this.className = "select-hover";
    }
};
//事件委托方式实现
(function(){
    select_ul[0].onmouseover = function(ev){
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        for(n=0;n<toggle_img.length;n++){
            if(select_li[n] == target ){
                var num = n;
                (function imgtoggle(){
                    for(l=0;l<toggle_img.length;l++){
                        toggle_img[l].style.display = "none";
                    }
                    toggle_img[num].style.display = "block";
                })()
            }
        }
    }
})();

//城市ico事件
city[0].addEventListener("mouseover",ico_rotate);
city[0].addEventListener("mouseout",ico_rotate);
//城市列表事件
city[0].addEventListener("mouseover",function(){toggle(city_list,0);});
city[0].addEventListener("mouseout",function(){toggle(city_list,0);});
city_list[0].addEventListener("mouseover",function(){toggle(city_list,0);});
city_list[0].addEventListener("mouseout",function(){toggle(city_list,0);});
//鼠标在那个li显示相应内容
ul.addEventListener("mouseover",function(ev){
    var ev = ev || window.event;
    var target = ev.target || ev.srcElement;
    for(i=0;i<list.length;i++){
        if(list[i] == target){
            var num = i;
            toggle(nav,num);
            nav[num].addEventListener("mouseover",function(){toggle(nav,num);})
        }
    }
});
ul.addEventListener("mouseout",function(ev){
    var ev = ev || window.event;
    var target = ev.target || ev.srcElement;
    for(i=0;i<list.length;i++){
        if(list[i] == target){
            var num = i;
            toggle(nav,num);
            nav[num].addEventListener("mouseout",function(){toggle(nav,num);})
        }
    }
});

