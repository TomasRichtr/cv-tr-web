# README: TR CV APP

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## development server

### node
specified in package.json

### npm
specified in package.json

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

* for testing of email sending with message creation is needed to run npm run dev with env variable `EMAIL_LOGIN` 
and `EMAIL_PASSWORD`
---
