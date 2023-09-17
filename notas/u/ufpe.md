---
layout: note
parent: ..
title: UFPE
date: 2023-09-17
metatitle: 🏫 UFPE
categories: nota
description: UFPE
cover-image: https://www.historiadorecife.com/images/cover.jpg
---

# Imagens
## Campus
{% for page in site.pages %}
{% if page.categories contains "imagem" and page.categories contains "ufpe" %}
### {{ page.year }}
![{{ page.title }}](/notas/imagens/{{ page.title }}.jpg)
{% endif %}
{% endfor %}

## Vila do Arruado
No coração do campus, a vila dos trabalhadores do famoso Engenho "do Meio" que deu nome ao bairro, resiste hoje a vila do Arruado.

{% for page in site.pages %}
{% if page.categories contains "imagem" and page.categories contains "vila do arruado" %}
### {{ page.year }}
![{{ page.title }}](/notas/imagens/{{ page.title }}.png)
{% endif %}
{% endfor %}