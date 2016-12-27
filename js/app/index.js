/**
 * Created by KAYE on 2016/12/26 0026.
 */
$(function(){
    var $pageLinks=$(".pageLink");

    $(".wuli-footer").on("click",".navLink",function(){
        var $this=$(this);
        var index=$this.index();
        console.log(index);
        $this.addClass("active").siblings().removeClass("active");
        $($pageLinks[index]).addClass("cur").siblings().removeClass("cur");
    })

})