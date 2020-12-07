class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.1,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("cup.png")
    this.visiblity = 225;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    if(this.body.speed<5){
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
    } else{
      push();
      World.remove(world, this.body);
      this.visiblity = this.visiblity - 3;
      tint(255,this.visiblity);
      image(this.image,this.body.position.x, this.body.position.y,50,50);
      pop();
    }

  }
  score(){
    if(this.visiblity < 0 && this.visiblity > -105){
      score = score+1
    }
  }
 
}
