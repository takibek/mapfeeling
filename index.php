<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">

<style>
body {
  font-family: Arial;
  color: white;
                  cursor: grab;

}

.split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}
    .split:not(:hover){
          filter: brightness(35%);
    }
    
    
.left {
  left: 0;
  background-color: #f72585;
color: black;
}

.right {
  right: 0;
  background-color: #ade8f4;
}
    
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.centered img {
  width: 150px;
  border-radius: 50%;
}
    
   
</style>
</head>
<body>

<div class="split left" id="feel" onclick="feel()">
  <div class="centered">
    <img src="feelings.png" alt="Avatar woman">
    
      <h2 >send your felling</h2>
      <h1 >START NOW</h1>
  </div>
</div>

<div class="split right" id="map" onclick="map()">
  <div class="centered">
    <img id="marker" src="marker.png" alt="feelings">
    <h2>check Map Feeling</h2>
      
   
  </div>
</div>
     <script>
    function feel(){
         
      window.location.assign("index4.php");

    }
         function map(){
                   window.location.assign("index3.php");

         }
    </script>
</body>
</html> 
