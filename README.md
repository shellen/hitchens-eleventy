# Hitchens for Eleventy

An Eleventy port of the inarguably well-designed [Hitchens Jekyll theme](https://github.com/patdryburgh/hitchens) by [Pat Dryburgh](https://patdryburgh.com).

![Hitchens Preview](https://raw.githubusercontent.com/patdryburgh/hitchens/master/screenshot.png)

Undoubtably one of the great minds of our time, [Christopher Hitchens](https://en.wikipedia.org/wiki/Christopher_Hitchens) challenged his readers to think deeply on topics of politics, religion, war, and science. This theme's design is inspired by the trade paperback version of his book, [Arguably](https://en.wikipedia.org/wiki/Arguably), and is dedicated to his memory.

## About This Port

This is a faithful Eleventy conversion of Pat Dryburgh's Hitchens theme, originally created for Jekyll. The theme maintains visual parity with the original while leveraging modern build tools:

- [Eleventy 3.0](https://www.11ty.dev/) for static site generation
- [Nunjucks](https://mozilla.github.io/nunjucks/) templating
- [Dart Sass](https://sass-lang.com/dart-sass) for CSS preprocessing
- EB Garamond typography
- Minimalist search via DuckDuckGo

## Quick Start

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Visit `http://localhost:8080` in your browser

## Building for Production

```bash
npm run build
```

This will compile your CSS and generate your static site in the `_site` directory.

## Usage

### Site Configuration

Edit `_data/site.json` to configure your site:

```json
{
  "title": "Your Site Title",
  "description": "Your site description",
  "url": "https://yoursite.com",
  "baseurl": ""
}
```

### Navigation

The navigation menu is configured in `_data/menu.json`:

```json
[
  {
    "title": "About",
    "url": "/about.html"
  },
  {
    "title": "Source",
    "url": "https://github.com/yourusername/yourrepo"
  }
]
```

### Writing Posts

Create markdown files in the `_posts` directory with the following front matter:

```markdown
---
layout: post.njk
title: "Your Post Title"
date: 2025-01-01
---

Your content here...
```

Posts are automatically sorted by date in reverse chronological order.

### Pagination

Pagination is configured in `index.html`. By default, it shows 3 posts per page. Adjust the `size` parameter to change this:

```yaml
pagination:
  data: collections.posts
  size: 3
```

### Hiding Elements

You can hide the search form or credits by setting these in `_data/site.json`:

```json
{
  "hide_search": true,
  "hide_credits": true
}
```

### Font

The theme includes [EB Garamond](https://fonts.google.com/specimen/EB+Garamond), designed by Georg Duffner and Octavio Pardo.

A [copy of the license](https://github.com/patdryburgh/hitchens/blob/master/assets/fonts/OFL.txt) is included in the `assets/fonts` folder and must be included with any distributions of this theme that include the EB Garamond font files.

## Credits

**Original Theme**: [Hitchens](https://github.com/patdryburgh/hitchens) by [Pat Dryburgh](https://patdryburgh.com)

**Eleventy Port**: This conversion maintains the visual design and spirit of the original theme while adapting it for the Eleventy static site generator.

## Contributing

Bug reports and pull requests are welcome on GitHub.

## License

The code for this theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT), maintaining the same license as the original theme.

The font, EB Garamond, is Copyright 2017 The EB Garamond Project Authors and licensed under the [SIL Open Font License Version 1.1](https://github.com/patdryburgh/hitchens/blob/master/assets/fonts/OFL.txt).

Graphics are released to the public domain.

## Original License

This is a derivative work of the Hitchens theme:

```
The MIT License (MIT)

Copyright (c) 2018 Pat Dryburgh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
