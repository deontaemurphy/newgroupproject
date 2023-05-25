"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Story_Cover, Chapter
import os 
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
import datetime
api = Blueprint('api', __name__)

# equal id to token 



# @api.route("/token", methods=["POST"])
# def create_token():
#     email = request.json.get("email", None)
#     password = request.json.get("password", None)
#     # user_id =  request.json.get("user_id", None)
#     if email != "test" or password != "test":
#         return jsonify({"msg": "Bad username or password"}), 401

#     access_token = create_access_token(identity=email)
#     return jsonify(access_token=access_token)

@api.route('/users' , methods=['GET', 'POST'])
def users():
    if request.method == 'POST':
        request_body = request.get_json()

        if not request_body["username"]:
            return jsonify({"msg": "Name is required"}), 400
        if not request_body["email"]:
            return jsonify({"msg": "Email is required"}), 400
        if not request_body["password"]:
            return jsonify({"msg": "Password is required"}), 400
        

        user = User.query.filter_by(email=request_body["email"]).first()
        if user:
            return jsonify({"msg": "User already exists"}), 400
        user = User(
            username = request_body["username"],
            email = request_body["email"],
            password = generate_password_hash(request_body["password"]),
            )


        db.session.add(user)   
        db.session.commit()
        return jsonify({"created": "Thanks. Your registration was successfully", "status": "true"}), 200
      
     
    else:
        all_users = User.query.all()
        all_users = list(map(lambda x: x.serialize(), all_users))
        return jsonify(all_users), 200

@api.route("/login", methods=["POST"])
def create_token():
    if request.method == 'POST':
        email = request.json.get("email", None)
        password = request.json.get("password", None)

        if not email:
            return jsonify({"msg": "Email is required"}), 400
        if not password:
            return jsonify({"msg": "Password is required"}), 400

    #   user = User.query.filter_by(email=email).first()
    #   if not user:
    #       return jsonify({"msg": "Email/Password are incorrect"}), 401

    #   if not check_password_hash(user.password, password):
    #       return jsonify({"msg": "Username/Password are incorrect"}), 401

      # create token
    #   expiration = datetime.timedelta(days=3)
    #   access_token = create_access_token(identity= user.id, expires_delta= expiration)
        access_token = create_access_token(identity=email) 
        return jsonify(access_token=access_token)

    return jsonify(msg="wrong user")

@api.route('/users/story_covers', methods=['POST', 'GET'])
@jwt_required()
def story_cover(user_id):
  if request.method == 'POST':
    user_id = get_jwt_identity()
    request_body = request.get_json()
    if not request_body["title"]:
        return jsonify({"msg": "Title is required"}), 400
    story = Story_Cover (
        
        title = request_body["title"],
        summary = request_body["summary"],
        users_id = user_id 
    ) 
    db.session.add(story)   
    db.session.commit()
    return jsonify({"created": "Thanks. Your Story is created ", "status": "true"}), 200    
   
  else:
   
    all_story_cover = Story_Cover.query.filter_by(user_id = user_id )
    all_story_cover = list(map(lambda x: x.serialize(), all_story_cover))
    return jsonify(all_story_cover), 200
   

@api.route('/users/chapter', methods=['POST', 'GET'])
@jwt_required()
def chapter():
    user_id = get_jwt_identity()
    if request.method == 'POST':
        
        request_body = request.get_json()
        
        chapter = Chapter (
            user_id = user_id,
            story_id = request_body["story_id"],
            chapter_number = request_body["chapter_number"],
            chapter_name = request_body["chapter_name"],
            chapter_text = request_body["chapter_text"]
        ) 
        db.session.add(chapter)   
        db.session.commit()
        return jsonify({"created": "Thanks. Your Chapter has been  created ", "status": "true"}), 200    
       
    else:
        user_id = request.args.get('user_id')
        story_id = request.args.get('story_id')
        all_story_chapters = Chapter.query.filter_by(user_id=user_id, story_id=story_id)
        all_story_chapters = list(map(lambda x: x.serialize(), all_story_chapters))
        return jsonify(all_story_chapters), 200
        # all_story_chapters = Chapter.query.filter_by(user_id = user_id, story_id = story_id)
        # all_story_chapters = list(map(lambda x: x.serialize(), all_story_chapters))
        # return jsonify(all_story_chapters), 200

























# @api.route('/users/<int:user_id>/createstory', methods=['POST'])
# def add_create_story(user_id):
#     request_body = request.get_json(force=True)
#     user_id = request_body.get("user_id")
#     storyTitle = request_body.get("storyTitle")
#     likes = request_body.get("likes")
#     chapters = request_body.get('chapters')
#     storydescription = request_body.get('storydescription')

#     return jsonify(request_body), 200

# @api.route('/getstories', methods=['GET'])
# def get_create_story(user_id):
#     create_story = CreateStory.query.filter_by(user_id=user_id).all()
#     all_create_story = list(map(lambda create_story: create_story.serialize(), create_story))

#     return jsonify(all_create_story), 200



# # 200 means it worked
# @api.route('/users/<int:user_id>/addcomment', methods=['POST'])
# def add_comment(): 
#     request_body = request.get_json(force= True)
#     username = request_body.get("username")
#     comment = request_body.get("comment")

#     return jsonify(request_body), 200

# @api.route('/users/<int:user_id>/comments', methods=['GET'])
# def get_comments():
#     comments = Comments.query.all()
#     all_comments = list(map(lambda comments: comments.serialize(), comments))

#     return jsonify(all_comments), 200


# @api.route('/signup', methods=['POST'])
# def createUser():
#   if request.method == 'POST':
#     request_body = request.get_json()

#     if not request_body["name"]:
#       return jsonify({"msg": "Name is required"}), 400
#     if not request_body["email"]:
#       return jsonify({"msg": "Email is required"}), 400
#     if not request_body["password"]:
#       return jsonify({"msg": "Password is required"}), 400

#     user = User.query.filter_by(email=request_body["email"]).first()
#     if user:
#       return jsonify({"msg": "User already exists"}), 400

#     user = User(
#           name = request_body["name"],
#           email = request_body["email"],
#           password = generate_password_hash(request_body["password"]),
#       )

#     db.session.add(user)   
#     db.session.commit()
#     return jsonify({"created": "Thanks. Your registration was successfully", "status": "true"}), 200