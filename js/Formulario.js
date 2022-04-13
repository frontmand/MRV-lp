//Aqui começa a sessão de formulario
function doGet(url) {
    let request = new XMLHttpRequest()
    request.open('GET',url,false)
    request.send()
    return request.responseText
}

function main() { 
    let data = doGet("https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=nome");
    let city = JSON.parse(data);
    const meuInput = document.getElementById("MeuInput")
    city.forEach((element, index) => {
        const opt = document.createElement('option');
        opt.value = index;
        opt.innerHTML = element.nome;
        meuInput.appendChild(opt);
    });
}
//Aqui termina a sessão de formulario



main()
