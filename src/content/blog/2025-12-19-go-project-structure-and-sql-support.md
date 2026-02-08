---
uid: cZYdGYMuFaoZZsHdtQni
title: Go Project Structure and SQL Support
slug: go-project-structure-and-sql-support
alias: 
pubDate: 2025-12-19T02:36:00+00:00
all tags: devlog, waygates
make discoverable: True
is page: False
canonical url: 
meta image: 
lang: 
class name: 
first published at: 2025-12-19T02:36:00+00:00
---

> Here is the first devlog for the `waygates` project!  With this first post I cover the initial file structure and database setup. As always, [here](https://github.com/Jaidenmagnan/waygates) is a link to the project on Github.

I typically struggle with file structure when learning a new language. It's better to do these types of things right the first time to avoid refactoring later. 

I want to use the repository pattern, where we can think of the flow of our code like this:
```
[ ENDPOINT ] -> [ CONTROLLER ] -> [ SERVICE ] 
-> [ REPOSITORY ] -> [ DB ACCESS ]
```

When I was a lowly PHP intern I thought that this structure overcomplicated things and was unnecessarily verbose.  However, pairing this structure with Dependency Injection really cleans up the project and makes it very easy to read. In case you are not familiar with DI, it is a way to pass our dependencies via the constructor instead of instantiating them in each class.

Here is the directory structure I am starting with:
```
components/
db/
handlers/
middleware/
migrations/
models/
repositories/
services/
main.go
```

The next part was setting up the database. I wanted to do this “the Go way” so I decided not to use an ORM. Instead, I will use Go's `sql` library for queries.

One thing in particular I had an issue with was making migrations and initializing the table. I am using `sqlite` because I don’t think this table will get that big all it will hold is the users, and the waygates. 

For migrations I went with `goose` because it has support for `sql` migrations.

Here is the initial users table migration:
```sql
-- +goose Up
CREATE TABLE users (
    id INTEGER PRIMARY KEY UNIQUE,
    email VARCHAR(100) UNIQUE NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- +goose StatementBegin
SELECT 'up SQL query';
-- +goose StatementEnd
```

Overall, solid first step for the waygates project. I am really liking Go as a language because its unique error checking makes it a lot easier to debug. I also noticed that each library I install is relatively lightweight, and I don't feel overwhelmed like I would in a language like TypeScript.

Next will be some updates on user authentication  and htmx.