"""empty message

Revision ID: 9c043eedb64c
Revises: 
Create Date: 2023-04-12 16:32:57.917390

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9c043eedb64c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=256), nullable=False),
    sa.Column('password', sa.String(length=256), nullable=False),
    sa.Column('name', sa.String(length=256), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('create_story',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('storyTitle', sa.String(length=256), nullable=False),
    sa.Column('likes', sa.BigInteger(), nullable=True),
    sa.Column('storydescription', sa.String(length=256), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('storyTitle')
    )
    op.create_table('chapters',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=256), nullable=False),
    sa.Column('description', sa.String(length=256), nullable=False),
    sa.Column('story_id', sa.Integer(), nullable=False),
    sa.Column('likes', sa.BigInteger(), nullable=True),
    sa.ForeignKeyConstraint(['story_id'], ['create_story.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('comment', sa.String(length=256), nullable=False),
    sa.Column('chapters_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['chapters_id'], ['chapters.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('comments')
    op.drop_table('chapters')
    op.drop_table('create_story')
    op.drop_table('user')
    # ### end Alembic commands ###