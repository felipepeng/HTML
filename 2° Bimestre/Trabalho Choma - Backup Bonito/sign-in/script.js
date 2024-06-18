





function saveUser() {
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    let boolUser = 0;
    let boolAdm = 0;
    
    if(usuario== "adm" && senha == "adm"){
        boolAdm = 1;
    }
    else if(usuario== "user" && senha == "user"){
        boolUser = 1;
    }

    let listaUser = [boolUser, boolAdm];
    localStorage.setItem('usuarios', JSON.stringify(listaUser));
    console.log(boolUser + "  " + boolAdm);

    if(boolAdm==1 || boolUser==1){
        window.location.href = '../Produtos-2/index.html';
    }
    else(alert("Usuário ou senha incorreta"));
    
}