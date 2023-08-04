# Localization

## Translate theme

To translate theme's locale to your language. You need to add a json file `resources/lang` or
in `platform/themes/your-theme/lang`

Ex: Create file `resources/lang/es.json`

```json
{
  "Home": "Casa"
}
```

Reference: Laravel JSON translation document https://laravel.com/docs/5.7/localization#using-translation-strings-as-keys

## Translate admin panel

To add new locale for your project, you need to copy `resources/lang/en` to your language. Ex: `resources/lang/es` and
translate it to your language.

If you can run command, you can run `php artisan cms:locale:create <locale>` to quick add new locale.

To remove a locale, you can delete it in `resources/lang` or run command `php artisan cms:locale:remove <locale>`

::: tip
To use commands, you may need to run `composer install` to install `dev-tool` package.
:::

Reference: https://laravel.com/docs/5.7/localization#using-short-keys
