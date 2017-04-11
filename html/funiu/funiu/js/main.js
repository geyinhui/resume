/**
 * Created by HJK on 2017/1/22.
 */
//show main navbar
function showMainBar() {
    if($("#mainNavbar").hasClass("hidden-xs")){
        $("#mainNavbar").removeClass("hidden-xs");
    }else{
        $("#mainNavbar").addClass("hidden-xs");
    }

}