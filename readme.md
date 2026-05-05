## Para generar multiples instalable debemos usar github actions:

1 - En la raiz del proyecto tiramos:

mkdir -p .github/workflowsç

2 - dentro de la carpeta workfows creamos archivo:

  build.yml

3 - dentro de ese archivo ponemos este contenido:

```
name: Build Electron App

on:
  push:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ${{ matrix.os }}

    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]

    steps:
      - name: Checkout repo
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Build React
        run: npm run build

      - name: Build Electron app
        run: npx electron-builder
```

4 - Paso los cambios siempre a git

## Para ir viendo los cambios realizados en web tiramos en consola:

`npm run start`

## Para actualizar proyecto electron con los cambios web tiramos en consola:

1. `npm run build`

2. `npm run electron`
