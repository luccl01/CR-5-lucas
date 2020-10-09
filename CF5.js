
// Movie 1 ------------------------


var movies = JSON.parse(movy);
console.table(movies);
for(var i = 0 ; i < 1; i++){
	document.getElementById("result").innerHTML = `
		<div>
            <p>${movies[i].name}</p>
            <hr>
            <p id="${i}">Description:<br> <span class="likes">${movies[i].description}</span> </p>
			<p id="${i}">Like <button class="plus"> <img class="likeButton" src="./images/129-1293150_file-like-svg-wikimedia-commons-png-youtube-blue.png"> </button> <span class="likes">${movies[i].likes}</span> </p>
			<hr>
		</div>
 	`;
}
	$(document).ready(function(){
		$(".plus").on("click", function(){
			var index = $(this).parent().attr("id");
			movies[index].likes += 1;
			$(this).parent().find(".likes").html(movies[index].likes);
			console.table(movies);
        })})
        
// Movie 2 ------------------------

for(var x = 1 ; x < 2; x++){
	document.getElementById("result1").innerHTML = `
		<div>
            <p>${movies[x].name}</p>
            <hr>
            <p id="${x}">Description:<br> <span class="likes1">${movies[x].description}</span> </p>
			<p id="${x}">Like <button class="plus1"> <img class="likeButton" src="./images/129-1293150_file-like-svg-wikimedia-commons-png-youtube-blue.png"> </button> <span class="likes1">${movies[i].likes}</span> </p>
			<hr>
		</div>
 	`;
}
	$(document).ready(function(){
		$(".plus1").on("click", function(){
			var index = $(this).parent().attr("id");
			movies[index].likes += 1;
			$(this).parent().find(".likes1").html(movies[index].likes);
			console.table(movies);
        })})



// Movie 3 ------------------------



for(var x = 2 ; x < 3; x++){
	document.getElementById("result2").innerHTML = `
		<div>
            <p>${movies[x].name}</p>
            <hr>
            <p id="${x}">Description:<br> <span class="likes2">${movies[x].description}</span> </p>
			<p id="${x}">Like <button class="plus2"> <img class="likeButton" src="./images/129-1293150_file-like-svg-wikimedia-commons-png-youtube-blue.png"> </button> <span class="likes2">${movies[i].likes}</span> </p>
			<hr>
		</div>
 	`;
}
	$(document).ready(function(){
		$(".plus2").on("click", function(){
			var index = $(this).parent().attr("id");
			movies[index].likes += 1;
			$(this).parent().find(".likes2").html(movies[index].likes);
			console.table(movies);
        })})


// Movie 4 ------------------------

for(var x = 3 ; x < 4; x++){
	document.getElementById("result3").innerHTML = `
		<div>
            <p>${movies[x].name}</p>
            <hr>
            <p id="${x}">Description:<br> <span class="likes3">${movies[x].description}</span> </p>
			<p id="${x}">Like <button class="plus3"> <img class="likeButton" src="./images/129-1293150_file-like-svg-wikimedia-commons-png-youtube-blue.png"> </button> <span class="likes3">${movies[i].likes}</span> </p>
			<hr>
		</div>
 	`;
}
	$(document).ready(function(){
		$(".plus3").on("click", function(){
			var index = $(this).parent().attr("id");
			movies[index].likes += 1;
			$(this).parent().find(".likes3").html(movies[index].likes);
			console.table(movies);
        })})

// Movie 5 ------------------------

for(var x = 4 ; x < 5; x++){
	document.getElementById("result4").innerHTML = `
		<div>
            <p>${movies[x].name}</p>
            <hr>
            <p id="${x}">Description:<br> <span class="likes4">${movies[x].description}</span> </p>
			<p id="${x}">Like <button class="plus4"> <img class="likeButton" src="./images/129-1293150_file-like-svg-wikimedia-commons-png-youtube-blue.png"> </button> <span class="likes4">${movies[i].likes}</span> </p>
			<hr>
		</div>
 	`;
}
	$(document).ready(function(){
		$(".plus4").on("click", function(){
			var index = $(this).parent().attr("id");
			movies[index].likes += 1;
			$(this).parent().find(".likes4").html(movies[index].likes);
			console.table(movies);
        })})

// Movie 6 ------------------------

for(var x = 5 ; x < 6; x++){
	document.getElementById("result5").innerHTML = `
		<div>
            <p>${movies[x].name}</p>
            <hr>
            <p id="${x}">Description:<br> <span class="likes4">${movies[x].description}</span> </p>
			<p id="${x}">Like <button class="plus5"> <img class="likeButton" src="./images/129-1293150_file-like-svg-wikimedia-commons-png-youtube-blue.png"> </button> <span class="likes5">${movies[i].likes}</span> </p>
			<hr>
		</div>
 	`;
}
	$(document).ready(function(){
		$(".plus5").on("click", function(){
			var index = $(this).parent().attr("id");
			movies[index].likes += 1;
			$(this).parent().find(".likes5").html(movies[index].likes);
			console.table(movies);
        })})