
FROM python:3.8

WORKDIR /app
COPY ./backend /app

RUN pip install -r backend/requirements.txt


CMD ["sh", "-c", "python /app/manage.py migrate && python /app/manage.py runserver 0.0.0.0:8000"]
