<template>
  <canvas ref="render" width="120" height="194"/>
</template>

<script>
export default {
  props: ["isDead", "body", "helmet", "weapon", "shield", "head", "background"],
  mounted() {
    const canvas = this.$refs.render;
    // canvas.style.background = `url(${this.background})`;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const cvWidth = canvas.width;
    const cvHeight = canvas.height;

    const scalingFactor = 2.5;

    let count = 0;
    let objectToRender = []

    const body = {
      imgSrc: `/assets/img/characters/${this.body.fileName}.png`,
      w: this.body.width,
      h: this.body.height,
      sx: this.body.initialPositionX,
      sy: this.body.initialPositionY,
      offsetX: this.isDead ? 9 : 10,
      offsetY: this.isDead ? 4 : 16,
    };
    objectToRender.push(body)

    //Si el pj no esta muerto, NO renderizo todo, sino solo el body FANTASMITA
    if (!this.isDead) {

      if (this.weapon) {
        const weapon = {
          imgSrc: `/assets/img/characters/${this.weapon.fileName}.png`,
          w: this.weapon.width,
          h: this.weapon.height,
          sx: this.weapon.initialPositionX,
          sy: this.weapon.initialPositionY,
          offsetX: 7,
          offsetY: parseInt(this.body.headOffsetY) + 55,
        };

        objectToRender.push(weapon);
      }

      if (this.shield) {
        const shield = {
          imgSrc: `/assets/img/characters/${this.shield.fileName}.png`,
          w: this.shield.width,
          h: this.shield.height,
          sx: this.shield.initialPositionX,
          sy: this.shield.initialPositionY,
          offsetX: 10,
          offsetY: parseInt(this.body.headOffsetY) + 53,
        };

        objectToRender.push(shield);
      }

      if (this.head) {
        const head = {
          imgSrc: `/assets/img/characters/${this.head.fileName}.png`,
          w: this.head.width,
          h: this.head.height,
          sx: this.head.initialPositionX,
          sy: this.head.initialPositionY,
          offsetX: parseInt(this.body.headOffsetX) + 10,
          offsetY: parseInt(this.body.headOffsetY) + 32,
        };
        objectToRender.push(head);
      }

      if (this.helmet) {
        const helmet = {
          imgSrc: `/assets/img/characters/${this.helmet.fileName}.png`,
          w: this.helmet.width,
          h: this.helmet.height,
          sx: this.helmet.initialPositionX,
          sy: this.helmet.initialPositionY,
          offsetX: parseInt(this.body.headOffsetX) + 10,
          offsetY: parseInt(this.body.headOffsetY) + 32,
        };

        objectToRender.push(helmet)
      }

    }

    // objectToRender = objectToRender.filter(x => x.imgSrc);

    for (const o of objectToRender) {
      let img = new Image();

      img.onload = () => {
        o.imgElement = img;
        count++;

        if (count >= objectToRender.length) {
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

      for (const img of objectToRender) {
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
