---
layout: warp
parent: ../notas
title: Vila do Arruado
date: 2023-09-17
metatitle: 🏡 Vila do Arruado
categories: nota
description: Vila do Arruado no tempo
cover-image: https://www.historiadorecife.com/notas/imagens/vila-do-arruado-2020.jpg
---

{% for page in site.pages %}
{% if page.categories contains "imagem" and page.categories contains "warp" and page.categories contains "vila do arruado" %}
<img src="/notas/imagens/{{ page.title }}.jpg" />
{% endif %}
{% endfor %}