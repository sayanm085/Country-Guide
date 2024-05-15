let button=document.querySelector("button")
let input=document.querySelector("input")
let img=document.querySelector("img")
let cname=document.querySelector(".cname")
let capitalname=document.querySelector(".capital")
let continentname=document.querySelector(".continent")
let popcount=document.querySelector(".popcount")
let currencifull=document.querySelector(".currenci")
let languag=document.querySelector(".languag")




let maindisplay=document.querySelector(".maininfo")




let url=()=>{
    let getinput=input.value
    let mainurl=`https://restcountries.com/v3.1/name/${getinput}?fullText=true`
    return mainurl;
}


let info= async()=>{
let respons= await fetch (url());
let filter = await respons.json()
console.log(filter)




let flag=filter[0].flags.svg;
let cnname=filter[0].name.common;
let capital=filter[0].capital[0];
let continents=filter[0].continents[0];
let humantotal=filter[0].population;
let currenci=`${filter[0].currencies[Object.keys(filter[0].currencies)].name} - ${(Object.keys(filter[0].currencies)[0])} ${filter[0].currencies[Object.keys(filter[0].currencies)].symbol}`
let langu=Object.values(filter[0].languages).toString().split(",").join(", ");


maindisplay.style.display="flex"


cname.innerText=`${cnname}`
img.src=`${flag}`
capitalname.innerText=`${capital}`
continentname.innerText=`${continents}`
popcount.innerText=`${humantotal}`
currencifull.innerText=`${currenci}`
languag.innerText=`${langu}`

}


button.addEventListener("click",info)