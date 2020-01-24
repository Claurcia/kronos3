$(function() {
	var tiempo=0
	$(".signomas").click(function(){
		tiempo++
		console.log(tiempo)
		var d1 = document.getElementById('one');
		document.getElementById("one").style.display = "none";
		d1.insertAdjacentHTML('afterend', '<i id="add-'+ 1 +'" class="fas fa-laptop-code ingresa-icono"></i>');
		$(".nuevo").addClass("horas");
		$(".horas").removeClass("nuevo");

		

	});
	$(".signomenos").click(function(){
		tiempo--
		console.log(tiempo)
		var d1 = document.getElementById('add-'+ 1 );
		d1.remove();
		if(tiempo==0){
		$(".horas").addClass("nuevo");
		$(".nuevo").removeClass("horas");
		document.getElementById("one").style.display = "";
		document.getElementById(".signomenos").disabled = true;
		}
		

	});

	var btnClick = document.getElementById('btn1');
	var startTime, endTime;
	// console.log(btnClick);
	// btnClick.onclick = function() {
	// 	console.log("Estoy presionado");
	// 	};

	/*Cuando se haga clic*/
	btnClick.onmousedown = function() {
	  startTime = new Date();
	  // console.log("Estoy presionado, haz lo que necesites...");
	};

	/*Cuando se deje de hacer clic*/
	btnClick.onmouseup = function() {
	  endTime = new Date();
	  var timeDiff = endTime - startTime; //en ms
	  // console.log("Se hizo clic:\n" + startTime);
	  // console.log("Se levantó el clic:\n" + endTime);
	  // console.log("Tiempo transcurrido:\n" + timeDiff + " ms");
	  if (timeDiff>1400){
	  	$("#myModal").modal()
	  	};
	};


	btnClick.addEventListener('long-press', function(e) {
		$("#myModal").modal()
	});


	
});