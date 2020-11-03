from flask import render_template, request, redirect, url_for
from models import Card, News
from main import app
from card_form import CardForm, NewsForm
from utils import save_file


# home page 
@app.route('/')
def home_page():
    cards = Card.query.all()
    news = News.query.all()
    return render_template('index.html', cards=cards, newses=news)

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
