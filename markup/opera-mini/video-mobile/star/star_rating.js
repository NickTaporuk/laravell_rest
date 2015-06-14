window.onload = function() {
	var d = document,
	    ratingBlock = d.getElementsByClassName('rating'),
		i = 0;
		
	for(i = 0; i < ratingBlock.length; i++) {
		addEvent('mouseover', ratingBlock[i],ratingHover);
		addEvent('mouseout', ratingBlock[i],ratingOver);
		addEvent('click', ratingBlock[i],ratingSend);
	}
};

function ratingHover(e) {
	var stars   = e.target.parentElement.getElementsByClassName('star');
	
	var current = e.target.getAttribute('data-number')-1;
	
	for(var i = current; i >= 0; i--) {
		stars[i].style.background = 'url("icon_star.png") no-repeat scroll 0px 0px transparent';
	}
}

function ratingOver(e) {
	var stars   = e.target.parentElement.getElementsByClassName('star');
	
	for(var i = 4; i >= 0; i--) {
		stars[i].style.background = 'url("icon_star.png") no-repeat scroll 0px -30px transparent';
	}
}

function ratingSend(e) {
	var rating = e.target.getAttribute('data-number');
	
	alert(rating);
	
	xmlHttp = createXmlHttpRequestObject();
	
	/*if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0)
	{
		try{
			xmlHttp.open("POST", "/addRating", true);
			xmlHttp.onreadystatechange = handleServerResponse;
			xmlHttp.send('rating' + '+' + rating);
		}catch(e){
			alert("Невозможно соединится с сервером: \n");
		}
		
	} else
	{
		setTimeout("process()", 700);
	}*/
}

function addEvent(event, target, fun) {
	if (target.addEventListener){
		target.addEventListener(event, fun, false); 
	} else if (target.attachEvent){
		target.attachEvent(event, fun);
	}
}

function createXmlHttpRequestObject() {
	var xmlHttp;

	// Internet Explorer
	if (window.XMLHttpRequest)
	{
		try {
			xmlHttp = new XMLHttpRequest();
		} catch (e) {
			xmlHttp = false;
		}
	}
	else
	{
		try {
			xmlHttp = new ActiveXObject( "Microsoft.XMLHTTP" );
		} catch (e) {
			xmlHttp = false;
		}
	}

	if (!xmlHttp) { alert("Ошиька создния AJAX обьекта, обновите браузер !"); } else { return xmlHttp; }
}