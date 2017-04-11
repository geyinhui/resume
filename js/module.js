var myresume = angular.module('myResume',[]);
myresume.controller('resumeControl',function($scope){
    $scope.gyh = {
        name : '葛银辉',
        sex : '男',
        school: '集美大学诚毅学院',
        major : '通信工程',
        nowAddress : '福州仓山区',
        nativePlace: '邵武',
        tel: 18850566051,
        email: '824026740@qq.com',
        skill: [
            '熟练使用html、css，熟悉html5、css3;',
            '熟练使用javaScript,了解闭包、原型链;' ,
            '熟练使用jQuery、掌握Ajax的基本交互使用;',
            '熟练使用Bootstrap;' ,
            '掌握AngularJs的一些基本使用' ,
            '了解Node.js;' ,
            '会使用前端构建工具Webpack;' ,
            '了解前端模块化的概念、思想'
        ],
        workPlaces:[
            {
                companyName : '智联招聘福州分公司',
                time : '2016/11-2017/04',
                workPost : '网络管理员',
                workDuty : '机房建设、网络维护、桌面运维、员工培训'
            },
            {
                companyName : '厦门华帆科技有限公司',
                time : '2016/03-2016/09',
                workPost : '前端页面工程师',
                workDuty : '修改程序的Bug、参与一些小项目'
            },
            {
                companyName : '厦门姚明织带饰品有限公司',
                time : '2015/06-2016/03',
                workPost : '网络管理员',
                workDuty : '日常网络设备、打印设备的维护、员工的上网行为管理'
            }
            ],
        project: [
            {
                projectName : '个人小项目',
                projectAddress: 'https://geyinhui.github.io/resume/simple/index.html',
            },
            {
                projectName : '账单系统',
                projectAddress: 'https://geyinhui.github.io/resume/index.html',
            },
			{
                projectName : '登录验证',
                projectAddress: 'https://geyinhui.github.io/resume/index.html',
            },
			{
                projectName : '手机端页面',
                projectAddress: 'https://geyinhui.github.io/resume/mobile/index.html',
            }
        ]

    };
});
myresume.directive('zwpj',function(){
    return{
        restrict : 'EA',
        template : '<div>有良好的思维和学习能力，敢于接受新鲜事物的挑战；' +'</br>'+
        '用严谨的态度去做事，乐观，自信，敢于接受新的挑战，有良好的抗压能力，责任心强；' +'</br>'+
        '做事不马虎，有良好的团队精神、良好的纪律性；' +'</br>'+
        '热爱前端技术，平常喜欢看些书籍，逛逛一些技术网站</div>'

    }
});
