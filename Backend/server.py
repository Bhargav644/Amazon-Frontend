from flask import Flask
from script import Deals
from db import getData, setData

app = Flask(__name__)


@app.route("/<name>")
def getDeals(name):
    Deals()
    return getData(name)


if __name__ == "__main__":
    app.run(debug=True)
