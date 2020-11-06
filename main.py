import os
from flask import Flask, send_from_directory


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:123@127.0.0.1:3306/KapitalBank'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SECRET_KEY'] = os.urandom(16)


BASE_DIRS = os.path.dirname(os.path.abspath(__file__))

UPLOADED_FILES_DIR = os.path.join(BASE_DIRS, 'media')
app.config['UPLOAD_FOLDER'] = UPLOADED_FILES_DIR

if not os.path.isdir(UPLOADED_FILES_DIR):
    os.mkdir(UPLOADED_FILES_DIR)

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(UPLOADED_FILES_DIR, filename)
    


from extensions import *
from models import *
from routes import *


if __name__ == '__main__':
    db.init_app(app)
    app.init_app(migrate)
    app.run(debug=True, port=5000)


