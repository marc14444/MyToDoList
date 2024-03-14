const session = localStorage.getItem('session');

//let nom = document.querySelector('.afficherNom');
//nom.innerHTML = `bonjour et bienvenue`

if(session === null){
    window.location.href = './connexion.html'
}
let deconnexion = document.querySelector('#deconnexion');
deconnexion.addEventListener('click', (e)=>{
    e.preventDefault();
    localStorage.removeItem('session');
    window.location.href = './../html/connexion.html'
});
