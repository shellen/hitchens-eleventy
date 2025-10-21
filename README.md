# Hitchens for Eleventy

An Eleventy port of [Pat Dryburgh](https://patdryburgh.com)'s beautifully crafted [Hitchens theme](https://github.com/patdryburgh/hitchens).

![Hitchens Preview](https://raw.githubusercontent.com/patdryburgh/hitchens/master/screenshot.png)

## About This Port

I've long admired Pat Dryburgh's work as a designer, and his Hitchens theme is a perfect example of why. It's a masterclass in restraint—elegant typography, thoughtful spacing, and a design that gets out of the way of the writing. When Pat created this theme for Jekyll in honor of Christopher Hitchens, he nailed the feeling of opening a well-designed book.

I wanted to use Hitchens for my own projects, but I work primarily with [Eleventy](https://www.11ty.dev/) these days. So I ported Pat's theme, taking care to maintain visual parity with his original design while adapting it to work with Eleventy 3.0's modern tooling.

This port includes:
- [Eleventy 3.0](https://www.11ty.dev/) for static site generation
- [Nunjucks](https://mozilla.github.io/nunjucks/) templating
- [Dart Sass](https://sass-lang.com/dart-sass) for CSS preprocessing
- Pat's original EB Garamond typography choices
- The same minimalist DuckDuckGo search integration

All credit for the design goes to Pat. Any bugs in the port are mine.

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
    "url": "/about/"
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

The theme includes [EB Garamond](https://fonts.google.com/specimen/EB+Garamond), designed by Georg Duffner and Octavio Pardo. Pat chose this typeface carefully—it's the closest open-source alternative to the font used on the cover of Hitchens' book *Arguably*.

A [copy of the font license](https://github.com/patdryburgh/hitchens/blob/master/assets/fonts/OFL.txt) is included in the `assets/fonts` folder and must be included with any distributions of this theme.

## About Christopher Hitchens

Undoubtably one of the great minds of our time, [Christopher Hitchens](https://en.wikipedia.org/wiki/Christopher_Hitchens) challenged his readers to think deeply on topics of politics, religion, war, and science. This theme's design is inspired by the trade paperback version of his book [Arguably](https://en.wikipedia.org/wiki/Arguably), and is dedicated to his memory.

## Credits

**Original Design & Theme**: [Pat Dryburgh](https://patdryburgh.com) created the [Hitchens Jekyll theme](https://github.com/patdryburgh/hitchens). This is his design, his vision, and his impeccable taste in typography.

**Eleventy Port**: [Jason Shellen](https://github.com/shellen) ported the theme to Eleventy 3.0, attempting to preserve everything that makes the original special.

## Contributing

Bug reports and pull requests are welcome. If you're reporting a design issue, please check whether it exists in [Pat's original theme](https://github.com/patdryburgh/hitchens) first—the goal of this port is to match his design exactly.

## License

This project maintains the same [MIT License](https://opensource.org/licenses/MIT) as Pat's original theme.

### MIT License

Copyright (c) 2018 Pat Dryburgh (original Hitchens theme)
Copyright (c) 2025 Jason Shellen (Eleventy port)

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

### Additional Licenses

**EB Garamond Font**: Copyright 2017 The EB Garamond Project Authors. Licensed under the [SIL Open Font License Version 1.1](https://github.com/patdryburgh/hitchens/blob/master/assets/fonts/OFL.txt).

**Graphics**: Released to the public domain.
