
// Movie 1 ------------------------


var movies = JSON.parse(movy);
console.table(movies);
for(var x = 0 ; x < 1; x++){
	document.getElementById("result").innerHTML = `
		<div>
            <p>${movies[x].name}</p>
            <hr>
            <p id="${x}">Description:<br> <span class="likes">${movies[x].description}</span> </p>
			<p id="${x}">Like <button class="plus"> <img class="likeButton" src="./images/129-1293150_file-like-svg-wikimedia-commons-png-youtube-blue.png"> </button> <span class="likes">${movies[x].likes} </span><span class="rating">${movies[x].IMDb}-IMDb</span> </p>
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
			<p id="${x}">Like <button class="plus1"> <img class="likeButton" src="./images/129-1293150_file-like-svg-wikimedia-commons-png-youtube-blue.png"> </button> <span class="likes1">${movies[x].likes}</span><span class="rating">${movies[x].IMDb}-IMDb</span> </p>
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
			<p id="${x}">Like <button class="plus2"> <img class="likeButton" src="./images/129-1293150_file-like-svg-wikimedia-commons-png-youtube-blue.png"> </button> <span class="likes2">${movies[x].likes}</span><span class="rating">${movies[x].IMDb}-IMDb</span> </p>
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
			<p id="${x}">Like <button class="plus3"> <img class="likeButton" src="./images/129-1293150_file-like-svg-wikimedia-commons-png-youtube-blue.png"> </button> <span class="likes3">${movies[x].likes}</span><span class="rating">${movies[x].IMDb}-IMDb</span> </p>
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
			<p id="${x}">Like <button class="plus4"> <img class="likeButton" src="./images/129-1293150_file-like-svg-wikimedia-commons-png-youtube-blue.png"> </button> <span class="likes4">${movies[x].likes}</span><span class="rating">${movies[x].IMDb}-IMDb</span> </p>
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
			<p id="${x}">Like <button class="plus5"> <img class="likeButton" src="./images/129-1293150_file-like-svg-wikimedia-commons-png-youtube-blue.png"> </button> <span class="likes5">${movies[x].likes}</span><span class="rating">${movies[x].IMDb}-IMDb</span> </p>
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










        // Verusch alles in eine funktion zu packen

// var movies = JSON.parse(movy);
// console.table(movies);

//         for(var x = 0 ; x < movies.lenght; x++){
//             document.getElementById("#content").innerHTML = `<div class="movie${x} row col-lg-6 col-md-6 text-white"><img class="img-fluid col-lg-6 py-2" src="./images/FellowshipOftheRing.jpg"><div class="col-lg-6 py-2"><p id="result${x}"></p></div></div>`
//             document.getElementById(`result${x}`).innerHTML = `
//                 <div>
//                     <p>${movies[x].name}</p>
//                     <hr>
//                     <p id="${x}">Description:<br> <span class="likes2">${movies[x].description}</span> </p>
//                     <p id="${x}">Like <button class="plus${x}"> <img class="likeButton" src="./images/129-1293150_file-like-svg-wikimedia-commons-png-youtube-blue.png"> </button> <span class="likes${x}">${movies[x].likes}</span><span class="rating">${movies[x].IMDb}-IMDb</span> </p>
//                     <hr>
//                 </div>
//              `;
//         }
//             $(document).ready(function(){
//                 $(`.plus${x}`).on("click", function(){
//                     var index = $(this).parent().attr("id");
//                     movies[index].likes += 1;
//                     $(this).parent().find(`.likes${x}`).html(movies[index].likes);
//                     console.table(movies);
//                 })})