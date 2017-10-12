/*
drawSquare(100,150,300,"#FF0000");
drawSquare(50,200,200,"#8ED6FF");
drawCirlce(300,200,40,"#00FFFF");
*/
//drawCirlce(200,200,30,"#00FFFF");
//drawCirlce(600,200,100,"#00FF00");

//անտեսանելի վրձին ։) մոգական վրձին

var x = 200;
for(var x=50; x<300; x++){
        z = randomColor();
        h = randomColor();
        w = random(15,30);
        m = random(0,1000);
        n = random(0,1000);
        drawCirlce(m,n,w,z);
        drawSquare(n,m,n,h);
        //drawSquare(i,100,100,"#8ED6FF");
        //drawSquare(i+60,300,100,"#000000");
}

for(var x=50; x<300; x++){
        drawCirlce(x,300,30,"#00FFFF");
        //drawSquare(i,100,100,"#8ED6FF");
        //drawSquare(i+60,300,100,"#000000");
}