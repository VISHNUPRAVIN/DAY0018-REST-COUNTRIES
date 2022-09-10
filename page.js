

let coun = fetch("https://restcountries.com/v3.1/all")
coun.then((data) => (data.json())).then((data1) => foo(data1));

function foo(arr) {
   for (i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      let vi = document.createElement("div");
      vi.setAttribute("class", "col-md-4")
      vi.innerHTML =
        `<div class="card">
            <h4 class="card-title1">${arr[i].name.common}</h4>
            <img src="${arr[i].flags.svg}" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title">Capital:${arr[i].capital}</h5>
                  <h5 class="card-title">Region:${arr[i].region}</h5>
                  <h5 class="card-title">Latlng:${arr[i].latlng}</h5>
                  <h5 class="card-title">Country code:${arr[i].cca3}</h5>
                  <a href= https://api.openweathermap.org/data/2.5/weather?lat=${arr[i].latlng[0]}&lon=${arr[i].latlng[1]}&appid=303a024b22cc8a748bcd281cdfcb25ab class="btn btn-primary">Check Weather</a>
              </div>
         </div>`
         document.getElementById("tc").append(vi)
   }
       
}