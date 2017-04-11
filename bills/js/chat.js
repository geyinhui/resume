/**
 * Created by Administrator on 2017/3/6.
 */
/**
 简易聊天js实现部分
 1、点击右边好友时，左上名字跟着变化
 2、点击发送时，左边中间内容跟着输出
 3、点击关闭时。聊天窗口隐藏，不占用文档流
 4、

 */
(function(){
    $(function(){
        //对话内容
        $('.xiaomingsend').click(function(){
            $('.chatcontainmid').append('<div class="xiaomingcontian">'+$('.content').val()+'<div>');
        });
        $('.xiaojiongsend').click(function(){
            $('.chatcontainmid').append('<div class="xiaojiongcontian">'+"小囧"+$('.content').val()+'<div>');
        });
        //点击关闭隐藏聊天窗口
        function closexiaoming(){
            $('.con_xioaming').hide();
        }
        $('.close_btn_xiaoming').click(function(){
            closexiaoming()
        });
        function closexiaojiong(){
            $('.con_xiaojiong').hide();
        }
        $('.close_btn_xiaojiong').click(function(){
            closexiaojiong()
        });
        //qq表情
        $('.emotion').qqFace({
                id: 'facebox',//表情ID
                assign:'saytext', //给输入框赋值
                path:'../images/face/'    //表情图片存放的路径
            });
        $("#sub").click(function() {
            var content = $("#content").val();
            $("#resulte").html(replace_em(content)); //转换成表情图片
            $("#content").val('');
        });
    });

})();
