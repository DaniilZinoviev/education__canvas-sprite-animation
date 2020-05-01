let canvas = document.querySelector("#canvas"),
    ctx = canvas.getContext("2d"),
    spriteH = 60,
    spriteW = 48,
    width = spriteW * 2,
    height = spriteH * 2,
    img = document.createElement('img');


img.src = 'img/player_big.png'

img.addEventListener('load', () => {
    let cycle = 0;

    setInterval(() => {
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(
            img,
            // Source rectangle
            cycle * spriteW, 0, spriteW, spriteH,
            // destination rectangle
            0, 0, width, height
        );
        cycle = (cycle + 1) % 8;
    }, 100)
    
})