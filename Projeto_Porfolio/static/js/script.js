let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')
let btnEnviar = document.getElementById("enviar")
let nomeOk = false
let emailOk = false
let msgOk = false
btnEnviar.disabled = true

nome.addEventListener('keyup', () => {
   if (nome.value.length < 3) {
      nome.style.borderColor = 'red'
      nomeOk = false
   } else {
      nome.style.borderColor = 'green'
      nomeOk = true
   }

   if (nomeOk && emailOk && msgOk) {
      btnEnviar.disabled = false
   } else {
      btnEnviar.disabled = true
   }
})

email.addEventListener('keyup', () => {
   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
      email.style.borderColor = 'red'
      emailOk = false
   } else {
      email.style.borderColor = 'green'
      emailOk = true
   }

   if (nomeOk && emailOk && msgOk) {
      btnEnviar.disabled = false
   } else {
      btnEnviar.disabled = true
   }
})

mensagem.addEventListener('keyup', () => {
   if (mensagem.value.length > 500) {
      mensagem.style.borderColor = 'red'
      msgOk = false
   } else {
      mensagem.style.borderColor = 'green'
      msgOk = true
   }

   if (nomeOk && emailOk && msgOk) {
      btnEnviar.disabled = false
   } else {
      btnEnviar.disabled = true
   }
})


btnEnviar.addEventListener('click', () => {
   /* Mostra a div de carregamento */
   let carregamento = document.querySelector('#carregamento')
   carregamento.style.display = 'flex'

   /* Esconde o Form */
   let form = document.querySelector('form')
   form.style.display = 'none'
})


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
