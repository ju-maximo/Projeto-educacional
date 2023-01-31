from flask import request
from flask import Blueprint
from config.database import db, cursor, connection
from models.user import User

exemplo = Blueprint("exemplo", __name__)

@exemplo.route("/")
def hi():
   return "olá, Tera! Tudo bem?"

@exemplo.route("/data")
def pares():
   return {"nome": "leandro"}

@exemplo.route("/cumprimentar/<string:nome>")
def cumprimentar(nome):
   return f"Olá, {nome}"

@exemplo.route("/post", methods=["POST"])
def create_user():
   data = request.json
   user = User()
   user.email = data["email"]
   user.username = data["username"]
   db.session.add(user)
   db.session.commit()
   return {"user_id":user.id}, 201

@exemplo.route("/read", methods=["GET"])
def read_user():
   sql = "select * from usuarios;"
   cursor.execute(sql)
   users = cursor.fetchall()
   print(users)
   return {"users": users}, 200

@exemplo.route("/read/<id>", methods=["GET"])
def read_one(id):
   sql = f"select * from usuarios where id = {id};"
   cursor.execute(sql)
   users = cursor.fetchone()
   return {"users": users}, 200

@exemplo.route("/update/<id>", methods=["PUT"])
def update(id):
   body = request.json
   update_sql = "UPDATE usuarios SET username = %s, email = %s WHERE id = %s"
   update_tuple_params = (body["username"], body["email"], id)
   cursor.execute(update_sql, update_tuple_params)
   connection.commit()
   return {"message": "Usuário atualizado com sucesso"}, 200

@exemplo.route("/delete/<id>", methods=["DELETE"])
def delete(id):
   delete_sql = "DELETE FROM usuarios WHERE id = %s"
   delete_tuple_params = (id,)
   cursor.execute(delete_sql, delete_tuple_params)
   connection.commit()
   return {"message": "Usuário deletado com sucesso"}, 200