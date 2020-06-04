# Layouts

### Create new layout
Create a layout file in `/platform/themes/<current theme>/layouts` following `default.blade.php` in this folder. Then customize it like you want.

Example: `custom-layout.blade.php`
```php
{!! Theme::partial('header') !!}
{!! Theme::content() !!}
{!! Theme::partial('footer') !!}
```

### Using layout for pages
*Step 1:* Register new template to `/platform/themes/<current theme>/functions/functions.php`

```php
register_page_template([
    'custom-layout' => __('Custom layout'), // custom-layout is the name of layout file.
]);
```

*Step 2:* Go to Admin panel -> Pages and select template `Custom layout` for a page to test.

### Using layout for plugin front views.

Example:

```php
public function getExample()
{
    return \Theme::layout('custom-layout')->scope('example', ['data' => 123])->render();
}
```

### Using $page in layouts

You can send $page variable from /platform/themes/views/page.blade.php to /platform/themes/layouts/default.blade.php using:


```php
// Add on the top of platform/themes/views/page.blade.php

@php
Theme::set('page', $page);
@endphp
```

```php
// Add on the top of platform/themes/layouts/default.blade.php

@php
$page = Theme::get('page');
@endphp
```

Then you can use $page variable in layout blade view to display data.
