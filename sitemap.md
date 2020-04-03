# Sitemap

Sitemap URL: http://your-domain.com/sitemap.xml

## Add new URLs to sitemap

Add to /platform/themes/your-theme/functions/functions.php or function boot() of your plugin service provider.

```php
\Event::listen(\Botble\Theme\Events\RenderingSiteMapEvent::class, function () {
    \SiteMapManager::add('your-url', '2020-04-03 00:00:00', '0.8', 'monthly');
    
    // Add many URLs
    
    $posts = [...];
    foreach ($posts as $post) {
        \SiteMapManager::add($post->url, $post->updated_at, '0.8', 'daily');
    }
});
```

