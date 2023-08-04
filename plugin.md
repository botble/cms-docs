# Plugin

::: warning
Dev tools are removed in the download package, you need to delete folder `/vendor` and run command `composer install` to
reinstall it, then you can use dev commands.
:::

## Commands

- Check this video: https://www.youtube.com/watch?v=JAiKnnb9dH8

### Create a plugin

**- Open CMD or Terminal then run:**

```bash
php artisan cms:plugin:create <plugin name>
````

## Activate a plugin

**- Open CMD or Terminal then run:**

```bash
php artisan cms:plugin:activate <plugin name>
```

### Deactivate a plugin

**- Open CMD or Terminal then run:**

```bash
php artisan cms:plugin:deactivate <plugin name>
```

### Remove a plugin

**- Command:**

```bash
php artisan cms:plugin:remove demo
```

::: info
`demo` is a plugin.
:::

When you run this command. It will do:

+ Deactivate `demo` plugin.

+ It will be remove `demo` table and its permissions

+ Delete folder demo in `/plugins` and delete `/plugins` directory if it's empty

## Video tutorials

- Make CRUD inside an existed plugin: https://www.youtube.com/watch?v=GAnoZbGHE28
- Adding new fields to an existing form: https://www.youtube.com/watch?v=5PC6mzssZ70
- Display plugin data on the front theme: https://www.youtube.com/watch?v=YgrfEXK2TBo
- Working with SEO helpers: https://www.youtube.com/watch?v=S0tlbt0K44c
