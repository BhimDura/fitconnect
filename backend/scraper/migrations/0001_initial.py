# Generated by Django 4.2.7 on 2023-12-31 02:45

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="ScrapeRun",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                ("date_created", models.DateTimeField(auto_now_add=True)),
                ("date_updated", models.DateTimeField(auto_now=True)),
                ("date_run", models.DateTimeField()),
                (
                    "user",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="ScrapedVideo",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                ("date_created", models.DateTimeField(auto_now_add=True)),
                ("date_updated", models.DateTimeField(auto_now=True)),
                ("url", models.TextField()),
                ("thumbnail_url", models.TextField()),
                ("title", models.CharField(max_length=255)),
                ("date_scraped", models.DateTimeField(auto_now_add=True)),
                (
                    "scrape_run",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="scraper.scraperun",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
    ]
