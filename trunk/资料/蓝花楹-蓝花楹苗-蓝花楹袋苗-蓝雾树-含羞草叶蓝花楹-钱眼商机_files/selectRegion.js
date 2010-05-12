function Country(id,title,phone,hasProvince) {
this.id = id;
this.title=title;
this.phone=phone;
this.hasProvince=hasProvince;
this.boardlist=new Array();
this.addBoard=addBoard;
this.getOptions = getOptions;
}

function addBoard(board) {
this.boardlist = this.boardlist.concat(board);
}

function getOptions() {
var tmp = new Array();
for(var i=0; i < this.boardlist.length;i++) {
var b = this.boardlist[i];
tmp[i]= b.getOption();
}
return tmp;
}

function Board(country,provinceId,province) {
this.country=country;
this.province=province;
this.provinceId = provinceId;
this.getOption=getOption;
}

function getOption() {

if(this.country == "CN")
return new Option(this.province,this.provinceId);
return new Option(this.province,this.province);
}

function provincesList(countryName,provinceId,provinceName){
this.countryName = countryName;
this.provinceId = provinceId;
this.provinceName = provinceName;
this.provincesArr = new Array();
this.addProvinces = addProvinces;
this.getProvinces = getProvinces;
}

function addProvinces(province){
this.provincesArr = this.provincesArr.concat(province);
}

function getProvinces(){
var tmp = new Array();
for(var i = 0;i < this.provincesArr.length;i++){
var b = this.provincesArr[i];
tmp[i] = b;
}
return tmp;
}


function provinceCN(provinceName,capitalCityId,capitalCityName) {
this.provinceName = provinceName;
this.capitalCityId = capitalCityId;
this.capitalCityName = capitalCityName;
this.capitalCityArr = new Array();
this.addCity = addCity;
this.getCapitalCitys = getCapitalCitys;

}

function addCity(cityId,cityName) {
this.capitalCityArr = this.capitalCityArr.concat(new Option(cityName,cityId));
}

function getCapitalCitys() {
var tmp = new Array();
for(var i=0; i < this.capitalCityArr.length;i++) {
var b = this.capitalCityArr[i];
tmp[i]= b;
}
return tmp;
}	

function changeProvinceList(provinceList) {

var index = provinceList.selectedIndex;
var len2 = capitalCN.options.length;
for(var i = len2-1;i>0;i--){
capitalCN.options[i] = null;
}

/*len2 = cityCN.options.length;
for (var i = len2-1;i>0;i--){
cityCN.options[i] = null;
}*/

if(index <= 0) {
selectedProvinceName = "";
selectedCityName = "";
}
else {
var province = provinceList.options[index].value;
SelectProvinceId = province;
var len = provincesListArr.length;

var tmpProvincesList;
for(var i=0;i < len;i++){
tmpProvincesList = provincesListArr[i];

if(SelectProvinceId == tmpProvincesList.provinceId ) {

var len1 = capitalCN.options.length;

for(var i = len1-1;i>0;i--){
capitalCN.options[i] = null;
}

var capitals = tmpProvincesList.getProvinces();

for(var i=0;i<capitals.length;i++){
capitalCN.options[i+1] = new Option(capitals[i].capitalCityName,capitals[i].capitalCityId);

}
break;
}
}

selectedProvinceName = provinceList.options[index].text;

selectedCityName = "";

//changeAddress();

}
}

/*function changeCapitalCity(list) {

if (list.selectedIndex<=0) {
//form1.cityCN.options[0].selected=true;
//var len = form1.cityCN.options.length;

//for (var i=len-1;i>0;i--){
//	form1.cityCN.options[i]=null;
//}
}
else {

var tmpProvincesList;
var len = provincesListArr.length;

var capital = list.options[list.selectedIndex].value;

for(var i=0;i<len;i++){
tmpProvincesList = provincesListArr[i];

if(SelectProvinceId == tmpProvincesList.provinceId ) {
var capitals = tmpProvincesList.getProvinces();
for(var i=0;i<capitals.length;i++){
var c = capitals[i];
if(c.capitalCityId == capital){
var len1 = form1.cityCN.options.length;
for (var i=len1-1;i>0;i--){
form1.cityCN.options[i]=null;
}
var citys = c.getCapitalCitys();
for(var i=0;i<citys.length;i++){
form1.cityCN.options[i+1] = citys[i];
}
break;
}
//capitalCN.options[i+1] = new Option(capitals[i].Name,capitals[i].Id);
}
break;
}
}

selectedCityName = "";
//changeAddress();
}
}*/
function changeCity(list){
if( list.selectedIndex > 0 ) {
selectedCityName = list.options[list.selectedIndex].text;
}
//changeAddress();
}

function changeAddress(){

var address = "";
if(selectCountryList == "cn"){
//address += "�й�";
address = selectedProvinceName + selectedCityName;
}

PreAddress.innerHTML = address;

}


var CountryArr = new Array();
var CountryArrHot = new Array();
var CountryArrCN = new Array();

var cur;
cur = new Country("CN","�й�", "86", "1");
CountryArr = CountryArr.concat(cur);
cur.addBoard(new Board("CN","","����"))
cur.addBoard(new Board("CN","","����"))
cur.addBoard(new Board("CN","","����"))
cur.addBoard(new Board("CN","","����"))
cur.addBoard(new Board("CN","","�㶫"))
cur.addBoard(new Board("CN","","����"))
cur.addBoard(new Board("CN","","����"))
cur.addBoard(new Board("CN","","����"))
cur.addBoard(new Board("CN","","�ӱ�"))
cur.addBoard(new Board("CN","","����"))
cur.addBoard(new Board("CN","","������"))
cur.addBoard(new Board("CN","","����"))
cur.addBoard(new Board("CN","","����"))
cur.addBoard(new Board("CN","","����"))
cur.addBoard(new Board("CN","","����"))
cur.addBoard(new Board("CN","","����"))
cur.addBoard(new Board("CN","","����"))
cur.addBoard(new Board("CN","","���ɹ�"))
cur.addBoard(new Board("CN","","����"))
cur.addBoard(new Board("CN","","�ຣ"))
cur.addBoard(new Board("CN","","ɽ��"))
cur.addBoard(new Board("CN","","ɽ��"))
cur.addBoard(new Board("CN","","����"))
cur.addBoard(new Board("CN","","�Ϻ�"))
cur.addBoard(new Board("CN","","�Ĵ�"))
cur.addBoard(new Board("CN","","���"))
cur.addBoard(new Board("CN","","����"))
cur.addBoard(new Board("CN","","�½�"))
cur.addBoard(new Board("CN","","����"))
cur.addBoard(new Board("CN","","�㽭"))
cur.addBoard(new Board("CN","","����"))
/*cur = new Country("TW","�й�̨��", "886", "2");
CountryArr = CountryArr.concat(cur);
cur = new Country("HK","�й����", "852", "2");
CountryArr = CountryArr.concat(cur);
cur = new Country("Other","�������һ����", "", "0");
CountryArr = CountryArr.concat(cur);*/


var provincesListArr = new  Array();
var c;
var SelectProvinceId;
var lenCapitalCity = form1.capitalCN.options.length;
for (var i=lenCapitalCity - 1;i>0;i--){
form1.capitalCN.options[i] = null;
}


var p1 = new provincesList("CN","p101001","����");
c = new provinceCN("����","p101001001","�Ϸ���")
c.addCity("p101001001001","���ᣨˮ����")
c.addCity("p101001001002","�ʶ����겺��")
c.addCity("p101001001003","������������")
p1.addProvinces(c);
c = new provinceCN("����","p101001002","�ߺ���/��")
c.addCity("p101001002001","�ߺ�����ֹ��")
c.addCity("p101001002002","�������ǹ���")
c.addCity("p101001002003","���꣨�ǹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101001003","������")
c.addCity("p101001003001","��Զ���ǹ���")
c.addCity("p101001003002","��ӣ��ǹ���")
c.addCity("p101001003003","���򣨳ǹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101001004","������")
c.addCity("p101001004001","��Ȫ���ǹ���")
c.addCity("p101001004002","̫�ͣ��ǹ���")
c.addCity("p101001004003","���ϣ��ǹ���")
c.addCity("p101001004004","ӱ�ϣ��ǹ���")
c.addCity("p101001004005","������")
p1.addProvinces(c);
c = new provinceCN("����","p101001005","ͭ����/��")
c.addCity("p101001005001","ͭ���أ��ǹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101001006","��ɽ��")
c.addCity("p101001006001","��أ��ճ���")
c.addCity("p101001006002","������������")
c.addCity("p101001006003","���أ�������")
c.addCity("p101001006004","���ţ���ɽ��")
p1.addProvinces(c);
c = new provinceCN("����","p101001007","������")
c.addCity("p101001007001","��̨���ǹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101001008","������")
c.addCity("p101001008001","�Ϫ���Ϫ��")
p1.addProvinces(c);
c = new provinceCN("����","p101001009","������")
c.addCity("p101001009002","���ɣ�������")
c.addCity("p101001009003","�������ߺ���")
c.addCity("p101001009004","Ǳɽ��÷����")
c.addCity("p101001009005","������������")
c.addCity("p101001009006","������������")
c.addCity("p101001009007","̫����������")
c.addCity("p101001009008","������������")
c.addCity("p101001009009","ͩ����")
p1.addProvinces(c);
c = new provinceCN("����","p101001010","��ɽ��")
c.addCity("p101001010001","��Ϳ���ǹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101001011","������")
c.addCity("p101001011001","�������°���")
c.addCity("p101001011002","ȫ���������")
c.addCity("p101001011003","��Զ��������")
c.addCity("p101001011004","������������")
c.addCity("p101001011005","������")
c.addCity("p101001011006","�쳤��")
p1.addProvinces(c);
c = new provinceCN("����","p101001012","������")
c.addCity("p101001012001","�ɽ���ǹ���")
c.addCity("p101001012002","���أ�������")
c.addCity("p101001012003","��ڣ������")
c.addCity("p101001012004","���أ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101001013","������")
c.addCity("p101001013001","���أ��ٴ���")
c.addCity("p101001013002","���񣨳ǹ���")
c.addCity("p101001013003","��ǣ��ǹ���")
c.addCity("p101001013004","��կ��÷ɽ��")
c.addCity("p101001013005","��ɽ���ǹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101001014","������")
c.addCity("p101001014001","®�����ǹ���")
c.addCity("p101001014002","��Ϊ���޳���")
c.addCity("p101001014003","��ɽ��������")
c.addCity("p101001014004","����")
p1.addProvinces(c);
c = new provinceCN("����","p101001015","������")
c.addCity("p101001015001","��Ϫ����ƽ��")
c.addCity("p101001015002","��£�������")
c.addCity("p101001015003","���أ��ǹ���")
c.addCity("p101001015004","캵£������")
c.addCity("p101001015005","��Ϫ��������")
c.addCity("p101001015006","������")
p1.addProvinces(c);
c = new provinceCN("����","p101001016","������")
c.addCity("p101001016001","������Ң����")
c.addCity("p101001016002","ʯ̨��������")
c.addCity("p101001016003","�������س���")
p1.addProvinces(c);
c = new provinceCN("����","p101001055","������")
c.addCity("p101001055003","�������ǹ���")
c.addCity("p101001055001","�ɳǣ��ǹ���")
c.addCity("p101001055002","�������ǹ���")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);

var p1 = new provincesList("CN","p101002","����");	
c = new provinceCN("����","p101002019001","�����أ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101002019002","��ƽ������ƽ��")
p1.addProvinces(c);
c = new provinceCN("����","p101002019003","������")
p1.addProvinces(c);
c = new provinceCN("����","p101002019004","������")
p1.addProvinces(c);
c = new provinceCN("����","p101002019005","���������ƴ���")
p1.addProvinces(c);
c = new provinceCN("����","p101002019006","������")
p1.addProvinces(c);
c = new provinceCN("����","p101002019007","��ɽ��")
p1.addProvinces(c);
c = new provinceCN("����","p101002019008","��̨��")
p1.addProvinces(c);
c = new provinceCN("����","p101002019009","������")
p1.addProvinces(c);
c = new provinceCN("����","p101002019010","��������������")
p1.addProvinces(c);
c = new provinceCN("����","p101002019011","��ͷ����")
p1.addProvinces(c);
c = new provinceCN("����","p101002019012","�����أ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101002019013","ƽ������ƽ����")
p1.addProvinces(c);
c = new provinceCN("����","p101002019014","ʯ��ɽ��")
p1.addProvinces(c);
c = new provinceCN("����","p101002019015","˳����")
p1.addProvinces(c);
c = new provinceCN("����","p101002019016","ͨ����")
p1.addProvinces(c);
c = new provinceCN("����","p101002019017","������")
p1.addProvinces(c);
c = new provinceCN("����","p101002019018","������")	
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);

var p1 = new provincesList("CN","p101003","����");
c = new provinceCN("����","p101003001001","������")	
p1.addProvinces(c);
c = new provinceCN("����","p101003001002","������")
p1.addProvinces(c);
c = new provinceCN("����","p101003001004","��ɳ�������������أ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101003001005","��ͤ�������������أ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101003001007","�������������أ�ʯµ��")
p1.addProvinces(c);
c = new provinceCN("����","p101003001008","�����أ�����")
p1.addProvinces(c);
c = new provinceCN("����","p101003001009","������")
p1.addProvinces(c);
c = new provinceCN("����","p101003001010","������")
p1.addProvinces(c);
c = new provinceCN("����","p101003001011","�����أ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101003001012","������")
p1.addProvinces(c);
c = new provinceCN("����","p101003001013","�ֶ����������أ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101003001014","�ٸ��أ��ٳ���")
p1.addProvinces(c);
c = new provinceCN("����","p101003001015","��ˮ���������أ������")
p1.addProvinces(c);
c = new provinceCN("����","p101003001016","����")
p1.addProvinces(c);
c = new provinceCN("����","p101003001017","��ɽ��")
p1.addProvinces(c);
c = new provinceCN("����","p101003001018","�����������������أ�Ӫ����")
p1.addProvinces(c);
c = new provinceCN("����","p1010033001019","�Ͳ��أ��Ͳ���")
p1.addProvinces(c);
c = new provinceCN("����","p101003001020","�Ĳ���")
p1.addProvinces(c);
c = new provinceCN("����","p101003001021","��ָɽ�У�ͨʲ��")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);


var p1 = new provincesList("CN","p101004","����");
c = new provinceCN("����","p101004001","Ȫ����")
c.addCity("p101004001001","�ݰ����ݳ���")
c.addCity("p101004001002","��Ϫ�������")
c.addCity("p101004001003","�������ҳ���")
c.addCity("p101004001004","�»��������")
c.addCity("p101004001005","ʯʨ��")
c.addCity("p101004001006","������")
c.addCity("p101004001007","�ϰ���")
c.addCity("p101004001008","������")
p1.addProvinces(c);
c = new provinceCN("����","p101004002","������")
p1.addProvinces(c);
c = new provinceCN("����","p101004003","������")
c.addCity("p101004003001","��Ϫ��ѩ����")
c.addCity("p101004003002","������������")
c.addCity("p101004003003","�������佭��")
c.addCity("p101004003004","�����Ϫ��")
c.addCity("p101004003005","��Ϫ���ǹ���")
c.addCity("p101004003006","ɳ�أ������")
c.addCity("p101004003007","���֣�������")
c.addCity("p101004003008","̩����ɼ����")
c.addCity("p101004003009","������塳���")
c.addCity("p101004003010","������")
p1.addProvinces(c);
c = new provinceCN("����","p101004004","������")
c.addCity("p101004004001","��������г�������")
c.addCity("p101004004002","���Σ������")
p1.addProvinces(c);
c = new provinceCN("����","p101004005","������")
c.addCity("p101004005001","������������")
c.addCity("p101004005002","ϼ�֣��ɳ���")
c.addCity("p101004005003","���٣�˫����")
c.addCity("p101004005004","���ϣ��ŷ���")
c.addCity("p101004005005","����³���")
c.addCity("p101004005006","������ʨ����")
c.addCity("p101004005007","������")
c.addCity("p101004005008","������")
p1.addProvinces(c);
c = new provinceCN("����","p101004006","��ƽ��")
c.addCity("p101004006001","˳����˫Ϫ��")
c.addCity("p101004006002","�ֳǣ�������")
c.addCity("p101004006003","���󣨺�����")
c.addCity("p101004006004","��Ϫ����Դ��")
c.addCity("p101004006005","���ͣ���ɽ��")
c.addCity("p101004006006","������")
c.addCity("p101004006007","����ɽ��")
c.addCity("p101004006008","�����")
c.addCity("p101004006009","������")
p1.addProvinces(c);
c = new provinceCN("����","p101004007","������")
c.addCity("p101004007001","��͡��͡����")
c.addCity("p101004007002","�����������")
c.addCity("p101004007003","�Ϻ����ٽ���")
c.addCity("p101004007004","��ƽ��ƽ����")
c.addCity("p101004007005","���ǣ�������")
c.addCity("p101004007006","��ƽ��")
p1.addProvinces(c);
c = new provinceCN("����","p101004008","������")
c.addCity("p101004008001","������������")
c.addCity("p101004008002","���֣��簲��")
c.addCity("p101004008003","گ������گ��")
c.addCity("p101004008004","��̩���䰲��")
c.addCity("p101004008005","��ɽ��������")
c.addCity("p101004008006","�Ͼ���ɽ����")
c.addCity("p101004008007","ƽ�ͣ�СϪ��")
c.addCity("p101004008008","������������")
c.addCity("p101004008009","������")
p1.addProvinces(c);
c = new provinceCN("����","p101004009","������")
c.addCity("p101004009001","���������")
c.addCity("p101004009002","�����������")
c.addCity("p101004009003","��Դ����ɽ��")
c.addCity("p101004009004","���壨÷����")
c.addCity("p101004009005","��̩��������")
c.addCity("p101004009006","ƽ̶��̶����")
c.addCity("p101004009007","������")
c.addCity("p101004009008","������")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);

var p1 = new provincesList("CN","p101005","����");
c = new provinceCN("����","p101005001","������")
c.addCity("p101005001001","���ǣ��ǹ���")
c.addCity("p101005001002","�������ǹ���")
c.addCity("p101005001003","���У��ǹ���")
p1.addProvinces(c);

c = new provinceCN("����","p101005002","�����")
c.addCity("p101005002001","�������ǹ���")
p1.addProvinces(c);

c = new provinceCN("����","p101005003","������")
c.addCity("p101005003001","��Զ���ǹ���")
c.addCity("p101005003002","��������ʦ��")
c.addCity("p101005003003","��̩��һ��ɽ��")
p1.addProvinces(c);
c = new provinceCN("����","p101005004","��ˮ��")
c.addCity("p101005004001","��ˮ��������")
c.addCity("p101005004002","�ذ����˹���")
c.addCity("p101005004003","�ʹȣ��ǹ���")
c.addCity("p101005004004","��ɽ���ǹ���")
c.addCity("p101005004005","�żҴ��������Σ��żҴ���")
c.addCity("p101005004006","��ˮ����������")
p1.addProvinces(c);

