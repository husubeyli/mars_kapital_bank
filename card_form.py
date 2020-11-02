from flask_wtf import FlaskForm
from wtforms import StringField, validators, TextField, IntegerField
from flask_wtf.file import FileField, FileRequired
from wtforms.validators import DataRequired, Length


class CardForm(FlaskForm):
    title = StringField(label='Kartin adı: ', validators=[DataRequired(), Length(min=3, max=80)])
    short_description = StringField(label='Kartın qısa məzmunu: ', validators=[DataRequired(), Length(min=3, max=80)])
    description = TextField(label='Kartın tam məzmunu: ', validators=[DataRequired()])
    price = IntegerField(label='Qiymət: ', validators=[DataRequired()])
    card_service = IntegerField(label='Illik xidmət haqqı: ', validators=[DataRequired()])
    card_image = FileField(label='Kartın şəkili: ', validators=[FileRequired()])


class NewsForm(FlaskForm):
    news_image = FileField(label='Shekil:', validators=[FileRequired()])
    title = StringField(label='Xeber Bashligi:', validators=[DataRequired(),Length(min=3, max=255)])
    description = TextField(label='Xeber Haqqinda Mezmun:' ,validators=[DataRequired()])
    