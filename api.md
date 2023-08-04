# API

## Overview

API package is located in `/platform/packages/api`. It's using Laravel Sanctum. Learn more here: https://laravel.com/docs/10.x/sanctum

## Generate API document

We're using https://github.com/knuckleswtf/scribe to make API document. Run below command to generate docs.
 
```
php artisan scribe:generate
```

Go to `http://your-domain/docs` to see API document.
