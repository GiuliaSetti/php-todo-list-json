<?php 

$todosJSON = file_get_contents('todos.json');

$todos = json_decode($todosJSON);

header('Content-type: application/json');

echo json_encode($todos);

?>