document.getElementById("botaoEnviar").addEventListener("click", function() {
    const maxRows = 5; // Defina o número máximo de conjuntos de notas desejado
    let addedRows = 0; // Contador de conjuntos de notas adicionados
  
    const table = document.getElementById("notasTable");
  
    while (addedRows < maxRows) {
      const nome = document.getElementById("nomeAluno").value;
      const nota1 = parseFloat(document.getElementById("nota1").value);
      const nota2 = parseFloat(document.getElementById("nota2").value);
      const nota3 = parseFloat(document.getElementById("nota3").value);
      const nota4 = parseFloat(document.getElementById("nota4").value);
  
      const media = (nota1 + nota2 + nota3 + nota4) / 4;
  
      const newRow = table.insertRow();
  
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      const cell3 = newRow.insertCell(2);
      const cell4 = newRow.insertCell(3);
      const cell5 = newRow.insertCell(4);
  
      cell1.innerHTML = ;
      cell2.innerHTML = nota1;
      cell3.innerHTML = nota2;
      cell4.innerHTML = nota3;
      cell5.innerHTML = nota4;
  
      // Aplicar cores com base na média das notas
      if (media >= 70) {
        newRow.classList.add("linha-verde");
      } else if (media < 50) {
        newRow.classList.add("linha-vermelha");
      } else {
        newRow.classList.add("linha-amarela");
      }
  
      // Limpar os campos após a adição da linha
      document.getElementById("nomeAluno").value = "";
      document.getElementById("nota1").value = "";
      document.getElementById("nota2").value = "";
      document.getElementById("nota3").value = "";
      document.getElementById("nota4").value = "";
  
      addedRows +=1;

    }
  });