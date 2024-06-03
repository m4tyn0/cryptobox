class Punch {
  constructor(image, x, y, direction, ctx) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.pressed = false;
    this.punchImg = new Image();
    this.punchImg.src = image;
    this.ctx = ctx;
  }

  draw(x, height) {
    this.x = x;
    this.y = height;
    if (this.pressed) {
      this.x += this.direction;
      this.pressed = false;
    }
    this.ctx.drawImage(this.punchImg, this.x, this.y, 50, 38);
  }

  hit(numPlayerPunch, faceWidth, oponentPlayer) {
    this.pressed = true;
    return this.checkHit(numPlayerPunch, faceWidth, oponentPlayer);
  }

  checkHit(numPlayerPunch, faceWidth, oponentPlayer) {
    if(numPlayerPunch === 1){
      if(this.x + 125  >= oponentPlayer.x &&
        this.y >= oponentPlayer.y &&
        this.y + 38 <= oponentPlayer.y + faceWidth){
          oponentPlayer.faceImg.src = './images/punchFaceRight.png';
          setTimeout(function() {
            oponentPlayer.faceImg.src = './images/FacePlayer2.png';
          }, 300);
        return true;
      }
    }
    if(numPlayerPunch === 2){
      if(this.x <= oponentPlayer.x + 125 &&
        this.y >= oponentPlayer.y &&
        this.y + 38 <= oponentPlayer.y + faceWidth){
          oponentPlayer.faceImg.src = './images/punchFaceLeft.png';
          setTimeout(function() {
            oponentPlayer.faceImg.src = './images/FacePlayer1.png';
          }, 300);
        return true;
      }
    }
    return false;
  }
}

export default Punch;