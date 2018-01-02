<?php
/**
*   CONNECT
*   {
*        status : 200,
*        type : 'connect',
*        data : {
*            id : 0,
*            avatar : '',
*            nickname : ''
*        }
*    }
*    DISCONNECT
*    {
*        status : 200,
*        type : 'disconnect',
*        data : {
*            id : 0
*        }
*    }
*    MESSAGE
*    {
*        status : 200,
*        type : 'message',
*        data : {
*            from : 0,
*            to : 0,
*            msg : ''
*        }
*    }
*    INIT
*    {
*        status : 200,
*        type : 'init',
*        data : {
*        }
*    }
*
*/
$server = new swoole_websocket_server("127.0.0.1", 9522);

$server->on('open', function($server, $req) {
    echo "connection open: {$req->fd}\n";
    echo "test";
});

$server->on('message', function($server, $frame) {
    echo "received message: {$frame->data}\n";
    $server->push($frame->fd, json_encode(["hello", "world"]));
});

$server->on('close', function($server, $fd) {
    echo "connection close: {$fd}\n";
});

$server->start();
