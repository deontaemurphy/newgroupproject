from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(256), unique=True, nullable=False)
    password = db.Column(db.String(256), unique=False, nullable=False)
    username = db.Column(db.String(256), unique=True, nullable=False)
    chapter = db.relationship('Chapter', backref= 'user', lazy = True)
    story_cover_user_id = db.relationship('Story_Cover', backref='user', lazy=True, foreign_keys= [id])
    story_cover_username = db.relationship('Story_Cover', backref='user', lazy=True, foreign_keys= [username])
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "password": self.password
        }
class Story_Cover(db.Model):
  
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id))
    username = db.Column(db.String(256), db.ForeignKey(User.username))
    title = db.Column(db.String(256), unique=False, nullable=True)
    summary = db.Column(db.String(1024), unique=False, nullable=False)
    chapter = db.relationship('Chapter', backref = 'story_cover', lazy = True)
    def __repr__(self):
        return f'<Story_Cover {self.username}>'

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "title": self.title,
            "summary": self.username,
            "chapter": self.chapter
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
        return f'<Chapter {self.}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "password": self.password
        }

# class CreateStory(db.Model):
    
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
#     storyTitle =  db.Column(db.String(256), unique=True, nullable=False)
#     likes = db.Column(db.BigInteger, default=0)
#     chapters = db.relationship('Chapters', backref='story_title', lazy=True)
#     storydescription=db.Column(db.String(256), unique=False, nullable=False)
    
#     def __repr__(self):
#         return f'<CreateStory {self.storyTitle}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "user_id": self.user_id,
#             "likes": self.likes,
#             "storyTitle": self.storyTitle,
#             "chapters":list(map(lambda x: x.serialize(), self.chapters)),
#             "storydescription": self.storydescription
            
            
#             # do not serialize the password, its a security breach
#         }


 
# class Chapters(db.Model):
    
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(256), unique=False, nullable=False)
   
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
#     # add a foreign key constraint to reference the CreateStory table
    
    
#     likes = db.Column(db.BigInteger, default=0)
#     comments = db.relationship('Comments', backref='chapters', lazy=True)
#     story_id = db.Column(db.Integer, db.ForeignKey('createstory.id'), nullable=False)

#     def __repr__(self):
#         return f'<Chapters {self.name}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "name" : self.name,
#             "description": self.description,
#             "story_id": self.story_id,
#             "storyTitle": self.story_title.storyTitle,
#             "comments": list(map(lambda x: x.serialize(), self.comments))
#         }
# class Comments(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
   
#     comment = db.Column(db.String(256), unique=False, nullable=False)
#     chapters_id = db.Column(db.Integer, db.ForeignKey('chapters.id'), nullable=False)
#     # user_id = db.Column(db.Integer, db.ForeignKey('user.name'), nullable=False)
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
#     chapters_id = db.Column(db.Integer, db.ForeignKey('chapters.id'), nullable=False)
#     def __repr__(self):
#         return f'<Comments {self.comments}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "user_id": self.user_id,
#             "comment": self.comment
#         }
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