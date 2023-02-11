from flask import Flask
import psycopg2

app = Flask(__name__)

@app.route("/")
def index():
   conn = psycopg2.connect("postgresql://postgres:root@localhost:5432/postgres")
   return 'it works'

if __name__ == "__main__":
    app.run(host="0.0.0.0")