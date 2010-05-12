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
//address += "中国";
address = selectedProvinceName + selectedCityName;
}

PreAddress.innerHTML = address;

}


var CountryArr = new Array();
var CountryArrHot = new Array();
var CountryArrCN = new Array();

var cur;
cur = new Country("CN","中国", "86", "1");
CountryArr = CountryArr.concat(cur);
cur.addBoard(new Board("CN","","安徽"))
cur.addBoard(new Board("CN","","北京"))
cur.addBoard(new Board("CN","","福建"))
cur.addBoard(new Board("CN","","甘肃"))
cur.addBoard(new Board("CN","","广东"))
cur.addBoard(new Board("CN","","广西"))
cur.addBoard(new Board("CN","","贵州"))
cur.addBoard(new Board("CN","","海南"))
cur.addBoard(new Board("CN","","河北"))
cur.addBoard(new Board("CN","","河南"))
cur.addBoard(new Board("CN","","黑龙江"))
cur.addBoard(new Board("CN","","湖北"))
cur.addBoard(new Board("CN","","湖南"))
cur.addBoard(new Board("CN","","吉林"))
cur.addBoard(new Board("CN","","江苏"))
cur.addBoard(new Board("CN","","江西"))
cur.addBoard(new Board("CN","","辽宁"))
cur.addBoard(new Board("CN","","内蒙古"))
cur.addBoard(new Board("CN","","宁夏"))
cur.addBoard(new Board("CN","","青海"))
cur.addBoard(new Board("CN","","山东"))
cur.addBoard(new Board("CN","","山西"))
cur.addBoard(new Board("CN","","陕西"))
cur.addBoard(new Board("CN","","上海"))
cur.addBoard(new Board("CN","","四川"))
cur.addBoard(new Board("CN","","天津"))
cur.addBoard(new Board("CN","","西藏"))
cur.addBoard(new Board("CN","","新疆"))
cur.addBoard(new Board("CN","","云南"))
cur.addBoard(new Board("CN","","浙江"))
cur.addBoard(new Board("CN","","重庆"))
/*cur = new Country("TW","中国台湾", "886", "2");
CountryArr = CountryArr.concat(cur);
cur = new Country("HK","中国香港", "852", "2");
CountryArr = CountryArr.concat(cur);
cur = new Country("Other","其他国家或地区", "", "0");
CountryArr = CountryArr.concat(cur);*/


var provincesListArr = new  Array();
var c;
var SelectProvinceId;
var lenCapitalCity = form1.capitalCN.options.length;
for (var i=lenCapitalCity - 1;i>0;i--){
form1.capitalCN.options[i] = null;
}


var p1 = new provincesList("CN","p101001","安徽");
c = new provinceCN("安徽","p101001001","合肥市")
c.addCity("p101001001001","长丰（水湖镇）")
c.addCity("p101001001002","肥东（店埠镇）")
c.addCity("p101001001003","肥西（长派镇）")
p1.addProvinces(c);
c = new provinceCN("安徽","p101001002","芜湖市/镇")
c.addCity("p101001002001","芜湖（湾止镇）")
c.addCity("p101001002002","繁昌（城关镇）")
c.addCity("p101001002003","南陵（城关镇）")
p1.addProvinces(c);
c = new provinceCN("安徽","p101001003","蚌埠市")
c.addCity("p101001003001","怀远（城关镇）")
c.addCity("p101001003002","五河（城关镇）")
c.addCity("p101001003003","固镇（城关镇）")
p1.addProvinces(c);
c = new provinceCN("安徽","p101001004","阜阳市")
c.addCity("p101001004001","临泉（城关镇）")
c.addCity("p101001004002","太和（城关镇）")
c.addCity("p101001004003","阜南（城关镇）")
c.addCity("p101001004004","颖上（城关镇）")
c.addCity("p101001004005","界首市")
p1.addProvinces(c);
c = new provinceCN("安徽","p101001005","铜陵市/县")
c.addCity("p101001005001","铜陵县（城关镇）")
p1.addProvinces(c);
c = new provinceCN("安徽","p101001006","黄山市")
c.addCity("p101001006001","歙县（徽城镇）")
c.addCity("p101001006002","休宁（海阳镇）")
c.addCity("p101001006003","黟县（碧阳镇）")
c.addCity("p101001006004","祁门（祁山镇）")
p1.addProvinces(c);
c = new provinceCN("安徽","p101001007","淮南市")
c.addCity("p101001007001","凤台（城关镇）")
p1.addProvinces(c);
c = new provinceCN("安徽","p101001008","淮北市")
c.addCity("p101001008001","濉溪（濉溪镇）")
p1.addProvinces(c);
c = new provinceCN("安徽","p101001009","安庆市")
c.addCity("p101001009002","宿松（孚玉镇）")
c.addCity("p101001009003","怀宁（高河镇）")
c.addCity("p101001009004","潜山（梅城镇）")
c.addCity("p101001009005","枞阳（枞阳镇）")
c.addCity("p101001009006","岳西（天堂镇）")
c.addCity("p101001009007","太湖（晋熙镇）")
c.addCity("p101001009008","望江（雷阳镇）")
c.addCity("p101001009009","桐城市")
p1.addProvinces(c);
c = new provinceCN("安徽","p101001010","马鞍山市")
c.addCity("p101001010001","当涂（城关镇）")
p1.addProvinces(c);
c = new provinceCN("安徽","p101001011","滁州市")
c.addCity("p101001011001","来安（新安镇）")
c.addCity("p101001011002","全椒（襄河镇）")
c.addCity("p101001011003","定远（定城镇）")
c.addCity("p101001011004","风阳（府城镇）")
c.addCity("p101001011005","明光市")
c.addCity("p101001011006","天长市")
p1.addProvinces(c);
c = new provinceCN("安徽","p101001012","宿州市")
c.addCity("p101001012001","砀山（城关镇）")
c.addCity("p101001012002","萧县（龙城镇）")
c.addCity("p101001012003","灵壁（灵城镇）")
c.addCity("p101001012004","泗县（泗城镇）")
p1.addProvinces(c);
c = new provinceCN("安徽","p101001013","六安市")
c.addCity("p101001013001","寿县（寿春镇）")
c.addCity("p101001013002","霍邱（城关镇）")
c.addCity("p101001013003","舒城（城关镇）")
c.addCity("p101001013004","金寨（梅山镇）")
c.addCity("p101001013005","霍山（城关镇）")
p1.addProvinces(c);
c = new provinceCN("安徽","p101001014","巢湖市")
c.addCity("p101001014001","庐江（城关镇）")
c.addCity("p101001014002","无为（无城镇）")
c.addCity("p101001014003","含山（环峰镇）")
c.addCity("p101001014004","和县")
p1.addProvinces(c);
c = new provinceCN("安徽","p101001015","宣城市")
c.addCity("p101001015001","郎溪（建平镇）")
c.addCity("p101001015002","广德（桃州镇）")
c.addCity("p101001015003","泾县（城关镇）")
c.addCity("p101001015004","旌德（旌阳镇）")
c.addCity("p101001015005","绩溪（华阳镇）")
c.addCity("p101001015006","宁国市")
p1.addProvinces(c);
c = new provinceCN("安徽","p101001016","池州市")
c.addCity("p101001016001","东至（尧渡镇）")
c.addCity("p101001016002","石台（七里镇）")
c.addCity("p101001016003","青阳（蓉城镇）")
p1.addProvinces(c);
c = new provinceCN("安徽","p101001055","亳州市")
c.addCity("p101001055003","利辛（城关镇）")
c.addCity("p101001055001","蒙城（城关镇）")
c.addCity("p101001055002","涡阳（城关镇）")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);

var p1 = new provincesList("CN","p101002","北京");	
c = new provinceCN("北京","p101002019001","延庆县（延庆镇）")
p1.addProvinces(c);
c = new provinceCN("北京","p101002019002","昌平区（昌平镇）")
p1.addProvinces(c);
c = new provinceCN("北京","p101002019003","朝阳区")
p1.addProvinces(c);
c = new provinceCN("北京","p101002019004","崇文区")
p1.addProvinces(c);
c = new provinceCN("北京","p101002019005","大兴区（黄村镇）")
p1.addProvinces(c);
c = new provinceCN("北京","p101002019006","东城区")
p1.addProvinces(c);
c = new provinceCN("北京","p101002019007","房山区")
p1.addProvinces(c);
c = new provinceCN("北京","p101002019008","丰台区")
p1.addProvinces(c);
c = new provinceCN("北京","p101002019009","海淀区")
p1.addProvinces(c);
c = new provinceCN("北京","p101002019010","怀柔区（怀柔镇）")
p1.addProvinces(c);
c = new provinceCN("北京","p101002019011","门头沟区")
p1.addProvinces(c);
c = new provinceCN("北京","p101002019012","密云县（密云镇）")
p1.addProvinces(c);
c = new provinceCN("北京","p101002019013","平谷区（平谷镇）")
p1.addProvinces(c);
c = new provinceCN("北京","p101002019014","石景山区")
p1.addProvinces(c);
c = new provinceCN("北京","p101002019015","顺义区")
p1.addProvinces(c);
c = new provinceCN("北京","p101002019016","通州区")
p1.addProvinces(c);
c = new provinceCN("北京","p101002019017","西城区")
p1.addProvinces(c);
c = new provinceCN("北京","p101002019018","宣武区")	
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);

var p1 = new provincesList("CN","p101003","海南");
c = new provinceCN("海南","p101003001001","三亚市")	
p1.addProvinces(c);
c = new provinceCN("海南","p101003001002","海口市")
p1.addProvinces(c);
c = new provinceCN("海南","p101003001004","白沙黎族苗族自治县（牙叉镇）")
p1.addProvinces(c);
c = new provinceCN("海南","p101003001005","保亭黎族苗族自治县（保城镇）")
p1.addProvinces(c);
c = new provinceCN("海南","p101003001007","昌江黎族自治县（石碌镇）")
p1.addProvinces(c);
c = new provinceCN("海南","p101003001008","澄迈县（金江镇）")
p1.addProvinces(c);
c = new provinceCN("海南","p101003001009","万宁市")
p1.addProvinces(c);
c = new provinceCN("海南","p101003001010","儋州市")
p1.addProvinces(c);
c = new provinceCN("海南","p101003001011","定安县（定城镇）")
p1.addProvinces(c);
c = new provinceCN("海南","p101003001012","东方市")
p1.addProvinces(c);
c = new provinceCN("海南","p101003001013","乐东黎族自治县（抱由镇）")
p1.addProvinces(c);
c = new provinceCN("海南","p101003001014","临高县（临城镇）")
p1.addProvinces(c);
c = new provinceCN("海南","p101003001015","陵水黎族自治县（陵城镇）")
p1.addProvinces(c);
c = new provinceCN("海南","p101003001016","琼海市")
p1.addProvinces(c);
c = new provinceCN("海南","p101003001017","琼山市")
p1.addProvinces(c);
c = new provinceCN("海南","p101003001018","琼中黎族苗族自治县（营根镇）")
p1.addProvinces(c);
c = new provinceCN("海南","p1010033001019","屯昌县（屯昌镇）")
p1.addProvinces(c);
c = new provinceCN("海南","p101003001020","文昌市")
p1.addProvinces(c);
c = new provinceCN("海南","p101003001021","五指山市（通什）")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);


var p1 = new provincesList("CN","p101004","福建");
c = new provinceCN("福建","p101004001","泉州市")
c.addCity("p101004001001","惠安（螺城镇）")
c.addCity("p101004001002","安溪（凤城镇）")
c.addCity("p101004001003","永春（桃城镇）")
c.addCity("p101004001004","德化（龙浔镇）")
c.addCity("p101004001005","石狮市")
c.addCity("p101004001006","晋江市")
c.addCity("p101004001007","南安市")
c.addCity("p101004001008","金门县")
p1.addProvinces(c);
c = new provinceCN("福建","p101004002","厦门市")
p1.addProvinces(c);
c = new provinceCN("福建","p101004003","三明市")
c.addCity("p101004003001","明溪（雪峰镇）")
c.addCity("p101004003002","清流（龙津镇）")
c.addCity("p101004003003","宁化（翠江镇）")
c.addCity("p101004003004","大田（均溪镇）")
c.addCity("p101004003005","龙溪（城关镇）")
c.addCity("p101004003006","沙县（凤岗镇）")
c.addCity("p101004003007","将乐（古铺镇）")
c.addCity("p101004003008","泰宁（杉城镇）")
c.addCity("p101004003009","建宁（濉城镇）")
c.addCity("p101004003010","永安市")
p1.addProvinces(c);
c = new provinceCN("福建","p101004004","莆田市")
c.addCity("p101004004001","浦田（浦田市城厢区）")
c.addCity("p101004004002","仙游（鲤城镇）")
p1.addProvinces(c);
c = new provinceCN("福建","p101004005","宁德市")
c.addCity("p101004005001","寿宁（整阳镇）")
c.addCity("p101004005002","霞浦（松城镇）")
c.addCity("p101004005003","柘荣（双城镇）")
c.addCity("p101004005004","屏南（古峰镇）")
c.addCity("p101004005005","古田（新城镇）")
c.addCity("p101004005006","周宁（狮城镇）")
c.addCity("p101004005007","福安市")
c.addCity("p101004005008","福鼎市")
p1.addProvinces(c);
c = new provinceCN("福建","p101004006","南平市")
c.addCity("p101004006001","顺昌（双溪镇）")
c.addCity("p101004006002","浦城（南浦镇）")
c.addCity("p101004006003","光泽（杭川镇）")
c.addCity("p101004006004","松溪（松源镇）")
c.addCity("p101004006005","政和（熊山镇）")
c.addCity("p101004006006","邵武市")
c.addCity("p101004006007","武夷山市")
c.addCity("p101004006008","建瓯市")
c.addCity("p101004006009","建阳市")
p1.addProvinces(c);
c = new provinceCN("福建","p101004007","龙岩市")
c.addCity("p101004007001","长汀（汀洲镇）")
c.addCity("p101004007002","永定（凤城镇）")
c.addCity("p101004007003","上杭（临江镇）")
c.addCity("p101004007004","武平（平川镇）")
c.addCity("p101004007005","连城（莲峰镇）")
c.addCity("p101004007006","漳平市")
p1.addProvinces(c);
c = new provinceCN("福建","p101004008","漳州市")
c.addCity("p101004008001","云宵（云陵镇）")
c.addCity("p101004008002","漳浦（绥安镇）")
c.addCity("p101004008003","诏安（南诏镇）")
c.addCity("p101004008004","长泰（武安镇）")
c.addCity("p101004008005","东山（西埔镇）")
c.addCity("p101004008006","南靖（山城镇）")
c.addCity("p101004008007","平和（小溪镇）")
c.addCity("p101004008008","华安（华丰镇）")
c.addCity("p101004008009","龙海市")
p1.addProvinces(c);
c = new provinceCN("福建","p101004009","福州市")
c.addCity("p101004009001","闽侯（甘蔗镇）")
c.addCity("p101004009002","连江（凤城镇）")
c.addCity("p101004009003","罗源（凤山）")
c.addCity("p101004009004","闽清（梅城镇）")
c.addCity("p101004009005","永泰（樟城镇）")
c.addCity("p101004009006","平潭（潭城镇）")
c.addCity("p101004009007","福清市")
c.addCity("p101004009008","长乐市")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);

var p1 = new provincesList("CN","p101005","甘肃");
c = new provinceCN("甘肃","p101005001","兰州市")
c.addCity("p101005001001","永登（城关镇）")
c.addCity("p101005001002","皋兰（城关镇）")
c.addCity("p101005001003","榆中（城关镇）")
p1.addProvinces(c);

c = new provinceCN("甘肃","p101005002","金昌市")
c.addCity("p101005002001","永昌（城关镇）")
p1.addProvinces(c);

c = new provinceCN("甘肃","p101005003","白银市")
c.addCity("p101005003001","靖远（城关镇）")
c.addCity("p101005003002","会宁（会师镇）")
c.addCity("p101005003003","景泰（一条山镇）")
p1.addProvinces(c);
c = new provinceCN("甘肃","p101005004","天水市")
c.addCity("p101005004001","清水（永清镇）")
c.addCity("p101005004002","秦安（兴国镇）")
c.addCity("p101005004003","甘谷（城关镇）")
c.addCity("p101005004004","武山（城关镇）")
c.addCity("p101005004005","张家川回族自治（张家川镇）")
c.addCity("p101005004006","合水（西华池镇）")
p1.addProvinces(c);