c = new provinceCN("����","p101005005","��������")
p1.addProvinces(c);
c = new provinceCN("����","p101005006","��������/��")
c.addCity("p101005006001","�������ǹ���")
c.addCity("p101005006002","ͨμ��ƽ����")
c.addCity("p101005006003","��䬣������")
c.addCity("p101005006004","���أ��ǹ���")
c.addCity("p101005006005","��أ��ǹ���")
c.addCity("p101005006006","¤����������")
c.addCity("p101005006007","μԴ����Դ��")
p1.addProvinces(c);
c = new provinceCN("����","p101005007","ƽ������/��")
c.addCity("p101005007001","�������ǹ���")
c.addCity("p101005007002","��̨����̨��")
c.addCity("p101005007003","���ţ�������")
c.addCity("p101005007004","��ͤ��������")
c.addCity("p101005007005","ׯ�ˣ�ˮ�����")
c.addCity("p101005007006","�������ǹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101005008","��������")
c.addCity("p101005008001","�����������")
c.addCity("p101005008002","���أ�������")
c.addCity("p101005008003","���أ���Զ��")
c.addCity("p101005008004","��ˮ����������")
c.addCity("p101005008005","������ɽ����")
c.addCity("p101005008006","���أ�������")
c.addCity("p101005008007","��ԭ���ǹ���")
c.addCity("p101005008008","������")
p1.addProvinces(c);
c = new provinceCN("����","p101005009","¤�ϵ���")
c.addCity("p101005009001","���أ��ǹ���")
c.addCity("p101005009002","�䶼�أ��ǹ���")
c.addCity("p101005009003","崲����ǹ���")
c.addCity("p101005009004","���أ��ǹ���")
c.addCity("p101005009005","���ͣ���Դ��")
c.addCity("p101005009006","���أ��ǹ���")
c.addCity("p101005009007","�������ǹ���")
c.addCity("p101005009008","���أ��ǹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101005010","��������/��")
c.addCity("p101005010001","���ڣ��ǹ���")
c.addCity("p101005010002","���ˣ�������")
c.addCity("p101005010003","��ף���������أ���������")
p1.addProvinces(c);
c = new provinceCN("����","p101005011","��Ҵ����/��")
c.addCity("p101005011001","���֣��ǹ���")
c.addCity("p101005011002","���󣨳ǹ���")
c.addCity("p101005011003","��̨���ǹ���")
c.addCity("p101005011004","ɽ�����ǹ���")
c.addCity("p101005011005","����ԣ���������أ���������")
p1.addProvinces(c);
c = new provinceCN("����","p101005012","��Ȫ����/��")
c.addCity("p101005012001","������������")
c.addCity("p101005012002","������ԨȪ��")
c.addCity("p101005012003","�౱�ɹ��������أ���������")
c.addCity("p101005012004","�������������������أ���������")
c.addCity("p101005012005","������")
c.addCity("p101005012006","�ػ���")
p1.addProvinces(c);
c = new provinceCN("����","p101005013","���ϲ���������")
c.addCity("p101005013001","��̶���ǹ���")
c.addCity("p101005013002","׿�ᣨ������")
c.addCity("p101005013003","�������ǹ��磩")
c.addCity("p101005013004","�����������磩")
c.addCity("p101005013005","�����������磩")
c.addCity("p101005013006","µ�����갬�磩")
c.addCity("p101005013007","�ĺӣ���������")
c.addCity("p101005013008","������")
p1.addProvinces(c);
c = new provinceCN("����","p101005014","���Ļ���������/������")
c.addCity("p101005014001","���ģ�������")
c.addCity("p101005014002","���֣�������")
c.addCity("p101005014003","����������Ͽ��")
c.addCity("p101005014004","��ӣ��ǹ���")
c.addCity("p101005014005","�������ǹ���")
c.addCity("p101005014006","�����������أ�������")
c.addCity("p101005014007","��ʯɽ�����嶫�������������أ�����̲��")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101006","�㶫");
c = new provinceCN("�㶫","p101006001","������")
c.addCity("p101006001001","�������ֲ���")
c.addCity("p101006001002","��ƽ���Ƹ���")
p1.addProvinces(c);
c = new provinceCN("�㶫","p101006002","��ݸ��")
c.addCity("p101006002001","ݸ����")
c.addCity("p101006002002","�ϳ���")
c.addCity("p101006002003","����")
c.addCity("p101006002004","������")
c.addCity("p101006002005","ʯ��")
c.addCity("p101006002006","ʯ��")
c.addCity("p101006002007","��ɽ")
c.addCity("p101006002008","ʯ��")
c.addCity("p101006002009","��ʯ")
c.addCity("p101006002010","����")
c.addCity("p101006002011","��ͷ")
c.addCity("p101006002012","л��")
c.addCity("p101006002013","����")
c.addCity("p101006002014","��ƽ")
c.addCity("p101006002015","弲�")
c.addCity("p101006002016","����")
c.addCity("p101006002017","�ƽ�")
c.addCity("p101006002018","��Ϫ")
c.addCity("p101006002019","����")
c.addCity("p101006002020","���")
c.addCity("p101006002021","����")
c.addCity("p101006002022","����")
c.addCity("p101006002023","���")
c.addCity("p101006002024","ɳ��")
c.addCity("p101006002025","����")
c.addCity("p101006002026","��÷")
c.addCity("p101006002027","��ӿ")
c.addCity("p101006002028","����")
c.addCity("p101006002029","�߈�")
c.addCity("p101006002030","��ľͷ")
c.addCity("p101006002031","����ɽ")
c.addCity("p101006002032","��ţ��")
p1.addProvinces(c);
c = new provinceCN("�㶫","p101006003","������")
c.addCity("p101006003001","������")
c.addCity("p101006003002","���ޣ�������")
c.addCity("p101006003003","���ţ�������")
c.addCity("p101006003004","�ݶ���ƽɽ��")
p1.addProvinces(c);
c = new provinceCN("�㶫","p101006004","������")
c.addCity("p101006004001","�»���")
c.addCity("p101006004002","��ƽ��")
c.addCity("p101006004003","̨ɽ��")
c.addCity("p101006004004","��ƽ��")
c.addCity("p101006004005","��ɽ��")
p1.addProvinces(c);
c = new provinceCN("�㶫","p101006007","��ͷ��")
c.addCity("p101006007001","�κ���")
c.addCity("p101006007002","������")
c.addCity("p101006007003","�ϰģ���լ��")
p1.addProvinces(c);
c = new provinceCN("�㶫","p101006008","������")
c.addCity("p101006008001","������")
c.addCity("p101006008002","�޺���")
c.addCity("p101006008003","��ɽ��")
c.addCity("p101006008004","������")
c.addCity("p101006008005","������")
c.addCity("p101006008006","������")
p1.addProvinces(c);
c = new provinceCN("�㶫","p101006010","տ����")
c.addCity("p101006010001","�⴨��")
c.addCity("p101006010002","������")
c.addCity("p101006010003","������")
c.addCity("p101006010004","��Ϫ�������")
c.addCity("p101006010005","���ţ������")
p1.addProvinces(c);
c = new provinceCN("�㶫","p101006011","������")
c.addCity("p101006011001","�Ļ���")
c.addCity("p101006011002","�������Ͻ���")
c.addCity("p101006011003","������������")
c.addCity("p101006011004","�⿪��������")
c.addCity("p101006011005","���죨�³���")
c.addCity("p101006011006","��Ҫ��")
p1.addProvinces(c);
c = new provinceCN("�㶫","p101006012","��ɽ��")
p1.addProvinces(c);
c = new provinceCN("�㶫","p101006013","�麣��")
c.addCity("p101006013001","���ţ�������")
c.addCity("p101006013002","���壨������")
p1.addProvinces(c);
c = new provinceCN("�㶫","p101006014","������")
c.addCity("p101006014001","������")
c.addCity("p101006014002","�ӻ���")
c.addCity("p101006014003","������")
c.addCity("p101006014004","��خ��")
c.addCity("p101006014005","Խ����")
c.addCity("p101006014006","������")
c.addCity("p101006014007","������")
c.addCity("p101006014008","�����")
c.addCity("p101006014009","������")
c.addCity("p101006014010","������")
c.addCity("p101006014011","�ܸ���")
c.addCity("p101006014012","��ɳ��")
p1.addProvinces(c);
c = new provinceCN("�㶫","p101006015","�ع���")
c.addCity("p101006015001","�ֲ���")
c.addCity("p101006015002","������")
c.addCity("p101006015003","�����������")
c.addCity("p101006015004","ʼ�ˣ�̫ƽ��")
c.addCity("p101006015005","�ʻ����ʻ���")
c.addCity("p101006015006","��Դ��������")
c.addCity("p101006015007","�·ᣨ�����")
c.addCity("p101006015008","��Դ���������أ������")
p1.addProvinces(c);
c = new provinceCN("�㶫","p101006016","��Դ��")
c.addCity("p101006016001","�Ͻ��ϳ���")
c.addCity("p101006016002","��������¡��")
c.addCity("p101006016003","��ƽ��Ԫ����")
c.addCity("p101006016004","��Դ��������")
c.addCity("p101006016005","��ƽ��������")
p1.addProvinces(c);
c = new provinceCN("�㶫","p101006017","÷����")
c.addCity("p101006017001","������")
c.addCity("p101006017002","÷�أ�������")
c.addCity("p101006017003","�����������")
c.addCity("p101006017004","��˳��������")
c.addCity("p101006017005","�廪��ˮկ��")
c.addCity("p101006017006","ƽԶ�������")
c.addCity("p101006017007","���루������")
p1.addProvinces(c);
c = new provinceCN("�㶫","p101006018","��β��")
c.addCity("p101006018001","½����")
c.addCity("p101006018002","���ᣨ������")
c.addCity("p101006018003","½�ӣ�������")
p1.addProvinces(c);
c = new provinceCN("�㶫","p101006019","ï����")
c.addCity("p101006019001","ï�ۣ��Ϻ���")
c.addCity("p101006019002","������")
c.addCity("p101006019003","������")
c.addCity("p101006019004","������")
c.addCity("p101006019005","��ף�ˮ����")
p1.addProvinces(c);
c = new provinceCN("�㶫","p101006021","��Զ��")
c.addCity("p101006021001","Ӣ����")
c.addCity("p101006021002","������")
c.addCity("p101006021003","��ԣ�ʯ����")
c.addCity("p101006021004","��ɽ��������")
c.addCity("p101006021005","���£�̫����")
c.addCity("p101006021006","��ɽ׳�����������أ�������")
c.addCity("p101006021007","�������������أ�������")
p1.addProvinces(c);
c = new provinceCN("�㶫","p101006022","������")
c.addCity("p101006022001","������")
c.addCity("p101006022002","�Ҷ�����Ϫ��")
c.addCity("p101006022003","������������")
c.addCity("p101006022004","�������ݳ���")
p1.addProvinces(c);
c = new provinceCN("�㶫","p101006023","��ɽ��")
c.addCity("p101006023005","������")
c.addCity("p101006023001","������")
c.addCity("p101006023002","˳����")
c.addCity("p101006023003","�Ϻ���")
c.addCity("p101006023004","��ˮ��")
p1.addProvinces(c);
c = new provinceCN("�㶫","p101006025","������")
c.addCity("p101006025001","������")
c.addCity("p101006025002","������֯long��")
c.addCity("p101006025003","������������")
p1.addProvinces(c);
c = new provinceCN("�㶫","p101006026","�Ƹ���")
c.addCity("p101006026001","�޶���")
c.addCity("p101006026002","�ư���������")
c.addCity("p101006026003","���ˣ��³���")
c.addCity("p101006026004","���ϣ�������")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101007","����");
c = new provinceCN("����","p101007001","������")
c.addCity("p101007001001","���֣�������")
p1.addProvinces(c);
c = new provinceCN("����","p101007002","���Ǹ���")
c.addCity("p101007002001","������")
c.addCity("p101007002002","��˼��˼����")
p1.addProvinces(c);
c = new provinceCN("����","p101007003","������")
c.addCity("p101007003001","��˷����˷��")
c.addCity("p101007003002","�ٹ��ٹ���")
c.addCity("p101007003003","�鴨���鴨��")
c.addCity("p101007003004","ȫ�ݣ�ȫ����")
c.addCity("p101007003005","�˰����˰���")
c.addCity("p101007003006","������������")
c.addCity("p101007003007","������������")
c.addCity("p101007003008","��Դ��̫����")
c.addCity("p101007003009","ƽ�֣�ƽ����")
c.addCity("p101007003010","���֣������")
c.addCity("p101007003011","��ʤ���������أ���ʤ��")
c.addCity("p101007003012","�������������أ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101007004","������/����")
c.addCity("p101007004001","��ɽ��")
c.addCity("p101007004002","¹կ��¹կ��")
c.addCity("p101007004003","���ݣ�������")
c.addCity("p101007004004","������������")
c.addCity("p101007004005","������������")
c.addCity("p101007004006","�ڰ���������")
c.addCity("p101007004007","�óǣ��ǹ���")
c.addCity("p101007004008","�������������أ�������")
c.addCity("p101007004009","��ˮ���������أ���ˮ��")
c.addCity("p101007004010","�������������أ�������")
c.addCity("p101007004011","������������")
c.addCity("p101007004012","���ǣ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101007005","������/����")
c.addCity("p101007005001","ƾ����")
c.addCity("p101007005002","���أ�������")
c.addCity("p101007005003","������������")
c.addCity("p101007005004","���֣������")
c.addCity("p101007005005","¡����������")
c.addCity("p101007005006","��ɽ����ɽ��")
c.addCity("p101007005007","���磨������")
c.addCity("p101007005008","����̫ƽ��")
c.addCity("p101007005009","���£��ҳ���")
c.addCity("p101007005010","��ȣ������")
c.addCity("p101007005011","������������")
c.addCity("p101007005012","���ݣ�������")
c.addCity("p101007005013","������������")
c.addCity("p101007005014","������������")
p1.addProvinces(c);
c = new provinceCN("����","p101007006","������")
c.addCity("p101007006001","�ֱ���С����")
c.addCity("p101007006002","��ɽ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101007007","������")
c.addCity("p101007007001","��ࣨ������")
c.addCity("p101007007002","���أ��ٳ���")
c.addCity("p101007007003","��ɽ����ɽ��")
p1.addProvinces(c);
c = new provinceCN("����","p101007008","��ɫ����")
c.addCity("p101007008001","������������")
c.addCity("p101007008002","�ﶫ��ƽ����")
c.addCity("p101007008003","ƽ������ͷ��")
c.addCity("p101007008004","�±����ǹ���")
c.addCity("p101007008005","�������¾���")
c.addCity("p101007008006","���£�������")
c.addCity("p101007008007","���ƣ�������")
c.addCity("p101007008008","��ҵ��ͬ����")
c.addCity("p101007008009","���֣��˴���")
c.addCity("p101007008010","���֣�������")
c.addCity("p101007008011","¡�ָ��������أ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101007009","�ӳص���")
c.addCity("p101007009001","������")
c.addCity("p101007009002","�ϵ����ǹ���")
c.addCity("p101007009003","��루������")
c.addCity("p101007009004","��ɽ�������")
c.addCity("p101007009005","������������")
c.addCity("p101007009006","�������������أ�������")
c.addCity("p101007009007","�������������أ�������")
c.addCity("p101007009008","�����������أ�����")
c.addCity("p101007009009","�޳����������أ�������")
c.addCity("p101007009010","����ë���������أ�˼����")
p1.addProvinces(c);
c = new provinceCN("����","p101007010","������")
c.addCity("p101007010001","������")
c.addCity("p101007010002","��ҵ��ʯ����")
c.addCity("p101007010003","���أ��ݳ���")
c.addCity("p101007010004","½����½����")
c.addCity("p101007010005","���ף�������")
p1.addProvinces(c);
c = new provinceCN("����","p101007011","�����")
c.addCity("p101007011001","��ƽ��")
c.addCity("p101007011002","ƽ�ϣ�ƽ����")
p1.addProvinces(c);
c = new provinceCN("����","p101007012","���ݵ���")
c.addCity("p101007012001","��ƽ����ƽ��")
c.addCity("p101007012002","��ɽ����ɽ��")
c.addCity("p101007012003","�������������أ�������")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101008","����");
c = new provinceCN("����","p101008001","������")
c.addCity("p101008001001","Ϣ�飨������")
c.addCity("p101008001002","���ģ��ǹ���")
c.addCity("p101008001003","�������ǹ���")
c.addCity("p101008001004","����")
p1.addProvinces(c);
c = new provinceCN("����","p101008002","������/��")
c.addCity("p101008002001","��ˮ")
c.addCity("p101008002002","�ʻ�")
c.addCity("p101008002003","ͩ����¦ɽ����")
c.addCity("p101008002004","����������")
c.addCity("p101008002005","������������")
c.addCity("p101008002006","��ԣ���Ȫ��")
c.addCity("p101008002007","��̶���ؽ���")
c.addCity("p101008002008","ϰˮ��������")
c.addCity("p101008002009","���죨������")
c.addCity("p101008002010","�����������������أ������")
c.addCity("p101008002011","�������������������أ���Ϫ��")
p1.addProvinces(c);

c = new provinceCN("����","p101008003","�Ͻڵ���/��")
c.addCity("p101008003001","�󷽣�����")
c.addCity("p101008003002","ǭ�����ǹ���")
c.addCity("p101008003003","��ɳ���ǹ���")
c.addCity("p101008003004","֯�𣨳ǹ���")
c.addCity("p101008003005","��Ӻ��Ӻ����")
c.addCity("p101008003006","���£��ǹ���")
c.addCity("p101008003007","��������������������أ��ݺ���")
p1.addProvinces(c);
c = new provinceCN("����","p101008004","ͭ�ʵ���/��")
c.addCity("p101008004001","���ڣ�˫����")
c.addCity("p101008004002","ʯ�䣨��ɽ��")
c.addCity("p101008004003","˼�ϣ�˼����")
c.addCity("p101008004004","�½���������")
c.addCity("p101008004005","�������������أ�ƽϪ��")
c.addCity("p101008004006","�غ������������أ���ƽ��")
c.addCity("p101008004007","�������������أ�ޤ����")
c.addCity("p101008004008","��ɽ��������ɽ��")
p1.addProvinces(c);

