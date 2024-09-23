---
layout: warp
parent: ../notas
title: Hospital Português
date: 2023-10-04
metatitle: 🏥 Hospital Português
categories: nota
description: Hospital Português
cover-image: https://www.historiadorecife.com/notas/imagens/hospital-portugues-2021.jpg
---

{% for page in site.pages %}
{% if page.categories contains "imagem" and page.categories contains "warp" and page.categories contains "hospital português" %}
<img src="/notas/imagens/{{ page.title }}.jpg" />
{% endif %}
{% endfor %}