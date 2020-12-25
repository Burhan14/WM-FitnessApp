<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
//header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
/*Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With*/

//
// API Demo
//
// This script provides a RESTful API interface for a web application
//
// Input:
//
// $_GET['format'] = [ json | html | xml ]
// $_GET['m'] = []
//
// Output: A formatted HTTP response
//
// Author: Mark Roland
//
// History:
// 11/13/2012 - Created
//
// Adapted by:
// Steven Ophalvens
// -------------------------
// Tijdens een volgende les volgt een meer beveiligde, maar iets meer complexe versie van deze API.
// -------------------------

// --- Step 0 : connect to db
//require_once "dbcon.php";

// we zetten hier een 'secret' waarnaar we kijken in het bestand db.php
define ('MySecr33t', true);

// de connectiegegevens voor de databank ophalen uit het andere bestand
require '../inc/db/db.php';

// Define API response codes and their related HTTP response
$api_response_code = array(
    0 => array('HTTP Response' => 400, 'Message' => 'Unknown Error'),
    1 => array('HTTP Response' => 200, 'Message' => 'Success'), 
    2 => array('HTTP Response' => 403, 'Message' => 'HTTPS Required'), 
    3 => array('HTTP Response' => 401, 'Message' => 'Authentication Required'), 
    4 => array('HTTP Response' => 401, 'Message' => 'Authentication Failed'), 
    5 => array('HTTP Response' => 404, 'Message' => 'Invalid Request'), 
    6 => array('HTTP Response' => 400, 'Message' => 'Invalid Response Format'), 
    7 => array('HTTP Response' => 400, 'Message' => 'DB problems'));

// Set default HTTP response of 'ok' or NOK in this case
$response['code'] = 0;
$response['status'] = 404;
$response['data'] = NULL;

// Define whether an HTTPS connection is required
$HTTPS_required = FALSE;

// Define whether user authentication is required
$authentication_required = FALSE; // staat nu op false. Test dit eens met true, en geef de nodige login credentials mee

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname) or die(mysqli_connect_error());
// de or die() kan vervangen worden door de juiste aanroep van deliver_response();
// dit wordt later gedaan toch nog gedaan op de juiste plaatsen, dus we raken niet verder dan hier.
// Dit treedt normaal enkel op wanneer dit niet nog niet juist is ingesteld.

//require_once "functies.php";


// de manier waarop we via fetch data meegaven, zorgt er voor dat
// de parameters niet in $_POST, maar in de body van de request zitten
$body = file_get_contents('php://input');
$postvars = json_decode($body, true);

// --- Step 1: Initialize variables and functions

///**
// * Deliver HTTP Response
// * @param string $format The desired HTTP response content type: [json, html, xml]
// * @param string $api_response The desired HTTP response data
// * @return void
// **/
function deliver_response($format, $api_response) {

    // Define HTTP responses
    $http_response_code = array(200 => 'OK', 400 => 'Bad Request', 401 => 'Unauthorized', 403 => 'Forbidden', 404 => 'Not Found');

    // Set HTTP Response
    header('HTTP/1.1 ' . $api_response['status'] . ' ' . $http_response_code[$api_response['status']]);

    // Process different content types
    if (strcasecmp($format, 'json') == 0) {

        // Set HTTP Response Content Type
        header('Content-Type: application/json; charset=utf-8');

        // Format data into a JSON response
        $json_response = json_encode($api_response);

        // Deliver formatted data
        echo $json_response;

    } elseif (strcasecmp($format, 'xml') == 0) {

        // Set HTTP Response Content Type
        header('Content-Type: application/xml; charset=utf-8');

        // Format data into an XML response (This is only good at handling string data, not arrays)
        $xml_response = '<?xml version="1.0" encoding="UTF-8"?>' . "\n" . '<response>' . "\n" . "\t" . '<code>' . $api_response['code'] . '</code>' . "\n" . "\t" . '<data>' . $api_response['data'] . '</data>' . "\n" . '</response>';

        // Deliver formatted data
        echo $xml_response;

    } else {

        // Set HTTP Response Content Type (This is only good at handling string data, not arrays)
        header('Content-Type: text/html; charset=utf-8');

        // Deliver formatted data
        echo $api_response['data'];

    }

    // End script process
    exit ;

}



// security issue : als de m = register, geen login nodig ...
if (strcasecmp($_GET['m'], 'register') == 0) {
    $authentication_required = FALSE;
}
if (strcasecmp($_GET['m'], 'hello') == 0) {
    $authentication_required = FALSE; // om deze functie te testen is geen login nodig ...
}



// --- Step 2: Authorization

