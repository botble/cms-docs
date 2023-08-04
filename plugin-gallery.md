# Gallery

## Display galleries in theme

```blade
@if (function_exists('render_galleries'))
   {!! render_galleries(8) !!}
@endif
```

It will use template `plugins/gallery/resources/views/gallery.blade.php` to render gallery

```php
function render_galleries(int $limit)
{
    Gallery::registerAssets();
    return view('plugins.gallery::gallery', compact('limit'));
}
```

If you need to custom display of list galleries, you just need to copy the content
of `plugins/gallery/resources/views/gallery.blade.php` and customize it in your theme.

## Display galleries for page, post

For page: Add in your-theme/page.blade.php

```blade
@if (defined('GALLERY_MODULE_SCREEN_NAME') && !empty($galleries = gallery_meta_data($page)))
  {!! render_object_gallery($galleries) !!}
@endif
```

For post: Add in your-theme/post.blade.php

```blade
@if (defined('GALLERY_MODULE_SCREEN_NAME') && !empty($galleries = gallery_meta_data($post)))
    {!! render_object_gallery($galleries, ($post->categories()->first() ? $post->categories()->first()->name : __('Uncategorized'))) !!}
@endif
```

## How to add gallery to your plugin

- Open `/plugins/<your-plugin>/src/Providers/<YourPlugin>ServiceProvider.php`. Add below code to function `boot`

```php
\Gallery::registerModule([YourPluginModel::class]);
```
