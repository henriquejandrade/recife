---
layout: note
parent: ..
title: Jockey Club de Pernambuco
date: 2023-09-17
metatitle: 🏇 Jockey Club de Pernambuco
categories: nota
description: Jockey Club de Pernambuco no tempo
cover-image: https://www.historiadorecife.com/images/cover.jpg
---

# Imagens
{% for page in site.pages %}
{% if page.categories contains "imagem" and page.categories contains "jockey club" %}
### {{ page.year }}
![{{ page.title }}](/notas/imagens/{{ page.title }}.jpg)
{% endif %}
{% endfor %}