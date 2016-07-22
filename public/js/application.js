$(document).ready(function() {

	$(".spot").droppable({
		accept: ".student",
		drop: Drop
	});

	$( ".student" ).draggable({
		helper: "clone",
	  handle: '.handle',
    opacity: 0.90
	});

	function Drop(event, ui) {
		dropId = event.target.id;
		dragId = ui.draggable.attr("id");
		
		console.log(dropId);
		console.log(dragId);

		room = dropId[4];
		spot = dropId.slice(-2);

		if (isNaN(dragId.slice(-3))) {
			student = dragId.slice(-2);
		} else {
			student = dragId.slice(-3);
		}

		console.log(room, spot, student);

		$.post("/assign_spot", {room: room, spot: spot, student: student}, function(data) {
			console.log(data);
			console.log($("#" + room + "student_spot" + spot));
			$("#" + room + "student_spot" + spot).html(data);
		});
	}



	var Student = function(name, fase, mode, init_date) {
	  var self = this;  
	  function initialize() {
	    self.id = ++ Student.total;
	    self.name = name;
	    self.fase = fase;
	    self.mode = mode;
	    self.init_date = init_date;
	    self.spot_id
	  };
	  initialize();
	};
	Student.total = 0;

	var ClassRoom = function(name) {
	  var self = this;  
	  function initialize() {
	    self.name = name;
	  };
	  initialize();
	};

	var Spot = function(id) {
    var self = this;  
	  function initialize() {
	    self.id = id;
	  };
	  initialize();
	};	

	var Computer = function(id) {
    var self = this;  
	  function initialize() {
	    self.id = id;
	  };
	  initialize();
	};

	var classroom1 = [1,2,3,4,5,6,7,8,17,20,21,24,25,28,29,32]
	var classroom2 = [1,2,3,4,5,6,7,8,18,19,24,,26,27,29,30,32]

	var counter = 1;

	console.log

	classroom1.forEach(function(spot){
		$.post("/check_spot", {spot: spot, room: 1}, function(data) {
			console.log(data);
		});

		if (spot < 10) {
			spot = "0" + spot;
		}
		$("#room1spot" + spot).addClass("active_spot");
		$("#1student_spot" + spot).html("Vacio");
		$("#1spot_number" + spot).html("#" + counter);
		$("#1mac_spot" + spot).html("Mac" + counter);
		counter++;
	});

	classroom2.forEach(function(spot){
		if (spot < 10) {
			spot = "0" + spot;
		}
		$("#room2spot" + spot).addClass("active_spot");
		$("#2student_spot" + spot).html("Vacio");
		$("#2spot_number" + spot).html("#" + counter);
		$("#2mac_spot" + spot).html("Mac" + counter);
		counter++;
	});


	// $.get('http://www.locomotion.mx/users/inscritos_api', { spots_token: '7cc4a56448fbc6fbd862008dbf5a52f7b6d25e4c' },function(data){
	// 	console.log(data);
	// });



});
