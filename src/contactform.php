<?php

if (isset($_POST['submit'])) {

    //Creating variables
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $company = $_POST['company'];
    $emailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    date_default_timezone_set('America/Toronto');
    $date = date('d-m-y');
    $hour = date('h:i:s');

    $mailTo = "lucas@joliveau.com";
    $headers = $firstName . " " . $lastName . " vous à envoyé une demande de contact le " . $date . " à " . $hour . "." . "\n\n" . "Voici les informations détaillées sur le contact: " . "\n" . "Prénom: " . $firstName . "\n" . "Nom de famille: " . $lastName . "\n" . "Entreprise/Organisation: " . $company . "\n" . "Adresse courriel: " . $emailFrom . "\n" . "Objet: " . $subject . "\n\n" . "N'oubliez pas que vous avez assuré à la personne une réponse sous 24 heures.";
    $txt = "[STAGE] " . $firstName . "\n" . $lastName . " chez " . $company . " est intéressé par votre candidature.";

    mail($mailTo, $txt, $headers);
    header("Location: formtarget?mailsend");
}


echo substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

