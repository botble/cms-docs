# Theme assets

- [Basic usage of assets](#basic-usage-of-assets)
- [Preparing group of assets](#preparing-group-of-assets)

<a name="basic-usage-of-assets"></a>
## Basic usage of assets

Add assets in your route.

```php
// path: public/css/style.css
$theme->asset()->add('core-style', 'css/style.css');

// path: public/js/script.css
$theme->asset()->container('footer')->add('core-script', 'js/script.js');

// path: public/themes/[current theme]/assets/css/custom.css
// This case has dependency with "core-style".
$theme->asset()->usePath()->add('custom', 'css/custom.css', array('core-style'));

// path: public/themes/[current theme]/assets/js/custom.js
// This case has dependency with "core-script".
$theme->asset()->container('footer')->usePath()->add('custom', 'js/custom.js', array('core-script'));
```
    
> {info} You can force use theme to look up existing theme by passing parameter to method: $theme->asset()->usePath('default')

Writing in-line style or script.

```php
// Dependency with.
$dependencies = array();

// Writing an in-line script.
$theme->asset()->writeScript('inline-script', '
    $(function() {
        console.log("Running");
    })
', $dependencies);

// Writing an in-line style.
$theme->asset()->writeStyle('inline-style', '
    h1 { font-size: 0.9em; }
', $dependencies);

// Writing an in-line script, style without tag wrapper.
$theme->asset()->writeContent('custom-inline-script', '
    <script>
        $(function() {
            console.log("Running");
        });
    </script>
', $dependencies);
```

Render styles and scripts in your layout.

```php
// Without container
echo Theme::asset()->styles();

// With "footer" container
echo Theme::asset()->container('footer')->scripts();
```

Direct path to theme asset.

```php
echo Theme::asset()->url('img/image.png');
```

Remove added CSS/Js.

Ex:

```php
// Add to platform/themes/[your-theme]/functions/functions.php
app()->booted(function () {
    Theme::asset()->remove('language-css');
    Theme::asset()->container('footer')->remove('language-public-js');
});
```

<a name="preparing-group-of-assets"></a>
## Preparing group of assets.

Some assets you don't want to add on a page right now, but you still need them sometimes, so "cook" and "serve" is your magic.

Cook your assets.

```php
Theme::asset()->cook('backbone', function($asset) {
    $asset->add('backbone', '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min.js');
    $asset->add('underscorejs', '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min.js');
});
```

You can prepare on a global in package config.

```php
// Location: config/theme/config.php
....
'events' => [

    ....

    // This event will fire as a global you can add any assets you want here.
    'asset' => function($asset)
    {
        // Preparing asset you need to serve after.
        $asset->cook('backbone', function($asset)
        {
            $asset->add('backbone', '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min.js');
            $asset->add('underscorejs', '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min.js');
        });
    }

]
....
```

Serve theme when you need.

```php
// At the controller.
Theme::asset()->serve('backbone');
```


Then you can get output.
    
```php
...
<head>
    <?php echo Theme::asset()->scripts(); ?>
    <?php echo Theme::asset()->styles(); ?>
    <?php echo Theme::asset()->container('YOUR_CONTAINER')->scripts(); ?>
    <?php echo Theme::asset()->container('YOUR_CONTAINER')->styles(); ?>
</head>
...
```
