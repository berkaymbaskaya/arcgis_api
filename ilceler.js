var ilceler=[
{
"ilce":"ADALAR",
"enlem":40.87441360261631, 
"boylam":29.094577678700336
},

{
"ilce":"ARNAVUTKÖY",
"enlem":41.20349122369504,
"boylam":28.737397857283177
},
{
"ilce":"ATAŞEHİR",
"enlem":40.98838984404253, 
"boylam":29.131847884987277
},

{
"ilce":"AVCILAR",
"enlem":40.98203359684968,
"boylam": 28.720429094399243
},
 {
"ilce":"BAĞCILAR",
"enlem":41.04589190118722, 
"boylam":28.837443820411856
},

 {
"ilce":"BAHÇELİEVLER",
"enlem":40.997499492152976, 
"boylam":28.85104142309973
},
 {
"ilce":"BAKIRKÖY",
"enlem":40.97971159447579, 
"boylam":28.84554629386337
},
 {
"ilce":"BAŞAKŞEHİR",
"enlem":41.085625874858756, 
"boylam":28.81615414354657
},
   
 {
"ilce":"BAYRAMPAŞA",
"enlem":41.05102939672299, 
"boylam":28.89856390752646
},
   
 {
"ilce":"BEŞİKTAŞ",
"enlem":41.070071508208464, 
"boylam":29.028637298573233
},

 {
"ilce":"BEYKOZ",
"enlem":41.153151615806046, 
"boylam":29.19868266192951
 },
 {
"ilce":"BEYLİKDÜZÜ",
"enlem":40.976426324932724, 
"boylam":28.64872519596556
 },

 {
"ilce":"BEYOĞLU",
"enlem":41.03865644880664, 
"boylam":28.97766539844939
 },
 {
"ilce":"BÜYÜKÇEKMECE",
"enlem":41.054649775523195,
"boylam": 28.558872719268795
 },
 {
"ilce":"ÇATALCA",
"enlem":41.143678811238516, 
"boylam": 28.461430644824226
 },

 {
"ilce":"ÇEKMEKÖY",
"enlem":41.08319824815407, 
"boylam": 29.2940979446699
 },

 {
"ilce":"ESENLER",
"enlem":41.07779556331328, 
"boylam": 28.86104189695472
},

 {
"ilce":"ESENYURT",
"enlem":41.02972326653905, 
"boylam": 28.674475335517247
},
 {
"ilce":"EYÜPSULTAN",
"enlem":41.162005834276435, 
"boylam": 28.90557923943339
},

 {
"ilce":"FATİH",
"enlem":41.01237642085441, 
"boylam": 28.951099628664196
},

 {
"ilce":"GAZİOSMANPAŞA",
"enlem":41.082292740635765,
"boylam":  28.89837419017234
},
 {
"ilce":"GÜNGÖREN",
"enlem":41.01958593979531, 
"boylam":28.87549760874665
},
 {
"ilce":"KADIKÖY",
"enlem":40.97497369447907,
"boylam":29.06316805379576
},
 {
"ilce":"KAĞITHANE",
"enlem":41.088068051719446, 
"boylam":28.98015676427778
},
 {
"ilce":"KARTAL",
"enlem":40.90578668373043,
"boylam":29.19481934341851
},
 {
"ilce":"KÜÇÜKÇEKMECE",
"enlem":41.02570801979665, 
"boylam":28.78422319588334
},
 {
"ilce":"MALTEPE",
"enlem":40.941744885764955,
"boylam":29.142914471320566
},
 {
"ilce":"PENDİK",
"enlem":40.9014446077403, 
"boylam":29.275543453561323
},
 {
"ilce":"SANCAKTEPE",
"enlem":40.990811570495346,
"boylam":29.226591719155405
},
 {
"ilce":"SARIYER",
"enlem":41.166562696297156, 
"boylam":29.02461032166924
},

 {
"ilce":"SİLİVRİ",
"enlem":41.073129806603035, 
"boylam":28.246882388760536
},
 {
"ilce":"SULTANBEYLİ",
"enlem":40.96397370659728, 
"boylam":29.268542561387132
},
 {
"ilce":"ŞİLE",
"enlem":41.167979384588534, 
"boylam":29.596508194801608
},
 {
"ilce":"ŞİŞLİ",
"enlem":41.060325779786616,
"boylam":28.988914931028336
},
 {
"ilce":"TUZLA",
"enlem":40.87340791279424, 
"boylam":29.339366621918188
},
 {
"ilce":"ÜMRANİYE",
"enlem":41.03528346407982, 
"boylam":29.102072149343037
},
 {
"ilce":"ÜSKÜDAR",
"enlem":41.03204421939131, 
"boylam":29.051513991883816
},
 {
"ilce":"ZEYTİNBURNU",
"enlem":40.99387933577631, 
"boylam":28.89434433025164
},


]


ilce_sayısı=ilceler.length;
var select=document.getElementById('ilceler');
var select1=document.getElementById('ilceler1');

for(i=0; i<ilce_sayısı;i++)
{

var elemanlar = document.createElement("option");
elemanlar.textContent = ilceler[i]['ilce'];
elemanlar.value = ilceler[i]['ilce'];
select.appendChild(elemanlar);

}

for(i=0; i<ilce_sayısı;i++)
{

var elemanlar = document.createElement("option");
elemanlar.textContent = ilceler[i]['ilce'];
elemanlar.value = ilceler[i]['ilce'];
select1.appendChild(elemanlar);

}

