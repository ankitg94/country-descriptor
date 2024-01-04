function getapIData() {
   var name="bharat"
   var input =document.getElementById("search")
   if(input.value){
     name=input.value 
   }

    let request = new XMLHttpRequest()
    request.open("get",`https://restcountries.com/v3.1/name/${name}`)
    request.send()
    request.addEventListener("load",()=>{
     let [data]=JSON.parse(request.responseText)
     document.getElementById("name").innerHTML=(data.name.official)
     document.getElementById("capital").innerHTML=(data.capital[0])
     document.getElementById("flags").src=(data.flags.svg)
     document.getElementById("population").innerHTML=(data.population)
     document.getElementById("area").innerHTML=(data.area)
     document.getElementById("region").innerHTML=(data.region)
     document.getElementById("subregion").innerHTML=(data.subregion)
     document.getElementById("continents").innerHTML=(data.continents)
     document.getElementById("independent").innerHTML=(data.independent)
     document.getElementById("unMember").innerHTML=(data.unMember)
     document.getElementById("landlocked").innerHTML=(data.landlocked)
     document.getElementById("timezones").innerHTML=(data.timezones)
     document.getElementById("borders").innerHTML=(data.borders)
     document.getElementById("maps").href=(data.maps.googleMaps)
    })
}
getapIData()