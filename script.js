//Studio ICD 6/25/2018

var button = target

document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || text.innerText;   
}, false);

function loadComplete() {
	document.getElementById('ICDSectionDetails').style.display = 'none';
	document.getElementById('NTSectionDetails').style.display = 'none';
	document.getElementById('LADSectionDetails').style.display = 'none';
	document.getElementById('GearsSectionDetails').style.display = 'none';
}

function loadCompleteApps() {
	document.getElementById('NTSectionDetails').style.display = 'none';
	document.getElementById('LADSectionDetails').style.display = 'none';
	document.getElementById('GearsSectionDetails').style.display = 'none';
}

function loadCompleteAbout() {
	//Intentionally Empty
}

function hideShowSection(details, section) {
	var x = document.getElementById(details);
	var z = document.getElementById(window.event.target.id);

    if (x.style.display === 'none') {
        $("#" + details).slideDown();	

        if (section != null) {
        	var focus = document.getElementById(section).getBoundingClientRect();
        	var dist = focus.top + 80;

        	window.scrollBy(0, dist)
        }

    } else {
    	$("#" + details).slideUp();

        //x.style.display = 'none';
        //z.innerHTML = "+";
    }

}