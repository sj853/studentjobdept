function jtrim(s) {
  var i,b=0,e=s.length;
  for(i=0;i<s.length;i++) if(s.charAt(i)!=' '){b=i;break;}
  if(i==s.length) return "";
  for(i=s.length-1;i>b;i--) if(s.charAt(i)!=' '){e=i;break;}
  return s.substring(b,e+1);
}

function CheckNumeral(s){
  if(s!=""){
    for(var i=0;i<s.length;i++){
      if(s.charAt(i)>"9" || s.charAt(i)<"0"){
        //alert("请输入正确的数字。");
        return false;
      }
    }
  }
  return true;
}

function isExist(e) {
  if (eval(e) == undefined) {
    return false;
  }
  return true;
}

function ismail(str) {
  if(str.indexOf('@')<1) return false;
  var a;a=new Array(2);
  a=str.split('@');if(a.length!=2) return false;
  username=a[0];servername=a[1]
  if(username.length<2) return false;
  if(servername.length<6) return false;
  if(servername.indexOf('.')<1) return false;
  return true;
}

function isdate(str) {
  var a,b
  a=new Array(10)
  a=str.split('-');
  if(a.length!=3){
    return false;
  }

  b=new Array(13);b[1]=31;b[2]=28;b[3]=31;b[4]=30;b[5]=31;b[6]=30;b[7]=31;b[8]=31;b[9]=30;b[10]=31;b[11]=30;b[12]=31;y=a[0];m=a[1];d=a[2];
  if(!(IsN(y,1900,2069))){
    return false;
  }
  if(!(IsN(m,1,12))){
    return false;
  }
  if((((y%4==0)&&(y%100!=0))||(y%400==0))&&(m==2)){
    if(!(IsN(d,1,29))){
      return false;
    }
  }
  else{
    if(!(IsN(d,1,b[m]))){
      return false;
    }
  }
  return true;
}

function IsN(x,l,u) {
  if(x<l){
    return false;
  }
  else{
    if(x>=l){
      if(x>u){
        return false;
      }
      else{
        return true;
      }
    }
    else{
      return false;
    }
  }
}
