# Circadian API server

from flask import Flask, Response, redirect, url_for, request, session, abort
#from flask import abort, session, request
app = Flask(__name__)

@app.route('/')
def hello_world():
	return 'Hello, World!'

@app.route( '/login', methods=['GET', 'POST'] )
def fake_login():
	if request.method == 'POST':
		pass
		

# launch server with: python server.py
if __name__ == "__main__":
    app.run()