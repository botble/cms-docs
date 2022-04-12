# Mail

- [Send mail](#send_mail)

<a name="send_mail"></a>
## Send mail

```php
EmailHandler::send(string $content, string $title, $to = null, $args = [], $debug = false);
```

Ex:

```php
EmailHandler::send('Hello there', 'Test email', 'sangit7b@gmail.com');
```