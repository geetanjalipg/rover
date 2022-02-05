canvas=document.getElementById("myCanvas");
cntx=canvas.getContext("2d");

rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;


background_img="mars.jpg";
rover_img="rover.png";


function add(){
    background_imgtag=new Image();
    background_imgtag.src=background_img;
    background_imgtag.onload=uploadbackground;

    rover_imgtag=new Image();
    rover_imgtag.src=rover_img;
    rover_imgtag.onload=uploadrover;

}
function uploadbackground(){
    cntx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    cntx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if(keypressed==38){
        console.log("up");
        up();
        
    }
    if(keypressed==40){
        console.log("down");
        down();
        
    }  if(keypressed==37){
        console.log("left");
        left();
        
    }  if(keypressed==39){
        console.log("right");
        right();
        
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log(" rover x= " + rover_x + " rover y= " + rover_y);
        uploadbackground();
        uploadrover();

    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log(" rover x= " + rover_x + " rover y= " + rover_y);
        uploadbackground();
        uploadrover();
        
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log(" rover x= " + rover_x + " rover y= " + rover_y);
        uploadbackground();
        uploadrover();
        
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log(" rover x= " + rover_x + " rover y= " + rover_y);
        uploadbackground();
        uploadrover();
        
    }
}

