//自适应iframe的js
//父：
//<script language="javascript">
//	  try{document.domain=(document.domain||"").replace(/^[^.]*./,'')}catch(e){};
//</script>
//父：<script>resizeIframe('ks_iframe');</script>
//子：
//<script language="javascript">
//	  try{document.domain=(document.domain||"").replace(/^[^.]*./,'')}catch(e){};
//</script>

function resizeIframe(id){
  if(!window["resizeIframe"+id]){window["resizeIframe"+id]="running";_resizeIframe(id);}
}

function _resizeIframe(id){
	try{
	    setTimeout("_resizeIframe('"+id+"');",333);
	    var iframe=document.getElementById(id);
		if (iframe && !window.opera){
			if (iframe.contentDocument&& iframe.contentDocument.body && iframe.contentDocument.body.offsetHeight)
			iframe.height = iframe.contentDocument.body.offsetHeight;
			else if (iframe.Document&& iframe.Document.body && iframe.Document.body.scrollHeight)
			iframe.height = iframe.Document.body.scrollHeight;
		}
	}catch(err){
	  iframe.height=400;
	}
}