
let data1= fetch('https://api.ibb.gov.tr/MetroIstanbul/api/MetroMobile/V2/GetStations')
.then(res => res.json())
.then(function(veri)
{
limit=Object.keys(veri.Data).length;
console.log(limit);
for(i=0; i<limit;i++)
{
var enlem=veri.Data[i]['DetailInfo']['Latitude'];
var boylam=veri.Data[i]['DetailInfo']['Longitude'];
}
})