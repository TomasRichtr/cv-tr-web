# README: TR CV APP

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## development server

### node
specified in package.json / nvm use

### npm
specified in package.json / nvm use

### run development server

```bash
# npm
npm install
```
installs dependencies

---
```bash
# npm
npm postbuild
```
creates admin user and initializes a database

* see knex.config.ts which env variables for a database are required

* for admin creation is required to run command with env variable: `ADMIN_NAME` and `ADMIN_PASSWORD`

---
```bash
# npm
npm run dev
```
runs development server
---
