



///ESRİ
require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Locate",
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
    "esri/popup/content/ImageMediaInfo",

    ], function (esriConfig,Map, MapView,Locate,Graphic,GraphicsLayer) {
  
  
  filtrele(esriConfig,Map, MapView,Locate,Graphic,GraphicsLayer )
     })





function filtrele(esriConfig,Map, MapView,Locate,Graphic,GraphicsLayer){






  // map oluşturma
    const map = new Map({
     basemap: "gray-vector" 
   });
 
 
 
   const view = new MapView({
     map: map,
     center: [29, 41], 
     zoom: 8,
     container: "viewDiv",
     navigationMode: "classic",
     fadeOnZoom: false,
     force3DTransforms: true,
     navigationMode: "css-transforms",
     showAttribution: false,
    
  })
 

  ///////////////// kullanıcı konumu
  const locate = new Locate({
   view: view,
   useHeadingEnabled: false,
   goToOverride: function(view, options) {
     options.target.scale = 1500;
     return view.goTo(options.target);
   }
 });
 view.ui.add(locate, "top-right");
 

      

//////////////// yol bakım çalışmaları için filtreleme fonksiyonu

  document.getElementById('sbmt').onclick = function() {

 // İlçe değişiminde önceki markerların silinmesi
if (typeof grplayers !== 'undefined')
{


 map.removeAll(grplayers);


}

//Verinin çekilmesi


  let data = fetch("https://api.ibb.gov.tr/teas/api/open_data")
  .then( res => res.json())
  .then( function (veri)
  {
  
  limit=Object.keys(veri.features).length
 
 var ilce= document.getElementById('ilceler').value;

 grplayers= new GraphicsLayer();
 
  for(i=0; i<limit ; i++)
  {
  
 if(veri.features[i].properties["ilce"]== ilce) {
  
  var enlem=veri.features[i].properties["lat"];
  var boylam= veri.features[i].properties["lon"];
 
  
    
  
  // points
  const points= {
    type:"point",
    longitude: boylam,
    latitude: enlem
    };
    // symbol of points
    const pointsymbol={
        type: "simple-marker",
        color: [45, 123, 197],  // 
        outline: {
            color: [188, 192, 251], // 
            width: 2
        }
    
    };
    //popups
    const popup1={
    title:"{baslik}",
    content:"{tanım}"
    }
    // popups içerik
    
    const data={
    baslik:"Çalışmanın Özellikleri ",
    tanım:"İlçe: "+ veri.features[i].properties["ilce"] +"<br>" +  "İşin adı: " + veri.features[i].properties["isin_adi"] +  "<br>" + "İşin cinsi: " + veri.features[i].properties["isin_cinsi"] + 
    "<br>" +"Tarih: " + veri.features[i].properties["tarih"]  +"<br>" +  "Gece çalışma durumu: " + veri.features[i].properties["gece"] 
    };
 
 
    var pointgrap= new Graphic ({
      geometry:points,
      symbol:pointsymbol,
      attributes:data,
      popupTemplate:popup1,
      idAttribute : "id", 
      idValue : 1
      });

   


    
      grplayers.add(pointgrap);
      
    
      map.add(grplayers);
  
      
   


  
    
 
 
  }
  }


// seçilen ilçeye harita goTo

let length = Object.keys(ilceler).length;

for(i=0;i<length;i++){

if(ilceler[i].ilce==String(ilce))
{
var x=ilceler[i].enlem;
var y=ilceler[i].boylam;
}

}
  


  view.goTo({center:[y,x] , zoom:11});
 

});

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// metro HARİTA
document.getElementById('sbmt2').onclick=function metro()
{


let data1= fetch('https://api.ibb.gov.tr/MetroIstanbul/api/MetroMobile/V2/GetStations')
.then(res => res.json())
.then(function(veri)
{
limit=Object.keys(veri.Data).length;

for(i=0; i<limit;i++)
{
var enlem=veri.Data[i]['DetailInfo']['Latitude'];
var boylam=veri.Data[i]['DetailInfo']['Longitude'];

grplayers= new GraphicsLayer();

const points= {
  type:"point",
  longitude: boylam,
  latitude: enlem
  };

  const pointsymbol={
    type: "simple-marker",
    color: [237, 155, 1],  // 
    outline: {
        color: [188, 192, 251], // 
        width: 2
    }

};

const att={
title:"{baslik}",
content:"{content}"

}



var pointgrap= new Graphic ({
  geometry:points,
  symbol:pointsymbol
  });





  grplayers.add(pointgrap);
  

  map.add(grplayers);

  


}
})


 
 
 
 
 
 
const options = {
  speedFactor: 0.1,
  easing: "linear"
};
view.goTo({center:[29.0380468622712,41.04739197756364] , zoom:10},options);

}




document.getElementById('sbmt1').onclick=function otopark() 
{

let data2=fetch('https://api.ibb.gov.tr/ispark/Park')
.then(res => res.json())
.then( function(veri)
{

limit=Object.keys(veri).length;


console.log(veri[5])
var ilçe=document.getElementById('ilceler1').value;




 for(i=0;i<limit;i++)
 {


if(ilçe==veri[i]['district'])
{
 var enlem=veri[i]['lat'];
 var boylam=veri[i]['lng'];

 console.log("match");

 const point={
type:"point",
longitude:boylam,
latitude:enlem
};

var pointsymbol={
type:"simple-marker",
color:(231, 176, 245),
outline:{
  color: [231, 176, 245], // 
  width: 2
}
}

//popups
const popup2={
title:"{baslik}",
content:"{content}",
}

const attribute={
baslik: "İspark Otoparklar",
content:"Park adı: " + veri[i]['parkName'] + "<br>" + "İlçesi: " + veri[i]['district']+ "<br>" + "Toplam kapasite: "+ veri[i]['capacity'] + "<br>" + "Boş kapasite:" + veri[i]['emptyCapacity'] + "<br>" + "Park tipi: " + veri[i]['parkType']+ "<br>" + "Çalışma saatleri: " + veri[i]['workHours']
}


grplayers= new GraphicsLayer();

var pointgrap=new Graphic ({
geometry:point,
symbol:pointsymbol,
attributes:attribute,
popupTemplate:popup2,

});
grplayers.add(pointgrap);
map.add(grplayers);

}




}


// seçilen ilçeye harita goTo

let length = Object.keys(ilceler).length;

for(i=0;i<length;i++){

if(ilceler[i].ilce==String(ilçe))
{
var x=ilceler[i].enlem;
var y=ilceler[i].boylam;
}


}
  


  view.goTo({center:[y,x] , zoom:10});
 







}




) 



}





//
};
  
  

