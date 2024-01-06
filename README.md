# null6126 - A ~~Jekyll Theme~~ Work in Progress

null6126 is a Jekyll theme made to avoid the pitfalls of outdated frameworks or build processes (I am talking to you Tailwind!) commonly found in many themes. Built on a foundation of well-structured SCSS, it offers extendability alongside immediate usability. This theme aims to strike a balance, offering customization options while ensuring a user-friendly out-of-the-box experience.

It is far from perfect or done, but it is a start.

## Features

### Layouts
- **Default, Posts, Pages, Home**: Includes basic layouts catering to various content types. (In-progress)

### Well-Structured Includes
- **Below-Hero, After-Content, Below-Footer**: Offers structured inclusion areas below hero sections or footers, enabling easy integration of additional content or scripts.

### Minimal Plugin Integration for Quality of Life (QoL)
- **jekyll-feed, jekyll-sitemap, jekyll-paginate, jekyll-seo-tag**: Integrated plugins to enhance your site's functionality and search engine visibility without introducing unnecessary dependencies.

### Framework-Free and SCSS-Centric
- **No External Frameworks or JavaScript**: Built solely on SCSS, avoiding external frameworks or JavaScript dependencies, ensuring a lightweight and customizable theme.


Even with its minimalism, null6126 provides a robust and adaptable basic skeleton for easy customization and extension.

## Installation

### Installation via Gemfile

Add this line to your Jekyll site's Gemfile:

```ruby
gem "null6126", git: "https://github.com/philippsiegmund/null6126-jekyll-theme"
```

And add this line to your Jekyll site's _config.yml:
```yaml
theme: null6126
```

Make sure to remove any other old theme references, like to 'minima' e.g.


And then execute:

```bash
$ bundle
```

### Manual Installation

Download or git clone the theme repository:

```bash
$ git clone https://github.com/philippsiegmund/null6126-jekyll-theme.git
$ cd null6126-jekyll-theme
$ bundle
```

Modify your configuration in _config.yml. If your site is in root, ensure the baseurl is set to baseurl: ''. If your site is in a subdirectory, add the subdirectory to the baseurl: '/subdirectory'.

```yaml
# baseurl: '/subdirectory'
baseurl: ''
```

Run Jekyll to serve your site:

```bash
$ jekyll serve --watch
```

For more detailed information on Jekyll themes, refer to the [Jekyll documentation](https://jekyllrb.com/docs/themes/) on themes.

## Usage, Customization, and Configuration

Effortlessly make this theme your own! Documentation is on its way, promising an easy way through customization and configuration options. From layouts to styles, get set to personalize your theme hassle-free! Just takes a little patience.


## Support and Contribution

Your support and contributions are greatly appreciated! Whether it's through bug reports, feature requests, or code contributions, every bit helps in improving this theme. Feel free to raise issues, submit pull requests, or share your ideas. Your input is invaluable to making this theme better for everyone.


## License

This theme is released under the [MIT License](LICENSE) found in the theme's root folder. You're free to use, modify, and distribute this theme according to the terms of the MIT License.
