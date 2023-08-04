# Mail

- [Send mail](#send_mail)

## Send mail

```php
EmailHandler::send(string $content, string $title, $to = null, $args = [], $debug = false);
```

Ex:

```php
EmailHandler::send('Hello there', 'Test email', 'contact@botble.com');
```
