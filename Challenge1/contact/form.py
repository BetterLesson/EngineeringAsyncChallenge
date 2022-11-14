from wtforms import  StringField, validators,TextField,TextAreaField,SubmitField
from wtforms.validators import Email, input_required
from flask_wtf import FlaskForm

class ContactForm(FlaskForm):
    email = StringField('Email Address', validators=[input_required(), Email(),validators.DataRequired(message='please enter a valid email')])
    name = TextField("Name",validators=[input_required(),validators.DataRequired(message='please enter name')])
    subject = TextField("Subject")
    message = TextAreaField("Message",validators=[input_required(),validators.DataRequired(message='please enter name')])
    submit = SubmitField("Send")




