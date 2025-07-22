let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

const iframes = Array.from(document.querySelectorAll('iframe')).concat(Array.from(document.querySelectorAll('.pdfobject-container'))).filter(element => !Array.from(document.querySelectorAll('iframe.pdfobject')).includes(element));

iframes.forEach(iframe => {
    if (vw >= vh) {
        iframe.width = vw / 2;
        iframe.height = vh * .8;   
    } else {
        iframe.height = vw / 2;
        iframe.width = vh * .8;
    }
})
