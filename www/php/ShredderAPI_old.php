<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

$body = file_get_contents('php://input');
$postvars = json_decode($body, true);
// $id = $postvars["id"];
// $table = $postvars["table"];
// $bewerking = $postvars["bewerking"];

// // ...
// // het volgende is ook nodig als we met F7 ipv jquery werken :
// $loc = $postvars["locatie"];
// $lat = $postvars["latitude"];
// $lon = $postvars["longitude"];

// // de volgende lijnen zijn zodat we ook vanuit gewone
// // ajax requests met POST kunnen werken.
// //if($id == null || $id == ''){
//     if(isset($_POST['id'])){
//         $id = $_POST['id'];
//     }
// //}
// //if($table == null || $itable == ''){
//     if(isset($_POST['table'])){
//         $table = $_POST['table'];
//     }
// //}
// //if($bewerking == null || $bewerking == ''){
//     if(isset($_POST['bewerking'])){
//         $bewerking = $_POST['bewerking'];
//     }
// //}

// // waarden nakijken
// if (isset($id) || isset($table) || isset($bewerking)) {
//     //echo json_encode($_POST['id']);
// } else {
//     if (!empty($postvars)) {

//     } else {
//         if ($_SERVER['REQUEST_METHOD'] == 'POST') {
//             //die('{"POSTed":' . json_encode($_POST) . ',"postvars":'. json_encode($postvars) .'}');
//         } else {
//             die('{"error":"Geen POST","status":"fail"}');
//         }
//     }
// }

// // tables die aanvaard zijn
// if (isset($bewerking) && isset($table)) {
//     // if($table !== 'producten2' && $table !== 'categorieen'){
//     if($table !== 'sportLocaties'){
//         // table mag enkel 1 van deze 2 zijn
//         die('{"error":"wrong table","status":"fail"}');
//     }
// } else {
//     die('{"error":"missing data","table":"'. $table. '", "bewerking":"' . $bewerking . '","status":"fail"}');
// }


/*
  <<<<<<<<<<<<>>>>>>>>>>>>
        Connectie
  <<<<<<<<<<<<>>>>>>>>>>>>
	
*/

    $hostname = "ID329262_bubu.db.webhosting.be";
    $username = "ID329262_bubu";
    $password = "Zorbulunur56";
    $database = "ID329262_bubu";

	$conn = mysqli_connect ($hostname, $username, $password, $database) or die(mysqli_connect_error()); 

    // Define API response codes and their related HTTP response
    $api_response_code = array(0 => array('HTTP Response' => 400, 'Message' => 'Unknown Error'), 1 => array('HTTP Response' => 200, 'Message' => 'Success'), 2 => array('HTTP Response' => 403, 'Message' => 'HTTPS Required'), 3 => array('HTTP Response' => 401, 'Message' => 'Authentication Required'), 4 => array('HTTP Response' => 401, 'Message' => 'Authentication Failed'), 5 => array('HTTP Response' => 404, 'Message' => 'Invalid Request'), 6 => array('HTTP Response' => 400, 'Message' => 'Invalid Response Format'), 7 => array('HTTP Response' => 400, 'Message' => 'DB problems'), 100 => array('HTTP Response' => 100, 'Message' => 'custom error'));

    // Set default HTTP response of 'ok' or NOK in this case
    $response['code'] = 0;
    $response['status'] = 404;
    $response['data'] = NULL;
    
    // Define whether an HTTPS connection is required
    $HTTPS_required = FALSE;

    // Define whether user authentication is required
    $authentication_required = FALSE; // staat nu op false. Test dit eens met true, en geef de nodige login credentials mee

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

/*
  <<<<<<<<<<<<>>>>>>>>>>>>
     Database functies
  <<<<<<<<<<<<>>>>>>>>>>>>
*/

// GET LOCATIONS FROM DB

if (strcasecmp($_GET['m'], 'GetSportLocaties') == 0) {
    if (!$conn) {
        $response['code'] = 0;
        $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
        $response['data'] = mysqli_connect_error();

    } else {
        $response['code'] = 1;
        $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
        
        /*--De Query--*/
           
        $lQuerySelect = "SELECT * FROM sportLocaties";
        $result = $conn -> query($lQuerySelect);
        $rows = array();
    
        if (!$result) {
            $response['code'] = 0;
            $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
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

// INSERT LOCATIONS INTO DB 

if (strcasecmp($_GET['m'], 'LocatieToevoegen') == 0) {
    if (!$conn) {
        $response['code'] = 0;
        $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
        $response['data'] = mysqli_connect_error();

    } else {
        $response['code'] = 1;
        $response['status'] = $api_response_code[$response['code']]['HTTP Response'];

        /*--Parameters van de app--*/

        $loc = $postvars['locatie'];
        $lat = $postvars['latitude'];
        $lon = $postvars['longitude'];

        /*--De Query--*/

        $lQueryInsert = "INSERT INTO `sportLocaties`( `locatie`, `latitude`, `longitude`) VALUES ('$loc', $lat, $lon)";

        /*--Controle server side--*/ 

        if($errors){
            $response['code'] = 0;
            $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
            $response['data'] = "Verificatie error: de parameters kloppen niet: " . $errors;
        } else {

                $result = $conn -> query($lQueryInsert);

            if (!$result) {
                $response['code'] = 0;
                $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
                $response['data'] = "db error";
            } else {
                $response['code'] = 1;
                $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
                $response['data'] = "Locatie toegevoegd";					
            }
        }  
    }
}

    // connectie sluiten
    $conn->close();
// Return Response to browser
    deliver_response($postvars['format'], $response);

?>




