###############################################
#          Import some packages               #
###############################################

from flask import Flask, render_template
from flask_bootstrap import Bootstrap
from flask_nav import Nav
from flask_nav.elements import *
from dominate.tags import img
from config import coaches_values

#    Define flask app
app = Flask(__name__, static_url_path='/static')
Bootstrap(app)
app.secret_key = 'SecretKey'



# Define navbar and add logo

logo = img(src='/static/images/BL_LogoBasic.png', height="50", width="50", style="margin-top:-15px")
#menu items
topbar = Navbar(logo,
                View('Home', 'home.index'),
                View('Contact', 'contact.index'),

                )

# register "top" menubar
nav = Nav()
nav.register_element('top', topbar)




def import_controllers(app):
    # Import module via the blueprint handler variable declare in the controller
    from home.controller import mod as home_module
    from contact.controller import mod as contact_modules

    # Register blueprint(s)
    app.register_blueprint(contact_modules)
    app.register_blueprint(home_module,url_prefix="/")


import_controllers(app)

@app.route('/', methods=['GET'])
def index():

    return render_template("home/index.html",list_values=coaches_values)


# Init our app

nav.init_app(app)


#run app
if __name__ == '__main__':
    app.run(debug=True)