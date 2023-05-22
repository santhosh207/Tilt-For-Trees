from flask import Flask, render_template, jsonify
import requests

app = Flask(__name__)

# Replace CHANNEL_ID and API_KEY with your ThingSpeak channel ID and API key
url = "https://api.thingspeak.com/channels/2129742/feeds/last.json?api_key=QJ3X8S1GRVYHU03W"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/data")
def data():
    response = requests.get(url)
    data = response.json()
    field1 = data['field1']
    field2 = data['field2']
    return jsonify(field1=field1, field2=field2)

if __name__ == "__main__":
    app.run(debug=True)