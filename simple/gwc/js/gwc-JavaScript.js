var goodstable = document.getElementById("goodstable");
var goodsname = document.getElementById("goodsname");
var goodsprice = document.getElementById("goodsprice");
var selAll = document.getElementById("selAll");
var countsnum = document.getElementsByName("counts");//输入框数量
var simpleprice =document.getElementsByName("simpleprice");//单价节点
var simplemoney = document.getElementsByName("simplemoney");//单个物品金额节点
var totalmoney = document.getElementById("totalmoney");//选中应付款金额节点
var selectgoods = document.getElementsByName("selectgoods");//选择框
var numall= document.getElementById("numall");
//创建表单元素
    function addgoods(){
        //var tableRow = goodstable.insertRow(goodstable.rows.length);//之前放在在，创建出错时行数会有问题
        //正则匹配
        //商品名字符不能超过15个，不能为空
        var goodsnameReg = /^(.){1,15}$/gi;
        var goodspriceReg = /^(\d){1,15}$/g;
        if(!goodsnameReg.exec(goodsname.value)){
            alert("商品名不能为空，且不要超过15个字符");
            goodsname.value='';
            goodsprice.value='';
        }
        else if(!goodspriceReg.exec(goodsprice.value)){
            alert("商品的价格必须位数字,且不能为空");
            goodsname.value='';
            goodsprice.value='';
        }
        else{
            var tableRow = goodstable.insertRow(goodstable.rows.length);
            tableRow.insertCell(0).innerHTML='<input type="checkbox" name="selectgoods" onclick="selectsimple(this)"/>';
            tableRow.insertCell(1).innerHTML=goodsname.value;//商品名
            tableRow.insertCell(2).innerHTML='<span name="simpleprice">'+goodsprice.value+'</span>';//单价
            tableRow.insertCell(3).innerHTML='<input type="button" value="-" id="jianyi" onclick="reducenum(this)"/>'+' <input type="text" value="1" style="width: 60px;text-align: center" name="counts" onkeyup="zhenginteger(this)"/>'+' <input type="button" value="+" id="jiayi"  onclick="addnum(this)"/>';
            tableRow.insertCell(4).innerHTML='<span name="simplemoney">'+goodsprice.value+'</span>';//金额
            tableRow.insertCell(5).innerHTML='<input type="button" class="btn btn-danger" value="删除该货物"  onclick="delgoods(this)"/>';
            document.getElementById("hidetext").style.visibility="hidden";//底部隐藏
            goodsname.value='';
            goodsprice.value='';
        }
    }
//删除商品
    function delgoods(r) {
        var i=r.parentNode.parentNode.rowIndex-1;//获取表中的行所在位置
        document.getElementById('goodstable').deleteRow(i);
        //alert(goodstable.rows.length);
        if(goodstable.rows.length==0){
            document.getElementById("hidetext").style.visibility="visible";//底部显示
        }
        selectsimple(r);

    }
//全选
function setSelectAll() {
    //alert("haha");
    var obj = document.getElementsByName("selectgoods");
    if (document.getElementById("selectAll").checked == true){
        for (var j = 0; j< obj.length; j++) {
            obj[j].checked = true;
            //数量求和
            var sumall =0;
            var sumallmoney=0;
            for(var i=0;i< countsnum.length;i++){
                sumall += parseInt(countsnum[i].value);
                sumallmoney += (parseInt(countsnum[i].value))*(parseInt(simpleprice[i].innerHTML));
            }
            numall.innerHTML = '数量：'+sumall;
            totalmoney.innerHTML ='总计：'+ sumallmoney;
        }
    }
    else {
        for (var i = 0; i < obj.length; i++) {
            obj[i].checked = false;
            numall.innerHTML = '数量：'+0;
            totalmoney.innerHTML ='总计：'+0.00;
        }
    }


}
//数量加减
    function addnum(r){
        var i=(r.parentNode.parentNode.rowIndex)-1;//获取表中的行所在位置
        var oldvalue = countsnum[i].value;//旧数值
        var newvalue = parseInt(oldvalue) + 1;//点击后的新数值
        countsnum[i].value=newvalue;//新值根据点击事件赋给输入内容+1
        // 单个物品价格求和
        oldsimpleprice = parseInt(simpleprice[i].innerHTML);//获取当前行单价数值
        var newsimpleprice = parseInt(oldsimpleprice) *(countsnum[i].value);//当前行数量变动后新的金额
        simplemoney[i].innerHTML=newsimpleprice;
        // 小于0 数字处理
        if( newvalue < 0 ){
            countsnum[i].value= 0;
        }
        //单选数量和价格的求和
        selectsimple(r);
    }
    function reducenum(r){
        var i=(r.parentNode.parentNode.rowIndex)-1;//获取表中的行所在位置
        var oldvalue = countsnum[i].value;
        //alert(oldvalue);
        var newvalue = parseInt(oldvalue) - 1;
        countsnum[i].value=newvalue;
        oldsimpleprice = parseInt(simpleprice[i].innerHTML);//获取当前行单价数值
        var newsimpleprice = parseInt(oldsimpleprice) * (countsnum[i].value);
        simplemoney[i].innerHTML=newsimpleprice;
    // 小于0 数字处理
        if( newvalue < 0 ){
            countsnum[i].value = 0;
            simplemoney[i].innerHTML=0
        }
        //单选数量和价格的求和
        selectsimple(r);
    }
//监听事件
    //input输入必须为整数正则
    function zhenginteger(r){
        var i=(r.parentNode.parentNode.rowIndex)-1;//获取表中的行所在位置
        var countsReg = /^(\d){1,15}$/g;
        if(!countsReg.exec(countsnum[i].value)){
                alert("请输入数字");
            }
        else {
            // 单个物品价格求和
            oldsimpleprice = parseInt(simpleprice[i].innerHTML);//获取当前行单价数值
            var newsimpleprice = parseInt(oldsimpleprice) *(countsnum[i].value);//当前行数量变动后新的金额
            simplemoney[i].innerHTML=newsimpleprice;
        }
    }
//单选数量和价格的求和
function selectsimple(r){
    var checkedallsum =0;
    var checkedallprice=0;
    for (var i = 0; i <selectgoods.length; i++) {
        if (selectgoods[i].type == "checkbox") {
            if (selectgoods[i].checked) {
                checkedallsum += parseInt(countsnum[i].value);
                checkedallprice +=parseInt(simpleprice[i].innerHTML) *(countsnum[i].value);
                //alert(checkedallsum);
            }
        }
    }
    //alert(selectgoods.length);
    numall.innerHTML = '数量：'+checkedallsum;
    totalmoney.innerHTML ='总计：'+checkedallprice;
}





