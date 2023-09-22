      <script src="http://code.jquery.com/jquery-3.5.1.js"></script>

<script type="text/javascript">


<?php
require("opendatabase.php");
   $emp=json_decode($_POST['emp'],true);
 $city=$emp['city'];
    $lat=$emp['lat'];
    $lon=$emp['lon'];
    $feeling=$emp['feeling'];
    //$city="null"; $lat="null";$lon="null";$feeling="null";

    $query="insert into map (id,city,lat,lon,feelings)values(NULL,'".$city."','".$lat."','".$lon."','".$feeling."')";
    $result=mysqli_query($connection,$query);
    if(!$result){
        die("problem of sending data");
    } 
    

    ?>
