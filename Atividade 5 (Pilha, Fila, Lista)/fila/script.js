const filaArray = [];

        function mostrarFila() {
            const fila = document.getElementById('fila');
            fila.innerHTML = '';
            filaArray.forEach(element => {
                const div = document.createElement('div');
                div.innerHTML = element;
                div.className = 'item';
                fila.appendChild(div);
            });
        }

        function enfileirar() {
            let input = document.getElementById('input');
            filaArray.push(input.value);
            input.value = '';
            mostrarFila();
        }

        function desenfileirar() {
            filaArray.shift();
            mostrarFila();
        }