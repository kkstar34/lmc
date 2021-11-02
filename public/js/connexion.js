const inputs = document.querySelectorAll("input[type='text'], input[type='password']");
const form = document.querySelector("form");
const progressBar = document.getElementById("progress__bar");
const redirect = document.querySelector(".redirect");
const  overlay = document.querySelector("#overlay");

redirect.addEventListener("click", (e) => {
  e.preventDefault()
  overlay.classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", (e) => {
  e.preventDefault();
  overlay.classList.remove("active");
});


//creer des variables de stockage dans la base de donnée
let email, password;

window.onload = () => {
  eyeTop();
  eyeBottom();
};

inputs.forEach((input) => {
  input.addEventListener("input", inputClick);
});

function inputClick(e){
  if(this.value !== "")
  {
    this.parentElement.classList.add("active-input");
    
  }else if(this.value === ""){
    this.parentElement.classList.remove("active-input");
  }
}

// verification de champs de formulaire
const errorDisplay = (tag, message, valid) => {

  // selection du container et span en fonction du tag passer en parametre
  const container = document.querySelector("." + tag + "__container");
  const span = document.querySelector("." + tag + "__container > span");

  //verification de la valeur passer dans l'input et les message d'error a afficher
  if(!valid){
    container.classList.add("error"); 
    span.textContent = message;
  }else{
    container.classList.remove("error");
    span.textContent = message;
  }
};

// verification du champs email
const emailChecker = (value) => {
  if(
    !value.match(/^[a-zA-Z0-9-_.]+@[a-z]+\.[a-z]{2,3}$/i)
    ) 
  {
    errorDisplay(
      "email", 
      "Entrez un email valide"
      );
    email = null;
  }else{
    errorDisplay(
      "email", 
      "", 
      true); 
    email = value;
  }
  if((value === ""))
  {
    errorDisplay(
      "email", 
      ""
    );

  }
};

// verification du champs password
const passwordChecker = (value) => {

  progressBar.classList = "";

  //regex de verification de mot de passe contenant 1Maj, 8   caracteres, 1 caract special, 1 chiffre
  if(
    !value.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\w]){1,})(?!.*\s).{8,}$/)
    )
    {
    errorDisplay(
      "password", 
      "1 Majuscule, 8caracteres, 1chiffre"
      );
    progressBar.classList.add("progressRed");
    password = null;
  }
  else if(value.length < 12)
  {
    progressBar.classList.add("progressBlue");
    errorDisplay(
      "password", 
      "", 
      true
      );
    password = value;
  }
  else{
    errorDisplay(
      "password", 
      "", 
      true);
    progressBar.classList.add("progressGreen");
    password = value;
  }

  // faire disparaitre la bar de progression quand le contenu du champs password est vide
  if(
    (value === "")
    )
    {
    progressBar.classList = "";
    errorDisplay(
      "password", 
      ""
      );
  }
};

// executer cet even et les fonctions sur chaque input en fonction de l'input qui sera utilisé grace a leur ID

inputs.forEach((input) =>  {
  input.addEventListener("input", (e) => {
    
    switch(e.target.id){
      case "pseudo":
        pseudoChecker(e.target.value); 
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});

// envoie du formulaire 
form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("h")
  if(email && password)
  {

    // on regroupe tous dans un objet
    const data = {
      email,
      password,
    };

    // vider tous les champs apres validation du formulaire
    inputs.forEach((input) => (input.value = ""));
    // faire disparaitre la bar de progression
    progressBar.classList = "";

    email = null;
    password = null;

    alert("Inscription validé !"); 
    document.querySelectorAll("label").forEach((label) => label.classList.remove("label"));
  }
  else{
    alert(
      "Veuillez remplir correctement tous les champs!"
      );
  }
});

const eyeTop = () => {
  const eyeTop = document.getElementById("eye__top");
  const eyeSlashTop= document.getElementById("eye__slach__top");

  // changement des icons du haut
  eyeTop.addEventListener("click", () => {
    eyeTop.style.display = "none";
    eyeTop.nextElementSibling.style.display = "initial";
    eyeTop.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.type= "text";
  });
  
  eyeSlashTop.addEventListener("click", () => {
    eyeSlashTop.style.display = "none";
    eyeSlashTop.previousElementSibling.style.display = "initial";
    eyeSlashTop.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.type = "password";
  }); 
};

const eyeBottom = () => {
  const eyeBottom = document.getElementById("eye__top");
  const eyeSlashBottom= document.getElementById("eye__slach__top");

   // changement des icons du bas
  eyeBottom.addEventListener("click", () => {
    eyeBottom.style.display = "none";
    eyeBottom.nextElementSibling.style.display = "initial";
    eyeBottom.parentElement.previousElementSibling.type= "text";
  });

  eyeSlashBottom.addEventListener("click", () => {
    eyeSlashBottom.style.display = "none";
    eyeSlashBottom.previousElementSibling.style.display = "initial";
    eyeSlashBottom.parentElement.previousElementSibling.type = "password";
  });
};