c = new provinceCN("甘肃","p101005005","嘉峪关市")
p1.addProvinces(c);
c = new provinceCN("甘肃","p101005006","定西地区/县")
c.addCity("p101005006001","定西（城关镇）")
c.addCity("p101005006002","通渭（平襄镇）")
c.addCity("p101005006003","临洮（洮阳镇）")
c.addCity("p101005006004","漳县（城关镇）")
c.addCity("p101005006005","岷县（城关镇）")
c.addCity("p101005006006","陇西（巩昌镇）")
c.addCity("p101005006007","渭源（清源镇）")
p1.addProvinces(c);
c = new provinceCN("甘肃","p101005007","平凉地区/市")
c.addCity("p101005007001","泾川（城关镇）")
c.addCity("p101005007002","灵台（中台镇）")
c.addCity("p101005007003","崇信（锦屏镇）")
c.addCity("p101005007004","华亭（东华镇）")
c.addCity("p101005007005","庄浪（水洛城镇）")
c.addCity("p101005007006","静宁（城关镇）")
p1.addProvinces(c);
c = new provinceCN("甘肃","p101005008","庆阳地区")
c.addCity("p101005008001","庆阳（庆城镇）")
c.addCity("p101005008002","环县（环城镇）")
c.addCity("p101005008003","华池（柔远镇）")
c.addCity("p101005008004","合水（西华池镇）")
c.addCity("p101005008005","正宁（山河镇）")
c.addCity("p101005008006","宁县（新宁镇）")
c.addCity("p101005008007","镇原（城关镇）")
c.addCity("p101005008008","西峰市")
p1.addProvinces(c);
c = new provinceCN("甘肃","p101005009","陇南地区")
c.addCity("p101005009001","成县（城关镇）")
c.addCity("p101005009002","武都县（城关镇）")
c.addCity("p101005009003","宕昌（城关镇）")
c.addCity("p101005009004","文县（城关镇）")
c.addCity("p101005009005","西和（汉源镇）")
c.addCity("p101005009006","礼县（城关镇）")
c.addCity("p101005009007","两当（城关镇）")
c.addCity("p101005009008","徽县（城关镇）")
p1.addProvinces(c);
c = new provinceCN("甘肃","p101005010","武威地区/市")
c.addCity("p101005010001","民勤（城关镇）")
c.addCity("p101005010002","古浪（古浪镇）")
c.addCity("p101005010003","天祝藏族自治县（华藏寺镇）")
p1.addProvinces(c);
c = new provinceCN("甘肃","p101005011","张掖地区/市")
c.addCity("p101005011001","民乐（城关镇）")
c.addCity("p101005011002","临泽（城关镇）")
c.addCity("p101005011003","高台（城关镇）")
c.addCity("p101005011004","山丹（城关镇）")
c.addCity("p101005011005","肃南裕固族自治县（红湾寺镇）")
p1.addProvinces(c);
c = new provinceCN("甘肃","p101005012","酒泉地区/市")
c.addCity("p101005012001","金塔（金塔镇）")
c.addCity("p101005012002","安西（渊泉镇）")
c.addCity("p101005012003","肃北蒙古族自治县（党城湾镇）")
c.addCity("p101005012004","阿克塞哈萨克族自治县（红柳湾镇）")
c.addCity("p101005012005","玉门市")
c.addCity("p101005012006","敦煌市")
p1.addProvinces(c);
c = new provinceCN("甘肃","p101005013","甘南藏族自治州")
c.addCity("p101005013001","临潭（城关镇）")
c.addCity("p101005013002","卓尼（柳林镇）")
c.addCity("p101005013003","舟曲（城关乡）")
c.addCity("p101005013004","迭部（电尕乡）")
c.addCity("p101005013005","玛曲（尼玛乡）")
c.addCity("p101005013006","碌曲（玛艾乡）")
c.addCity("p101005013007","夏河（拉卜楞镇）")
c.addCity("p101005013008","合作市")
p1.addProvinces(c);
c = new provinceCN("甘肃","p101005014","临夏回族自治州/临夏市")
c.addCity("p101005014001","临夏（韩集镇）")
c.addCity("p101005014002","康乐（附城镇）")
c.addCity("p101005014003","永靖（刘家峡镇）")
c.addCity("p101005014004","广河（城关镇）")
c.addCity("p101005014005","和政（城关镇）")
c.addCity("p101005014006","东乡族自治县（锁南镇）")
c.addCity("p101005014007","积石山保安族东乡撒拉族自治县（吹麻滩镇）")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101006","广东");
c = new provinceCN("广东","p101006001","潮州市")
c.addCity("p101006001001","潮安（庵埠镇）")
c.addCity("p101006001002","饶平（黄冈镇）")
p1.addProvinces(c);
c = new provinceCN("广东","p101006002","东莞市")
c.addCity("p101006002001","莞城区")
c.addCity("p101006002002","南城区")
c.addCity("p101006002003","万江区")
c.addCity("p101006002004","东城区")
c.addCity("p101006002005","石碣")
c.addCity("p101006002006","石龙")
c.addCity("p101006002007","茶山")
c.addCity("p101006002008","石排")
c.addCity("p101006002009","企石")
c.addCity("p101006002010","横沥")
c.addCity("p101006002011","桥头")
c.addCity("p101006002012","谢岗")
c.addCity("p101006002013","东坑")
c.addCity("p101006002014","常平")
c.addCity("p101006002015","寮步")
c.addCity("p101006002016","大朗")
c.addCity("p101006002017","黄江")
c.addCity("p101006002018","清溪")
c.addCity("p101006002019","塘厦")
c.addCity("p101006002020","凤岗")
c.addCity("p101006002021","长安")
c.addCity("p101006002022","虎门")
c.addCity("p101006002023","厚街")
c.addCity("p101006002024","沙田")
c.addCity("p101006002025","道窖")
c.addCity("p101006002026","洪梅")
c.addCity("p101006002027","麻涌")
c.addCity("p101006002028","中堂")
c.addCity("p101006002029","高埗")
c.addCity("p101006002030","樟木头")
c.addCity("p101006002031","大岭山")
c.addCity("p101006002032","望牛墩")
p1.addProvinces(c);
c = new provinceCN("广东","p101006003","惠州市")
c.addCity("p101006003001","惠阳市")
c.addCity("p101006003002","博罗（罗阳镇）")
c.addCity("p101006003003","龙门（龙城镇）")
c.addCity("p101006003004","惠东（平山镇）")
p1.addProvinces(c);
c = new provinceCN("广东","p101006004","江门市")
c.addCity("p101006004001","新会市")
c.addCity("p101006004002","恩平市")
c.addCity("p101006004003","台山市")
c.addCity("p101006004004","开平市")
c.addCity("p101006004005","鹤山市")
p1.addProvinces(c);
c = new provinceCN("广东","p101006007","汕头市")
c.addCity("p101006007001","澄海市")
c.addCity("p101006007002","潮阳市")
c.addCity("p101006007003","南澳（后宅镇）")
p1.addProvinces(c);
c = new provinceCN("广东","p101006008","深圳市")
c.addCity("p101006008001","福田区")
c.addCity("p101006008002","罗湖区")
c.addCity("p101006008003","南山区")
c.addCity("p101006008004","盐田区")
c.addCity("p101006008005","宝安区")
c.addCity("p101006008006","龙岗区")
p1.addProvinces(c);
c = new provinceCN("广东","p101006010","湛江市")
c.addCity("p101006010001","吴川市")
c.addCity("p101006010002","廉江市")
c.addCity("p101006010003","雷州市")
c.addCity("p101006010004","遂溪（遂城镇）")
c.addCity("p101006010005","徐闻（徐城镇）")
p1.addProvinces(c);
c = new provinceCN("广东","p101006011","肇庆市")
c.addCity("p101006011001","四会市")
c.addCity("p101006011002","广宁（南街镇）")
c.addCity("p101006011003","怀集（怀城镇）")
c.addCity("p101006011004","封开（江口镇）")
c.addCity("p101006011005","德庆（德城镇）")
c.addCity("p101006011006","高要市")
p1.addProvinces(c);
c = new provinceCN("广东","p101006012","中山市")
p1.addProvinces(c);
c = new provinceCN("广东","p101006013","珠海市")
c.addCity("p101006013001","斗门（井岸镇）")
c.addCity("p101006013002","金湾（三灶镇）")
p1.addProvinces(c);
c = new provinceCN("广东","p101006014","广州市")
c.addCity("p101006014001","增城市")
c.addCity("p101006014002","从化市")
c.addCity("p101006014003","花都区")
c.addCity("p101006014004","番禺区")
c.addCity("p101006014005","越秀区")
c.addCity("p101006014006","海珠区")
c.addCity("p101006014007","荔湾区")
c.addCity("p101006014008","天河区")
c.addCity("p101006014009","白云区")
c.addCity("p101006014010","黄浦区")
c.addCity("p101006014011","萝岗区")
c.addCity("p101006014012","南沙区")
p1.addProvinces(c);
c = new provinceCN("广东","p101006015","韶关市")
c.addCity("p101006015001","乐昌市")
c.addCity("p101006015002","南雄市")
c.addCity("p101006015003","曲江（马坝镇）")
c.addCity("p101006015004","始兴（太平镇）")
c.addCity("p101006015005","仁化（仁化镇）")
c.addCity("p101006015006","翁源（龙仙镇）")
c.addCity("p101006015007","新丰（丰城镇）")
c.addCity("p101006015008","乳源瑶族自治县（乳城镇）")
p1.addProvinces(c);
c = new provinceCN("广东","p101006016","河源市")
c.addCity("p101006016001","紫金（紫城镇）")
c.addCity("p101006016002","龙川（老隆镇）")
c.addCity("p101006016003","连平（元善镇）")
c.addCity("p101006016004","东源（仙塘镇）")
c.addCity("p101006016005","和平（阳明镇）")
p1.addProvinces(c);
c = new provinceCN("广东","p101006017","梅州市")
c.addCity("p101006017001","兴宁市")
c.addCity("p101006017002","梅县（扶大镇）")
c.addCity("p101006017003","怀集（湖寮镇）")
c.addCity("p101006017004","丰顺（汤坑镇）")
c.addCity("p101006017005","五华（水寨镇）")
c.addCity("p101006017006","平远（大枯镇）")
c.addCity("p101006017007","蕉岭（蕉城镇）")
p1.addProvinces(c);
c = new provinceCN("广东","p101006018","汕尾市")
c.addCity("p101006018001","陆丰市")
c.addCity("p101006018002","海丰（海城镇）")
c.addCity("p101006018003","陆河（河田镇）")
p1.addProvinces(c);
c = new provinceCN("广东","p101006019","茂名市")
c.addCity("p101006019001","茂港（南海镇）")
c.addCity("p101006019002","化州市")
c.addCity("p101006019003","信宜市")
c.addCity("p101006019004","高州市")
c.addCity("p101006019005","电白（水东镇）")
p1.addProvinces(c);
c = new provinceCN("广东","p101006021","清远市")
c.addCity("p101006021001","英德市")
c.addCity("p101006021002","连州市")
c.addCity("p101006021003","佛冈（石角镇）")
c.addCity("p101006021004","阳山（阳城镇）")
c.addCity("p101006021005","清新（太和镇）")
c.addCity("p101006021006","连山壮族瑶族自治县（三江镇）")
c.addCity("p101006021007","连南瑶族自治县（三江镇）")
p1.addProvinces(c);
c = new provinceCN("广东","p101006022","揭阳市")
c.addCity("p101006022001","普宁市")
c.addCity("p101006022002","揭东（曲溪镇）")
c.addCity("p101006022003","揭西（河婆镇）")
c.addCity("p101006022004","惠来（惠城镇）")
p1.addProvinces(c);
c = new provinceCN("广东","p101006023","佛山市")
c.addCity("p101006023005","禅城区")
c.addCity("p101006023001","高明区")
c.addCity("p101006023002","顺德区")
c.addCity("p101006023003","南海区")
c.addCity("p101006023004","三水区")
p1.addProvinces(c);
c = new provinceCN("广东","p101006025","阳江市")
c.addCity("p101006025001","阳春市")
c.addCity("p101006025002","阳西（织long镇）")
c.addCity("p101006025003","阳东（东城镇）")
p1.addProvinces(c);
c = new provinceCN("广东","p101006026","云浮市")
c.addCity("p101006026001","罗定市")
c.addCity("p101006026002","云安（六都镇）")
c.addCity("p101006026003","新兴（新城镇）")
c.addCity("p101006026004","郁南（郁城镇）")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101007","广西");
c = new provinceCN("广西","p101007001","北海市")
c.addCity("p101007001001","合浦（廉州镇）")
p1.addProvinces(c);
c = new provinceCN("广西","p101007002","防城港市")
c.addCity("p101007002001","东兴市")
c.addCity("p101007002002","上思（思阳镇）")
p1.addProvinces(c);
c = new provinceCN("广西","p101007003","桂林市")
c.addCity("p101007003001","阳朔（阳朔镇）")
c.addCity("p101007003002","临桂（临桂镇）")
c.addCity("p101007003003","灵川（灵川镇）")
c.addCity("p101007003004","全州（全州镇）")
c.addCity("p101007003005","兴安（兴安镇）")
c.addCity("p101007003006","永福（永福镇）")
c.addCity("p101007003007","灌阳（灌阳镇）")
c.addCity("p101007003008","资源（太合镇）")
c.addCity("p101007003009","平乐（平乐镇）")
c.addCity("p101007003010","荔浦（荔城镇）")
c.addCity("p101007003011","龙胜各族自治县（龙胜镇）")
c.addCity("p101007003012","恭城瑶族自治县（恭城镇）")
p1.addProvinces(c);
c = new provinceCN("广西","p101007004","柳州市/地区")
c.addCity("p101007004001","合山市")
c.addCity("p101007004002","鹿寨（鹿寨镇）")
c.addCity("p101007004003","象州（象州镇）")
c.addCity("p101007004004","武宣（武宣镇）")
c.addCity("p101007004005","来宾（来宾镇）")
c.addCity("p101007004006","融安（长安镇）")
c.addCity("p101007004007","忻城（城关镇）")
c.addCity("p101007004008","三江侗族自治县（古宜镇）")
c.addCity("p101007004009","融水苗族自治县（融水镇）")
c.addCity("p101007004010","金秀瑶族自治县（金秀镇）")
c.addCity("p101007004011","柳江（拉堡镇）")
c.addCity("p101007004012","柳城（大浦镇）")
p1.addProvinces(c);
c = new provinceCN("广西","p101007005","南宁市/地区")
c.addCity("p101007005001","凭祥市")
c.addCity("p101007005002","横县（横州镇）")
c.addCity("p101007005003","宾阳（宾州镇）")
c.addCity("p101007005004","上林（大丰镇）")
c.addCity("p101007005005","隆安（城厢镇）")
c.addCity("p101007005006","马山（白山镇）")
c.addCity("p101007005007","扶绥（新宁镇）")
c.addCity("p101007005008","崇左（太平镇）")
c.addCity("p101007005009","大新（桃城镇）")
c.addCity("p101007005010","天等（天等镇）")
c.addCity("p101007005011","宁明（城中镇）")
c.addCity("p101007005012","龙州（龙州镇）")
c.addCity("p101007005013","邕宁（浦庙镇）")
c.addCity("p101007005014","武鸣（城厢镇）")
p1.addProvinces(c);
c = new provinceCN("广西","p101007006","钦州市")
c.addCity("p101007006001","浦北（小江镇）")
c.addCity("p101007006002","灵山（灵城镇）")
p1.addProvinces(c);
c = new provinceCN("广西","p101007007","梧州市")
c.addCity("p101007007001","岑梧（龙圩镇）")
c.addCity("p101007007002","藤县（藤城镇）")
c.addCity("p101007007003","蒙山（蒙山镇）")
p1.addProvinces(c);
c = new provinceCN("广西","p101007008","百色地区")
c.addCity("p101007008001","田阳（田州镇）")
c.addCity("p101007008002","田东（平马镇）")
c.addCity("p101007008003","平果（马头镇）")
c.addCity("p101007008004","德保（城关镇）")
c.addCity("p101007008005","靖西（新靖镇）")
c.addCity("p101007008006","那坡（城厢镇）")
c.addCity("p101007008007","凌云（泗城镇）")
c.addCity("p101007008008","乐业（同乐镇）")
c.addCity("p101007008009","西林（八达镇）")
c.addCity("p101007008010","田林（乐里镇）")
c.addCity("p101007008011","隆林各族自治县（新州镇）")
p1.addProvinces(c);
c = new provinceCN("广西","p101007009","河池地区")
c.addCity("p101007009001","宜州市")
c.addCity("p101007009002","南丹（城关镇）")
c.addCity("p101007009003","天峨（六排镇）")
c.addCity("p101007009004","凤山（凤城镇）")
c.addCity("p101007009005","东兰（东兰镇）")
c.addCity("p101007009006","巴马瑶族自治县（巴马镇）")
c.addCity("p101007009007","都安瑶族自治县（安阳镇）")
c.addCity("p101007009008","大化瑶族自治县（大化镇）")
c.addCity("p101007009009","罗城仫族自治县（东门镇）")
c.addCity("p101007009010","环江毛南族自治县（思恩镇）")
p1.addProvinces(c);
c = new provinceCN("广西","p101007010","玉林市")
c.addCity("p101007010001","北流市")
c.addCity("p101007010002","兴业（石南镇）")
c.addCity("p101007010003","容县（容城镇）")
c.addCity("p101007010004","陆川（陆城镇）")
c.addCity("p101007010005","博白（博白镇）")
p1.addProvinces(c);
c = new provinceCN("广西","p101007011","贵港市")
c.addCity("p101007011001","桂平市")
c.addCity("p101007011002","平南（平南镇）")
p1.addProvinces(c);
c = new provinceCN("广西","p101007012","贺州地区")
c.addCity("p101007012001","昭平（昭平镇）")
c.addCity("p101007012002","钟山（钟山镇）")
c.addCity("p101007012003","富川瑶族自治县（富阳镇）")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101008","贵州");
c = new provinceCN("贵州","p101008001","贵阳市")
c.addCity("p101008001001","息烽（永靖镇）")
c.addCity("p101008001002","修文（城关镇）")
c.addCity("p101008001003","开阳（城关镇）")
c.addCity("p101008001004","清镇")
p1.addProvinces(c);
c = new provinceCN("贵州","p101008002","遵义市/县")
c.addCity("p101008002001","赤水")
c.addCity("p101008002002","仁怀")
c.addCity("p101008002003","桐梓（娄山关镇）")
c.addCity("p101008002004","绥阳（洋川镇）")
c.addCity("p101008002005","正安（凤仪镇）")
c.addCity("p101008002006","凤冈（龙泉镇）")
c.addCity("p101008002007","湄潭（湄江镇）")
c.addCity("p101008002008","习水（东皇镇）")
c.addCity("p101008002009","余庆（白泥镇）")
c.addCity("p101008002010","务川仡佬族苗族自治县（都濡镇）")
c.addCity("p101008002011","道真仡佬族苗族自治县（玉溪镇）")
p1.addProvinces(c);

c = new provinceCN("贵州","p101008003","毕节地区/市")
c.addCity("p101008003001","大方（大方镇）")
c.addCity("p101008003002","黔西（城关镇）")
c.addCity("p101008003003","金沙（城关镇）")
c.addCity("p101008003004","织金（城关镇）")
c.addCity("p101008003005","纳雍（雍熙镇）")
c.addCity("p101008003006","赫章（城关镇）")
c.addCity("p101008003007","威宁彝族回族苗族自治县（草海镇）")
p1.addProvinces(c);
c = new provinceCN("贵州","p101008004","铜仁地区/市")
c.addCity("p101008004001","江口（双江镇）")
c.addCity("p101008004002","石阡（汤山镇）")
c.addCity("p101008004003","思南（思唐镇）")
c.addCity("p101008004004","德江（青龙镇）")
c.addCity("p101008004005","玉屏侗族自治县（平溪镇）")
c.addCity("p101008004006","沿河土家族自治县（和平镇）")
c.addCity("p101008004007","松桃苗族自治县（蓼皋镇）")
c.addCity("p101008004008","万山特区（万山镇）")
p1.addProvinces(c);

