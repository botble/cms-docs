# Language

## Apply multi language for your new plugin

- Open `/plugins/<your-plugin>/src/Providers/<YourPlugin>ServiceProvider.php`. Add below code to function `boot`

```php
if (defined('LANGUAGE_MODULE_SCREEN_NAME')) {
    \Language::registerModule([YourPluginModel::class]);
}
```

## Language switcher

### Adding language switcher to your theme.

Add to your theme views.

```blade
{!! apply_filters('language_switcher') !!}
```

### Customize switcher.

If you want to custom language switcher, you can modify this
file: `platform/plugins/language/resources/views/partials/switcher.blade.php`

If you have a fixed number of languages you can use hardcode HTML like this.
Note: Language settings in admin won't work if you use this code.

```blade
<ul>
    <li>
        <a rel="alternate" hreflang="en" href="{{ Language::getLocalizedURL('en') }}">
            <img src="{{ url('vendor/core/images/flags/us.svg') }}" width="20" title="English" alt="English">
            <span>English</span>
        </a>
    </li>
    <li >
        <a rel="alternate" hreflang="vi" href="{{ Language::getLocalizedURL('vi') }}">
            <img src="{{ url('vendor/core/images/flags/vn.svg') }}" width="20" title="Tiếng Việt" alt="Tiếng Việt">
            <span>Tiếng Việt</span>
        </a>
    </li>
</ul>
```
