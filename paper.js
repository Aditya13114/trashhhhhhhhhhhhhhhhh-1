class Paper{
 constructor (x,y,radius,options){
    var ball_options = {
       isStatic:false,
       restitution:0.3,
       friction:0.5,
       density:1.2,
    }
    
    this.body = Bodies.circle(x,y,radius,ball_options);
    this.radius = radius;
    World.add(world,this.body);
 }
 
 display(){

  var pos=this.body.position;
        
        var angle=this.body.angle;
        push();
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,20,20);
        pop();
 }






}