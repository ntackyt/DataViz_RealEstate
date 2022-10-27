from flask import render_template, flash, jsonify, json, url_for
from flask import Flask
import requests
import os
import json
# import geojson


TEMPLATE_DIR = os.path.abspath('../templates')
STATIC_DIR = os.path.abspath('../static')

app = Flask(__name__)
# app = Flask(__name__, template_folder=TEMPLATE_DIR, static_folder=STATIC_DIR)

@app.route("/")
def home():

    return render_template("index.html")


if __name__ == '__main__':
    app.run(debug=False, port=8080)

