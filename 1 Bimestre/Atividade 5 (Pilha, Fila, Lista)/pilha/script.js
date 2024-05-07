const pilhaArray = [];

        function mostrarPilha() {
            const fila = document.getElementById('pilha');
            fila.innerHTML = '';
            pilhaArray.forEach(element => {
                const div = document.createElement('div');
                div.innerHTML = element;
                div.className = 'item';
                fila.appendChild(div);
            });
        }

        function empilhar() {
            let input = document.getElementById('input');
            pilhaArray.unshift(input.value);
            input.value = '';
            mostrarPilha();
        }

        function desempilhar() {
            pilhaArray.shift();
            mostrarPilha();
        }