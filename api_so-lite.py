from flask import Flask, request

app = Flask(__name__)


@app.route('/')
def index():
    return 'Method used: {}'.format(request.method)

@app.route('/auth/signup', methods=['POST'])
def register():

    msg = 'Registration Succesful. Use your Email and Password to sign in'
    return msg

@app.route('/auth/login', methods=['POST'])
def login():

    msg = 'Log in succesful.'
    return msg


if __name__ == '__main__':
    app.run(debug=True)