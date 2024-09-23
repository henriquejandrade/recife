---
layout: warp
parent: ../notas
title: Jockey Club de Pernambuco
date: 2023-09-17
metatitle: 🏇 Jockey Club de Pernambuco
categories: nota
description: Jockey Club de Pernambuco no tempo
cover-image: https://www.historiadorecife.com/notas/imagens/jockey-club-2021.jpg
---

{% for page in site.pages %}
{% if page.categories contains "imagem" and page.categories contains "warp" and page.categories contains "jockey club" %}
<img src="/notas/imagens/{{ page.title }}.jpg" />
{% endif %}
{% endfor %}