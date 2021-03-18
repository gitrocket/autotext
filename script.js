const textEl = document.getElementById('text');
const speedInput = document.getElementById('speed');

let text = "We love programming";
let idx = 1;
let speed = 300 / speedInput.value

addText();

function addText() {
    // slice text and assign to innerttext of the text element
    textEl.innerText = text.slice(0,idx);

    // increment the index
    idx++;

    // check index value against length of text
    if(idx > text.length) {
        idx = 1;
    }

    setTimeout(addText, speed)

}

speedInput.addEventListener('input', (e) => {
    speed = 300 / e.target.value
})