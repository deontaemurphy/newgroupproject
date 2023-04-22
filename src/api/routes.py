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


api = Blueprint('api', __name__)


@api.route('/users' , methods=['GET', 'POST'])
def users():
    if request.method == 'POST':
        return jsonify()
    else:
        all_users = User.query.all()
        all_users = list(map(lambda x: x.serialize(), all_users))
        return jsonify(all_users), 200

@api.route('/users/<int:user_id>/story_covers', methods=['POST', 'GET'])
def story_cover(user_id):
  if request.method == 'POST':
    return "/users/<int:user_id>/story_cover Post section"
  else:
   
    # data = request.get_json()
    # # user_id = request.get(user_id)
    # # username = request.get(username)
    # # title = request.get(title)
    # # summary = request.get(summary)
    # # chapter = request.get(chapter)
    # add_story = Story_Cover(user_id = data["user_id"],title = data['title'], summary = data['summary'])
    all_story_cover = Story_Cover.query.filter_by(user_id = user_id )
    all_story_cover = list(map(lambda x: x.serialize(), all_story_cover))
    return jsonify(all_story_cover), 200
   

@api.route('/users/<int:user_id>/<int:story_id>/chapter', methods=['POST', 'GET'])
def chapter(user_id, story_id):
    # data = request.get_json()
    # add_chapter = Story_Cover(user_id = data["user_id"], story_id = data['story_id'], chapter_number = data['chapter_number'], chapter_name = data['chapter_name'], chapter_text =data['chapter_text'])
    # db.session.add(add_chapter)   
    # db.session.commit()
    if request.method == 'POST':
        return '/users/<int:user_id>/<int:story_id>/chapter Post section'
    else:
        all_story_chapters = Chapter.query.filter_by(user_id = user_id, story_id = story_id)
        all_story_chapters = list(map(lambda x: x.serialize(), all_story_chapters))
        return jsonify(all_story_chapters), 200


# @api.route("/newProgram", methods=['POST'])
# def new_program():
#     data = request.get_json()
#     add_program = Programs(name = data["name"],description = data["description"],prog_bar_txt = data["prog_bar_txt"],start_time = data["start_time"],end_time = data["end_time"],monday = data["monday"],tuesday = data["tuesday"],wednesday = data["wednesday"],thursday = data["thursday"],friday = data["friday"],saturday = data["saturday"],sunday = data["sunday"],thur_start_time = data["thur_start_time"],thur_end_time = data["thur_end_time"],prog_bar_thur_txt = data["prog_bar_thur_txt"],sat_start_time = data["sat_start_time"],sat_end_time = data["sat_end_time"],prog_bar_sat_txt = data["prog_bar_sat_txt"])
#     db.session.add(add_program)
#     db.session.commit()
#     return jsonify(add_program.serialize())



















@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # user_id =  request.json.get("user_id", None)
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route('/login', methods=['POST'])
def login():
    if request.method=="POST":
        email=request.json.get("email")
        password=request.json.get("password")
        if not email:
            return jsonify({"message":"must have email"})
        if not password:
            return jsonify({"message":"must have password"})
        user=User.query.filter_by(email=email).first()
        if not user:
            return jsonify({"message":"user does not exist"})
        if not check_password_hash(user.password,password):
            return jsonify({"message":"password is incorrect"})
        
        expiration=datetime.timedelta(days=1)
        access_token=create_access_token(identity=user.id,experies_delta=expiration)

        return jsonify(access_token=access_token)
    
 




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