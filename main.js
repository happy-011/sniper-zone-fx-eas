const params=new URLSearchParams(window.location.search);

const id=params.get("id");

if(id){

const ea=expertAdvisors.find(x=>x.id==id);

if(ea){

document.title=ea.name;

document.getElementById("eaName").innerText=ea.name;

document.getElementById("eaPrice").innerText=ea.price;

document.getElementById("eaDescription").innerText=ea.description;

document.getElementById("coverImage").src=ea.cover;

document.getElementById("report1").src=ea.report1;

document.getElementById("report2").src=ea.report2;

document.getElementById("report3").src=ea.report3;

document.getElementById("report4").src=ea.report4;

}

}
