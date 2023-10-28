let searchBtn = document.querySelector("#searchBtn");
let searchForm = document.querySelector(".search-form");
loginForm = document.querySelector(".loginForm");
let menuBar = document.querySelector("#menu_bar");
let ancoreMenu = document.querySelector(".navBar");
let videoBtn = document.querySelectorAll(".video-btn");

function showBar() {
  searchBtn.classList.toggle("fa-times");
  searchForm.classList.toggle("active");
}

function showForm() {
  loginForm.classList.add("active");
}
function closeForm() {
  loginForm.classList.remove("active");
}

function showmenu() {
  menuBar.classList.toggle("fa-times");
  ancoreMenu.classList.toggle("active");
}
videoBtn.forEach((slide) => {
  slide.addEventListener("click", function () {
    document.querySelector(".blue").classList.remove("blue");
    slide.classList.add("blue");
    let srcVideo = slide.getAttribute("data-src");
    document.querySelector("#video-slider").src = srcVideo;
  });
});
// /login Div
document.getElementById("loginForm").addEventListener("submit", function (el) {
  el.preventDefault(); // Prevent form submission

  // Retrieve form values
  let username = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let invalid = document.getElementById("invalid");

  // Perform login logic
  if (username === "ahmed@gmail.com" && password === "password") {
    // Successful login
    window.location.href = "http://127.0.0.1:5500/form.html" ;
  } else {
    // Incorrect credentials
    invalid.innerHTML = "Invalid User Name or Password";
  }
});
////////////////////////////////////////////////////////////
var swiper = new Swiper(".reviewSlider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    640: {
      slideseperview: 1,
    },
    768: {
      slideseperview: 2,
    },
    1024: {
      slideseperview: 3,
    },
  },
});
////////////////////////////////////////////////////////////////////

// Booking

let bockNow = document.getElementById('bookNow');
bockNow.onclick = function hmada () {
  // e.preventDefault();
  let name = document.getElementById('name').value;
  let phone = document.getElementById('phone').value;
  let email = document.getElementById('email').value;
  let Package = document.getElementById('Package').value;
  let passengers = document.getElementById('passengers').value;
  let leaving = document.getElementById('leaving').value;
  let arrival = document.getElementById('arrival').value;

  if (name === '' || passengers === '' || phone === '' || email === '' || Package === '' || leaving === '' || arrival === '' ) {
    alert('   Please Enter Booking');
    return;
  }

  let newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${phone}</td>
    <td>${email}</td>
    <td>${Package}</td>
    <td>${passengers}</td>
    <td>${leaving}</td>
    <td>${arrival}</td>
  `;
  window.localStorage.setItem("name" , `${name}`);
  document.getElementById('dataTable').getElementsByTagName('tbody')[0].appendChild(name);
  window.localStorage.getItem(name);
  document.getElementById('dataTable').getElementsByTagName('tbody')[0].appendChild(newRow);

  // document.getElementById('formData').reset();
};




// document.getElementById('bookNow').addEventListener('click', function(e) {
//   e.preventDefault();

//   let name = document.getElementById('name').value;
//   let phone = document.getElementById('phone').value;
//   let email = document.getElementById('email').value;
//   let package = document.getElementById('package').value;
//   let passengers = document.getElementById('passengers').value;
//   let leaving = document.getElementById('leaving').value;
//   let arrival = document.getElementById('arrival').value;

//   if (name === '' || passengers === '' || phone === '' || email === '' || package === '' || leaving === '' || arrival === '' ) {
//     alert('   Please Enter Booking');
//     return;
//   }

//   let newRow = document.createElement('tr');
//   newRow.innerHTML = `
//     <td>${name}</td>
//     <td>${phone}</td>
//     <td>${email}</td>
//     <td>${package}</td>
//     <td>${passengers}</td>
//     <td>${leaving}</td>
//     <td>${arrival}</td>
//   `;

//   document.getElementById('dataTable').getElementsByTagName('tbody')[0].appendChild(newRow);

//   document.getElementById('formData').reset();
// });