c = new provinceCN("贵州","p101008005","六盘水市")
c.addCity("p101008005001","盘县（红果镇）")
c.addCity("p101008005002","六枝特区（下营盘）")
c.addCity("p101008005003","水城（六盘水市钟山区）")
p1.addProvinces(c);
c = new provinceCN("贵州","p101008006","安顺市")
c.addCity("p101008006001","平坝（城关镇）")
c.addCity("p101008006002","普定（城关镇）")
c.addCity("p101008006003","关岭布依族苗族自治县（思唐镇）")
c.addCity("p101008006004","镇宁布依族苗族自县（城关镇）")
c.addCity("p101008006005","紫云苗族布依族自治县（松山镇）")
p1.addProvinces(c);
c = new provinceCN("贵州","p101008007","黔西南布依族苗族自治州（兴义市）")
c.addCity("p101008007001","安龙（新安镇）")
c.addCity("p101008007002","兴仁（城关镇）")
c.addCity("p101008007003","普安（盘水镇）")
c.addCity("p101008007004","晴隆（莲城镇）")
c.addCity("p101008007005","贞丰（珉谷镇）")
c.addCity("p101008007006","望谟（复兴镇）")
c.addCity("p101008007007","册亨（者楼镇）")
p1.addProvinces(c);
c = new provinceCN("贵州","p101008008","黔南布依族苗族自治州（都匀市）")
c.addCity("p101008008001","福泉市")
c.addCity("p101008008002","荔波（玉屏镇）")
c.addCity("p101008008003","贵定（城关镇）")
c.addCity("p101008008004","瓮安（雍阳镇）")
c.addCity("p101008008005","独山（城关镇）")
c.addCity("p101008008006","平塘（平湖镇）")
c.addCity("p101008008007","罗甸（龙坪镇）")
c.addCity("p101008008008","长顺（长寨镇）")
c.addCity("p101008008009","龙里（龙山镇）")
c.addCity("p101008008010","惠水（和平镇）")
c.addCity("p101008008011","三都水族自治县（三合镇）")
p1.addProvinces(c);
c = new provinceCN("贵州","p101008009","黔东南苗族侗族自治州（凯里市）")
c.addCity("p101008009001","凯里市")
c.addCity("p101008009002","黄平（新州镇）")
c.addCity("p101008009003","施秉（城关镇）")
c.addCity("p101008009004","三穗（八弓镇）")
c.addCity("p101008009005","镇远（潕阳镇）")
c.addCity("p101008009006","岑巩（思旸镇）")
c.addCity("p101008009007","天柱（凤城镇）")
c.addCity("p101008009008","锦屏（三江镇）")
c.addCity("p101008009009","剑河（柳川镇）")
c.addCity("p101008009010","台江（台拱镇）")
c.addCity("p101008009011","黎平（德凤镇）")
c.addCity("p101008009012","榕江（古州镇）")
c.addCity("p101008009013","从江（丙妹镇）")
c.addCity("p101008009014","雷山（丹江镇）")
c.addCity("p101008009015","麻江（杏山镇）")
c.addCity("p101008009016","丹寨（龙泉镇）")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101010","河北");
c = new provinceCN("河北","p101010001","保定市")
c.addCity("p101010001001","定州市")
c.addCity("p101010001002","涿州市")
c.addCity("p101010001003","安国市")
c.addCity("p101010001004","高碑店市")
c.addCity("p101010001005","满城（满城镇）")
c.addCity("p101010001006","清苑（清苑镇）")
c.addCity("p101010001007","易县（易州镇）")
c.addCity("p101010001008","徐水（安肃镇）")
c.addCity("p101010001009","涞源（涞源镇）")
c.addCity("p101010001010","定兴（定兴镇）")
c.addCity("p101010001011","顺平（浦阳镇）")
c.addCity("p101010001012","唐县（仁厚镇）")
c.addCity("p101010001013","望都（望都镇）")
c.addCity("p101010001014","涞水（涞水镇）")
c.addCity("p101010001015","高阳（高阳镇）")
c.addCity("p101010001016","安新（安新镇）")
c.addCity("p101010001017","雄县（雄州镇）")
c.addCity("p101010001018","容城（容城镇）")
c.addCity("p101010001019","曲阳（恒州镇）")
c.addCity("p101010001020","阜平（阜平镇）")
c.addCity("p101010001021","博野（博陵镇）")
c.addCity("p101010001022","蠡县（蠡吾镇）")
p1.addProvinces(c);
c = new provinceCN("河北","p101010002","沧州市")
c.addCity("p101010002001","泊头市")
c.addCity("p101010002002","任丘市")
c.addCity("p101010002003","黄骅市")
c.addCity("p101010002004","河间市")
c.addCity("p101010002005","沧县（沧州市新华区）")
c.addCity("p101010002006","青县（清州镇）")
c.addCity("p101010002007","东光（东光镇）")
c.addCity("p101010002008","海兴（苏基镇）")
c.addCity("p101010002009","盐山（盐山镇）")
c.addCity("p101010002010","肃宁（肃宁镇）")
c.addCity("p101010002011","南皮（南皮镇）")
c.addCity("p101010002012","吴桥（桑园镇）")
c.addCity("p101010002013","献县（乐寿镇）")
c.addCity("p101010002014","孟村回族自治县（孟村镇）")
p1.addProvinces(c);
c = new provinceCN("河北","p101010003","邯郸市")
c.addCity("p101010003001","武安市")
c.addCity("p101010003002","邯郸（南堡乡东小屯村")
c.addCity("p101010003003","临漳（临漳镇）")
c.addCity("p101010003004","成安（成安镇）")
c.addCity("p101010003005","大名（大名镇）")
c.addCity("p101010003006","涉县（涉城镇）")
c.addCity("p101010003007","磁县（磁州镇）")
c.addCity("p101010003008","肥乡（肥乡镇）")
c.addCity("p101010003009","永年（临洺关镇）")
c.addCity("p101010003010","邱县（新马头镇）")
c.addCity("p101010003011","鸡泽（鸡泽镇）")
c.addCity("p101010003012","广平（广平镇）")
c.addCity("p101010003013","馆陶（馆陶镇）")
c.addCity("p101010003014","魏县（魏城镇）")
c.addCity("p101010003015","曲周（曲周镇）")
p1.addProvinces(c);
c = new provinceCN("河北","p101010004","衡水市")
c.addCity("p101010004001","翼州市")
c.addCity("p101010004002","深州市")
c.addCity("p101010004003","枣强（枣强镇）")
c.addCity("p101010004005","武强（武强镇）")
c.addCity("p101010004004","武邑（武邑镇）")
c.addCity("p101010004006","饶阳（饶阳镇）")
c.addCity("p101010004007","安平（安平镇）")
c.addCity("p101010004008","故城（郑口镇）")
c.addCity("p101010004009","景县（景州镇）")
c.addCity("p101010004010","阜城（阜城镇）")
p1.addProvinces(c);
c = new provinceCN("河北","p101010005","廊坊市")
c.addCity("p101010005001","霸州市")
c.addCity("p101010005002","三河市")
c.addCity("p101010005003","固安（固安镇）")
c.addCity("p101010005004","永清（永清镇）")
c.addCity("p101010005005","香河（淑阳镇）")
c.addCity("p101010005006","大城（平舒镇）")
c.addCity("p101010005007","文安（文安镇）")
c.addCity("p101010005008","大厂回族自治县（大厂镇）")
p1.addProvinces(c);
c = new provinceCN("河北","p101010007","秦皇岛市")
c.addCity("p101010007001","昌黎（昌黎镇）")
c.addCity("p101010007002","抚宁（抚宁镇）")
c.addCity("p101010007003","卢龙（卢龙镇）")
c.addCity("p101010007004","青龙满族自治县（青龙镇）")
p1.addProvinces(c);
c = new provinceCN("河北","p101010008","石家庄市")
c.addCity("p101010008001","辛集市")
c.addCity("p101010008002","藁城市")
c.addCity("p101010008003","晋州市")
c.addCity("p101010008004","新乐市")
c.addCity("p101010008005","鹿泉市")
c.addCity("p101010008006","井陉（微水镇）")
c.addCity("p101010008007","正定（正定镇）")
c.addCity("p101010008008","栾城（栾城镇）")
c.addCity("p101010008009","行唐（龙州镇）")
c.addCity("p101010008010","灵寿（灵寿镇）")
c.addCity("p101010008011","高邑（高邑镇）")
c.addCity("p101010008012","深泽（深泽镇）")
c.addCity("p101010008013","赞皇（赞皇镇）")
c.addCity("p101010008014","无极（无极镇）")
c.addCity("p101010008015","平山（平山镇）")
c.addCity("p101010008016","元氏（槐阳镇）")
c.addCity("p101010008017","赵县（赵州镇）")
p1.addProvinces(c);
c = new provinceCN("河北","p101010009","唐山市")
c.addCity("p101010009001","丰南市")
c.addCity("p101010009002","遵化市")
c.addCity("p101010009003","迁安市")
c.addCity("p101010009004","丰润（丰润镇）")
c.addCity("p101010009005","滦县（滦州镇）")
c.addCity("p101010009006","滦南（倴城镇）")
c.addCity("p101010009007","乐亭（乐亭镇）")
c.addCity("p101010009008","迁西（兴城镇）")
c.addCity("p101010009009","玉田（玉田镇）")
c.addCity("p101010009010","唐海（唐海镇）")
p1.addProvinces(c);
c = new provinceCN("河北","p101010010","邢台市")
c.addCity("p101010010001","南宫市")
c.addCity("p101010010002","沙河市")
c.addCity("p101010010003","临城（临城镇）")
c.addCity("p101010010004","内丘（内丘镇）")
c.addCity("p101010010005","柏乡（柏乡镇）")
c.addCity("p101010010006","隆尧（隆尧镇）")
c.addCity("p101010010007","任县（任城镇）")
c.addCity("p101010010008","南和（和阳镇）")
c.addCity("p101010010009","宁晋（凤凰镇）")
c.addCity("p101010010010","巨鹿（巨鹿镇）")
c.addCity("p101010010011","新河（新河镇）")
c.addCity("p101010010012","广宗（广宗镇）")
c.addCity("p101010010013","平乡（丰州镇）")
c.addCity("p101010010014","威县（洛州镇）")
c.addCity("p101010010015","清河（葛仙庄镇）")
c.addCity("p101010010016","临西（临西镇）")
p1.addProvinces(c);
c = new provinceCN("河北","p101010011","张家口市")
c.addCity("p101010011001","宣化（张家口市宣北区")
c.addCity("p101010011002","张北（张北镇）")
c.addCity("p101010011003","康保（康保镇）")
c.addCity("p101010011004","沽源（平定堡镇）")
c.addCity("p101010011005","尚义（南壕堑镇）")
c.addCity("p101010011006","蔚县（蔚州镇）")
c.addCity("p101010011007","阳原（西城镇）")
c.addCity("p101010011008","怀安（紫沟堡镇）")
c.addCity("p101010011009","万全（孔家庄镇）")
c.addCity("p101010011010","怀来（沙城镇）")
c.addCity("p101010011011","涿鹿（涿鹿镇）")
c.addCity("p101010011012","赤城（赤城镇）")
c.addCity("p101010011013","崇礼（西湾子镇）")
p1.addProvinces(c);
c = new provinceCN("河北","p101010012","承德市")
c.addCity("p101010012001","承德（下板城镇）")
c.addCity("p101010012002","兴隆（兴隆镇）")
c.addCity("p101010012003","平泉（平泉镇）")
c.addCity("p101010012004","滦平（滦平镇）")
c.addCity("p101010012005","隆化（隆化镇）")
c.addCity("p101010012006","丰宁满族自治县（大阁镇）")
c.addCity("p101010012007","宽城满族自治县（围场镇）")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101011","黑龙江");
c = new provinceCN("黑龙江","p101011001","大兴安岭（加格达奇）")
c.addCity("p101011001001","呼玛（呼玛镇）")
c.addCity("p101011001002","塔河（塔河镇）")
c.addCity("p101011001003","漠河（西林吉镇）")
p1.addProvinces(c);
c = new provinceCN("黑龙江","p101011002","黑河市")
c.addCity("p101011002001","北安市")
c.addCity("p101011002002","五大连池市")
c.addCity("p101011002003","嫩江（嫩江镇）")
c.addCity("p101011002004","逊克（奇克镇）")
c.addCity("p101011002005","孙吴（孙吴镇）")
p1.addProvinces(c);

c = new provinceCN("黑龙江","p101011003","齐齐哈尔市")
c.addCity("p101011003001","讷河市")
c.addCity("p101011003002","龙江（龙江镇）")
c.addCity("p101011003003","依安（依安镇）")
c.addCity("p101011003004","泰来（泰来镇）")
c.addCity("p101011003005","甘南（甘南镇）")
c.addCity("p101011003006","富裕（富裕镇）")
c.addCity("p101011003007","克山（克山镇）")
c.addCity("p101011003008","克东（克东镇）")
c.addCity("p101011003009","拜泉（拜泉镇）")
p1.addProvinces(c);

c = new provinceCN("黑龙江","p101011004","大庆市")
c.addCity("p101011004001","肇州（肇州镇）")
c.addCity("p101011004002","肇源（肇源镇）")
c.addCity("p101011004003","林甸（林甸镇）")
c.addCity("p101011004004","杜尔伯特蒙古族自治县（泰康镇）")
p1.addProvinces(c);
c = new provinceCN("黑龙江","p101011005","绥化市")
c.addCity("p101011005001","安达市")
c.addCity("p101011005002","肇东市")
c.addCity("p101011005003","海伦市")
c.addCity("p101011005004","望奎（望奎镇）")
c.addCity("p101011005005","兰西（兰西镇）")
c.addCity("p101011005006","青冈（青冈镇）")
c.addCity("p101011005007","庆安（庆安镇）")
c.addCity("p101011005008","明水（明水镇）")
c.addCity("p101011005009","绥棱（绥棱镇）")
p1.addProvinces(c);

c = new provinceCN("黑龙江","p101011006","伊春市")
c.addCity("p101011006001","铁力市）")
c.addCity("p101011006002","嘉荫（朝阳镇）")
p1.addProvinces(c);

c = new provinceCN("黑龙江","p101011007","哈尔滨市")
c.addCity("p101011007001","双城市")
c.addCity("p101011007002","尚志市")
c.addCity("p101011007003","五常市")
c.addCity("p101011007004","阿城市")
c.addCity("p101011007005","呼兰（呼兰镇）")
c.addCity("p101011007006","依兰（依兰镇）")
c.addCity("p101011007007","方正（方正镇）")
c.addCity("p101011007008","宾县（宾州镇）")
c.addCity("p101011007009","巴彦（巴彦镇）")
c.addCity("p101011007010","木兰（木兰镇）")
c.addCity("p101011007011","通河（通河镇）")
c.addCity("p101011007012","延寿（延寿镇）")
p1.addProvinces(c);
c = new provinceCN("黑龙江","p101011008","鹤岗市")
c.addCity("p101011008001","萝北（凤翔镇）")
c.addCity("p101011008002","绥滨（绥滨镇）")
p1.addProvinces(c);
c = new provinceCN("黑龙江","p101011009","佳木斯市")
c.addCity("p101011009001","同江市")
c.addCity("p101011009002","富锦市")
c.addCity("p101011009003","桦南（桦南镇）")
c.addCity("p101011009004","桦川（悦来镇）")
c.addCity("p101011009005","汤原（汤原镇）")
c.addCity("p101011009006","抚远（抚远镇）")
p1.addProvinces(c);
c = new provinceCN("黑龙江","p101011010","牡丹江市")
c.addCity("p101011010001","穆棱市")
c.addCity("p101011010002","绥芬河市")
c.addCity("p101011010003","海林市")
c.addCity("p101011010004","宁安市")
c.addCity("p101011010005","东宁（东宁镇）")
c.addCity("p101011010006","林口（林口镇）")
p1.addProvinces(c);
c = new provinceCN("黑龙江","p101011011","七台河市")
c.addCity("p101011011001","勃利（勃利镇）")
p1.addProvinces(c);
c = new provinceCN("黑龙江","p101011012","鸡西市")
c.addCity("p101011012001","虎林市")
c.addCity("p101011012002","密山市")
c.addCity("p101011012003","鸡东（鸡东镇）")
p1.addProvinces(c);
c = new provinceCN("黑龙江","p101011013","双鸭山市")
c.addCity("p101011013001","集贤（福利镇）")
c.addCity("p101011013002","友谊（友谊镇）")
c.addCity("p101011013003","宝清（宝清镇）")
c.addCity("p101011013004","饶河（饶河镇）")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101012","河南");
c = new provinceCN("河南","p101012001","安阳市")
c.addCity("p101012001001","林州市")
c.addCity("p101012001002","汤阴（城关镇）")
c.addCity("p101012001003","滑县（道口镇）")
c.addCity("p101012001004","内黄（城关镇）")
p1.addProvinces(c);
c = new provinceCN("河南","p101012002","开封市")
c.addCity("p101012002001","杞县（城关镇）")
c.addCity("p101012002002","通许（城关镇）")
c.addCity("p101012002003","尉氏（城关镇）")
c.addCity("p101012002004","兰考（城关镇）")
p1.addProvinces(c);
c = new provinceCN("河南","p101012003","漯河市")
c.addCity("p101012003001","舞阳（舞泉镇）")
c.addCity("p101012003002","临颖（城关镇）")
c.addCity("p101012003003","郾城（城关镇）")
p1.addProvinces(c);
c = new provinceCN("河南","p101012004","洛阳市")
c.addCity("p101012004001","孟津")
c.addCity("p101012004002","偃师")
c.addCity("p101012004003","新安")
c.addCity("p101012004004","栾川")
c.addCity("p101012004005","嵩县")
c.addCity("p101012004006","汝阳")
c.addCity("p101012004007","宜阳")
c.addCity("p101012004008","洛宁")
c.addCity("p101012004009","伊川")
p1.addProvinces(c);
c = new provinceCN("河南","p101012005","南阳市")
c.addCity("p101012005001","邓州市")
c.addCity("p101012005002","南召（城关镇）")
c.addCity("p101012005003","方城（城关镇）")
c.addCity("p101012005004","西峡（城关镇）")
c.addCity("p101012005005","镇平（城关镇）")
c.addCity("p101012005006","内乡（城关镇）")
c.addCity("p101012005007","浙川（城关镇）")
c.addCity("p101012005008","社旗（社旗镇）")
c.addCity("p101012005009","唐河（城关镇）")
c.addCity("p101012005010","新野（城关镇）")
c.addCity("p101012005011","桐柏（城关镇）")
p1.addProvinces(c);
c = new provinceCN("河南","p101012006","平顶山市")
c.addCity("p101012006001","舞钢市")
c.addCity("p101012006002","汝州市")
c.addCity("p101012006003","宝丰（城关镇）")
c.addCity("p101012006004","叶县（昆阳镇）")
c.addCity("p101012006005","鲁山（鲁阳镇）")
c.addCity("p101012006006","郏县（城关镇）")
p1.addProvinces(c);
c = new provinceCN("河南","p101012007","濮阳市")
c.addCity("p101012007001","清丰（城关镇）")
c.addCity("p101012007002","南乐（城关镇）")
c.addCity("p101012007003","范县（樱桃园）")
c.addCity("p101012007004","台前（城关镇）")
p1.addProvinces(c);
c = new provinceCN("河南","p101012008","三门峡市")
c.addCity("p101012008001","义马")
c.addCity("p101012008002","灵宝")
c.addCity("p101012008003","渑池")
c.addCity("p101012008004","陕县（大营镇）")
c.addCity("","卢氏")
p1.addProvinces(c);
c = new provinceCN("河南","p101012009","新乡市")
c.addCity("p101012009001","卫辉")
c.addCity("p101012009002","辉县")
c.addCity("p101012009003","获嘉（城关镇）")
c.addCity("p101012009004","原阳（城关镇）")
c.addCity("p101012009005","延津（城关镇）")
c.addCity("p101012009006","封丘（城关镇）")
c.addCity("p101012009007","长垣（城关镇）")
p1.addProvinces(c);
c = new provinceCN("河南","p101012010","信阳市")
c.addCity("p101012010001","息县（城关镇）")
c.addCity("p101012010002","淮滨（城关镇）")
c.addCity("p101012010003","潢川（城关镇）")
c.addCity("p101012010004","光山（城关镇）")
c.addCity("p101012010005","固始（城关镇）")
c.addCity("p101012010006","商城（城关镇）")
c.addCity("p101012010007","罗山（城关镇）")
c.addCity("p101012010008","新县（新集镇）")
p1.addProvinces(c);
c = new provinceCN("河南","p101012011","许昌市")
c.addCity("p101012011001","禹州市")
c.addCity("p101012011002","长葛市")
c.addCity("p101012011003","鄢陵（安陵镇）")
c.addCity("p101012011004","襄城（城关镇）")
p1.addProvinces(c);
c = new provinceCN("河南","p101012012","郑州市")
c.addCity("p101012012001","新郑")
c.addCity("p101012012002","登封")
c.addCity("p101012012003","巩义（孝义镇）")
c.addCity("p101012012004","新密")
c.addCity("p101012012005","荥阳")
c.addCity("p101012012006","中牟")
p1.addProvinces(c);
c = new provinceCN("河南","p101012013","焦作市")
c.addCity("p101012013001","孟州")
c.addCity("p101012013002","沁阳")
c.addCity("p101012013003","修武")
c.addCity("p101012013004","博爱（清化镇）")
c.addCity("p101012013005","武陟（木城镇）")
c.addCity("p101012013006","温县（温泉镇）")
p1.addProvinces(c);
c = new provinceCN("河南","p101012014","鹤壁市")
c.addCity("p101012014001","浚县（城关镇）")
c.addCity("p101012014002","淇县（朝歌镇）")
p1.addProvinces(c);
c = new provinceCN("河南","p101012015","商丘市")
c.addCity("p101012015001","永城市")
c.addCity("p101012015002","虞城（城关镇）")
c.addCity("p101012015003","民权（城关镇）")
c.addCity("p101012015004","宁陵（城关镇）")
c.addCity("p101012015005","睢县（城关镇）")
c.addCity("p101012015006","夏邑（城关镇）")
c.addCity("p101012015007","柘城（城关镇）")
p1.addProvinces(c);
c = new provinceCN("河南","p101012016","周口市")
c.addCity("p101012016001","项城市")
c.addCity("p101012016002","扶沟（城关镇）")
c.addCity("p101012016003","西华（城关镇）")
c.addCity("p101012016004","商水（城关镇）")
c.addCity("p101012016005","太康（城关镇）")
c.addCity("p101012016006","鹿邑（城关镇）")
c.addCity("p101012016007","郸城（城关镇）")
c.addCity("p101012016008","淮阳（城关镇）")
c.addCity("p101012016009","沈丘（城关镇）")
p1.addProvinces(c);
c = new provinceCN("河南","p101012017","驻马店市")
c.addCity("p101012017001","确山（盘龙镇）")
c.addCity("p101012017002","泌阳（泌水镇）")
c.addCity("p101012017003","遂阳（灌阳镇）")
c.addCity("p101012017004","四平（柏城镇）")
c.addCity("p101012017005","上蔡（蔡都镇）")
c.addCity("p101012017006","汝南（汝宁镇）")
c.addCity("p101012017007","平舆（古槐镇）")
c.addCity("p101012017008","新蔡（古吕镇）")
c.addCity("p101012017009","正阳（真阳镇）")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101013","香港");
c = new provinceCN("香港","p101013001001","香港")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101014","湖北");
c = new provinceCN("湖北","p101014083","随州市")
c.addCity("p101014038001","广水市")
c.addCity("p101014038002","曾都区")
p1.addProvinces(c);
c = new provinceCN("湖北","p101014001","十堰市")
c.addCity("p101014001001","丹江口市")
c.addCity("p101014001002","郧县（城关镇）")
c.addCity("p101014001003","竹山（城关镇）")
c.addCity("p101014001004","房县（城关镇）")
c.addCity("p101014001005","郧西（城关镇）")
c.addCity("p101014001006","竹溪（城关镇）")
p1.addProvinces(c);
c = new provinceCN("湖北","p101014002","武汉市")
p1.addProvinces(c);
c = new provinceCN("湖北","p101014003","宜昌市")
c.addCity("p101014003001","宜都市")
c.addCity("p101014003002","当阳市（城关镇）")
c.addCity("p101014003003","兴山（古夫镇）")
c.addCity("p101014003004","枝江市）")
c.addCity("p101014003005","远安（鸣凤镇）")
c.addCity("p101014003006","姊归（茅坪镇）")
c.addCity("p101014003007","长阳土家族自治县（龙舟坪镇）")
c.addCity("p101014003008","五峰土家族自治县（五峰镇）")
p1.addProvinces(c);
c = new provinceCN("湖北","p101014005","咸宁市")
c.addCity("p101014005001","赤壁市")
c.addCity("p101014005002","嘉鱼（鱼岳镇）")
c.addCity("p101014005003","通城（隽水镇）")
c.addCity("p101014005004","崇阳（天城镇）")
c.addCity("p101014005005","通山（通羊镇）")
p1.addProvinces(c);
c = new provinceCN("湖北","p101014006","黄石市")
c.addCity("p101014006001","大治市")
c.addCity("p101014006002","阳新（兴国镇）")
p1.addProvinces(c);

