<template>
  <canvas ref="render" width="120" height="194" />
</template>

<script>
function prepareRenderItem(gameItemData ) {
  const objectToRender = [];

  const itemObject = {
        fileName: gameItemData.fileName,
        imgSrc: `/assets/img/characters/${gameItemData.fileName}.png`,
        w: gameItemData.width,
        h: gameItemData.height,
        sx: gameItemData.initialPositionX,
        sy: gameItemData.initialPositionY,
        offsetX: 0,
        offsetY: 0,
        type: "item",
  };

  objectToRender.push(itemObject);
  return objectToRender;
}

export default {
  props: ["item", "background"],
  mounted() {
    const canvas = this.$refs.render;
    // canvas.style.background = `url(${this.background})`;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const scalingFactor = 2.5;

    //TODO: ARREGLAR isDead por que esta roto por que Jopi y Wyrox la borraron de la bd.
    let objectToRender = prepareRenderItem(this.item.Data.icon32x32GraphicData)

    for (const o of objectToRender) {
      let img = new Image();

      img.onload = () => {
        o.imgElement = img;
        render(canvas, objectToRender);
      };

      if (o.imgSrc) {
        img.src = o.imgSrc;
      } else {
        count++;
      }
    }

    const render = () => {
      // requestAnimationFrame(render);
      // ctx.clearRect(0, 0, cvWidth, cvHeight);

      const globalOffset = {
        // x: cvWidth / 2,
        // y: cvHeight / 2,
        x: 0,
        y: 0,
      };

      for (const img of objectToRender) {
        const offsetX = globalOffset.x + img.offsetX * scalingFactor;
        const offsetY = globalOffset.y + img.offsetY * scalingFactor;
        const w = img.w * scalingFactor;
        const h = img.h * scalingFactor;

        ctx.drawImage(img.imgElement, img.sx, img.sy, img.w, img.h, offsetX, offsetY, w, h);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let pix = imageData.data;

        for (let i = 0, n = pix.length; i < n; i += 4) {
          let r = pix[i],
            g = pix[i + 1],
            b = pix[i + 2];

          if (r <= 10 && g <= 10 && b <= 10) {
            pix[i + 3] = 0;
          }
        }

        ctx.putImageData(imageData, 0, 0);
      }
    };
  },
};
</script>
