import os
from flask import Flask, send_from_directory
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:123@127.0.0.1/KapitalBank'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SECRET_KEY'] = os.urandom(16)
admin = Admin(app)


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
from admin import *

admin.add_view(CardView(Card, db.session))
admin.add_view(ModelView(News, db.session))
admin.add_view(ModelView(ForeignCurrency, db.session))

if __name__ == '__main__':
    db.init_app(app)
    app.init_app(migrate)
    app.run(debug=True, port=5000)


