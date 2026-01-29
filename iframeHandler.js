let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
var modW
var modH
var imgW
var imgH

if (vw >= vh * .8) {
    modW = vw / 2;
    modH = vh * .8;
} else {
    modW = vw * .8;
    modH = vh / 2;
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
    if (vw >= vh) {
        imgH = vh / 2;
    } else {
        imgW = vw * .8;
    }
})
