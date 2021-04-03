import { Acute32SymcodeMain } from 'symcode';

const loader = 'loader';

load().then(function () {
    const Acute32 = Acute32SymcodeMain.new();
    Acute32.load_alphabet_from_canvas_id(loader);
    Acute32.scan_from_canvas = function (canvasId) {
        return Acute32.scan_from_canvas_id(canvasId);
    }
    Acute32.generate_symcode = function (canvasId, payload) {
        const buffer = document.getElementById(loader);
        let ctx = buffer.getContext('2d');
        Acute32.generate_symcode_to_canvas(loader, payload);
        ctx.filter = 'blur(1px)';
        ctx.drawImage(buffer, 0, 0);
        const size = 500;
        const canvas = document.getElementById(canvasId);
        ctx = canvas.getContext('2d');
        canvas.width = canvas.height = size;
        ctx.drawImage(buffer, 0, 0, size, size);
    }
    window.Acute32 = Acute32;
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
