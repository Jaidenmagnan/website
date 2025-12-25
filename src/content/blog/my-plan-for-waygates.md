---
title: "My Plan for Waygates: A Simple Webring Manager"
link: my-plan-for-waygates-a-simple-webring-manager
pubDate: 2025-12-17 16:00
tags: [devlog, waygates]
---

Some friends and I want to create a webring between our blogs, so I wanted to make a simple tool for people to set up webrings. An admin can go in and add the websites, order them, and send out an embed via email. Since I love Wheel of Time, I'm calling this project "waygates". A waygate will be a webring between websites.

I'm using Go for this project because I want to learn Go. I know, isn't that quite riveting?

I want to keep things simple with a minimal frontend. I'm using Templ with HTML templates. I'm familiar with Blade and Twig files in PHP, so I figured this was a good choice. I'm really pushing the "learning Go" angle for this project. I want to do things that are familiar so my focus is on the language.

For the backend, I'm using the Gin router. I chose this because my favorite drink is a Gin and Tonic. That was sort of a joke but not really. I chose this because it has good middleware support I can add authorization, and it's lightweight. There will be basic login credentials here so users can manage their webrings.

For DB interactions, I'm going to use the `database/sql` driver and an `sqlite3` database. It's better not to over complicate things. I can practice my SQL skills, without needing to add any unnecessary overhead.

Stay tuned chat for more updates.

> The Github repository is [here](https://github.com/Jaidenmagnan/waygates).