c = new provinceCN("湖北","p101014007","黄冈市")
c.addCity("p101014007001","麻城市")
c.addCity("p101014007002","武穴市")
c.addCity("p101014007003","红安（城关镇）")
c.addCity("p101014007004","罗田（凤山镇）")
c.addCity("p101014007005","英山（温泉镇）")
c.addCity("p101014007006","浠水（清泉镇）")
c.addCity("p101014007007","蕲春（漕河镇）")
c.addCity("p101014007008","黄梅（黄梅镇）")
c.addCity("p101014007009","团风（团风镇）")
p1.addProvinces(c);

c = new provinceCN("湖北","p101014011","恩施土家族苗族自治州（恩施市）")
c.addCity("p101014011001","利川市")
c.addCity("p101014011002","建始（业州镇）")
c.addCity("p101014011003","巴东（信陵镇）")
c.addCity("p101014011004","宣恩（珠山镇）")
c.addCity("p101014011005","咸丰（高乐山镇）")
c.addCity("p101014011006","来凤（翔凤镇）")
c.addCity("p101014011007","鹤峰（容美镇）")
p1.addProvinces(c);

c = new provinceCN("湖北","p101014013","襄樊市")
c.addCity("p101014013001","老河口市")
c.addCity("p101014013002","枣阳市")
c.addCity("p101014013003","宜城市")
c.addCity("p101014013004","南漳（城关镇）")
c.addCity("p101014013005","谷城（城关镇）")
c.addCity("p101014013006","保康（城关镇）")
c.addCity("p101014013007","襄阳（张湾镇）")
p1.addProvinces(c);

c = new provinceCN("湖北","p101014014","荆州市")
c.addCity("p101014014001","石首市")
c.addCity("p101014014002","洪湖市")
c.addCity("p101014014003","松滋市")
c.addCity("p101014014004","江陵（郝穴镇）")
c.addCity("p101014014005","公安（斗湖堤镇）")
c.addCity("p101014014006","监利（容城镇）")
p1.addProvinces(c);
c = new provinceCN("湖北","p101014015","荆门市")
c.addCity("p101014015001","钟祥市")
c.addCity("p101014015002","沙洋（沙洋镇）")
c.addCity("p101014015003","京山（新市镇）")
p1.addProvinces(c);
c = new provinceCN("湖北","p101014016","孝感市")
c.addCity("p101014016001","应城市")
c.addCity("p101014016002","安陆市")
c.addCity("p101014016003","汉川市")
c.addCity("p101014016004","孝昌（花园镇）")
c.addCity("p101014016005","大悟（城关镇）")
c.addCity("p101014016006","云梦（城关镇）")
c.addCity("p101014016007","远安（鸣凤镇）")
p1.addProvinces(c);
c = new provinceCN("湖北","p101014017","鄂州市")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101015","湖南");
c = new provinceCN("湖南","p101015001","长沙市/县")
c.addCity("p101015001001","浏阳（淮川镇）")
c.addCity("p101015001002","宁乡（玉潭镇）")
c.addCity("p101015001003","望城（高塘岭镇）")
c.addCity("p101015001004","长沙县（星沙镇）")
p1.addProvinces(c);
c = new provinceCN("湖南","p101015002","湘潭市/县")
c.addCity("p101015002001","湘乡")
c.addCity("p101015002002","韶山（清溪镇）")
p1.addProvinces(c);
c = new provinceCN("湖南","p101015003","株洲市")
c.addCity("p101015003001","醴陵")
c.addCity("p101015003002","攸县（城关镇）")
c.addCity("p101015003003","炎陵（霞阳镇）")
c.addCity("p101015003004","株洲县（渌口镇）")
p1.addProvinces(c);
c = new provinceCN("湖南","p101015004","常德市")
c.addCity("p101015004001","安乡（城关镇）")
c.addCity("p101015004002","津市")
c.addCity("p101015004003","澧县（澧阳镇）")
c.addCity("p101015004004","临澧（城关镇）")
c.addCity("p101015004005","桃源（漳江镇）")
c.addCity("p101015004006","石门（楚江镇）")
p1.addProvinces(c);
c = new provinceCN("湖南","p101015005","衡阳市")
c.addCity("p101015005001","常宁")
c.addCity("p101015005002","耒阳")
c.addCity("p101015005003","衡南（衡南镇）")
c.addCity("p101015005004","衡山（开云镇）")
c.addCity("p101015005005","祁东（洪桥镇）")
p1.addProvinces(c);
c = new provinceCN("湖南","p101015006","岳阳市")
c.addCity("p101015006001","临湘")
c.addCity("p101015006002","汩罗")
c.addCity("p101015006003","华容（城关镇）")
c.addCity("p101015006004","湘阴（文星镇）")
c.addCity("p101015006005","平江（汉昌镇）")
c.addCity("p101015006006","岳阳县（荣家湾镇）")
p1.addProvinces(c);
c = new provinceCN("湖南","p101015007","邵阳市/县")
c.addCity("p101015007001","邵东（两市镇）")
c.addCity("p101015007002","武冈")
c.addCity("p101015007003","新邵（酿溪镇）")
c.addCity("p101015007004","隆回（桃洪镇）")
c.addCity("p101015007005","洞口（洞口镇）")
c.addCity("p101015007006","绥宁（长铺镇）")
c.addCity("p101015007007","新宁（金石镇）")
c.addCity("p101015007008","城步苗族自治县（儒林镇）")
p1.addProvinces(c);
c = new provinceCN("湖南","p101015008","益阳市")
c.addCity("p101015008001","沅江")
c.addCity("p101015008002","南县（南洲镇）")
c.addCity("p101015008003","桃江（桃花江镇）")
c.addCity("p101015008004","安化（东坪镇）")
p1.addProvinces(c);
c = new provinceCN("湖南","p101015009","娄底市")
c.addCity("p101015009001","冷水江")
c.addCity("p101015009002","涟源")
c.addCity("p101015009003","双峰（永丰镇）")
c.addCity("p101015009004","新化（上梅镇）")
p1.addProvinces(c);
c = new provinceCN("湖南","p101015010","怀化市")
c.addCity("p101015010001","洪江")
c.addCity("p101015010002","沅陵（沅陵镇）")
c.addCity("p101015010003","辰溪（辰阳镇）")
c.addCity("p101015010004","溆浦（卢峰镇）")
c.addCity("p101015010005","中方（中方镇）")
c.addCity("p101015010006","会同（林城镇）")
c.addCity("p101015010007","麻阳苗族自治县（高村镇）")
c.addCity("p101015010008","新晃侗族自治县（新晃镇）")
c.addCity("p101015010009","芷江侗族自治县（芷江镇）")
c.addCity("p101015010010","靖州苗族侗族自治县（渠阳镇）")
c.addCity("p101015010011","通道侗族自治县（双江镇）")
p1.addProvinces(c);
c = new provinceCN("湖南","p101015011","郴州市")
c.addCity("p101015011001","资兴")
c.addCity("p101015011002","桂阳")
c.addCity("p101015011003","永兴")
c.addCity("p101015011004","宜章")
c.addCity("p101015011005","临武")
c.addCity("p101015011006","嘉禾")
c.addCity("p101015011007","桂东")
c.addCity("p101015011008","安仁")
c.addCity("p101015011009","汝城")
p1.addProvinces(c);
c = new provinceCN("湖南","p101015013","湘西土家族苗族自治州")
c.addCity("p101015013001","吉首市")
c.addCity("p101015013002","泸溪（武溪镇）")
c.addCity("p101015013003","凤凰（陀江镇）")
c.addCity("p101015013004","花垣（花垣镇）")
c.addCity("p101015013005","保靖（迁陵镇）")
c.addCity("p101015013006","古丈（古阳镇）")
c.addCity("p101015013007","永顺（灵溪镇）")
c.addCity("p101015013008","龙山（民安镇）")
p1.addProvinces(c);
c = new provinceCN("湖南","p101015014","张家界市")
c.addCity("p101015014001","桑植（澧源镇）")
c.addCity("p101015014002","慈利（零阳镇）")
p1.addProvinces(c);
c = new provinceCN("湖南","p101015016","永州市")
c.addCity("p101015016001","东安（白牙市镇）")
c.addCity("p101015016002","道县（道江镇）")
c.addCity("p101015016003","江永（潇浦镇）")
c.addCity("p101015016004","宁远（舜陵镇）")
c.addCity("p101015016005","新田（龙泉镇）")
c.addCity("p101015016006","蓝山（塔峰镇）")
c.addCity("p101015016007","双牌（泷泊镇）")
c.addCity("p101015016008","祁阳（浯溪镇）")
c.addCity("p101015016009","江华瑶族自治县（沱江镇）")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	
var p1 = new provincesList("CN","p101016","江苏");
c = new provinceCN("江苏","p101016002","常州市")
c.addCity("p101016002001","武进市")
c.addCity("p101016002002","金坛市")
c.addCity("p101016002003","溧阳市")
p1.addProvinces(c);
c = new provinceCN("江苏","p101016003","淮安市")
c.addCity("p101016003001","楚州（淮城镇）")
c.addCity("p101016003002","淮阴（王营镇）")
c.addCity("p101016003003","金湖（黎城镇）")
c.addCity("p101016003004","盱眙（盱城镇）")
c.addCity("p101016003005","洪泽（高良涧镇）")
c.addCity("p101016003006","涟水（涟城镇）")
p1.addProvinces(c);
c = new provinceCN("江苏","p101016005","连云港市")
c.addCity("p101016005001","赣榆（青口镇）")
c.addCity("p101016005002","灌云（伊山镇）")
c.addCity("p101016005003","东海（牛山镇）")
c.addCity("p101016005004","灌南（新安镇）")
p1.addProvinces(c);
c = new provinceCN("江苏","p101016006","南京市")
c.addCity("p101016006001","江宁（东山镇）")
c.addCity("p101016006002","江浦（珠江镇）")
c.addCity("p101016006003","六合（六城镇）")
c.addCity("p101016006004","溧水（在城镇）")
c.addCity("p101016006005","高淳（淳溪镇）")
p1.addProvinces(c);
c = new provinceCN("江苏","p101016007","南通市")
c.addCity("p101016007001","海门市")
c.addCity("p101016007002","启东市")
c.addCity("p101016007003","通州市")
c.addCity("p101016007004","如皋市")
c.addCity("p101016007005","如东（掘港镇）")
c.addCity("p101016007006","海安（海安镇）")
p1.addProvinces(c);
c = new provinceCN("江苏","p101016009","苏州市")
c.addCity("p101016009008","沧浪区")
c.addCity("p101016009009","虎丘区")
c.addCity("p101016009010","金阊区")
c.addCity("p101016009011","平江区")
c.addCity("p101016009001","吴中区")
c.addCity("p101016009002","相城区")
c.addCity("p101016009003","吴江市")
c.addCity("p101016009004","昆山市")
c.addCity("p101016009005","太仓市")
c.addCity("p101016009006","常熟市")
c.addCity("p101016009007","张家港市")
p1.addProvinces(c);
c = new provinceCN("江苏","p101016011","无锡市")
c.addCity("p101016011001","滨湖（河埒镇）")
c.addCity("p101016011002","惠山（洛社镇）")
c.addCity("p101016011003","锡山（东亭镇）")
c.addCity("p101016011004","江阴市")
c.addCity("p101016011005","宜兴市")
p1.addProvinces(c);
c = new provinceCN("江苏","p101016012","徐州市")
c.addCity("p101016012001","邳州市")
c.addCity("p101016012002","新沂市")
c.addCity("p101016012003","铜山（徐州市泉山区）")
c.addCity("p101016012004","睢宁（睢城镇）")
c.addCity("p101016012005","沛县（沛城镇）")
c.addCity("p101016012006","丰县（凤城镇）")
p1.addProvinces(c);
c = new provinceCN("江苏","p101016013","盐城市")
c.addCity("p101016013001","东台市")
c.addCity("p101016013002","大丰市")
c.addCity("p101016013003","盐都（潘黄镇）")
c.addCity("p101016013004","射阳（合德镇）")
c.addCity("p101016013005","阜宁（阜城镇）")
c.addCity("p101016013006","滨海（东坎镇）")
c.addCity("p101016013007","响水（响水镇）")
c.addCity("p101016013008","建湖（建湖镇）")
p1.addProvinces(c);
c = new provinceCN("江苏","p101016014","扬州市")
c.addCity("p101016014001","邗江（蒋王镇）")
c.addCity("p101016014002","仪征市")
c.addCity("p101016014003","江都市")
c.addCity("p101016014004","高邮市")
c.addCity("p101016014005","宝应（安宜镇）")
p1.addProvinces(c);
c = new provinceCN("江苏","p101016016","镇江市")
c.addCity("p101016016001","扬中市")
c.addCity("p101016016002","丹阳市")
c.addCity("p101016016003","句容市")
c.addCity("p101016016004","丹徒（镇江市润州区）")
p1.addProvinces(c);
c = new provinceCN("江苏","p101016017","泰州市")
c.addCity("p101016017001","靖江市")
c.addCity("p101016017002","姜堰市")
c.addCity("p101016017003","兴化市")
c.addCity("p101016017004","泰兴")
p1.addProvinces(c);
c = new provinceCN("江苏","p101016018","宿迁市")
c.addCity("p101016018001","宿豫（顺河镇）")
c.addCity("p101016018002","沭阳（沭城镇）")
c.addCity("p101016018003","泗阳（众兴镇）")
c.addCity("p101016018004","泗洪（青阳镇）")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101017","江西");
c = new provinceCN("江西","p101017001","南昌市")
c.addCity("p101017001001","南昌（莲塘镇）")
c.addCity("p101017001002","新建（长堎镇）")
c.addCity("p101017001003","安义（龙津镇）")
c.addCity("p101017001004","进贤（民和镇）")
p1.addProvinces(c);
c = new provinceCN("江西","p101017002","九江市")
c.addCity("p101017002001","九江（沙河街镇）")
c.addCity("p101017002002","武宁（新宁镇）")
c.addCity("p101017002003","修水（义宁镇）")
c.addCity("p101017002004","永修（涂埠镇）")
c.addCity("p101017002005","德安（蒲亭镇）")
c.addCity("p101017002006","星子（南康镇）")
c.addCity("p101017002007","都昌（都昌镇）")
c.addCity("p101017002008","湖口（双钟镇）")
c.addCity("p101017002009","彭泽（龙城镇）")
c.addCity("p101017002010","瑞昌")
p1.addProvinces(c);
c = new provinceCN("江西","p101017003","新余市")
c.addCity("p101017003001","分宜（分宜镇）")
p1.addProvinces(c);
c = new provinceCN("江西","p101017004","赣州市")
c.addCity("p101017004001","瑞金")
c.addCity("p101017004002","南康")
c.addCity("p101017004003","赣县（梅林镇）")
c.addCity("p101017004004","信丰（嘉定镇）")
c.addCity("p101017004005","大余（南安镇）")
c.addCity("p101017004006","上犹（东山镇）")
c.addCity("p101017004007","安远（欣山镇）")
c.addCity("p101017004008","崇义（横水镇）")
c.addCity("p101017004009","定南（历市镇）")
c.addCity("p101017004010","龙南（龙南镇）")
c.addCity("p101017004011","全南（城厢镇）")
c.addCity("p101017004012","宁都（梅江镇）")
c.addCity("p101017004013","兴国（潋江镇）")
c.addCity("p101017004014","于都（贡江镇）")
c.addCity("p101017004015","会昌（湘江镇）")
c.addCity("p101017004016","石城（琴江镇）")
c.addCity("p101017004017","寻乌（长宁镇）")
p1.addProvinces(c);
c = new provinceCN("江西","p101017005","景德镇")
c.addCity("p101017005001","乐平")
c.addCity("p101017005002","浮梁（浮梁镇）")
p1.addProvinces(c);
c = new provinceCN("江西","p101017006","上饶市")
c.addCity("p101017006001","德兴")
c.addCity("p101017006002","广丰（永丰镇）")
c.addCity("p101017006003","玉山（冰溪镇）")
c.addCity("p101017006004","铅山（河口镇）")
c.addCity("p101017006005","横峰（岑阳镇）")
c.addCity("p101017006006","弋阳（弋江镇）")
c.addCity("p101017006007","余干（余干镇）")
c.addCity("p101017006008","波阳（鄱阳镇）")
c.addCity("p101017006009","万年（陈营镇）")
c.addCity("p101017006010","婺源（紫阳镇）")
p1.addProvinces(c);
c = new provinceCN("江西","p101017007","抚州市")
c.addCity("p101017007001","南城（建昌镇）")
c.addCity("p101017007002","南丰（琴城镇）")
c.addCity("p101017007003","黎川（日峰镇）")
c.addCity("p101017007004","崇仁（巴山镇）")
c.addCity("p101017007005","乐安（敖溪镇）")
c.addCity("p101017007006","宜黄（凤冈镇）")
c.addCity("p101017007007","资溪（鹤城镇）")
c.addCity("p101017007008","金溪（秀谷镇）")
c.addCity("p101017007009","东乡（孝岗镇）")
c.addCity("p101017007010","广昌（旰江镇）")
p1.addProvinces(c);
c = new provinceCN("江西","p101017008","萍乡市")
c.addCity("p101017008001","上粟（上粟镇）")
c.addCity("p101017008002","莲花（琴亭镇）")
c.addCity("p101017008003","芦溪（芦溪镇）")
p1.addProvinces(c);
c = new provinceCN("江西","p101017009","宜春市")
c.addCity("p101017009001","丰城")
c.addCity("p101017009002","樟树")
c.addCity("p101017009003","高安")
c.addCity("p101017009004","奉新（冯川镇）")
c.addCity("p101017009005","万载（康乐镇）")
c.addCity("p101017009006","宜丰（新昌镇）")
c.addCity("p101017009007","上高（敖阳镇）")
c.addCity("p101017009008","铜鼓（永宁镇）")
c.addCity("p101017009009","靖安（双溪镇）")
p1.addProvinces(c);
c = new provinceCN("江西","p101017010","吉安市")
c.addCity("p101017010001","井冈山")
c.addCity("p101017010002","吉水（文峰镇）")
c.addCity("p101017010003","峡江（水边）")
c.addCity("p101017010004","新干（金川镇）")
c.addCity("p101017010005","永丰（恩江）")
c.addCity("p101017010006","泰和（澄江镇）")
c.addCity("p101017010007","遂川（泉江镇）")
c.addCity("p101017010008","万安（芙蓉镇）")
c.addCity("p101017010009","安福（平都镇）")
c.addCity("p101017010010","永新（禾川镇）")
p1.addProvinces(c);
c = new provinceCN("江西","p101017011","鹰潭市")
c.addCity("p101017011001","余江（邓埠镇）")
c.addCity("p101017011002","贵溪")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	
var p1 = new provincesList("CN","","江西");
c = new provinceCN("江西","","南昌市")
c.addCity("","南昌（莲塘镇）")
c.addCity("","新建（长堎镇）")
c.addCity("","安义（龙津镇）")
c.addCity("","进贤（民和镇）")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101018","吉林");
c = new provinceCN("吉林","p101018001","长春市")
c.addCity("p101018001001","德惠市")
c.addCity("p101018001002","九台市")
c.addCity("p101018001003","榆树市")
c.addCity("p101018001004","农安（农安镇）")
p1.addProvinces(c);
c = new provinceCN("吉林","p101018002","吉林市")
c.addCity("p101018002001","磐石市")
c.addCity("p101018002002","蛟河市")
c.addCity("p101018002003","桦甸市")
c.addCity("p101018002004","舒兰市")
c.addCity("p101018002005","永吉（口前镇）")
p1.addProvinces(c);
c = new provinceCN("吉林","p101018003","四平市")
c.addCity("p101018003001","双辽市")
c.addCity("p101018003002","公主岭市")
c.addCity("p101018003003","黎树（黎树镇）")
c.addCity("p101018003004","伊通满族自治县（伊通族）")
p1.addProvinces(c);
c = new provinceCN("吉林","p101018004","延边朝鲜族自治州（延吉市）")
c.addCity("p101018004001","延吉市")
c.addCity("p101018004002","图们市")
c.addCity("p101018004003","敦化市")
c.addCity("p101018004004","珲春市")
c.addCity("p101018004005","龙井市")
c.addCity("p101018004006","和龙市")
c.addCity("p101018004007","汪清（汪清镇）")
c.addCity("p101018004008","安图（明月镇）")
p1.addProvinces(c);
c = new provinceCN("吉林","p101018005","白城市")
c.addCity("p101018005001","大安市")
c.addCity("p101018005002","洮南市")
c.addCity("p101018005003","镇贲（镇贲镇）")
c.addCity("p101018005004","通榆（开通镇）")
p1.addProvinces(c);
c = new provinceCN("吉林","p101018006","白山市")
c.addCity("p101018006001","临江市")
c.addCity("p101018006002","江源（孙家堡子镇）")
c.addCity("p101018006003","抚松（抚松镇）")
c.addCity("p101018006004","靖宇（靖宇镇）")
c.addCity("p101018006005","长白朝鲜族自治县（长白镇）")
p1.addProvinces(c);
c = new provinceCN("吉林","p101018007","通化市")
c.addCity("p101018007001","梅河口市")
c.addCity("p101018007002","集安市")
c.addCity("p101018007003","通化（快大茂镇）")
c.addCity("p101018007004","辉南（朝阳镇）")
c.addCity("p101018007005","柳河（柳河镇）")
p1.addProvinces(c);
c = new provinceCN("吉林","p101018008","松原市")
c.addCity("p101018008001","扶余（三贫河镇）")
c.addCity("p101018008002","长岭（长岭镇）")
c.addCity("p101018008003","乾安（乾安镇）")
c.addCity("p101018008004","前郭尔罗斯蒙古族自治县（前郭镇）")
p1.addProvinces(c);
c = new provinceCN("吉林","p101018009","辽源市")
c.addCity("p101018009001","东丰（东丰镇）")
c.addCity("p101018009002","东辽（白泉镇）")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101019","辽宁");
c = new provinceCN("辽宁","p101019001","鞍山市")
c.addCity("p101019001001","海城")
c.addCity("p101019001002","台安（台安镇）")
c.addCity("p101019001003","岫岩满族自治县）")
p1.addProvinces(c);
c = new provinceCN("辽宁","p101019002","本溪市/县")
c.addCity("p101019002001","桓仁满族自治县")
p1.addProvinces(c);
c = new provinceCN("辽宁","p101019003","大连市")
c.addCity("p101019003001","瓦房店")
c.addCity("p101019003002","普兰店")
c.addCity("p101019003003","庄河（庄河镇）")
c.addCity("p101019003004","长海（大长山岛镇）")
p1.addProvinces(c);
c = new provinceCN("辽宁","p101019004","丹东市")
c.addCity("p101019004001","凤城")
c.addCity("p101019004002","东港")
c.addCity("p101019004003","宽甸满族自治县")
p1.addProvinces(c);
c = new provinceCN("辽宁","p101019005","抚顺市/县")
c.addCity("p101019005001","新宾满族自治县")
c.addCity("p101019005002","清原满族自治县")
p1.addProvinces(c);
c = new provinceCN("辽宁","p101019006","阜新市")
c.addCity("p101019006001","彰武（彰武镇）")
c.addCity("p101019006002","阜新蒙古族自治县")
p1.addProvinces(c);
c = new provinceCN("辽宁","p101019007","葫芦岛市")
c.addCity("p101019007001","兴城")
c.addCity("p101019007002","绥中（绥中镇）")
c.addCity("p101019007003","建昌（建昌镇）")
p1.addProvinces(c);
c = new provinceCN("辽宁","p101019008","锦州市")
c.addCity("p101019008001","北宁")
c.addCity("p101019008002","黑山（黑山镇）")
c.addCity("p101019008003","义县（义州镇）")
c.addCity("p101019008004","凌海")
p1.addProvinces(c);
c = new provinceCN("辽宁","p101019009","盘锦市")
c.addCity("p101019009001","大洼（大洼镇）")
c.addCity("p101019009002","盘山（盘锦市双台子区）")
p1.addProvinces(c);
c = new provinceCN("辽宁","p101019010","沈阳市")
c.addCity("p101019010001","辽中（辽中镇）")
c.addCity("p101019010002","康平（康平镇）")
c.addCity("p101019010003","法库（法库镇）")
c.addCity("p101019010004","新民（新民镇）")
p1.addProvinces(c);
c = new provinceCN("辽宁","p101019011","营口市")
c.addCity("p101019011001","大石桥")
c.addCity("p101019011002","盖州")
p1.addProvinces(c);
c = new provinceCN("辽宁","p101019012","辽阳市/县")
c.addCity("p101019012001","灯塔")
p1.addProvinces(c);
c = new provinceCN("辽宁","p101019013","铁岭市/县")
c.addCity("p101019013001","铁法")
c.addCity("p101019013002","开原")
c.addCity("p101019013003","西丰（西丰镇）")
c.addCity("p101019013004","昌图（昌图镇）")
p1.addProvinces(c);
c = new provinceCN("辽宁","p101019014","朝阳市")
c.addCity("p101019014001","北票")
c.addCity("p101019014002","凌源")
c.addCity("p101019014003","建平（叶柏寿镇）")
c.addCity("p101019014004","喀喇沁左翼蒙古族自治县")
p1.addProvinces(c);

