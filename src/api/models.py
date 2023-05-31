from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(256), unique=True, nullable=False)
    name = db.Column(db.String(256))
    password = db.Column(db.String(256), unique=False, nullable=False)
    chapter = db.relationship('Chapter', backref= 'user', lazy = True)
     # story_cover_username = db.relationship('Story_Cover', backref='user', lazy=True, foreign_keys= [username])
    story_cover_user_id = db.relationship('Story_Cover', backref='user', lazy=True, foreign_keys='Story_Cover.user_id')
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email
        }
class Story_Cover(db.Model):
  
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    # username = db.Column(db.String(256), db.ForeignKey(User.user_id))
    title = db.Column(db.String(256), unique=False, nullable=True)
    summary = db.Column(db.String(1024), unique=False, nullable=False)
    chapters = db.relationship('Chapter', backref = 'story_cover', lazy = True)
    
    def __repr__(self):
        return f'<Story_Cover {self.summary}>'

    def serialize(self):
        return {
            "id": self.id,
            # "username": self.username,
            "title": self.title,
            "summary": self.summary,
            "user_id": self.user_id
        }

    # cover_img
class Chapter(db.Model):
    id = db.Column(db.Integer,primary_key= True)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id))
    story_id = db.Column(db.Integer,  db.ForeignKey(Story_Cover.id))
    chapter_number = db.Column(db.Integer, unique = False, nullable= False)
    chapter_name = db.Column(db.String(256), unique=False, nullable=True)
    chapter_text = db.Column(db.String(1024), unique=False, nullable=False)
    def __repr__(self):
        return f'<Chapter {self.chapter_name}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "story_id": self.story_id,
            "chapter_number": self.chapter_number,
            "chapter_name": self.chapter_name,
            "chapter_text": self.chapter_text,
            
        }


# class Favorites(db.Model):
   
#     id = db.Column(db.Integer, primary_key=True, unique=False)
#     name= db.Column(db.String(256), unique=False, nullable=False)
#     user_id = db.Column(db.Integer, nullable=False)
     
#     storyTitle = db.relationship('Chapters', backref='story_title', lazy=True)
#     #password = db.Column(db.String(256), unique=False, nullable=False)


#     def __repr__(self):
#         return f'<Favorite {self.item}>'

#     def serialize(self):
#         return {
#             #"id": self.id,
#             "id": self.id,
#             "user_id": self.user_id,
#             "name": self.name,
#             "storyTitle": self.storyTitle
#         }