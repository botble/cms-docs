# Introduction
- [Requirement](#requirement)
- [Installation](#installation)
- [Note](#note)

<a name="requirement"></a>
## Requirement

- Apache, nginx, or another compatible web server.
- PHP >= 7.2.5 >> Higher
- MySQL Database server
- BCMath PHP Extension
- Ctype PHP Extension
- Fileinfo PHP extension
- JSON PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- PDO PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension
- Module Re_write server
- PHP_CURL Module Enable

>  {warning} On this project, we're using the latest Laravel version (currently 7.x). Please go to [Laravel documentation page](https://laravel.com/docs) for more information.

<a name="installation"></a>
## Install on hosting

- Upload all files into `public_html`.
- Create a database and import data from `database.sql` (it's located in source code).
- Create `.env` from `.env.example` and update your database credentials.
- Make sure `APP_URL` in `.env` is correct your domain. It should be `APP_URL=http://your-domain.com`

## Install locally or in VPS

- Delete folder `/vendor` then run `composer install` to install vendor packages.

- Create `.env` file from `.env-example` and update your configuration.

- Using sample data: 
    - Import database from `database.sql`.
    
- Don't use sample data:
    - Run `php artisan migrate` to create database structure.

    - Run `php artisan cms:user:create` to create admin user.
    
    - Run `php artisan cms:theme:activate ripple`

- If you're pulled source code from GIT server:
    - Run `php artisan vendor:publish --tag=cms-public --force`
    - Run `php artisan cms:theme:assets:publish`

- Run web locally:
    - Change `APP_URL` in `.env` to `APP_URL=http://localhost:8000`
    - Run `php artisan serve`. Open `http://localhost:8000`, you should see the homepage.
    - Go to `/admin` to access to admin panel.
    - If you're using sample data, the default admin account is `botble` - `159357`.
    - If you don't use sample data, you need to go to Admin -> Plugins then activate all plugins.
