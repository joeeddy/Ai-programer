import socketio

# Create a Socket.IO server
sio = socketio.Server()
app = socketio.WSGIApp(sio)

@sio.event
def connect(sid, environ):
    print('Client connected:', sid)

@sio.event
def message(sid, data):
    print('Received message from', sid, ':', data)
    sio.emit('reply', 'Message received!', to=sid)

@sio.event
def disconnect(sid):
    print('Client disconnected:', sid)

if __name__ == '__main__':
    import eventlet
    import eventlet.wsgi
    from flask import Flask

    flask_app = Flask(__name__)
    app = socketio.WSGIApp(sio, flask_app)

    print("Socket.IO server is running on http://localhost:5000")
    eventlet.wsgi.server(eventlet.listen(('', 5000)), app)
