// YOL BAKIM FİLTRE PENCERESİNİN AÇILMASI




document.getElementById('i1').onclick= function roadmenu()
{
document.getElementById('sidebar').style.opacity='100';
document.getElementById('sidebar').style.zIndex='999';
}


// X ikonunaTIKLAYARAK KAPATMA

document.getElementById('close').onclick= function ()
{
document.getElementById('sidebar').style.opacity='0';
document.getElementById('sidebar').style.zIndex='-1';

}

// OTOPARK FİLTRELEME 

document.getElementById('i2').onclick=function()
{
document.getElementById('sidebar2').style.opacity='100';
document.getElementById('sidebar2').style.zIndex='999';

}


document.getElementById('close1').onclick= function ()
{
document.getElementById('sidebar2').style.opacity='0';
document.getElementById('sidebar2').style.zIndex='-1';

}

//metro gösterme
document.getElementById('i3').onclick=function()
{
  document.getElementById('sidebar3').style.opacity='100';
  document.getElementById('sidebar3').style.zIndex='999';
  
  }
  
  
  document.getElementById('close2').onclick= function ()
  {
  document.getElementById('sidebar3').style.opacity='0';
  document.getElementById('sidebar3').style.zIndex='-1';
  
  }