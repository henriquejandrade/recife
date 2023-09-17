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

O hipódromo da Madalena foi fundado em 1859 e toca os bairros do Cordeiro, Zumbi, Madalena e Bongi. Ele se registrou ao longo do tempo assim:

# Imagens
{% for page in site.pages %}
{% if page.categories contains "imagem" and page.categories contains "jockey club" %}
### {{ page.year }}
![{{ page.title }}](/notas/imagens/{{ page.title }}.jpg)
{% endif %}
{% endfor %}

Um delineado de parte da pista na planta da cidade de 1906, onde o mapa registra o bairro como chamado "Lucas" / e uma estimativa de onde seria a região em um mapa holandês de 1648.