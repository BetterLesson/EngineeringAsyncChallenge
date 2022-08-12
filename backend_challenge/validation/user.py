from marshmallow import Schema, fields


class UserSchema(Schema):
    user = fields.String(required=True, allow_none=False)

