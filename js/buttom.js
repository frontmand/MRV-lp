//butão do formulario
const button = document.getElementById('btn-buscar')

button.addEventListener('click', (event) => {
    event.preventDefault()
    
    const input = document.getElementById('MeuInput')
    const MinhaArea = document.getElementById('MinhaArea')
    const MeuTexto = document.getElementById('MeuTexto')

    if (input.value == '') {
        alert('Erro, este campo não pode estar vazio!')
    }
    if (MinhaArea.value == '') {
        alert('Erro, este campo não pode estar vazio!')
    }
    if (MeuTexto.value == '') {
        alert('Erro, este campo não pode estar vazio!')
    }
})