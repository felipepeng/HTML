function certeza(){
    var intel=prompt("Todos os dados estão corretos?");
    
    if(intel=="Sim"||intel=="sim"){
        window.alert("Reserva concluída com sucesso!");
    }
    else if(intel=="Não"||intel=="não"){
        window.alert("Cheque os dados e tente de novo.");
    }
}
