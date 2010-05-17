<%@ page language="java"
	import="java.util.*,com.jamesleeson.onlineStatistics.*"
	pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>Violet Ray by Free CSS Templates</title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<script type="text/javascript" src="js/jquery-1.4.2.js"></script>
<script type="text/javascript" src="js/s3Slider.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<link href="css/style.css" rel="stylesheet" type="text/css" />
</head>
<body>
 <div id="tipWin"  style="z-index:9999;">
            <table cellspacing="0" cellpadding="0" border="0" class="boxy-wrapper fixed" style="z-index: 1339; visibility: visible; left: 440px; top: 89.5px; opacity: 1;">
  <tbody>
    <tr>
      <td class="top-left"></td>
      <td class="top"></td>
      <td class="top-right"></td>
    </tr>
    <tr>
      <td class="left"></td>
      <td class="boxy-inner">
      	<div style="display: block;" class="boxy-content">
		<p>称呼:</p>
          <input type="text" id="username" value="匿名"/>
		  <p>内容:</p>
		  <textarea rows="15" id="message" cols="30"></textarea>
            <input type="button" value="留言" id="ok">
            <input type="button" value="取消" id="cancel">
          
        </div></td>
      <td class="right"></td>
    </tr>
    <tr>
      <td class="bottom-left"></td>
      <td class="bottom"></td>
      <td class="bottom-right"></td>
    </tr>
  </tbody>
</table>
			</div>
<div id="shadow" style="z-index:6666;">
</div>
 <div id="wrapper" style="z-index:3;">

 <div id="header">
 <div id="menu">
		<ul id="nav">
			<li><a href="#">首页</a></li>
			<li><a href="#">公司概况</a></li>
			<li><a href="#">业务范围</a></li>
			<li><a href="#">苗木基地</a></li>
			<li><a href="#">植物知识</a></li>
			<li><a href="#" id="">留言板</a></li>			
		</ul>
  </div>
 
	<!-- end #menu -->
	<div id="search">
		<form method="get" action="">
			<fieldset>
			<input type="text" name="s" id="search-text" size="15" />
			<input type="submit" id="search-submit" value="Search" />
			</fieldset>
		</form>
	</div>
	<!-- end #search -->
	 <div id="myheader" >
  	<div id="header_left"><img src="main_image/logo.gif"/></div>
    
	  <div id="header_right">
          <div id="s3slider">
              <ul id="s3sliderContent">
                  <li class="s3sliderImage">
                      <img src="head_images/h1.png" /><span>蓝花楹,别名 尖叶蓝花楹</span>
                  </li>
                  <li class="s3sliderImage">
                      <img src="head_images/h2.png" /><span>产地分布：原产于南美，我国南方一些省市早有引种</span>
                  </li>
				  <li class="s3sliderImage">
                      <img src="head_images/h3.png" /><span>形态特征：叶对生，2回羽状复叶，羽片通常在16对以上，每一羽片有小叶14-24对</span>
                  </li>
				  <li class="s3sliderImage">
                      <img src="head_images/h4.png" /><span>小叶狭矩圆形，先端锐尖，略被微柔毛。圆锥花序，花较大型，蓝色，花冠2唇形，5裂，长4-5厘米</span>
                  </li>
				  <li class="s3sliderImage">
                      <img src="head_images/h5.png" /><span>生长习性：好温暖气候，宜种植于阳光充足的地方</span>
                  </li>
				  <li class="s3sliderImage">
                      <img src="head_images/h6.png" /><span>对土壤条件要求不严，在一般中性和微酸性的土壤中都能生长良好</span>
                  </li>
                  <div class="clear s3sliderImage">
                  </div>
              </ul>
          </div>
		  </div>
  	</div>
</div>




  
	 <div id="mainContent">
		
	    <div id="content" class="showContent">1居中头部+导航+尾部——<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><a href="http://www.aa25.cn">标准之路www.aa25.cn</a></div>
		<div id="content">2列固定宽度居中头部+导航+尾部——<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><a href="http://www.aa25.cn">标准之路www.aa25.cn</a></div>
		<div id="content" >3列固定宽度居中头部+导航+尾部——<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><a href="http://www.aa25.cn">标准之路www.aa25.cn</a></div>
		<div id="content">4列固定度居中头部+导航+尾部——<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><a href="http://www.aa25.cn">标准之路www.aa25.cn</a></div>
		<div id="content">5列固定宽度居中头部+导航+尾部—<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>—<a href="http://www.aa25.cn">标准之路www.aa25.cn</a></div>
        <div id="content">
      
       		<div><input type="button" id="write" value="我要留言"/></div>
	   			
               <div id="contents">
                   <table>
                   </table>
               </div>
	   
	  <div id="ctrlPage">
		<a href="#" id="first">首页</a>
		<a href="#" id="previous">上页</a>
		<a href="#" id="next">下页</a>
		<a href="#" id="last">尾页</a>
		<span id="pageInfo"></span>
		第<input type="text" size="2" id="page" value="1"/>页
		<a href="#" id="go">跳转</a>
	</div>
	
	    </div>
  	</div>


<div id="footer">
	<p>Copyright &copy; MoonStudio All Rights Reserved.   |  在线人数：<%=SessionStatistics.getOnLineNum()%>  |  访问量：<%=ContextStatistics.getAllViewNum()%> </p>
 </div>
<!-- end #footer -->

</div>

	
	
</body>
</html>
