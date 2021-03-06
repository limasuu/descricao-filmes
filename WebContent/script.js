function carregarFilmes(){
				
	var ajax= new XMLHttpRequest();
	var url= "filmes.json";
				
	ajax.onreadystatechange= function(){
		if(ajax.readyState == 4 && ajax.status == 200){
						
			var divOpcaoFilmes= document.getElementById("div-opcao-filmes");
						
			var json= JSON.parse(ajax.responseText);						
			var filmes= json.filmes;
												
			for(var i in filmes){							
						
				var divFilme= document.createElement("div");
				divFilme.className= "div-filme";
				divOpcaoFilmes.appendChild(divFilme);
						
				var filmeRadio= document.createElement("input")
				filmeRadio.setAttribute("type", "radio");								
				filmeRadio.name="filmeRadio";
				filmeRadio.onchange= carregarDescricao;							
				filmeRadio.value= i;		
							
				var filmeLabel= document.createElement("label");
				filmeLabel.innerHTML= filmes[i].nome;
							
				divFilme.appendChild(filmeRadio);
				divFilme.appendChild(filmeLabel);
			}
		}					
	}				
	ajax.open("GET", url, true);
	ajax.send();
}
			
function carregarDescricao(e){
				
	var ajax= new XMLHttpRequest();
	var url="filmes.json";
				
	ajax.onreadystatechange= function(){
		if(ajax.readyState == 4 && ajax.status == 200){						
						
			var divDescricaoFilme= document.getElementById("div-descricao-filme");
			divDescricaoFilme.innerHTML= "";
						
			var json= JSON.parse(ajax.responseText);
			var filme= json.filmes[e.target.value];
						
			var tabela= document.createElement("table");
			divDescricaoFilme.appendChild(tabela);
						
			for(var dado in filme){
							
				var celula1= document.createElement("td");
				celula1.innerHTML= dado;
							
				var celula2= document.createElement("td");
				celula2.innerHTML= filme[dado];
						
				var linha= document.createElement("tr");
				tabela.appendChild(linha);
							
				linha.appendChild(celula1);
				linha.appendChild(celula2);
			}					
		}					
	}				
	ajax.open("GET", url, true);
	ajax.send();
}
			