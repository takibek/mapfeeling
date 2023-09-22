
<?php
require("opendatabase.php");
 
?>
<?php
$query="select * from map";
    $result=mysqli_query($connection,$query);
    if(!$result){
        die("<br>problem of retreiving data");
    }
$list_map=array();
 while($row=mysqli_fetch_assoc($result)){
     $list_map[]=$row;
    }
$npeople=sizeof($list_map);

    mysqli_close($connection);

?>

<html>
  <head>
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">

      <style>
      /* 
 * Always set the map height explicitly to define the size of the div element
 * that contains the map. 
 */
#map {
  height: 100%;
}

/* 
 * Optional: Makes the sample page fill the window. 
 */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.custom-map-control-button {
  background-color: #fff;
  border: 0;
  border-radius: 2px;
  box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.3);
  margin: 10px;
  padding: 0 0.5em;
  font: 400 18px Roboto, Arial, sans-serif;
  overflow: hidden;
  height: 40px;
  cursor: pointer;
}
.custom-map-control-button:hover {
  background: rgb(235, 235, 235);
}
      

/* Create two equal columns that floats next to each other */


/* Clear floats after the columns */
    </style>
    <title>Geolocation</title>
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">

      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<link href="https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
<script src="https://code.jquery.com/ui/1.10.4/jquery-ui.js"> </script>
    <link rel="stylesheet" type="text/css"/>
    <script type="module" src="./test.js"></script>
  </head>
  <body>
         
          <div id="map"></div>
      
    <!-- 
     The `defer` attribute causes the callback to execute after the full HTML
     document has been parsed. For non-blocking uses, avoiding race conditions,
     and consistent behavior across browsers, consider loading using Promises
     with https://www.npmjs.com/package/@googlemaps/js-api-loader.
    -->
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAY-m6hiGgfeNzRXgFEOb7yhRZtXW6GqS4&callback=initMap&v=weekly"
            defer></script>
        
  </body>
</html>
<script>
var locations = <?php echo json_encode($list_map); ?>;
console.log(locations);

    
    
      /*setTimeout(function(){
   //window.location.reload();
          
}, 50000);*/
   
   
</script>