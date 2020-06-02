<?php
//echo "CONTROLLER CONTACT";
class controller_contact {
		
    function __construct(){
        $_SESSION['module'] = "contact";
    }

    function list_contact(){//carga la vista(HTML JS)

        require(CLIENT_VIEW_PATH . "inc/top_page_client.html");
        require(CLIENT_CONTACT_VIEW_PATH . "inc/top_page_contact.php");
        require(CLIENT_VIEW_PATH . "inc/header.html");
        loadView(CLIENT_CONTACT_VIEW_PATH,'contact.html');
        require(CLIENT_VIEW_PATH . "inc/bottom_page.html");
    }

    function send_contact(){//carga la vista(HTML JS)
        $params = json_decode(file_get_contents('php://input'));

        

        $name = $params->name;
        $email = $params->email;
        $tlf = $params->tlf;
        $location = $params->location;
        $issue = $params->issue;

        $html = <<<EOD
        <html>
        <body>
            <strong>Contact information:</strong>
            <br><br>
            <span><strong>Name:</strong> $name</span><br>
            <span><strong>Email:</strong> $email</span><br>
            <span><strong>Tlf:</strong> $tlf</span><br>
            <span><strong>Location:</strong> $location</span><br>
            <br><br>
            <strong>Mensaje:</strong>
            <p>$issue</p>
            <br><br>
            <span>Puedes visitar nuestra web en: <a href="http://localhost/movieshop_fw_php/">www.movieshop.com</a></span>
            <br>
            <p>Sent by Movieshop</p>
        </body>
        </html>
        EOD;

        $data = array(
            'type' => 'contact',
            'email' => $email,
            'html' => $html
        );
        
        $result = send_email($data);
        echo json_encode($result);
        exit;
    }
}