provincesListArr = provincesListArr.concat(p1);	
var p1 = new provincesList("CN","p101020","澳门");
c = new provinceCN("澳门","p101020001001","澳门")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101021","内蒙古");
c = new provinceCN("内蒙古","p101021001","呼和浩特市")
c.addCity("p101021001001","托克托（城关镇）")
c.addCity("p101021001002","武川（可可以力更镇）") 
c.addCity("p101021001003","和林格尔（城关镇）")
c.addCity("p101021001004","清水河（城关镇）")
c.addCity("p101021001005","土默特左旗（察素齐镇）")
p1.addProvinces(c);
c = new provinceCN("内蒙古","p101021003","锡林郭勒盟")
c.addCity("p101021003001","锡林浩特")
c.addCity("p101021003002","二连浩特市")
c.addCity("p101021003003","多伦县（城关镇）")
c.addCity("p101021003004","阿巴嘎旗（新浩特镇）")
c.addCity("p101021003005","苏尼特左旗（满都拉图镇）")
c.addCity("p101021003006","苏尼特右旗（赛汉塔拉镇）")
c.addCity("p101021003007","东乌珠穆沁旗（乌里牙斯太镇）")
c.addCity("p101021003008","西乌珠穆沁旗（巴彦乌拉镇）")
c.addCity("p101021003009","太仆寺旗（宝昌镇）")
c.addCity("p101021003010","镶黄旗（新宝力格镇）")
c.addCity("p101021003011","正镶白旗（查汗淖尔镇）")
c.addCity("p101021003012","正蓝旗（敦达浩特镇）")
p1.addProvinces(c);
c = new provinceCN("内蒙古","p101021005","呼伦贝尔盟")
c.addCity("p101021005001","海拉尔")
c.addCity("p101021005002","满洲里")
c.addCity("p101021005003","扎兰屯")
c.addCity("p101021005004","牙克石")
c.addCity("p101021005005","根河")
c.addCity("p101021005006","额尔古纳")
c.addCity("p101021005007","阿荣旗（那吉镇）")
c.addCity("p101021005008","新巴尔虎右旗（阿拉坦额莫勒镇")
c.addCity("p101021005009","新巴尔虎左旗（阿穆古郎镇）")
c.addCity("p101021005010","鄂伦春自治旗（阿里河镇）")
c.addCity("p101021005011","鄂温克族自治旗（巴彦托海镇）")
c.addCity("p101021005012","莫力达瓦达斡尔族自治旗（尼尔基镇）")
p1.addProvinces(c);
c = new provinceCN("内蒙古","p101021006","兴安盟（乌兰浩特市）")
c.addCity("p101021006001","乌兰浩特")
c.addCity("p101021006002","阿尔山")
c.addCity("p101021006003","突泉县")
c.addCity("p101021006004","科尔沁右翼前旗")
c.addCity("p101021006005","科尔沁右翼中旗")
c.addCity("p101021006006","扎赉特旗")
p1.addProvinces(c);
c = new provinceCN("内蒙古","p101021007","通辽市")
c.addCity("p101021007001","霍林郭勒")
c.addCity("p101021007002","开鲁县")
c.addCity("p101021007003","库伦旗")
c.addCity("p101021007004","奈曼旗")
c.addCity("p101021007005","扎鲁特旗")
c.addCity("p101021007006","科尔沁左翼后旗")
c.addCity("p101021007007","科尔沁左翼中旗")
p1.addProvinces(c);
c = new provinceCN("内蒙古","p101021008","赤峰")
c.addCity("p101021008001","宁城县")
c.addCity("p101021008002","林西县")
c.addCity("p101021008003","阿鲁科尔沁旗")
c.addCity("p101021008004","巴林左旗")
c.addCity("p101021008005","巴林右旗")
c.addCity("p101021008006","克什克腾旗")
c.addCity("p101021008007","翁牛特旗")
c.addCity("p101021008008","喀喇沁旗")
c.addCity("p101021008009","敖汉旗")
p1.addProvinces(c);
c = new provinceCN("内蒙古","p101021009","乌兰察布盟")
c.addCity("p101021009001","集宁市")
c.addCity("p101021009002","丰镇市")
c.addCity("p101021009003","卓资县")
c.addCity("p101021009004","兴和县")
c.addCity("p101021009005","化德县")
c.addCity("p101021009006","商都县")
c.addCity("p101021009007","凉城县")
c.addCity("p101021009008","察哈尔右翼后旗")
c.addCity("p101021009009","察哈尔右翼前旗")
c.addCity("p101021009010","察哈尔右翼中旗")
c.addCity("p101021009011","四子王旗")
p1.addProvinces(c);
c = new provinceCN("内蒙古","p101021010","包头市")
c.addCity("p101021010001","固阳县")
c.addCity("p101021010002","土默特右旗")
c.addCity("p101021010003","达尔罕茂明安联合旗")
p1.addProvinces(c);
c = new provinceCN("内蒙古","p101021011","鄂尔多斯市")
c.addCity("p101021011001","东胜")
c.addCity("p101021011002","达拉特旗（树林召镇）")
c.addCity("p101021011003","准格尔旗（薛家湾镇）")
c.addCity("p101021011004","鄂托克前旗（歼勒召其镇）")
c.addCity("p101021011005","杭锦旗（锡尼镇）")
c.addCity("p101021011006","乌审旗（达布察克镇）")
c.addCity("p101021011007","伊金霍洛旗（阿勒腾席热镇）")
c.addCity("p101021011008","鄂托克旗（乌兰镇）")
p1.addProvinces(c);
c = new provinceCN("内蒙古","p101021012","巴彦淖尔盟")
c.addCity("p101021012001","临河市")
c.addCity("p101021012002","五原县")
c.addCity("p101021012003","磴口县")
c.addCity("p101021012004","乌拉特后旗")
c.addCity("p101021012005","乌拉特前旗")
c.addCity("p101021012006","乌拉特中旗")
c.addCity("p101021012007","杭锦后旗")
p1.addProvinces(c);
c = new provinceCN("内蒙古","p101021013","乌海")
p1.addProvinces(c);
c = new provinceCN("内蒙古","p101021014","阿拉善盟")
c.addCity("p101021014001","阿拉善左旗")
c.addCity("p101021014002","阿拉善右旗")
c.addCity("p101021014003","额济纳旗")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101022","宁夏");
c = new provinceCN("宁夏","p101022001","银川市")
c.addCity("p101022001001","永宁（杨和镇）")
c.addCity("p101022001002"," 贺兰（习岗镇）")
p1.addProvinces(c);

c = new provinceCN("宁夏","p101022002","石嘴山市")
c.addCity("p101022002001","平罗（城关镇）")
c.addCity("p101022002002"," 陶乐（马太沟镇）")
c.addCity("p101022002003","惠农（马家湾镇）")
p1.addProvinces(c);

c = new provinceCN("宁夏","p101022003","吴忠市")
c.addCity("p101022003001","灵武市")
c.addCity("p101022003002","青铜峡市")
c.addCity("p101022003003","中卫（城关镇）")
c.addCity("p101022003004","中宁（城关镇）")
c.addCity("p101022003005"," 盐池（城关镇）")
c.addCity("p101022003006","同心（同心镇）")
p1.addProvinces(c);
c = new provinceCN("宁夏","p101022004","固原市")
c.addCity("p101022004001","海原（海城镇）")
c.addCity("p101022004002","西吉（城关镇）")
c.addCity("p101022004003","隆德（城关镇）")
c.addCity("p101022004004","泾源（香水镇）")
c.addCity("p101022004005"," 彭阳（白阳镇")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	
var p1 = new provincesList("CN","p101023","世界各国/地区");
c = new provinceCN("世界各国/地区","p101023001","阿尔巴尼亚")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023002","阿拉伯联合酋长国")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023003","阿根廷")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023004","澳大利亚")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023005","奥地利")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023006","比利时")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023007","伯利兹")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023008","巴西")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023009","保加利亚")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023010","巴林")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023011","汶莱")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023012","柬埔寨")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023013","喀麦隆")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023014","加拿大")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023015","中非")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023016","智利")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023017","哥伦比亚")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023018","哥斯达黎加")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023019","克罗地亚）")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023020","丹麦")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023021","埃及")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023022","埃塞俄比亚")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023023","斐济")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023024","芬兰")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023025","法国")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023026","格鲁吉亚")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023027","德国")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023028","加纳")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023029","希腊")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023030","格陵兰")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023031","格林纳达")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023032","海地")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023033","洪都拉斯")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023034","匈牙利")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023035","印度")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023036","印度尼西亚")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023037","伊朗")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023038","爱尔兰")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023039","以色列")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023040","意大利")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023041","牙买加")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023042","日本")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023043","约旦")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023044","肯尼亚")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023045","基里巴斯")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023046","韩国")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023047","科威特")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023048","拉托维亚")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023049","利比里亚")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023050","列支敦士登")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023051","立陶宛")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023052","卢森堡")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023053","马来西亚")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023054","墨西哥")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023055","摩尔多瓦")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023056","摩纳哥")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023057","摩洛哥")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023058","毛里塔尼亚")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023059","尼泊尔")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023060","荷兰")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023061","新西兰")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023062","尼加拉瓜")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023063","尼日利亚")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023064","挪威")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023065","巴拉圭")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023066","秘鲁")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023067","菲律宾")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023068","葡萄牙")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023069","卡塔尔")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023070","罗马尼亚")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023071","俄罗斯")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023072","萨尔瓦多")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023073","圣马力诺")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023074","沙特阿拉伯")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023075","塞内加尔")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023076","新加坡")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023077","斯洛文尼亚")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023078","南非")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023079","西班牙")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023080","斯里兰卡")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023081","瑞典")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023082","瑞士")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023083","坦桑尼亚")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023084","泰国")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023085","汤加")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023086","特立尼达和多巴哥")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023087","突尼斯")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023088","土耳其")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023089","乌干达")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023090","乌克兰")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023091","英国")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023092","美国")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023093","梵蒂冈")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023094","委内瑞拉")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023095","越南")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023097","南斯拉夫")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023098","津巴布韦")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023099","波兰")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p1010230100","巴基斯坦")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p1010230101","朝鲜")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023102","塞浦路斯")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023103","蒙古")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023104","叙利亚")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023105","老挝")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023106","缅甸")
p1.addProvinces(c);
c = new provinceCN("世界各国/地区","p101023107","斯洛伐克")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);

