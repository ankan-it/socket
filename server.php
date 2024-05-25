<?php
require __DIR__ . '/Chat.php';

use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;

$server = IoServer::factory(
    new HttpServer(new WsServer(new Chat())), 
    8080,
    "192.168.5.103"
);



$server->run();
