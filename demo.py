# for testing on my phone - (pip install bottle)
from bottle import *
@route('/<filename>')
def static(filename):
    return static_file(filename, root='./')
@route('/')
def index():
    return template("demo.html")
if __name__ == "__main__":
    run(host="0.0.0.0", port=8080, debug=True)