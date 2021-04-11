<?php
    // vervang deze gegevens door de gegevens van jouw server!
    $servername = "";
    $username = ""; // username (zie Hosting)
    $password = ""; // paswoord DATABANK (zie hosting)
    $dbname = ""; // naam databank (zie hosting ; zelf gekozen)
        
    // Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname) or die(mysqli_connect_error());

    
   
?>