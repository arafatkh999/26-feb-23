const loadCountry = async()=>{
    const url=`https://restcountries.com/v3.1/all`;
    const res =await fetch(url);
    const data = await res.json();
    displayCountry(data.slice(0,9));
};

const displayCountry=(countries)=>{
    const countryCard = document.getElementById('country-card');
    countryCard.innerHTML="";

    
countries.forEach(country=>{
    // console.log(country.cca2);
    const cardElement = document.createElement('div');
    cardElement.classList.add('col')
    cardElement.innerHTML=`
    <div class="card h-100">
  <img src="${country.coatOfArms.png ? country.coatOfArms.png:'https://picsum.photos/200/300' }" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${country.name.common}</h5>
    <p class="card-text">Population: ${country.population}</p>
    <p class="card-text">Region: ${country.region}</p>
    <button onclick="showDetails('${country.cca2}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Show  Details</button>
  </div>
</div>
    
    `;
    countryCard.appendChild(cardElement);
})
};

const showDetails=async(id)=>{
    // console.log(id);
    const url = `https://restcountries.com/v3.1/alpha/${id}`;
    // console.log(url);


//    fetch(url)
//    .then(res=>res.json())
//    .then(data=>console.log(data))


const res =await fetch(url);
const data =await res.json();
console.log(data[0]);
};

const showModalDetails =(id)=>{
    console.log(id.cca2);
    document.getElementById('exampleModalLabel').innerText=`${id.name.common} ${id.flag}`
}


loadCountry();


//Show All Data Button

const showAlldata=async()=>{
        const url=`https://restcountries.com/v3.1/all`;
        const res =await fetch(url);
        const data = await res.json();
        displayCountry(data);
    };

    document.getElementById('show-all').addEventListener('click',function(e){
        e.target.classList.add('d-none');
    })