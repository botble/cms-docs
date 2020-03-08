# Contact form

## Usage

### Using shortcode

Add to page's content in Admin -> Pages:

```
[contact-form][/contact-form]
```

Or add in any view in platform/themes/your-theme/views

```
{!! do_shortcode('[contact-form][/contact-form]) !!}
```

### Customize form

You can custom your contact form by passing `view` parameter in shortcode

```
[contact-form view="path-to-view"][/contact-form]
```

If you put the view file in /platform/themes/your-theme/partials/contact-form.blade.php, you can use:

```
[contact-form view="theme.your-theme::partials.contact-form"][/contact-form]
```

Not: `your-theme` is your theme's name, if you're using theme `ripple` then it's `theme.ripple::partials.contact-form`

Then copy base form content in platform/plugins/contact/resources/views/forms/contact.blade.php to your custom view and change it if you need.

```php
@if ($header)
    <h2 class="group-title text-uppercase">{{ $header }}</h2>
@endif
{!! Form::open(['route' => 'public.send.contact', 'method' => 'POST']) !!}
@if(session()->has('success_msg') || session()->has('error_msg') || isset($errors))
    @if (session()->has('success_msg'))
        <div class="alert alert-success">
            <p>{{ session('success_msg') }}</p>
        </div>
    @endif
    @if (session()->has('error_msg'))
        <div class="alert alert-danger">
            <p>{{ session('error_msg') }}</p>
        </div>
    @endif
    @if (isset($errors) && count($errors))
        <div class="alert alert-danger">
            @foreach ($errors->all() as $error)
                <span>{{ $error }}</span> <br>
            @endforeach
        </div>
    @endif
@endif

<div class="row">
    <div class="col-md-6">
        <div class="form-group">
            <label for="contact_name" class="control-label required">{{ trans('plugins/contact::contact.form_name') }}</label>
            <input type="text" class="form-control" name="name" value="{{ old('name') }}" id="contact_name"
                   placeholder="{{ trans('plugins/contact::contact.form_name') }}">
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group">
            <label for="contact_email" class="control-label required">{{ trans('plugins/contact::contact.form_email') }}</label>
            <input type="email" class="form-control" name="email" value="{{ old('email') }}" id="contact_email"
                   placeholder="{{ trans('plugins/contact::contact.form_email') }}">
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group">
            <label for="contact_address" class="control-label">{{ trans('plugins/contact::contact.form_address') }}</label>
            <input type="text" class="form-control" name="address" value="{{ old('address') }}" id="contact_address"
                   placeholder="{{ trans('plugins/contact::contact.form_address') }}">
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group">
            <label for="contact_phone" class="control-label">{{ trans('plugins/contact::contact.form_phone') }}</label>
            <input type="text" class="form-control" name="phone" value="{{ old('phone') }}" id="contact_phone"
                   placeholder="{{ trans('plugins/contact::contact.form_phone') }}">
        </div>
    </div>
    <div class="col-md-12">
        <div class="form-group">
            <label for="contact_subject" class="control-label">{{ trans('plugins/contact::contact.form_subject') }}</label>
            <input type="text" class="form-control" name="subject" value="{{ old('subject') }}" id="contact_subject"
                   placeholder="{{ trans('plugins/contact::contact.form_subject') }}">
        </div>
    </div>
    <div class="col-md-12">
        <div class="form-group">
            <label for="contact_content" class="control-label required">{{ trans('plugins/contact::contact.form_message') }}</label>
            <textarea name="content" id="contact_content" class="form-control" rows="5" placeholder="{{ trans('plugins/contact::contact.form_message') }}">{{ old('content') }}</textarea>
        </div>
    </div>
    @if (setting('enable_captcha') && is_plugin_active('captcha'))
        <div class="col-md-12">
            <div class="form-group">
                <label for="contact_robot" class="control-label required">{{ trans('plugins/contact::contact.confirm_not_robot') }}</label>
                {!! Captcha::display('captcha') !!}
                {!! Captcha::script() !!}
            </div>
        </div>
    @endif
</div>

<div class="form-group"><p>{!! trans('plugins/contact::contact.required_field') !!}</p></div>
<div class="form-group">
    <button type="submit" class="btn btn-primary cyan text">{{ trans('plugins/contact::contact.send_btn') }}</button>
</div>

{!! Form::close() !!}
```