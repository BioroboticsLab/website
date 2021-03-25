
# Landgraf Lab website

The website of the Landgraf Lab. Any commit to `master` is published immediately.
If you make changes, please create a [pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Add a new person

**Add description:**
See [`./_people/000_tim_landgraf.html`](/_people/000_tim_landgraf.html) as an
template for a new person. Each file in `./_people` a number prefix to controll
the order in which they are displayed. Lower numbers are on the top (000).
Let's use the following enumeration scheme: (000: Tim, 010: PhD Students, 100: MA/BA Students).

The following fields exists:

- `image`: the name of your image. Must be in `./assets/images/`.
- `name`: Your full name
- `position`: Your position, e.g. `PhD Student`
- `email`: Your email
- `twitter` (optional): your twitter handle (e.g `tlandgraf`)
- `github` (optional): your github usename (e.g `berleon`)
- `website` (optional): link to your website


**Add image:** Add your image under `./assets/images`


**Personal Website (Optional):** If you want to share a bit more information, you can create your own personal website under `personal_sites/` and link to them using the `website` key.

## Add a new publication

Add a bibtex entry to
[`./_bibliography/lab_publications.bib`](./_bibliography/lab_publications.bib).
If this is the first publication in this year, you might have to add a year
entry to [`./publications.md`](./publications.md).


## Setup Development

You can use Gitub's editor for most changes, but for larger changes you might want to build
the website locally. Here is what you have to do. You need to have [ruby 2.7](https://www.ruby-lang.org/) and a C compiler (e.g. gcc) and then run:

```bash
$ git clone git@github.com:BioroboticsLab/website.git
$ cd website
$ bundle install --path vendor/bundle
$ bundle exec jekyll serve
```

Alternatively, use docker:

```bash
$ docker run --rm --volume="$PWD:/srv/jekyll" -p4000:4000 -it jekyll/jekyll:3.8 jekyll serve
```

# Template

We use the [this template](https://nicolas-van.github.io/bootstrap-4-github-pages/).
A [Bootstrap 4](https://getbootstrap.com/) project for [Github Pages](https://pages.github.com/) and [Jekyll](https://jekyllrb.com/).

* A full Bootstrap 4 theme usable both on Github Pages and with a standalone Jekyll.
* Recompiles Bootstrap from SCSS files, which allows to customize Bootstrap's variables and use Bootstrap themes.
* Full support of Bootstrap's JavaScript plugins.
* Supports all features of Github Pages and Jekyll.
