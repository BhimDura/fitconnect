import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

from django.conf import settings


def send_email(to_email, first_name):
    # Create the email message
    message = Mail(
        from_email='ashish@betterlegal.com',
        to_emails=to_email,
        subject='You have been Registered !!',
        html_content=f'<strong>Congratulations {first_name}! You have been registered in Fit-Connect.</strong>'
    )

    try:
        # Send the email using SendGrid API
        sg = SendGridAPIClient(settings.SENDGRID_KEY)
        response = sg.send(message)
        print(f"Email sent to {to_email}. Status Code: {response.status_code}")
    except Exception as e:
        print(f"Failed to send email to {to_email}. Error: {e}")


# Example usage:
# to_email = 'recipient@example.com'
# first_name = 'John'
# send_email(to_email, first_name)
