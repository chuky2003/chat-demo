from flask import Flask, render_template
from flask_socketio import SocketIO, emit, join_room, leave_room
from flask_cors import CORS


app = Flask(__name__)
app.config["SECRET_KEY"] = "secret!"
CORS(app, resources={r"/*": {"origins": "*"}})


socketio = SocketIO(app, cors_allowed_origins="*")


@app.route("/")
def index():
    return render_template("index.html")


@socketio.on("message")
def handle_message(data):
    room = data["room"]
    emit("message", data, broadcast=True, to=room)


@socketio.on("join")
def on_join(data):
    username = data["username"]
    room = data["room"]
    join_room(room)
    emit(
        "message",
        {"room": room,
         "msg": f"Bienvenido a la sala {username}!!!"}, to=room
    )


@socketio.on("leave")
def on_leave(data):
    username = data["username"]
    room = data["room"]
    leave_room(room)
    emit(
        "message",
        {
            "room": room,
            "msg": f"el usuario {username} salió de la sala",
        },
        broadcast=True,
        to=room,
    )
    # send(f'{username} has left the room.', to=room})


if __name__ == "__main__":
    socketio.run(app, use_reloader=False, log_output=True)
