---
title: Homepage
permalink: "/"
eleventyExcludeFromCollections: true
---

Hello it's home page for you @11ty-based website.


## Thanks to:

- [@11ty/eleventy](https://www.11ty.dev/)
- [new.css](https://newcss.net/)

---

### Collection - All:
    
{% for post in collections.all %}
    <a href="{{ post.url }}">{{ post.data.title }}</a> <i>(written {{ post.date | date: "%b %d, %Y"}})</i>
{% endfor %}
