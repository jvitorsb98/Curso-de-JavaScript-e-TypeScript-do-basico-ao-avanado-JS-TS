function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        btnDel: document.querySelector('.btn-del'),
        btnEq: document.querySelector('.btn-eq'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        eq() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta && conta !== 0) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida');
                return;
            }
        },

        clearDisplay() {
            this.display.value = "";
        },

        delDisplay() {
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e) {
                const e1 = e.target;

                if (e1.classList.contains('btn-num')) {
                    this.btnParaDisplay(e1.innerText);
                }

                if (e1.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (e1.classList.contains('btn-del')) {
                    this.delDisplay();
                }

                if (e1.classList.contains('btn-eq')) {
                    this.eq();
                }

            }.bind(this));
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode == 13) {
                    this.eq();
                }
            });
        },

        btnParaDisplay(valor) {
            if(Number.isInteger(valor)){
                this.display.valor += Number(valor);
            }
            this.display.value += valor;
        }

    }
}

const calculadora = criaCalculadora();
calculadora.inicia();