var p1 = new provincesList("CN","国家或省份","国家或省份");
c = new provinceCN("国家或省份","地级市","地级市");
c.addCity("市、县级市、县","市、县级市、县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);

var p1 = new provincesList("CN","p101024","青海");
c = new provinceCN("青海","p101024001","西宁市")
c.addCity("p101024001001","大通回族自治县（桥头镇）")
c.addCity("p101024001002","湟源（城关镇）")
c.addCity("p101024001003","湟中（鲁沙尔镇）")
p1.addProvinces(c);

c = new provinceCN("青海","p101024002","海东地区")
c.addCity("p101024002001","民和回族土族自治县（川口镇）")
c.addCity("p101024002002","互助土族自治县（威远镇）")
c.addCity("p101024002003","平安（平安镇）")
c.addCity("p101024002004","乐都（碾伯镇）")
c.addCity("p101024002005","化隆回族自治县（巴燕镇）")
c.addCity("p101024002006","循化撒拉族自治县（积石镇）")
p1.addProvinces(c);

c = new provinceCN("青海","p101024003","海北藏族自治州")
c.addCity("p101024003001","海晏（三角城）")
c.addCity("p101024003002","祁连（八宝镇）")
c.addCity("p101024003003","刚察（沙柳镇）")
c.addCity("p101024003004","门源回族自治县（浩门镇）")
p1.addProvinces(c);
c = new provinceCN("青海","p101024004","黄南藏族自治州")
c.addCity("p101024004001","同仁（隆务镇）")
c.addCity("p101024004002","尖扎（马克唐镇）")
c.addCity("p101024004003","泽库（suonaihai）")
c.addCity("p101024004004","河南蒙古族自治县（优干宁）")
p1.addProvinces(c);
c = new provinceCN("青海","p101024005","海南藏族自治州")
c.addCity("p101024005001","共和（恰卜恰镇）")
c.addCity("p101024005002","同德（尕巴松多）")
c.addCity("p101024005003","贵德（河阴镇）")
c.addCity("p101024005004","兴海（子科滩）")
c.addCity("p101024005005","贵南（茫拉琼托）")
p1.addProvinces(c);
c = new provinceCN("青海","p101024006","果洛藏族自治州")
c.addCity("p101024006001","玛沁（大武镇）")
c.addCity("p101024006002","班玛（赛米塘）")
c.addCity("p101024006003","甘德（柯曲乡）")
c.addCity("p101024006004","达日（吉迈乡）")
c.addCity("p101024006005","久治（智清松多）")
c.addCity("p101024006006","玛多（玛查里）")

p1.addProvinces(c);
c = new provinceCN("青海","p101024007","玉树藏族自治州")
c.addCity("p101024007001","玉树（结古镇）")
c.addCity("p101024007002","杂多（萨蒲塘）")
c.addCity("p101024007003","称多（周均）")
c.addCity("p101024007004","治多（加吉博洛格）")
c.addCity("p101024007005","囊谦（香达乡）")
c.addCity("p101024007006","曲麻菜（约改滩）")
p1.addProvinces(c);
c = new provinceCN("青海","p101024008","海西蒙古族藏族自治州")
c.addCity("p101024008001","德令哈市")
c.addCity("p101024008002","格尔木市")
c.addCity("p101024008003","乌拉（希里沟镇）")
c.addCity("p101024008004","天峻（新源）")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101025","陕西");
c = new provinceCN("陕西","p101025001","宝鸡市")
c.addCity("p101025001001","凤翔（城关镇）")
c.addCity("p101025001002","岐山（凤鸣镇）")
c.addCity("p101025001003","扶风（城关镇）")
c.addCity("p101025001004","眉县（城关镇）")
c.addCity("p101025001005","陇县（城关镇）")
c.addCity("p101025001006","千阳（城关镇）")
c.addCity("p101025001007","麟游（九成宫镇）")
c.addCity("p101025001008","凤县（双石铺镇）")
c.addCity("p101025001009","太白（嘴头镇）")
c.addCity("p101025001010","凤翔（城关镇）")
c.addCity("p101025001011","凤翔（城关镇）")
p1.addProvinces(c);
c = new provinceCN("陕西","p101025002","咸阳市")
c.addCity("p101025002001","兴平市")
c.addCity("p101025002002","三原（城关镇）")
c.addCity("p101025002003","泾阳（泾干镇）")
c.addCity("p101025002004","乾县（城关镇）")
c.addCity("p101025002005","永寿（监军镇）")
c.addCity("p101025002006","彬县（城关镇）")
c.addCity("p101025002007","长武（昭仁镇）")
c.addCity("p101025002008","旬邑（城关镇）")
c.addCity("p101025002009","淳化（城关镇）")
c.addCity("p101025002010","武功（普集镇）")
c.addCity("p101025002011","杨凌")
c.addCity("p101025002012","礼泉（城关镇）")
p1.addProvinces(c);
c = new provinceCN("陕西","p101025003","西安市")
c.addCity("p101025003001","长安（韦曲镇）")
c.addCity("p101025003002","蓝田（蓝关镇）")
c.addCity("p101025003003","周至（二曲镇）")
c.addCity("p101025003004","户县（甘亭镇）")
c.addCity("p101025003005","高陵（鹿苑镇）")
p1.addProvinces(c);
c = new provinceCN("陕西","p101025004","铜川市")
c.addCity("p101025004001","耀县（城关镇）")
c.addCity("p101025004002","宜君（城关镇）")
p1.addProvinces(c);
c = new provinceCN("陕西","p101025005","汉中市")
c.addCity("p101025005001","南郑（城关镇）")
c.addCity("p101025005002","城固（埔望镇）")
c.addCity("p101025005003","洋县（洋州镇）")
c.addCity("p101025005004","西乡（城关镇）")
c.addCity("p101025005005","勉县（勉阳镇）")
c.addCity("p101025005006","宁强（城关镇）")
c.addCity("p101025005007","略阳（城关镇）")
c.addCity("p101025005008","镇巴（泾洋镇）")
c.addCity("p101025005009","留坝（城关镇）")
c.addCity("p101025005010","佛坪（袁家庄镇）")
p1.addProvinces(c);
c = new provinceCN("陕西","p101025006","榆林市")
c.addCity("p101025006001","神木（神木镇）")
c.addCity("p101025006002","府谷（府谷镇）")
c.addCity("p101025006003","横山（横山镇）")
c.addCity("p101025006004","靖边（张家畔镇）")
c.addCity("p101025006005","定边（定边镇）")
c.addCity("p101025006006","绥德（名州镇）")
c.addCity("p101025006007","米脂（米脂镇）")
c.addCity("p101025006008","佳县（佳芦镇）")
c.addCity("p101025006009","吴堡（宁家川镇）")
c.addCity("p101025006010","清涧（秀延镇）")
c.addCity("p101025006011","子洲（双湖峪镇）")
p1.addProvinces(c);
c = new provinceCN("陕西","p101025007","延安市")
c.addCity("p101025007001","延长（延长镇）")
c.addCity("p101025007002","延川（延川镇）")
c.addCity("p101025007003","子长（瓦窑堡镇）")
c.addCity("p101025007004","安塞（真武洞镇）")
c.addCity("p101025007005","志丹（保安镇）")
c.addCity("p101025007006","吴旗（吴旗镇）")
c.addCity("p101025007007","甘泉（城关镇）")
c.addCity("p101025007008","富县（富城镇）")
c.addCity("p101025007009","洛川（凤栖镇）")
c.addCity("p101025007010","宜川（丹州镇）")
c.addCity("p101025007011","黄龙（石堡镇）")
c.addCity("p101025007012","黄陵（桥山镇）")
p1.addProvinces(c);
c = new provinceCN("陕西","p101025009","渭南市")
c.addCity("p101025009001","华阴市")
c.addCity("p101025009002","韩城市")
c.addCity("p101025009003","华县（城关镇）")
c.addCity("p101025009004","潼关（城关镇）")
c.addCity("p101025009005","大荔（城关镇）")
c.addCity("p101025009006","蒲城（城关镇）")
c.addCity("p101025009007","澄城（城关镇）")
c.addCity("p101025009008","白炎（城关镇）")
c.addCity("p101025009009","合阳（城关镇）")
c.addCity("p101025009010","富平（窦村镇）")
p1.addProvinces(c);
c = new provinceCN("陕西","p101025010","商洛/商州")
c.addCity("p101025010001","洛南（城关镇）")
c.addCity("p101025010002","丹凤（龙驹寨镇）")
c.addCity("p101025010003","商南（城关镇）")
c.addCity("p101025010004","山阳（城关镇）")
c.addCity("p101025010005","镇安（城关镇）")
c.addCity("p101025010006","柞水（城关镇）")
p1.addProvinces(c);
c = new provinceCN("陕西","p101025011","安康")
c.addCity("p101025011001","汉阴（城关镇）")
c.addCity("p101025011002","石泉（城关镇）")
c.addCity("p101025011003","宁陕（城关镇）")
c.addCity("p101025011004","紫阳（城关镇）")
c.addCity("p101025011005","岗皋（城关镇）")
c.addCity("p101025011006","平利（城关镇）")
c.addCity("p101025011007","镇坪（城关镇）")
c.addCity("p101025011008","旬阳（城关镇）")
c.addCity("p101025011009","白河（城关镇）")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","p101026","山东");
c = new provinceCN("山东","p101026001","青岛市")
c.addCity("p101026001001","胶州")
c.addCity("p101026001002","胶南")
c.addCity("p101026001003","即墨")
c.addCity("p101026001004","平度")
c.addCity("p101026001005","莱西")
p1.addProvinces(c);	
c = new provinceCN("山东","p101026002","潍坊市")
c.addCity("p101026002001","安丘市")
c.addCity("p101026002002","昌邑市")
c.addCity("p101026002003","高密")
c.addCity("p101026002004","青州市")
c.addCity("p101026002005","诸城市")
c.addCity("p101026002006","寿光市")
c.addCity("p101026002007","昌乐")
c.addCity("p101026002008","临朐市")
p1.addProvinces(c);	
c = new provinceCN("山东","p101026003","淄博市")
c.addCity("p101026003001","桓台（索镇）")
c.addCity("p101026003002","高青（田镇）")
c.addCity("p101026003003","沂源（南麻镇）")
p1.addProvinces(c);	
c = new provinceCN("山东","p101026004","日照市")
c.addCity("p101026004001","莒县（城阳镇）")
c.addCity("p101026004002","五莲（洪凝镇）")
p1.addProvinces(c);	
c = new provinceCN("山东","p101026005","枣庄市")
c.addCity("p101026005001","滕州")
p1.addProvinces(c);	
c = new provinceCN("山东","p101026006","临沂市")
c.addCity("p101026006001","临沭")
c.addCity("p101026006002","郯城")
c.addCity("p101026006003","苍山（卞庄镇）")
c.addCity("p101026006004","莒南（十字路镇）")
c.addCity("p101026006005","沂水")
c.addCity("p101026006006","蒙阴")
c.addCity("p101026006007","平邑")
c.addCity("p101026006008","费县（费城镇）")
c.addCity("p101026006009","沂南（界湖镇）")
p1.addProvinces(c);	
c = new provinceCN("山东","p101026008","济宁市")
c.addCity("p101026008001","曲阜（曲阜镇）")
c.addCity("p101026008002","兖州（兖州镇）")
c.addCity("p101026008003","邹城（邹城镇）")
c.addCity("p101026008004","微山（夏镇）")
c.addCity("p101026008005","鱼台（谷亭镇）")
c.addCity("p101026008006","金乡（金乡镇）")
c.addCity("p101026008007","嘉祥（嘉祥镇）")
c.addCity("p101026008008","汶上（汶上镇）")
c.addCity("p101026008009","泗水（泗水镇）")
c.addCity("p101026008010","梁山（梁山镇）")
p1.addProvinces(c);	
c = new provinceCN("山东","p101026009","菏泽市")
c.addCity("p101026009001","曹县（曹城镇）")
c.addCity("p101026009002","成武")
c.addCity("p101026009003","单县（单城镇）")
c.addCity("p101026009004","定陶")
c.addCity("p101026009005","东明")
c.addCity("p101026009006","巨野")
c.addCity("p101026009007","鄄城（鄄城镇）")
c.addCity("p101026009008","郓城（郓城镇）")
p1.addProvinces(c);	
c = new provinceCN("山东","p101026010","东营市")
c.addCity("p101026010001","垦利（垦利镇）")
c.addCity("p101026010002","利津（利津镇）")
c.addCity("p101026010003","广饶（广饶镇）")
p1.addProvinces(c);	
c = new provinceCN("山东","p101026011","威海市")
c.addCity("p101026011001","荣成（崖头镇）")
c.addCity("p101026011002","乳山（夏村镇）")
c.addCity("p101026011003","文登（文城镇）")
p1.addProvinces(c);	
c = new provinceCN("山东","p101026012","泰安市")
c.addCity("p101026012001","新泰")
c.addCity("p101026012002","肥城")
c.addCity("p101026012003","东平")
c.addCity("p101026012004","宁阳")
p1.addProvinces(c);	
c = new provinceCN("山东","p101026013","烟台市")
c.addCity("p101026013001","栖霞（栖霞镇）")
c.addCity("p101026013002","海阳（东村镇）")
c.addCity("p101026013003","龙口")
c.addCity("p101026013004","莱阳")
c.addCity("p101026013005","莱州")
c.addCity("p101026013006","蓬莱（登州镇）")
c.addCity("p101026013007","招远（招城镇）")
c.addCity("p101026013008","长岛（南长山镇）")
p1.addProvinces(c);	
c = new provinceCN("山东","p101026014","莱芜市")
p1.addProvinces(c);	
c = new provinceCN("山东","p101026015","聊城市")
c.addCity("p101026015001","临清市")
c.addCity("p101026015002","阳谷县")
c.addCity("p101026015003","莘县（城关镇）")
c.addCity("p101026015004","茌平县")
c.addCity("p101026015005","东阿县（铜城镇）")
c.addCity("p101026015006","冠县（冠城镇）")
c.addCity("p101026015007","高唐县")
c.addCity("p101026015008","东昌府区")
p1.addProvinces(c);
c = new provinceCN("山东","p101026016","德州市")
c.addCity("p101026016001","乐陵")
c.addCity("p101026016002","禹城")
c.addCity("p101026016003","陵县（陵城镇）")
c.addCity("p101026016004","平原")
c.addCity("p101026016005","夏津")
c.addCity("p101026016006","武城")
c.addCity("p101026016007","齐河（晏城镇）")
c.addCity("p101026016008","临邑")
c.addCity("p101026016009","宁津")
c.addCity("p101026016010","庆云")
p1.addProvinces(c);
c = new provinceCN("山东","p101026017","滨州市")
c.addCity("p101026017001","惠民")
c.addCity("p101026017002","阳信")
c.addCity("p101026017003","无棣")
c.addCity("p101026017004","沾化（富国镇）")
c.addCity("p101026017005","邹平")
c.addCity("p101026017006","博兴")
p1.addProvinces(c);
c = new provinceCN("山东","p101026018","济南市")
c.addCity("p101026018001","章丘（明水镇）")
c.addCity("p101026018002","长清（长清镇）")
c.addCity("p101026018003","平阴（平阴镇）")
c.addCity("p101026018004","济阳（济阳镇）")
c.addCity("p101026018005","商河（商河镇）")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	
var p1 = new provincesList("CN","","澳门");
c = new provinceCN("澳门","","澳门")
c.addCity("","澳门")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);	
var p1 = new provincesList("CN","p101027","上海");
c = new provinceCN("上海","p101027023001","宝山区")
p1.addProvinces(c);
c = new provinceCN("上海","p101027023002","长宁区")
p1.addProvinces(c);
c = new provinceCN("上海","p101027023003","松江区")
p1.addProvinces(c);
c = new provinceCN("上海","p101027023004","闸北区")
p1.addProvinces(c);
c = new provinceCN("上海","p101027023005","徐汇区")
p1.addProvinces(c);
c = new provinceCN("上海","p101027023006","杨浦区")
p1.addProvinces(c);
c = new provinceCN("上海","p101027023007","青浦区")
p1.addProvinces(c);
c = new provinceCN("上海","p101027023008","崇明县")
p1.addProvinces(c);
c = new provinceCN("上海","p101027023009","奉贤区")
p1.addProvinces(c);
c = new provinceCN("上海","p101027023010","普陀区")
p1.addProvinces(c);
c = new provinceCN("上海","p101027023011","浦东新区")
p1.addProvinces(c);
c = new provinceCN("上海","p101027023013","虹口区")
p1.addProvinces(c);
c = new provinceCN("上海","p101027023015","闵行区")
p1.addProvinces(c);
c = new provinceCN("上海","p101027023016","黄浦区")
p1.addProvinces(c);
c = new provinceCN("上海","p101027023017","嘉定区")
p1.addProvinces(c);
c = new provinceCN("上海","p101027023018","金山区")
p1.addProvinces(c);	
c = new provinceCN("上海","p101027023019","静安区")
p1.addProvinces(c);	
c = new provinceCN("上海","p101027023020","卢湾区")
p1.addProvinces(c);	
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101028","山西");
c = new provinceCN("山西","p101028001","太原")
c.addCity("p101028001001","古交市")
c.addCity("p101028001002","清徐（清源镇）")
c.addCity("p101028001003","阳曲（黄寨镇）")
c.addCity("p1010280010014","类烦（类烦镇）")
p1.addProvinces(c);	
c = new provinceCN("山西","p101028002","大同市")
c.addCity("p101028002001","阳高（城关镇）")
c.addCity("p101028002002","天镇（城关镇）")
c.addCity("p101028002003","广灵（城关镇）")
c.addCity("p101028002004","灵丘（城关镇）")
c.addCity("p101028002005","浑源（城关镇）")
c.addCity("p101028002006","左云（城关镇）")
p1.addProvinces(c);	
c = new provinceCN("山西","p101028003","忻州市")
c.addCity("p101028003001","原平市")
c.addCity("p101028003002","定襄（城关镇）")
c.addCity("p101028003003","五台（城关镇）")
c.addCity("p101028003004","代县（城关镇）")
c.addCity("p101028003005","繁峙（城关镇）")
c.addCity("p101028003005","宁武（城关镇）")
c.addCity("p101028003006","静乐（城关镇）")
c.addCity("p101028003007","神池（城关镇）")
c.addCity("p101028003008","五寨（城关镇）")
c.addCity("p101028003009","岢岚（城关镇）")
c.addCity("p101028003010","河曲（城关镇）")
c.addCity("p101028003011","保德（城关镇）")
c.addCity("p101028003012","偏关（城关镇）")
p1.addProvinces(c);	
c = new provinceCN("山西","p101028004","阳泉市")
c.addCity("p101028004001","平定（城关镇）")
c.addCity("p101028004002","孟县（城关镇）")
p1.addProvinces(c);	
c = new provinceCN("山西","p101028005","晋中市（榆次）")
c.addCity("p101028005001","榆社（城关镇）")
c.addCity("p101028005002","左权（城关镇）")
c.addCity("p101028005003","和顺（城关镇）")
c.addCity("p101028005004","普阳（城关镇）")
c.addCity("p101028005005","寿阳（城关镇）")
c.addCity("p101028005006","太谷（城关镇）")
c.addCity("p101028005007","祁县（城关镇）")
c.addCity("p101028005008","平遥（城关镇）")
c.addCity("p101028005009","灵石（城关镇）")
c.addCity("p101028005010","介休市")
p1.addProvinces(c);
c = new provinceCN("山西","p101028006","长治市")
c.addCity("p101028006001","潞城市")
c.addCity("p101028006002","襄垣（城关镇）")
c.addCity("p101028006003","屯留（城关镇）")
c.addCity("p101028006004","平顺（城关镇）")
c.addCity("p101028006005","黎城（城关镇）")
c.addCity("p101028006006","壶关（城关镇）")
c.addCity("p101028006007","长子（城关镇）")
c.addCity("p101028006008","武乡（城关镇）")
c.addCity("p101028006009","沁县（城关镇）")
c.addCity("p101028006010","沁源（城关镇）")
p1.addProvinces(c);	
c = new provinceCN("山西","p101028007","临汾市")
c.addCity("p101028007001","侯马市")
c.addCity("p101028007002","霍州市")
c.addCity("p101028007003","曲沃（城关镇）")
c.addCity("p101028007004","翼城（城关镇）")
c.addCity("p101028007005","襄汾（城关镇）")
c.addCity("p101028007006","洪洞（城关镇）")
c.addCity("p101028007007","古县（城关镇）")
c.addCity("p101028007008","乡宁（城关镇）")
c.addCity("p101028007009","蒲县（城关镇）")
c.addCity("p101028007010","大宁（城关镇）")
c.addCity("p101028007011","永和（城关镇）")
c.addCity("p101028007012","隰县（城关镇）")
c.addCity("p101028007013","汾西（城关镇）")
c.addCity("p101028007014","浮山（城关镇）")
c.addCity("p101028007015","吉县（城关镇）")
c.addCity("p101028007016","安泽")
p1.addProvinces(c);	
c = new provinceCN("山西","p101028008","晋城市")
c.addCity("p101028008001","高平市")
c.addCity("p101028008002","泽州（南村镇）")
c.addCity("p101028008003","沁水（城关镇）")
c.addCity("p101028008004","阳城（城关镇）")
c.addCity("p101028008005","陵川（城关镇）")
p1.addProvinces(c);	
c = new provinceCN("山西","p101028009","运城市")
c.addCity("p101028009001","永济市")
c.addCity("p101028009002","河津市")
c.addCity("p101028009003","芮城（城关镇）")
c.addCity("p101028009004","临猗（城关镇）")
c.addCity("p101028009005","万荣（城关镇）")
c.addCity("p101028009006","新绛（城关镇）")
c.addCity("p101028009007","稷山（城关镇）")
c.addCity("p101028009008","闻喜（城关镇）")
c.addCity("p101028009009","夏县（城关镇）")
c.addCity("p101028009010","绛县（城关镇）")
c.addCity("p101028009011","平陆（城关镇）")
c.addCity("p101028009012","垣曲（新城镇）")
p1.addProvinces(c);	
c = new provinceCN("山西","p101028010","朔州市")
c.addCity("p101028010001","山阴（贷岳镇）")
c.addCity("p101028010002","应县（城关镇）")
c.addCity("p101028010003","右玉（汾家没坊镇）")
c.addCity("p101028010004","怀仁（城关镇）")
p1.addProvinces(c);		
c = new provinceCN("山西","p101028011","吕梁地区（离石市）")
c.addCity("p101028011001","离石市")
c.addCity("p101028011002","孝义市")
c.addCity("p101028011003","汾阳市")
c.addCity("p101028011004","文水（城关镇）")
c.addCity("p101028011005","中阳（城关镇）")
c.addCity("p101028011006","兴县（城关镇）")
c.addCity("p101028011007","临县（城关镇）")
c.addCity("p101028011008","方山（圪洞镇）")
c.addCity("p101028011009","柳林（柳林镇）")
c.addCity("p101028011010","岚县（东村城）")
c.addCity("p101028011011","交口（交口镇）")
c.addCity("p101028011012","交城（城关镇）")
c.addCity("p101028011013","石楼（城关镇）")
p1.addProvinces(c);			
provincesListArr = provincesListArr.concat(p1);	
var p1 = new provincesList("CN","p101029","四川");
c = new provinceCN("四川","p101029001","阿坝藏族羌族自治州")
c.addCity("p101029001001","马尔康（马尔康镇）")
c.addCity("p101029001002","汶川（威州镇）")
c.addCity("p101029001003","理县（杂谷脑镇）")
c.addCity("p101029001004","茂县（凤仪镇）")
c.addCity("p101029001005","阿坝（阿坝镇）")
c.addCity("p101029001006","松潘（进安镇）")
c.addCity("p101029001007","九寨沟（永乐镇）")
c.addCity("p101029001008","金川（金川镇）")
c.addCity("p101029001009","小金（美兴镇）")
c.addCity("p101029001010","黑水（芦花镇）")
c.addCity("p101029001011","红原（邛溪镇）")
c.addCity("p101029001012","壤塘（壤柯镇）")
c.addCity("p101029001013","若尔盖（达扎寺镇）")
p1.addProvinces(c);	
c = new provinceCN("四川","p101029002","巴中市")
c.addCity("p101029002001","通江（诺江镇）")
c.addCity("p101029002002","南江（南江镇）")
c.addCity("p101029002003","平昌（江口镇）")
p1.addProvinces(c);	
c = new provinceCN("四川","p101029003","达州市")
c.addCity("p101029003001","万源")
c.addCity("p101029003002","达县（南外镇）")
c.addCity("p101029003003","宣汉（东乡镇）")
c.addCity("p101029003004","开江（新宁镇）")
c.addCity("p101029003005","大竹（竹阳镇）")
c.addCity("p101029003006","渠县（渠江镇）")
p1.addProvinces(c);	
c = new provinceCN("四川","p101029004","德阳市")
c.addCity("p101029004001","广汉")
c.addCity("p101029004002","绵竹")
c.addCity("p101029004003","罗江（罗江镇）")
c.addCity("p101029004004","中江（凯江镇）")
c.addCity("p101029004005","什邡")
p1.addProvinces(c);	
c = new provinceCN("四川","p101029005","甘孜藏族自治州")
c.addCity("p101029005001","甘孜（甘孜镇）")
c.addCity("p101029005002","康定（炉城镇）")
c.addCity("p101029005003","泸定（泸桥镇）")
c.addCity("p101029005004","丹巴（章谷镇）")
c.addCity("p101029005005","九龙（呷尔镇）")
c.addCity("p101029005006","雅江（河口镇）")
c.addCity("p101029005007","道孚（鲜水镇）")
c.addCity("p101029005008","炉霍（新都镇）")
c.addCity("p101029005009","新龙（茹龙镇）")
c.addCity("p101029005010","德格（更庆镇）")
c.addCity("p101029005011","白玉（建设镇）")
c.addCity("p101029005012","石渠（尼呷镇）")
c.addCity("p101029005013","色达（色柯镇）")
c.addCity("p101029005014","理塘（高城镇）")
c.addCity("p101029005015","巴塘（夏邛镇）")
c.addCity("p101029005016","乡城（桑披镇）")
c.addCity("p101029005017","稻城（金珠镇）")
c.addCity("p101029005018","得荣（松麦镇）")
p1.addProvinces(c);	
c = new provinceCN("四川","p101029006","广元市")
c.addCity("p101029006001","旺苍（东河镇）")
c.addCity("p101029006002","青川（乔庄镇）")
c.addCity("p101029006003","剑阁（下寺镇）")
c.addCity("p101029006004","苍溪（陵江镇）")
p1.addProvinces(c);	
c = new provinceCN("四川","p101029007","乐山市")
c.addCity("p101029007001","峨眉山")
c.addCity("p101029007002","犍为（玉津镇）")
c.addCity("p101029007003","井研（研城镇）")
c.addCity("p101029007004","夹江（漹城镇）")
c.addCity("p101029007005","沐川（沐溪镇）")
c.addCity("p101029007006","峨边彝族自治县（沙坪镇）")
c.addCity("p101029007007","马边彝族自治县（民建镇）")
p1.addProvinces(c);	
c = new provinceCN("四川","p101029008","凉山彝族自治州（西昌市）")
c.addCity("p101029008001","盐源（盐并镇）")
c.addCity("p101029008002","德昌（德州镇）")
c.addCity("p101029008003","会理（城关镇）")
c.addCity("p101029008004","会东（会东镇）")
c.addCity("p101029008005","宁南（披砂镇）")
c.addCity("p101029008006","普格（普基镇）")
c.addCity("p101029008007","布拖（特木里镇）")
c.addCity("p101029008008","甘洛（新市坝镇）")
c.addCity("p101029008009","金阳（天地坝镇）")
c.addCity("p101029008010","雷波（锦城镇）")
c.addCity("p101029008011","美姑（巴普镇）")
c.addCity("p101029008012","冕宁（城厢镇）")
c.addCity("p101029008013","木里藏族自治县（乔瓦镇）")
c.addCity("p101029008014","喜德（光明镇）")
c.addCity("p101029008015","越西（越城镇）")
c.addCity("p101029008016","昭觉（新城镇）")
p1.addProvinces(c);	
c = new provinceCN("四川","p101029009","泸州市")
c.addCity("p101029009001","泸县（福集镇）")
c.addCity("p101029009002","合江（合江镇）")
c.addCity("p101029009003","叙永（叙永镇）")
c.addCity("p101029009004","古蔺（古蔺镇）")
p1.addProvinces(c);	
c = new provinceCN("四川","p101029010","绵阳市")
c.addCity("p101029010001","江油")
c.addCity("p101029010002","三台（潼川镇）")
c.addCity("p101029010003","盐亭（云溪镇）")
c.addCity("p101029010004","安县（花荄镇）")
c.addCity("p101029010005","梓潼（文昌镇）")
c.addCity("p101029010006","北川（曲山镇）")
c.addCity("p101029010007","平武（龙安镇）")
p1.addProvinces(c);	
c = new provinceCN("四川","p101029011","南充市")
c.addCity("p101029011001","阆中")
c.addCity("p101029011002","南部（南隆镇）")
c.addCity("p101029011003","营山（朗池镇）")
c.addCity("p101029011004","蓬安（周口镇）")
c.addCity("p101029011005","仪陇（金城镇）")
c.addCity("p101029011006","西充（晋城镇）")
p1.addProvinces(c);	
c = new provinceCN("四川","p101029012","内江市")
c.addCity("p101029012001","威远（严陵镇）")
c.addCity("p101029012002","资中（重龙镇）")
c.addCity("p101029012003","隆昌（金鹅镇）")
p1.addProvinces(c);	
c = new provinceCN("四川","p101029013","攀枝花市")
c.addCity("p101029013001","米易（攀莲镇）")
c.addCity("p101029013002","盐边（桐子镇大坪地）")
p1.addProvinces(c);	
c = new provinceCN("四川","p101029014","雅安市")
c.addCity("p101029014001","名山（蒙阳镇）")
c.addCity("p101029014002","荥经（严道镇）")
c.addCity("p101029014003","流源（富林镇）")
c.addCity("p101029014004","石棉（新棉镇）")
c.addCity("p101029014005","天全（城厢镇）")
c.addCity("p101029014006","芦山（芦阳镇）")
c.addCity("p101029014007","宝兴（穆坪镇）")
p1.addProvinces(c);	
c = new provinceCN("四川","p101029015","自贡市")
c.addCity("p101029015001","荣县（旭阳镇）")
c.addCity("p101029015002","富顺（城关镇）")
p1.addProvinces(c);	
c = new provinceCN("四川","p101029016","宜宾市")
c.addCity("p101029016001","南溪（南溪镇）")
c.addCity("p101029016002","江安（江安镇）")
c.addCity("p101029016003","长宁（长宁镇）")
c.addCity("p101029016004","高县（庆符镇）")
c.addCity("p101029016005","高县（庆符镇）")
c.addCity("p101029016006","筠连（筠连镇）")
c.addCity("p101029016007","珙县（巡场镇）")
c.addCity("p101029016008","兴文（中城镇）")
c.addCity("p101029016009","屏山（屏山镇）")
p1.addProvinces(c);	
c = new provinceCN("四川","p101029017","遂宁市")
c.addCity("p101029017001","莲溪（赤锋镇）")
c.addCity("p101029017002","射洪（太和镇）")
c.addCity("p101029017003","大英（蓬莱镇）")
p1.addProvinces(c);	
c = new provinceCN("四川","p101029018","广安市")
c.addCity("p101029018001","华蓥")
c.addCity("p101029018002","岳池（九龙镇）")
c.addCity("p101029018003","武胜（沿口镇）")
c.addCity("p101029018004","邻水（鼎屏镇）")
p1.addProvinces(c);	
c = new provinceCN("四川","p101029019","眉山市")
c.addCity("p101029019001","仁寿（文林镇）")
c.addCity("p101029019002","彭山（凤鸣镇）")
c.addCity("p101029019003","洪雅（洪川镇）")
c.addCity("p101029019004","丹棱（丹棱镇）")
c.addCity("p101029019005","青神（城厢镇）")
p1.addProvinces(c);	
c = new provinceCN("四川","p101029020","成都市")
c.addCity("p101029020001","崇州（崇阳镇）")
c.addCity("p101029020002","邛崃（临节镇）")
c.addCity("p101029020003","都江堰（灌口镇）")
c.addCity("p101029020004","彭州（天彭镇）")
c.addCity("p101029020005","金堂（赵镇）")
c.addCity("p101029020006","双流（东升镇）")
c.addCity("p101029020007","温江（柳城镇）")
c.addCity("p101029020008","郫县（郫筒镇）")
c.addCity("p101029020009","大邑（晋原镇）")
c.addCity("p101029020010","蒲江（鹤山镇）")
c.addCity("p101029020011","新津（五津镇）")
p1.addProvinces(c);	
c = new provinceCN("四川","p101029029","资阳市")
c.addCity("p101029029001","简阳")
c.addCity("p101029029002","乐至（天池镇）")
c.addCity("p101029029003","安岳（岳阳镇）")
p1.addProvinces(c);	
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101030","台湾");
c = new provinceCN("台湾","p101030032001","高雄市")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032002","彰化县")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032003","云林县")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032004","宜兰县")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032005","新竹县")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032006","新竹市")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032007","台中市")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032008","桃园县")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032009","台中县")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032010","台南县")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032011","台南市")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032012","高雄县")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032013","花莲市")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032014","花莲县")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032015","台东县")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032016","台东市")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032017","基隆市")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032018","嘉义市")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032019","嘉义县")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032020","金门县")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032021","连江县")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032022","苗栗市")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032023","苗栗县")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032024","南投市")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032025","南投县")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032026","澎湖县")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032027","屏东市")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032028","屏东县")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032029","台北市")
p1.addProvinces(c);
c = new provinceCN("台湾","p101030032030","台北县")
p1.addProvinces(c);	
provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101031","天津");
c = new provinceCN("天津","p101031019001","宝坻区")
p1.addProvinces(c);
c = new provinceCN("天津","p101031019002","西青区")
p1.addProvinces(c);
c = new provinceCN("天津","p101031019003","武清区")
p1.addProvinces(c);
c = new provinceCN("天津","p101031019004","北辰区")
p1.addProvinces(c);
c = new provinceCN("天津","p101031019005","大港区")
p1.addProvinces(c);
c = new provinceCN("天津","p101031019006","东丽区")
p1.addProvinces(c);
c = new provinceCN("天津","p101031019007","汉沽区")
p1.addProvinces(c);
c = new provinceCN("天津","p101031019008","塘沽区")
p1.addProvinces(c);
c = new provinceCN("天津","p101031019009","和平区")
p1.addProvinces(c);
c = new provinceCN("天津","p101031019010","河北区")
p1.addProvinces(c);
c = new provinceCN("天津","p101031019011","河东区")
p1.addProvinces(c);
c = new provinceCN("天津","p101031019012","河西区")
p1.addProvinces(c);
c = new provinceCN("天津","p101031019013","红桥区")
p1.addProvinces(c);
c = new provinceCN("天津","p101031019014","蓟县")
p1.addProvinces(c);
c = new provinceCN("天津","p101031019015","津南区")
p1.addProvinces(c);
c = new provinceCN("天津","p101031019016","静海县")
p1.addProvinces(c);
c = new provinceCN("天津","p101031019017","南开区")
p1.addProvinces(c);
c = new provinceCN("天津","p101031019018","宁河县")
p1.addProvinces(c);	
provincesListArr = provincesListArr.concat(p1);	


