// Carrosel
let aux = document.getElementById("images").style.transform;
console.log(aux);

document.getElementById("btnRight").addEventListener("click", () => {
  if (aux == "" || aux == "translateX(0%)") {
    aux = "translateX(-100%)";
  } else {
    if (aux.length >= 18) {
      aux = `translateX(${aux.slice(11, 16) - 100}%)`;
    } else {
      aux = `translateX(${aux.slice(11, 15) - 100}%)`;
    }
  }

  if (aux === "translateX(-1200%)") {
    aux = "translateX(0%)";
  }
  document.getElementById("images").style.transform = aux;
});

document.getElementById("btnLeft").addEventListener("click", () => {
  if (aux == "" || aux == "translateX(0%)") {
    aux = "translateX(-1100%)";
  } else {
    if (aux.length >= 18) {
      aux = `translateX(${Number(aux.slice(11, 16)) + 100}%)`;
    } else {
      aux = `translateX(${Number(aux.slice(11, 15)) + 100}%)`;
    }
  }
  document.getElementById("images").style.transform = aux;
});

// -------------------------------------------------------------

// Choice function
function mudaCarrosel(id) {
  let multiply = id * 100;

  if (id == 0) {
    document.getElementById(
      "images"
    ).style.transform = `translateX(-${multiply}%)`;
    aux = `translateX(${multiply}%)`;
  } else {
    document.getElementById(
      "images"
    ).style.transform = `translateX(-${multiply}%)`;
    aux = `translateX(-${multiply}%)`;
  }
}

// -------------------------------------------------------------

// Testimonials
let testimonials = document.getElementById("test");
let user = testimonials.getElementsByClassName("user");
let currentIndex = 0;

document.getElementById("right").addEventListener("click", () => {
  user[currentIndex].classList.remove("user-active");
  currentIndex = (currentIndex + 1) % user.length;
  user[currentIndex].classList.add("user-active");
});

document.getElementById("left").addEventListener("click", () => {
  user[currentIndex].classList.remove("user-active");
  if (currentIndex == 0) {
    currentIndex = user.length - 1;
  } else {
    currentIndex = (currentIndex - 1) % user.length;
  }
  user[currentIndex].classList.add("user-active");
});
