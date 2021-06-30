# Media

## Media issue.

### Image uploaded successful but doesn't display.

Make sure you have done following steps:

- Make sure `APP_URL` in `.env` is correct.
- Make sure PHP extension `GD` or `Imagick` is enabled.
- Chmod folder `public/storage` to make it writeable.
- Go to Admin -> Settings -> Media and set Driver to `Local`.

## Change media image sizes

### Option 1: Override media config
Copy `platform/core/media/config/media.php` to `config/media.php` and change the media sizes.

```php
<?php

return [
    ...
    'sizes' => [
        'thumb'    => '150x150',
        'featured' => '560x380',
        'medium'   => '540x360',
    ],
    ...
];

```

### Option 2: Modify it from your theme, media sizes will depend on your theme.
Add to `platform/themes/your-theme/functions/functions.php` or in your plugin service providers.

```php
\RvMedia::addSize('featured', 560, 380);
```

Add many sizes:
```php
\RvMedia::addSize('featured', 560, 380)
    ->addSize(<name>, <width>, <height>)
    ...
```

After that, you need to run command to regenerate thumbnails.

```bash
php artisan cms:media:thumbnail:generate
```

How to use:

```php
{{ get_image_url($post->image, 'post-small') }}
{{ get_object_image($post->image, 'post-small') }}
```

## Add more file extensions.

By default, media management supports some file extensions: `jpg,jpeg,png,gif,txt,docx,zip,mp3,bmp,csv,xls,xlsx,ppt,pptx,pdf,mp4,doc,mpga,wav,webp`.

You can add more file extensions if you want. 

Add to `.env`:

```bash
RV_MEDIA_ALLOWED_MIME_TYPES=RV_MEDIA_ALLOWED_MIME_TYPES=jpg,jpeg,png,gif,txt,docx,zip,mp3,bmp,csv,xls,xlsx,ppt,pptx,pdf,mp4,doc,mpga,wav,webp
```

## Custom upload

You can create your custom upload with `RvMedia` facade.

Ex:

```
\RvMedia::handleUpload(request()->file('file'), 0, 'your-folder');
```

Or

```
rv_media_handle_upload(request()->file('file'), 0, 'your-folder');
```

## Get image by size

To get image by size, you can use `get_image_url($url, $size = null, $relative_path = false, $default = null)`.

Ex:

```
get_image_url($post->image, 'thumb');
```

If you have registered other size, you can change `thumb` by your size's name.

## Upload file from a path

You can fake a file upload from a path with `UploadedFile` and upload it using `RvMedia::handleUpload()`

Ex:
```php
$folder = \Botble\Media\Models\MediaFolder::create([
    'name' => 'Example',
    'slug' => 'example',
]);
$fileUpload = new \Illuminate\Http\UploadedFile(database_path('files/example.png'), 'example.png', 'image/png', null, true);
$image = \RvMedia::handleUpload($fileUpload, $folder->id);
```

## Increase upload file size
- Maximum file size is 2MB by default.

- To increase file upload size in PHP, you need to modify the `upload_max_filesize` and `post_max_size` variable’s in your php.ini file.
If you can't change it, please contact your hosing provider to increase those values.

```
upload_max_filesize = 10M
post_max_size = 10M
```
