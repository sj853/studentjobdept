var currentPage = 1;
var totalPage = 1;
var contentVal = null;
var nameVal = null;
$(document).ready(function(){
	
 
  
$('#s3slider').s3Slider({ 
      timeOut: 5000 
   });


$("#nav a").each(function(index){
	$(this).click(function(){
	$("div.showContent").hide().remove("showContent");
	var currentContent = $("#mainContent div").eq(index);
	if(currentContent.index()==5){
		getInfo();
	}
	currentContent.animate({
		opacity:'show'
	},2000).addClass("showContent");
	});
});
	
	
	$("#write").click(function(){
		$(window.body).attr("scroll","no");
		$("#shadow").show();
		$("#tipWin").show();
			});
	
	$("#cancel").click(function(){
		$("#shadow").hide();
		$("#tipWin").hide();
		$(document.body).attr("scroll","yes");
	});
	
	
	 $("#ok").click(function(){
		nameVal = $("#username").val();
        contentVal = $("#message").val();
        getInfo();
		$("#shadow").hide();
		$("#tipWin").hide();
		$(document.body).attr("scroll","yes");
    });
	
	
	$("#first").click(function(){
		currentPage = 1;
		getInfo();
	});
	
	$("#next").click(function(){
		if(currentPage==totalPage){
			return;
		}
		currentPage++;
		
		getInfo();
	});
	
	$("#previous").click(function(){
		
		if(currentPage==1){
			return;
		}
		currentPage--;
		getInfo();
	});
	
	$("#last").click(function(){
		currentPage = totalPage;
		getInfo();
	});
	
	$("#go").click(function(){
		var getPage = $("#page").val();
		if(getPage>=1 && getPage<=totalPage){
			currentPage = getPage;
			getInfo();
		}
		else{
			alert("你输入的页数不合法!");
		}
		
	});
	
		
});

function getInfo(){
	$("#contents tr").hide();
	$.post("servlet/JsonServlet", {
			name:nameVal,
            content: contentVal,
			page:currentPage
        }, function(data){
            totalPage = data.pages;
			
            $(data.jarray).each(function(i){
                var content = data.jarray[i].content;
				var time = data.jarray[i].time;
				var name = data.jarray[i].name;
                $("#contents table").append("<tr><td>"+name+"</td><td>"+content+"</td><td>"+time+"</td></tr>");
			    $("#pageInfo").html(currentPage+"/"+totalPage+"页");
            });
		        contentVal = null;
				nameVal = null;
        }, "json");
}




