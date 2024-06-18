
document.addEventListener('DOMContentLoaded', function() {
    getData();
});

function precos(){
    // Certifique-se de que a variável listaCart está definida antes de usá-la
    document.getElementById('val1').innerHTML = "R$" + document.getElementById('quantityAlf').value * 2.5;
    document.getElementById('val2').innerHTML = "R$" + document.getElementById('quantityTom').value * 5;
    document.getElementById('val3').innerHTML = "R$" + document.getElementById('quantityCen').value * 3;
    document.getElementById('val4').innerHTML = "R$" + document.getElementById('quantityPep').value * 4;
    


    document.getElementById('subtotal').innerHTML = ( document.getElementById('quantityAlf').value * 2.5 + document.getElementById('quantityTom').value * 5.6 + document.getElementById('quantityCen').value * 4 + document.getElementById('quantityPep').value * 4 ).toFixed(2);
    document.getElementById('total').innerHTML = ( document.getElementById('quantityAlf').value * 2.5 + document.getElementById('quantityTom').value * 5 + document.getElementById('quantityCen').value * 3 + document.getElementById('quantityPep').value * 4 ).toFixed(2);
    document.getElementById('desconto').innerHTML = ( document.getElementById('quantityTom').value * 0.6 + document.getElementById('quantityCen').value * 1 ).toFixed(2);
}

setInterval(precos, 100);
