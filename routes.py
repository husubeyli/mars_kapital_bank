from flask import render_template, request, jsonify, redirect, url_for
import requests
import xml.etree.ElementTree as ET
from models import Card, News, ForeignCurrency
from main import app
from card_form import CardForm, NewsForm
from utils import save_file
from extensions import db



@app.route('/home/converter', methods=['GET', 'POST'])
def set_converter():
    url = 'https://cbar.az/currencies/04.11.2020.xml'    
    response = requests.get(url, stream=True)
    tree = ET.fromstring(response.content)
    dom = tree.findall('ValType')

    for attr_type in dom:
        name = attr_type.get('Type')
        if name == 'Xarici valyutalar':
            valute = attr_type.findall('Valute')
            for code in valute:
                code_name = code.get('Code')
                if code_name == 'USD' or code_name == 'EUR':
                    # print(f'code name {code_name}') 
                    nominal = code.find('Nominal').text
                    name = code.find('Name').text
                    course = code.find('Value').text
                    print(f"Nominal: {nominal}. Name: {name}. Value: {course}")
                    currency = ForeignCurrency(code_name, nominal, name, course)

                    currency.save()
    # 
    return redirect('/')


# home page 
@app.route('/')
def home_page():
    cards = Card.query.all()
    newses = News.query.all()
    currencies = ForeignCurrency.query.all()
    return render_template('index.html', cards=cards, newses=newses, currencies=currencies)


# news page
@app.route('/home/news')
def news_page():

    __tablename__ = 'news_page'

    news = News.query.all()
    return render_template('news.html', newses=news)


#  Add new news
@app.route('/home/news-add', methods=['GET', 'POST'])
def news_form():
    form = NewsForm()
    if request.method == 'POST' and form.validate:
        # print(form, form.title.data)
        title = request.form['title']
        description = request.form['description']
        image_path = save_file(form.news_image.data)

        news = News(title, image_path, description)
        news.save()

    return render_template('card_form.html', form=form)


# add cards
@app.route('/home/card-add', methods=['GET', 'POST'])
def card_form():
    form = CardForm()
    if request.method == 'POST' and form.validate:
        # print(form, form.title.data)
        title = request.form['title']
        short_description = request.form['short_description']
        description = request.form['description']
        price = request.form['price']
        card_service = request.form['card_service']

        image_path = save_file(form.card_image.data)

        card = Card(title, short_description, description, price, card_service, image_path)
        card.save()
    # cards = Card.query.all()
    return render_template('card_form.html', form=form)




# @app.route('/register', methods=['GET', 'POST'])
# def register():
#     form = CardForm()
#     if request.method == 'POST':
#         post_data = request.form
#         form = CardForm(data=post_data)
#         if form.validate:
#             user = User(title=form.title.data, last_name=form.last_name.data, email=form.email.data, username=form.username.data, password=form.password.data)
#             user.save()
#             return redirect( url_for('get_books') )
#     return render_template('sign_up.html', form=form)
