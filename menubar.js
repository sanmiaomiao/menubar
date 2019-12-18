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
	 menucolor,//主菜单背景色
	 submenucolor //子菜单背景色
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
 * $(document).ready(function(){
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
			$(document).MenuBar(menulist,'.cover');})
 * 
 * */
		
		(function($){
			//1.定义jquery的扩展方法MenuBar
			$.fn.MenuBar=function(Option,selector,menucolor,submenucolor){
				console.log('menubar')
				//默认参数
				var menulist=[{
					title:'语文',
					submenulist:['1','2','3']
				},{
					title:'数学',
					submenulist:['1','2','3']
				},{
					title:'英语',
					submenulist:['1','2','3']
				},];
				var _menucolor={backgroundColor:'#e73b3b'};
				var _submenucolor={backgroundColor:'red'};
				//合并参数
				menulist=$.extend(menulist,Option)
			 	_menucolor=$.extend(_menucolor,menucolor);
				_submenucolor=$.extend(_submenucolor,submenucolor) 
				 $.fn.MenuBar.methods['init'](menulist,selector,_menucolor,_submenucolor);
				return $.fn.MenuBar.methods['ShowHide']();
			}			
			
			//定义MenuBar的方法
			$.fn.MenuBar.methods={
				init:function(menulist,selector,_menucolor,_submenucolor){
					console.log('init')
					var outer=document.createElement('div');
					$(selector)[0].appendChild(outer);
					outer.className='outer';
					menulist.map((item,index)=>{
						var menu=document.createElement('div');//<div class="menu" id='1'>menu item1<div>
						menu.className='menu';
						menu.id=index+1;
						console.log(_submenucolor)
						menu.style.backgroundColor=_menucolor.backgroundColor;
						var menuspan=document.createElement('div');
						menuspan.innerHTML=item.title;
						menuspan.className='menuspan'
						menuspan.id='s'+index;
						menu.appendChild(menuspan)
						outer.appendChild(menu);
						if(item.submenulist){
							item.submenulist.map(subitem=>{
								var submenu=document.createElement('div');//<div class="submenu">submenu1 item2</div>
								submenu.className='submenu';
								submenu.innerHTML=subitem;
								submenu.style.backgroundColor=_submenucolor.backgroundColor;
								menu.appendChild(submenu)
								
							})
						}
					})
					
				},				
				ShowHide:function(){
					console.log('sh')
					//需要传入的参数$('#1') $('#1 .submenu') $('#2') $('#2 .submenu') $('#3') $('#3 .submenu') $('div') '.outer'
					$('#s0').click(function(){
						console.log('点击')
						console.log($('#1 .submenu')[0].style.display)
						var a=''
								$('#1 .submenu')[0].style.display===''?a='block':a=''
						$('#1 .submenu').css({
							'display':a
						})
					})
					$('#s1').click(function(){
						console.log('点击')
						console.log($('#2 .submenu')[0].style.display)
						var a=''
								$('#2 .submenu')[0].style.display===''?a='block':a=''
						$('#2 .submenu').css({
							'display':a
						})
					})
					$('#s2').click(function(){
						console.log('点击')
						console.log($('#3 .submenu')[0].style.display)
						var a=''
								$('#3 .submenu')[0].style.display===''?a='block':a=''
						$('#3 .submenu').css({
							'display':a
						})
					})
					$('div').not('.outer').not('.cover').hover(function(){
						$(this)[0].style.opacity=0.7
					},function(){
						$(this)[0].style.opacity=1
					})
					
			}}
		})(jQuery)