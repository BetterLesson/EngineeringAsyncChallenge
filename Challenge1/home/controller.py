from flask import render_template, Blueprint
##################   Bluent config  ##################################
from Challenge1.config import coaches_values

mod= Blueprint('home', __name__, url_prefix='/home')


# use decorators to link the function to a url
@mod.route('/home', methods=['GET'])
def index():
    """
     default url for the home page
    :return:
    """
    return render_template("home/index.html",list_values=coaches_values)