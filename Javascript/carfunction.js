let carlist=new Array("benz","BMW");

let adding=()=>
{
    let carlistadd=document.getElementById('cars').value;
    carlist.push(carlistadd)
    alert("the added car is"+ "  "+ carlistadd)
    Printall(); 

}
var Printall=()=>
{
    let abc="";
    carlist.map((mapping)=>{
        abc+="<th><tr><ul><li>"+mapping+"</li></ul></tr></th>"
     })
     document.getElementById('list').innerHTML="<table><thead><th ><tr>CARLIST</tr></th></thead> <tbody>" +abc+"</tbody></table>"
}