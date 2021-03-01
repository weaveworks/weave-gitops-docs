# Building the Weave GitOps Docs
This repo contains the documentation for Weave GitOps.  The docs uses the MKdocs framework with the MKmaterial theme. Any changes pushed to the main branch in the repo are automatically built to a [GitHub Pages website](https://weaveworks.github.io/weave-gitops-docs/). 

Workflow for creating docs: 

1. Write the docs in markdown
2. Build site and verify changes
3. Push changes to branch and create a PR
4. Verify changes and merge branch
5. GitHub Actions builds and deploys site

See [Mkdocs-Material theme documentation](https://squidfunk.github.io/mkdocs-material/reference/abbreviations/) for information on markdown formats and other supported styles. 

## Install Python, MKdocs and MKdocs-Material Theme
You'll need Python 3.8 installed for MKdocs. Check if you already have python and a package manger with:

```
$ python --version
Python 3.8.2
$ pip --version
pip 20.0.2 from /usr/local/lib/python3.8/site-packages/pip (python 3.8)
```
If you already have Python installed, it's recommended that you use [Pyenv](https://github.com/pyenv/pyenv-installer) to manage Python versions on your machine.

MkDocs supports Python versions 3.5, 3.6, 3.7, 3.8, and pypy3.

## Install Pip
If already installed, upgrade with: 

`pip install --upgrade pip`

If you need to install pip for the first time, download [get-pip.py](https://bootstrap.pypa.io/get-pip.py). Then run the following command to install it:

`python get-pip.py`

## Install Python
Install Python by downloading an installer appropriate for your system from [python.org](https://www.python.org) and running it.

## Install MkDocs
Install the mkdocs package using pip:

`pip install mkdocs`

You should now have the mkdocs command installed on your system. Run `mkdocs
--version` to check that everything worked okay.

```
$ mkdocs --version
mkdocs, version 0.15.3
```

## Install the Mkdocs-Material Theme
The theme assumes that you have a mkdocs already installed. Run the following: 

`pip install mkdocs-material`

For other installation methods, see [MKdocs-Materials installation](https://squidfunk.github.io/mkdocs-material/getting-started/) options. 

**Note:** Weaveworks is a sponsor of the insider's version of the theme. To use that, you'll need the GH_TOKEN kept in 1Password in the secure notes section. 

## Building the docs
Clone this repo into a directory, cd into it and run: 

`$ mkdocs serve`

Open your browser to: http://127.0.0.1:8000

For more options and commands see the [MKdocs](https://www.mkdocs.org/).

## Versioning the docs

**Coming Soon**






