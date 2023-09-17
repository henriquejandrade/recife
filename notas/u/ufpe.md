---
layout: blog
parent: ..
title: UFPE
date: 2023-09-13
metatitle: 🏫 UFPE
categories: nota
description: UFPE
cover-image: https://www.historiadorecife.com/images/cover.jpg
---

A UFPE EM 70 ANOS 👇🎓

1951 // 1974 // 2013 // 2020

{% for page in site.pages %}
{% if page.categories contains "imagem" and page.categories contains "ufpe" %}
![{{ page.title }}](/notas/imagems/{{ page.title }}.jpg)
{% endif %}
{% endfor %}

![1954](/notas/imagens/ufpe-1954.jpg)
![2013](/notas/imagens/ufpe-2013.jpg)
![2020](/notas/imagens/ufpe-2020.jpg)