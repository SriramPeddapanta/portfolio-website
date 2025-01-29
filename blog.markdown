---
layout: default
title: Blog
permalink: /blog/
---
# 📝 Blog

Welcome to my blog! Here are my latest posts:
<input type="text" id="searchInput" placeholder="Search posts..." onkeyup="searchPosts()">
<ul id="postList">
{% for post in site.posts %}
<li class="post-item">
    <strong><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></strong><br>
    <small>{{ post.date | date: "%B %d, %Y" }}</small>
    {{ post.excerpt }}
</li>
{% endfor %}
</ul>
