# Circadian API server

from flask import Flask
from flask import abort, errorhandler, session, request
app = Flask(__name__)

@app.route('/')
def hello_world():
	return 'Hello, World!'

@app.route( '/login', methods=['GET', 'POST'] )
def fake_login():
	if request.method == 'POST':
		pass
		