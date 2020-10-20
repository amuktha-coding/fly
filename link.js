class Link{
    constructor(body1,point2){
        var option={
         bodyA :body1,
         pointB : point2,
         length :100,
         stiffness :0.1
        }
        this.pointB=point2
        this.chain=Constraint.create(option);
        World.add(world,this.chain);
    }
    display(){
        if(this.chain.bodyA){
        strokeWeight(3);
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }

    fly(){
        this.chain.bodyA=null;
    }
}