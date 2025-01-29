---
layout: default
title: Categories
permalink: /categories/
---
# 🗂 Categories

Browse posts by category:

{% for category in site.categories %}
- [{{ category[0] }}]({{ site.baseurl }}/categories/{{ category[0] }})
{% endfor %}
