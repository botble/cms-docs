# API

- [Overview](#overview)
- [Install](#install)
- [Generate API document](#generate-docs)
    
<a name="overview"></a>
## Overview

API package is located in `/platform/packages`. It's using Laravel Passport. Learn more here: https://laravel.com/docs/6.x/passport

<a name="install"></a>
## Install

```
php artisan passport:install
```

<a name="generate-docs"></a>
## Generate API document

We're using https://github.com/knuckleswtf/scribe to make API document. Run below command to generate docs.
 
```
php artisan scribe:generate
```

Go to `http://your-domain/docs` to see API document.