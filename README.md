# Building the Weave GitOps Docs

This repo contains the documentation for Weave GitOps.  The docs uses the MKdocs framework with the MKmaterial theme. Any changes pushed to the main branch in the repo are automatically built to a [GitHub Pages website](https://weaveworks.github.io/weave-gitops-docs/).

Workflow for creating docs:

1. Write the docs in markdown
2. Build site and verify changes
3. Push changes to branch and create a PR
4. Verify changes and merge branch
5. GitHub Actions builds and deploys site

See [Mkdocs-Material theme documentation](https://squidfunk.github.io/mkdocs-material/reference/abbreviations/) for information on markdown formats and other supported styles.

## Build environment

### pyenv

You may already have a local Python installation. MKdocs requires Python 3.8.

It's recommended that you use [pyenv](https://github.com/pyenv/pyenv) to manage Python versions on your machine.

#### Installing pyenv

- Linux: Install from your package manager or source
- Mac OS: Install from HomeBrew or source (MacPorts doesn't currently have a port)

#### Configuring pyenv

Configure your shell following [#Installation](https://github.com/pyenv/pyenv#installation) instructions.

#### Verify your pyenv configuration

After installing and configuring `pyenv` for your shell, check your system `python`, `pip`, and `pipenv` versions; they may well be different from those required by this repository:

```shell
➜ python --version
Python 3.9.2
➜ pip --version
pip 20.3.1 from /usr/lib/python3.9/site-packages/pip (python 3.9)
➜ pipenv --version
pipenv, version 2020.11.15
```

### Install python and pip versions for this repository

Change into this directory and run `pyenv install`. Depending on your internet connection, this may take several minutes:

```shell
➜ cd weave-gitops-docs
➜ pyenv install
Downloading Python-3.8.7.tar.xz...
-> https://www.python.org/ftp/python/3.8.7/Python-3.8.7.tar.xz
Installing Python-3.8.7...
Installed Python-3.8.7 to /home/ciaran/.pyenv/versions/3.8.7

➜
```

Check you are running the correct versions:

```shell
➜ which python
$HOME/.pyenv/shims/python
➜ which pip
$HOME/.pyenv/shims/pip
➜ python --version
Python 3.8.7
➜ pip --version
pip 20.2.3 from $HOME/.pyenv/versions/3.8.7/lib/python3.8/site-packages/pip (python 3.8)
```

`$HOME` should be your home directory.

### Install pipenv for your pyenv environment

```shell
➜ pip install pipenv
Collecting pipenv
  Using cached pipenv-2020.11.15-py2.py3-none-any.whl (3.9 MB)
```

If a newer release of `pip` is available, you may get a warning:

```text
WARNING: You are using pip version 20.2.3; however, version 21.0.1 is available.
```

Ensure you are using the `pyenv`s version of `pipenv`:

```shell
➜ pyenv init
# Load pyenv automatically by appending
# the following to ~/.zshrc:

eval "$(pyenv init -)"
➜ which pipenv
$HOME/.pyenv/shims/pipenv

➜ pipenv --version
pipenv, version 2020.11.15
```

### Install MkDocs and Mkdocs-Material Theme

Install the mkdocs package using pipenv install:

`pipenv install`

You should now have the mkdocs command installed on your system. Run `mkdocs
--version` to check that everything worked okay.

```shell
$ mkdocs --version
mkdocs, version 0.15.3
```

For other installation methods, see [MKdocs-Materials installation](https://squidfunk.github.io/mkdocs-material/getting-started/) options.

### Upgrade Mkdocs-Material Theme

To upgrade the theme with new features run:

`pipenv install mkdocs-material==$NEW_VERSION`

## Building the docs

Clone this repo into a directory, cd into it and run:

`$ mkdocs serve`

Open your browser to: <http://127.0.0.1:8000>

For more options and commands see the [MKdocs](https://www.mkdocs.org/).

## Versioning the docs

TBD
