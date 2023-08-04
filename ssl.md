# SSL

## Install SSL certificate on your hosting/VPS

You need to install an SSL certificate on your hosting/VPS first. You can purchase an SSL certificate or use free SSL,
for example **Let's Encrypt**.

## Redirect `http` to `https`

1. Change the following code in `.env` file from `APP_URL=http://domain.com`  to `APP_URL=https://domain.com`.

2. There have 3 options:

- Option 1: Add `ENABLE_HTTPS_SUPPORT=true` to `.env` file
- Option 2: Add to `.env` file following code:

  ```
  FORCE_SCHEMA=https
  FORCE_ROOT_URL=https://domain.com
  ENABLE_HTTPS_SUPPORT=false
  ```

- Option 3: If you are using hosting and Cpanel, you can Force HTTPS Redirection for your domains. Check
  this [article](https://blog.cpanel.com/force-https-redirection/).

:::warning
If it doesn't work, you have to config it in `.htaccess` or Nginx config.
:::
