# Upgrade Guide

- Option 1 (Auto update): Go to Admin -> System Administration -> System Updater and click "Download & install update".

- Option 2 (Manual update):
  - Override folder `app`, `database`, `config`, `platform`, `public/themes`, `public/vendor`, `bootstrap`, `vendor`, `composer.json`, `composer.lock` and `public/index.php` from the latest version.
  - Go to Admin -> Platform Administration -> Cache management then clear all caches.
  - Go to Admin -> Plugins: deactivate all plugins then activate them again.
  - Go to Admin -> Translations -> Other translations then click on `Import group` to update translations.
