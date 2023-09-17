---
layout: note
parent: ..
title: UFPE
date: 2023-09-13
metatitle: 🏫 UFPE
categories: nota
description: UFPE
cover-image: https://www.historiadorecife.com/images/cover.jpg
---

## Imagens
{% for page in site.pages %}
{% if page.categories contains "imagem" and page.categories contains "ufpe" %}
### {{ page. metatitle }}:
![{{ page.title }}](/notas/imagens/{{ page.title }}.jpg)
{% endif %}
{% endfor %}