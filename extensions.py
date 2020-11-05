from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from main import app


db = SQLAlchemy(app)
migrate = Migrate(app, db, compare_type=True)