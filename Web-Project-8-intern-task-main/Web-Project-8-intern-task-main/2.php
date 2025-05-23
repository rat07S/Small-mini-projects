<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - Virtual Tech Services</title>
    <link rel="stylesheet" href="2.css">
    <style>
        #contact-form .container {
            width: 50%;
            margin: 40px auto;
            padding: 20px;
            border: 1px solid #ddd;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            background-color: #fff;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>Virtual Tech Services</h1>
            <nav>
                <ul>
                    <li><a href="1.html">Home</a></li>
                    <li><a href="3.html">Slides</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="2.html">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="contact-form">
        <div class="container">
            <h2>We'd love to hear from you</h2>
            <form action="http://localhost/2/2.php" method="POST">
                <div class="form-group">
                    <label for="first-name">First Name:</label>
                    <input type="text" id="first-name" name="first_name" placeholder="Enter your first name" required>
                </div>
                <div class="form-group">
                    <label for="last-name">Last Name:</label>
                    <input type="text" id="last-name" name="last_name" placeholder="Enter your last name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required>
                </div>
                <div class="form-group">
                    <label for="college">College/Institute Name:</label>
                    <input type="text" id="college" name="college" placeholder="Enter your college/Institute name" required>
                </div>
                <div class="form-group">
                    <label for="message">What's your doubt:</label>
                    <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>

            <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                // Database connection settings
                $servername = "localhost";
                $username = "root"; // Default username for WAMPServer
                $password = ""; // Default password for WAMPServer
                $dbname = "data";

                // Create connection
                $conn = new mysqli($servername, $username, $password, $dbname);

                // Check connection
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }

                // Get form data
                $first_name = $_POST['first_name'];
                $last_name = $_POST['last_name'];
                $email = $_POST['email'];
                $college = $_POST['college'];
                $message = $_POST['message'];

                // Prepare and bind
                $stmt = $conn->prepare("INSERT INTO ratt (first_name, last_name, email, college, message) VALUES (?, ?, ?, ?, ?)");
                $stmt->bind_param("sssss", $first_name, $last_name, $email, $college, $message);

                // Execute the query
                if ($stmt->execute()) {
                    echo "<p>Thank you for contacting us, we will get back to you shortly.</p>";
                } else {
                    echo "<p>Error: " . $stmt->error . "</p>";
                }

                // Close the connection
                $stmt->close();
                $conn->close();
            }
            ?>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2024 Virtual Tech Services. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
