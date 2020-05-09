window.onload = draw;

function draw(){
  var canvas = document.getElementById("stars");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  sky.paint(canvas);
}

var sky = {
  quantStars: 200,
  canvas: null,
  ctx: null,
  paint: function(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    
    this.drawSky();
    this.populateSky();
  },
  drawSky: function() {
    this.ctx.fillRect(10, 10, this.canvas.width, this.canvas.height);
  },
  populateSky: function() {
    for(var i=0; i < this.quantStars; i++){
      this.drawStar(Math.random()*this.canvas.width,
                    Math.random()*this.canvas.height);
    }
  },
  drawStar: function(posX, posY) {
    this.ctx.save();
    this.ctx.translate(posX, posY);
    var escala = Math.random()*1.5;
    this.ctx.scale(escala, escala);
    var raioMax = 2;
    var raioMin = 2;
    this.ctx.beginPath();
    this.ctx.rotate(Math.random());
    this.ctx.moveTo(raioMax, 0);
    for (var i = 0; i < 10; i++){
      this.ctx.rotate(Math.PI/5)
      if (i%2 == 0){
        this.ctx.lineTo(raioMin, 0)
      } else {
        this.ctx.lineTo(raioMax, 0)
      }
    }
    this.ctx.closePath();
    this.ctx.fillStyle = "white";
    this.ctx.fill();
    this.ctx.restore();
  }
}