---
layout: warp
parent: ../notas
title: UFPE
date: 2023-09-13
metatitle: 🏫 UFPE
categories: nota
description: UFPE
cover-image: https://www.historiadorecife.com/notas/imagens/ufpe-2020.jpg
---

{% for page in site.pages %}
{% if page.categories contains "imagem" and page.categories contains "warp" and page.categories contains "ufpe" %}
<img src="/notas/imagens/{{ page.title }}.jpg" />
{% endif %}
{% endfor %}