$(document).ready(function() { 
	console.log('dish.js connected!');

	//get dishes json data 
    var dishes;
    //for current dish 
    var curr;
    var i = 0;

    //get JSON data with first 
         $.getJSON('explore.json', function(data) {
	        dishes = data;
	        console.log("getJSON activated!");
	        
	        curr = data.dishes[i];
	        console.log(curr);
	        var name = curr.name;
	        console.log("name variable testing..." + name);
	        var im = curr.imgURL;
	        var place = curr.restaurant;
	        $('#dishIMG').attr('src', im);
	        $('#dis').text(curr.dis);
	        $('#meh').text(curr.meh);
	        $('#yay').text(curr.yay);
	        $('#u1').text(curr.u1);
	         $('#u2').text(curr.u2);
	          $('#u3').text(curr.u3);
	          $('#d1').text(curr.d1);
	         $('#d2').text(curr.d2);
	          $('#d3').text(curr.d3);
	        $('#restaurant').text(place);
	        $('#dish_name').text(name);
	        $('#dname').html(curr.name);
     		$('#drest').html(curr.restaurant);
     		console.log(curr.name);

		});

         $('#bmk').click(function() { 
         	alert(curr.name + " Bookmarked!");
         })
})