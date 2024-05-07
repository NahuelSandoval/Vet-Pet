document.addEventListener("DOMContentLoaded", function() {
    fetch('../template/contacto.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contacto').innerHTML = data;

        //Llamo a la función de validar formulario que esta en el otro archivo js
        //Tengo que incluir el script en el index también
        formValidation()
    });

});