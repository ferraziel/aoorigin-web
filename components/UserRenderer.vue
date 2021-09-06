<template>
  <canvas ref="render" width="120" height="194" />
</template>

<script>
function prepareRenderCharacter(isDead, headData, helmetData, shieldData, weaponData, bodyData) {
  const objectToRender = [];

  const bodyObject = {
    imgSrc: `/assets/img/characters/${bodyData.fileName}.png`,
    w: bodyData.width,
    h: bodyData.height,
    sx: bodyData.initialPositionX,
    sy: bodyData.initialPositionY,
    offsetX: isDead ? 9 : 10,
    offsetY: isDead ? 4 : 16,
  };

  objectToRender.push(bodyObject);

  //Si el pj no esta muerto, NO renderizo todo, sino solo el body FANTASMITA
  if (!isDead) {
    if (weaponData) {
      const weaponObject = {
        imgSrc: `/assets/img/characters/${weaponData.fileName}.png`,
        w: weaponData.width,
        h: weaponData.height,
        sx: weaponData.initialPositionX,
        sy: weaponData.initialPositionY,
        offsetX: 7,
        offsetY: parseInt(bodyData.headOffsetY) + 55,
      };

      objectToRender.push(weaponObject);
    }

    if (shieldData) {
      const shieldObject = {
        imgSrc: `/assets/img/characters/${shieldData.fileName}.png`,
        w: shieldData.width,
        h: shieldData.height,
        sx: shieldData.initialPositionX,
        sy: shieldData.initialPositionY,
        offsetX: 10,
        offsetY: parseInt(bodyData.headOffsetY) + 53,
      };

      objectToRender.push(shieldObject);
    }

    if (headData) {
      const headObject = {
        imgSrc: `/assets/img/characters/${headData.fileName}.png`,
        w: headData.width,
        h: headData.height,
        sx: headData.initialPositionX,
        sy: headData.initialPositionY,
        offsetX: parseInt(bodyData.headOffsetX) + 10,
        offsetY: parseInt(bodyData.headOffsetY) + 32,
      };
      objectToRender.push(headObject);
    }

    if (helmetData) {
      const helmetObject = {
        imgSrc: `/assets/img/characters/${helmetData.fileName}.png`,
        w: helmetData.width,
        h: helmetData.height,
        sx: helmetData.initialPositionX,
        sy: helmetData.initialPositionY,
        offsetX: parseInt(bodyData.headOffsetX) + 10,
        offsetY: parseInt(bodyData.headOffsetY) + 32,
      };

      objectToRender.push(helmetObject);
    }
  }

  return objectToRender;
}

export default {
  props: ["isDead", "bodyData", "helmetData", "weaponData", "shieldData", "headData", "background"],
  mounted() {
    const canvas = this.$refs.render;
    // canvas.style.background = `url(${this.background})`;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const scalingFactor = 2.5;

    //TODO: ARREGLAR isDead por que esta roto por que Jopi y Wyrox la borraron de la bd.
    let objectToRender = prepareRenderCharacter(
      this.isDead,
      this.headData,
      this.helmetData,
      this.shieldData,
      this.weaponData,
      this.bodyData
    );

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
