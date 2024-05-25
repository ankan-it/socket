// import logo from './logo.svg';
// import './App.css';

// function MyButton() {
//   return (
//     <button className="App-btn">I'm a Ankan</button>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://brainwareuniversity.ac.in"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <p>
//           <MyButton />
//         </p>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';

const WebSocketClient = () => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const ws = new WebSocket('ws://192.168.5.103:8080');

        ws.onopen = () => {
            console.log('Connected to WebSocket server.');
        };

        ws.onmessage = (event) => {
            console.log('Message from server: ', event.data);
        };

        ws.onclose = () => {
            console.log('Disconnected from WebSocket server.');
        };

        ws.onerror = (error) => {
            console.log('WebSocket Error: ', error);
        };

        setSocket(ws);

        // return () => {
        //     ws.close();
        // };
    }, []);

    const login = () => {
        if (socket) {
            const loginData = JSON.stringify({
                type: 'login',
                username: 'username',
                password: 'password'
            });
            socket.send(loginData);
        }
    };

    const logout = () => {
        if (socket) {
            const logoutData = JSON.stringify({
                type: 'logout'
            });
            console.log(logoutData);
            socket.send(logoutData);
        }
    };

    const shutdownServer = () => {
        if (socket) {
            const shutdownData = JSON.stringify({
                command: 'shutdown'
            });
            socket.send(shutdownData);
        }
    };

    return (
        <div>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
            <button onClick={() => socket.close()}>Close Connection</button>
            <button onClick={shutdownServer}>Shutdown Server</button>
        </div>
    );
};

export default WebSocketClient;

