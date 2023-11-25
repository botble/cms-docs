# Installation

## Requirements

Before installing our script, ensure that your server meets the following requirements:

- Apache, nginx, or another compatible web server
- PHP >= 8.1 or higher
- MySQL Database server
- `PDO` PHP extension
- `OpenSSL` PHP extension
- `mbstring` PHP extension
- `exif` PHP extension
- `fileinfo` PHP extension
- `xml` PHP extension
- `Ctype` PHP extension
- `JSON` PHP extension
- `Tokenizer` PHP extension
- `cURL` PHP extension
- `zip` PHP extension
- `iconv` PHP extension
- Ensure the `mod_rewrite` Apache module is enabled

## PHP Configuration

Open your php configuration file `php.ini` and change the following settings.

```ini
memory_limit = 256M
max_execution_time = 300
```

If you are using cPanel, you can follow this article to change your PHP memory limit
settings https://chemicloud.com/kb/article/how-to-increase-the-php-memory-limit-in-cPanel/.

::: warning
On this project, we're using the Laravel 10.x. Please go to [Laravel documentation page](https://laravel.com/docs/10.x)
for more information.
:::

## Installation

### Install with our Installer UI

<iframe width="100%" height="400" src="https://www.youtube.com/embed/iam99NkUIu0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Manually

<iframe width="100%" height="400" src="https://www.youtube.com/embed/zFbWYpjuFJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- Steps:

  - Upload all files into the root folder of your hosting (normally, it is`public_html`).

  - Create a database and import data from `database.sql` (it's located in source code).
    ![Database](./images/installation-1.png)

  - Update your database credentials and `APP_URL` in `.env`.
    ![Env](./images/installation-2.png)

  - Go to `/admin` to access to admin panel.

  - The default admin account is `botble` - `159357`.
    ![Login](./images/installation-3.png)

### Install in a sub-folder

::: warning
Since our script is based on the Laravel framework, its root folder is `/public`. If you're installing it in a sub-folder,
you'll need to access `your-domain.com/sub-folder/public`. To remove `/public` from the URL, follow the steps in
the [provided video tutorial](https://youtu.be/XdAYETd04iA).
:::

<iframe width="100%" height="400" src="https://www.youtube.com/embed/XdAYETd04iA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Tips

::: tip
For Laravel developers looking to customize the source code in `platform/core` and `platform/packages`, delete
the `/vendor` folder, and then run the `composer install` command to reinstall vendor packages.
:::
