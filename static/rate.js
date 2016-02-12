var dishes = [];
    //for current dish 
    var curr;
    var i = 3; //tracker number
    //check if rating was complete 
    var complete = false;
    var face = false;
    var ups = false; 
    var downs = false;

$(document).ready(function() { 

	console.log("Rate connected!");
	 //get dishes json data 

     $.getJSON('explore.json', function(data) {
        dishes = data;
        console.log("getJSON activated!");
        console.log(dishes);
        curr = dishes.dishes[i];
     });



	$('.em-disappointed').click(function() { 
		console.log('disappointed clicked!');
		$('.em-disappointed').css('opacity', 1);
		$('.em-confused').css('opacity', 0.5);
		$('.em-smiley').css('opacity', 0.5);
		face = true;

	});

	$('.em-confused').click(function() { 
		console.log('meh clicked!');
		$('.em-disappointed').css('opacity', 0.5);
		$('.em-confused').css('opacity', 1);
		$('.em-smiley').css('opacity', 0.5);
		face = true;

	});

	$('.em-smiley').click(function() { 
		console.log('yay clicked!');
		$('.em-disappointed').css('opacity', 0.5);
		$('.em-confused').css('opacity', 0.5);
		$('.em-smiley').css('opacity', 1);
		face = true;

	})

	$("#submitBtn").click(function() { 
		checkCompletion();
		if (complete == true) { 
			alert("Your rating was submited!");
			return false;
		}
		else { 
			missing();
			return false;
		}
	}) 
});

function checkInput() { 
	if ($('#ui').val() != '') { 
		ups = true; 
		console.log(ups);
	}
	if ($('#di').val() != '') { 
		downs = true; 
		console.log(downs);
	}
}

function checkCompletion() { 
	checkInput();
	if (face != false && ups != false && downs != false) { 
		complete = true;
	}
}

function missing() { 
	var missing = '';
	if (face == false) { 
		missing = missing + " Faces ";
	}

	if (ups == false) { 
		missing = missing + " Ups ";
	}
	if (downs == false) { 
		missing = missing + " Downs ";
	}
	alert("You are missing the following: " + missing);
	return false;
}

