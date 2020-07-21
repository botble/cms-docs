# Theme localization

Using JSON translation in your theme.

Ex:

```php
// In blade views
{{ __('Text you want to translate here') }}

// In controllers

__('Hello')
```

To translate your theme to other language. Add .json file in `/platform/themes/[your-theme]/lang`.

Ex: to translate your theme to Vietnamese.

`/platform/themes/[your-theme]/lang/vi.json`

```json
{
  "Text you want to translate here": "Đoạn văn bản mà bạn muốn dịch",
  "Hello": "Xin chào"
}
```

You can also translate it from UI. 
- Go to Admin -> Settings -> Languages then add a new language.
- Go to Admin -> Appearance -> Theme translations to translate your theme.

> {note} You can see full example in /platform/themes/ripple


