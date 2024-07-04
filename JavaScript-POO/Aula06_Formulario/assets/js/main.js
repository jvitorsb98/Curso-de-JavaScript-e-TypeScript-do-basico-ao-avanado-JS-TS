class ValidaForm{
    constructor(){
        this.form = document.querySelector('.form');
        this.eventos();
    }

    eventos(){
        this.form.addEventListener('submit' , (e) => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const validForm = this.camposSaoValidos();
        console.log(validForm)
        if(validForm){
            alert('formulario enviado')
        }
    }

    camposSaoValidos(){
        let valid = true;
        const campos = this.form.querySelectorAll('.validar')

        for(let errorText of this.form.querySelectorAll('.error-text')){
            errorText.remove();
        }



        for(let campo of campos){
            if(!campo.value){
                this.criaError(campo,`O campo "${campo.name}" não pode estar vazio`)
                valid = false;
            }

            if(campo.name == 'cpf'){
                if(!this.validaCPF(campo)) valid = false;
            }

            if(campo.name == 'usuario'){
                if(!this.validaUsuario(campo)) valid = false;
            }


            if(campo.name == 'senha'){
                if(!this.validaSenha(campo)) valid = false;
            }



        }

        return valid;

    }

    criaError(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend',div);
    }


    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()){
            this.criaError(campo,'CPF inválido')
            return false;
        }
        return true;
    }

    validaUsuario(campo){
        let usuarioValid = true;
        if(campo.value.length < 3 || campo.value.length > 12 ){
            this.criaError(campo,'Usuario deve possuir entre 3 e 12 caracteres')
            usuarioValid = false;
        }

        if (!this.isAlphanumeric(campo.value)) {
            this.criaError(campo, 'Usuário deve ter apenas letras ou números');
            usuarioValid = false;
        }

        return usuarioValid;
    }

    isAlphanumeric(str) {
        const regex = /^[a-zA-Z0-9]+$/;
        return regex.test(str);
    }

    validaSenha(campo){
        let senhaValid = true;
        const senha = campo.value;
        const repetir_senha = this.form.querySelector('#repetir_senha');
        if(senha.length < 6 || senha.length > 12 ){
            this.criaError(campo,'Senha deve possuir entre 6 e 12 caracteres')
            senhaValid = false;
        }

        if(senha != repetir_senha.value){
            this.criaError(campo, 'Senha e repetir senha não condizem')
            senhaValid = false;
        }

        return senhaValid;

    }

}





const validaForm = new ValidaForm();