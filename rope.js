class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
       var options={
           'bodyA':bodyA,
           'bodyB':bodyB,
           'pointB':{x:this.offsetX,y:this.offsetY},
       }

       this.sling=Matter.Constraint.create(options);
       World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.bodyB.position;
        push();
        strokeWeight(4);
        var Anchor2X=pointB.x+this.offsetX
        var Anchor2Y=pointB.y+this.offsetY
        line(pointA.x,pointA.y,Anchor2X,Anchor2Y);
        pop();
        
    }
}