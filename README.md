# menubar
一个简易菜单栏jquery插件，可自定义背景颜色

/**
 * 1.本插件为jquery插件
 * 2.param{
	Option:[{
	 	title:'语文',
	 	submenulist:['1','2','3']
	 },{
	 	title:'数学',
	 	submenulist:['1','2','3']
	 },{
	 	title:'英语',
	 	submenulist:['1','2','3']
	 },],//菜单列表
	 selector:'.cover'//菜单栏最外层选择器
	 menucolor={backgroundColor:'#e73b3b'},//主菜单背景色
	 submenucolor={backgroundColor:'red'} //子菜单背景色
 }
 * 
 * 3.使用示例
 * 
 * 引入：
 * 		<script src="jquery.js"></script>
		<script src="menubar.js"></script>
		<link href="menubar.css" rel="stylesheet"/>
 * html:
 * <div class="cover"></div>
 * 
 * js:
 *$(document).ready(function(){
			console.log('ready')
			var menulist=[{
				title:'手机',
				submenulist:['iphone','小米','华为']
			},{
				title:'电脑',
				submenulist:['thinkpad','联想','神舟']
			},{
				title:'相机',
				submenulist:['canon','科达']
			},];
			var menucolor={backgroundColor:'blue'};
			var submenucolor={backgroundColor:'pink'};
			$(document).MenuBar(menulist,'.cover', menucolor,submenucolor);})
			
 * 
 * */
