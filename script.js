const lanches = [
  { id: "x_gaucho", nome: "X-Gaúcho / preço: 29.99", preco: 29.99 },
  { id: "x-gaucho", nome: "X-Salada / preço: 24.99", preco: 24.99 },
  { id: "x_pedrao", nome: "X-Pedrão / preço: 27.99", preco: 27.99 }
];

const bebidas = [
  { id: "hostel", nome: "Hostel", precoDiaria: 90 },
  { id: "hotel3", nome: "Hotel 3⭐", precoDiaria: 160 },
  { id: "hotel5", nome: "Hotel 5⭐", precoDiaria: 320 }





];




// Preencher os selects com base nos vetores
function preencherOpcoes() {
  // 1) TRANSPORTE
  const  selectlanches= document.getElementById("lanches");
  for (let i = 0; i < lanches.length; i++) {
    const item = lanches[i];                 // pega o objeto atual do array
    const option = document.createElement("option"); // cria uma <option>
    option.value = item.id;                      // valor interno (ex.: "aviao")
    option.textContent = item.nome;              // texto visível (ex.: "Avião")
    selectlanches.appendChild(option);        // coloca no <select>
  }

  // 2) HOSPEDAGEM
  const selectbebidas = document.getElementById("bebidas");
  for (let i = 0; i < bebidas.length; i++) {
    const item = bebidas[i];
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.nome;
    selectbebidas.appendChild(option);
  }

}

function procurarPorId(lista, idProcurado) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === idProcurado) {
      return lista[i]; // devolve o objeto encontrado
    }
  }
  return null; // se não encontrou, devolve nulo
}
preencherOpcoes();
