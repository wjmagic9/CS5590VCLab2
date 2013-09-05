var directionDisplay;
var directionsService = new google.maps.DirectionsService(); 
var map;

function initialize()
{
    directionsDisplay = new google.maps.DirectionsRenderer();        //Create a DirectionsRenderer object to render the directions results
    var center = new google.maps.LatLng(39, -94); 
     var myOptions =
    {
            zoom:7,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: center
    }
    $('#sample0').click(function() {
    $(this).val('Request Submitted');
     });
     map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    directionsDisplay.setMap(map);
      
       //Set the source/ origin
       var start = document.getElementById('start').value;
       var end = document.getElementById('end').value;
      
    var request =
    {
            origin:start,
            destination:end,
            travelMode: google.maps.DirectionsTravelMode.DRIVING          //Current travel mode is DRIVING. You can change to BICYCLING or WALKING and see the changes.
    };
    directionsService.route(request, function(response, status)
    {
            if (status == google.maps.DirectionsStatus.OK) //Check if request is successful.
            {
            directionsDisplay.setDirections(response);         //Display the directions result
            }
    });   
    
}


