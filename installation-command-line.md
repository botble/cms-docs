# Install using command line.

- Open `.env` file and set up your credentials.

- Run `php artisan migrate` to create the database structure.

- Run `php artisan db:seed` if you need our sample data.

- Run `php artisan cms:publish:assets` to publish assets.
  
- Run `php artisan serve`. Open `http://localhost:8000` to see the homepage.

- Admin panel URL: `http://localhost:8000/admin`

- Default admin account:
    - If you use our sample data, the default admin account is `admin` with the password `12345678`.
    - If not, run `php artisan cms:user:create` to create an admin user.
