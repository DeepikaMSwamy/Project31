class Human{
    constructor(){
        var options = {
            isStatic:true    
        }

        this.body=Bodies.rectangle();
        this.image=loadImage("walking_1.png");
        
        World.add(world,this.body);
    }

    display(){        
        var pos = this.body.position;
        image(this.image, 100, 300,200,200);
    }
}