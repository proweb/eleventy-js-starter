---
title: Homepage
permalink: "/"
eleventyExcludeFromCollections: true
---

Hello World! Вы на сайте созданном с помощью статического генератора сайтов 11ty


## Благодарности:

- [@11ty/eleventy](https://www.11ty.dev/)
- [new.css](https://newcss.net/)

---

### Collection API - базовая коллекция (collections.all):
    
{% for post in collections.all %}
    <a href="{{ post.url }}">{{ post.data.title }}</a> <i>(written {{ post.date | date: "%b %d, %Y"}})</i>
{% endfor %}
