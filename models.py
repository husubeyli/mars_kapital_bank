import datetime
import time
from sqlalchemy import Column, Integer, String, Text, Date
from extensions import db


class Card(db.Model):
    __tablename__ = 'card'

    id = Column(Integer, primary_key=True)
    title = Column(String(80), nullable=False)
    short_description = Column(String(80), nullable=False)
    description = Column(Text, nullable=False)
    price = Column(Integer, nullable=False)
    card_service = Column(Integer, nullable=False)
    card_image = Column(String(255), nullable=False)


    def __init__(self, title, short_description, description,  price, card_service, card_image):
        self.title = title
        self.short_description = short_description
        self.description = description
        self.price = price
        self.card_service = card_service
        self.card_image = card_image

    def __repr__(self):
        return '<Card title %r>' % self.title

    def save(self):
        db.session.add(self)
        db.session.commit()



class News(db.Model):
    id = Column(Integer, primary_key=True)
    title = Column(String(255), nullable=False)
    news_image = Column(String(255), nullable=False)
    description = Column(Text, nullable=False)
    created_date = Column(Date, default=datetime.datetime.utcnow)

    def __repr__(self):
        return '<Card title %r>' % self.title

    def __init__(self, title, news_image, description):
        self.title = title
        self.news_image = news_image
        self.description = description

    def save(self):
        db.session.add(self) 
        db.session.commit()
