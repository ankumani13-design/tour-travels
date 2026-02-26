const range = document.getElementById("budgetRange");
const price = document.getElementById("budgetValue");
const logoutBtn = document.getElementById("logoutBtn");

if (range && price) {
  range.addEventListener("input", () => {
    price.innerText = "₹" + range.value;
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (confirm("Are you sure you want to log out?")) {
      window.location.href = "../index.html";  // back to login
    }
  });
}

function openDetails(place) {
  alert("Opening details for " + place);
}

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    window.location.href = "../home.html";
  } else {
    document.getElementById("loginError").innerText = "Invalid login details";
  }
}

// Load theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

function toggleTheme() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}