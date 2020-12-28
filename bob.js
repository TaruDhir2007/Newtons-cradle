class Bob{
    constructor(x, y, radius, options){
        var options = {
      restitution: 0.2,
      density: 0.4,
      friction: 0.5
       }
       this.body = Bodies.circle(x, y, 50, options)
       World.add(world, this.body)
   
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(230, 230, 0);
        ellipse(0, 0, this.radius);
        pop();
      }
    }
