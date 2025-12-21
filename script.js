const trabalhoSelect = document.getElementById("trabalho");
const outrosCampos = document.getElementById("outrosCampos");

trabalhoSelect.addEventListener("change", () => {
    if (trabalhoSelect.value === "outros") {
        outrosCampos.classList.remove("hidden");
    } else {
        outrosCampos.classList.add("hidden");
    }
});

document.getElementById("calcForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const cotacao = parseFloat(document.getElementById("cotacao").value);
    const peso = parseFloat(document.getElementById("peso").value);

    let valorTrabalho = parseFloat(trabalhoSelect.value);

    if (trabalhoSelect.value === "outros") {
        valorTrabalho = parseFloat(document.getElementById("valorTrabalho").value);
        if (isNaN(valorTrabalho)) {
            alert("Digite um valor válido para o trabalho.");
            return;
        }
    }

    if (isNaN(cotacao) || isNaN(peso) || isNaN(valorTrabalho)) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    const preco = cotacao * peso * valorTrabalho;
    const precoMarkup = preco * 2.16;

    document.getElementById("resultado").classList.remove("hidden");
    document.getElementById("precoPeça").innerHTML = `Preço de Atacado: <strong>R$ ${preco.toFixed(2)}</strong>`;
    document.getElementById("precoMarkup").innerHTML = `Preço de Varejo: <strong>R$ ${precoMarkup.toFixed(2)}</strong>`;
});