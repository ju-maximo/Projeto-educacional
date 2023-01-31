from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import psycopg2

db = SQLAlchemy()

connection = psycopg2.connect(
    host="localhost",
    user="postgres",
    password="fuinha",
    dbname="teste-aula"
)

cursor = connection.cursor()