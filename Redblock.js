class Redblock{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(myWorld,this.body)
    }
    display(){
    var pos = this.body.position
    rectMode(CENTER);
    fill("red");
    stroke("red");
    rect(pos.x,pos.y,this.width,this.height);
    }
}