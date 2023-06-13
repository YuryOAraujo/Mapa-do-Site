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

    // Obtém a referência para a imagem
var imagem = document.getElementById('sol');
var atribute = 0;

// Adiciona um ouvinte de eventos para o evento de clique na imagem
imagem.addEventListener('click', function() {
  // Altera a cor de fundo do body para preto
    if(atribute == 0){
         imagem.src = 'lua.png';
        document.body.style.backgroundColor = '#1C1C1C';
        atribute = 1;
    }else{
       imagem.src = 'sol.png';
        document.body.style.backgroundColor = '#F5F5F5';
        atribute = 0;
    }
});