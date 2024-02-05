
FROM python:3.8

WORKDIR /app
COPY . /app

RUN pip install -r backend/requirements.txt


CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
