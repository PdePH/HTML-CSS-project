// main-form
var form = document.getElementById("contact");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.classList.add('success');
        status.innerHTML = "Mensagem enviada com sucesso. Obrigado!";
        form.reset()
    }).catch(error => {
        status.classList.add('error');
        status.innerHTML = "Ops! Hove um problema ao enviar."
    });
}
form.addEventListener("submit", handleSubmit)

// main-carousel

const buttonRight = document.querySelector('.button-arrow.-right');
const buttonLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 0;

buttonRight.addEventListener('click', function() {
    if (pixels == -600) { return; } else { pixels = pixels - 100; }
    elements.style = `transform: translateX(${pixels}px);`;
});

buttonLeft.addEventListener('click', function() {
    if (pixels == 0) { return; } else { pixels = pixels + 100; }
    elements.style = `transform: translateX(${pixels}px);`;
});