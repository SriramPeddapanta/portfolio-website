---
layout: default
title: Blog
permalink: /blog/
---
# 📝 Blog

Welcome to my blog! Here are my latest posts:

{% for post in site.posts %}
- **[{{ post.title }}]({{ post.url }})**  
  _{{ post.date | date: "%B %d, %Y" }}_  
  {{ post.excerpt }}
{% endfor %}
