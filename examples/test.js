var x = 250;    //կենտրոնի սկզբնական x կորդինատը
var y = 0;  //կենտրոնի սկզբնական y կորդինատը
var r = 40;   //շրջանի շառավիղները
var color = "#0000FF"; //հե, հե, գույնը նույպես կարող ես սահմանել փոփոխականով
var i = 0;     //հաշվիչ է
background("#009978"); //փոխում է կտավի գույնը


x = random(200,600);
y = random(200,400);
color = randomColor();
drawCirlce(x,y,r,color);    //նկարում է շրջան

