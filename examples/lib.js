var canvas = document.getElementById('canv');
var queue = new Queue(); 
var ind = 1;


/*
var interval = setInterval(function(){
    ind++;
    var f = queue.dequeue();
    if(f!==undefined){
        f.fill();
        console.log(queue.getLength());
    }

    if(ind==100){
        clearInterval(interval);
    }

},10)
*/


function drawSquare(x,y,w,color) {
    var dr = _drawSquare(x,y,w,color);
    queue.enqueue(dr);
    //queue.list();
}


function _drawSquare(x,y,w,color){
    var context = canvas.getContext('2d');
    context.beginPath();
    context.fillStyle = color;
    context.rect(x, y, w, w);
    //context.fill();
    return context;
}

function drawCirlce(x,y,r,color){
    var dr = _drawCirlce(x,y,r,color);
    queue.enqueue(dr);
    //queue.list();
}

function _drawCirlce(x,y,r,color){
        var context = canvas.getContext('2d');
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI, false);
        context.fillStyle = color;
        //context.fill();
        return context;
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
  

function background(color){
    var canv = document.getElementById("canv");
    canv.style.backgroundColor = color;
}


function clear(){
    var dr = _clear();
    queue.enqueue(dr);
}


function _clear(){
    
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1000, 1000);

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



function Queue(){
      var queue  = [];
      var offset = 0;
      this.getLength = function(){
        return (queue.length - offset);
      }
      this.isEmpty = function(){
        return (queue.length == 0);
      }
      this.enqueue = function(item){
        queue.push(item);
      }
    
      this.dequeue = function(){
        if (queue.length == 0) return undefined;
        var item = queue[offset];
        if (++ offset * 2 >= queue.length){
          queue  = queue.slice(offset);
          offset = 0;
        }
    
        return item;
    
      }
    
      /* Returns the item at the front of the queue (without dequeuing it). If the
       * queue is empty then undefined is returned.
       */
      this.peek = function(){
        return (queue.length > 0 ? queue[offset] : undefined);
      }

      this.list = function(){
          console.log(queue);
      }
    
    }