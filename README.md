# README: TR CV APP

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Environment Variables

The application uses the following environment variables:

| Variable | Description | Default Value |
|----------|-------------|---------------|
| DATABASE_HOST | Database server hostname | localhost |
| DATABASE_USER | Database username | root |
| DATABASE_PASSWORD | Database password | password |
| DATABASE | Database name | tr_cv_app |
| DATABASE_PORT | Database server port | 3306 |
| ADMIN_NAME | Admin user name | admin |
| ADMIN_PASSWORD | Admin user password | password |
| EMAIL_LOGIN | Gmail login for sending emails | none |
| EMAIL_PASSWORD | Gmail password for sending emails | none |

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
npm run postbuild
```
creates admin user and initializes a database

* see knex.config.ts which env variables for a database are required

---
```bash
# npm
npm run dev
```
runs development server

---
