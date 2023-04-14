"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, CreateStory,Comments
import os 
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


api = Blueprint('api', __name__)




@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

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
    
    return jsonify({"message":"wrong method"})
@api.route('/createstory', methods=['POST'])
def add_create_story(): 
    request_body = request.get_json(force= True)
    username = request_body.get("username")
    storyTitle = request_body.get("storyTitle")
    likes = request_body.get("likes")
    chapters = request.get("chapters")
    story = CreateStory(
        storyTitle = storyTitle
    )

    return jsonify(request_body), 200

@api.route('/createstories', methods=['GET'])
def get_create_story():
    create_story = CreateStory.query.all()
    all_create_story = list(map(lambda create_story: create_story.serialize(), create_story))

    return jsonify(all_create_story), 200


# 200 means it worked
@api.route('/addcomment', methods=['POST'])
def add_comment(): 
    request_body = request.get_json(force= True)
    username = request_body.get("username")
    comment = request_body.get("comment")

    return jsonify(request_body), 200

@api.route('/comments', methods=['GET'])
def get_comments():
    comments = Comments.query.all()
    all_comments = list(map(lambda comments: comments.serialize(), comments))

    return jsonify(all_comments), 200


@api.route('/createUser', methods=['POST'])
def createUser():
  if request.method == 'POST':
    request_body = request.get_json()

    if not request_body["name"]:
      return jsonify({"msg": "Name is required"}), 400
    if not request_body["email"]:
      return jsonify({"msg": "Email is required"}), 400
    if not request_body["password"]:
      return jsonify({"msg": "Password is required"}), 400

    user = User.query.filter_by(email=request_body["email"]).first()
    if user:
      return jsonify({"msg": "User already exists"}), 400

    user = User(
          name = request_body["name"],
          email = request_body["email"],
          password = generate_password_hash(request_body["password"]),
      )

    db.session.add(user)   
    db.session.commit()
    return jsonify({"created": "Thanks. Your registration was successfully", "status": "true"}), 200