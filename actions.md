# Actions

This concept is based on Wordpress hook functions.

## add_action()

** Reference: https://developer.wordpress.org/reference/functions/add_action **

Function: Hooks a function on to a specific action.

```php
add_action(string $tag, callable $function_to_add, int $priority = 10, int $accepted_args = 1)
```
    
### Description

Actions are the hooks that the core launches at specific points during execution, or when specific events occur. 

Plugins can specify that one or more of its PHP functions are executed at these points, using the Action API.

### Parameters

**$tag**: (string) (Required) The name of the action to which the $function_to_add is hooked.

**$function_to_add**: (callable) (Required) The name of the function you wish to be called.

**$priority**: 
- (int) (Optional) Used to specify the order in which the functions associated with a particular action are executed. 
Lower numbers correspond with earlier execution, and functions with the same priority are executed in the order in which they were added to the action.
- Default value: 10

**$accepted_args**: 
- (int) (Optional) The number of arguments the function accepts.
- Default value: 1

## do_action()

** Reference: https://developer.wordpress.org/reference/functions/do_action **

Function: Execute functions hooked on a specific action hook.

```php
do_action(string $tag,  $arg = '')
```

### Description

This function invokes all functions attached to action hook `$tag`. 
It is possible to create new action hooks by simply calling this function, specifying the name of the new hook using the `$tag` parameter.

You can pass extra arguments to the hooks, much like you can with `apply_filters()`.

### Parameters

**$tag**:
- (string) (Required) The name of the action to be executed.

**$arg,...**:
- (mixed) (Optional) Additional arguments which are passed on to the functions hooked to the action. 
- Default empty.
