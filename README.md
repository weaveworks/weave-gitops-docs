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

MKdocs requires Python 3.8.

You will need either Python 3.8 or `pyenv` and its build dependencies locally installed. It is __strongly__ recommended you use [pyenv](https://github.com/pyenv/pyenv) to manage Python versions on your machine.

[pipenv](https://docs.pipenv.org/) is __strongly__ recommended for managing the Python package dependencies. You will need a working local Python installation before you can install `pipenv`. That Python installation can either be your usual system-wide Python (as long as you´re using a reasonably current version), or the version of Python installed by `pyenv`.

An excellent overview of using `pyenv` and `pipenv` together can be found here:
[Python Environment 101](https://towardsdatascience.com/python-environment-101-1d68bda3094d)

### Build environment: tl;dr

- Install and configure `pyenv`
- Install and configure `pipenv`
- Install build dependencies with `pipenv --no-site-packages sync`
- Activate the build virtual environment with `pipenv shell`
- Build and serve locally with `mkdocs serve`

### pipenv

- Linux: Install from your package manager
- Mac OS: Install from MacPorts or HomeBrew
- Any supported OS: You can also install using `pip install --user pipenv` (not recommended!)

### pyenv

#### Installing pyenv

- Linux: Install from your package manager
- Mac OS: Install from HomeBrew (MacPorts doesn't currently have a port)
- Any supported OS: You can also install from source

#### Configuring pyenv

Configure your shell following [#Installation](https://github.com/pyenv/pyenv#installation) instructions.

#### Verify your pyenv configuration

After installing and configuring `pyenv` for your shell, check your system `python` and `pip` versions; they may well be different from those required by this repository:

```shell
➜ python --version
Python 3.9.2
➜ pip --version
pip 20.3.1 from /usr/lib/python3.9/site-packages/pip (python 3.9)
```

### Install dependencies for this repository

#### Install python and dependency PyPi packages

Change into this directory and run `pipenv --no-site-packages sync`, approving the Python installation if required. Depending on your internet connection, this may take several minutes:

```shell
➜ cd weave-gitops-docs
➜ pipenv --no-site-packages sync
Warning: Python 3.8 was not found on your system...
Would you like us to install CPython 3.8.7 with Pyenv? [Y/n]: y
Installing CPython 3.8.7 with /usr/bin/pyenv (this may take a few minutes)...
✔ Success!
Downloading Python-3.8.7.tar.xz...
-> https://www.python.org/ftp/python/3.8.7/Python-3.8.7.tar.xz
Installing Python-3.8.7...
Installed Python-3.8.7 to $HOME/.pyenv/versions/3.8.7


Creating a virtualenv for this project...
Pipfile: $HOME/Git/Weaveworks/weave-gitops-docs-2/Pipfile
Using $HOME/.pyenv/versions/3.8.7/bin/python3.8 (3.8.7) to create virtualenv...
⠴ Creating virtual environment...created virtual environment CPython3.8.7.final.0-64 in 266ms
  creator CPython3Posix(dest=$HOME/.local/share/virtualenvs/weave-gitops-docs-2-f3XTK9Xo, clear=False, no_vcs_ignore=False, global=False)
  seeder FromAppData(download=False, pip=bundle, setuptools=bundle, wheel=bundle, via=copy, app_data_dir=$HOME/.local/share/virtualenv)
    added seed packages: pip==21.0.1, setuptools==53.0.0, wheel==0.36.2
  activators BashActivator,CShellActivator,FishActivator,PowerShellActivator,PythonActivator,XonshActivator

✔ Successfully created virtual environment!
Virtualenv location: $HOME/.local/share/virtualenvs/weave-gitops-docs-2-f3XTK9Xo
Installing dependencies from Pipfile.lock (003b6e)...
  🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 19/19 — 00:00:07
To activate this project's virtualenv, run pipenv shell.
Alternatively, run a command inside the virtualenv with pipenv run.
All dependencies are now up-to-date!

weave-gitops-docs-2 on  pipenv [!] using ☁️ sts via 🐍 3.8.7 took 1m 50s
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

### Check your MKdocs installation

Activate the `pipenv` environment with `pipenv shell`:

```shell
➜ pipenv shell
Launching subshell in virtual environment...
 . $HOME/.local/share/virtualenvs/weave-gitops-docs-2-f3XTK9Xo/bin/activate
```

The path above will probably vary.

Run `mkdocs --version` to check that everything worked okay.

```shell
➜ mkdocs --version
mkdocs, version 1.1.2 from $HOME/.local/share/virtualenvs/weave-gitops-docs-2-f3XTK9Xo/lib/python3.8/site-packages/mkdocs (Python 3.8)
```

For other installation methods, see [MKdocs-Materials installation](https://squidfunk.github.io/mkdocs-material/getting-started/) options. These are unsupported and not recommended, but may be useful in e.g. a container build environment.

### Upgrade Mkdocs-Material Theme

To upgrade the theme with new features run:

`pipenv install mkdocs-material==$NEW_VERSION`

## Building the docs

- Clone this repo into a directory;
- Change directory into it;
- Either use `pipenv shell` or prefix all commands with `pipenv exec`;
- Install the prerequisites as above;
- Build and serve the documents with `mkdocs serve`.

```shell
➜ pipenv shell
Launching subshell in virtual environment...
 . $HOME/.local/share/virtualenvs/weave-gitops-docs-2-f3XTK9Xo/bin/activate
➜ mkdocs serve
INFO    -  Building documentation...
INFO    -  Cleaning site directory
INFO    -  The following pages exist in the docs directory, but are not included in the "nav" configuration:
  - formats.md
  - About/editions.md
INFO    -  Documentation built in 0.64 seconds
[I 210309 16:13:46 server:335] Serving on http://127.0.0.1:8000
INFO    -  Serving on http://127.0.0.1:8000
[I 210309 16:13:46 handlers:62] Start watching changes
INFO    -  Start watching changes
[I 210309 16:13:46 handlers:64] Start detecting changes
INFO    -  Start detecting changes
``

Browse to: <http://127.0.0.1:8000>

When you are finished, you can stop the server with `Ctrl-C`.

If you used `pipenv shell`, you can leave the virtual environment with `Ctrl+D`.

For more options and commands see the [MKdocs](https://www.mkdocs.org/).

## Versioning the docs

TBD
