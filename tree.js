class tree{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("tree.png")
    }
    display(){
        imageMode(CENTER);
        image(this.image,600,400,this.width,this.height)
    }
}