let avw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let avh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
var modW;
var modH;
var iframes;
var imgs;

if (avw >= avh * .8) {
    modW = avw / 2;
    modH = avh * .8;
} else {
    modW = avw * .8;
    modH = avh / 2;
};

iframes = Array.from(document.querySelectorAll('iframe')).concat(Array.from(document.querySelectorAll('.pdfobject-container'))).filter(element => !Array.from(document.querySelectorAll('iframe.pdfobject')).includes(element));
imgs = document.images;
    
iframes.forEach(element => {
    if (element.tagName === 'IFRAME') {
        element.width = Math.round(modW);
        element.height = Math.round(modH);
    } else {
        element.style.width = Math.round(modW) + 'px';
        element.style.height = Math.round(modH) + 'px';
    }
});
    
for (let i = 0; i < imgs.length; i++) {
    if (avw >= avh) {
        imgs[i].style.height = "50vh";
    } else {
        imgs[i].style.width = "80vw";
    }
});
