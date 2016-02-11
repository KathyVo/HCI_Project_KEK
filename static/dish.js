$(document).ready(function() { 
	console.log('dish.js connected!');

	//get dishes json data 
    var dishes;
    //for current dish 
    var curr;
    var i = 3; //tracker number

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
        $('#restaurant').text(place);
        $('#dish_name').text(name);

});
})