var p1 = new provincesList("CN","p101033","新疆");
c = new provinceCN("新疆","p101033001","石河子")
p1.addProvinces(c);	
c = new provinceCN("新疆","p101033002","吐鲁番地区/市")
c.addCity("p101033002001","鄯善")
c.addCity("p101033002002","托克逊")
p1.addProvinces(c);	
c = new provinceCN("新疆","p101033003","喀什地区/市")
c.addCity("p101033003001","疏附（托克扎克镇）")
c.addCity("p101033003002","疏勒")
c.addCity("p101033003003","英吉沙")
c.addCity("p101033003004","泽普")
c.addCity("p101033003005","莎车")
c.addCity("p101033003006","叶城（咯格勒克镇）")
c.addCity("p101033003007","麦盖提")
c.addCity("p101033003008","岳普湖")
c.addCity("p101033003008","伽师（巴仁镇）")
c.addCity("p101033003009","巴楚")
c.addCity("p101033003010","塔什库尔干")
p1.addProvinces(c);	
c = new provinceCN("新疆","p101033005","巴音郭椤蒙古自治州（库尔勒市）")
c.addCity("p101033005001","库尔勒")
c.addCity("p101033005002","轮台")
c.addCity("p101033005003","尉犁")
c.addCity("p101033005004","若羌")
c.addCity("p101033005005","且末")
c.addCity("p101033005006","和静")
c.addCity("p101033005007","和硕（特吾里克镇）")
c.addCity("p101033005008","博湖")
c.addCity("p101033005009","焉者")
p1.addProvinces(c);	
c = new provinceCN("新疆","p101033007","昌吉回族自治州（昌吉市）")
c.addCity("p101033007001","阜康")
c.addCity("p101033007002","米泉")
c.addCity("p101033007003","呼图壁")
c.addCity("p101033007004","玛纳斯")
c.addCity("p101033007005","奇台")
c.addCity("p101033007006","吉木萨尔")
c.addCity("p101033007007","木垒")
p1.addProvinces(c);	
c = new provinceCN("新疆","p101033008","博尔塔拉蒙古自治州（博乐市）")
c.addCity("p101033008001","博乐")
c.addCity("p101033008002","精河")
c.addCity("p101033008003","温泉（博格达尔镇）")
p1.addProvinces(c);	
c = new provinceCN("新疆","p101033009","伊犁哈密瓜萨克自治州（伊宁市）")
c.addCity("p101033009001","伊宁县（吉里于孜镇）")
c.addCity("p101033009002","奎屯")
c.addCity("p101033009003","霍城（永定镇）")
c.addCity("p101033009004","巩留")
c.addCity("p101033009005","新源")
c.addCity("p101033009006","昭苏")
c.addCity("p101033009007","特克斯")
c.addCity("p101033009008","尼勒克")
c.addCity("p101033009009","察布查尔")
p1.addProvinces(c);	
c = new provinceCN("新疆","p101033010","克孜勒苏柯尔克孜自治州（阿图什市）")
c.addCity("p101033010001","阿图什")
c.addCity("p101033010002","阿克陶")
c.addCity("p101033010003","阿合奇")
c.addCity("p101033010004","乌恰")
p1.addProvinces(c);	
c = new provinceCN("新疆","p101033011","阿克苏地区/市")
c.addCity("p101033011001","温宿")
c.addCity("p101033011002","库车")
c.addCity("p101033011003","沙雅")
c.addCity("p101033011004","新和")
c.addCity("p101033011005","拜城")
c.addCity("p101033011006","乌什")
c.addCity("p101033011007","阿瓦提")
c.addCity("p101033011008","柯坪")
p1.addProvinces(c);	
c = new provinceCN("新疆","p101033012","克拉玛依市")
p1.addProvinces(c);	
c = new provinceCN("新疆","p101033013","乌鲁木齐市")
p1.addProvinces(c);	
c = new provinceCN("新疆","p101033014","和田地区/市")
c.addCity("p101033014001","墨玉（喀拉喀什镇）")
c.addCity("p101033014002","皮山（固玛镇）")
c.addCity("p101033014003","洛浦")
c.addCity("p101033014004","策勒")
c.addCity("p101033014005","于田（木尕拉镇）")
c.addCity("p101033014006","民丰（尼雅镇）")
p1.addProvinces(c);	
c = new provinceCN("新疆","p101033015","哈密地区/市")
c.addCity("p101033015001","伊吾")
c.addCity("p101033015002","巴里坤哈萨克自治县")
p1.addProvinces(c);
c = new provinceCN("新疆","p101033072","塔城地区/市")
c.addCity("p101033072001","乌苏")
c.addCity("p101033072002","额敏")
c.addCity("p101033072003","沙湾（三道河子镇）")
c.addCity("p101033072004","托里")
c.addCity("p101033072005","裕民（哈拉布拉镇）")
c.addCity("p101033072006","和布克塞尔")
p1.addProvinces(c);

c = new provinceCN("新疆","p101033079","阿勒泰地区/市")
c.addCity("p101033079001","布尔津")
c.addCity("p101033079002","富蕴（库额尔齐斯镇）")
c.addCity("p101033079003","福海")
c.addCity("p101033079004","哈巴河（阿克齐镇）")
c.addCity("p101033079005","青河")
c.addCity("p101033079006","吉木乃（托普铁热克镇）")
p1.addProvinces(c);

provincesListArr = provincesListArr.concat(p1);	

