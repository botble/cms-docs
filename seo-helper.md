# SEO helper

## Add SEO block to your plugin.

- Open `/plugins/<your-plugin>/src/Providers/<YourPlugin>ServiceProvider.php`. Add below code to function `boot`

```php
\SeoHelper::registerModule([YourPluginModel::class]);
```

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

## Get current page title

```php
\SeoHelper::getTitle();
```