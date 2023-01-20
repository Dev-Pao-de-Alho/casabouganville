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
let auxTestimonial = document.getElementById("test").style.transform;
console.log(auxTestimonial);
let contador = 0;

document.getElementById("right").addEventListener("click", () => {
  if (auxTestimonial == "" || auxTestimonial == "translateX(-0px)") {
    auxTestimonial = "translateX(-750px)";
  } else {
    if (auxTestimonial.length >= 18) {
      auxTestimonial = `translateX(${auxTestimonial.slice(11, 15) - 750}px)`;
      console.log(auxTestimonial);
    }
  }

  if (contador >= 2) {
    auxTestimonial = "translateX(-0px)";
    document.getElementById("test").style.transform = auxTestimonial;
    contador = 0;
  } else {
    document.getElementById("test").style.transform = auxTestimonial;
    contador += 1;
  }
  console.log(auxTestimonial);
});
