# canonical.design

This is the codebase for the canonical.design static website

## Architecture overview

This website is served as static html from an nginx host.

## Development

The simplest way to run the site is with [docker](https://docs.docker.com/engine/install/ubuntu/):

```bash
docker build --tag canonical.design .
docker run -p 8044:80 canonical.design
```

Afterwards the website will be available at <http://localhost:8044>.
