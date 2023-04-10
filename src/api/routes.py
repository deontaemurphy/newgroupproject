"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from .models import db, User, CreateStory, Comment, Chapters
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


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

    return jsonify(request_body), 200

@api.route('/createstories', methods=['GET'])
def get_create_story():
    create_story = CreateStory.query.all()
    all_create_story = list(map(lambda create_story: create_story.serialize(), create_story))

    return jsonify(all_create_story), 200


# 200 means it worked

