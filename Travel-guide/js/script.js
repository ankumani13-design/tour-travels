/* 🌍 Fetch destinations safely */
const container = document.getElementById("destinations");

if(container){
  fetch("backend/getDestinations.php")
    .then(response => response.json())
    .then(data => displayDestinations(data));
}

function displayDestinations(data) {
  if(!container) return;

  container.innerHTML = "";

  data.forEach(place => {
    container.innerHTML += `
      <div class="card">
        <img src="${place.image}" alt="${place.name}">
        <h3>${place.name}</h3>
        <p>${place.location}</p>
        <p>⭐ ${place.rating}</p>
        <p>Budget: ${place.budget}</p>
      </div>
    `;
  });
}

/* 🔎 Search feature */
const searchInput = document.querySelector(".search-box input[type='text']");
if(searchInput){
  searchInput.addEventListener("keyup", function() {
    let value = this.value.toLowerCase();

    fetch("backend/getDestinations.php")
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(place =>
          place.name.toLowerCase().includes(value)
        );
        displayDestinations(filtered);
      });
  });
}



/* ✅ Live budget update */
const range = document.getElementById("budgetRange");
const value = document.getElementById("budgetValue");

if(range && value){
  value.innerText = "₹" + range.value;

  range.addEventListener("input", ()=>{
    value.innerText = "₹" + range.value;
  });
}

/* ✅ Login popup */
const modal = document.getElementById("loginModal");
const btn = document.getElementById("loginBtn");
const close = document.querySelector(".close");

if(btn && modal){
  btn.onclick = (e)=>{
    e.preventDefault();
    modal.style.display="block";
  };
}

if(close && modal){
  close.onclick = ()=> modal.style.display="none";
}

window.onclick = (e)=>{
  if(e.target==modal) modal.style.display="none";
}