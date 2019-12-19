var up = false
	var helddown = false
	var play = false
    var width = 168
    var gameloop;

    //variable that is used to determine the chances of nutting are...changes depending on bar width
    var outof;

    //var controls how much the width of cum bar decreases, changes depending on current width
    var takeoff = 21

    

    //function that runs the first time the user presses play
    function playa(){
     document.getElementById('background').style.backgroundImage = "url('room.jpg')";
     document.getElementById('man').style.visibility = 'visible'
     document.getElementById('penisbar').style.visibility = 'visible'
     document.getElementById('barcum').style.visibility = 'visible'
     game()
    }

    
    //function that starts off the game
    function game(){
     play = true
     document.getElementById('man').src = 'man1.png'
     document.getElementById("playbutton").style.visibility = 'hidden';
     gameloop = setInterval(updatebar,1000)
    }
    


    //function that decreases the bar while the game is running
    function updatebar(){
    	if (width > 168){
    		if (width < 220){
    			takeoff = 21
    			width = width - takeoff
            }else if (width < 350){
                takeoff = 42
                width = width - takeoff
            }else if (width < 400){
            	takeoff = 80
            	width = width - takeoff
            }else if (width < 500){
            	takeoff = 140
            	width = width - takeoff
            
            }
            document.getElementById('barcum').style.width = width + 'px'
    	}else if (width < 168){
    		width = 168
    		document.getElementById('barcum').style.width = width + 'px'
    	

    }}



    //when the user has successfully managed to make him nut, this function will run and show the user he has successfully nutted
    function nut(){
    	play = false
        clearInterval(gameloop)
        document.getElementById('barcum').style.width = '2000px'
    }



    // prevents  users holding down a button by only changing a variable once the button has been released
	window.onkeyup = function pressed(event){
		if (event.which == 87){
			helddown = false
		}
	}
	// function that runs when the wank button is pressed
    window.onkeydown = function pressed(event) {
        if (event.which == 87 && helddown == false && play == true){
        	helddown = true
        	if (up == false){
        		document.getElementById('man').src = 'man2.png'
        		up = true
        	}else{
        		document.getElementById('man').src = 'man1.png'
        		up = false
        	}
        	width = width + 20
        	document.getElementById('barcum').style.width = width + 'px'
        	if (width > 449){
             nut()
        	} else if (width < 220){
                outof = 800
        	}else if (width < 350){
        		outof = 320
        	}else if (width < 400){
        		outof = 120
        	}else if (width < 500){
        		outof = 60
        	}
        	var rannum = Math.floor(Math.random()*outof)
        	if (rannum == 1){
                nut()
        	}
        }
    }   