c = new provinceCN("����","p101008005","����ˮ��")
c.addCity("p101008005001","���أ������")
c.addCity("p101008005002","��֦��������Ӫ�̣�")
c.addCity("p101008005003","ˮ�ǣ�����ˮ����ɽ����")
p1.addProvinces(c);
c = new provinceCN("����","p101008006","��˳��")
c.addCity("p101008006001","ƽ�ӣ��ǹ���")
c.addCity("p101008006002","�ն����ǹ���")
c.addCity("p101008006003","���벼�������������أ�˼����")
c.addCity("p101008006004","�����������������أ��ǹ���")
c.addCity("p101008006005","�������岼���������أ���ɽ��")
p1.addProvinces(c);
c = new provinceCN("����","p101008007","ǭ���ϲ��������������ݣ������У�")
c.addCity("p101008007001","�������°���")
c.addCity("p101008007002","���ʣ��ǹ���")
c.addCity("p101008007003","�հ�����ˮ��")
c.addCity("p101008007004","��¡��������")
c.addCity("p101008007005","��ᣨ�����")
c.addCity("p101008007006","���ӣ�������")
c.addCity("p101008007007","��ࣨ��¥��")
p1.addProvinces(c);
c = new provinceCN("����","p101008008","ǭ�ϲ��������������ݣ������У�")
c.addCity("p101008008001","��Ȫ��")
c.addCity("p101008008002","�󲨣�������")
c.addCity("p101008008003","�󶨣��ǹ���")
c.addCity("p101008008004","�Ͱ���Ӻ����")
c.addCity("p101008008005","��ɽ���ǹ���")
c.addCity("p101008008006","ƽ����ƽ����")
c.addCity("p101008008007","�޵飨��ƺ��")
c.addCity("p101008008008","��˳����կ��")
c.addCity("p101008008009","�����ɽ��")
c.addCity("p101008008010","��ˮ����ƽ��")
c.addCity("p101008008011","����ˮ�������أ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101008009","ǭ�������嶱�������ݣ������У�")
c.addCity("p101008009001","������")
c.addCity("p101008009002","��ƽ��������")
c.addCity("p101008009003","ʩ�����ǹ���")
c.addCity("p101008009004","���루�˹���")
c.addCity("p101008009005","��Զ��������")
c.addCity("p101008009006","᯹���˼�D��")
c.addCity("p101008009007","�����������")
c.addCity("p101008009008","������������")
c.addCity("p101008009009","���ӣ�������")
c.addCity("p101008009010","̨����̨����")
c.addCity("p101008009011","��ƽ���·���")
c.addCity("p101008009012","�Ž���������")
c.addCity("p101008009013","�ӽ���������")
c.addCity("p101008009014","��ɽ��������")
c.addCity("p101008009015","�齭����ɽ��")
c.addCity("p101008009016","��կ����Ȫ��")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101010","�ӱ�");
c = new provinceCN("�ӱ�","p101010001","������")
c.addCity("p101010001001","������")
c.addCity("p101010001002","������")
c.addCity("p101010001003","������")
c.addCity("p101010001004","�߱�����")
c.addCity("p101010001005","���ǣ�������")
c.addCity("p101010001006","��Է����Է��")
c.addCity("p101010001007","���أ�������")
c.addCity("p101010001008","��ˮ��������")
c.addCity("p101010001009","�Դ���Դ��")
c.addCity("p101010001010","���ˣ�������")
c.addCity("p101010001011","˳ƽ��������")
c.addCity("p101010001012","���أ��ʺ���")
c.addCity("p101010001013","������������")
c.addCity("p101010001014","�ˮ���ˮ��")
c.addCity("p101010001015","������������")
c.addCity("p101010001016","���£�������")
c.addCity("p101010001017","���أ�������")
c.addCity("p101010001018","�ݳǣ��ݳ���")
c.addCity("p101010001019","������������")
c.addCity("p101010001020","��ƽ����ƽ��")
c.addCity("p101010001021","��Ұ��������")
c.addCity("p101010001022","��أ������")
p1.addProvinces(c);
c = new provinceCN("�ӱ�","p101010002","������")
c.addCity("p101010002001","��ͷ��")
c.addCity("p101010002002","������")
c.addCity("p101010002003","������")
c.addCity("p101010002004","�Ӽ���")
c.addCity("p101010002005","���أ��������»�����")
c.addCity("p101010002006","���أ�������")
c.addCity("p101010002007","���⣨������")
c.addCity("p101010002008","���ˣ��ջ���")
c.addCity("p101010002009","��ɽ����ɽ��")
c.addCity("p101010002010","������������")
c.addCity("p101010002011","��Ƥ����Ƥ��")
c.addCity("p101010002012","���ţ�ɣ԰��")
c.addCity("p101010002013","���أ�������")
c.addCity("p101010002014","�ϴ���������أ��ϴ���")
p1.addProvinces(c);
c = new provinceCN("�ӱ�","p101010003","������")
c.addCity("p101010003001","�䰲��")
c.addCity("p101010003002","�������ϱ��綫С�ʹ�")
c.addCity("p101010003003","���ģ�������")
c.addCity("p101010003004","�ɰ����ɰ���")
c.addCity("p101010003005","������������")
c.addCity("p101010003006","���أ������")
c.addCity("p101010003007","���أ�������")
c.addCity("p101010003008","���磨������")
c.addCity("p101010003009","���꣨�ٛ�����")
c.addCity("p101010003010","���أ�����ͷ��")
c.addCity("p101010003011","���󣨼�����")
c.addCity("p101010003012","��ƽ����ƽ��")
c.addCity("p101010003013","���գ�������")
c.addCity("p101010003014","κ�أ�κ����")
c.addCity("p101010003015","���ܣ�������")
p1.addProvinces(c);
c = new provinceCN("�ӱ�","p101010004","��ˮ��")
c.addCity("p101010004001","������")
c.addCity("p101010004002","������")
c.addCity("p101010004003","��ǿ����ǿ��")
c.addCity("p101010004005","��ǿ����ǿ��")
c.addCity("p101010004004","���أ�������")
c.addCity("p101010004006","������������")
c.addCity("p101010004007","��ƽ����ƽ��")
c.addCity("p101010004008","�ʳǣ�֣����")
c.addCity("p101010004009","���أ�������")
c.addCity("p101010004010","���ǣ�������")
p1.addProvinces(c);
c = new provinceCN("�ӱ�","p101010005","�ȷ���")
c.addCity("p101010005001","������")
c.addCity("p101010005002","������")
c.addCity("p101010005003","�̰����̰���")
c.addCity("p101010005004","���壨������")
c.addCity("p101010005005","��ӣ�������")
c.addCity("p101010005006","��ǣ�ƽ����")
c.addCity("p101010005007","�İ����İ���")
c.addCity("p101010005008","�󳧻��������أ�����")
p1.addProvinces(c);
c = new provinceCN("�ӱ�","p101010007","�ػʵ���")
c.addCity("p101010007001","���裨������")
c.addCity("p101010007002","������������")
c.addCity("p101010007003","¬����¬����")
c.addCity("p101010007004","�������������أ�������")
p1.addProvinces(c);
c = new provinceCN("�ӱ�","p101010008","ʯ��ׯ��")
c.addCity("p101010008001","������")
c.addCity("p101010008002","޻����")
c.addCity("p101010008003","������")
c.addCity("p101010008004","������")
c.addCity("p101010008005","¹Ȫ��")
c.addCity("p101010008006","���꣨΢ˮ��")
c.addCity("p101010008007","������������")
c.addCity("p101010008008","��ǣ������")
c.addCity("p101010008009","���ƣ�������")
c.addCity("p101010008010","���٣�������")
c.addCity("p101010008011","���أ�������")
c.addCity("p101010008012","����������")
c.addCity("p101010008013","�޻ʣ��޻���")
c.addCity("p101010008014","�޼����޼���")
c.addCity("p101010008015","ƽɽ��ƽɽ��")
c.addCity("p101010008016","Ԫ�ϣ�������")
c.addCity("p101010008017","���أ�������")
p1.addProvinces(c);
c = new provinceCN("�ӱ�","p101010009","��ɽ��")
c.addCity("p101010009001","������")
c.addCity("p101010009002","����")
c.addCity("p101010009003","Ǩ����")
c.addCity("p101010009004","���󣨷�����")
c.addCity("p101010009005","���أ�������")
c.addCity("p101010009006","���ϣ�������")
c.addCity("p101010009007","��ͤ����ͤ��")
c.addCity("p101010009008","Ǩ�����˳���")
c.addCity("p101010009009","���������")
c.addCity("p101010009010","�ƺ����ƺ���")
p1.addProvinces(c);
c = new provinceCN("�ӱ�","p101010010","��̨��")
c.addCity("p101010010001","�Ϲ���")
c.addCity("p101010010002","ɳ����")
c.addCity("p101010010003","�ٳǣ��ٳ���")
c.addCity("p101010010004","����������")
c.addCity("p101010010005","���磨������")
c.addCity("p101010010006","¡Ң��¡Ң��")
c.addCity("p101010010007","���أ��γ���")
c.addCity("p101010010008","�Ϻͣ�������")
c.addCity("p101010010009","�����������")
c.addCity("p101010010010","��¹����¹��")
c.addCity("p101010010011","�ºӣ��º���")
c.addCity("p101010010012","���ڣ�������")
c.addCity("p101010010013","ƽ�磨������")
c.addCity("p101010010014","���أ�������")
c.addCity("p101010010015","��ӣ�����ׯ��")
c.addCity("p101010010016","������������")
p1.addProvinces(c);
c = new provinceCN("�ӱ�","p101010011","�żҿ���")
c.addCity("p101010011001","�������żҿ���������")
c.addCity("p101010011002","�ű����ű���")
c.addCity("p101010011003","������������")
c.addCity("p101010011004","��Դ��ƽ������")
c.addCity("p101010011005","���壨�Ϻ�ǵ��")
c.addCity("p101010011006","ε�أ�ε����")
c.addCity("p101010011007","��ԭ��������")
c.addCity("p101010011008","�������Ϲ�����")
c.addCity("p101010011009","��ȫ���׼�ׯ��")
c.addCity("p101010011010","������ɳ����")
c.addCity("p101010011011","��¹����¹��")
c.addCity("p101010011012","��ǣ������")
c.addCity("p101010011013","������������")
p1.addProvinces(c);
c = new provinceCN("�ӱ�","p101010012","�е���")
c.addCity("p101010012001","�е£��°����")
c.addCity("p101010012002","��¡����¡��")
c.addCity("p101010012003","ƽȪ��ƽȪ��")
c.addCity("p101010012004","��ƽ����ƽ��")
c.addCity("p101010012005","¡����¡����")
c.addCity("p101010012006","�������������أ������")
c.addCity("p101010012007","������������أ�Χ����")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101011","������");
c = new provinceCN("������","p101011001","���˰��루�Ӹ���棩")
c.addCity("p101011001001","���꣨������")
c.addCity("p101011001002","���ӣ�������")
c.addCity("p101011001003","Į�ӣ����ּ���")
p1.addProvinces(c);
c = new provinceCN("������","p101011002","�ں���")
c.addCity("p101011002001","������")
c.addCity("p101011002002","���������")
c.addCity("p101011002003","�۽����۽���")
c.addCity("p101011002004","ѷ�ˣ������")
c.addCity("p101011002005","���⣨������")
p1.addProvinces(c);

c = new provinceCN("������","p101011003","���������")
c.addCity("p101011003001","ګ����")
c.addCity("p101011003002","������������")
c.addCity("p101011003003","������������")
c.addCity("p101011003004","̩����̩����")
c.addCity("p101011003005","���ϣ�������")
c.addCity("p101011003006","��ԣ����ԣ��")
c.addCity("p101011003007","��ɽ����ɽ��")
c.addCity("p101011003008","�˶����˶���")
c.addCity("p101011003009","��Ȫ����Ȫ��")
p1.addProvinces(c);

c = new provinceCN("������","p101011004","������")
c.addCity("p101011004001","���ݣ�������")
c.addCity("p101011004002","��Դ����Դ��")
c.addCity("p101011004003","�ֵ飨�ֵ���")
c.addCity("p101011004004","�Ŷ������ɹ��������أ�̩����")
p1.addProvinces(c);
c = new provinceCN("������","p101011005","�绯��")
c.addCity("p101011005001","������")
c.addCity("p101011005002","�ض���")
c.addCity("p101011005003","������")
c.addCity("p101011005004","������������")
c.addCity("p101011005005","������������")
c.addCity("p101011005006","��ԣ������")
c.addCity("p101011005007","�찲���찲��")
c.addCity("p101011005008","��ˮ����ˮ��")
c.addCity("p101011005009","���⣨������")
p1.addProvinces(c);

c = new provinceCN("������","p101011006","������")
c.addCity("p101011006001","�����У�")
c.addCity("p101011006002","���񣨳�����")
p1.addProvinces(c);

c = new provinceCN("������","p101011007","��������")
c.addCity("p101011007001","˫����")
c.addCity("p101011007002","��־��")
c.addCity("p101011007003","�峣��")
c.addCity("p101011007004","������")
c.addCity("p101011007005","������������")
c.addCity("p101011007006","������������")
c.addCity("p101011007007","������������")
c.addCity("p101011007008","���أ�������")
c.addCity("p101011007009","���壨������")
c.addCity("p101011007010","ľ����ľ����")
c.addCity("p101011007011","ͨ�ӣ�ͨ����")
c.addCity("p101011007012","���٣�������")
p1.addProvinces(c);
c = new provinceCN("������","p101011008","�׸���")
c.addCity("p101011008001","�ܱ���������")
c.addCity("p101011008002","����������")
p1.addProvinces(c);
c = new provinceCN("������","p101011009","��ľ˹��")
c.addCity("p101011009001","ͬ����")
c.addCity("p101011009002","������")
c.addCity("p101011009003","���ϣ�������")
c.addCity("p101011009004","�봨��������")
c.addCity("p101011009005","��ԭ����ԭ��")
c.addCity("p101011009006","��Զ����Զ��")
p1.addProvinces(c);
c = new provinceCN("������","p101011010","ĵ������")
c.addCity("p101011010001","������")
c.addCity("p101011010002","��Һ���")
c.addCity("p101011010003","������")
c.addCity("p101011010004","������")
c.addCity("p101011010005","������������")
c.addCity("p101011010006","�ֿڣ��ֿ���")
p1.addProvinces(c);
c = new provinceCN("������","p101011011","��̨����")
c.addCity("p101011011001","������������")
p1.addProvinces(c);
c = new provinceCN("������","p101011012","������")
c.addCity("p101011012001","������")
c.addCity("p101011012002","��ɽ��")
c.addCity("p101011012003","������������")
p1.addProvinces(c);
c = new provinceCN("������","p101011013","˫Ѽɽ��")
c.addCity("p101011013001","���ͣ�������")
c.addCity("p101011013002","���꣨������")
c.addCity("p101011013003","���壨������")
c.addCity("p101011013004","�ĺӣ��ĺ���")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101012","����");
c = new provinceCN("����","p101012001","������")
c.addCity("p101012001001","������")
c.addCity("p101012001002","�������ǹ���")
c.addCity("p101012001003","���أ�������")
c.addCity("p101012001004","�ڻƣ��ǹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101012002","������")
c.addCity("p101012002001","��أ��ǹ���")
c.addCity("p101012002002","ͨ���ǹ���")
c.addCity("p101012002003","ξ�ϣ��ǹ���")
c.addCity("p101012002004","�������ǹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101012003","�����")
c.addCity("p101012003001","��������Ȫ��")
c.addCity("p101012003002","��ӱ���ǹ���")
c.addCity("p101012003003","۱�ǣ��ǹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101012004","������")
c.addCity("p101012004001","�Ͻ�")
c.addCity("p101012004002","��ʦ")
c.addCity("p101012004003","�°�")
c.addCity("p101012004004","�ﴨ")
c.addCity("p101012004005","����")
c.addCity("p101012004006","����")
c.addCity("p101012004007","����")
c.addCity("p101012004008","����")
c.addCity("p101012004009","����")
p1.addProvinces(c);
c = new provinceCN("����","p101012005","������")
c.addCity("p101012005001","������")
c.addCity("p101012005002","���٣��ǹ���")
c.addCity("p101012005003","���ǣ��ǹ���")
c.addCity("p101012005004","��Ͽ���ǹ���")
c.addCity("p101012005005","��ƽ���ǹ���")
c.addCity("p101012005006","���磨�ǹ���")
c.addCity("p101012005007","�㴨���ǹ���")
c.addCity("p101012005008","���죨������")
c.addCity("p101012005009","�ƺӣ��ǹ���")
c.addCity("p101012005010","��Ұ���ǹ���")
c.addCity("p101012005011","ͩ�أ��ǹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101012006","ƽ��ɽ��")
c.addCity("p101012006001","�����")
c.addCity("p101012006002","������")
c.addCity("p101012006003","���ᣨ�ǹ���")
c.addCity("p101012006004","Ҷ�أ�������")
c.addCity("p101012006005","³ɽ��³����")
c.addCity("p101012006006","ۣ�أ��ǹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101012007","�����")
c.addCity("p101012007001","��ᣨ�ǹ���")
c.addCity("p101012007002","���֣��ǹ���")
c.addCity("p101012007003","���أ�ӣ��԰��")
c.addCity("p101012007004","̨ǰ���ǹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101012008","����Ͽ��")
c.addCity("p101012008001","����")
c.addCity("p101012008002","�鱦")
c.addCity("p101012008003","�ų�")
c.addCity("p101012008004","���أ���Ӫ��")
c.addCity("","¬��")
p1.addProvinces(c);
c = new provinceCN("����","p101012009","������")
c.addCity("p101012009001","����")
c.addCity("p101012009002","����")
c.addCity("p101012009003","��Σ��ǹ���")
c.addCity("p101012009004","ԭ�����ǹ���")
c.addCity("p101012009005","�ӽ򣨳ǹ���")
c.addCity("p101012009006","���𣨳ǹ���")
c.addCity("p101012009007","��ԫ���ǹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101012010","������")
c.addCity("p101012010001","Ϣ�أ��ǹ���")
c.addCity("p101012010002","�������ǹ���")
c.addCity("p101012010003","�괨���ǹ���")
c.addCity("p101012010004","��ɽ���ǹ���")
c.addCity("p101012010005","��ʼ���ǹ���")
c.addCity("p101012010006","�̳ǣ��ǹ���")
c.addCity("p101012010007","��ɽ���ǹ���")
c.addCity("p101012010008","���أ��¼���")
p1.addProvinces(c);
c = new provinceCN("����","p101012011","�����")
c.addCity("p101012011001","������")
c.addCity("p101012011002","������")
c.addCity("p101012011003","۳�꣨������")
c.addCity("p101012011004","��ǣ��ǹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101012012","֣����")
c.addCity("p101012012001","��֣")
c.addCity("p101012012002","�Ƿ�")
c.addCity("p101012012003","���壨Т����")
c.addCity("p101012012004","����")
c.addCity("p101012012005","����")
c.addCity("p101012012006","��Ĳ")
p1.addProvinces(c);
c = new provinceCN("����","p101012013","������")
c.addCity("p101012013001","����")
c.addCity("p101012013002","����")
c.addCity("p101012013003","����")
c.addCity("p101012013004","�������廯��")
c.addCity("p101012013005","���죨ľ����")
c.addCity("p101012013006","���أ���Ȫ��")
p1.addProvinces(c);
c = new provinceCN("����","p101012014","�ױ���")
c.addCity("p101012014001","���أ��ǹ���")
c.addCity("p101012014002","��أ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101012015","������")
c.addCity("p101012015001","������")
c.addCity("p101012015002","�ݳǣ��ǹ���")
c.addCity("p101012015003","��Ȩ���ǹ���")
c.addCity("p101012015004","���꣨�ǹ���")
c.addCity("p101012015005","��أ��ǹ���")
c.addCity("p101012015006","���أ��ǹ���")
c.addCity("p101012015007","�ϳǣ��ǹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101012016","�ܿ���")
c.addCity("p101012016001","�����")
c.addCity("p101012016002","�������ǹ���")
c.addCity("p101012016003","�������ǹ���")
c.addCity("p101012016004","��ˮ���ǹ���")
c.addCity("p101012016005","̫�����ǹ���")
c.addCity("p101012016006","¹�أ��ǹ���")
c.addCity("p101012016007","���ǣ��ǹ���")
c.addCity("p101012016008","�������ǹ���")
c.addCity("p101012016009","���𣨳ǹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101012017","פ�����")
c.addCity("p101012017001","ȷɽ��������")
c.addCity("p101012017002","��������ˮ��")
c.addCity("p101012017003","������������")
c.addCity("p101012017004","��ƽ���س���")
c.addCity("p101012017005","�ϲ̣��̶���")
c.addCity("p101012017006","���ϣ�������")
c.addCity("p101012017007","ƽ�ߣ��Ż���")
c.addCity("p101012017008","�²̣�������")
c.addCity("p101012017009","������������")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101013","���");
c = new provinceCN("���","p101013001001","���")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101014","����");
c = new provinceCN("����","p101014083","������")
c.addCity("p101014038001","��ˮ��")
c.addCity("p101014038002","������")
p1.addProvinces(c);
c = new provinceCN("����","p101014001","ʮ����")
c.addCity("p101014001001","��������")
c.addCity("p101014001002","���أ��ǹ���")
c.addCity("p101014001003","��ɽ���ǹ���")
c.addCity("p101014001004","���أ��ǹ���")
c.addCity("p101014001005","�������ǹ���")
c.addCity("p101014001006","��Ϫ���ǹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101014002","�人��")
p1.addProvinces(c);
c = new provinceCN("����","p101014003","�˲���")
c.addCity("p101014003001","�˶���")
c.addCity("p101014003002","�����У��ǹ���")
c.addCity("p101014003003","��ɽ���ŷ���")
c.addCity("p101014003004","֦���У�")
c.addCity("p101014003005","Զ����������")
c.addCity("p101014003006","梹飨éƺ��")
c.addCity("p101014003007","���������������أ�����ƺ��")
c.addCity("p101014003008","��������������أ������")
p1.addProvinces(c);
c = new provinceCN("����","p101014005","������")
c.addCity("p101014005001","�����")
c.addCity("p101014005002","���㣨������")
c.addCity("p101014005003","ͨ�ǣ���ˮ��")
c.addCity("p101014005004","�����������")
c.addCity("p101014005005","ͨɽ��ͨ����")
p1.addProvinces(c);
c = new provinceCN("����","p101014006","��ʯ��")
c.addCity("p101014006001","������")
c.addCity("p101014006002","���£��˹���")
p1.addProvinces(c);

