  
import os
from flask_admin import Admin
from .models import db, User, Story_Cover, Chapter
# , CreateStory, Chapters, Comments
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Story_Cover, db.session))
    admin.add_view(ModelView(Chapter, db.session))
    # admin.add_view(ModelView(Comments, db.session))
    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))