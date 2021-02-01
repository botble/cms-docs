# Plugin

- [Create plugin](#create-plugin)
- [Activate plugin](#activate-plugin)
- [Deactivate plugin](#deactivate-plugin)
- [Remove plugin](#remove-plugin)

> {info}From version 3.2, command name is changed from `plugin:create` to `cms:plugin:create`. Please run `php artisan --help` to see all commands

> {warning} Dev tools are removed in the download package, you need to delete folder `/vendor` and run command `composer install` to reinstall it, then you can use dev commands.

<a name="create-plugin"></a>
## Create a plugin
**- Open CMD or Terminal then run:**

```bash
php artisan cms:plugin:create <plugin name>
````

<a name="activate-plugin"></a>
## Activate a plugin
**- Open CMD or Terminal then run:**

```bash
php artisan cms:plugin:activate <plugin name>
```

<a name="deactivate-plugin"></a>
## Deactivate a plugin
**- Open CMD or Terminal then run:**

```bash
php artisan cms:plugin:deactivate <plugin name>
```
     
<a name="remove-plugin"></a>
## Remove a plugin
**- Command:**

```bash
php artisan cms:plugin:remove demo
```

> {info} `demo` is a plugin

When you run this command. It will do:

+ Deactivate `demo` plugin.

+ It will be remove `demo` table and its permissions

+ Delete folder demo in `/plugins` and delete `/plugins` directory if it's empty
