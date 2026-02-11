---
published: true
title: Homepage
date: 2026-01-01
---
Hello World! Вы на сайте созданном с помощью статического генератора сайтов 11ty

## Благодарности:

*   [@11ty/eleventy](https://www.11ty.dev/)
*   [new.css](https://newcss.net/)

* * *

### Collection API - базовая коллекция (collections.all):

{% for post in collections.all %} [{{ post.data.title }}]({{ post.url }}) _(written {{ post.date | date: "%b %d, %Y"}})_ {% endfor %}