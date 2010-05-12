//$Id: checkForm.js,v 1.2 2005/12/20 09:47:57 yijiexing Exp $
//version 1.2 ����˶�form�Ĳ�ѯ���������Զ�ƴװ�Ĺ���getQueryString();
//	��select radio checkbox��Ԫ�������µĶ���
//	���v1.2b������˼���bug


//2005-6-7 ���жϳ��ȵķ����ĳ��ж��ֽڳ��ȣ�һ������ռ2���ֽ�  ivanlin
/**
 * ����ύ��form��ÿ����Ԫ���Ƿ������дҪ��
 * @fm ��Ҫ����formԪ�ء�
 * @return ���form�����б�Ԫ�ض�����Ҫ�󣬽�����true��
 * ���򽫻ᱨ�治���ϵ�ԭ��ͬʱ����false��
 * ʾ����
 * <form onsubmit="return checkForm(this)">
 *  	<input type=submit>
 *  	<input name=email title="����д�ʼ���ַ~email!">
 * </form>
 * ˵����
 * ��form��Ԫ�ص�title������ָ���˱�Ԫ�������ĸ�ʽ��
 * �˸�ʽ˵������
 *          ����д�ʼ���ַ~email!
 * �����һ��"~"Ϊ�磬ǰ�������ʾ��Ϣ�������Ǹ�ʽ��Ϣ��
 * ��ʽ��Ϣ���������¹���
 * [number[f]:][type][!]
 * ˵����
 * number[f]:	һ����ֵ�����һ��":",��ʾ������ı����Ȳ����Գ���ָ������ֵ���������ֵ�����и�f��ʾ�̶����ȱ���Ϊ����λ
 * type���������±��ʽ
 *	 email	�ʼ���ַ
 *	 int		����
 *	 float	������
 *	 date		����
 *	 time		ʱ��
 *	 hasChinese     ��������
 *	 allChinese	ȫ��������
 *	 noChinese	û������
 *	 /.../[gi]	�Զ�������ʽ
 * !��ʾ�˴��ı�������Ϊ�ա�
 * ����<input type=radio > ��ʽ��Ϊ
 * "��ѡ��һ��ѡ��~!"��ʾ��radio�����ѡ��һ��ѡ��
 * "��ѡ��һ��ѡ��~"��ʾ��radio���ѡ����Բ�ѡ��
 * ����<input type=checkbox >����<select multiple></select>��ʽ��������Ϊ
 * ˵����Ϣ~min:0max:3
 * ����<select ></select>��multiple����
 * "��ѡ��һ��ѡ��~!"��ʾ��select������ѡ���һ��ѡ��
 * "��ѡ��һ��ѡ��~"��ʾ��select����ѡ���һ��ѡ��
 */
	function checkForm(fm)
	{
		for(var i=0;i<fm.length;i++)
		{
			var title=fm[i].title;
			if(title=="")continue;//����δ����title��Ԫ��
			var p=title.lastIndexOf("~");
			if(p<0)continue;//����title��δ�������ʽ��Ԫ��
			var info=title.substring(0,p);
			var format=title.substring(p+1,title.length);
			var name=fm[i].name;
			if(name=="")continue;//����û�����ֵ�Ԫ��
			var value=trim(fm[i].value);
			//fm[i].value=value;//�Զ���ȥ�ύ������˵Ŀո�
			
			if(fm[i].type=="radio")
			{
				if(checkRadio(fm,fm[i]))
				{
					continue;
				}
				else
				{
					return false;
				}
			}
			if(fm[i].type=="checkbox")
			{
				if(checkCheckbox(fm,fm[i]))
				{
					continue;
				}
				else
				{
				 	return false;
				}
			}
			if(fm[i].type=="select-one")
			{
				if(checkSelectOne(fm[i]))
				{
					continue;
				}
				else
				{
					return false;
				}
			}
			if(fm[i].type=="select-multiple")
			{
				if(checkSelectMultiple(fm[i]))
				{
					continue;
				}
				else
				{
					return false;
				}
			}
			var notNull=false;
			if(format.charAt(format.length-1)=="!")
			{
				notNull=true;
				format=format.substring(0,format.length-1);
			}
			if(notNull)
			{
				if(value=="")
				{
					alert(info+" ����Ϊ��");
					fm[i].focus();
					return false;
				}
			}
			else
			{
				//���ݿ���Ϊ��ʱ��
				if(value=="")
					continue;
			}
			//���ݵĳ����ж�
			var colonP=format.indexOf(":");
			if(colonP>0)
			{
				if(format.charAt(colonP-1)=='f')
				{
					var lengthLimit=format.substring(0,colonP-1);
					if(!isNaN(lengthLimit))
					{
						var len = getRealLength(value);
						if(len!=lengthLimit)
						{
							alert(info+" �ĳ���Ϊ"+len+"λ������Ϊ"+lengthLimit+"λ");
							fm[i].focus();
							return false;
						}
					}
				}
				else
				{
					var lengthLimit=format.substring(0,colonP);
					if(!isNaN(lengthLimit))
					{
						var len = getRealLength(value);
						if(len>lengthLimit)
						{
							alert(info+" �ĳ���("+len+")��������"+lengthLimit);
							fm[i].focus();
							return false;
						}
					}
				}
				format=format.substring(colonP+1,format.length);
			}
			if(format=="email")
			{
				//�����ʼ���ʽ
				var found=value.match(/\w+@.+\..+/);
				if(found==null)
				{
					alert(info+" �ĸ�ʽ����ȷ:\n\""+value+"\"����һ��Email��ַ");
					fm[i].focus();
					return false;
				}
			}
			else if(format=="int")
			{
				//����
				var intVal=parseInt(value);
				if(isNaN(intVal)||intVal!=value)
				{
					alert(info+" �ĸ�ʽ����ȷ:\n"+value+"����һ��������");
					fm[i].focus();
					return false;
				}
			}
			else if(format=="float")
			{
				//������
				var floatVal=parseFloat(value);
				if(isNaN(floatVal)||floatVal!=value)
				{
					alert(info+" �ĸ�ʽ����ȷ:\n"+value+"����һ����������");
					fm[i].focus();
					return false;
				}
			}
			else if(format=="date")
			{
				//����
				var found=value.match(/(\d{1,5})-(\d{1,2})-(\d{1,2})/);
				if(found==null||found[0]!=value||found[2]>12||found[3]>31)
				{
					alert(info+" �ĸ�ʽ����ȷ:\n\""+value+"\"����һ������\n��ʾ��[2000-01-01]");
					fm[i].focus();
					return false;
				}
				var year=trim0(found[1]);
				var month=trim0(found[2])-1;
				var date=trim0(found[3]);
				var d=new Date(year,month,date);
				if(d.getFullYear()!=year||d.getMonth()!=month||d.getDate()!=date)
				{
					alert(info+" �����ݲ���ȷ:\n\""+value+"\"����һ����ȷ������\n��ʾ��[2000-01-01]");
					fm[i].focus();
					return false;
				}
			}
			else if(format=="time")
			{
				//ʱ��
				var found=value.match(/(\d{2}):(\d{2}):(\d{2})/);
				if(found==null||found[0]!=value||found[1]>23||found[2]>59||found[3]>59)
				{
					alert(info+" �ĸ�ʽ����ȷ:\n\""+value+"\"����һ��ʱ��\n��ʾ��[05:38:00]");
					fm[i].focus();
					return false;
				}
			}
			else if(format=="hasChinese")
			{
				var _hasChinese=false;
				for(var j=0;j<value.length;j++)
				{
					if(value.charCodeAt(j)>255)
					{
						_hasChinese=true;
						break;
					}
				}
				if(!_hasChinese)
				{
					alert(info+" ��������Ҫ����:\n\""+value+"\"�������κ������ַ�");
					fm[i].focus();
					return false;
				}
			}
			else if(format=="allChinese")
			{
				for(var j=0;j<value.length;j++)
				{
					if(value.charCodeAt(j)<=255)
					{
						alert(info+" ������Ҫ��ȫ����:\n\""+value+"\"���з������ַ�");
						fm[i].focus();
						return false;
					}
				}
			}
			else if(format=="noChinese")
			{
				for(var j=0;j<value.length;j++)
				{
					if(value.charCodeAt(j)>255)
					{
						alert(info+" ������Ҫ�������:\n\""+value+"\"���������ַ�");
						fm[i].focus();
						return false;
					}
				}
			}
			else if(format!="")
			{
				//�Զ���
				try
				{
					var found=value.match(eval(format));
					if(found==null||found[0]!=value)
					{
						alert(info+"�ĸ�ʽ��������Ҫ��:\""+value+"\"\n��ʾ��["+format+"]");
						fm[i].focus();
						return false;
					}
				}
				catch(e)
				{
					alert(e.name+" :\n["+fm[i].name+"]���Ϸ�������ʽ\""+format+"\"");
					return false;
				}
			}
		}
		return true;
	}
	function checkRadio(fm,opt)
	{
		var title=opt.title;
		if(title=="")return true;//����δ����title��Ԫ��
		var p=title.lastIndexOf("~");
		if(p<0)return true;//����title��δ�������ʽ��Ԫ��
		var info=title.substring(0,p);
		var format=title.substring(p+1,title.length);
		var name=opt.name;
		if(name=="")return true;//����û�����ֵ�Ԫ��
		if(format=="!")
		{
			//����ѡ��һ��ѡ��
			if(typeof(fm.all[name].length)=="undefined")
			{
				//ͬ��radioֻ��һ��
				if(opt.checked)
				{
					return true;
				}
				else
				{
					alert(info+" ����ѡ��һ��ѡ��");
					opt.focus();
					return false;
				}
			}
			else
			{
				//��һ��radio��
				var radios=fm[name];
				for(var j=0;j<radios.length;j++)
				{
					if(radios[j].checked==true)return true;
				}
				alert(info+"����ѡ��һ��ѡ��");
				opt.focus();
				return false;
			}
		}
		else
		{
			//����һ��ѡ��Ҳ��ѡ
			return true;
		}
	}
	function checkCheckbox(fm,opt)
	{
		var title=opt.title;
		if(title=="")return true;//����δ����title��Ԫ��
		var p=title.lastIndexOf("~");
		if(p<0)return true;//����title��δ�������ʽ��Ԫ��
		var info=title.substring(0,p);
		var format=title.substring(p+1,title.length);
		var name=opt.name;
		if(name=="")return true;//����û�����ֵ�Ԫ��

		var min=format.match(/min:(\d+)\w*/);
		var max=format.match(/\w*max:(\d+)/);

		if(typeof(fm.all[name].length)=="undefined")
		{
			//ֻ��һ��ͬ��checkbox
			if(min!=null)
			{
				if(min[1]==1&&!opt.checked)
				{
					alert(info+" ����ѡ��һ��ѡ��");
					opt.focus();
					return false;
				}
			}
		}
		else
		{
			//һ��checkbox��
			var checkboxes=fm.all[name];
			var check_count=0;
			for(var j=0;j<checkboxes.length;j++)
			{
				if(checkboxes[j].checked)check_count++;
			}
			if(min!=null)
			{
				if(min[1]>check_count)
				{
					alert(info+" ����Ϊ��\n������Ҫѡ��"+min[1]+"��ѡ��");
					opt.focus();
					return false;
				}
			}
			if(max!=null)
			{
				if(max[1]<check_count)
				{
					alert(info+" �������ѡ��"+max[1]+"��ѡ��");
					opt.focus();
					return false;
				}
			}
		}
		return true;
	}
	function checkSelectOne(sel)
	{
		var title=sel.title;
		if(title=="")return true;//����δ����title��Ԫ��
		var p=title.lastIndexOf("~");
		if(p<0)return true;//����title��δ�������ʽ��Ԫ��
		var info=title.substring(0,p);
		var format=title.substring(p+1,title.length);
		var name=sel.name;
		if(name=="")return true;//����û�����ֵ�Ԫ��
		
		if(format=="!"&&sel.selectedIndex==0)
		{
			alert(info+" ������ѡ���һ��ѡ��");
			sel.focus();
			return false;
		}
		return true;
	}
	function checkSelectMultiple(sel)
	{
		var title=sel.title;
		if(title=="")return true;//����δ����title��Ԫ��
		var p=title.lastIndexOf("~");
		if(p<0)return true;//����title��δ�������ʽ��Ԫ��
		var info=title.substring(0,p);
		var format=title.substring(p+1,title.length);
		var name=sel.name;
		if(name=="")return true;//����û�����ֵ�Ԫ��

		var min=format.match(/min:(\d+)\w*/);
		var max=format.match(/\w*max:(\d+)/);
		
		var select_count=0;
		for(var j=0;j<sel.length;j++)
		{
			if(sel[j].selected)select_count++;
		}
		if(min!=null)
		{
			if(min[1]>select_count)
			{
				alert(info+" ������Ҫѡ��"+min[1]+"��ѡ��");
				sel.focus();
				return false;
			}
		}
		if(max!=null)
		{
			if(max[1]<select_count)
			{
				alert(info+" �������ѡ��"+max[1]+"��ѡ��");
				sel.focus();
				return false;
			}
		}
		return true;
	}
