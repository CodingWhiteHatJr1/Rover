canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_img="mars.jpg";
rover_img="rover.png";

function add(){
    background_imgN=new Image();
    background_imgN.onload=uploadbackground;
    background_imgN.src=background_img;

    rover_imgN=new Image();
    rover_imgN.onload=uploadrover;
    rover_imgN.src=rover_img;
}

function uploadbackground(){
    ctx.drawImage(background_imgN, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgN, rover_x, rover_y, rover_width, rover_height);
}

 window.addEventListener("keydown", mykeydown);
 function mykeydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress=='38'){
        up();
        console.log("up");
    }
    if(keypress=='37'){
        left();
        console.log("left");
    }
    if(keypress=='39'){
        right());
        console.log("right");
    }
    if(keypress=='40'){
        down());
        console.log("down");
    }
 }