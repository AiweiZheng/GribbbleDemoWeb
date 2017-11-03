
var newCircle = new Path.Circle(new Point(100,100), 300);
		          newCircle.fillColor = "red";
function onKeyDown(event){
  newCircle.fillColor = "yellow";
}

function onFrame(event){
		    	newCircle.fillColor.hue +=1;
		    	newCircle.scale(.9);
}