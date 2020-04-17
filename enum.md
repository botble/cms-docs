# Enum

## Add a new value for enum

```php
add_filter(BASE_FILTER_ENUM_ARRAY, function ($values, $class) {
    if ($class == \Botble\Base\Enums\BaseStatusEnum::class) {
        $values['DISABLED'] = 'disabled';
    }

    return $values;
}, 20, 2);

add_filter(BASE_FILTER_ENUM_LABEL, function ($value, $class) {
    if ($class == \Botble\Base\Enums\BaseStatusEnum::class && $value == 'disabled') {
        $value = 'Disabled';
    }

    return $value;
}, 20, 2);

add_filter(BASE_FILTER_ENUM_HTML, function ($value, $class) {
    if ($class == \Botble\Base\Enums\BaseStatusEnum::class && $value == 'disabled') {
        $value = \Html::tag('span', \Botble\Base\Enums\BaseStatusEnum::getLabel($value), ['class' => 'label-danger status-label'])
            ->toHtml();
    }

    return $value;
}, 20, 2);
```