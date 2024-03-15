# Install using Docker.

Based on Laravel Sail https://laravel.com/docs/11.x/sail

- Open `.env` file and change:
  - `DB_HOST=127.0.1` to `DB_HOST=mysql`
  - `DB_USERNAME=root` to `DB_USERNAME=sail`
  
- Run `./vendor/bin/sail up` to start the server.
- Run `./vendor/bin/sail artisan migrate` to create the database structure.
- Run `./vendor/bin/sail artisan db:seed` if you need our sample data.
- Run `./vendor/bin/sail artisan cms:publish:assets` to publish assets.
- Open `http://localhost` to see the homepage.
- Admin panel URL: `http://localhost/admin`
- Default admin account:
    - If you use our sample data, the default admin account is `admin` with the password `12345678`.
    - If not, run `./vendor/bin/sail artisan cms:user:create` to create an admin user.
  
## Issues

### Service is not running issue.

If you encounter the "service 'laravel.test' is not running" error, try to open file `docker-compose.yml` and change the service `app` to `laravel.test` in the `services` section.

```yml

### Rebuild images

Run `docker-compose down --volumes` and then `sail up --build` to rebuild the images.