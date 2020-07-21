# Dashboard

## Stats widget (https://prnt.sc/tlmdtc)

### Add a new stats widget

- Open your plugin service provider then add to the `boot` function or `platform/themes/[your-theme]/functions/functions.php`

```php
add_filter(DASHBOARD_FILTER_ADMIN_LIST, function ($widgets, $widgetSettings) {
    return (new \Botble\Dashboard\Supports\DashboardWidgetInstance)
        ->setType('stats')
        ->setPermission('the permission key to check')
        ->setKey('widget_your_widget_key')
        ->setTitle(__('Widget name'))
        ->setIcon('fas fa-edit')
        ->setColor('#f3c200')
        ->setStatsTotal('[number to display]')
        ->setRoute(route('the-route-to-list-page'))
        ->init($widgets, $widgetSettings);
}, 1221, 2);
```

`1221` is the priority, it can be any number but must unique.

> {warning} You can find an example in platform/packages/page/src/Providers/HookServiceProvider.php line 57

### Remove all stats widgets

- Open your plugin service provider then add to the `boot` function or `platform/themes/[your-theme]/functions/functions.php`

```php
remove_filter(DASHBOARD_FILTER_ADMIN_LIST);
```

## Main widgets
### Register new dashboard widget

- Open your plugin service provider then add to the `boot` function or `platform/themes/[your-theme]/functions/functions.php`

```php
add_filter(DASHBOARD_FILTER_ADMIN_LIST, function ($widgets, $widgetSettings) {
    return (new \Botble\Dashboard\Supports\DashboardWidgetInstance)
        ->setPermission('the permission key to check')
        ->setKey('widget_your_widget_key')
        ->setTitle(__('Widget name'))
        ->setIcon('fas fa-edit')
        ->setColor('#f3c200')
        ->setRoute(route('the-route-to-get-data'))
        ->setBodyClass('scroll-table')
        ->setColumn('col-md-6 col-sm-6')
        ->init($widgets, $widgetSettings);
}, 1221, 2);
```

`1221` is the priority, it can be any number but must unique.

> {warning} You can find an example in platform/plugins/blog/src/Providers/HookServiceProvider.php line 137

- Create a controller to return main content for your widget, the route name is added in above code (Ex: `the-route-to-get-data`).

```php
public function getDataForWidget(Request $request, BaseHttpResponse $response)
{
    $content = 'The content can be a string or rendered from a blade view';
    
    // $content = view('plugins.your-plugin::widgets.sample', compact('data'))->render()
    return $response
        ->setError(false)
        ->setData($content);
}
```

> {warning} You can find an example in platform/plugins/blog/src/Http/Controllers/PostController.php line 207
