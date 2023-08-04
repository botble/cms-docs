# Plugin Structure

All plugins are registered to Composer autoloader manually. It needs a `plugin.json` file to provide all needed
information
for auto-loading.

![Image](https://botble.com/storage/uploads/1/docs/plugin-structure.jpg)

A basic plugin structure.

![Image](https://botble.com/storage/uploads/1/docs/sample-plugin.png)

- `plugin.json`: All information about this plugin.

Example:

```php
{
    "name": "Demo",
    "namespace": "Botble\\Demo\\",
    "provider": "Botble\\Demo\\Providers\\DemoServiceProvider",
    "author": "Botble Technologies",
    "url": "https://botble.com",
    "version": "1.0",
    "description": "The description for plugin demo"
}
```

- `src/Plugin.php`: Using to handle `activate`, `deactivate`, `remove` events for plugin.

Example:

```php
namespace Botble\Demo;

use Schema;
use Botble\Base\Interfaces\PluginInterface;

class Plugin implements PluginInterface
{

    public static function activate()
    {
    }

    public static function deactivate()
    {
    }

    public static function remove()
    {
        Schema::dropIfExists('demos'); // Remove table demo when removing plugin "demo"
    }
}
```

- `config/permissions.php`: Each plugin should have a configuration for permission. Permissions are codebase so we need
  to define it in this file.

Example:

```php
return [
    [
        'name' => 'Demo',
        'flag' => 'demo.list',
    ],
    [
        'name' => 'Create',
        'flag' => 'demo.create',
        'parent_flag' => 'demo.list',
    ],
    [
        'name' => 'Edit',
        'flag' => 'demo.edit',
        'parent_flag' => 'demo.list',
    ],
    [
        'name' => 'Delete',
        'flag' => 'demo.delete',
        'parent_flag' => 'demo.list',
    ],
];
```

- `database/migrations/2018_10_07_011632_create_demo_table.php`: After generating a plugin, it'll create a first
  migration, you should modify it before activating a plugin. When activating a plugin, its migrations will run
  automatically.

Example:

```php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

return new class () extends Migration {
    public function up(): void
    {
        Schema::create('demos', function (Blueprint $table) {
            $table->id();
            $table->string('name', 120);
            $table->tinyInteger('status')->unsigned()->default(1);

            $table->timestamps();
            $table->engine = 'InnoDB';
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('demos');
    }
};
```

- `helpers/constants.php`: to define all PHP constants for this plugin. It must have a constant for its screen name.

Example:

```php
if (!defined('DEMO_MODULE_SCREEN_NAME')) {
    define('DEMO_MODULE_SCREEN_NAME', 'demo');
}
```

- `resources/lang/en/demo.php`: language for your plugin. If you need to translate to more languages, let add new
  translation file. Ex: `resources/lang/vi/demo.php`

Example:

```php
return [
    'name' => 'Demo',
    'create' => 'New demo',
    'edit' => 'Edit demo',
];
```

- `routes/web.php`: Routes for this plugin. You can create `routes\api.php` if you need to work on API.

Example:

```php
<?php

Route::group(['namespace' => 'Botble\Demo\Http\Controllers', 'middleware' => ['web', 'core']], function () {

    Route::group(['prefix' => BaseHelper::getAdminPrefix(), 'middleware' => 'auth'], function () {

        Route::group(['prefix' => 'demos', 'as' => 'demo.'], function () {
            Route::resource('', 'DemoController')->parameters(['' => 'demo']);
            Route::delete('items/destroy', [
                'as' => 'deletes',
                'uses' => 'DemoController@deletes',
                'permission' => 'demo.destroy',
            ]);
        });
    });

});
```

- `src/Forms/DemoForm.php`: Create and update form.

- `src/Http/Controllers/DemoController.php`: Controller, you can create many controllers as you want.

- `src/Http/Requests/DemoRequest.php`: Request to validate submit form.

- `src/Models/Demo.php`.

- `src/Providers/DemoServiceProvider.php`: This is the main file of a plugin. A plugin must have this file.

Example:

```php
public function register()
{
    // Binding repositories if cache is disabled.
    $this->app->singleton(DemoInterface::class, function () {
        return new DemoRepository(new Demo());
    });

    Helper::autoload(__DIR__ . '/../../helpers'); // Load all constants/helpers from helpers folder.
}

public function boot()
{
    $this
        ->setNamespace('plugins/demo') // Set namespace of a plugin, it's used for views/lang. Example: view('plugins.demo::create'), trans('plugins.demo::demo.create')
        ->loadAndPublishConfigurations(['permissions']) // Load configuration from config folder.
        ->loadAndPublishViews()
        ->loadAndPublishTranslations()
        ->loadRoutes(); // Load route. It's equal ->loadRoutes(['web']), if you need to work on API, you can add "api" to load it.

    // Register plugin menu to admin menu
    Event::listen(RouteMatched::class, function () {
        dashboard_menu()->registerItem([
            'id' => 'cms-plugins-demo', // Id of menu. It must be unique
            'priority' => 5, // Position of plugin
            'parent_id' => null, // Parent ID, if it's not null, this menu will be submenu
            'name' => trans('plugins.demo::demo.name'),
            'icon' => 'fa fa-list',
            'url' => route('demo.list'),
            'permissions' => ['demo.list'], // Permission key, it's defined in /config/permissions.php
        ]);
    });
}
```

- `src/Repositories`: Define all needed repositories for plugin models.

- `src/Tables/DemoTable.php`: Using in listing page.
