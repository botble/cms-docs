# Email

## Setup Email

Need to config mail in Admin -> Settings -> Email.

Support Mailgun, SendGrid, SES, Gmail, Sendmail... and other SMTP mail services. We suggest use Mailgun to send mail.

Make sure that you have saved settings (button Save settings at the bottom of page) before sending a test email.

![Image](https://live.staticflickr.com/65535/51289335619_810529d67d_b.jpg)

### Using Gmail

Example:

![Image](https://live.staticflickr.com/65535/51304592333_3bd148968b_b.jpg)

- Mail Driver: `SMTP`
- Mail Host: `smtp.gmail.com`
- Mail Port: 587
- Mail Encryption: `tls`
- Mail Username: `[your-gmail]`
- Mail Password: `[password-app]` (docs: https://support.google.com/mail/answer/185833?hl=en-GB)

### Using Mailgun

Example: 

![Image](https://live.staticflickr.com/65535/51303643467_885819f60c_b.jpg)

The secret key must have a prefix `key-`. Ex: `key-xxxxx`.

### Using SendGrid

Example: 

![Image](https://live.staticflickr.com/65535/51304400246_c7bab7111b_b.jpg)

- Mail Host: `smtp.sendgrid.net`
- Mail Port: 587
- Username must be `apikey`.

### Using Yandex

![Image](https://live.staticflickr.com/65535/51303663112_cb197f4a8f_b.jpg)

## Edit Email template

- Email template using HTML & system variables.You need to know HTML and Laravel blade.

![Image](https://live.staticflickr.com/65535/51289630420_ef275de3a0_b.jpg)

![Image 2](https://live.staticflickr.com/65535/51289337089_9aabc52fcb_b.jpg)