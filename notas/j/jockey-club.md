---
layout: warp
parent: ..
title: Jockey Club de Pernambuco
date: 2023-09-17
metatitle: 🏇 Jockey Club de Pernambuco
categories: nota
description: Jockey Club de Pernambuco no tempo
cover-image: https://www.historiadorecife.com/images/cover.jpg
---

{% for page in site.pages reversed %}
{% if page.categories contains "imagem" and page.categories contains "jockey club" %}
{% highlight html %}
<img src="/notas/imagens/{{ page.title }}.jpg" />
{% endhighlight %}
{% endif %}
{% endfor %}