c = new provinceCN("����","p101014007","�Ƹ���")
c.addCity("p101014007001","�����")
c.addCity("p101014007002","��Ѩ��")
c.addCity("p101014007003","�찲���ǹ���")
c.addCity("p101014007004","�����ɽ��")
c.addCity("p101014007005","Ӣɽ����Ȫ��")
c.addCity("p101014007006","�ˮ����Ȫ��")
c.addCity("p101014007007","ޭ���������")
c.addCity("p101014007008","��÷����÷��")
c.addCity("p101014007009","�ŷ磨�ŷ���")
p1.addProvinces(c);

c = new provinceCN("����","p101014011","��ʩ���������������ݣ���ʩ�У�")
c.addCity("p101014011001","������")
c.addCity("p101014011002","��ʼ��ҵ����")
c.addCity("p101014011003","�Ͷ���������")
c.addCity("p101014011004","��������ɽ��")
c.addCity("p101014011005","�̷ᣨ����ɽ��")
c.addCity("p101014011006","��������")
c.addCity("p101014011007","�׷壨������")
p1.addProvinces(c);

c = new provinceCN("����","p101014013","�差��")
c.addCity("p101014013001","�Ϻӿ���")
c.addCity("p101014013002","������")
c.addCity("p101014013003","�˳���")
c.addCity("p101014013004","���ģ��ǹ���")
c.addCity("p101014013005","�ȳǣ��ǹ���")
c.addCity("p101014013006","�������ǹ���")
c.addCity("p101014013007","������������")
p1.addProvinces(c);

c = new provinceCN("����","p101014014","������")
c.addCity("p101014014001","ʯ����")
c.addCity("p101014014002","�����")
c.addCity("p101014014003","������")
c.addCity("p101014014004","���꣨��Ѩ��")
c.addCity("p101014014005","��������������")
c.addCity("p101014014006","�������ݳ���")
p1.addProvinces(c);
c = new provinceCN("����","p101014015","������")
c.addCity("p101014015001","������")
c.addCity("p101014015002","ɳ��ɳ����")
c.addCity("p101014015003","��ɽ��������")
p1.addProvinces(c);
c = new provinceCN("����","p101014016","Т����")
c.addCity("p101014016001","Ӧ����")
c.addCity("p101014016002","��½��")
c.addCity("p101014016003","������")
c.addCity("p101014016004","Т������԰��")
c.addCity("p101014016005","���򣨳ǹ���")
c.addCity("p101014016006","���Σ��ǹ���")
c.addCity("p101014016007","Զ����������")
p1.addProvinces(c);
c = new provinceCN("����","p101014017","������")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101015","����");
c = new provinceCN("����","p101015001","��ɳ��/��")
c.addCity("p101015001001","�����������")
c.addCity("p101015001002","���磨��̶��")
c.addCity("p101015001003","���ǣ���������")
c.addCity("p101015001004","��ɳ�أ���ɳ��")
p1.addProvinces(c);
c = new provinceCN("����","p101015002","��̶��/��")
c.addCity("p101015002001","����")
c.addCity("p101015002002","��ɽ����Ϫ��")
p1.addProvinces(c);
c = new provinceCN("����","p101015003","������")
c.addCity("p101015003001","����")
c.addCity("p101015003002","���أ��ǹ���")
c.addCity("p101015003003","���꣨ϼ����")
c.addCity("p101015003004","�����أ��˿���")
p1.addProvinces(c);
c = new provinceCN("����","p101015004","������")
c.addCity("p101015004001","���磨�ǹ���")
c.addCity("p101015004002","����")
c.addCity("p101015004003","��أ������")
c.addCity("p101015004004","��墣��ǹ���")
c.addCity("p101015004005","��Դ���Ľ���")
c.addCity("p101015004006","ʯ�ţ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101015005","������")
c.addCity("p101015005001","����")
c.addCity("p101015005002","����")
c.addCity("p101015005003","���ϣ�������")
c.addCity("p101015005004","��ɽ��������")
c.addCity("p101015005005","���������")
p1.addProvinces(c);
c = new provinceCN("����","p101015006","������")
c.addCity("p101015006001","����")
c.addCity("p101015006002","����")
c.addCity("p101015006003","���ݣ��ǹ���")
c.addCity("p101015006004","������������")
c.addCity("p101015006005","ƽ����������")
c.addCity("p101015006006","�����أ��ټ�����")
p1.addProvinces(c);
c = new provinceCN("����","p101015007","������/��")
c.addCity("p101015007001","�۶���������")
c.addCity("p101015007002","���")
c.addCity("p101015007003","���ۣ���Ϫ��")
c.addCity("p101015007004","¡�أ��Һ���")
c.addCity("p101015007005","���ڣ�������")
c.addCity("p101015007006","������������")
c.addCity("p101015007007","��������ʯ��")
c.addCity("p101015007008","�ǲ����������أ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101015008","������")
c.addCity("p101015008001","�佭")
c.addCity("p101015008002","���أ�������")
c.addCity("p101015008003","�ҽ����һ�����")
c.addCity("p101015008004","��������ƺ��")
p1.addProvinces(c);
c = new provinceCN("����","p101015009","¦����")
c.addCity("p101015009001","��ˮ��")
c.addCity("p101015009002","��Դ")
c.addCity("p101015009003","˫�壨������")
c.addCity("p101015009004","�»�����÷��")
p1.addProvinces(c);
c = new provinceCN("����","p101015010","������")
c.addCity("p101015010001","�齭")
c.addCity("p101015010002","���꣨������")
c.addCity("p101015010003","��Ϫ��������")
c.addCity("p101015010004","���֣�¬����")
c.addCity("p101015010005","�з����з���")
c.addCity("p101015010006","��ͬ���ֳ���")
c.addCity("p101015010007","�������������أ��ߴ���")
c.addCity("p101015010008","�»ζ��������أ��»���")
c.addCity("p101015010009","�ƽ����������أ��ƽ���")
c.addCity("p101015010010","�������嶱�������أ�������")
c.addCity("p101015010011","ͨ�����������أ�˫����")
p1.addProvinces(c);
c = new provinceCN("����","p101015011","������")
c.addCity("p101015011001","����")
c.addCity("p101015011002","����")
c.addCity("p101015011003","����")
c.addCity("p101015011004","����")
c.addCity("p101015011005","����")
c.addCity("p101015011006","�κ�")
c.addCity("p101015011007","��")
c.addCity("p101015011008","����")
c.addCity("p101015011009","���")
p1.addProvinces(c);
c = new provinceCN("����","p101015013","��������������������")
c.addCity("p101015013001","������")
c.addCity("p101015013002","��Ϫ����Ϫ��")
c.addCity("p101015013003","��ˣ��ӽ���")
c.addCity("p101015013004","��ԫ����ԫ��")
c.addCity("p101015013005","������Ǩ����")
c.addCity("p101015013006","���ɣ�������")
c.addCity("p101015013007","��˳����Ϫ��")
c.addCity("p101015013008","��ɽ������")
p1.addProvinces(c);
c = new provinceCN("����","p101015014","�żҽ���")
c.addCity("p101015014001","ɣֲ���Դ��")
c.addCity("p101015014002","������������")
p1.addProvinces(c);
c = new provinceCN("����","p101015016","������")
c.addCity("p101015016001","��������������")
c.addCity("p101015016002","���أ�������")
c.addCity("p101015016003","������������")
c.addCity("p101015016004","��Զ��˴����")
c.addCity("p101015016005","�����Ȫ��")
c.addCity("p101015016006","��ɽ��������")
c.addCity("p101015016007","˫�ƣ�����")
c.addCity("p101015016008","�������Ϫ��")
c.addCity("p101015016009","�������������أ�������")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	
var p1 = new provincesList("CN","p101016","����");
c = new provinceCN("����","p101016002","������")
c.addCity("p101016002001","�����")
c.addCity("p101016002002","��̳��")
c.addCity("p101016002003","������")
p1.addProvinces(c);
c = new provinceCN("����","p101016003","������")
c.addCity("p101016003001","���ݣ�������")
c.addCity("p101016003002","��������Ӫ��")
c.addCity("p101016003003","����������")
c.addCity("p101016003004","�����������")
c.addCity("p101016003005","���󣨸�������")
c.addCity("p101016003006","��ˮ��������")
p1.addProvinces(c);
c = new provinceCN("����","p101016005","���Ƹ���")
c.addCity("p101016005001","���ܣ������")
c.addCity("p101016005002","���ƣ���ɽ��")
c.addCity("p101016005003","������ţɽ��")
c.addCity("p101016005004","���ϣ��°���")
p1.addProvinces(c);
c = new provinceCN("����","p101016006","�Ͼ���")
c.addCity("p101016006001","��������ɽ��")
c.addCity("p101016006002","���֣��齭��")
c.addCity("p101016006003","���ϣ�������")
c.addCity("p101016006004","��ˮ���ڳ���")
c.addCity("p101016006005","�ߴ�����Ϫ��")
p1.addProvinces(c);
c = new provinceCN("����","p101016007","��ͨ��")
c.addCity("p101016007001","������")
c.addCity("p101016007002","������")
c.addCity("p101016007003","ͨ����")
c.addCity("p101016007004","�����")
c.addCity("p101016007005","�綫�������")
c.addCity("p101016007006","������������")
p1.addProvinces(c);
c = new provinceCN("����","p101016009","������")
c.addCity("p101016009008","������")
c.addCity("p101016009009","������")
c.addCity("p101016009010","������")
c.addCity("p101016009011","ƽ����")
c.addCity("p101016009001","������")
c.addCity("p101016009002","�����")
c.addCity("p101016009003","�⽭��")
c.addCity("p101016009004","��ɽ��")
c.addCity("p101016009005","̫����")
c.addCity("p101016009006","������")
c.addCity("p101016009007","�żҸ���")
p1.addProvinces(c);
c = new provinceCN("����","p101016011","������")
c.addCity("p101016011001","������������")
c.addCity("p101016011002","��ɽ��������")
c.addCity("p101016011003","��ɽ����ͤ��")
c.addCity("p101016011004","������")
c.addCity("p101016011005","������")
p1.addProvinces(c);
c = new provinceCN("����","p101016012","������")
c.addCity("p101016012001","������")
c.addCity("p101016012002","������")
c.addCity("p101016012003","ͭɽ��������Ȫɽ����")
c.addCity("p101016012004","��������")
c.addCity("p101016012005","���أ������")
c.addCity("p101016012006","���أ������")
p1.addProvinces(c);
c = new provinceCN("����","p101016013","�γ���")
c.addCity("p101016013001","��̨��")
c.addCity("p101016013002","�����")
c.addCity("p101016013003","�ζ����˻���")
c.addCity("p101016013004","�������ϵ���")
c.addCity("p101016013005","������������")
c.addCity("p101016013006","������������")
c.addCity("p101016013007","��ˮ����ˮ��")
c.addCity("p101016013008","������������")
p1.addProvinces(c);
c = new provinceCN("����","p101016014","������")
c.addCity("p101016014001","������������")
c.addCity("p101016014002","������")
c.addCity("p101016014003","������")
c.addCity("p101016014004","������")
c.addCity("p101016014005","��Ӧ��������")
p1.addProvinces(c);
c = new provinceCN("����","p101016016","����")
c.addCity("p101016016001","������")
c.addCity("p101016016002","������")
c.addCity("p101016016003","������")
c.addCity("p101016016004","��ͽ��������������")
p1.addProvinces(c);
c = new provinceCN("����","p101016017","̩����")
c.addCity("p101016017001","������")
c.addCity("p101016017002","������")
c.addCity("p101016017003","�˻���")
c.addCity("p101016017004","̩��")
p1.addProvinces(c);
c = new provinceCN("����","p101016018","��Ǩ��")
c.addCity("p101016018001","��ԥ��˳����")
c.addCity("p101016018002","�����������")
c.addCity("p101016018003","������������")
c.addCity("p101016018004","���飨������")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101017","����");
c = new provinceCN("����","p101017001","�ϲ���")
c.addCity("p101017001001","�ϲ���������")
c.addCity("p101017001002","�½���������")
c.addCity("p101017001003","���壨������")
c.addCity("p101017001004","���ͣ������")
p1.addProvinces(c);
c = new provinceCN("����","p101017002","�Ž���")
c.addCity("p101017002001","�Ž���ɳ�ӽ���")
c.addCity("p101017002002","������������")
c.addCity("p101017002003","��ˮ��������")
c.addCity("p101017002004","���ޣ�Ϳ����")
c.addCity("p101017002005","�°�����ͤ��")
c.addCity("p101017002006","���ӣ��Ͽ���")
c.addCity("p101017002007","������������")
c.addCity("p101017002008","���ڣ�˫����")
c.addCity("p101017002009","����������")
c.addCity("p101017002010","���")
p1.addProvinces(c);
c = new provinceCN("����","p101017003","������")
c.addCity("p101017003001","���ˣ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101017004","������")
c.addCity("p101017004001","���")
c.addCity("p101017004002","�Ͽ�")
c.addCity("p101017004003","���أ�÷����")
c.addCity("p101017004004","�ŷᣨ�ζ���")
c.addCity("p101017004005","���ࣨ�ϰ���")
c.addCity("p101017004006","���̣���ɽ��")
c.addCity("p101017004007","��Զ����ɽ��")
c.addCity("p101017004008","���壨��ˮ��")
c.addCity("p101017004009","���ϣ�������")
c.addCity("p101017004010","���ϣ�������")
c.addCity("p101017004011","ȫ�ϣ�������")
c.addCity("p101017004012","������÷����")
c.addCity("p101017004013","�˹�������")
c.addCity("p101017004014","�ڶ���������")
c.addCity("p101017004015","������潭��")
c.addCity("p101017004016","ʯ�ǣ��ٽ���")
c.addCity("p101017004017","Ѱ�ڣ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101017005","������")
c.addCity("p101017005001","��ƽ")
c.addCity("p101017005002","������������")
p1.addProvinces(c);
c = new provinceCN("����","p101017006","������")
c.addCity("p101017006001","����")
c.addCity("p101017006002","��ᣨ������")
c.addCity("p101017006003","��ɽ����Ϫ��")
c.addCity("p101017006004","Ǧɽ���ӿ���")
c.addCity("p101017006005","��壨�����")
c.addCity("p101017006006","߮����߮����")
c.addCity("p101017006007","��ɣ������")
c.addCity("p101017006008","������۶����")
c.addCity("p101017006009","���꣨��Ӫ��")
c.addCity("p101017006010","��Դ��������")
p1.addProvinces(c);
c = new provinceCN("����","p101017007","������")
c.addCity("p101017007001","�ϳǣ�������")
c.addCity("p101017007002","�Ϸᣨ�ٳ���")
c.addCity("p101017007003","�质���շ���")
c.addCity("p101017007004","���ʣ���ɽ��")
c.addCity("p101017007005","�ְ�����Ϫ��")
c.addCity("p101017007006","�˻ƣ������")
c.addCity("p101017007007","��Ϫ���׳���")
c.addCity("p101017007008","��Ϫ�������")
c.addCity("p101017007009","���磨Т����")
c.addCity("p101017007010","�����꺽���")
p1.addProvinces(c);
c = new provinceCN("����","p101017008","Ƽ����")
c.addCity("p101017008001","���ڣ�������")
c.addCity("p101017008002","��������ͤ��")
c.addCity("p101017008003","«Ϫ��«Ϫ��")
p1.addProvinces(c);
c = new provinceCN("����","p101017009","�˴���")
c.addCity("p101017009001","���")
c.addCity("p101017009002","����")
c.addCity("p101017009003","�߰�")
c.addCity("p101017009004","���£��봨��")
c.addCity("p101017009005","���أ�������")
c.addCity("p101017009006","�˷ᣨ�²���")
c.addCity("p101017009007","�ϸߣ�������")
c.addCity("p101017009008","ͭ�ģ�������")
c.addCity("p101017009009","������˫Ϫ��")
p1.addProvinces(c);
c = new provinceCN("����","p101017010","������")
c.addCity("p101017010001","����ɽ")
c.addCity("p101017010002","��ˮ���ķ���")
c.addCity("p101017010003","Ͽ����ˮ�ߣ�")
c.addCity("p101017010004","�¸ɣ�����")
c.addCity("p101017010005","���ᣨ������")
c.addCity("p101017010006","̩�ͣ��ν���")
c.addCity("p101017010007","�촨��Ȫ����")
c.addCity("p101017010008","�򰲣�ܽ����")
c.addCity("p101017010009","������ƽ����")
c.addCity("p101017010010","���£��̴���")
p1.addProvinces(c);
c = new provinceCN("����","p101017011","ӥ̶��")
c.addCity("p101017011001","�཭���˲���")
c.addCity("p101017011002","��Ϫ")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	
var p1 = new provincesList("CN","","����");
c = new provinceCN("����","","�ϲ���")
c.addCity("","�ϲ���������")
c.addCity("","�½���������")
c.addCity("","���壨������")
c.addCity("","���ͣ������")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101018","����");
c = new provinceCN("����","p101018001","������")
c.addCity("p101018001001","�»���")
c.addCity("p101018001002","��̨��")
c.addCity("p101018001003","������")
c.addCity("p101018001004","ũ����ũ����")
p1.addProvinces(c);
c = new provinceCN("����","p101018002","������")
c.addCity("p101018002001","��ʯ��")
c.addCity("p101018002002","�Ժ���")
c.addCity("p101018002003","�����")
c.addCity("p101018002004","������")
c.addCity("p101018002005","��������ǰ��")
p1.addProvinces(c);
c = new provinceCN("����","p101018003","��ƽ��")
c.addCity("p101018003001","˫����")
c.addCity("p101018003002","��������")
c.addCity("p101018003003","������������")
c.addCity("p101018003004","��ͨ���������أ���ͨ�壩")
p1.addProvinces(c);
c = new provinceCN("����","p101018004","�ӱ߳����������ݣ��Ӽ��У�")
c.addCity("p101018004001","�Ӽ���")
c.addCity("p101018004002","ͼ����")
c.addCity("p101018004003","�ػ���")
c.addCity("p101018004004","������")
c.addCity("p101018004005","������")
c.addCity("p101018004006","������")
c.addCity("p101018004007","���壨������")
c.addCity("p101018004008","��ͼ��������")
p1.addProvinces(c);
c = new provinceCN("����","p101018005","�׳���")
c.addCity("p101018005001","����")
c.addCity("p101018005002","�����")
c.addCity("p101018005003","���ڣ�������")
c.addCity("p101018005004","ͨ�ܣ���ͨ��")
p1.addProvinces(c);
c = new provinceCN("����","p101018006","��ɽ��")
c.addCity("p101018006001","�ٽ���")
c.addCity("p101018006002","��Դ����ұ�����")
c.addCity("p101018006003","���ɣ�������")
c.addCity("p101018006004","���������")
c.addCity("p101018006005","���׳����������أ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101018007","ͨ����")
c.addCity("p101018007001","÷�ӿ���")
c.addCity("p101018007002","������")
c.addCity("p101018007003","ͨ�������ï��")
c.addCity("p101018007004","���ϣ�������")
c.addCity("p101018007005","���ӣ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101018008","��ԭ��")
c.addCity("p101018008001","���ࣨ��ƶ����")
c.addCity("p101018008002","���루������")
c.addCity("p101018008003","Ǭ����Ǭ����")
c.addCity("p101018008004","ǰ������˹�ɹ��������أ�ǰ����")
p1.addProvinces(c);
c = new provinceCN("����","p101018009","��Դ��")
c.addCity("p101018009001","���ᣨ������")
c.addCity("p101018009002","���ɣ���Ȫ��")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101019","����");
c = new provinceCN("����","p101019001","��ɽ��")
c.addCity("p101019001001","����")
c.addCity("p101019001002","̨����̨����")
c.addCity("p101019001003","������������أ�")
p1.addProvinces(c);
c = new provinceCN("����","p101019002","��Ϫ��/��")
c.addCity("p101019002001","��������������")
p1.addProvinces(c);
c = new provinceCN("����","p101019003","������")
c.addCity("p101019003001","�߷���")
c.addCity("p101019003002","������")
c.addCity("p101019003003","ׯ�ӣ�ׯ����")
c.addCity("p101019003004","��������ɽ����")
p1.addProvinces(c);
c = new provinceCN("����","p101019004","������")
c.addCity("p101019004001","���")
c.addCity("p101019004002","����")
c.addCity("p101019004003","�������������")
p1.addProvinces(c);
c = new provinceCN("����","p101019005","��˳��/��")
c.addCity("p101019005001","�±�����������")
c.addCity("p101019005002","��ԭ����������")
p1.addProvinces(c);
c = new provinceCN("����","p101019006","������")
c.addCity("p101019006001","���䣨������")
c.addCity("p101019006002","�����ɹ���������")
p1.addProvinces(c);
c = new provinceCN("����","p101019007","��«����")
c.addCity("p101019007001","�˳�")
c.addCity("p101019007002","���У�������")
c.addCity("p101019007003","������������")
p1.addProvinces(c);
c = new provinceCN("����","p101019008","������")
c.addCity("p101019008001","����")
c.addCity("p101019008002","��ɽ����ɽ��")
c.addCity("p101019008003","���أ�������")
c.addCity("p101019008004","�躣")
p1.addProvinces(c);
c = new provinceCN("����","p101019009","�̽���")
c.addCity("p101019009001","���ݣ�������")
c.addCity("p101019009002","��ɽ���̽���˫̨������")
p1.addProvinces(c);
c = new provinceCN("����","p101019010","������")
c.addCity("p101019010001","���У�������")
c.addCity("p101019010002","��ƽ����ƽ��")
c.addCity("p101019010003","���⣨������")
c.addCity("p101019010004","����������")
p1.addProvinces(c);
c = new provinceCN("����","p101019011","Ӫ����")
c.addCity("p101019011001","��ʯ��")
c.addCity("p101019011002","����")
p1.addProvinces(c);
c = new provinceCN("����","p101019012","������/��")
c.addCity("p101019012001","����")
p1.addProvinces(c);
c = new provinceCN("����","p101019013","������/��")
c.addCity("p101019013001","����")
c.addCity("p101019013002","��ԭ")
c.addCity("p101019013003","���ᣨ������")
c.addCity("p101019013004","��ͼ����ͼ��")
p1.addProvinces(c);
c = new provinceCN("����","p101019014","������")
c.addCity("p101019014001","��Ʊ")
c.addCity("p101019014002","��Դ")
c.addCity("p101019014003","��ƽ��Ҷ������")
c.addCity("p101019014004","�����������ɹ���������")
p1.addProvinces(c);

