FROM python:3.10.0b4-alpine3.14
RUN apk add --no-cache git
WORKDIR /app
COPY requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt
COPY . .
ENV FLASK_APP app
CMD ["flask", "run", "--host=0.0.0.0"]
