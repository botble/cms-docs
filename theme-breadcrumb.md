# Breadcrumb

- [Breadcrumbs](#breadcrumbs)

<a name="breadcrumbs"></a>
## Breadcrumbs
In order to use breadcrumbs, follow the instruction below:
    
```php
Theme::breadcrumb()->add('label', 'http://...')->add('label2', 'http:...');
    
// or

Theme::breadcrumb()->add([
    [
        'label' => 'label1',
        'url'   => 'http://...'
    ],
    [
        'label' => 'label2',
        'url'   => 'http://...'
    ]
]);
```
    
To render breadcrumbs.

```php
{!! Theme::breadcrumb()->render() !!}
```
    
To customize breadcrumb, using below code instead of `{!! Theme::breadcrumb()->render() !!}`:

```php
<ul class="breadcrumb">
    @foreach (Theme::breadcrumb()->getCrumbs() as $i => $crumb)
        @if ($i != (count(Theme::breadcrumb()->getCrumbs()) - 1))
            <li><a href="{{ $crumb['url'] }}">{!! $crumb['label'] !!}</a><span class="divider">/</span></li>
        @else
            <li class="active">{!! $crumb['label'] !!}</li>
        @endif
    @endforeach
</ul>
```

If you're using breadcrumbs in many files, you can put above code in `platform/themes/your-theme/partials/breadcrumbs.blade.php` then use

```php
{!! Theme::partial('breadcrumbs') !!}
```