provincesListArr = provincesListArr.concat(p1);	
var p1 = new provincesList("CN","p101020","����");
c = new provinceCN("����","p101020001001","����")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101021","���ɹ�");
c = new provinceCN("���ɹ�","p101021001","���ͺ�����")
c.addCity("p101021001001","�п��У��ǹ���")
c.addCity("p101021001002","�䴨���ɿ���������") 
c.addCity("p101021001003","���ָ�����ǹ���")
c.addCity("p101021001004","��ˮ�ӣ��ǹ���")
c.addCity("p101021001005","��Ĭ�����죨��������")
p1.addProvinces(c);
c = new provinceCN("���ɹ�","p101021003","���ֹ�����")
c.addCity("p101021003001","���ֺ���")
c.addCity("p101021003002","����������")
c.addCity("p101021003003","�����أ��ǹ���")
c.addCity("p101021003004","���͸��죨�º�����")
c.addCity("p101021003005","���������죨������ͼ��")
c.addCity("p101021003006","���������죨����������")
c.addCity("p101021003007","�����������죨������˹̫��")
c.addCity("p101021003008","�����������죨����������")
c.addCity("p101021003009","̫�����죨������")
c.addCity("p101021003010","����죨�±�������")
c.addCity("p101021003011","������죨�麹�׶���")
c.addCity("p101021003012","�����죨�ش������")
p1.addProvinces(c);
c = new provinceCN("���ɹ�","p101021005","���ױ�����")
c.addCity("p101021005001","������")
c.addCity("p101021005002","������")
c.addCity("p101021005003","������")
c.addCity("p101021005004","����ʯ")
c.addCity("p101021005005","����")
c.addCity("p101021005006","�������")
c.addCity("p101021005007","�����죨�Ǽ���")
c.addCity("p101021005008","�°Ͷ������죨����̹��Ī����")
c.addCity("p101021005009","�°Ͷ������죨���¹�����")
c.addCity("p101021005010","���״������죨�������")
c.addCity("p101021005011","���¿��������죨�����к���")
c.addCity("p101021005012","Ī�����ߴ��Ӷ��������죨�������")
p1.addProvinces(c);
c = new provinceCN("���ɹ�","p101021006","�˰��ˣ����������У�")
c.addCity("p101021006001","��������")
c.addCity("p101021006002","����ɽ")
c.addCity("p101021006003","ͻȪ��")
c.addCity("p101021006004","�ƶ�������ǰ��")
c.addCity("p101021006005","�ƶ�����������")
c.addCity("p101021006006","��������")
p1.addProvinces(c);
c = new provinceCN("���ɹ�","p101021007","ͨ����")
c.addCity("p101021007001","���ֹ���")
c.addCity("p101021007002","��³��")
c.addCity("p101021007003","������")
c.addCity("p101021007004","������")
c.addCity("p101021007005","��³����")
c.addCity("p101021007006","�ƶ����������")
c.addCity("p101021007007","�ƶ�����������")
p1.addProvinces(c);
c = new provinceCN("���ɹ�","p101021008","���")
c.addCity("p101021008001","������")
c.addCity("p101021008002","������")
c.addCity("p101021008003","��³�ƶ�����")
c.addCity("p101021008004","��������")
c.addCity("p101021008005","��������")
c.addCity("p101021008006","��ʲ������")
c.addCity("p101021008007","��ţ����")
c.addCity("p101021008008","��������")
c.addCity("p101021008009","������")
p1.addProvinces(c);
c = new provinceCN("���ɹ�","p101021009","�����첼��")
c.addCity("p101021009001","������")
c.addCity("p101021009002","������")
c.addCity("p101021009003","׿����")
c.addCity("p101021009004","�˺���")
c.addCity("p101021009005","������")
c.addCity("p101021009006","�̶���")
c.addCity("p101021009007","������")
c.addCity("p101021009008","������������")
c.addCity("p101021009009","���������ǰ��")
c.addCity("p101021009010","�������������")
c.addCity("p101021009011","��������")
p1.addProvinces(c);
c = new provinceCN("���ɹ�","p101021010","��ͷ��")
c.addCity("p101021010001","������")
c.addCity("p101021010002","��Ĭ������")
c.addCity("p101021010003","�����ï����������")
p1.addProvinces(c);
c = new provinceCN("���ɹ�","p101021011","������˹��")
c.addCity("p101021011001","��ʤ")
c.addCity("p101021011002","�������죨��������")
c.addCity("p101021011003","׼����죨Ѧ������")
c.addCity("p101021011004","���п�ǰ�죨����������")
c.addCity("p101021011005","�����죨������")
c.addCity("p101021011006","�����죨�ﲼ�����")
c.addCity("p101021011007","��������죨������ϯ����")
c.addCity("p101021011008","���п��죨������")
p1.addProvinces(c);
c = new provinceCN("���ɹ�","p101021012","�����׶���")
c.addCity("p101021012001","�ٺ���")
c.addCity("p101021012002","��ԭ��")
c.addCity("p101021012003","�����")
c.addCity("p101021012004","�����غ���")
c.addCity("p101021012005","������ǰ��")
c.addCity("p101021012006","����������")
c.addCity("p101021012007","��������")
p1.addProvinces(c);
c = new provinceCN("���ɹ�","p101021013","�ں�")
p1.addProvinces(c);
c = new provinceCN("���ɹ�","p101021014","��������")
c.addCity("p101021014001","����������")
c.addCity("p101021014002","����������")
c.addCity("p101021014003","�������")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101022","����");
c = new provinceCN("����","p101022001","������")
c.addCity("p101022001001","�����������")
c.addCity("p101022001002"," ������ϰ����")
p1.addProvinces(c);

c = new provinceCN("����","p101022002","ʯ��ɽ��")
c.addCity("p101022002001","ƽ�ޣ��ǹ���")
c.addCity("p101022002002"," ���֣���̫����")
c.addCity("p101022002003","��ũ���������")
p1.addProvinces(c);

c = new provinceCN("����","p101022003","������")
c.addCity("p101022003001","������")
c.addCity("p101022003002","��ͭϿ��")
c.addCity("p101022003003","�������ǹ���")
c.addCity("p101022003004","�������ǹ���")
c.addCity("p101022003005"," �γأ��ǹ���")
c.addCity("p101022003006","ͬ�ģ�ͬ����")
p1.addProvinces(c);
c = new provinceCN("����","p101022004","��ԭ��")
c.addCity("p101022004001","��ԭ��������")
c.addCity("p101022004002","�������ǹ���")
c.addCity("p101022004003","¡�£��ǹ���")
c.addCity("p101022004004","��Դ����ˮ��")
c.addCity("p101022004005"," ������������")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	
var p1 = new provincesList("CN","p101023","�������/����");
c = new provinceCN("�������/����","p101023001","����������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023002","����������������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023003","����͢")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023004","�Ĵ�����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023005","�µ���")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023006","����ʱ")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023007","������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023008","����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023009","��������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023010","����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023011","����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023012","����կ")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023013","����¡")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023014","���ô�")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023015","�з�")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023016","����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023017","���ױ���")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023018","��˹�����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023019","���޵��ǣ�")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023020","����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023021","����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023022","���������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023023","쳼�")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023024","����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023025","����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023026","��³����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023027","�¹�")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023028","����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023029","ϣ��")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023030","������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023031","�����ɴ�")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023032","����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023033","�鶼��˹")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023034","������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023035","ӡ��")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023036","ӡ��������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023037","����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023038","������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023039","��ɫ��")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023040","�����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023041","�����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023042","�ձ�")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023043","Լ��")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023044","������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023045","�����˹")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023046","����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023047","������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023048","����ά��")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023049","��������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023050","��֧��ʿ��")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023051","������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023052","¬ɭ��")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023053","��������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023054","ī����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023055","Ħ������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023056","Ħ�ɸ�")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023057","Ħ���")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023058","ë��������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023059","�Ჴ��")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023060","����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023061","������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023062","�������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023063","��������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023064","Ų��")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023065","������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023066","��³")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023067","���ɱ�")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023068","������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023069","������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023070","��������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023071","����˹")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023072","�����߶�")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023073","ʥ����ŵ")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023074","ɳ�ذ�����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023075","���ڼӶ�")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023076","�¼���")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023077","˹��������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023078","�Ϸ�")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023079","������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023080","˹������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023081","���")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023082","��ʿ")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023083","̹ɣ����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023084","̩��")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023085","����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023086","�������Ͷ�͸�")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023087","ͻ��˹")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023088","������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023089","�ڸɴ�")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023090","�ڿ���")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023091","Ӣ��")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023092","����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023093","��ٸ�")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023094","ί������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023095","Խ��")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023097","��˹����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023098","��Ͳ�Τ")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023099","����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p1010230100","�ͻ�˹̹")
p1.addProvinces(c);
c = new provinceCN("�������/����","p1010230101","����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023102","����·˹")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023103","�ɹ�")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023104","������")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023105","����")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023106","���")
p1.addProvinces(c);
c = new provinceCN("�������/����","p101023107","˹�工��")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);

var p1 = new provincesList("CN","���һ�ʡ��","���һ�ʡ��");
c = new provinceCN("���һ�ʡ��","�ؼ���","�ؼ���");
c.addCity("�С��ؼ��С���","�С��ؼ��С���")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);

var p1 = new provincesList("CN","p101024","�ຣ");
c = new provinceCN("�ຣ","p101024001","������")
c.addCity("p101024001001","��ͨ���������أ���ͷ��")
c.addCity("p101024001002","��Դ���ǹ���")
c.addCity("p101024001003","���У�³ɳ����")
p1.addProvinces(c);

c = new provinceCN("�ຣ","p101024002","��������")
c.addCity("p101024002001","��ͻ������������أ�������")
c.addCity("p101024002002","�������������أ���Զ��")
c.addCity("p101024002003","ƽ����ƽ����")
c.addCity("p101024002004","�ֶ����벮��")
c.addCity("p101024002005","��¡���������أ�������")
c.addCity("p101024002006","ѭ�������������أ���ʯ��")
p1.addProvinces(c);

c = new provinceCN("�ຣ","p101024003","��������������")
c.addCity("p101024003001","���̣����ǳǣ�")
c.addCity("p101024003002","�������˱���")
c.addCity("p101024003003","�ղ죨ɳ����")
c.addCity("p101024003004","��Դ���������أ�������")
p1.addProvinces(c);
c = new provinceCN("�ຣ","p101024004","���ϲ���������")
c.addCity("p101024004001","ͬ�ʣ�¡����")
c.addCity("p101024004002","�������������")
c.addCity("p101024004003","��⣨suonaihai��")
c.addCity("p101024004004","�����ɹ��������أ��Ÿ�����")
p1.addProvinces(c);
c = new provinceCN("�ຣ","p101024005","���ϲ���������")
c.addCity("p101024005001","���ͣ�ǡ��ǡ��")
c.addCity("p101024005002","ͬ�£��ذ��ɶࣩ")
c.addCity("p101024005003","��£�������")
c.addCity("p101024005004","�˺����ӿ�̲��")
c.addCity("p101024005005","���ϣ�ã�����У�")
p1.addProvinces(c);
c = new provinceCN("�ຣ","p101024006","�������������")
c.addCity("p101024006001","���ߣ�������")
c.addCity("p101024006002","���꣨��������")
c.addCity("p101024006003","�ʵ£������磩")
c.addCity("p101024006004","���գ������磩")
c.addCity("p101024006005","���Σ������ɶࣩ")
c.addCity("p101024006006","��ࣨ����")

