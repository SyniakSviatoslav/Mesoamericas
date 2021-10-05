let cultureInput = document.getElementById('culture-input');
let typeInput = document.getElementById('type-input');
let techniqueInput = document.getElementById('technique-input');


class API { 
    constructor(apiUrl){ 
        this.apiUrl = apiUrl; 
    } 
 
    get(route){ 
        fetch(`${this.apiUrl}/${route}`) 
            .then(response => response.json()) 
            .then(data => console.log(data)); 
    } 
 
    post(route,data){ 
        fetch(`${this.apiUrl}/${route}`,{ 
            method: "POST", 
            body: JSON.stringify(data) 
        }) 
            .then(response => response.json()) 
            .then(data => console.log(data)); 
    } 
 
      put(route,data){ 
        fetch(`${this.apiUrl}/${route}`,{ 
            method: "PUT", 
            body: JSON.stringify(data) 
        }) 
            .then(response => response.json()) 
            .then(data => console.log(data)); 
    } 
 
      delete(route){ 
        fetch(`${this.apiUrl}/${route}`,{ 
            method: "DELETE", 
        }) 
            .then(response => response.json()) 
            .then(data => console.log(data)); 
    }  
 
} 

class EXHIBIT {
    constructor(culture, type, technique){
        this.culture = culture;
        this.type = type;
        this.technique = technique;
    }
}




let mesoamericasAPI = new API("https://615c91e3c29813001773625b.mockapi.io"); 
 
 
console.log(mesoamericasAPI) 
 
 
 
mesoamericasAPI.get("exhibits");

let submit = document.getElementById("submit");
submit.addEventListener("click", function createExhibit(){
    console.log(new EXHIBIT(cultureInput.value,typeInput.value,techniqueInput.value ));
    
})
// mesoamericasAPI.delete("exhibits/2"); 
// mesoamericasAPI.put("jobs/id",{name: "Dima new"}); 
// mesoamericasAPI.delete("jobs/id");
// mesoamericasAPI.post("exhibits",{culture: "Niger",}); 