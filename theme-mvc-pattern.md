# Theme MVC Pattern

## Theme structure

When developing a theme, you can start by using the default theme called **ripple** or create a new theme using a
starter theme with the following command:

```bash
php artisan cms:theme:create <your theme name>
```

Then you can see an MVC pattern in your theme:

- Models: `/platform/themes/<your theme>/src/Models`

You can create folder `platform/themes/<your theme>/src/Models` and put all models you need here. Namespace for it will
be `Theme\Ripple\Models`.

::: tip
`Theme\Ripple` is the namespace which autoload in `platform/themes/<your theme>/composer.json`
:::

Ex: `platform/themes/<your theme>/src/Models/Post.php`

```php
namespace Theme\Ripple\Models;
    
use Eloquent;

class Post extends Eloquent
{
    protected $table = 'posts';
}
```

- View: `/platform/themes/<your theme>/views`

Views will be in `platform/themes/<your theme>/views`.

- Controllers: `/platform/themes/<your theme>/src/Http/Controllers`

You can create folder `platform/themes/<your theme>/src/Http/Controllers` and put all controllers you need here.
Namespace for it will be `Theme\Ripple\Http\Controllers`.

- Routes: `/platform/themes/<your theme>/routes`.
