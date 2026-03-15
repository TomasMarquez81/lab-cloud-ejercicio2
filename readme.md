## Despliegue automático en GitHub Pages ejercicio 2

### 1. Creo el repositorio en github

Genero el repositorio en github y subo el código a la rama `main`:

```bash
// Para subir el proyecto a github hacemos lo siguiente:
// 1. git init
// 2. git add .
// 3. git commit -m "first commit"
// 4. git branch -M main
// 5. git remote add origin https://github.com/TomasMarquez81/lab-cloud-ejercicio2.git
// 6. git push -u origin main
```

Ahora vamos a instalar la libreria de gh-pages, no es una libreria oficial de github, pero nos facilita el trabajo:

```bash
npm install gh-pages --save-dev
```

Ahora meto en el `package.json` el script para que se pueda ejecutar el despliegue:

```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

Ahora creo el workflow en GitHub Actions para que se pueda ejecutar el despliegue automáticamente. Para hacer el Workflow necesitamos crear una clave SSH, para ello ejecutamos el siguiente comando en la terminal:

```bash
ssh-keygen -t ed25519 -C "cd-user@my-app.com"
```

Nos crea dos archivos, uno privado y otro público. El privado lo guardamos en la carpeta `.ssh` y el público lo subimos a GitHub en **Settings → Security → Deploy Keys**, donde le damos a *New deploy key* y pegamos el contenido del archivo público.

Ahora metemos la parte privada de la clave SSH en los secrets. De manera similar, vamos a **Settings → Security → Secrets and variables → Actions → Repository secrets**, le damos a *New repository secret* y agregamos la clave privada.

A continuación creamos el archivo del workflow en `.github/workflows/`:

```yaml
name: CD Workflow

on:
  push:
    branches:
      - main

jobs:
  cd:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "22.x"

      - name: Use SSH key
        run: |
          mkdir -p ~/.ssh
          echo "${{ secrets.SSH_PRIVATE_KEY }}" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa

      - name: Git config
        run: |
          git config --global user.email "cd-user@my-app.com"
          git config --global user.name "cd-user"

      - name: Install
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        run: npm run deploy
```

Finalmente, hacemos un commit y un push para que se ejecute el workflow:

```bash
git add .
git commit -m "upload dist files"
git push
```

Con esto se ejecuta el workflow y se despliega el proyecto en GitHub Pages:

🔗 https://tomasmarquez81.github.io/lab-cloud-ejercicio2/
