import { DefaultTheme } from 'vitepress'

export default [
  { text: 'Introduction', link: '/cms/' },
  { text: 'Screenshots', link: '/cms/screenshots' },
  {
    text: 'Prologue',
    items: [
      { text: 'Release Notes', link: '/cms/releases' },
      { text: 'Upgrade Guide', link: '/cms/upgrade' },
    ],
  },
  {
    text: 'Getting Started',
    items: [
      { text: 'Installation', link: '/cms/installation' },
      { text: 'Installation using command line', link: '/cms/installation-command-line' },
      { text: 'Installation using Docker', link: '/cms/installation-using-docker' },
      { text: 'SSL', link: '/cms/ssl' },
      { text: 'License', link: '/cms/license' },
    ],
  },
  {
    text: 'Plugin development',
    items: [
      { text: 'Getting started', link: '/cms/plugin' },
      { text: 'Plugin structure', link: '/cms/plugin-structure' },
    ],
  },
  {
    text: 'Theme development',
    items: [
      { text: 'Overview', link: '/cms/theme' },
      { text: 'Routes', link: '/cms/theme-routes' },
      { text: 'Assets', link: '/cms/theme-assets' },
      { text: 'Menu', link: '/cms/menu' },
      { text: 'Breadcrumb', link: '/cms/theme-breadcrumb' },
      { text: 'Widget', link: '/cms/theme-widget' },
      { text: 'MVC Pattern', link: '/cms/theme-mvc-pattern' },
      { text: 'Theme options', link: '/cms/theme-options' },
      { text: 'Layouts', link: '/cms/theme-layout' },
      { text: 'Error pages', link: '/cms/theme-error-pages' },
      { text: 'Theme localization', link: '/cms/theme-localization' },
      { text: 'Rename theme', link: '/cms/theme-rename' },
    ],
  },
  {
    text: 'Core',
    items: [
      { text: 'API', link: '/cms/api' },
      { text: 'Commands', link: '/cms/commands' },
      { text: 'Roles & permissions', link: '/cms/role-permission' },
      { text: 'Media', link: '/cms/media' },
      { text: 'Filters', link: '/cms/filters' },
      { text: 'Actions', link: '/cms/actions' },
      { text: 'Shortcode', link: '/cms/shortcode' },
      { text: 'Meta box', link: '/cms/meta-box' },
      { text: 'Dashboard Widgets', link: '/cms/dashboard-widgets' },
      { text: 'Dashboard Menu', link: '/cms/dashboard-menu' },
      { text: 'Form builder', link: '/cms/form-builder' },
      { text: 'SEO helper', link: '/cms/seo-helper' },
      { text: 'Enum', link: '/cms/enum' },
      { text: 'Slug field', link: '/cms/slug-field' },
      { text: 'Localization', link: '/cms/localization' },
      { text: 'Sitemap', link: '/cms/sitemap' },
      { text: 'FAQ', link: '/cms/faq' },
    ],
  },
  {
    text: 'Plugins',
    items: [
      { text: 'Custom fields', link: '/cms/plugin-custom-field' },
      { text: 'Contact form', link: '/cms/plugin-contact-form' },
      { text: 'Gallery', link: '/cms/plugin-gallery' },
      { text: 'Backup', link: '/cms/plugin-backup' },
    ],
  },
  {
    text: 'Usage',
    items: [
      { text: 'Custom CSS/JS', link: '/cms/usage-custom-css-js' },
      { text: 'Setup email', link: '/cms/usage-email' },
      { text: 'Media - Setup Amazon S3', link: '/cms/usage-media-s3' },
      { text: 'Media - Setup Wasabi', link: '/cms/usage-media-wasabi' },
      { text: 'Media - Setup BunnyCDN', link: '/cms/usage-media-bunnycdn' },
      { text: 'Google Analytics', link: '/cms/usage-analytics' },
      { text: 'Multi-language', link: '/cms/usage-multi-language' },
      { text: 'Setup social login', link: '/cms/usage-social-login' },
      { text: 'Reset admin password', link: '/cms/usage-reset-admin-password' },
      { text: 'Setup cronjob', link: '/cms/cronjob' },
      { text: 'Setup CDN', link: '/cms/usage-setup-cdn' },
    ],
  }
] satisfies DefaultTheme.SidebarItem[];
