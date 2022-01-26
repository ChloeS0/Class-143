img="";
nose_x=0;
nose_y=0;
mario_x=0;
mario_y=0;
game_status="";
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	jump=loadSound("jump.wav");
	coin=loadSound("coin.wav");
	game_over=loadSound("gameover.wav");
	kick=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800, 400);
	video.parent("game_console");
	poseNet=ml5.poseNet(video, modelLoaded);
	poseNet.on("pose", gotPoses);
}


function modelLoaded()
{
	console.log("model is loaded");
}

function gotPoses(results)
{
	if(results.length > 0)
	{
		console.log(results)
		nose_x=results[0].pose.nose.x;
		nose_y=results[0].pose.nose.y;
		console.log("x position of nose: " + nose_x);
		console.log("y position of nose: " + nose_y);
	}
}
function draw() {
	game()
	
}

function startGame()
{
	game_status="start";
	document.getElementById("status").innerHTML="Game is Loading";
}

function game()
{
	console.log("nose x: " + nose_x);
	console.log("nose_y: " + nose_y);
}






