/* Fazer um referenia a cada botão de navegação*/
const start = document.getElementById("avancar");
const logar = document.getElementsByTagName("input")[3];
const setavoltar = document.getElementById("setavoltar");

if (start!=null){
    start.onclick = ()=>{
        window.location.href="login.html";
    }
}

if (logar!=null){
logar.onclick = ()=>{
    window.location.href="registro.html";
    }
}

if (setavoltar!=null){
setavoltar.onclick = ()=>{
    window.location.href="index.html";
    }
}
