from flask_admin.contrib.sqla import ModelView
from flask_sqlalchemy import Model


class CardView(ModelView):
    form_columns = (
        'id',
        'title',
        'short_description',
        'description',
        'price',
        'card_service',
        'card_image',
    )