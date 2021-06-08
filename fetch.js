const URL = `https://restcountries.eu/rest/v2/all?fields=name;flag;currencies;population`;
const state = {};

async function getData(){
    try {
        var response = await fetch(URL); // fetch is asynchronous and therefore must be awaited
        var body = await response.json(); // .json() is asynchronous and therefore must be awaited
        //this.state = loadData(body);
        

    } catch(error) {
        console.log(error);
    }
}

function loadData(items){
let html = ``;
    items.forEach(el => {
        html += `
        <article>
            <img src="${el.flag}" alt="">
            <h2>
                ${el.name}
            </h2>
            <ul>
             <li>CUR : ${el.currencies[0].name}</li>
             <li>POP : ${el.population}</li>
            </ul>
        </article>
        `;
    });
    document.getElementById('countriesList').insertAdjacentHTML("beforeend", html);
    return items;
}



window.onload = getData;

