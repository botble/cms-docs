# Theme MVC Pattern

 - [Theme structure](#theme_structure)
 
<a name="theme_structure"></a>
## Theme structure

You can start working develop theme base on default theme `ripple` or using starter theme by command:
    
```bash
php artisan cms:theme:create <your theme name>
```
 
Then you can see MVC pattern in your theme:

\- Models: `/platform/themes/<your theme>/src/Models`

You can create folder `platform/themes/<your theme>/src/Models` and put all models you need here. Namespace for it will be `Theme\Ripple\Models`.
> {note} `Theme\Ripple` is the namespace which autoload in `platform/themes/<your theme>/composer.json`

Ex: `platform/themes/<your theme>/src/Models/Post.php`

```php
namespace Theme\Ripple\Models;
    
use Eloquent;

class Post extends Eloquent
{
    protected $table = 'posts';
}
```

\- View: `/platform/themes/<your theme>/views`

Views will be in `platform/themes/<your theme>/views`.

\- Controllers: `/platform/themes/<your theme>/src/Http/Controllers`

You can create folder `platform/themes/<your theme>/src/Http/Controllers` and put all controllers you need here. Namespace for it will be `Theme\Ripple\Http\Controllers`.

\- Routes: ``/platform/themes/<your theme>/routes`    
