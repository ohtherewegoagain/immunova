# api.py - Flask API for Immunova AI
from flask import Flask, request, jsonify
from model import predict_til

app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json.get("data", "")
    if not data:
        return jsonify({"error": "No data provided"}), 400
    
    result = predict_til(data)
    return jsonify(result)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)