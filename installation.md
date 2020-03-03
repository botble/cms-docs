# Introduction
- [Requirement](#requirement)
- [Installation](#installation)
- [Note](#note)

<a name="requirement"></a>
## Requirement

**We recommend to use MAMP PRO (https://www.mamp.info/en/) instead of Xampp to create develop environment. With MAMP, you can easy to add/manage virtual domain like cms.local.**

- Apache, nginx, or another compatible web server.
- PHP >= 7.2 >> Higher
- MySQL Database server
- PDO PHP Extension
- OpenSSL PHP Extension
- Mbstring PHP Extension
- Exif PHP Extension
- Fileinfo Extension
- XML PHP Extension
- Ctype PHP Extension
- JSON PHP Extension
- Tokenizer PHP Extension
- Module Re_write server
- PHP_CURL Module Enable

>  {warning} On this project, I use the latest Laravel version (currently 6.x). Please go to [Laravel documentation page](https://laravel.com/docs) for more information.

<a name="installation"></a>
## Install on hosting

> {note} It's better if you install it locally and make it ready for your website before deploying on your hosting.

- Run `composer install` to install vendor packages (If you're not a Laravel developer and you can't run that command, please contact me https://codecanyon.net/user/botble then I will send you that folder).

- Upload all files into `public_html`.
- Create a database and import data from `database.sql` (it's located in source code).
- Create `.env` from `.env.example` and update your database information
- Config for media:
    + If your hosting support SSH, you just need to cd to `public_html` and run command `php artisan storage:link`
    + If your hosting doesn't support SSH. You have to open file `config/filesystem.php`
                                           
       Then change
       
       ```php
       'public' => [
           'driver' => 'local',
           'root' => storage_path('app/public'),
           'url' => env('APP_URL').'/storage',
           'visibility' => 'public',
       ],
       ```
       
       to
       
       ```php
       'public' => [
           'driver' => 'local',
           'root' => public_path('storage'),
           'url' => env('APP_URL').'/storage',
           'visibility' => 'public',
       ],
       ```
      
       Copy all files from `/storage/app/public` to `public/storage`.


## Install locally or in VPS

* Run `composer install` to download vendor packages

* Create `.env` file from `.env-example` and update your configuration

* Run `php artisan migrate` to create database structure with no sample data or import default database from `database.sql` if you need sample data.

* Run `php artisan cms:user:create` to create admin user

* Run `php artisan vendor:publish --tag=cms-public --force`

* Run `php artisan cms:theme:activate ripple`

* Run `php artisan cms:theme:assets:publish`

* Run `php artisan storage:link`

Note: If you can't run `php artisan storage:link` (some hosting doesn't support it), you can change config
in `/config/filesystems.php` like this https://prnt.sc/pn50dc then move all uploaded file from `/storage/app/public` to `/public/storage`.

* Run the first test with command `php artisan serve`. Open `http://localhost:8000`, you should see home page of Botble CMS


**If you need sample data, you can import it from `database.sql`**

**Botble should run on a virtual host. Create a virtual host like cms.local to run Botble CMS. Follow these steps to see how to config virtual host: [Setup virtual host](/cms/3.5/virtualhost).** 

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