/**
 * ��ȥ�ַ�������s���˵Ŀո�
 */
	function trim(s)
	{
		s=s.replace(/^ */,"");
		s=s.replace(/ *$/,"");
		return s;
	}
/**
 * ��ȥ�ַ�����ʾ����ֵ������ͷ�����е�"0"��
 * ����
 * 	trim0("01")������"1"
 * 	trim0("1")������"1"
 * 	trim0("10")������"10"
 * 	trim0("000")������"0"
 */
	function trim0(s)
	{
		if(s.length==0)return s;
		s=s.replace(/^0*/,"");
		if(s.length==0)s="0";
		return s;
	}
/**
 * ȡ��һ��form�������ύʱ�ڲ��ύ������QueryString
 * ����:
 * ?accountName=&userName=&email=&area=0&credit_low=&credit_high=&age_low=&age_high=&userLevel=0
 */
	function getQueryString(fm)
	{
		var qStr="";
		for(var i=0;i<fm.length;i++)
		{
			if(!fm[i].disabled)
			{
				var n=fm[i].name;
				if(n==null)continue;
				if(n.length==0)continue;
				if(fm[i].type=="select-multiple")
				{
					var _vs=fm[i].options;
					for(var _j=0;_j<_vs.length;_j++)
					{
						var _opt=_vs(_j);
						if(_opt.selected)
						{
							var v=_opt.value;
							qStr=qStr+"&"+n+"="+ec(v);
						}
					}
				}
				else
				{
					var v=fm[i].value;
					if(fm[i].type=="radio"||fm[i].type=="checkbox")
					{
						if(!fm[i].checked)continue;
					}
					qStr=qStr+"&"+n+"="+ec(v);
				}
			}
		}
		if(qStr.length>0)qStr="?"+qStr.substr(1);
		return qStr;
	}
	function ec(va)
	{
		return va.replace(/\n/g,"%0D%0A");
	}
	
	function getRealLength(val){
		var len=0;
		for (i=0;i<val.length;i++){
			if (val.charCodeAt(i)>255) len+=2; else len++;
		}
		return len;
	}