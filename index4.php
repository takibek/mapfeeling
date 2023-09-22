<html>
    <head>
              <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">

    <style>
        *{
            margin: 0px;
            padding: 0px;
        }
         .choose{
          text-align: center;  
          }
        table.tab {
  margin-left: auto; 
  margin-right: auto;
}
        
        .im{
            width: 200px;
            height: 200px;
        }
        .im:hover {
     width: 300px;
     height: 300px;
    cursor: grab;
-webkit-animation: breathing 10s ease-out infinite normal;
  animation: breathing 10s ease-out infinite normal;
}
@-webkit-keyframes breathing {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  25% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  75% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes breathing {
  0% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
  25% {
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
  }
  50% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
  75% {
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
  }
  100% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
}
        body{
            background-color: aqua;
        }
        h1{
            background-color: black;
            color: white;
            width: 100%;
            height: 70px;
        }
        
        #p{
            background-color: black;
            color: red;
            width: auto;
            font-size: 20px;
            
        }
        #af_f{
            text-align: center;
            padding-top: 20%;
            color: black;
            font-size: 70px;
            font-family: inherit;
        }
        </style>
    </head>

<body>
    
      <div id="go" class="choose">
      <h1>How do you feel?          <p id="p"></p>
</h1>
          <table class="tab"  id="tab">
              
          <tr>
              <td><img class="im"  src="sad.png" onclick="feeling1('sad')"></td>
               <td><img class="im"  src="happy.png" onclick="feeling1('happy')"></td>
               <td><img class="im"  src="angry.png" onclick="feeling1('angry')"></td>
              </tr>
              <tr>
              <td><img  class="im" src="sleeping.png" onclick="feeling1('sleeping')"></td>
                  <td><img  class="im" src="scary.png" onclick="feeling1('scary')"></td>
                  <td><img  class="im" src="sick.png" onclick="feeling1('sick')"></td>
             
          </table>
         <p id="af_f"></p>
      </div>
    </body>
</html>
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

    <script src="https://code.jquery.com/ui/1.10.4/jquery-ui.js"> </script>

<script>
 function feeling1(x){
                document.getElementById('tab').style.display='none';
           document.getElementById('tab').style.visibility = 'hidden';
        document.getElementById("af_f").textContent="thank you for choosing your feeling" ;

                alert(x);

                 var xx;
              
        if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(function(position){
        console.log(position);
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
        
         const link=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
         fetch(link).then(res=>res.json()).then(data=>{
          console.log(data)
             xx=data.principalSubdivision;
             var emp={};
    emp.city=xx;
             emp.lat=latitude;
             emp.lon=longitude;
             emp.feeling=x;
    console.log(emp);
    $.ajax({
        url:"send_data.php",
        method:"post",
        data:{emp:JSON.stringify(emp)},
        success:function(res){
            console.log(res);
        }
    });

      });

       
        
    });
        } 
              /////////////////////end
              
 var time = 10, interval = setInterval(function () {
  console.log(--time);
  if (time === 0) {
     window.location.replace("index3.php");
    clearInterval(interval);
  }else{

  document.getElementById("p").textContent="you will be transfered to the the map page after:"+time;
  }
}, 1000);
     
        }
               

</script>