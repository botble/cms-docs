# Install using Docker.

_Docker installation for development only, do not use it on production environment._

- Open `.env` file and change:
  - `DB_HOST=127.0.0.1` to `DB_HOST=mysql`
  - `DB_USERNAME=` to `DB_USERNAME=botble` (or any username you want)
  - `DB_PASSWORD=` to `DB_PASSWORD=botble` (or any password you want)

- Run `docker compose pull` to pull the latest images.
- Run `docker compose up -d` to start the services.
- Run `docker compose exec -u www app composer install` to install the dependencies (or `update` command).
- Run `docker compose exec -u www app php artisan migrate` to create the database structure.
- Run `docker compose exec -u www app php artisan db:seed` if you need our sample data.
- Run `docker compose exec -u www app php artisan cms:publish:assets` to publish assets.
- Open `http://localhost` to see the homepage (or `http://localhost:{YOUR_PORT}`).
- Admin panel URL: `http://localhost/admin`
- Default admin account:
    - If you use our sample data, the default admin account is `admin` with the password `12345678`.
    - If not, run `docker compose exec -u www app php artisan cms:user:create` to create an admin user.
- Run `docker compose down` to stop the services.
- Some useful commands:
    - `docker compose exec -u www app sh` access to the container.
    - `docker compose exec -u www app php <...>` php command.
    - `docker compose exec -u www app php artisan <...>` artisan command.
    - `docker compose exec -u www app composer <...>` composer command.

::: tip
If you have any issues with the `docker compose` command, try to use `docker-compose` instead.
Somethings ports are already in use, you can change the port in the `docker-compose.yml` file or use environment variables to change the port (e.g: `APP_PORT=8080`).
:::

## Issues

### Service is not running issue.

If you encounter the "service 'app' is not running" error, try to run `docker compose down`, then open file `docker-compose.yml` and change the service `laravel.test` to `app` in the `services` section and run `docker compose up -d` again.

### Rebuild images

Run `docker-compose down --volumes` and then `sail up --build` to rebuild the images.
