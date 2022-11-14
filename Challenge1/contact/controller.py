from Challenge1.contact.form import ContactForm

from flask import render_template, Blueprint, request, session

#######################################################################
##################       Bleu print config     ##################################
#######################################################################
mod= Blueprint('contact', __name__, url_prefix='/contact')

###############################################
#       Render Contact page                   #
###############################################
@mod.route('/contact', methods=["GET", "POST"])

def index():
    form = ContactForm()
    if request.method == 'POST':
        if form.validate_on_submit():

            print('the name is {}. email is {}. message is {}.'.format(form.name.data, form.email.data,form.message.data))


        return render_template("contact/index.html", form=form,message=True)
    else:
        return render_template("contact/index.html", form=form,message=False)