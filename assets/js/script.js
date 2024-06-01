const scrollUp = document.getElementById("scroll-up");


window.addEventListener("scroll", () => scrollY >= 200 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll"));


scrollUp.onclick = () => window.scrollTo({ top: 0 });


ScrollReveal().reveal('.card', {
  duration: 1200,
  opacity: 0,
  distance: "40%",
  origin: "bottom"
});



const PetContainer = document.querySelector(".pet-container");
const closeButton = document.querySelector(".close-pet-card");
const cards = document.querySelectorAll('.card');
const PetImage = document.querySelector(".pet-image");
const PetName = document.querySelector(".pet-name");
const PetOwner = document.querySelector('.pet-owner');


function closeModel() {
  PetContainer.classList.remove('model-open');
setTimeout(function() {

    PetImage.src = "./assets/loading.gif";

  }, 200);
}
closeButton.onclick = PetContainer.onclick = closeModel;

const pets = document.querySelectorAll('.pet-card');
pets.forEach(pet => pet.addEventListener('click', e => e.stopPropagation()));
 

fetch('./assets/data.json')
  .then(response => response.json())
  .then(data => {
    var container = document.querySelector(".card-container");

 
    data.data.sort(() => Math.random() - 0.5);

    data.data.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = item.animalcatagory;
      container.appendChild(div);

   
      div.addEventListener('click', () => {
        PetContainer.classList.add('model-open');
        PetImage.src = item.image;
        PetName.innerText = item.petname;
        PetOwner.innerText = item.ownername;
        PetOwner.href = item.ownerlink;
      });
    });
  })
  .catch(error => console.log(error));
  

function validateLink(event) {
  if (!event.target.getAttribute("href")) {
    event.preventDefault();
    return false;
  }
  return true;
}
