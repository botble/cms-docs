# Slug/permalink field

The table to use `slug` must have column `name`. It's used to generate slug column.

## Add slug/permalink field to your new plugin

\- Open `/plugins/<your-plugin>/src/Providers/<YourPlugin>ServiceProvider.php`. Add below code to function `boot`

```php
$this->app->booted(function () {
   \SlugHelper::registerModule(YourPluginModel::class);
   \SlugHelper::setPrefix(YourPluginModel::class, 'your-prefix');
});

// "your-prefix" is prefix for your slug field. URL will be http://domain.local/your-prefix/slug-here
```

\- Add `SlugTrait` to your models to get data when using `$data->slug` and `$data->url`.

```php
use \Botble\Slug\Traits\SlugTrait;
```

\- If you're using form builder to generate forms for your plugin, slug field will be added to your form automatically.
If you don't use form builder. To add slug field, use bellow code.

For creating form:

```php
<div class="form-group @if ($errors->has('slug')) has-error @endif">
    {!! Form::permalink('slug', old('slug'), 0, 'your-prefix') !!}
    {!! Form::error('slug', $errors) !!}
</div>
```

For editing form:

```php
<div class="form-group @if ($errors->has('slug')) has-error @endif">
    {!! Form::permalink('slug', $data->slug, $data->id, 'your-prefix') !!}
    {!! Form::error('slug', $errors) !!}
</div>
```

\- Finally, you need to add a route to handle when users visit `http://domain.local/your-prefix/slug-here`

Example for route:

```php
Route::group(apply_filters(BASE_FILTER_GROUP_PUBLIC_ROUTE, []), function () {

    Route::get('/your-prefix/{slug}', [
        'uses' => 'PublicController@getBySlug',
    ]);

});
```

Example for controller method:

```php
public function getBySlug($slug, \Botble\Slug\Repositories\Interfaces\SlugInterface $slugRepository)
{
    $slug = $slugRepository->getFirstBy(['key' => $slug, 'reference_type' => YourModel::class]);
    if (!$slug) {
        abort(404);
    }
    $data = $this->{yourPlugin}Repository->getFirstBy(['id' => $slug->reference_id]);

    if (!$data) {
        abort(404);
    }

    do_action(BASE_ACTION_PUBLIC_RENDER_SINGLE, <PLUGIN>_MODULE_SCREEN_NAME, $data);

    return Theme::scope('your-example-view', compact('data'))->render();
}
```
