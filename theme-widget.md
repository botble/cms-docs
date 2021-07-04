# Widget

- [Register Widget Area](#register_widget_area)
- [Display Widget Area](#display_widget_area)
- [Create Widget](#create_widget)
- [Structure](#structure)

<a name="register_widget_area"></a>
## Register Widget Area

Add bellow code into `/platform/themes/your-theme/functions/functions.php`

```php
register_sidebar([
    'id'          => 'sidebar_name',
    'name'        => __('Sidebar Name'),
    'description' => __('This the description for widget area'),
]);
```

<a name="display_widget_area"></a>
## Display Widget Area

```php
{!! dynamic_sidebar('sidebar_name') !!}
```

<a name="create_widget"></a>
## Create Widget

> {warning} Dev tools are removed in the download package, you need to delete folder `/vendor` and run command `composer install` to reinstall it, then you can use dev commands.

1/ To create a widget, using below command:
    
```php
php artisan cms:widget:create <widget name>
```
    
This widget will be created in `/platform/themes/<current active theme>/widgets/<widget name>`.
    
Then go to `/admin/widgets`, you will see your widget.

> {note} You can follow other widgets in default themes: Ripple and NewsTV to create widget.

2/ To remove a widget, using below command:
    
```php
php artisan cms:widget:remove <widget name>
```
    
This widget will be removed.

<a name="structure"></a>
## Structure

A widget will have 3 files: This main class to init widget.

* Main file is main class to init widget. Ex: `/platform/themes/ripple/widgets/tags/tags.php`
* A file to display frontend view. Ex: `/platform/themes/ripple/widgets/tags/templates/frontend.php`
* A file to display backend view. Ex: `/platform/themes/ripple/widgets/tags/templates/backend.php`

## Video tutorials
- Overview: https://www.youtube.com/watch?v=FXQwT_95jdA

