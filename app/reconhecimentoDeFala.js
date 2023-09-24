// Esse codigo é refente à uma API de reconhecimento de voz. 


// peguei a class chute para manipular
const elementoChute = document.getElementById('chute')  

// Add o codigo q foi pego na documentação. "web speech api/mozila.org"// serve para reconhecimento de voz
window.SpeechRecognition =  window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition(); 
recognition.lang = 'pt-Br'
recognition.start()

// add o evento de escultar para acessar a propriedade result.
recognition.addEventListener('result', onSpeak) 

//função que recebe o paramentro de  e  "que é o evento"  atribui o evento do resultado acessando o result pela dev tools web, par chute
function onSpeak(e) {                           
    chute = e.results[0] [0].transcript
    exibeChuteNaTela(chute)
    verificaSeValorDoChuteValido(chute)
}
// funçao que exibe na tela o resultado após ser capturado sua voz.
function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `

    <div> Você disse: </div>
    <span class="box">${chute}</span>

    `
}

 recognition.addEventListener('end', () => recognition.start())
