
let formulaire = document.querySelector('form');
let message = document.querySelector('.messagesDeConnexion');

formulaire.addEventListener('submit', event=>{
    event.preventDefault()

    let email = event.target.email;
    let motDePasse = event.target.motDePasse;

    const formData = new FormData()

    formData.append("email", email.value);
    formData.append("motDePasse", motDePasse.value);
    console.log(email);

    fetch('https://travelx-0le0.onrender.com/api/user/login/',{
        method:"POST",
        body: new URLSearchParams(formData)
    }).then(res => res.json())
    .then(succes =>{
        if(succes.statut == true ){

          
            message.textContent ='connexion reuissi !';
            message.style.color = 'green';
            message.style.fontSize = "1.5rem";
            localStorage.setItem('session', JSON.stringify(succes.formData));
            setTimeout(window.location.href = './connecter.html',5000);
        }else{
            message.textContent ='email ou mot de passe incorrecte!';
            message.style.color = 'red';
            message.style.fontSize = "1rem";
        }
    })
});
