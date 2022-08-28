from flask import Flask
from db import getData, setData
app = Flask(__name__)


@app.route("/<name>")
def fetchData(name):
    return getData(name)


if __name__ == "__main__":
    app.run(debug=True)
