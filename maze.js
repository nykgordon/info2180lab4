window.onload = function(){
	var winState = 1;
	$("status").innerHTML = ("Welcome To The Maze");
	$("start").onclick = gameStart;
	$("end").onmouseover = gameEnd;
	var walls = $$("div#maze div.boundary");
	for(var i = 0; i < walls.length; i++ ){
		walls[i].onmouseover = overWall;
	}
}

function overWall(){
	winState = 0;
	$("status").innerHTML = ("Sorry, try again!");
	var walls = $$("div#maze div.boundary");
	for(var i = 0; i < walls.length; i++){
		walls[i].addClassName("youlose");
	}
}

function gameStart(){
	winState = 1;
	$("maze").onmouseleave = overWall;
	$("status").innerHTML = ("Welcome To The Maze");
    var walls = $$("div#maze div.boundary");
    for (var i = 0; i < walls.length; i++) {
        walls[i].removeClassName("youlose");
    }

}

function gameEnd(){
	if(winState == 1){
		$("status").innerHTML = ("You won!");
	}
	else{
		$("status").innerHTML = ("Sorry, try again!");
	}
}
