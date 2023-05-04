let form=document.getElementById("form")
let fechaAniversario="2023-01-01"
form.addEventListener("submit", function(e){
    let fecha=document.getElementById("fecha").value
    e.preventDefault()
    if (fecha=="") {
        alert("Ingrese la fecha por favor")
    } else {
        if (fechaAniversario==fecha) {
            location.href="yes.html"
        } else {
            location.href="no.html"
        }
    }

})