// Optionally require connections to be made via HTTPS
if ($HTTPS_required && $_SERVER['HTTPS'] != 'on') {
    $response['code'] = 2;
    $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
    $response['data'] = $api_response_code[$response['code']]['Message'];

    // Return Response to browser. This will exit the script.
    deliver_response($_GET['format'], $response);
}

// Optionally require user authentication
if ($authentication_required) {

    if (empty($postvars['user']) || empty($postvars['password'])) {
        $response['code'] = 3;
        $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
        $response['data'] = $api_response_code[$response['code']]['Message'];

        // Return Response to browser
        deliver_response($postvars['format'], $response);

    }

    // Return an error response if user fails authentication. This is a very simplistic example
    // that should be modified for security in a production environment
    else {

        if (!$conn) {
            $response['code'] = 7;
            $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
            $response['data'] = mysqli_connect_error();

            // Return Response to browser
            deliver_response($postvars['format'], $response);

        } else {
            // de login nakijken
            $lQuery = "select * FROM gebruikers where NAME like '" . $postvars['name'] . "' and PW like '" . $postvars['password'] . "'";
            $result = $conn -> query($lQuery);
            $rows = array();
            if (!$result) {
                $response['code'] = 7;
                $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
                $response['data'] = mysqli_connect_error();

                // Return Response to browser
                deliver_response($postvars['format'], $response);
            } else {
                //$response['data'] = "ok";
                while ($row = $result -> fetch_assoc()) {
                    $rows[] = $row;
                }
                if (count($rows) == 0) {
                    $response['code'] = 4;
                    $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
                    $response['data'] = $api_response_code[$response['code']]['Message'];

                    // Return Response to browser
                    deliver_response($postvars['format'], $response);
                }
            }
        }

    }

}

// --- Step 3: Process Request


// Method A: Say Hello to the API
if (strcasecmp($_GET['m'], 'hello') == 0) {
    $response['code'] = 1;
    $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
    $response['data'] = 'Hello World';
}

// --- login
if (strcasecmp($_GET['m'], 'login') == 0) {

    if (!$conn) {
        $response['code'] = 0;
        $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
        $response['data'] = mysqli_connect_error();

    } else {
        $response['code'] = 0;
        $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
        // de login nakijken
        // let op : we halen deze uit $postvars ipv uit $_POST, wat je online meer zal tegenkomen.
        $lQuery = "select * FROM gebruikers where NAME like '" . $postvars['name'] . "' and PW like '" . $postvars['password'] . "'";
        $result = $conn -> query($lQuery);
        $rows = array();
        if (!$result) {
            $response['data'] = "db error";
        } else {

            while ($row = $result -> fetch_assoc()) {
                $rows[] = $row;
            }
            if (count($rows) > 0) {
                $response['code'] = 1;
                $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
                $response['data'] = $rows[0];
            } else {
                $response['code'] = "4";
                $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
                $response['data'] = $api_response_code[$response['code']]['Message'];
            }
        }
    }
}


// --- get the time of the server!
if (strcasecmp($_GET['m'], 'getTime') == 0) {

    if (!$conn) {
        $response['code'] = 0;
        $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
        $response['data'] = mysqli_connect_error();

    } else {
        $response['code'] = 1;
        $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
        // het tijdstip van de server opvragen (volgens de db), zodat we kunnen
        // synchroniseren met bvb onze eigen app.
        $sql = "select now() as servertime";
        $result = $conn -> query($sql);
        $rows = array();
        while ($row = $result -> fetch_assoc()) {
            $rows[] = $row;
        }
        $response['data'] = $rows[0];
    }

}

// --- productenlijst
if (strcasecmp($_GET['m'], 'getProducten') == 0) {

    if (!$conn) {
        $response['code'] = 0;
        $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
        $response['data'] = mysqli_connect_error();

    } else {
        $response['code'] = 0;
        $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
        // de login nakijken
        // @FIXME : nakijken of hier niets moet gedaan worden met deze input : in welk formaat is dit?
        // vooral met speciale tekens zoals in Björn moet ik opletten (op deze server :-/)
        $lQuery = "select * FROM producten";
        $result = $conn -> query($lQuery);
        $rows = array();
        if (!$result) {
            $response['data'] = "db error";
        } else {

            while ($row = $result -> fetch_assoc()) {
                $rows[] = $row;
            }
            
            $response['code'] = 1;
            $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
            $response['data'] = $rows;
           
        }
    }
}

// --- Step 3.99: close the DB connection
mysqli_close($conn);

// --- Step 4: Deliver Response

// Return Response to browser
deliver_response($postvars['format'], $response);
?>
