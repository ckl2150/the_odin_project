$(document).ready(function() {
	var tilePerSide = 16;
	createGrid(tilePerSide);
  
  // Clicking the button activates createGrid() again, this time with a user's tile specification
  $("button").click(function() {
  	tilePerSide = prompt("How many tiles per square do you want?");
  	$(".wrapper").empty();
		createGrid(tilePerSide);
  });
});

// Responsible for creating grid of divs, and resetting event handler hover whenever a new grid is created
function createGrid(tiles) {
	for (var i = 0; i < tiles; i++) {
		for (var j = 0; j < tiles; j++) {
			$(".wrapper").append("<div></div>");
      $(".wrapper > div").css("width", 600/tiles + "px");
      $(".wrapper > div").css("height", 600/tiles + "px");
			//IF you wanted to add specific id's to each tile
			//console.log("<div id=\"i" + i + "j" + j + "\"></div>");
		}
	}
  
  // Responsible for changing the sketchpad's color on hover
  $(".wrapper > div").hover(function() {
  	console.log("hovering");
  	$(this).addClass("hitme");
  });
};