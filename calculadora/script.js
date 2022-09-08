function calculadora(){
    const input = document.querySelector('.input');
    return {
        iniciar(){
            this.pegaClick();
        },

        pegaEnter(){
            const input = document.querySelector('.input')
            document.addEventListener('keypress', function(e)  {
                const el = e.target;
                if(el.keyCode === 13){
                    this.resultado();
                }
            })
        },

        resultado(){
            const resultado = document.querySelector('.input');
            const print = eval(resultado.value);
            resultado.value = print;
        },

        pegaClick(){
            const buttons = document.querySelector('.buttons');

            buttons.addEventListener('click', (e) =>{
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    const pegaValor = el.innerText;
                    input.value += pegaValor;
                }

                else if(el.classList.contains('btn-C')){
                    const input = document.querySelector('.input');
                    input.value = '';
                }

                else if(el.classList.contains('btn-bkspc')){
                    let input = document.querySelector('.input');
                    const inputValue = input.value.slice(0, -1);
                    input.value = inputValue;
                }

                else if(el.classList.contains('btnIgual')){
                    this.resultado();
                }

                this.pegaEnter();
            }
        )}

            

         
    }



}

const funcao = calculadora();
funcao.iniciar();