var p1 = new provincesList("CN","p101034","西藏");
c = new provinceCN("西藏","p101034001","拉萨市")
c.addCity("p101034001001","达孜县")
c.addCity("p101034001002","当雄县")
c.addCity("p101034001003","堆龙德庆县")
c.addCity("p101034001004","拉萨市")
c.addCity("p101034001005","林周县")
c.addCity("p101034001006","墨竹工卡县")
c.addCity("p101034001007","尼木县")
c.addCity("p101034001008","曲水县")
p1.addProvinces(c);	
c = new provinceCN("西藏","p101034002","那曲")
c.addCity("p101034002001","安多县")
c.addCity("p101034002002","巴青县")
c.addCity("p101034002003","班戈县")
c.addCity("p101034002004","比如县")
c.addCity("p101034002005","嘉黎县")
c.addCity("p101034002006","那曲县")
c.addCity("p101034002007","尼玛县")
c.addCity("p101034002008","聂荣县")
c.addCity("p101034002009","申扎县")
c.addCity("p101034002010","索县")
p1.addProvinces(c);	
c = new provinceCN("西藏","p101034003","昌都")
c.addCity("p101034003001","巴宿县")
c.addCity("p101034003002","边坝")
c.addCity("p101034003003","察雅县")
c.addCity("p101034003004","昌都县")
c.addCity("p101034003005","丁青县")
c.addCity("p101034003006","贡觉县")
c.addCity("p101034003007","江达县")
c.addCity("p101034003008","类乌齐县")
c.addCity("p101034003009","洛隆县")
c.addCity("p101034003010","芒康县")
c.addCity("p101034003011","左贡县")
p1.addProvinces(c);	
c = new provinceCN("西藏","p101034004","山南（泽当镇）")
c.addCity("p101034004001","措美县")
c.addCity("p101034004002","错那县")
c.addCity("p101034004003","贡嘎县")
c.addCity("p101034004004","加查县")
c.addCity("p101034004005","浪卡子县")
c.addCity("p101034004006","隆子县")
c.addCity("p101034004007","洛扎县")
c.addCity("p101034004008","乃东县")
c.addCity("p101034004009","琼结县")
c.addCity("p101034004010","曲松县")
c.addCity("p101034004011","桑日县")
c.addCity("p101034004012","扎囊县")
p1.addProvinces(c);	
c = new provinceCN("西藏","p101034005","日喀则")
c.addCity("p101034005001","昂仁县")
c.addCity("p101034005002","白郎县")
c.addCity("p101034005003","定结县")
c.addCity("p101034005004","定日县")
c.addCity("p101034005005","岗巴县")
c.addCity("p101034005006","吉隆县")
c.addCity("p101034005007","江孜县")
c.addCity("p101034005008","康马县")
c.addCity("p101034005009","拉孜县")
c.addCity("p101034005010","南木林县")
c.addCity("p101034005011","聂拉木县")
c.addCity("p101034005012","仁布县")
c.addCity("p101034005013","日喀则县")
c.addCity("p101034005014","萨嘎县")
c.addCity("p101034005015","萨迦县")
c.addCity("p101034005016","谢通门县")
c.addCity("p101034005017","亚东县")
c.addCity("p101034005018","仲巴县")
p1.addProvinces(c);	
c = new provinceCN("西藏","p101034006","阿里")
c.addCity("p101034006001","措勤")
c.addCity("p101034006002","改则县")
c.addCity("p101034006003","革吉县")
c.addCity("p101034006004","噶尔县")
c.addCity("p101034006005","普兰县")
c.addCity("p101034006006","日土县")
c.addCity("p101034006007","札达县")
p1.addProvinces(c);	
c = new provinceCN("西藏","p101034007","林芝")
c.addCity("p101034007001","波密县")
c.addCity("p101034007002","察隅县")
c.addCity("p101034007003","工布江达县")
c.addCity("p101034007004","郎县")
c.addCity("p101034007005","林芝县")
c.addCity("p101034007006","米林县")
c.addCity("p101034007007","墨脱县")
p1.addProvinces(c);	
provincesListArr = provincesListArr.concat(p1);	
var p1 = new provincesList("CN","p101035","云南");
c = new provinceCN("云南","p101035001","昆明市")
c.addCity("p101035001001","安宁")
c.addCity("p101035001002","呈贡（龙成镇）")
c.addCity("p101035001003","晋宁（昆阳镇）")
c.addCity("p101035001004","富民（永定镇）")
c.addCity("p101035001005","宜良（匡远镇）")
c.addCity("p101035001006","嵩明（嵩阳镇）")
c.addCity("p101035001007","石林彝族自治县（鹿阜镇）")
c.addCity("p101035001008","禄劝彝族苗族自治县（屏山镇）")
c.addCity("p101035001009","寻甸回族彝族自治县（仁德镇）")
p1.addProvinces(c);	
c = new provinceCN("云南","p101035002","大理白族自治州（大理市）")
c.addCity("p101035002001","祥云（祥城镇）")
c.addCity("p101035002002","宾川（牛并镇）")
c.addCity("p101035002003","弥渡（弥城镇）")
c.addCity("p101035002004","永平（老街镇）")
c.addCity("p101035002005","洱源（玉湖镇）")
c.addCity("p101035002006","剑川（金华镇）")
c.addCity("p101035002007","鹤庆（去鹤镇）")
c.addCity("p101035002008","漾濞彝族自治县（上街镇）")
c.addCity("p101035002009","南涧彝族自治县（南涧镇）")
c.addCity("p101035002010","巍山彝族回族自治县（文化镇）")
c.addCity("p101035002011","云龙（石门镇）")
p1.addProvinces(c);	
c = new provinceCN("云南","p101035003","丽江地区")
c.addCity("p101035003001","永胜（永北镇）")
c.addCity("p101035003002","华坪（中心镇）")
c.addCity("p101035003003","宁蒗彝族自治县（大兴镇）")
p1.addProvinces(c);	
c = new provinceCN("云南","p101035005","玉溪市")
c.addCity("p101035005001","江川（大街镇）")
c.addCity("p101035005002","澄江（凤麓镇）")
c.addCity("p101035005003","通海（秀山镇）")
c.addCity("p101035005004","华宁（宁州镇）")
c.addCity("p101035005005","易门（龙泉镇）")
c.addCity("p101035005006","峨山彝族自治县（双江镇）")
c.addCity("p101035005007","新平彝族自治县（桂山镇）")
c.addCity("p101035005008","元江哈尼族彝族傣族自治县（澧江镇）")
p1.addProvinces(c);	
c = new provinceCN("云南","p101035008","保山市")
c.addCity("p101035008001","施甸（甸阳镇）")
c.addCity("p101035008002","腾冲（城关镇）")
c.addCity("p101035008003","龙陵（龙山镇）")
c.addCity("p101035008004","昌宁（右甸镇）")
p1.addProvinces(c);	
c = new provinceCN("云南","p101035009","曲靖市")
c.addCity("p101035009001","宣威")
c.addCity("p101035009002","马龙（通泉镇）")
c.addCity("p101035009003","沾益（西平镇）")
c.addCity("p101035009004","富源（中安镇）")
c.addCity("p101035009005","罗平（罗雄镇）")
c.addCity("p101035009006","师宗（丹凤镇）")
c.addCity("p101035009007","陆良（中枢镇）")
c.addCity("p101035009008","会泽（钟屏镇）")
p1.addProvinces(c);
c = new provinceCN("云南","p101035064","思茅地区/市")
c.addCity("p101035064001","普洱哈尼族彝族自治县（宁洱镇）")
c.addCity("p101035064002","墨江哈尼族自治县（联珠镇）")
c.addCity("p101035064003","景东彝族自治县（锦屏镇）")
c.addCity("p101035064004","景谷傣族彝族自治县（威远镇）")
c.addCity("p101035064005","镇沅彝族哈尼族拉祜族自治县（恩乐镇）")
c.addCity("p101035064006","江城哈尼族彝族自治县（勐烈镇）")
c.addCity("p101035064007","孟连傣族拉祜族佤族自治县（孟连镇）")
c.addCity("p101035064008","澜沧拉祜族自治县（勐朗镇）")
c.addCity("p101035064009","西盟佤族自治县（勐梭乡）")
p1.addProvinces(c);	
c = new provinceCN("云南","p101035012","昭通地区")
c.addCity("p101035012001","鲁甸（文屏镇）")
c.addCity("p101035012002","巧家（新华镇）")
c.addCity("p101035012003","盐津（盐井镇）")
c.addCity("p101035012004","大关（翠华镇）")
c.addCity("p101035012005","永善（景新镇）")
c.addCity("p101035012006","绥江（中城镇）")
c.addCity("p101035012007","镇雄（乌峰镇）")
c.addCity("p101035012008","彝良（角奎镇）")
c.addCity("p101035012009","威信（扎西镇）")
c.addCity("p101035012010","水富（云富镇）")
p1.addProvinces(c);	
c = new provinceCN("云南","p101035013","临沧地区")
c.addCity("p101035013001","临沧（凤翔镇）")
c.addCity("p101035013002","凤庆（凤山镇）")
c.addCity("p101035013003","云县（爱华镇）")
c.addCity("p101035013004","永德（德党镇）")
c.addCity("p101035013005","镇康（凤尾镇）")
c.addCity("p101035013006","双江拉祜族佤族布朗族傣族自治县（勐勐镇）")
c.addCity("p101035013007","耿马傣族佤族自治县（耿马镇）")
c.addCity("p101035013008","沧源佤族自治县（勐董镇）")
p1.addProvinces(c);	
c = new provinceCN("云南","p101035014","文山壮族苗族自治州")
c.addCity("p101035014001","文山（开化镇）")
c.addCity("p101035014002","砚山（江那镇）")
c.addCity("p101035014003","西畴（西洒镇）")
c.addCity("p101035014004","麻栗坡（麻栗镇）")
c.addCity("p101035014005","马关（马白镇）")
c.addCity("p101035014006","丘北（锦屏镇）")
c.addCity("p101035014007","广南（莲城镇）")
c.addCity("p101035014008","富宁（新华镇）")
p1.addProvinces(c);	
c = new provinceCN("云南","p101035015","红河哈尼族彝族自治州（个旧市）")
c.addCity("p101035015001","开远")
c.addCity("p101035015002","蒙自（文澜镇）")
c.addCity("p101035015003","绿春（大兴镇）")
c.addCity("p101035015004","建水（临安镇）")
c.addCity("p101035015005","石屏（异龙镇）")
c.addCity("p101035015006","弥勒（弥阳镇）")
c.addCity("p101035015007","泸西（中枢镇）")
c.addCity("p101035015008","元阳（南沙镇）")
c.addCity("p101035015009","红河（迤萨镇）")
c.addCity("p101035015010","金平苗族瑶族傣族自治县（金河镇）")
c.addCity("p101035015011","河口瑶族自治县（河口镇）")
c.addCity("p101035015012","屏边苗族自治县（玉屏镇）")
p1.addProvinces(c);	
c = new provinceCN("云南","p101035016","楚雄彝族自治州")
c.addCity("p101035016001","双柏（妥甸镇）")
c.addCity("p101035016002","牟定（共和镇）")
c.addCity("p101035016003","南华（龙川镇）")
c.addCity("p101035016004","姚安（栋川镇）")
c.addCity("p101035016005","大姚（金碧镇）")
c.addCity("p101035016006","永仁（永定镇）")
c.addCity("p101035016007","元谋（元马镇）")
c.addCity("p101035016008","武定（定城镇）")
c.addCity("p101035016009","禄丰（金山镇）")
p1.addProvinces(c);	
c = new provinceCN("云南","p101035017","西双版纳傣族自治州（景洪市）")
c.addCity("p101035017001","景洪")
c.addCity("p101035017002","勐海（象山镇）")
c.addCity("p101035017003","勐腊（勐腊镇）")
p1.addProvinces(c);	
c = new provinceCN("云南","p101035018","德宏傣族景颇族自治州")
c.addCity("p101035018001","潞西")
c.addCity("p101035018002","瑞丽（畹町镇）")
c.addCity("p101035018003","梁河（遮岛镇）")
c.addCity("p101035018004","盈江（平原镇）")
c.addCity("p101035018005","陇川（章凤镇）")
p1.addProvinces(c);	
c = new provinceCN("云南","p101035019","怒江傈僳族自治州")
c.addCity("p101035019001","泸水（鲁掌镇）")
c.addCity("p101035019002","福贡（上帕镇）")
c.addCity("p101035019003","贡山独龙族怒族自治县（茨开镇）")
c.addCity("p101035019004","兰坪白族普米族自治县（金顶镇）")
p1.addProvinces(c);	
c = new provinceCN("云南","p101035020","迪庆藏族自治州")
c.addCity("p101035020001","中甸（建塘镇）")
c.addCity("p101035020002","德钦（升平镇）")
c.addCity("p101035020003","维西傈僳族自治县（龙川镇）")
p1.addProvinces(c);	
provincesListArr = provincesListArr.concat(p1);	
var p1 = new provincesList("CN","p101036","浙江");
c = new provinceCN("浙江","p101036001","金华市")
c.addCity("p101036001001","兰溪（兰江镇）")
c.addCity("p101036001002","永康（古丽镇）")
c.addCity("p101036001003","义乌（稠城镇）")
c.addCity("p101036001004","东阳（吴宁镇）")
c.addCity("p101036001005","武义（武阳镇）")
c.addCity("p101036001006","浦江（浦阳镇）")
c.addCity("p101036001007","磐安（安文镇）")
p1.addProvinces(c);	
c = new provinceCN("浙江","p101036002","宁波市")
c.addCity("p101036002001","慈溪（浒山镇）")
c.addCity("p101036002002","余姚（余姚镇）")
c.addCity("p101036002003","奉化（大桥镇）")
c.addCity("p101036002004","鄞县（宁波市江东区）")
c.addCity("p101036002005","宁海（城关镇）")
c.addCity("p101036002006","象山（丹城镇）")
p1.addProvinces(c);	
c = new provinceCN("浙江","p101036003","绍兴市")
c.addCity("p101036003001","诸暨（城关镇）")
c.addCity("p101036003002","上虞（百官镇）")
c.addCity("p101036003003","嵊州（城关镇）")
c.addCity("p101036003004","新昌（城关镇）")
p1.addProvinces(c);	
c = new provinceCN("浙江","p101036004","温州市")
c.addCity("p101036004001","瑞安（城关镇）")
c.addCity("p101036004002","乐清（乐成镇）")
c.addCity("p101036004003","永嘉（上塘镇）")
c.addCity("p101036004004","文成（大峃镇）")
c.addCity("p101036004005","平阳（昆阳镇）")
c.addCity("p101036004006","泰顺（罗阳镇）")
c.addCity("p101036004007","洞头（北岙镇）")
c.addCity("p101036004008","苍南（灵溪镇）")
p1.addProvinces(c);	
c = new provinceCN("浙江","p101036005","嘉兴市")
c.addCity("p101036005001","平湖（城关镇）")
c.addCity("p101036005002","海宁（硖石镇）")
c.addCity("p101036005003","桐乡（梧桐镇）")
c.addCity("p101036005004","嘉善（魏塘镇）")
c.addCity("p101036005005","海盐（武原镇）")
p1.addProvinces(c);	
c = new provinceCN("浙江","p101036006","台州市")
c.addCity("p101036006001","临海（城关镇）")
c.addCity("p101036006002","温岭（太平镇）")
c.addCity("p101036006003","三门（海游镇）")
c.addCity("p101036006004","天台（城关镇）")
c.addCity("p101036006005","仙居（城关镇）")
c.addCity("p101036006006","玉环（城关镇）")
c.addCity("p101036006007","黄岩")
p1.addProvinces(c);	
c = new provinceCN("浙江","p101036007","湖州市")
c.addCity("p101036007001","长兴（雉城镇）")
c.addCity("p101036007002","德清（武康镇）")
c.addCity("p101036007003","安吉（递铺镇）")
p1.addProvinces(c);	
c = new provinceCN("浙江","p101036008","舟山市")
c.addCity("p101036008001","岱山（高亭镇）")
c.addCity("p101036008002","嵊泗（菜园镇）")
p1.addProvinces(c);	
c = new provinceCN("浙江","p101036009","衢州市")
c.addCity("p101036009001","江山（须江镇）")
c.addCity("p101036009002","衢县（衢州市柯城区）")
c.addCity("p101036009003","常山（天马镇）")
c.addCity("p101036009004","开化（城关镇）")
c.addCity("p101036009005","龙游（龙游镇）")
p1.addProvinces(c);	
c = new provinceCN("浙江","p101036010","丽水市")
c.addCity("p101036010001","缙云（五云镇）")
c.addCity("p101036010002","青田（鹤城镇）")
c.addCity("p101036010003","云和（云和镇）")
c.addCity("p101036010004","遂昌（妙高镇）")
c.addCity("p101036010005","松阳（西屏镇）")
c.addCity("p101036010006","庆元（松源镇）")
c.addCity("p101036010007","龙泉（龙渊镇）")
c.addCity("p101036010008","景宁畲族自治县（鹤溪镇）")
p1.addProvinces(c);	
c = new provinceCN("浙江","p101036014","杭州市")
c.addCity("p101036014001","余杭（临平镇）")
c.addCity("p101036014002","萧山（城厢镇）")
c.addCity("p101036014003","临安（锦城镇）")
c.addCity("p101036014004","富阳（富阳镇）")
c.addCity("p101036014005","建德（新安江镇）")
c.addCity("p101036014006","桐庐（桐庐镇）")
c.addCity("p101036014007","淳安（千岛湖镇）")
p1.addProvinces(c);	
provincesListArr = provincesListArr.concat(p1);	
var p1 = new provincesList("CN","p101037","重庆");
c = new provinceCN("重庆","p101037001001","涪陵区")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001005","万州区")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001006","江北区")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001007","渝中区")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001008","巴南区")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001009","沙坪坝区")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001013","万盛区")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001014","南岸区")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001015","北碚区")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001016","渝北区")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001017","九龙坡区")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001018","大渡口区")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001019","双桥区")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001020","永川区")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001021","合川区")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001022","江津区")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001023","南川区")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001025","长寿区")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001024","綦江（古南镇）")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001026","潼南（梓潼镇）")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001027","荣昌（昌元镇）")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001028","璧山（璧城镇）")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001029","大足（龙岗镇）")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001030","铜梁（巴川镇）")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001031","梁平（梁山镇）")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001032","城口（葛城镇）")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001033","垫江（桂溪镇）")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001034","武隆（巷口镇）")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001035","丰都（三合镇）")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001036","奉节（永安镇）")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001037","开县（汉丰镇）")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001038","云阳（青龙嘴）")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001039","忠县（忠州镇）")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001040","巫溪（城厢镇）")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001041","巫山（巫峡镇）")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001043","石柱土家族自治县（南宾镇）")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001044","酉阳土家族苗族自治县（钟多镇）")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001045","秀山土家族苗族自治县（中和镇）")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001046","彭水土家族苗族自治县（汉葭镇）")
p1.addProvinces(c);
c = new provinceCN("重庆","p101037001047","黔江开发区")
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


cur = new Country("CN","中国", "86", "1");
CountryArrHot = CountryArrHot.concat(cur);
CountryArrCN = CountryArrCN.concat(cur);


cur.addBoard(new Board("CN","p101001","安徽"))
cur.addBoard(new Board("CN","p101002","北京"))
cur.addBoard(new Board("CN","p101003","海南"))
cur.addBoard(new Board("CN","p101004","福建"))
cur.addBoard(new Board("CN","p101005","甘肃"))
cur.addBoard(new Board("CN","p101006","广东"))
cur.addBoard(new Board("CN","p101007","广西"))
cur.addBoard(new Board("CN","p101008","贵州"))
cur.addBoard(new Board("CN","p101010","河北"))
cur.addBoard(new Board("CN","p101011","黑龙江"))
cur.addBoard(new Board("CN","p101012","河南"))
cur.addBoard(new Board("CN","p101013","香港"))
cur.addBoard(new Board("CN","p101014","湖北"))
cur.addBoard(new Board("CN","p101015","湖南"))
cur.addBoard(new Board("CN","p101016","江苏"))
cur.addBoard(new Board("CN","p101017","江西"))
cur.addBoard(new Board("CN","p101018","吉林"))
cur.addBoard(new Board("CN","p101019","辽宁"))
cur.addBoard(new Board("CN","p101020","澳门"))
cur.addBoard(new Board("CN","p101021","内蒙古"))
cur.addBoard(new Board("CN","p101022","宁夏"))	
cur.addBoard(new Board("CN","p101024","青海"))
cur.addBoard(new Board("CN","p101025","陕西"))
cur.addBoard(new Board("CN","p101026","山东"))
cur.addBoard(new Board("CN","p101027","上海"))
cur.addBoard(new Board("CN","p101028","山西"))
cur.addBoard(new Board("CN","p101029","四川"))
cur.addBoard(new Board("CN","p101030","台湾"))
cur.addBoard(new Board("CN","p101031","天津"))
cur.addBoard(new Board("CN","p101033","新疆"))
cur.addBoard(new Board("CN","p101034","西藏"))
cur.addBoard(new Board("CN","p101035","云南"))
cur.addBoard(new Board("CN","p101036","浙江"))
cur.addBoard(new Board("CN","p101037","重庆"))
cur.addBoard(new Board("CN","p101023","世界各国/地区"))
cur.addBoard(new Board("CN","国家或省份","国家或省份"))

/*cur = new Country("HK","中国香港", "852", "2");
CountryArrHot = CountryArrHot.concat(cur);
CountryArrCN = CountryArrCN.concat(cur);


cur = new Country("TW","中国台湾", "886", "2");
CountryArrHot = CountryArrHot.concat(cur);
CountryArrCN = CountryArrCN.concat(cur);

cur = new Country("SG","Singapore", "65", "0");
CountryArrHot = CountryArrHot.concat(cur);
CountryArrCN = CountryArrCN.concat(cur);

cur = new Country("SelectCountries","其他国家/地区", "", "0");
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
