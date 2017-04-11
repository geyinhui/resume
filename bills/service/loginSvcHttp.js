/**
 * Created by Administrator on 2017/3/6.
 */
var http = require('http');
var util = {};
var loginUser = {
    users:[],
    addUser : function(username,token){
        var o = {
            username:username,
            token:token
        };

        loginUser.users.push(o);
    },
    getUserName:function(token){
        var user = {};
        loginUser.users.forEach(function(_this){
            if( _this.token == token ){
                user = _this;
            }
        });

        return user.username;
    }
};


util.getGETDate = function (url) {
    var reg_url = /^[^\?]+\?([\w\W]+)$/,
        reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
        arr_url = reg_url.exec(url),
        ret = {};
    if (arr_url && arr_url[1]) {
        var str_para = arr_url[1], result;
        while ((result = reg_para.exec(str_para)) != null) {
            ret[result[1]] = result[2];
        }
    }
    return ret;
};

util.getRouter = function (url) {
    var reg_url = /^[^\?]+\?([\w\W]+)$/
    var arr_url = reg_url.exec(url);

    if (!arr_url) {
        return url;
    }
    return arr_url[0].replace("?" + arr_url[1], "");
};

function loginSvcHTTP(req, res) {

    var fs = require('fs'); //加载node.js处理json的相关模块

    fs.readFile('F:accounting/web2/json/user.json', function (err, data) {//指定json.json文件路径
        if (err) throw err;
        var jsonObj = JSON.parse(data); //转换成json对象

        var haveUser = false;
        jsonObj.forEach(function (_this) {
            haveUser = haveUser || (req.password == _this.password && _this.username == req.username );
        });

        if (haveUser) {
            // 创建AccessToken
            var token= (new Date()).getTime();

            loginUser.addUser(req.username,token);

            res.write(JSON.stringify({
                state: 0,
                info: "登录成功",
                entity: {
                    username: req.username,
                    password: req.password,
                    token:token
                }
            }));
            console.log("用户尝试登录，成功");
        } else {
            res.write(JSON.stringify({
                state: -1,
                info: "账户密码不正确",
                entity: {}
            }));
            console.log("用户尝试登录，失败");
        }
        res.end();
    })


}

function getUserInfo(req, res){
    var fs = require('fs'); //加载node.js处理json的相关模块

    fs.readFile('F:/login/json/user.json', function (err, data) {//指定json.json文件路径
        if (err) throw err;
        var jsonObj = JSON.parse(data); //转换成json对象

        var userInfo = null;

        jsonObj.forEach(function (_this) {
            //haveUser = haveUser || (req.password == _this.password && _this.username == req.username );
            var username = loginUser.getUserName(  req.token );
            if(username){
                if(_this.username == username){
                    userInfo = _this;
                    console.log( username + ",查询用户信息成功");

                }
            }
        });

        if( userInfo ){
            delete userInfo.password;
            res.write(JSON.stringify({
                state: 0,
                info: "查询用户信息成功",
                entity:userInfo
            }));
            res.end();
        }else{
            console.log( "查询用户信息失败！");
            res.write(JSON.stringify({
                state: 99,
                info: "未登录",
                entity:null
            }));
            res.end();
        }
    });
}


http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-type': 'application/json'
    });

    router = function () {
        return util.getRouter(req.url);
    }();
    var reqDate = function () {
        var data = util.getGETDate(req.url);
        return data;
    };
    console.log(router, reqDate());
    switch (router) {
        case "/loginSvc":
            loginSvcHTTP(reqDate(), res);
            return "/login";
        case "/loginSvc2":
            loginSvcHTTP(reqDate(), res);
            return "/login";
        case "/getUserInfoSvc":
            getUserInfo(reqDate(), res);
            return "getUserInfoSvc";
        default :
            res.write("can not find your server");
    }

    res.end();

}).listen(8080);


console.log("服务启动成功！端口号：8080111");