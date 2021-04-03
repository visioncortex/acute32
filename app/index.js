import { Acute32SymcodeMain } from 'symcode';

const loader = 'loader';

load().then(function () {
    window.Acute32 = Acute32SymcodeMain.new();
    window.Acute32.load_alphabet_from_canvas_id(loader);
    if (typeof window.Acute32onload === 'function') {
        window.Acute32onload();
    }
});

function load() {
    const canvas = document.getElementById(loader);
    const ctx = canvas.getContext('2d');
    const img = new Image();

    return new Promise(function (resolve) {
        const path = '/alphabet.png';
        img.src = path;
        img.onload = function () {
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);

            resolve();
        };
    });
}