p1.addProvinces(c);
c = new provinceCN("�ຣ","p101024007","��������������")
c.addCity("p101024007001","�����������")
c.addCity("p101024007002","�Ӷࣨ��������")
c.addCity("p101024007003","�ƶࣨ�ܾ���")
c.addCity("p101024007004","�ζࣨ�Ӽ������")
c.addCity("p101024007005","��ǫ������磩")
c.addCity("p101024007006","����ˣ�Լ��̲��")
p1.addProvinces(c);
c = new provinceCN("�ຣ","p101024008","�����ɹ������������")
c.addCity("p101024008001","�������")
c.addCity("p101024008002","���ľ��")
c.addCity("p101024008003","������ϣ�﹵��")
c.addCity("p101024008004","�������Դ��")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101025","����");
c = new provinceCN("����","p101025001","������")
c.addCity("p101025001001","���裨�ǹ���")
c.addCity("p101025001002","�ɽ��������")
c.addCity("p101025001003","���磨�ǹ���")
c.addCity("p101025001004","ü�أ��ǹ���")
c.addCity("p101025001005","¤�أ��ǹ���")
c.addCity("p101025001006","ǧ�����ǹ���")
c.addCity("p101025001007","���Σ��ųɹ���")
c.addCity("p101025001008","���أ�˫ʯ����")
c.addCity("p101025001009","̫�ף���ͷ��")
c.addCity("p101025001010","���裨�ǹ���")
c.addCity("p101025001011","���裨�ǹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101025002","������")
c.addCity("p101025002001","��ƽ��")
c.addCity("p101025002002","��ԭ���ǹ���")
c.addCity("p101025002003","������������")
c.addCity("p101025002004","Ǭ�أ��ǹ���")
c.addCity("p101025002005","���٣������")
c.addCity("p101025002006","���أ��ǹ���")
c.addCity("p101025002007","���䣨������")
c.addCity("p101025002008","Ѯ�أ��ǹ���")
c.addCity("p101025002009","�������ǹ���")
c.addCity("p101025002010","�书���ռ���")
c.addCity("p101025002011","����")
c.addCity("p101025002012","��Ȫ���ǹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101025003","������")
c.addCity("p101025003001","������Τ����")
c.addCity("p101025003002","���������")
c.addCity("p101025003003","������������")
c.addCity("p101025003004","���أ���ͤ��")
c.addCity("p101025003005","���꣨¹Է��")
p1.addProvinces(c);
c = new provinceCN("����","p101025004","ͭ����")
c.addCity("p101025004001","ҫ�أ��ǹ���")
c.addCity("p101025004002","�˾����ǹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101025005","������")
c.addCity("p101025005001","��֣���ǹ���")
c.addCity("p101025005002","�ṇ̀�������")
c.addCity("p101025005003","���أ�������")
c.addCity("p101025005004","���磨�ǹ���")
c.addCity("p101025005005","���أ�������")
c.addCity("p101025005006","��ǿ���ǹ���")
c.addCity("p101025005007","�������ǹ���")
c.addCity("p101025005008","��ͣ�������")
c.addCity("p101025005009","���ӣ��ǹ���")
c.addCity("p101025005010","��ƺ��Ԭ��ׯ��")
p1.addProvinces(c);
c = new provinceCN("����","p101025006","������")
c.addCity("p101025006001","��ľ����ľ��")
c.addCity("p101025006002","���ȣ�������")
c.addCity("p101025006003","��ɽ����ɽ��")
c.addCity("p101025006004","���ߣ��ż�����")
c.addCity("p101025006005","���ߣ�������")
c.addCity("p101025006006","��£�������")
c.addCity("p101025006007","��֬����֬��")
c.addCity("p101025006008","���أ���«��")
c.addCity("p101025006009","�Ɽ�����Ҵ���")
c.addCity("p101025006010","�彧��������")
c.addCity("p101025006011","���ޣ�˫������")
p1.addProvinces(c);
c = new provinceCN("����","p101025007","�Ӱ���")
c.addCity("p101025007001","�ӳ����ӳ���")
c.addCity("p101025007002","�Ӵ����Ӵ���")
c.addCity("p101025007003","�ӳ�����Ҥ����")
c.addCity("p101025007004","���������䶴��")
c.addCity("p101025007005","־����������")
c.addCity("p101025007006","���죨������")
c.addCity("p101025007007","��Ȫ���ǹ���")
c.addCity("p101025007008","���أ�������")
c.addCity("p101025007009","�崨��������")
c.addCity("p101025007010","�˴���������")
c.addCity("p101025007011","������ʯ����")
c.addCity("p101025007012","���꣨��ɽ��")
p1.addProvinces(c);
c = new provinceCN("����","p101025009","μ����")
c.addCity("p101025009001","������")
c.addCity("p101025009002","������")
c.addCity("p101025009003","���أ��ǹ���")
c.addCity("p101025009004","���أ��ǹ���")
c.addCity("p101025009005","���󣨳ǹ���")
c.addCity("p101025009006","�ѳǣ��ǹ���")
c.addCity("p101025009007","�γǣ��ǹ���")
c.addCity("p101025009008","���ף��ǹ���")
c.addCity("p101025009009","�������ǹ���")
c.addCity("p101025009010","��ƽ������")
p1.addProvinces(c);
c = new provinceCN("����","p101025010","����/����")
c.addCity("p101025010001","���ϣ��ǹ���")
c.addCity("p101025010002","�������կ��")
c.addCity("p101025010003","���ϣ��ǹ���")
c.addCity("p101025010004","ɽ�����ǹ���")
c.addCity("p101025010005","�򰲣��ǹ���")
c.addCity("p101025010006","��ˮ���ǹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101025011","����")
c.addCity("p101025011001","�������ǹ���")
c.addCity("p101025011002","ʯȪ���ǹ���")
c.addCity("p101025011003","���£��ǹ���")
c.addCity("p101025011004","�������ǹ���")
c.addCity("p101025011005","�ڸޣ��ǹ���")
c.addCity("p101025011006","ƽ�����ǹ���")
c.addCity("p101025011007","��ƺ���ǹ���")
c.addCity("p101025011008","Ѯ�����ǹ���")
c.addCity("p101025011009","�׺ӣ��ǹ���")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","p101026","ɽ��");
c = new provinceCN("ɽ��","p101026001","�ൺ��")
c.addCity("p101026001001","����")
c.addCity("p101026001002","����")
c.addCity("p101026001003","��ī")
c.addCity("p101026001004","ƽ��")
c.addCity("p101026001005","����")
p1.addProvinces(c);	
c = new provinceCN("ɽ��","p101026002","Ϋ����")
c.addCity("p101026002001","������")
c.addCity("p101026002002","������")
c.addCity("p101026002003","����")
c.addCity("p101026002004","������")
c.addCity("p101026002005","�����")
c.addCity("p101026002006","�ٹ���")
c.addCity("p101026002007","����")
c.addCity("p101026002008","������")
p1.addProvinces(c);	
c = new provinceCN("ɽ��","p101026003","�Ͳ���")
c.addCity("p101026003001","��̨������")
c.addCity("p101026003002","���ࣨ����")
c.addCity("p101026003003","��Դ��������")
p1.addProvinces(c);	
c = new provinceCN("ɽ��","p101026004","������")
c.addCity("p101026004001","���أ�������")
c.addCity("p101026004002","������������")
p1.addProvinces(c);	
c = new provinceCN("ɽ��","p101026005","��ׯ��")
c.addCity("p101026005001","����")
p1.addProvinces(c);	
c = new provinceCN("ɽ��","p101026006","������")
c.addCity("p101026006001","����")
c.addCity("p101026006002","۰��")
c.addCity("p101026006003","��ɽ����ׯ��")
c.addCity("p101026006004","���ϣ�ʮ��·��")
c.addCity("p101026006005","��ˮ")
c.addCity("p101026006006","����")
c.addCity("p101026006007","ƽ��")
c.addCity("p101026006008","���أ��ѳ���")
c.addCity("p101026006009","���ϣ������")
p1.addProvinces(c);	
c = new provinceCN("ɽ��","p101026008","������")
c.addCity("p101026008001","������������")
c.addCity("p101026008002","���ݣ�������")
c.addCity("p101026008003","�޳ǣ��޳���")
c.addCity("p101026008004","΢ɽ������")
c.addCity("p101026008005","��̨����ͤ��")
c.addCity("p101026008006","���磨������")
c.addCity("p101026008007","���飨������")
c.addCity("p101026008008","���ϣ�������")
c.addCity("p101026008009","��ˮ����ˮ��")
c.addCity("p101026008010","��ɽ����ɽ��")
p1.addProvinces(c);	
c = new provinceCN("ɽ��","p101026009","������")
c.addCity("p101026009001","���أ��ܳ���")
c.addCity("p101026009002","����")
c.addCity("p101026009003","���أ�������")
c.addCity("p101026009004","����")
c.addCity("p101026009005","����")
c.addCity("p101026009006","��Ұ")
c.addCity("p101026009007","۲�ǣ�۲����")
c.addCity("p101026009008","۩�ǣ�۩����")
p1.addProvinces(c);	
c = new provinceCN("ɽ��","p101026010","��Ӫ��")
c.addCity("p101026010001","������������")
c.addCity("p101026010002","����������")
c.addCity("p101026010003","���ģ�������")
p1.addProvinces(c);	
c = new provinceCN("ɽ��","p101026011","������")
c.addCity("p101026011001","�ٳɣ���ͷ��")
c.addCity("p101026011002","��ɽ���Ĵ���")
c.addCity("p101026011003","�ĵǣ��ĳ���")
p1.addProvinces(c);	
c = new provinceCN("ɽ��","p101026012","̩����")
c.addCity("p101026012001","��̩")
c.addCity("p101026012002","�ʳ�")
c.addCity("p101026012003","��ƽ")
c.addCity("p101026012004","����")
p1.addProvinces(c);	
c = new provinceCN("ɽ��","p101026013","��̨��")
c.addCity("p101026013001","��ϼ����ϼ��")
c.addCity("p101026013002","������������")
c.addCity("p101026013003","����")
c.addCity("p101026013004","����")
c.addCity("p101026013005","����")
c.addCity("p101026013006","������������")
c.addCity("p101026013007","��Զ���г���")
c.addCity("p101026013008","�������ϳ�ɽ��")
p1.addProvinces(c);	
c = new provinceCN("ɽ��","p101026014","������")
p1.addProvinces(c);	
c = new provinceCN("ɽ��","p101026015","�ĳ���")
c.addCity("p101026015001","������")
c.addCity("p101026015002","������")
c.addCity("p101026015003","ݷ�أ��ǹ���")
c.addCity("p101026015004","��ƽ��")
c.addCity("p101026015005","�����أ�ͭ����")
c.addCity("p101026015006","���أ��ڳ���")
c.addCity("p101026015007","������")
c.addCity("p101026015008","��������")
p1.addProvinces(c);
c = new provinceCN("ɽ��","p101026016","������")
c.addCity("p101026016001","����")
c.addCity("p101026016002","���")
c.addCity("p101026016003","���أ������")
c.addCity("p101026016004","ƽԭ")
c.addCity("p101026016005","�Ľ�")
c.addCity("p101026016006","���")
c.addCity("p101026016007","��ӣ��̳���")
c.addCity("p101026016008","����")
c.addCity("p101026016009","����")
c.addCity("p101026016010","����")
p1.addProvinces(c);
c = new provinceCN("ɽ��","p101026017","������")
c.addCity("p101026017001","����")
c.addCity("p101026017002","����")
c.addCity("p101026017003","���")
c.addCity("p101026017004","մ����������")
c.addCity("p101026017005","��ƽ")
c.addCity("p101026017006","����")
p1.addProvinces(c);
c = new provinceCN("ɽ��","p101026018","������")
c.addCity("p101026018001","������ˮ��")
c.addCity("p101026018002","���壨������")
c.addCity("p101026018003","ƽ����ƽ����")
c.addCity("p101026018004","������������")
c.addCity("p101026018005","�̺ӣ��̺���")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	
var p1 = new provincesList("CN","","����");
c = new provinceCN("����","","����")
c.addCity("","����")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	
var p1 = new provincesList("CN","p101027","�Ϻ�");
c = new provinceCN("�Ϻ�","p101027023001","��ɽ��")
p1.addProvinces(c);
c = new provinceCN("�Ϻ�","p101027023002","������")
p1.addProvinces(c);
c = new provinceCN("�Ϻ�","p101027023003","�ɽ���")
p1.addProvinces(c);
c = new provinceCN("�Ϻ�","p101027023004","բ����")
p1.addProvinces(c);
c = new provinceCN("�Ϻ�","p101027023005","�����")
p1.addProvinces(c);
c = new provinceCN("�Ϻ�","p101027023006","������")
p1.addProvinces(c);
c = new provinceCN("�Ϻ�","p101027023007","������")
p1.addProvinces(c);
c = new provinceCN("�Ϻ�","p101027023008","������")
p1.addProvinces(c);
c = new provinceCN("�Ϻ�","p101027023009","������")
p1.addProvinces(c);
c = new provinceCN("�Ϻ�","p101027023010","������")
p1.addProvinces(c);
c = new provinceCN("�Ϻ�","p101027023011","�ֶ�����")
p1.addProvinces(c);
c = new provinceCN("�Ϻ�","p101027023013","�����")
p1.addProvinces(c);
c = new provinceCN("�Ϻ�","p101027023015","������")
p1.addProvinces(c);
c = new provinceCN("�Ϻ�","p101027023016","������")
p1.addProvinces(c);
c = new provinceCN("�Ϻ�","p101027023017","�ζ���")
p1.addProvinces(c);
c = new provinceCN("�Ϻ�","p101027023018","��ɽ��")
p1.addProvinces(c);	
c = new provinceCN("�Ϻ�","p101027023019","������")
p1.addProvinces(c);	
c = new provinceCN("�Ϻ�","p101027023020","¬����")
p1.addProvinces(c);	
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101028","ɽ��");
c = new provinceCN("ɽ��","p101028001","̫ԭ")
c.addCity("p101028001001","�Ž���")
c.addCity("p101028001002","���죨��Դ��")
c.addCity("p101028001003","��������կ��")
c.addCity("p1010280010014","�ෳ���ෳ��")
p1.addProvinces(c);	
c = new provinceCN("ɽ��","p101028002","��ͬ��")
c.addCity("p101028002001","���ߣ��ǹ���")
c.addCity("p101028002002","���򣨳ǹ���")
c.addCity("p101028002003","���飨�ǹ���")
c.addCity("p101028002004","���𣨳ǹ���")
c.addCity("p101028002005","��Դ���ǹ���")
c.addCity("p101028002006","���ƣ��ǹ���")
p1.addProvinces(c);	
c = new provinceCN("ɽ��","p101028003","������")
c.addCity("p101028003001","ԭƽ��")
c.addCity("p101028003002","���壨�ǹ���")
c.addCity("p101028003003","��̨���ǹ���")
c.addCity("p101028003004","���أ��ǹ���")
c.addCity("p101028003005","���ţ��ǹ���")
c.addCity("p101028003005","���䣨�ǹ���")
c.addCity("p101028003006","���֣��ǹ���")
c.addCity("p101028003007","��أ��ǹ���")
c.addCity("p101028003008","��կ���ǹ���")
c.addCity("p101028003009","�ᰣ��ǹ���")
c.addCity("p101028003010","�������ǹ���")
c.addCity("p101028003011","���£��ǹ���")
c.addCity("p101028003012","ƫ�أ��ǹ���")
p1.addProvinces(c);	
c = new provinceCN("ɽ��","p101028004","��Ȫ��")
c.addCity("p101028004001","ƽ�����ǹ���")
c.addCity("p101028004002","���أ��ǹ���")
p1.addProvinces(c);	
c = new provinceCN("ɽ��","p101028005","�����У��ܴΣ�")
c.addCity("p101028005001","���磨�ǹ���")
c.addCity("p101028005002","��Ȩ���ǹ���")
c.addCity("p101028005003","��˳���ǹ���")
c.addCity("p101028005004","�������ǹ���")
c.addCity("p101028005005","�������ǹ���")
c.addCity("p101028005006","̫�ȣ��ǹ���")
c.addCity("p101028005007","���أ��ǹ���")
c.addCity("p101028005008","ƽң���ǹ���")
c.addCity("p101028005009","��ʯ���ǹ���")
c.addCity("p101028005010","������")
p1.addProvinces(c);
c = new provinceCN("ɽ��","p101028006","������")
c.addCity("p101028006001","º����")
c.addCity("p101028006002","��ԫ���ǹ���")
c.addCity("p101028006003","�������ǹ���")
c.addCity("p101028006004","ƽ˳���ǹ���")
c.addCity("p101028006005","��ǣ��ǹ���")
c.addCity("p101028006006","���أ��ǹ���")
c.addCity("p101028006007","���ӣ��ǹ���")
c.addCity("p101028006008","���磨�ǹ���")
c.addCity("p101028006009","���أ��ǹ���")
c.addCity("p101028006010","��Դ���ǹ���")
p1.addProvinces(c);	
c = new provinceCN("ɽ��","p101028007","�ٷ���")
c.addCity("p101028007001","������")
c.addCity("p101028007002","������")
c.addCity("p101028007003","���֣��ǹ���")
c.addCity("p101028007004","��ǣ��ǹ���")
c.addCity("p101028007005","��ڣ��ǹ���")
c.addCity("p101028007006","�鶴���ǹ���")
c.addCity("p101028007007","���أ��ǹ���")
c.addCity("p101028007008","�������ǹ���")
c.addCity("p101028007009","���أ��ǹ���")
c.addCity("p101028007010","�������ǹ���")
c.addCity("p101028007011","���ͣ��ǹ���")
c.addCity("p101028007012","���أ��ǹ���")
c.addCity("p101028007013","�������ǹ���")
c.addCity("p101028007014","��ɽ���ǹ���")
c.addCity("p101028007015","���أ��ǹ���")
c.addCity("p101028007016","����")
p1.addProvinces(c);	
c = new provinceCN("ɽ��","p101028008","������")
c.addCity("p101028008001","��ƽ��")
c.addCity("p101028008002","���ݣ��ϴ���")
c.addCity("p101028008003","��ˮ���ǹ���")
c.addCity("p101028008004","���ǣ��ǹ���")
c.addCity("p101028008005","�괨���ǹ���")
p1.addProvinces(c);	
c = new provinceCN("ɽ��","p101028009","�˳���")
c.addCity("p101028009001","������")
c.addCity("p101028009002","�ӽ���")
c.addCity("p101028009003","�ǳǣ��ǹ���")
c.addCity("p101028009004","��⢣��ǹ���")
c.addCity("p101028009005","���٣��ǹ���")
c.addCity("p101028009006","��筣��ǹ���")
c.addCity("p101028009007","�ɽ���ǹ���")
c.addCity("p101028009008","��ϲ���ǹ���")
c.addCity("p101028009009","���أ��ǹ���")
c.addCity("p101028009010","��أ��ǹ���")
c.addCity("p101028009011","ƽ½���ǹ���")
c.addCity("p101028009012","ԫ�����³���")
p1.addProvinces(c);	
c = new provinceCN("ɽ��","p101028010","˷����")
c.addCity("p101028010001","ɽ����������")
c.addCity("p101028010002","Ӧ�أ��ǹ���")
c.addCity("p101028010003","���񣨷ڼ�û����")
c.addCity("p101028010004","���ʣ��ǹ���")
p1.addProvinces(c);		
c = new provinceCN("ɽ��","p101028011","������������ʯ�У�")
c.addCity("p101028011001","��ʯ��")
c.addCity("p101028011002","Т����")
c.addCity("p101028011003","������")
c.addCity("p101028011004","��ˮ���ǹ���")
c.addCity("p101028011005","�������ǹ���")
c.addCity("p101028011006","���أ��ǹ���")
c.addCity("p101028011007","���أ��ǹ���")
c.addCity("p101028011008","��ɽ���ٶ���")
c.addCity("p101028011009","���֣�������")
c.addCity("p101028011010","��أ�����ǣ�")
c.addCity("p101028011011","���ڣ�������")
c.addCity("p101028011012","���ǣ��ǹ���")
c.addCity("p101028011013","ʯ¥���ǹ���")
p1.addProvinces(c);			
provincesListArr = provincesListArr.concat(p1);	
var p1 = new provincesList("CN","p101029","�Ĵ�");
c = new provinceCN("�Ĵ�","p101029001","���Ӳ���Ǽ��������")
c.addCity("p101029001001","��������������")
c.addCity("p101029001002","�봨��������")
c.addCity("p101029001003","���أ��ӹ�����")
c.addCity("p101029001004","ï�أ�������")
c.addCity("p101029001005","���ӣ�������")
c.addCity("p101029001006","���ˣ�������")
c.addCity("p101029001007","��կ����������")
c.addCity("p101029001008","�𴨣�����")
c.addCity("p101029001009","С��������")
c.addCity("p101029001010","��ˮ��«����")
c.addCity("p101029001011","��ԭ����Ϫ��")
c.addCity("p101029001012","������������")
c.addCity("p101029001013","�����ǣ���������")
p1.addProvinces(c);	
c = new provinceCN("�Ĵ�","p101029002","������")
c.addCity("p101029002001","ͨ����ŵ����")
c.addCity("p101029002002","�Ͻ����Ͻ���")
c.addCity("p101029002003","ƽ����������")
p1.addProvinces(c);	
c = new provinceCN("�Ĵ�","p101029003","������")
c.addCity("p101029003001","��Դ")
c.addCity("p101029003002","���أ�������")
c.addCity("p101029003003","������������")
c.addCity("p101029003004","������������")
c.addCity("p101029003005","����������")
c.addCity("p101029003006","���أ�������")
p1.addProvinces(c);	
c = new provinceCN("�Ĵ�","p101029004","������")
c.addCity("p101029004001","�㺺")
c.addCity("p101029004002","����")
c.addCity("p101029004003","�޽����޽���")
c.addCity("p101029004004","�н���������")
c.addCity("p101029004005","ʲ��")
p1.addProvinces(c);	
c = new provinceCN("�Ĵ�","p101029005","���β���������")
c.addCity("p101029005001","���Σ�������")
c.addCity("p101029005002","������¯����")
c.addCity("p101029005003","�򶨣�������")
c.addCity("p101029005004","���ͣ��¹���")
c.addCity("p101029005005","�������ȶ���")
c.addCity("p101029005006","�Ž����ӿ���")
c.addCity("p101029005007","���ڣ���ˮ��")
c.addCity("p101029005008","¯�����¶���")
c.addCity("p101029005009","������������")
c.addCity("p101029005010","�¸񣨸�����")
c.addCity("p101029005011","���񣨽�����")
c.addCity("p101029005012","ʯ����������")
c.addCity("p101029005013","ɫ�ɫ����")
c.addCity("p101029005014","�������߳���")
c.addCity("p101029005015","������������")
c.addCity("p101029005016","��ǣ�ɣ����")
c.addCity("p101029005017","���ǣ�������")
c.addCity("p101029005018","���٣�������")
p1.addProvinces(c);	
c = new provinceCN("�Ĵ�","p101029006","��Ԫ��")
c.addCity("p101029006001","���ԣ�������")
c.addCity("p101029006002","�ന����ׯ��")
c.addCity("p101029006003","����������")
c.addCity("p101029006004","��Ϫ���꽭��")
p1.addProvinces(c);	
c = new provinceCN("�Ĵ�","p101029007","��ɽ��")
c.addCity("p101029007001","��üɽ")
c.addCity("p101029007002","��Ϊ�������")
c.addCity("p101029007003","���У��г���")
c.addCity("p101029007004","�н����v����")
c.addCity("p101029007005","�崨����Ϫ��")
c.addCity("p101029007006","������������أ�ɳƺ��")
c.addCity("p101029007007","������������أ�����")
p1.addProvinces(c);	
c = new provinceCN("�Ĵ�","p101029008","��ɽ���������ݣ������У�")
c.addCity("p101029008001","��Դ���β���")
c.addCity("p101029008002","�²���������")
c.addCity("p101029008003","�����ǹ���")
c.addCity("p101029008004","�ᶫ���ᶫ��")
c.addCity("p101029008005","���ϣ���ɰ��")
c.addCity("p101029008006","�ո��ջ���")
c.addCity("p101029008007","���ϣ���ľ����")
c.addCity("p101029008008","���壨���а���")
c.addCity("p101029008009","��������ذ���")
c.addCity("p101029008010","�ײ���������")
c.addCity("p101029008011","���ã�������")
c.addCity("p101029008012","������������")
c.addCity("p101029008013","ľ����������أ�������")
c.addCity("p101029008014","ϲ�£�������")
c.addCity("p101029008015","Խ����Խ����")
c.addCity("p101029008016","�Ѿ����³���")
p1.addProvinces(c);	
c = new provinceCN("�Ĵ�","p101029009","������")
c.addCity("p101029009001","���أ�������")
c.addCity("p101029009002","�Ͻ����Ͻ���")
c.addCity("p101029009003","������������")
c.addCity("p101029009004","������������")
p1.addProvinces(c);	
c = new provinceCN("�Ĵ�","p101029010","������")
c.addCity("p101029010001","����")
c.addCity("p101029010002","��̨��������")
c.addCity("p101029010003","��ͤ����Ϫ��")
c.addCity("p101029010004","���أ����D��")
c.addCity("p101029010005","�������Ĳ���")
c.addCity("p101029010006","��������ɽ��")
c.addCity("p101029010007","ƽ�䣨������")
p1.addProvinces(c);	
c = new provinceCN("�Ĵ�","p101029011","�ϳ���")
c.addCity("p101029011001","����")
c.addCity("p101029011002","�ϲ�����¡��")
c.addCity("p101029011003","Ӫɽ���ʳ���")
c.addCity("p101029011004","����ܿ���")
c.addCity("p101029011005","��¤�������")
c.addCity("p101029011006","���䣨������")
p1.addProvinces(c);	
c = new provinceCN("�Ĵ�","p101029012","�ڽ���")
c.addCity("p101029012001","��Զ��������")
c.addCity("p101029012002","���У�������")
c.addCity("p101029012003","¡���������")
p1.addProvinces(c);	
c = new provinceCN("�Ĵ�","p101029013","��֦����")
c.addCity("p101029013001","���ף�������")
c.addCity("p101029013002","�αߣ�ͩ�����ƺ�أ�")
p1.addProvinces(c);	
c = new provinceCN("�Ĵ�","p101029014","�Ű���")
c.addCity("p101029014001","��ɽ��������")
c.addCity("p101029014002","�������ϵ���")
c.addCity("p101029014003","��Դ��������")
c.addCity("p101029014004","ʯ�ޣ�������")
c.addCity("p101029014005","��ȫ��������")
c.addCity("p101029014006","«ɽ��«����")
c.addCity("p101029014007","���ˣ���ƺ��")
p1.addProvinces(c);	
c = new provinceCN("�Ĵ�","p101029015","�Թ���")
c.addCity("p101029015001","���أ�������")
c.addCity("p101029015002","��˳���ǹ���")
p1.addProvinces(c);	
c = new provinceCN("�Ĵ�","p101029016","�˱���")
c.addCity("p101029016001","��Ϫ����Ϫ��")
c.addCity("p101029016002","������������")
c.addCity("p101029016003","������������")
c.addCity("p101029016004","���أ������")
c.addCity("p101029016005","���أ������")
c.addCity("p101029016006","������������")
c.addCity("p101029016007","���أ�Ѳ����")
c.addCity("p101029016008","���ģ��г���")
c.addCity("p101029016009","��ɽ����ɽ��")
p1.addProvinces(c);	
c = new provinceCN("�Ĵ�","p101029017","������")
c.addCity("p101029017001","��Ϫ�������")
c.addCity("p101029017002","��飨̫����")
c.addCity("p101029017003","��Ӣ��������")
p1.addProvinces(c);	
c = new provinceCN("�Ĵ�","p101029018","�㰲��")
c.addCity("p101029018001","����")
c.addCity("p101029018002","���أ�������")
c.addCity("p101029018003","��ʤ���ؿ���")
c.addCity("p101029018004","��ˮ��������")
p1.addProvinces(c);	
c = new provinceCN("�Ĵ�","p101029019","üɽ��")
c.addCity("p101029019001","���٣�������")
c.addCity("p101029019002","��ɽ��������")
c.addCity("p101029019003","���ţ��鴨��")
c.addCity("p101029019004","���⣨������")
c.addCity("p101029019005","���񣨳�����")
p1.addProvinces(c);	
c = new provinceCN("�Ĵ�","p101029020","�ɶ���")
c.addCity("p101029020001","���ݣ�������")
c.addCity("p101029020002","�������ٽ���")
c.addCity("p101029020003","�����ߣ������")
c.addCity("p101029020004","���ݣ�������")
c.addCity("p101029020005","���ã�����")
c.addCity("p101029020006","˫����������")
c.addCity("p101029020007","�½���������")
c.addCity("p101029020008","ۯ�أ�ۯͲ��")
c.addCity("p101029020009","���أ���ԭ��")
c.addCity("p101029020010","�ѽ�����ɽ��")
c.addCity("p101029020011","�½������")
p1.addProvinces(c);	
c = new provinceCN("�Ĵ�","p101029029","������")
c.addCity("p101029029001","����")
c.addCity("p101029029002","�����������")
c.addCity("p101029029003","������������")
p1.addProvinces(c);	
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101030","̨��");
c = new provinceCN("̨��","p101030032001","������")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032002","�û���")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032003","������")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032004","������")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032005","������")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032006","������")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032007","̨����")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032008","��԰��")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032009","̨����")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032010","̨����")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032011","̨����")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032012","������")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032013","������")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032014","������")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032015","̨����")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032016","̨����")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032017","��¡��")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032018","������")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032019","������")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032020","������")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032021","������")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032022","������")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032023","������")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032024","��Ͷ��")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032025","��Ͷ��")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032026","�����")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032027","������")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032028","������")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032029","̨����")
p1.addProvinces(c);
c = new provinceCN("̨��","p101030032030","̨����")
p1.addProvinces(c);	
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101031","���");
c = new provinceCN("���","p101031019001","������")
p1.addProvinces(c);
c = new provinceCN("���","p101031019002","������")
p1.addProvinces(c);
c = new provinceCN("���","p101031019003","������")
p1.addProvinces(c);
c = new provinceCN("���","p101031019004","������")
p1.addProvinces(c);
c = new provinceCN("���","p101031019005","�����")
p1.addProvinces(c);
c = new provinceCN("���","p101031019006","������")
p1.addProvinces(c);
c = new provinceCN("���","p101031019007","������")
p1.addProvinces(c);
c = new provinceCN("���","p101031019008","������")
p1.addProvinces(c);
c = new provinceCN("���","p101031019009","��ƽ��")
p1.addProvinces(c);
c = new provinceCN("���","p101031019010","�ӱ���")
p1.addProvinces(c);
c = new provinceCN("���","p101031019011","�Ӷ���")
p1.addProvinces(c);
c = new provinceCN("���","p101031019012","������")
p1.addProvinces(c);
c = new provinceCN("���","p101031019013","������")
p1.addProvinces(c);
c = new provinceCN("���","p101031019014","����")
p1.addProvinces(c);
c = new provinceCN("���","p101031019015","������")
p1.addProvinces(c);
c = new provinceCN("���","p101031019016","������")
p1.addProvinces(c);
c = new provinceCN("���","p101031019017","�Ͽ���")
p1.addProvinces(c);
c = new provinceCN("���","p101031019018","������")
p1.addProvinces(c);	
provincesListArr = provincesListArr.concat(p1);	


