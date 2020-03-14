# Error pages

- [Customize 404 page](#customize-404-page)

<a name="customize-404-page"></a>
## Customize 404 page

Default 404 page for theme is located in `/platform/themes/your-theme/views/404.blade.php`.
To customize error layout, you need to change in `/platform/themes/your-theme/views/error-master.blade.php`

> {note} Please use below code if you want to use theme layout for error pages.

```html
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

    <link rel="canonical" href="{{ route('public.single') }}">
    <meta http-equiv="content-language" content="en">

    @php
        Theme::fire('beforeRenderTheme', app(\Botble\Theme\Contracts\Theme::class));
    @endphp
    {!! Theme::header() !!}
</head>
<body>
    {!! Theme::partial('header') !!}

    <div class="container">
        @yield('message')
    </div>

    {!! Theme::partial('footer') !!}
    
    {!! Theme::footer() !!}
</body>
</html>
```

Example for `/platform/themes/your-theme/views/404.blade.php`:

```html
@extends('theme.' . setting('theme') . '::views.error-master')

@php
    SeoHelper::setTitle(__('Page could not be found'));
@endphp

@section('message')
    <br>
    <br>
    <h1>{{ __('Page could not be found') }}</h1>
    <br>
    <br>
    <h4>{{ __('This may have occurred because of several reasons') }}:</h4>
    <ul>
        <li>{{ __('The page you requested does not exist.') }}</li>
        <li>{{ __('The link you clicked is no longer.') }}</li>
        <li>{{ __('The page may have moved to a new location.') }}</li>
        <li>{{ __('An error may have occurred.') }}</li>
        <li>{{ __('You are not authorized to view the requested resource.') }}</li>
    </ul>
    <br>
    <br>
@endsection

```

