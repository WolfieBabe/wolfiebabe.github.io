let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

const iframes = Array.from(document.querySelectorAll('iframe'));
const pdfContainers = document.querySelectorAll('.pdfobject-container');
const matches = [];

for (const pdfContainer of pdfContainers) {
    for (let i = iframes.length - 1; i >= 0; i--) {
        const iframe = iframes[i];
        if (pdfContainer.contains(iframe)) {
            matches.push({ pdfContainer, iframe });
            iframes.splice(i, 1);
        }
    }
}
    
iframes.forEach(iframe => {
    if (vw >= vh) {
        iframe.width = vw / 2;
        iframe.height = vh * .8;   
    } else {
        iframe.height = vw / 2;
        iframe.width = vh * .8;
    }
})
