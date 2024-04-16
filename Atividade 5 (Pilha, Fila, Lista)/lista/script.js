let listaArray = [];

        function mostrarLista() {
            const fila = document.getElementById('pilha');
            fila.innerHTML = '';
            listaArray.forEach(element => {
                const div = document.createElement('div');
                div.innerHTML = element;
                div.className = 'item';
                fila.appendChild(div);
            });
        }

        function adicionar() {
            let input = document.getElementById('input');
            const index = document.getElementById('index');
            if (index.value) {
                listaArray = [...listaArray.slice(0, index.value), input.value, ...listaArray.slice(index.value)];
            } else {
                listaArray.push(input.value);
            }
            input.value = '';
            mostrarLista();
        }

        function remover() {
            const index = document.getElementById('index');
            if (index.value) {
                listaArray = [...listaArray.slice(0, index.value), ...listaArray.slice(Number.parseInt(index.value) + 1)];
            }
            mostrarLista();
        }