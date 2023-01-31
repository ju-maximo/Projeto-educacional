from cgi import test
from flask import Flask
from routes.rotas import exemplo
from config.database import db
# from flask_cors import CORS, cross_origin

# CORS(app)


if __name__ == "__main__":
   app = Flask(__name__)
   app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:fuinha@localhost:5432/teste-aula"
   app.register_blueprint(exemplo)
   db.init_app(app)
   app.run(debug=True)

# from flask import Flask
# from flask_cors import CORS, cross_origin
# app = Flask(__name__)
# cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

# @app.route("/")
# @cross_origin()
# def helloWorld():
#   return "Hello, cross-origin-world!"

