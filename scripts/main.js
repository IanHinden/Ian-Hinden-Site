		
	var age = 0;
	var health = Math.floor((Math.random() * 50) + 20);
	var boredom = 50;
	var moving = Math.floor((Math.random() * 50) + 20);
	var diseases = Math.floor((Math.random() * 50) + 20);
	
	function beginGame(){
		moveTime();
		older();
		moreBored();
		show();
	}
	
	function older(){
		age = age + 1;
		old_time= setTimeout("older();", 10000);
		update();
		
	}
	
	function moveTime(){
		moving = moving + Math.floor(Math.random() * 5);
		if(moving > 100)
			{moving = 100};
		pageDetermine();
		update();
		healthCheck();
		the_time_out = setTimeout("moveTime();", 3000);
	}
	
	
	function moreBored(){
		boredom = boredom + 5;
		more_bored=setTimeout("moreBored();", 4000);
		update();
	}
	
	function moreDiseases(){
		diseases = diseases + Math.floor(Math.random() * 10);
		disease_time = setTimeout("moreDiseases();", 20000);
		update();
	}
	
	function playGame(){
		boredom = boredom - 20;
		update();
	}
	
	function substractNum(){
		moving = moving - 5;
		update();
		healthCheck();
	}
	
	function medicate(){
		diseases = diseases - 10;
		update();
	}
	
	function update() {
	var changenumvar = document.getElementById("numvar");
	changenumvar.textContent = "Hunger: " + moving + "%";
	var changeage = document.getElementById("age");
	changeage.textContent = "Age: " + age;
	var changebored = document.getElementById("boredom");
	changebored.textContent = "Boredom: " + boredom + "%";
	var changehealth = document.getElementById("sickness");
	changehealth.textContent = "Concentration of diseases: " + diseases + "%";
	}
	
	function healthCheck(){
		if(moving > 70){
			document.getElementById("dragon").src="images/sad.jpg";
		} else {
			document.getElementById("dragon").src="images/happy.jpg";
		}
		
	}
	
	function show(){
		var unhide = document.querySelectorAll(".hidden");
		for (var i = 0; i < unhide.length; i++){
			unhide[i].className = "show";
		}
		var hide = document.getElementById("started");
			hide.className="hidden";
	}
	
	function pageDetermine(){
		if(moving < 0)
			{
				window.location.assign("gameover.html");
			}
		if(moving == 100)
			{
				window.location.assign("gameoverstarved.html");
			}
		if(boredom == 100){
				window.location.assign("gameoverbored.html");
			}
		if(boredom < 0){
				window.location.assign("gameovertired.html");
		}
		if(age == 20){
				window.location.assign("gamewon.html");
			}
	}

	function beginPage(){
		var litButton=document.getElementById("started");
		litButton.addEventListener("mouseover", lightUp, false);
		
		litButton.addEventListener("mouseout", lightDown, false);
		
		function lightUp(){
			litButton.style.background="gray";
		}
		
		function lightDown(){
			litButton.style.background="";
			
		}
	}

	window.addEventListener("load", beginPage, false);
	
	
