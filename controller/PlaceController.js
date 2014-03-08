/**
 * @author Bohan Zheng, Bo Wang
 */
function PlaceController() {
}

PlaceController.getTripPlaces = function(planId) {
    var places = null;
    var ajax = new XMLHttpRequest();
    ajax.open('GET', (tripPlacesURL));
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && (ajax.status == 200)) {
            var obj = JSON.parse(ajax.responseText);
            places = obj.entities;
        }
    };
    ajax.send();
    return places;
};

PlaceController.displayPlaces = function(planId){
	var obj2 = this.getTripPlaces(planId);
	$('#places-list').empty();
	if(obj2.length == 0)
	{
		var r=confirm("Why not add some places?!");
		if (r == true)
		{
			//Call Add place page here.
		}
	}
	for (var i = 0; i < obj2.length; i++) {
	$('#places-list').append('<fieldset data-role="collapsible" data-theme="c" data-content-theme="c"  data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d">\
<legend><div class="ui-grid-a"><div class="ui-block-a">' + obj2[i].title + '<div style="font-size:small;font-weight:normal;">' + obj2[i].shorttext + '</div></div>\
<div class="ui-block-b" style="text-align:right;">\
<select name="switch" class="subscribe" id="'+obj2[i].uuid+'" data-role="slider" data-mini="true"><option value="false" '+(obj2[i].issubscribed == 'false'?'selected':'')+'>Off</option>\
<option value="true" '+(obj2[i].issubscribed == 'true'?'selected':'') +'>On</option></select>\
</div>\
</div></legend>\
<div data-role="navbar" style="text-align:center;"><ul>\
<li><a href="#" data-role="button" class="detail">Detail</a></li>\
<li><a href="#" data-role="button" class="schedule">Schedule</a></li>\
<li><a href="#" data-role="button" class="annotate">Annotate</a></li>\
<li><a href="#" data-role="button" class="delete">Delete</a></li>\
</ul></div></fieldset>');
	}
};

//<li><a class="subscribe" id="'+obj2[i].uuid+'" data-role="button">subscribe</a></li>

PlaceController.checkAvailability = function(place) {
	
};

PlaceController.onClickSubscribe = function(id) {
	var issubscribed = document.getElementById(id).value;
	var tripplace = TripPlaces.setSubscribe(id, issubscribed);
	
	//Create a new entity object that contains the updated properties
	var entity = new Apigee.Entity(tripplace);

    //Call Entity.save() to initiate the API PUT request
    entity.save(function(error, result) {

        if (error) {
            //error
            alert(error['message']);
            window.location.reload(); 
        } else {
            //success
            alert('success');
        }

    });
};

PlaceController.onClickDetails = function(id) {
	alert('under development');
};

PlaceController.onClickSchedule = function(id) {
	alert('under development');
};

PlaceController.onClickAnnotate = function(id) {
	alert('under development');
};

PlaceController.onClickDelete = function(id) {
	alert('under development');
};