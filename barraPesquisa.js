const inputPesquisa = document.getElementById('texto');
  	inputPesquisa.addEventListener('change', (event) => {
    	const opcaoSelecionada = document.querySelector(`#historico option[value="${event.target.value}"]`);
    	if (opcaoSelecionada) {
      		window.location.href = opcaoSelecionada.querySelector('a').href;
              const campoPesquisa = document.getElementById('texto');
              campoPesquisa.value = '';
    	}
  	});

const datalist = document.getElementById('historico');
const options = Array.from(datalist.options);
      
    options.sort(function(a, b) {
        if (a.value < b.value) {
            return -1;
        }
        if (a.value > b.value) {
            return 1;
        }
        return 0;
    });
      
    while (datalist.firstChild) {
        datalist.removeChild(datalist.firstChild);
    }
      
    for (const option of options) {
        datalist.appendChild(option);
    }