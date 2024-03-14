let message = document.querySelector('.messagesDinscription');
let formulaire = document.querySelector('.formulaire');
formulaire.addEventListener('submit', event=>{
    event.preventDefault()

    let name = event.target.name;
    let prenom = event.target.prenom;
    let email = event.target.email;
    let motDePasse = event.target.motDePasse;
    let confirmeMotDePasse = event.target.confirmeMotDePasse;

    const formData = new FormData()
    
    formData.append("name", name.value);
    formData.append("prenom", prenom.value);
    formData.append("email", email.value);
    formData.append("motDePasse", motDePasse.value);
    formData.append("confirmeMotDePasse", confirmeMotDePasse.value);

    if (motDePasse.value !== confirmeMotDePasse.value) {
        message.textContent ='Les mots de passe ne correspondent pas.';
        return
    }
    
    fetch('https://travelx-0le0.onrender.com/api/user/',{
        method:"POST",
        body: new URLSearchParams(formData)
    }).then(res => res.json())
    .then(succes =>{
        if(succes.statut){


          
            message.textContent ='Inscription reuissi !';
            message.style.color = 'green';
            message.style.fontSize = "1.5rem";
            setTimeout(window.location.href = './connexion.html',5000);
        }else{
                        switch(succes.erreur){
                            case 'nom deja utilise':
                            message.textContent = "Ce nom d'utilisateur est déjà utilisé."
                            message.style.color = 'red';
                            message.style.fontSize = "1rem";
                            break;
                            case 'email deja utilise':
                            message.textContent = "Cette adresse e-mail est déjà utilisée."
                            message.style.color = 'red';
                            message.style.fontSize = "1rem";
                            break;
                            default:
                            message.textContent = "Une erreur s'est produite. Veuillez réessayer."
                            message.style.color = 'red';
                            message.style.fontSize = "1rem";
                        }
            }
    })
});
