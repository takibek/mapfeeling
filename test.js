// Initialize and add the map


function initMap() {

    let marker=[];
   let map,infoWindow;
        const uluru = { lat: -25.344, lng: 131.031 };
    
        map = new google.maps.Map(document.getElementById("map"), {
      
    zoom: 2,
    center: uluru,
  });
    
/////////////////$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
 google.maps.event.addListener(map, 'zoom_changed', function() {
    var zoom = map.getZoom();
    // iterate over markers and call setVisible
     console.log("zomming====------>"+marker[0].title);
     for(var c=0;c<city_name.length;c++){
     if(zoom<=5){
         marker[c].setVisible(false);
         console.log("zooming <20");
     }else{
         marker[c].setVisible(true);
         console.log("zooming>20");

     }
     }
    //    marker[0].setVisible(zoom <= 50);
    
});
    //-----------------------------------------------------------
   infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
       if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
            map.setZoom(8);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
    
  });


    //---------------------------------------------------------

  const locationButton1 = document.createElement("button");

  locationButton1.textContent = "refresh";
  locationButton1.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton1);
  locationButton1.addEventListener("click", () => {
    // Try HTML5 geolocation.
                    window.location.reload(true);

    
  });
   
    //---------------------------------------------------------
 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
            map.setZoom(8);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
    
    
    //////$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    //--------------------------------------
    
     
         
  ///////////////////////////////////////////////////////////////////////              

//show_markers(marker);
   /////////////////////////////////////start of  markers
   
   var a="",b="";
    console.log(locations);
    var list_city=[];
    
    var count=0;
    var row=1;
    var column=locations.length;
    console.log("row="+row+" column="+column);
    for(let i=0;i<column;i++){
        if(list_city.includes(locations[i].city)){
            
        }else{
            list_city[count]=locations[i].city;
            count++;
        }
    console.log(locations[i].feelings);
    }
    console.log(list_city);
    
    var angry=0,sad=0,happy=0,sick=0,sleeping=0,scary=0,feel="",city_name="",lat1="",lon1="";
    for(var j=0;j<list_city.length;j++){
        console.log("j enter");
        angry=0;
        happy=0;
        sad=0;
        scary=0;
        sleeping=0;
        sick=0;
        feel="";
         
        for (var k=0;k<locations.length;k++){
            console.log("k enter");
            city_name=list_city[j];
            if (locations[k].city==(list_city[j])){
                 lat1=locations[k].lat;
        lon1=locations[k].lon;
                var text=locations[k].feelings;
                if (text=="angry"){
                            console.log("i="+j+" j="+k);

                    angry++;
                }
                if(text==("sad")){
                    sad++;
                }
                if(text==("happy")){
                    happy++;
                }
                if(text==("sick")){
                    sick++;
                }
                if(text==("scary")){
                    scary++;
                }
                if(text==("sleeping")){
                    sleeping++;
                }
            }
        }
      
        
        if(angry>sad && angry>happy && angry>scary && angry>sick && angry>sleeping){
            feel="angry";
     
        }
        
        if(angry<sad && sad>happy && sad>scary && sad>sleeping && sad >sick){
            feel="sad";
        }
        
        if(sad<happy && angry<happy && happy>scary && happy>sick && happy>sleeping){
            feel="happy";
        }
        if(scary>happy && scary>angry && scary>sad && scary>sleeping && scary>sick){
           feel="scary";
           }
        if(sleeping>happy && sleeping>angry && sleeping>sad && sleeping>sick && sleeping>scary){
           feel="sleeping";
           }
        if(sick>happy && sick>angry && sick >sad && sick>sleeping && sick>scary){
           feel="sick";
           }

        const icon1 = {
    url: feel+".png", // url

    scaledSize: new google.maps.Size(25,25), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
};
        
        var number_of_people_per_city=angry+sad+happy+scary+sick+sleeping;
   
               marker[j] = new google.maps.Marker({
                   title:city_name+" is feeling:"+feel+" \n statistics:\n number of people using Map-Feeling:{"+number_of_people_per_city+"} \n happy:{"+happy+"},\n angry:{"+angry+"},\n sad:{"+sad+"},\n sleeping:{"+sleeping+"},\n scary:{"+scary+"},\nsick:{"+sick+"}",
    icon:icon1,
    position: new google.maps.LatLng(lat1,lon1),
    map: map,               
  });
       marker[j].setVisible(false);                     // remember to take this out of commant
        console.log("lat="+lat1+" lon=+"+lon1);
    }      

      
}




