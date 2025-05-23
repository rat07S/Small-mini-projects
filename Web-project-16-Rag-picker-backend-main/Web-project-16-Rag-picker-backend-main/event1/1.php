<?php
// search.php
header('Content-Type: application/json; charset=utf-8');
// Enable error reporting for debugging purposes
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database connection settings
$servername = "localhost";
$username = "root"; // default username
$password = ""; // default password
$dbname = "upskill";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Receive location and material from frontend
$data = json_decode(file_get_contents('php://input'), true);
$location = isset($data['location']) ? $data['location'] : '';
$material = isset($data['material']) ? $data['material'] : '';

// Prepare SQL query
$sql = "SELECT name, phone, email, materials FROM rag WHERE location LIKE ? AND materials LIKE ?";
$stmt = $conn->prepare($sql);

// Bind parameters
$location_param = "%" . $location . "%";
$material_param = "%" . $material . "%";
$stmt->bind_param("ss", $location_param, $material_param);

// Execute query
$stmt->execute();
$result = $stmt->get_result();

// Fetch results
$ragPickers = array();
while ($row = $result->fetch_assoc()) {
    $ragPickers[] = $row;
}

// Return JSON response
echo json_encode($ragPickers);

// Close statement and connection
$stmt->close();
$conn->close();
?>
