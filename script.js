
// Função para adicionar uma tarefa
function adicionarTarefa() {

    const texto = document.getElementById("tarefa").value;

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    // Criar um novo elemento
    const novaTarefa = document.createElement("li");

    novaTarefa.innerText = texto;

    // Marcar tarefa como concluída
    novaTarefa.onclick = function() {
        novaTarefa.classList.toggle("concluida");
    };

    // Criar botão de remover
    const botaoRemover = document.createElement("button");

    botaoRemover.innerText = "Remover";
    botaoRemover.classList.add("remover");

    // Remover tarefa da lista
    botaoRemover.onclick = function(event) {
        event.stopPropagation();
        novaTarefa.remove();
    };

    novaTarefa.appendChild(botaoRemover);

    // Adicionar tarefa na lista
    document.getElementById("listaTarefas").appendChild(novaTarefa);

    // Limpar campo de texto
    document.getElementById("tarefa").value = "";
}
