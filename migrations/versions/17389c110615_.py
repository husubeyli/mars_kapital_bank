"""empty message

Revision ID: 17389c110615
Revises: 
Create Date: 2020-11-06 03:25:36.676161

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '17389c110615'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('ForeignCurrency',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('code', sa.String(length=15), nullable=False),
    sa.Column('nominal', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('value', sa.Numeric(precision=5, scale=4), nullable=False),
    sa.Column('created_date', sa.Date(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('card',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=80), nullable=False),
    sa.Column('short_description', sa.String(length=80), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('price', sa.Integer(), nullable=False),
    sa.Column('card_service', sa.Integer(), nullable=False),
    sa.Column('card_image', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('news',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=255), nullable=False),
    sa.Column('news_image', sa.String(length=255), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('created_date', sa.Date(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('news')
    op.drop_table('card')
    op.drop_table('ForeignCurrency')
    # ### end Alembic commands ###