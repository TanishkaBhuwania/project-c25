class Paper {

    constructor(x, y) {
  
      var options = {
          isStatic : false,
          restitution : 0.5,
          friction : 0.5,
          density : 1.2
      }
      
      this.body = Bodies.circle(75,100,20,options);
      this.image	 = loadImage("paper.png");
      World.add(world,this.body);
    }
  
    display(){
      var pos =this.body.position;
      push();
    //ellipseMode(RADIUS);
      ellipse();
     imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y,100,100);	
      strokeWeight(4);
      stroke("blue");
      fill("yellow");
      pop();
    }
  };