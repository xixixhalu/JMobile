/**
 * @author Bohan Zheng, Bo Wang
 */
var client_creds = {
	orgName : 'bohan2345',
	appName : 'sandbox'
};

//Initializes the SDK. Also instantiates Apigee.MonitoringClient
var dataClient = new Apigee.Client(client_creds);

//URL for requesting the data of trip places from apigee
var tripPlacesURL = 'https://api.usergrid.com/bohan2345/sandbox/tripplaces/?limit=999';

/*******************************Data Structure in APIgee****************************
var tripplace = {
        client : dataClient, //Required
        data : {
            'type' : 'tripplaces',
            'uuid' : id,
            'name' : name,
            'title' : placename,				//place name
            'shorttext' : shortdescription,		//place short description
            'issubscribed' : issubscribed		//subscribed status
        }
    };
***********************************************************************************/
function TripPlaces(){
	
}

//Setter
TripPlaces.setSubscribe = function(id, issubscribed){
	var tripplace = {
        client : dataClient, //Required
        data : {
            'type' : 'tripplaces',
            'uuid' : id,
            'issubscribed' : issubscribed
        }
    };
 	return tripplace;
};

TripPlaces.setShorttext = function(id, shorttext){
	
};
//Add other Setters here
//#End of Setter