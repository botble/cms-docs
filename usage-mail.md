# Setup mail

Need to config mail in Admin -> Settings -> Email. 

Support Mailgun, SendGrid, SES, Gmail, Sendmail... and other SMTP mail services.

Make sure that you have saved settings (button Save settings at the bottom of page) before sending a test email.

## Using Gmail

Example:

![Image](https://live.staticflickr.com/65535/51304592333_3bd148968b_b.jpg)

- Mail Driver: `SMTP`
- Mail Host: `smtp.gmail.com`
- Mail Port: 587
- Mail Encryption: `tls`
- Mail Username: `[your-gmail]`
- Mail Password: `[password-app]` (docs: https://support.google.com/mail/answer/185833?hl=en-GB)

## Using Mailgun

Example: 

![Image](https://live.staticflickr.com/65535/51303643467_885819f60c_b.jpg)

The secret key must have a prefix `key-`. Ex: `key-xxxxx`.

## Using SendGrid

Example: 

![Image](https://live.staticflickr.com/65535/51304400246_c7bab7111b_b.jpg)

- Mail Host: `smtp.sendgrid.net`
- Mail Port: 587
- Username must be `apikey`.

## Using Yandex

![Image](https://live.staticflickr.com/65535/51303663112_cb197f4a8f_b.jpg)