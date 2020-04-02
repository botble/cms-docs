# Introduction
- [Requirement](#requirement)
- [Installation](#installation)
- [Note](#note)

<a name="requirement"></a>
## Requirement

**We recommend to use MAMP PRO (https://www.mamp.info/en/) instead of Xampp to create develop environment. With MAMP, you can easy to add/manage virtual domain like cms.local.**

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

>  {warning} On this project, I use the latest Laravel version (currently 7.x). Please go to [Laravel documentation page](https://laravel.com/docs) for more information.

<a name="installation"></a>
## Install on hosting

> {note} It's better if you install it locally and make it ready for your website before deploying on your hosting.

- Upload all files into `public_html`.
- Create a database and import data from `database.sql` (it's located in source code).
- Create `.env` from `.env.example` and update your database credentials.

## Install locally or in VPS

- Create `.env` file from `.env-example` and update your configuration.

- Using sample data: 
    - Import database from `database.sql`.
    
- Don't use sample data:
    - Run `php artisan migrate` to create database structure with no sample data or import default database from `database.sql` if you need sample data.

    - Run `php artisan cms:user:create` to create admin user.
    
    - Run `php artisan cms:theme:activate ripple`

- If you're pulled source code from GIT server:
    - Run `php artisan vendor:publish --tag=cms-public --force`
    - Run `php artisan cms:theme:assets:publish`

- Run web locally:
    - Run `php artisan serve`. Open `http://localhost:8000`, you should see home page of Botble CMS.
    - Go to `/admin` to access to admin panel.
    - If you're using sample data, the default admin account is `botble` - `159357`.
    

> {note} If you're a Laravel developer or you want to customize our source code in folder `platform/core` & `platform/packages`, 
> please delete folder `vendor` then run `composer install` to re-install vendor packages before starting change our source code.

**Botble CMS should be run on a virtual host. Create a virtual host like cms.local to run Botble CMS. Follow these steps to see how to config virtual host: [Setup virtual host](/cms/master/virtualhost).** 

<a name="note"></a>
## Note

This site can only be run at domain name, not folder link.

On your localhost, setting virtual host. Something like `http://cms.local` is okay.

Cannot use as `http://localhost/cms/...`.

Please remove `public` in your domain also, you can point your domain to `public` folder

or use `.httaccess` (https://stackoverflow.com/questions/23837933/how-can-i-remove-public-index-php-in-the-url-generated-laravel)

Follow these steps to see how to config virtual host: [Setup virtual host](/cms/master/virtualhost).

Well done! Now, you can login to the dashboard by access to your_domain_site/admin.

    Username: botble
    Password: 159357

Enjoy!
