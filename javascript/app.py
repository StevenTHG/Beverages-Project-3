from flask import Flask, jsonify
import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
url = os.environ.get("DATABASE_URL")  # gets variables from environment
connection = psycopg2.connect(url)


# @app.route("/")
# def index():
#    conn = psycopg2.connect("postgresql://postgres:root@localhost:5432/postgres")
#    return 'it works'

@app.route("/start/", methods=['get', 'post'])
def welcome():
   return 'it works'

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=105)