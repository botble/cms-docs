# Meta boxes

This concept based on Wordpress functions.

You can add meta box from `your-theme/functions/functions.php` or in function `boot` of your plugin service provider.

## Add a meta box

We need to add an action to hook `BASE_ACTION_META_BOXES`

Example:

```php
add_action(BASE_ACTION_META_BOXES, 'callback_function_to_handle_meta_box', 120, 3);
```

Create callback for above action

```php
/**
* This is an example callback function, it will add more fields to post create/edit screen.
*/
function callback_function_to_handle_meta_box($screen, $context)
{
    if (is_plugin_active('blog') && $screen == POST_MODULE_SCREEN_NAME && $context == 'advanced') {
        add_meta_box('additional_post_fields', __('Addition Information'), 'post_additional_fields', $screen, $context, 'default');
    }
}
```

** Reference: https://developer.wordpress.org/reference/functions/add_meta_box **

Function: Adds a meta box to one or more screens.

```php
add_meta_box(
    string $id, 
    string $title, 
    callable $callback, 
    string $screen = null, 
    string $context = 'advanced', 
    string $priority = 'default', 
    array $callback_args = null
);
```

**$id**:
- (string) (Required) Meta box ID (used in the 'id' attribute for the meta box).

**$title**:
- (string) (Required) Title of the meta box.

**$callback**:
- (callable) (Required) Function that fills the box with the desired content. The function should echo its output.

**$screen**:
- (string|array|WP_Screen) (Optional) The screen or screens on which to show the box (such as a post type, 'link', or 'comment'). Accepts a single screen ID, WP_Screen object, or array of screen IDs. Default is the current screen.
- Default value: null

**$context**:
- (string) (Optional) The context within the screen where the boxes should display. Available contexts vary from screen to screen. Post edit screen contexts include 'normal', 'side', and 'advanced'. Comments screen contexts include 'normal' and 'side'. Menus meta boxes (accordion sections) all use the 'side' context. Global
- Default value: 'advanced'

**$priority**:
- (string) (Optional) The priority within the context where the boxes should show ('high', 'low').
- Default value: 'default'

**$callback_args**:
- (array) (Optional) Data that should be set as the $args property of the box array (which is the second parameter passed to your callback).
- Default value: null

Create callback function for add_meta_box function.

Example: 

```php
function post_additional_fields()
{
    $video_link = null;
    $args = func_get_args();
    if (!empty($args[0])) {
        $video_link = get_meta_data($args[0], 'video_link', true);
    }
    return Theme::partial('post-fields', compact('video_link'));
}
```

You can see `Theme::partial('post-field')` so you need to create view for this function in your-theme/partials/post-fields.blade.php

```html
<div class="form-group">
    <label for="video_link">{{ __('Video') }}</label>
    {!! Form::text('video_link', $video_link, ['class' => 'form-control', 'id' => 'video_link']) !!}
</div>
```

> {note} If you don't want to put view in your current theme, you can create that view in your plugin or `resources/views` then chang `Theme::partial('post-field')` to `view('your-view')`
    
## Handle save meta box fields

Example:

```php
add_action(BASE_ACTION_AFTER_CREATE_CONTENT, 'save_addition_post_fields', 230, 3);
add_action(BASE_ACTION_AFTER_UPDATE_CONTENT, 'save_addition_post_fields', 231, 3);

function save_addition_post_fields($type, $request, $object)
{
    if (is_plugin_active('blog') && $type == POST_MODULE_SCREEN_NAME) {
        save_meta_data($object, 'video_link', $request->input('video_link'));
    }
}
```

## Full example code.

** your-theme/functions/functions.php **

```php
add_action(BASE_ACTION_META_BOXES, 'add_addition_fields_in_post_screen', 24, 3);

function add_addition_fields_in_post_screen($screen, $context)
{
    if (is_plugin_active('blog') && $screen == POST_MODULE_SCREEN_NAME && $context == 'advanced') {
        add_meta_box('additional_post_fields', __('Addition Information'), 'post_additional_fields', $screen, $context, 'default');
    }
}

function post_additional_fields()
{
    $video_link = null;
    $args = func_get_args();
    if (!empty($args[0])) {
        $video_link = get_meta_data($args[0], 'video_link', true);
    }
    return Theme::partial('post-fields', compact('video_link'));
}

add_action(BASE_ACTION_AFTER_CREATE_CONTENT, 'save_addition_post_fields', 230, 3);
add_action(BASE_ACTION_AFTER_UPDATE_CONTENT, 'save_addition_post_fields', 231, 3);

function save_addition_post_fields($type, $request, $object)
{
    if (is_plugin_active('blog') && $type == POST_MODULE_SCREEN_NAME) {
        save_meta_data($object, 'video_link', $request->input('video_link'));
    }
}
```

** your-theme/partials/post-fields.blade.php **

```html
<div class="form-group">
    <label for="video_link">{{ __('Video') }}</label>
    {!! Form::text('video_link', $video_link, ['class' => 'form-control', 'id' => 'video_link']) !!}
</div>
```