//change to cat page
// function changeCat(){
//     document.querySelector('.logo').addEventListener('click', toggleTheme);
// }
// logoDog.onmouseover = changeCat;
// logoCat.onmouseout = changeCat;
let logo = document.getElementById("logoDog");
logo.addEventListener("click", () => {
    if (logo.src.includes("logo.png")) {
        logo.src = "logoCat.png";
        roverHero.style.backgroundImage = "url('cute-sleepy-kitten-website-header.jpg')";
        document.getElementById("textHeader").innerText = "We're the Cat People";
        document.getElementById("paraHeader").innerText = "Book trusted, local pet sitters and walkers who will care for your cat like you would.";
        document.getElementById("services").innerText = "Services for every cat";
        document.getElementById("title1").innerText = "Cat Boarding";
        document.getElementById("title2").innerText = "Cat walking";
        document.getElementById("title3").innerText = "Catty Day Care";
        document.getElementById("title4").innerText = "We’re the treat-your-cat-like-family cat people";
        document.getElementById("title5").innerText = "My Rover sitter sent me updates throughout the day and took care of my cat as if she were her own.";
        roverAction.style.backgroundImage = "url('women with cat.webp')";
    } else {
        logo.src = "logo.png";
        roverHero.style.backgroundImage = "url('img-can-dogs-smile-header.jpg')";
        document.getElementById("textHeader").innerText = "We're the Dog People";
        document.getElementById("paraHeader").innerText = "Book trusted, local pet sitters and walkers who will care for your dog like you would.";
        document.getElementById("services").innerText = "Services for every dog";
        document.getElementById("title1").innerText = "Dog Boarding";
        document.getElementById("title2").innerText = "Dog walking";
        document.getElementById("title3").innerText = "Doggy Day Care";
        document.getElementById("title4").innerText = "We’re the treat-your-dog-like-family dog people";
        roverAction.style.backgroundImage = "url('Header-Dog-Housing-Requirements.jpg')";
    }
});