# Fresh project

## Usage

Start the project:

```shell
deno task start
```

This will watch the project directory and restart as necessary.

## Deploy

### Deno Deploy

Select `main.ts` as the entry file from the repository in deno

### Docker

build

```shell
docker build --build-arg GIT_REVISION=$(git rev-parse HEAD) -t fresh .
```

run

```shell
docker run -t -i -p 80:8000 fresh
```
