# Filters

This concept is based on Wordpress hook functions.

## add_filter()

** Reference: https://developer.wordpress.org/reference/functions/add_filter **

Function: Hook a function or method to a specific filter action.

```php
add_filter(string $tag, callable $function_to_add, int $priority = 10, int $accepted_args = 1)
```

### Description

Botble offers filter hooks to allow plugins to modify various types of internal data at runtime.

A plugin can modify data by binding a callback to a filter hook. When the filter is later applied, each bound callback
is run in order of priority, and given the opportunity to modify a value by returning a new value.

The following example shows how a callback function is bound to a filter hook.

Note that `$example` is passed to the callback, (maybe) modified, then returned:

```php
function example_callback( $example ) {
    // Maybe modify $example in some way.
    return $example;
}
add_filter( 'example_filter', 'example_callback' );
```

Bound callbacks can accept from none to the total number of arguments passed as parameters
in the corresponding `apply_filters()` call.

In other words, if an apply_filters() call passes four total arguments, callbacks bound to
it can accept none (the same as 1) of the arguments or up to four. The important part is that
the `$accepted_args` value must reflect the number of arguments the bound callback actually
opted to accept. If no arguments were accepted by the callback that is considered to be the
same as accepting 1 argument. For example:

```php
// Filter call.
$value = apply_filters( 'hook', $value, $arg2, $arg3 );

// Accepting zero/one arguments.
function example_callback() {
    ...
    return 'some value';
}
add_filter( 'hook', 'example_callback' ); // Where $priority is default 10, $accepted_args is default 1.

// Accepting two arguments (three possible).
function example_callback( $value, $arg2 ) {
    ...
    return $maybe_modified_value;
}
add_filter( 'hook', 'example_callback', 10, 2 ); // Where $priority is 10, $accepted_args is 2.
```

::: tip
The function will return true whether or not the callback is valid. It is up to you to take care.
This is done for optimization purposes, so everything is as quick as possible.
:::

### Parameters

**$tag**: (string) (Required) The name of the filter to hook the $function_to_add callback to.

**$function_to_add**: (callable) (Required) The callback to be run when the filter is applied.

**$priority**:

- (int) (Optional) Used to specify the order in which the functions associated with a particular action are executed.
  Lower numbers correspond with earlier execution, and functions with the same priority are executed in the order in
  which they were added to the action.
- Default value: 10

**$accepted_args**:

- (int) (Optional) The number of arguments the function accepts.
- Default value: 1

## apply_filters()

** Reference: https://developer.wordpress.org/reference/functions/apply_filters **

Function: Call the functions added to a filter hook.

```php
apply_filters(string $tag, mixed $value)
```

### Description

The callback functions attached to filter hook $tag are invoked by calling this function. This function can be used to
create a new filter hook by simply calling this function with the name of the new hook specified using the $tag
parameter.

The function allows for additional arguments to be added and passed to hooks.

```php
// Our filter callback function
function example_callback( $string, $arg1, $arg2 ) {
    // (maybe) modify $string
    return $string;
}
add_filter( 'example_filter', 'example_callback', 10, 3 );

/*
 * Apply the filters by calling the 'example_callback' function we
 * "hooked" to 'example_filter' using the add_filter() function above.
 * - 'example_filter' is the filter hook $tag
 * - 'filter me' is the value being filtered
 * - $arg1 and $arg2 are the additional arguments passed to the callback.
$value = apply_filters( 'example_filter', 'filter me', $arg1, $arg2 );
```

### Parameters

**$tag**:

- (string) (Required) The name of the filter hook.

**$value**:

- (mixed) (Required) The value on which the filters hooked to $tag are applied on.

**$var,...**:

- (mixed) (Required) Additional variables passed to the functions hooked to $tag.
