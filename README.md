# Termina Plex

Termina Plex is a [Jekyll](https://jekyllrb.com) theme that is a port of the [Nightfall](https://github.com/LordMathis/hugo-theme-nightfall) theme for [Hugo](https://gohugo.io), developed by [Matúš Námešný](https://namesny.com). This theme uses some of the foundational code provided by the [Minima](https://jekyll.github.io/minima/) theme for Jekyll.

The theme is designed with a minimal default landing page and a separate page for listing available blog posts. It also features the [IBM Plex](https://ibm.com/plex) Sans and IBM Plex Mono typefaces throughout the design and includes the necessary web font files in the theme bundle.

By the default, the theme respects the `prefers-color-scheme` value provided by the browser. A color scheme toggle is included in the header that allows the viewer to switch between light and dark mode. Once toggled, the value is stored in the local storage using [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API).

## Installation

Add this line to your Jekyll site's Gemfile to install:

```ruby
gem "termina-plex"
```

To install the theme from GitHub, add this line to your Jekyll site's Gemfile:

```ruby
gem "termina-plex", git: "https://github.com/questionlp/termina-plex.git"
```

And then execute:

```bash
bundle
```

## Site Structure

The main index page, `index.html` is designed to be a simple landing page with the name of the site author and a list of social links. The file uses the `index` layout.

The more traditional blog post listing page is designed to be hosted under `/blog` with the `blog/index.html` using the more traditional `home` layout. The layout supports pagination, by way of the jekyll-paginate plugin, and can be configured with the `paginate` and `paginate_path` settings in `_config.yml`.

For pagination to work with the post listing page hosted under `/blog`, the `paginate_path` setting should start with `/blog/`.

If you want to change the path for the post listing page, the `blog_path` setting can be set to the preferred path. The `paginate_path` setting should also be updated to reflect the correct path.

## Theme Configuration

Theme specific configuration is done within the `termina-plex` section of the `_config.yaml` file.

The date format used by the theme is defined by the `termina-plex.date_format` setting. The value needs to be in [valid `strftime` format](https://docs.ruby-lang.org/en/master/strftime_formatting_rdoc.html). The theme defaults to `%d %b %Y`.

The title displayed in the header of the page with display the site title, defined by the `site.title` configuration value, if neither the `termina-plex.username` or the `termina-plex.hostname` settings are configured. When either of the settings are configured, a Bash-like prompt is built using the configured values.

The links displayed in the header of the page are defined in the `termina-plex.header_links` setting. Each link is defined as an object with a `name` and a `url` key. The value of the `name` key will be transformed to lowercase via CSS.

The social links displayed under the site title in the main section of the landing page are defined by the `termina-plex.social_links` setting. Each link is defined as an object with a `name` and `url` key. An optional `rel` key is available if link-based validation is required by applications like Mastodon. As with the header link names, the link names will also be transformed to lowercase via CSS.

If centered tables are preferred, the `termina-plex.centered_tables` setting can be set to `true`. By default, it uses the user agent's default alignment.

By default, the theme will transform post titles to be capitalized on pages that use the `home` layout. If you prefer to have post titles not be transformed, you can set `termina-plex.standard_titles` to `true`.

## Screenshots

![Screenshot of the Termina Plex theme for Jekyll showing the landing page in dark mode](/screenshots/termina-plex-01-landing-page-dark.png)

![Screenshot of the Termina Plex theme for Jekyll showing the landing page in light mode](/screenshots/termina-plex-02-landing-page-light.png)

![Screenshot of the Termina Plex theme for Jekyll showing a listing blog posts in dark mode](/screenshots/termina-plex-03-blog-post-listing-dark.png)

![Screenshot of the Termina Plex theme for Jekyll showing a listing blog posts in light mode](/screenshots/termina-plex-04-blog-post-listing-light.png)

![Screenshot of the Termina Plex theme for Jekyll showing a blog post in dark mode](/screenshots/termina-plex-05-blog-post-dark.png)

![Screenshot of the Termina Plex theme for Jekyll showing a blog post in light mode](/screenshots/termina-plex-06-blog-post-light.png)

## License

The theme is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

Both the original Nightfall and the Minina themes are licensed under the terms of the MIT License.

The included IBM Plex font files are licensed under the terms of the [SIL Open Font License, Version 1.1](https://github.com/IBM/plex/blob/master/LICENSE.txt).
