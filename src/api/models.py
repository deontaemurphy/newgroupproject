from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(256), unique=True, nullable=False)
    password = db.Column(db.String(256), unique=False, nullable=False)
    name = db.Column(db.String(256), unique=False, nullable=False)
    stories = db.relationship('CreateStory', backref='user', lazy=True)
    comments = db.relationship('Comment', backref='user', lazy=True)
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "stories": list(map(lambda x: x.serialize(), self.stories))
            # do not serialize the password, its a security breach
        }
class CreateStory(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    storyTitle =  db.Column(db.String(256), unique=True, nullable=False)
    likes = db.Column(db.BigInteger, default=0)
    chapters = db.relationship('Chapters', backref='story_title', lazy=True)
    storydescription=db.Column(db.String(256), unique=False, nullable=False)
    
    def __repr__(self):
        return f'<CreateStory {self.storyTitle}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "likes": self.likes,
            "storyTitle": self.storyTitle,
            "chapters":list(map(lambda x: x.serialize(), self.chapters)),
            "storydescription": self.storydescription
            
            
            # do not serialize the password, its a security breach
        }


 
class Chapters(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(256), unique=False, nullable=False)
    description=db.Column(db.String(256), unique=False, nullable=False)
    story_id = db.Column(db.Integer, db.ForeignKey('create_story.id'), nullable=False)
    likes = db.Column(db.BigInteger, default=0)
    comments=db.relationship('Comment', backref='chapters', lazy=True)
    # I need to change likes (250) to unlimited
    
    # this line make cuase problems  later
    def __repr__(self):
        return f'<Chapters {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name" : self.name,
            "description": self.description,
            "story_id": self.story_id,
            "storyTitle": self.story_Title,
            "comments": list(map(lambda x: x.serialize(), self.comments))
            
            
            # do not serialize the password, its a security breach
        }
class Comments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(256), unique=True, nullable=False)
    comment = db.Column(db.String(256), unique=False, nullable=False)

    def __repr__(self):
        return f'<Comments {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "comment": self.comment
        }
 