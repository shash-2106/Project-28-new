class pull{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }

    fly(){
        this.string.bodyA = null;
    }

   attach(body){
        this.string.bodyA = body;
    }

    display(){
        if(this.string.bodyA){
            var pointA = this.string.bodyA.position;
            var pointB = this.pointB;
            //push();
            strokeWeight(7);
            stroke(48,22,8);
            /*if(pointA.x < 220) {
                
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();*/
        }
    }
}