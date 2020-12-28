<?php
if (!defined('MySecr33t')) {
   header("HTTP/1.1 404 Not Found");
    die('<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>404 Not Found</title>
</head><body>
<h1>Not Found</h1>
<p>The requested URL /wm/les1/php/db.php was not found on this server.</p>
</body></html>');
}
// Create connection strings
// pas deze gegevens aan op basis van de gegevens van je hosting (Combell in dit geval)
$servername = "ID329262_bubu.db.webhosting.be";
$username = "ID329262_bubu"; // username (zie Hosting)
$password = "Zorbulunur56"; // paswoord DATABANK (zie hosting)
$dbname = "ID329262_bubu"; // naam databank (zie hosting ; zelf gekozen)
?>