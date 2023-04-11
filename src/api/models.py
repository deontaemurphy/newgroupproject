from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(256), unique=True, nullable=False)
    password = db.Column(db.String(256), unique=False, nullable=False)
    name = db.Column(db.String(256), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name
            # do not serialize the password, its a security breach
        }
class CreateStory(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    
    username = db.Column(db.String(256), unique=False, nullable=False)
    storyTitle =  db.Column(db.String(256), unique=True, nullable=False)
    # I need to change likes (250) to unlimited
    likes = db.Column(db.String(256), unique=True, nullable=False)
    chapters = db.Column(db.Text(), unique=True, nullable=True)
    # this line make cuase problems  later
    def __repr__(self):
        return f'<CreateStory {self.username}>'

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "likes": self.likes,
            "storyTitle": self.storyTitle,
            "chapters": self.chapters
            
            
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
 