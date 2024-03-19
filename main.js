
var cadastros = []
if (localStorage.getItem("cadastros2")){
    cadastros = JSON.parse(localStorage.getItem("cadastros2"))
}
console.log(JSON.parse(localStorage.getItem("cadastros2")))


var submitbutton = document.getElementById('submit')

submitbutton.addEventListener("click", function(e) {
    var emailInput = document.getElementById('emailInput')
    var nomeInput = document.getElementById('nomeInput')
    var numeroInput = document.getElementById('numeroInput')

    var novoCadastro = {
        "email":emailInput.value,
        "nome":nomeInput.value,
        "numero":numeroInput.value,
        "source":"landing page"
    }

    cadastros.push(novoCadastro)
    localStorage.setItem("cadastros2",JSON.stringify(cadastros));
    console.log(cadastros)
});

