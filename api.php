<?php

header("Content-Type: application/json");

$data = file_get_contents("data.json");

if ($data == false) {
    echo json_encode(["error" => "File not found"]);
}
else {
    echo $data;
}

?>
