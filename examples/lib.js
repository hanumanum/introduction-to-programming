var canvas = document.getElementById('canv');
var delay = 15;
var delay1 = 15;
//context.globalCompositeOperation = "source-over";

function drawSquare(x,y,w,color) {
    delay+=5;
    setTimeout(function(){
        var context = canvas.getContext('2d');
        context.beginPath();
        //context.clearRect(x-1, y-1, 101, 101);
        //context.clearRect(x+1, y-1, 101, 101);
        //context.clearRect(x+1, y+1, 101, 101);
        //context.clearRect(x-1, y+1, 101, 101);
        
        context.fillStyle = color;
        context.rect(x, y, w, w);
        context.fill();
        context.lineWidth = 0;
        //console.log(x,y);
    }, delay);

}


function drawCirlce(x,y,r,color){
    delay1+=5;
    setTimeout(function(){
        var context = canvas.getContext('2d');
        context.beginPath();
        //context.clearRect(x-2*r, y-2*r, 101, 101);
        //context.clearRect(x+2*r, y-2*r, 101, 101);
        //context.clearRect(x-2*r, y+2*r, 101, 101);
        //context.clearRect(x+2*r, y+2*r, 101, 101);
        //context.clearRect(x+1, y-1, 101, 101);
        //context.clearRect(x+1, y+1, 101, 101);
        //context.clearRect(x-1, y+1, 101, 101);
        context.arc(x, y, r, 0, 2 * Math.PI, false);
        context.fillStyle = color;
        context.fill();
        //context.lineWidth = 0;
        //console.log(x,y);
    }, delay1);
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

  //drawSquare(200,150);


  /*
  // wait one second before starting animation
  setTimeout(function() {
    var startTime = (new Date()).getTime();
    animate(myRectangle, canvas, context, startTime);
  }, 1000);
  */

  /*

function clear(){
    delay2+=5
    setTimeout(function(){
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1000, 1000);
        }, delay2);

}



  */