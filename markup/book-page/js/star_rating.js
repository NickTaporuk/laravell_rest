window.onload = function() {
    if (document.readyState == "complete") {
    console.log('complete', new Date(2011, 0, 1, 2, 3, 4, 567));
    }
	var d = document,
	    ratingBlock = d.getElementsByClassName('rating'),
		i = 0;

    type =  ratingBlock[0].classList.contains('rating-medium')  ? 2 : d.getElementsByClassName('rating').classList.contains('rating-small') ? 1 : 3;
    stat = 10; // default value

    if(type == 2) {
        positionStart = '0px -40px';
        positionEnd   = '0px 0px';
    } else if(type == 3) {
        //big
    } else if (type == 1) {
        //small
    }

	for(i = 0; i < ratingBlock.length; i++) {
		addEvent('mouseover', ratingBlock[i],ratingHover);
		addEvent('mouseout', ratingBlock[i],ratingOver);
		addEvent('click', ratingBlock[i],ratingSend);
	}
};

function ratingHover(e) {

	var stars   = e.target.parentElement.getElementsByClassName('star');
	
	var current = e.target.getAttribute('data-number')-1;
	if(e.target.classList.contains('star')) {
		for(var i = 4; i >= 0; i--) {
		stars[i].style.backgroundPosition = positionStart;
		}
	
		for(var i = current; i >= 0; i--) {
		stars[i].style.backgroundPosition = positionEnd;
		}
	}
}

function ratingOver(e) {
	var stars   = e.target.parentElement.getElementsByClassName('star');
	
	for(var i = 4; i >= 0; i--) {
		stars[i].style.backgroundPosition = positionStart;
	}
	
	for(var i = 4; i >= 0; i--) {
		if(stat == 10) {
			stars[i].style.backgroundPosition = positionStart;
		} else {
			for(var i = stat-1; i >= 0; i--) {
				stars[i].style.backgroundPosition = positionEnd;
			}
		}
	}
}

function ratingSend(e) {
	var rating = e.target.getAttribute('data-number');
	var stars   = e.target.parentElement.getElementsByClassName('star');
	var current = e.target.getAttribute('data-number');
	stat = current;
		
	for(var i = current-1; i >= 0; i--) {
		stars[i].style.backgroundPosition = positionEnd;
	}
	
	xmlHttp = createXmlHttpRequestObject();
	
	/*if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0)
	{
		try{
			xmlHttp.open("POST", "/addRating", true);
			xmlHttp.onreadystatechange = handleServerResponse;
			xmlHttp.send('rating' + '+' + rating);
		}catch(e){
			alert("���������� ���������� � ��������: \n");
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

	if (!xmlHttp) { alert("������ ������� AJAX �������, �������� ������� !"); } else { return xmlHttp; }
}