const formValidation = () => {

    const form = document.querySelector("form");

    form.addEventListener("submit", (e) =>{
        e.preventDefault();
        //No hacer nada si el formulario no esta validado
        if(!validateForm(form)) return;
        //Si el formulario esta validado, submit
        alert("Enviado exitosamente");
    });
    
    const validateForm = (form) =>{
        let valid = true;
        //chequea por inputs vacios
        let name = form.querySelector(".name");
        let message = form.querySelector(".message");
        let email = form.querySelector(".email");
        /* let options = form.querySelector("input[name='options']:checked") */
        
    
        if (name.value === ""){
            giveError(name, "Ingrese su nombre");
            valid = false;
        }
    
        if (message.value === ""){
            giveError(message, "Ingrese su consulta");
            valid = false;
        }


        //chequea que sea un formato valido de email
        let emailReject = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let emailValue = email.value;
        if(!emailReject.test(emailValue)){
            giveError(email, "Ingrese un email válido")
        }
        
/*         if (options.value === ""){
            giveError(options, "Ingrese una opción");
            valid = false;
        } */


        //SI ES VALIDO RETORNA TRUE
        if(valid){
            return true;
        }
    }
    
    const giveError = (field, message) => {
        let parentElement = field.parentElement;
        parentElement.classList.add("error");
    
        // Si el error ya existe, removerlo
        let existingError = parentElement.querySelector(".err-msg");
        if(existingError){
            existingError.remove();
        }
    
        let error = document.createElement("error")
        error.textContent = message;
        error.classList.add("err-msg");
        parentElement.appendChild(error);
    }
    
    //Remover error en los inputs
    
    const inputs = document.querySelectorAll("input");
    const textarea = document.querySelectorAll("textarea");
    
    let allfields = [...inputs, ...textarea]
    
    allfields.forEach((field) => {
        field.addEventListener("input", () => {
            removeError(field);
        });
    });
    const removeError = (field) => {
        let parentElement = field.parentElement;
        parentElement.classList.remove("error");
        let error = parentElement.querySelector(".err-msg")
        if(error){
            error.remove();
        }
    }
}