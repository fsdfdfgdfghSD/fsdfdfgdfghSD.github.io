from flask import Flask, jsonify
import random

app = Flask(__name__)

words = ["hamach", "net", "fignea polnaia", "awoo", "dimon", "zima", "dimon gandon"]

@app.route("/dimonapi", methods = ["GET"])
def get_random_word():
    random_word = random.choice(words)
    return jsonify({"word": random_word})

if __name__ == "__main__":
    app.run(debug = True)