var p1 = new provincesList("CN","p101033","�½�");
c = new provinceCN("�½�","p101033001","ʯ����")
p1.addProvinces(c);	
c = new provinceCN("�½�","p101033002","��³������/��")
c.addCity("p101033002001","۷��")
c.addCity("p101033002002","�п�ѷ")
p1.addProvinces(c);	
c = new provinceCN("�½�","p101033003","��ʲ����/��")
c.addCity("p101033003001","�踽���п�������")
c.addCity("p101033003002","����")
c.addCity("p101033003003","Ӣ��ɳ")
c.addCity("p101033003004","����")
c.addCity("p101033003005","ɯ��")
c.addCity("p101033003006","Ҷ�ǣ������տ���")
c.addCity("p101033003007","�����")
c.addCity("p101033003008","���պ�")
c.addCity("p101033003008","٤ʦ��������")
c.addCity("p101033003009","�ͳ�")
c.addCity("p101033003010","��ʲ�����")
p1.addProvinces(c);	
c = new provinceCN("�½�","p101033005","��������ɹ������ݣ�������У�")
c.addCity("p101033005001","�����")
c.addCity("p101033005002","��̨")
c.addCity("p101033005003","ξ��")
c.addCity("p101033005004","��Ǽ")
c.addCity("p101033005005","��ĩ")
c.addCity("p101033005006","�;�")
c.addCity("p101033005007","��˶�����������")
c.addCity("p101033005008","����")
c.addCity("p101033005009","����")
p1.addProvinces(c);	
c = new provinceCN("�½�","p101033007","�������������ݣ������У�")
c.addCity("p101033007001","����")
c.addCity("p101033007002","��Ȫ")
c.addCity("p101033007003","��ͼ��")
c.addCity("p101033007004","����˹")
c.addCity("p101033007005","��̨")
c.addCity("p101033007006","��ľ����")
c.addCity("p101033007007","ľ��")
p1.addProvinces(c);	
c = new provinceCN("�½�","p101033008","���������ɹ������ݣ������У�")
c.addCity("p101033008001","����")
c.addCity("p101033008002","����")
c.addCity("p101033008003","��Ȫ����������")
p1.addProvinces(c);	
c = new provinceCN("�½�","p101033009","������ܹ����������ݣ������У�")
c.addCity("p101033009001","�����أ�����������")
c.addCity("p101033009002","����")
c.addCity("p101033009003","���ǣ�������")
c.addCity("p101033009004","����")
c.addCity("p101033009005","��Դ")
c.addCity("p101033009006","����")
c.addCity("p101033009007","�ؿ�˹")
c.addCity("p101033009008","���տ�")
c.addCity("p101033009009","�첼���")
p1.addProvinces(c);	
c = new provinceCN("�½�","p101033010","�������տ¶����������ݣ���ͼʲ�У�")
c.addCity("p101033010001","��ͼʲ")
c.addCity("p101033010002","������")
c.addCity("p101033010003","������")
c.addCity("p101033010004","��ǡ")
p1.addProvinces(c);	
c = new provinceCN("�½�","p101033011","�����յ���/��")
c.addCity("p101033011001","����")
c.addCity("p101033011002","�⳵")
c.addCity("p101033011003","ɳ��")
c.addCity("p101033011004","�º�")
c.addCity("p101033011005","�ݳ�")
c.addCity("p101033011006","��ʲ")
c.addCity("p101033011007","������")
c.addCity("p101033011008","��ƺ")
p1.addProvinces(c);	
c = new provinceCN("�½�","p101033012","����������")
p1.addProvinces(c);	
c = new provinceCN("�½�","p101033013","��³ľ����")
p1.addProvinces(c);	
c = new provinceCN("�½�","p101033014","�������/��")
c.addCity("p101033014001","ī�񣨿�����ʲ��")
c.addCity("p101033014002","Ƥɽ��������")
c.addCity("p101033014003","����")
c.addCity("p101033014004","����")
c.addCity("p101033014005","���ľ������")
c.addCity("p101033014006","��ᣨ������")
p1.addProvinces(c);	
c = new provinceCN("�½�","p101033015","���ܵ���/��")
c.addCity("p101033015001","����")
c.addCity("p101033015002","������������������")
p1.addProvinces(c);
c = new provinceCN("�½�","p101033072","���ǵ���/��")
c.addCity("p101033072001","����")
c.addCity("p101033072002","����")
c.addCity("p101033072003","ɳ�壨����������")
c.addCity("p101033072004","����")
c.addCity("p101033072005","ԣ�񣨹���������")
c.addCity("p101033072006","�Ͳ�������")
p1.addProvinces(c);

c = new provinceCN("�½�","p101033079","����̩����/��")
c.addCity("p101033079001","������")
c.addCity("p101033079002","���̣�������˹��")
c.addCity("p101033079003","����")
c.addCity("p101033079004","���ͺӣ���������")
c.addCity("p101033079005","���")
c.addCity("p101033079006","��ľ�ˣ��������ȿ���")
p1.addProvinces(c);

provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101034","����");
c = new provinceCN("����","p101034001","������")
c.addCity("p101034001001","������")
c.addCity("p101034001002","������")
c.addCity("p101034001003","����������")
c.addCity("p101034001004","������")
c.addCity("p101034001005","������")
c.addCity("p101034001006","ī�񹤿���")
c.addCity("p101034001007","��ľ��")
c.addCity("p101034001008","��ˮ��")
p1.addProvinces(c);	
c = new provinceCN("����","p101034002","����")
c.addCity("p101034002001","������")
c.addCity("p101034002002","������")
c.addCity("p101034002003","�����")
c.addCity("p101034002004","������")
c.addCity("p101034002005","������")
c.addCity("p101034002006","������")
c.addCity("p101034002007","������")
c.addCity("p101034002008","������")
c.addCity("p101034002009","������")
c.addCity("p101034002010","����")
p1.addProvinces(c);	
c = new provinceCN("����","p101034003","����")
c.addCity("p101034003001","������")
c.addCity("p101034003002","�߰�")
c.addCity("p101034003003","������")
c.addCity("p101034003004","������")
c.addCity("p101034003005","������")
c.addCity("p101034003006","������")
c.addCity("p101034003007","������")
c.addCity("p101034003008","��������")
c.addCity("p101034003009","��¡��")
c.addCity("p101034003010","â����")
c.addCity("p101034003011","����")
p1.addProvinces(c);	
c = new provinceCN("����","p101034004","ɽ�ϣ�����")
c.addCity("p101034004001","������")
c.addCity("p101034004002","������")
c.addCity("p101034004003","������")
c.addCity("p101034004004","�Ӳ���")
c.addCity("p101034004005","�˿�����")
c.addCity("p101034004006","¡����")
c.addCity("p101034004007","������")
c.addCity("p101034004008","�˶���")
c.addCity("p101034004009","�����")
c.addCity("p101034004010","������")
c.addCity("p101034004011","ɣ����")
c.addCity("p101034004012","������")
p1.addProvinces(c);	
c = new provinceCN("����","p101034005","�տ���")
c.addCity("p101034005001","������")
c.addCity("p101034005002","������")
c.addCity("p101034005003","������")
c.addCity("p101034005004","������")
c.addCity("p101034005005","�ڰ���")
c.addCity("p101034005006","��¡��")
c.addCity("p101034005007","������")
c.addCity("p101034005008","������")
c.addCity("p101034005009","������")
c.addCity("p101034005010","��ľ����")
c.addCity("p101034005011","����ľ��")
c.addCity("p101034005012","�ʲ���")
c.addCity("p101034005013","�տ�����")
c.addCity("p101034005014","������")
c.addCity("p101034005015","������")
c.addCity("p101034005016","лͨ����")
c.addCity("p101034005017","�Ƕ���")
c.addCity("p101034005018","�ٰ���")
p1.addProvinces(c);	
c = new provinceCN("����","p101034006","����")
c.addCity("p101034006001","����")
c.addCity("p101034006002","������")
c.addCity("p101034006003","�Ｊ��")
c.addCity("p101034006004","������")
c.addCity("p101034006005","������")
c.addCity("p101034006006","������")
c.addCity("p101034006007","������")
p1.addProvinces(c);	
c = new provinceCN("����","p101034007","��֥")
c.addCity("p101034007001","������")
c.addCity("p101034007002","������")
c.addCity("p101034007003","����������")
c.addCity("p101034007004","����")
c.addCity("p101034007005","��֥��")
c.addCity("p101034007006","������")
c.addCity("p101034007007","ī����")
p1.addProvinces(c);	
provincesListArr = provincesListArr.concat(p1);	
var p1 = new provincesList("CN","p101035","����");
c = new provinceCN("����","p101035001","������")
c.addCity("p101035001001","����")
c.addCity("p101035001002","�ʹ���������")
c.addCity("p101035001003","������������")
c.addCity("p101035001004","����������")
c.addCity("p101035001005","��������Զ��")
c.addCity("p101035001006","������������")
c.addCity("p101035001007","ʯ�����������أ�¹����")
c.addCity("p101035001008","»Ȱ�������������أ���ɽ��")
c.addCity("p101035001009","Ѱ��������������أ��ʵ���")
p1.addProvinces(c);	
c = new provinceCN("����","p101035002","������������ݣ������У�")
c.addCity("p101035002001","���ƣ������")
c.addCity("p101035002002","������ţ����")
c.addCity("p101035002003","�ֶɣ��ֳ���")
c.addCity("p101035002004","��ƽ���Ͻ���")
c.addCity("p101035002005","��Դ�������")
c.addCity("p101035002006","����������")
c.addCity("p101035002007","���죨ȥ����")
c.addCity("p101035002008","������������أ��Ͻ���")
c.addCity("p101035002009","�Ͻ����������أ��Ͻ���")
c.addCity("p101035002010","Ρɽ������������أ��Ļ���")
c.addCity("p101035002011","������ʯ����")
p1.addProvinces(c);	
c = new provinceCN("����","p101035003","��������")
c.addCity("p101035003001","��ʤ��������")
c.addCity("p101035003002","��ƺ��������")
c.addCity("p101035003003","�������������أ�������")
p1.addProvinces(c);	
c = new provinceCN("����","p101035005","��Ϫ��")
c.addCity("p101035005001","�����������")
c.addCity("p101035005002","�ν�����´��")
c.addCity("p101035005003","ͨ������ɽ��")
c.addCity("p101035005004","������������")
c.addCity("p101035005005","���ţ���Ȫ��")
c.addCity("p101035005006","��ɽ���������أ�˫����")
c.addCity("p101035005007","��ƽ���������أ���ɽ��")
c.addCity("p101035005008","Ԫ��������������������أ�墽���")
p1.addProvinces(c);	
c = new provinceCN("����","p101035008","��ɽ��")
c.addCity("p101035008001","ʩ�飨������")
c.addCity("p101035008002","�ڳ壨�ǹ���")
c.addCity("p101035008003","���꣨��ɽ��")
c.addCity("p101035008004","�������ҵ���")
p1.addProvinces(c);	
c = new provinceCN("����","p101035009","������")
c.addCity("p101035009001","����")
c.addCity("p101035009002","������ͨȪ��")
c.addCity("p101035009003","մ�棨��ƽ��")
c.addCity("p101035009004","��Դ���а���")
c.addCity("p101035009005","��ƽ��������")
c.addCity("p101035009006","ʦ�ڣ�������")
c.addCity("p101035009007","½����������")
c.addCity("p101035009008","����������")
p1.addProvinces(c);
c = new provinceCN("����","p101035064","˼é����/��")
c.addCity("p101035064001","�ն����������������أ�������")
c.addCity("p101035064002","ī�������������أ�������")
c.addCity("p101035064003","�������������أ�������")
c.addCity("p101035064004","���ȴ������������أ���Զ��")
c.addCity("p101035064005","������������������������أ�������")
c.addCity("p101035064006","���ǹ��������������أ�������")
c.addCity("p101035064007","�����������������������أ�������")
c.addCity("p101035064008","���������������أ�������")
c.addCity("p101035064009","�������������أ������磩")
p1.addProvinces(c);	
c = new provinceCN("����","p101035012","��ͨ����")
c.addCity("p101035012001","³�飨������")
c.addCity("p101035012002","�ɼң��»���")
c.addCity("p101035012003","�ν��ξ���")
c.addCity("p101035012004","��أ��仪��")
c.addCity("p101035012005","���ƣ�������")
c.addCity("p101035012006","�罭���г���")
c.addCity("p101035012007","���ۣ��ڷ���")
c.addCity("p101035012008","�������ǿ���")
c.addCity("p101035012009","���ţ�������")
c.addCity("p101035012010","ˮ�����Ƹ���")
p1.addProvinces(c);	
c = new provinceCN("����","p101035013","�ٲ׵���")
c.addCity("p101035013001","�ٲף�������")
c.addCity("p101035013002","���죨��ɽ��")
c.addCity("p101035013003","���أ�������")
c.addCity("p101035013004","���£��µ���")
c.addCity("p101035013005","�򿵣���β��")
c.addCity("p101035013006","˫�����������岼������������أ�������")
c.addCity("p101035013007","����������������أ�������")
c.addCity("p101035013008","��Դ���������أ��¶���")
p1.addProvinces(c);	
c = new provinceCN("����","p101035014","��ɽ׳������������")
c.addCity("p101035014001","��ɽ��������")
c.addCity("p101035014002","��ɽ��������")
c.addCity("p101035014003","���루������")
c.addCity("p101035014004","�����£�������")
c.addCity("p101035014005","��أ������")
c.addCity("p101035014006","�𱱣�������")
c.addCity("p101035014007","���ϣ�������")
c.addCity("p101035014008","�������»���")
p1.addProvinces(c);	
c = new provinceCN("����","p101035015","��ӹ��������������ݣ������У�")
c.addCity("p101035015001","��Զ")
c.addCity("p101035015002","���ԣ�������")
c.addCity("p101035015003","�̴���������")
c.addCity("p101035015004","��ˮ���ٰ���")
c.addCity("p101035015005","ʯ����������")
c.addCity("p101035015006","���գ�������")
c.addCity("p101035015007","������������")
c.addCity("p101035015008","Ԫ������ɳ��")
c.addCity("p101035015009","��ӣ�������")
c.addCity("p101035015010","��ƽ����������������أ������")
c.addCity("p101035015011","�ӿ����������أ��ӿ���")
c.addCity("p101035015012","�������������أ�������")
p1.addProvinces(c);	
c = new provinceCN("����","p101035016","��������������")
c.addCity("p101035016001","˫�أ��׵���")
c.addCity("p101035016002","Ĳ����������")
c.addCity("p101035016003","�ϻ���������")
c.addCity("p101035016004","Ҧ����������")
c.addCity("p101035016005","��Ҧ�������")
c.addCity("p101035016006","���ʣ�������")
c.addCity("p101035016007","Ԫı��Ԫ����")
c.addCity("p101035016008","�䶨��������")
c.addCity("p101035016009","»�ᣨ��ɽ��")
p1.addProvinces(c);	
c = new provinceCN("����","p101035017","��˫���ɴ��������ݣ������У�")
c.addCity("p101035017001","����")
c.addCity("p101035017002","�º�����ɽ��")
c.addCity("p101035017003","������������")
p1.addProvinces(c);	
c = new provinceCN("����","p101035018","�º���徰����������")
c.addCity("p101035018001","º��")
c.addCity("p101035018002","����������")
c.addCity("p101035018003","���ӣ��ڵ���")
c.addCity("p101035018004","ӯ����ƽԭ��")
c.addCity("p101035018005","¤�����·���")
p1.addProvinces(c);	
c = new provinceCN("����","p101035019","ŭ��������������")
c.addCity("p101035019001","��ˮ��³����")
c.addCity("p101035019002","������������")
c.addCity("p101035019003","��ɽ������ŭ�������أ��Ŀ���")
c.addCity("p101035019004","��ƺ���������������أ�����")
p1.addProvinces(c);	
c = new provinceCN("����","p101035020","�������������")
c.addCity("p101035020001","�е飨������")
c.addCity("p101035020002","���գ���ƽ��")
c.addCity("p101035020003","ά�������������أ�������")
p1.addProvinces(c);	
provincesListArr = provincesListArr.concat(p1);	
var p1 = new provincesList("CN","p101036","�㽭");
c = new provinceCN("�㽭","p101036001","����")
c.addCity("p101036001001","��Ϫ��������")
c.addCity("p101036001002","������������")
c.addCity("p101036001003","���ڣ������")
c.addCity("p101036001004","������������")
c.addCity("p101036001005","���壨������")
c.addCity("p101036001006","�ֽ���������")
c.addCity("p101036001007","�Ͱ���������")
p1.addProvinces(c);	
c = new provinceCN("�㽭","p101036002","������")
c.addCity("p101036002001","��Ϫ���ɽ��")
c.addCity("p101036002002","��Ҧ����Ҧ��")
c.addCity("p101036002003","���������")
c.addCity("p101036002004","۴�أ������н�������")
c.addCity("p101036002005","�������ǹ���")
c.addCity("p101036002006","��ɽ��������")
p1.addProvinces(c);	
c = new provinceCN("�㽭","p101036003","������")
c.addCity("p101036003001","���ߣ��ǹ���")
c.addCity("p101036003002","���ݣ��ٹ���")
c.addCity("p101036003003","���ݣ��ǹ���")
c.addCity("p101036003004","�²����ǹ���")
p1.addProvinces(c);	
c = new provinceCN("�㽭","p101036004","������")
c.addCity("p101036004001","�𰲣��ǹ���")
c.addCity("p101036004002","���壨�ֳ���")
c.addCity("p101036004003","���Σ�������")
c.addCity("p101036004004","�ĳɣ���N��")
c.addCity("p101036004005","ƽ����������")
c.addCity("p101036004006","̩˳��������")
c.addCity("p101036004007","��ͷ�������")
c.addCity("p101036004008","���ϣ���Ϫ��")
p1.addProvinces(c);	
c = new provinceCN("�㽭","p101036005","������")
c.addCity("p101036005001","ƽ�����ǹ���")
c.addCity("p101036005002","��������ʯ��")
c.addCity("p101036005003","ͩ�磨��ͩ��")
c.addCity("p101036005004","���ƣ�κ����")
c.addCity("p101036005005","���Σ���ԭ��")
p1.addProvinces(c);	
c = new provinceCN("�㽭","p101036006","̨����")
c.addCity("p101036006001","�ٺ����ǹ���")
c.addCity("p101036006002","���루̫ƽ��")
c.addCity("p101036006003","���ţ�������")
c.addCity("p101036006004","��̨���ǹ���")
c.addCity("p101036006005","�ɾӣ��ǹ���")
c.addCity("p101036006006","�񻷣��ǹ���")
c.addCity("p101036006007","����")
p1.addProvinces(c);	
c = new provinceCN("�㽭","p101036007","������")
c.addCity("p101036007001","���ˣ�������")
c.addCity("p101036007002","���壨�俵��")
c.addCity("p101036007003","������������")
p1.addProvinces(c);	
c = new provinceCN("�㽭","p101036008","��ɽ��")
c.addCity("p101036008001","�ɽ����ͤ��")
c.addCity("p101036008002","��������԰��")
p1.addProvinces(c);	
c = new provinceCN("�㽭","p101036009","������")
c.addCity("p101036009001","��ɽ���뽭��")
c.addCity("p101036009002","���أ������п³�����")
c.addCity("p101036009003","��ɽ��������")
c.addCity("p101036009004","�������ǹ���")
c.addCity("p101036009005","���Σ�������")
p1.addProvinces(c);	
c = new provinceCN("�㽭","p101036010","��ˮ��")
c.addCity("p101036010001","���ƣ�������")
c.addCity("p101036010002","����׳���")
c.addCity("p101036010003","�ƺͣ��ƺ���")
c.addCity("p101036010004","����������")
c.addCity("p101036010005","������������")
c.addCity("p101036010006","��Ԫ����Դ��")
c.addCity("p101036010007","��Ȫ����Ԩ��")
c.addCity("p101036010008","������������أ���Ϫ��")
p1.addProvinces(c);	
c = new provinceCN("�㽭","p101036014","������")
c.addCity("p101036014001","�ຼ����ƽ��")
c.addCity("p101036014002","��ɽ��������")
c.addCity("p101036014003","�ٰ���������")
c.addCity("p101036014004","������������")
c.addCity("p101036014005","���£��°�����")
c.addCity("p101036014006","ͩ®��ͩ®��")
c.addCity("p101036014007","������ǧ������")
p1.addProvinces(c);	
provincesListArr = provincesListArr.concat(p1);	
var p1 = new provincesList("CN","p101037","����");
c = new provinceCN("����","p101037001001","������")
p1.addProvinces(c);
c = new provinceCN("����","p101037001005","������")
p1.addProvinces(c);
c = new provinceCN("����","p101037001006","������")
p1.addProvinces(c);
c = new provinceCN("����","p101037001007","������")
p1.addProvinces(c);
c = new provinceCN("����","p101037001008","������")
p1.addProvinces(c);
c = new provinceCN("����","p101037001009","ɳƺ����")
p1.addProvinces(c);
c = new provinceCN("����","p101037001013","��ʢ��")
p1.addProvinces(c);
c = new provinceCN("����","p101037001014","�ϰ���")
p1.addProvinces(c);
c = new provinceCN("����","p101037001015","������")
p1.addProvinces(c);
c = new provinceCN("����","p101037001016","�山��")
p1.addProvinces(c);
c = new provinceCN("����","p101037001017","��������")
p1.addProvinces(c);
c = new provinceCN("����","p101037001018","��ɿ���")
p1.addProvinces(c);
c = new provinceCN("����","p101037001019","˫����")
p1.addProvinces(c);
c = new provinceCN("����","p101037001020","������")
p1.addProvinces(c);
c = new provinceCN("����","p101037001021","�ϴ���")
p1.addProvinces(c);
c = new provinceCN("����","p101037001022","������")
p1.addProvinces(c);
c = new provinceCN("����","p101037001023","�ϴ���")
p1.addProvinces(c);
c = new provinceCN("����","p101037001025","������")
p1.addProvinces(c);
c = new provinceCN("����","p101037001024","�뽭��������")
p1.addProvinces(c);
c = new provinceCN("����","p101037001026","���ϣ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101037001027","�ٲ�����Ԫ��")
p1.addProvinces(c);
c = new provinceCN("����","p101037001028","�ɽ��赳���")
p1.addProvinces(c);
c = new provinceCN("����","p101037001029","���㣨������")
p1.addProvinces(c);
c = new provinceCN("����","p101037001030","ͭ�����ʹ���")
p1.addProvinces(c);
c = new provinceCN("����","p101037001031","��ƽ����ɽ��")
p1.addProvinces(c);
c = new provinceCN("����","p101037001032","�ǿڣ������")
p1.addProvinces(c);
c = new provinceCN("����","p101037001033","�潭����Ϫ��")
p1.addProvinces(c);
c = new provinceCN("����","p101037001034","��¡�������")
p1.addProvinces(c);
c = new provinceCN("����","p101037001035","�ᶼ��������")
p1.addProvinces(c);
c = new provinceCN("����","p101037001036","��ڣ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101037001037","���أ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101037001038","�����������죩")
p1.addProvinces(c);
c = new provinceCN("����","p101037001039","���أ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101037001040","��Ϫ��������")
p1.addProvinces(c);
c = new provinceCN("����","p101037001041","��ɽ����Ͽ��")
p1.addProvinces(c);
c = new provinceCN("����","p101037001043","ʯ�������������أ��ϱ���")
p1.addProvinces(c);
c = new provinceCN("����","p101037001044","�������������������أ��Ӷ���")
p1.addProvinces(c);
c = new provinceCN("����","p101037001045","��ɽ���������������أ��к���")
p1.addProvinces(c);
c = new provinceCN("����","p101037001046","��ˮ���������������أ�������")
p1.addProvinces(c);
c = new provinceCN("����","p101037001047","ǭ��������")
p1.addProvinces(c);	
provincesListArr = provincesListArr.concat(p1);	

/*var tb1 = div1;
var tb2 = div2;
var tb3 = div3;
var tb4 = div4;
var tb5 = div5;*/
//var tb6 = div6;

var selectCountryList = "all";

if( "CN" == "CN") {
selectCountryList = "cn";
}else if( "HK" == "CN" || "TW" == "CN" || "SG" == "CN" ){
selectCountryList = "hot";
}

//var CountryListCN = form1.CountryListCN

var CountryListHot = form1.CountryListHot

var CountryForm = form1.CountryList


cur = new Country("CN","�й�", "86", "1");
CountryArrHot = CountryArrHot.concat(cur);
CountryArrCN = CountryArrCN.concat(cur);


cur.addBoard(new Board("CN","p101001","����"))
cur.addBoard(new Board("CN","p101002","����"))
cur.addBoard(new Board("CN","p101003","����"))
cur.addBoard(new Board("CN","p101004","����"))
cur.addBoard(new Board("CN","p101005","����"))
cur.addBoard(new Board("CN","p101006","�㶫"))
cur.addBoard(new Board("CN","p101007","����"))
cur.addBoard(new Board("CN","p101008","����"))
cur.addBoard(new Board("CN","p101010","�ӱ�"))
cur.addBoard(new Board("CN","p101011","������"))
cur.addBoard(new Board("CN","p101012","����"))
cur.addBoard(new Board("CN","p101013","���"))
cur.addBoard(new Board("CN","p101014","����"))
cur.addBoard(new Board("CN","p101015","����"))
cur.addBoard(new Board("CN","p101016","����"))
cur.addBoard(new Board("CN","p101017","����"))
cur.addBoard(new Board("CN","p101018","����"))
cur.addBoard(new Board("CN","p101019","����"))
cur.addBoard(new Board("CN","p101020","����"))
cur.addBoard(new Board("CN","p101021","���ɹ�"))
cur.addBoard(new Board("CN","p101022","����"))	
cur.addBoard(new Board("CN","p101024","�ຣ"))
cur.addBoard(new Board("CN","p101025","����"))
cur.addBoard(new Board("CN","p101026","ɽ��"))
cur.addBoard(new Board("CN","p101027","�Ϻ�"))
cur.addBoard(new Board("CN","p101028","ɽ��"))
cur.addBoard(new Board("CN","p101029","�Ĵ�"))
cur.addBoard(new Board("CN","p101030","̨��"))
cur.addBoard(new Board("CN","p101031","���"))
cur.addBoard(new Board("CN","p101033","�½�"))
cur.addBoard(new Board("CN","p101034","����"))
cur.addBoard(new Board("CN","p101035","����"))
cur.addBoard(new Board("CN","p101036","�㽭"))
cur.addBoard(new Board("CN","p101037","����"))
cur.addBoard(new Board("CN","p101023","�������/����"))
cur.addBoard(new Board("CN","���һ�ʡ��","���һ�ʡ��"))

/*cur = new Country("HK","�й����", "852", "2");
CountryArrHot = CountryArrHot.concat(cur);
CountryArrCN = CountryArrCN.concat(cur);


cur = new Country("TW","�й�̨��", "886", "2");
CountryArrHot = CountryArrHot.concat(cur);
CountryArrCN = CountryArrCN.concat(cur);

cur = new Country("SG","Singapore", "65", "0");
CountryArrHot = CountryArrHot.concat(cur);
CountryArrCN = CountryArrCN.concat(cur);

cur = new Country("SelectCountries","��������/����", "", "0");
CountryArrHot = CountryArrHot.concat(cur);
CountryArrCN = CountryArrCN.concat(cur);*/


/*for(var i=0;i < CountryArrCN.length;i++){
CountryListCN.options[i] = new Option(CountryArrCN[i].title,CountryArrCN[i].id);
CountryListHot.options[i] = new Option(CountryArrCN[i].title,CountryArrCN[i].id);

if(CountryArrHot[i].id == "CN") {
CountryListCN.options[i].selected=true;
CountryListHot.options[i].selected=true;
}
}*/

var boardForm = form1.province1;
var provinceCN = form1.provinceCN;
var capitalCN = form1.capitalCN;
var cityCN = form1.cityCN;

var provinceListHot = form1.provinceListHot;
var provinceTextHot = form1.provinceTextHot;

//var CountryPhone = form1.J_z_Z_PhoneCountry
//var FaxPhone = form1.J_z_Z_FaxCountry
var Province1 = form1.province1;
var Province2 = form1.province2;

var selectedProvinceName = "";
var selectedCountryName = "";
var selectedCityName = "";

/*for (var i=0;i<CountryArr.length;i++) {
CountryForm.options[i+1]=new Option(CountryArr[i].title,CountryArr[i].id);
if(CountryArr[i].id == "CN")
CountryForm.options[i+1].selected=true;
}*/

/*if("cn" == selectCountryList){

changeCountry(CountryListCN,selectCountryList);
}else if("hot" == selectCountryList){

changeCountry(CountryListHot,selectCountryList);
}else {

changeCountry(CountryForm,selectCountryList);
}*/

var len = provinceCN.options.length;
for (var i=0;i<len;i++) {
if(provinceCN.options[i].value == "" || provinceCN.options[i].value == "$group.Province.Value") {
provinceCN.options[i].selected=true;
selectedProvinceName = provinceCN.options[i].text;
}
}

/*len = boardForm.options.length;

for (var i=0;i<len;i++) {
if(boardForm.options[i].value == "$group.Province.Value") {
boardForm.options[i].selected=true;
}
}*/

changeProvinceList(provinceCN);

/*len = capitalCN.options.length;


for(var i = 0;i < len; i++) {
if(capitalCN.options[i].value == ""){
capitalCN.options[i].selected = true;
changeCapitalCity(capitalCN);
len = cityCN.options.length;
for(var i = 0;i < len; i++){
if(cityCN.options[i].value == "$group.City.Value") {
cityCN.options[i].selected = true;
selectedCityName =  cityCN.options[i].text;
}
}
}
}*/

//changeAddress();


var provincecnSelected = provinceCN.selectedIndex;
var boardscn = CountryArrCN[0].getOptions();
for (var i=0;i< boardscn.length;i++) {
provinceCN.options[i+1] = boardscn[i];
if( provincecnSelected > 0 && (provincecnSelected == i+1 ) ) {
provinceCN.options[i+1].selected=true;
}
}
