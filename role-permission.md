# Roles & permissions

- Roles are stored in database so you can easy to create many roles if you want.
- Permissions are codebase, it's defined in configuration.

You can see example about permissions configuration in `core/acl/config/permissions.php`.

```php
return [
    [
        'name' => 'Users',
        'flag' => 'users.list',
        'parent_flag' => 'core.system',
    ],
    [
        'name' => 'Create',
        'flag' => 'users.create',
        'parent_flag' => 'users.list',
    ],
    
    ...
];
```

### How to add your permissions flags?

- You can config it from your plugin, after plugin generated, you can find `plugins/your-plugin/config/permissions.php`
and change its content.

Example: 

```php
return [
    [
        'name' => 'Tests',
        'flag' => 'test.list',
    ],
    [
        'name' => 'Edit',
        'flag' => 'test.edit',
        'parent_flag' => 'test.list',
    ],
    ...
];
```

*List permissions are stored in config file. So when you change it, you need to run command "cms:user:rebuild-permissions" to update it into database again*

### How to use it?

Example: `core/acl/routes/web.php:27`

```php
Route::group(['prefix' => config('core.base.general.admin_dir'), 'middleware' => 'auth'], function () {
    Route::group(['prefix' => 'system/users'], function () {
        Route::get('/', [
            'as' => 'users.list', // it will check permission with flag is users.list
            'uses' => 'UserController@getList',
        ]);

        Route::get('/delete/{id}', [
            'as' => 'users.delete',
            'uses' => 'UserController@getDelete',
            'permission' => false, // No check permission
        ]);        
        
        Route::get('/delete/{id}', [
            'as' => 'users.delete',
            'uses' => 'UserController@getDelete',
            'permission' => 'users.edit', // Change default permission flag to check from users.delete to users.edit
        ]);    
        
        Route::get('/delete/{id}', [
            'as' => 'users.delete',
            'uses' => 'UserController@getDelete',
            'permission' => 'superuser', // Just super user can do this
        ]);           
    ]);
});
```

You can see logic to check permission here: `core/acl/src/Http/Middleware/Authenticate.php:24`

```php
$route = $request->route()->getAction();
$flag = array_get($route, 'permission', array_get($route, 'as'));
$user = Auth::user();
if ($flag && !$user->hasPermission($flag)) {
    if ($request->expectsJson()) {
        return response()->json(['message' => 'Unauthenticated.'], 401);
    }
    abort(401);
}
```

By default, it will use route name as permission flag to check. If you set `permission` in a route, it'll use this value to check.
If `permission` is set to `false`, system will not check permission when a user access this route.
If `permission` is set to `superuser`, just super user can access this route.

### Available methods

#### hasPermission()

How to use: `$user->hasPermisison('posts.edit')` or `\Auth::user()->hasPermisison('posts.edit')`

Example:

```
    @if (Auth::user()->hasPermisison('posts.edit'))
        // Show something here
    @else
        // You don't have permission to edit a post
    @endif
```

#### hasAnyPermissions()

It's same with hasPermission but you can pass an array permissions to check. It will return `true` it has any permission in a list.


Example:

```
    @if (Auth::user()->hasAnyPermisisons(['posts.edit', 'posts.delete']))
        // Show something here
    @else
        // You don't have permission to edit a post
    @endif
```
