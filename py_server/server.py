# Circadian API server

from flask import Flask, Response, redirect, url_for, request, session, abort
from flask_cors import CORS
import users
from json import dumps

# app config
app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():
	return 'Hello, World!'


@app.route( '/login', methods=['GET', 'POST'] )
def fake_login():
	if request.method == 'POST':
		pass
		

@app.route ( '/mystream', methods=['GET'] )
def stream_Data():
	return dumps ( users.user )

# launch server with: python server.py
if __name__ == "__main__":
    app.run()