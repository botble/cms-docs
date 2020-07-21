# Dashboard

### Register new dashboard widget

- Open your plugin service provider then add to the `boot` function or `platform/themes/[your-theme]/functions/functions.php`

```php
add_filter(DASHBOARD_FILTER_ADMIN_LIST, [$this, 'registerDashboardWidgets'], 1221, 2);
```

`1221` is the priority, it can be any number but must unique.

- Add function callback to your plugin service provider.

```php
public function registerDashboardWidgets($widgets, $widgetSettings)
{
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
}
```

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

### Remove all widget stats (https://prnt.sc/tlmdtc)

- Open your plugin service provider then add to the `boot` function or `platform/themes/[your-theme]/functions/functions.php`

```php
remove_filter(DASHBOARD_FILTER_ADMIN_LIST);
```
