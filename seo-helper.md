# SEO helper

## Add SEO block to your plugin form

- Open `/plugins/[your-plugin]/src/Providers/[YourPlugin]ServiceProvider.php`. Add below code to function `boot`

```php
\SeoHelper::registerModule([YourPluginModel::class]);
```

## Get current page title

```php
\SeoHelper::getTitle();
```

## Add new meta tags to page/post.

### Add into blade files.

Add to **platform/themes/[your-theme]/views/page.blade.php** or **platform/themes/[your-theme]/views/post.blade.php**

```blade
@php
    SeoHelper::meta()->addMeta('robots', 'index, follow'); // SeoHelper::meta()->addMeta('[tag name]', '[tag content]')
@endphp
```

You can add many meta tags as you want.

Ex:

```blade
@php    
    SeoHelper::meta()->addMeta('...', '...')
        ->addMeta('...', '...')
        ->addMeta('...', '...');
@endphp
```

### Using hook

You can hook to action **BASE_ACTION_PUBLIC_RENDER_SINGLE**.

Ex: Add to **platform/themes/[your-theme]/functions/functions.php**.

```php
add_action(BASE_ACTION_PUBLIC_RENDER_SINGLE, function ($screen, $data) {    
    if (in_array($screen, [PAGE_MODULE_SCREEN_NAME, POST_MODULE_SCREEN_NAME])) {        
        SeoHelper::meta()->addMeta('robots', 'index, follow');        
        SeoHelper::openGraph()
            ->addProperty('image:width', '600')            
            ->addProperty('image:height', '300');
        if ($data->image) {            
            SeoHelper::twitter()->addImage(get_image_url($data->image));        
        }    
    }
}, 120, 2);
```

> {warning} You can find all available methods for SeoHelper in platform/packages/seo-helper/src/SeoHelper.php.

## Title & description

```php
 \SeoHelper::setTitle('Title here')
    ->setDescription('Page description here');
```

## Og tags

```php
\SeoHelper::openGraph()->setImage('Path to image');
\SeoHelper::openGraph()->setTitle('Og title');
\SeoHelper::openGraph()->setDescription('Og description');
\SeoHelper::openGraph()->setUrl('Page URL');
\SeoHelper::openGraph()->setType('article');
\SeoHelper::openGraph()->addProperty('property-name', 'property-value');

// Or

$meta = new \Botble\SeoHelper\SeoOpenGraph;
$meta->setImage('Path to image');
$meta->setTitle('Og title');
$meta->setDescription('Og description');
$meta->setUrl('Page URL');
$meta->setType('article');
$meta->addProperty('property-name', 'property-value');

\SeoHelper::setSeoOpenGraph($meta);
```