/*function show_markers(marker){
   let marker=[];
   let map,infoWindow;
    const uluru = { lat: -25.344, lng: 131.031 };
    
        map = new google.maps.Map(document.getElementById("map"), {
      
    zoom: 2,
    center: uluru,
  });
    google.maps.Map.prototype.clearOverlays = function() {
  for (var i = 0; i < markersArray.length; i++ ) {
    markersArray[i].setMap(null);
  }
  markersArray.length = 0;
};  
   /////////////////////////////////////start of  markers
   
   var a="",b="";
    console.log(locations);
    var list_city=[];
    
    var count=0;
    var row=1;
    var column=locations.length;
    console.log("row="+row+" column="+column);
    for(let i=0;i<column;i++){
        if(list_city.includes(locations[i].city)){
            
        }else{
            list_city[count]=locations[i].city;
            count++;
        }
    console.log(locations[i].feelings);
    }
    console.log(list_city);
    
    var angry=0,sad=0,happy=0,sick=0,sleeping=0,scary=0,feel="",city_name="",lat1="",lon1="";
    for(var j=0;j<list_city.length;j++){
        console.log("j enter");
        angry=0;
        happy=0;
        sad=0;
        scary=0;
        sleeping=0;
        sick=0;
        feel="";
         
        for (var k=0;k<locations.length;k++){
            console.log("k enter");
            city_name=list_city[j];
            if (locations[k].city==(list_city[j])){
                 lat1=locations[k].lat;
        lon1=locations[k].lon;
                var text=locations[k].feelings;
                if (text=="angry"){
                            console.log("i="+j+" j="+k);

                    angry++;
                }
                if(text==("sad")){
                    sad++;
                }
                if(text==("happy")){
                    happy++;
                }
                if(text==("sick")){
                    sick++;
                }
                if(text==("scary")){
                    scary++;
                }
                if(text==("sleeping")){
                    sleeping++;
                }
            }
        }
      
        
        if(angry>sad && angry>happy && angry>scary && angry>sick && angry>sleeping){
            feel="angry";
     
        }
        
        if(angry<sad && sad>happy && sad>scary && sad>sleeping && sad >sick){
            feel="sad";
        }
        
        if(sad<happy && angry<happy && happy>scary && happy>sick && happy>sleeping){
            feel="happy";
        }
        if(scary>happy && scary>angry && scary>sad && scary>sleeping && scary>sick){
           feel="scary";
           }
        if(sleeping>happy && sleeping>angry && sleeping>sad && sleeping>sick && sleeping>scary){
           feel="sleeping";
           }
        if(sick>happy && sick>angry && sick >sad && sick>sleeping && sick>scary){
           feel="sick";
           }

        const icon1 = {
    url: feel+".png", // url

    scaledSize: new google.maps.Size(25,25), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
};
        
        var number_of_people_per_city=angry+sad+happy+scary+sick+sleeping;
   
               marker[j] = new google.maps.Marker({
                   title:city_name+" is feeling:"+feel+" \n statistics:\n number of people using Map-Feeling:{"+number_of_people_per_city+"} \n happy:{"+happy+"},\n angry:{"+angry+"},\n sad:{"+sad+"},\n sleeping:{"+sleeping+"},\n scary:{"+scary+"},\nsick:{"+sick+"}",
    icon:icon1,
    position: new google.maps.LatLng(lat1,lon1),
    map: map,               
  });
       marker[j].setVisible(false);                     // remember to take this out of commant
        console.log("lat="+lat1+" lon=+"+lon1);
    }     
}
*/
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}
function clearOverlays() {
  for (var i = 0; i < locations.length; i++ ) {
    marker[i].setMap(null);
  }
  marker.length = 0;
}
window.initMap = initMap;


