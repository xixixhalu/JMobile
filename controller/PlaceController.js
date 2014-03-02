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
<legend><div class="ui-grid-b"><div class="ui-block-a">' + obj2[i].name + '<div style="font-size:small;font-weight:normal;">' + obj2[i].shorttext + '</div></div>\
<div class="ui-block-b"></div>\
<div class="ui-block-c" style="padding:10px 20px;text-align:center;">\
<select name="switch" class="subscribe" id="'+obj2[i].uuid+'" data-role="slider" data-mini="true"><option value="false" '+(obj2[i].issubscribed == 'false'?'selected':'')+'>Off</option>\
<option value="true" '+(obj2[i].issubscribed == 'true'?'selected':'') +'>On</option></select>\
</div>\
</div></legend>\
<div data-role="navbar" style="text-align:center;"><ul>\
<li><a href="#" data-role="button">Detail</a></li>\
<li><a href="#" data-role="button">Schedule</a></li>\
<li><a href="#" data-role="button">Annotate</a></li>\
<li><a href="#" data-role="button">Delete</a></li>\
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
        } else {
            //success
            alert('success');
        }

    });
};

PlaceController.onClickDetails = function(id) {
	
};

PlaceController.onClickSchedule = function(id) {
	
};

PlaceController.onClickAnnotate = function(id) {
	
};

PlaceController.onClickDelete = function(id) {
	
};