let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário == ""){
    nomeUsuário = prompt("Digita seu nome ai pra mim:");
}

if(nomeUsuário == null){
    elemento.textContent = 'VLW seja muito bem-vindo.';
}else{
    elemento.textContent = nomeUsuário;
}