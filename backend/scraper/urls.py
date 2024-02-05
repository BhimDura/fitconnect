from django.urls import path


from scraper.views import ScrapeView

urlpatterns = [
    path("scrape/", ScrapeView.as_view(), name="Scrape"),
]
