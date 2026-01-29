let avw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let avh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
var modW
var modH
var imgW
var imgH

if (avw >= aavh * .8) {
    modW = avw / 2;
    modH = avh * .8;
} else {
    modW = avw * .8;
    modH = avh / 2;
}

const iframes = Array.from(document.querySelectorAll('iframe')).concat(Array.from(document.querySelectorAll('.pdfobject-container'))).filter(element => !Array.from(document.querySelectorAll('iframe.pdfobject')).includes(element));
const imgs = Array.from(document.querySelectorAll('img'))

iframes.forEach(element => {
    if (element.tagName === 'IFRAME') {
        element.width = Math.round(modW);
        element.height = Math.round(modH);
    } else {
        element.style.width = Math.round(modW) + 'px';
        element.style.height = Math.round(modH) + 'px';
    }
})

imgs.forEach(element => {
    if (avw >= avh) {
        element.style.height = "50vh";
    } else {
        element.style.width = "80vh";
    }
})
