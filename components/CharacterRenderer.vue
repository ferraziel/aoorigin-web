<template>
  <canvas ref="render" width="90" height="194" />
</template>

<script>
export default {
  props: ["body", "helmet", "weapon", "shield", "head"],
  mounted() {
    const canvas = this.$refs.render;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    const cvWidth = canvas.width;
    const cvHeight = canvas.height;

    const scalingFactor = 3;

    let count = 0;

    const body = {
      imgSrc: this.body,
      w: 19,
      h: 47,
      sx: 3,
      sy: 0,
      offsetX: 0,
      offsetY: 22,
    };

    const weapon = {
      imgSrc: this.weapon,
      w: 10,
      h: 47,
      sx: 3,
      sy: 0,
      offsetX: 0,
      offsetY: 18,
    };


    const shield = {
      imgSrc: this.shield,
      w: 16,
      h: 37,
      sx: 13,
      sy: 0,
      offsetX: 13,
      offsetY: 18,
    };

    const head = {
      imgSrc: this.head,
      w: 15,
      h: 25,
      sx: 5,
      sy: 6,
      offsetX: 2,
      offsetY: 5,
    };

    // Cascos clasico, de AO-Libre
    // const helmet = {
    //   imgSrc: this.helmet,
    //   w: 13,
    //   h: 10,
    //   sx: 7,
    //   sy: 9,
    //   offsetX: 3,
    //   offsetY: 0,
    // };

    const helmet = {
      imgSrc: this.helmet,
      w: 15,
      h: 19,
      sx: 6,
      sy: 0,
      offsetX: 3,
      offsetY: 0,
    };

    // const objects = [body, head, helmet];
    const objects = [body, head, weapon, helmet, shield];

    for (const o of objects) {
      let img = new Image();

      img.onload = () => {
        o.imgElement = img;
        count++;

        if (count >= objects.length) {
          render();
        }
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

      for (const img of objects) {
        const offsetX = globalOffset.x + img.offsetX * scalingFactor;
        const offsetY = globalOffset.y + img.offsetY * scalingFactor;
        const w = img.w * scalingFactor;
        const h = img.h * scalingFactor;

        ctx.drawImage(img.imgElement, img.sx, img.sy, img.w, img.h, offsetX, offsetY, w, h);

        const imageData = ctx.getImageData(0, 0, cvWidth, cvHeight);
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

    // render();
  },
};
</script>
