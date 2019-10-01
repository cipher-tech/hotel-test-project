<?php
require_once "connect.php";
header("Access-Control-Allow-Headers:*");
header("Access-Control-Allow-Origin:*");


if( array_key_exists('getRooms', $_GET)){
    getRooms();
}elseif($_GET['getStats']) {
    getStats();
}


// function getUsers() {
//     return json_encode(["good" => "ok"]);
// }

function getRooms(){
    global $connect ;
    $query = "SELECT * FROM rooms";
    $result = mysqli_query($connect, $query) ;
    $all = [];
    if(mysqli_num_rows($result)){
        while ( $row = mysqli_fetch_assoc($result)) {
            $id[] = $row['id'];
            $slug = $row['slug'];
            $in_use = $row['in_use'];
            $type = $row['type'];
            $ready = $row['id'];
            $price = $row['price'];
            $check_in = $row['check_in'];
            $departure = $row['departure'];
            $reservation = $row['reservation'];
            $user_id = $row['user_id'];
            $created_at = $row['created_at'];
            array_push($all, $row);
        }
        echo json_encode($all);
    }else {
         echo mysqli_error($connect);
    }
}
function getStats(){
    global $connect;

    $query = "SELECT COUNT(*) AS totalRooms FROM rooms ";
    $query1 = "SELECT COUNT(*) AS totalUse from rooms where in_use='true'";
    $query2 = "SELECT COUNT(*) AS ready from rooms where ready='true'";
    $query3 = "SELECT SUM(price) AS expertrdIncome FROM rooms WHERE in_use='true'";

    $result = mysqli_query($connect, $query);
    $result1 = mysqli_query($connect, $query1);
    $result2 = mysqli_query($connect, $query2);
    $result3 = mysqli_query($connect, $query3);

    $stats = [];
    if(mysqli_num_rows($result)){
        $totalRooms = mysqli_fetch_assoc($result);
        $in_use = mysqli_fetch_assoc($result1);
        $ready = mysqli_fetch_assoc($result2);
        $income = mysqli_fetch_assoc($result3);

        array_push($stats, $totalRooms);
        array_push($stats, $in_use);
        array_push($stats, $ready);
        array_push($stats, $income);

        echo json_encode($stats);
    }else {
        echo mysqli_error($connect);
    }
}
//echo getUsers()
?>