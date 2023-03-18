const controlPanel = document.querySelector('#font-size-control');

controlPanel.addEventListener('input', changeFontSize)

function changeFontSize(){
    const text = document.querySelector('#text');
    text.style.fontSize = controlPanel.value + 'px'
}
