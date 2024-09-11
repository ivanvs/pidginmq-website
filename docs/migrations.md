---
sidebar_position: 4
---

# Migrations

PidginMQ needs the database schema to be set up appropriately. It provides a command-line tool that can help users manage the database schema for PostgreSQL.

When you install the library, the CLI tool is installed automatically.

CLI tool contains 3 commands:

    * `up` - running next migration.
    * `down` - will undo last migration.
    * `current` - return current migration version

For all 3 commands we need to supply [database connection URI](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING-URIS).

CLI tool is using [knex.js library](https://knexjs.org/guide/migrations.html) for working with database migrations.

## Apply Next Migration

```sh
pidginmq up postgres://user:password@host:port/dbname
```

CLI tool will apply next migration on database schema. If all migrations are already applied, no actions will be taken.

## Undo Last Migration

```sh
pidginmq down postgres://user:password@host:port/dbname
```

CLI tool will undo last migration on database schema. If there is no migrations applied, no actions will be taken.

## Current Migration

```sh
pidginmq current postgres://user:password@host:port/dbname
```

CLI tool will return last migration that has been applied.
