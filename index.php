<!DOCTYPE html>
<html>
<head>
    <title>WebSocket Client</title>
</head>
<body>
    <button id="loginButton">Login</button>
    <button id="logoutButton">Logout</button>
    <button id="closeConnectionButton">Close Connection</button>

    <script>
        const socket = new WebSocket('ws://192.168.5.103:8080');

        socket.onopen = function(event) {
            console.log('Connected to WebSocket server.');
        };

        socket.onmessage = function(event) {
            console.log('Message from server ', event.data);
        };

        socket.onclose = function(event) {
            console.log('Disconnected from WebSocket server.');
        };

        socket.onerror = function(error) {
            console.log('WebSocket Error: ', error);
        };

        function login(username, password) {
            const loginData = JSON.stringify({
                type: 'login',
                username: username,
                password: password
            });
            socket.send(loginData);
        }

        function logout() {
            const logoutData = JSON.stringify({
                type: 'logout'
            });
            socket.send(logoutData);
        }

        document.getElementById('loginButton').addEventListener('click', function() {
            login('username', 'password');
        });

        document.getElementById('logoutButton').addEventListener('click', function() {
            logout();
        });

        document.getElementById('closeConnectionButton').addEventListener('click', function() {
            socket.close();
        });
    </script>
</body>
</html>
