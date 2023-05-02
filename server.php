<?php 

    if(isset($_POST['newToDo'])){

        $todosJSON = file_get_contents('todos.json');

        $todos = json_decode($todosJSON);

        $todos[] = $_POST['newToDo'];

        $newTodoJSON = json_encode($todos);

        file_put_contents('todos.json', $newTodoJSON);


    } else {

        $todosJSON = file_get_contents('todos.json');

        $todos = json_decode($todosJSON);

        header('Content-type: application/json');

        echo json_encode($todos);

    }