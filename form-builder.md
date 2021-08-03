# Form builder

We're using [kristijanhusak/laravel-form-builder](https://github.com/kristijanhusak/laravel-form-builder) to build form.
Visit official document for more information [https://kristijanhusak.github.io/laravel-form-builder](https://kristijanhusak.github.io/laravel-form-builder)

Example:

```php
$this
    ->setUpModel(new {Plugin})
    ->setValidatorClass({Plugin}Request::class)
    ->withCustomFields()
    ->add('field_name', 'text', [
        'label'      => __('Field label'),
        'label_attr' => ['class' => 'control-label required'],
        'attr'       => [
            'placeholder'  => __('Placeholder'),
            'data-counter' => 120,
        ],
    ]);
```

## Form fields

If you want to show form field as mandatory field, add `required` class to label attributes.

### Input fields (Text, Password, Email, Number, Textarea...)

```php
->add('field_name', 'text', [ // you can change "text" to "password", "email", "number" or "textarea"
    'label'      => __('Field name'),
    'label_attr' => ['class' => 'control-label required'], // Add class "required" if that is mandatory field
    'attr'       => [
        'placeholder'  => __('Placeholder'),
        'data-counter' => 120, // Maximum characters
    ],
])
```

### On/Off field

```php
->add('field_name', 'onOff', [
    'label'         => __('Field label'),
    'label_attr'    => ['class' => 'control-label'],
    'default_value' => false,
])
```

### Editor field

```php
->add('field_name', 'editor', [
    'label'      => __('Field label'),
    'label_attr' => ['class' => 'control-label'],
    'attr'       => [
        'with-short-code' => false, // if true, it will add a button to select shortcode
        'without-buttons' => false, // if true, all buttons will be hidden
    ],
])
```

### Select

```php
->add('field_name', 'select', [ // Change "select" to "customSelect" for better UI
    'label'      => __('Field label'),
    'label_attr' => ['class' => 'control-label required'], // Add class "required" if that is mandatory field
    'choices'    => [
        1 => __('Option 1'),
        2 => __('Option 2'),
    ],
])
```

### Radio

```php
->add('field_name', 'customRadio', [
    'label'      => __('Field label'),
    'label_attr' => ['class' => 'control-label'],
    'choices'    => [
        ['option1', 'Option 1'],
        ['option2', 'Option 2'],
    ],
])
```

### Image field 

```php
->add('field_name', 'mediaImage', [
    'label'      => __('Field label'),
    'label_attr' => ['class' => 'control-label'],
])
```

### List of images field 

```php
->add('field_name[]', 'mediaImages', [
    'label'      => __('Field label'),
    'label_attr' => ['class' => 'control-label'],
    'values'     => $this->model ? json_decode($this->field_name, true) : [],,
])
```

Example: https://www.loom.com/share/25ede29d654b49a98bc9e7dbcc428f66

### File field

```php
->add('field_name', 'mediaFile', [
    'label'      => __('Field label'),
    'label_attr' => ['class' => 'control-label'],
])
```

### Color field

```php
->add('field_name', 'color', [
    'label'      => __('Field label'),
    'label_attr' => ['class' => 'control-label'],
])
```

### Time field

```php
->add('field_name', 'time', [
    'label'      => __('Field label'),
    'label_attr' => ['class' => 'control-label'],
])
```

### Number field with input mask

```php

Assets::addScripts(['input-mask']);

->add('field_name', 'text', [
    'label'      => __('Field label'),
    'label_attr' => ['class' => 'control-label'],
    'attr'       => [
        'id'    => 'field_name',
        'class' => 'form-control input-mask-number',
    ],
])
```

### Date picker field

```php
->add('field_name', 'text', [
    'label'         => __('Field label'),
    'label_attr'    => ['class' => 'control-label'],
    'attr'          => [
        'class'            => 'form-control datepicker',
        'data-date-format' => 'yyyy/mm/dd',
    ],
    'default_value' => now(config('app.timezone'))->format('Y/m/d'),
])
```

### Repeater fields

```php
->add('options', 'repeater', [
    'label'      => __('Repeater field'),
    'label_attr' => ['class' => 'control-label'],
    'fields' => [
        [
            'type'       => 'text',
            'label'      => __('Text'),
            'label_attr' => ['class' => 'control-label required'],
            'attributes' => [
                'name'    => 'text',
                'value'   => null,
                'options' => [
                    'class'        => 'form-control',
                    'data-counter' => 255,
                ],
            ],
        ],
        [
            'type' => 'mediaImage',
            'label'      => __('Image'),
            'label_attr' => ['class' => 'control-label'],
            'attributes' => [
                'name'    => 'image',
                'value'   => null,
            ],
        ],
        [
            'type'       => 'textarea',
            'label'      => __('Textarea'),
            'label_attr' => ['class' => 'control-label'],
            'attributes' => [
                'name'    => 'textarea',
                'value'   => null,
                'options' => [
                    'class'        => 'form-control',
                    'data-counter' => 255,
                    'rows' => 3,
                ],
            ],
        ],
    ]
])
```

## Form layouts

Default layout template for form is `core.base::forms.form`, you can set other layout for form.

Example:
```php
->setFormOption('template', 'core.base::forms.form-modal')
```

By default, a form will have 2 columns. It's separated by a breaking point. You can set it by using:

```php
->setBreakFieldPoint('field_name');
```

## Row with multiple fields

```php
$this
    ->add('rowOpen1', 'html', [
        'html' => '<div class="row">',
    ])
    ->add('field1', 'text', [
        'label'      => 'Field 1',
        'label_attr' => ['class' => 'control-label'],
        'wrapper'    => [
            'class' => 'form-group col-md-6',
        ],
    ])
    ->add('field2', 'text', [
        'label'      => 'Field 2',
        'label_attr' => ['class' => 'control-label'],
        'wrapper'    => [
            'class' => 'form-group col-md-6',
        ],
    ])
    ->add('rowClose1', 'html', [
        'html' => '</div>',
    ]);
```

If you want to have 3 fields on a row, just need to change `col-md-6` to `col-md-4` and add 1 more field inside `rowOpen1` and `rowClose1`.

## Add more columns into existed form

Check this video tutorial: https://youtu.be/5PC6mzssZ70

```php
add_filter(BASE_FILTER_BEFORE_RENDER_FORM, function ($form, $data)
{
    if (get_class($data) == \Botble\Blog\Models\Post::class) {
    
        $test = \MetaBox::getMetaData($data, 'test', true);
    
        $form
            ->add('test', 'text', [
                'label'      => __('Test Field'),
                'label_attr' => ['class' => 'control-label'],
                'value'      => $test,
                'attr'       => [
                    'placeholder' => __('Test'),
                ],
            ]);

    }
    
    return $form;
}, 120, 3);

add_action(BASE_ACTION_AFTER_CREATE_CONTENT, 'save_addition_fields', 120, 3);
add_action(BASE_ACTION_AFTER_UPDATE_CONTENT, 'save_addition_fields', 120, 3);

/**
 * @param string $screen
 * @param Request $request
 * @param Model $data
 */
function save_addition_fields($screen, $request, $data)
{
    if (get_class($data) == \Botble\Blog\Models\Post::class) {
        MetaBox::saveMetaBoxData($data, 'test', $request->input('test'));
    }
}
```

Display the value of Test field in platform/themes/[your-theme]/views/post.blade.php.

```php
    \MetaBox::getMetaData($post, 'test', true);
```
