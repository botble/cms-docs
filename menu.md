# Menu

## Default menu locations

`platform/packages/menu/config/general.php`
```php
'locations' => [
    'header-menu' => 'Header Navigation',
    'main-menu'   => 'Main Navigation',
    'footer-menu' => 'Footer Navigation',
],
```


## Render menu by location

```php
    {!!
        Menu::renderMenuLocation('main-menu', [ 
            'options' => [],
            'theme'   => true,
        ])
    !!}
```

`main-menu` is the menu location key

'options' is attributes of `ul` tag. Ex: `'options' => ['id' => 'menu-header-main-menu', 'class' => 'menu']`

## Add new menu location

```php
   Menu:addMenuLocation('menu-location-key', 'Description here');
```

## Remove a menu location

```php
   Menu:removeMenuLocation('menu-location-key');
```

## Customize menu views

To customize view to display menu. You can create a file in /public/themes/your-theme/partials.

Ex: `/platform/themes/your-theme/partials/custom-menu.blade.php`
```php
<ul {!! $options !!}>
    @foreach ($menu_nodes as $key => $row)
        <li class="{{ $row->css_class }} @if ($row->url == Request::url()) current @endif">
            <a href="{{ $row->url }}" target="{{ $row->target }}">
                <i class='{{ trim($row->icon_font) }}'></i> <span>{{ $row->name }}</span>
            </a>
            @if ($row->has_child)
                {!! Menu::generateMenu([
                    'slug' => $menu->slug,
                    'parent_id' => $row->id
                ]) !!}
            @endif
        </li>
    @endforeach
</ul>
```

Default code to display menu is located in `core/menu/resources/views/partials/default.blade.php`

And to show menu with custom view, using below code:

```php
{!!
    Menu::renderMenuLocation('main-menu', [
        'options' => [],
        'theme' => true,
        'view' => 'custom-menu',
    ])
!!}
```

Menu in the location 'main-menu' will be generated using custom view in `/platform/themes/your-theme/partials/custom-menu.blade.php`
