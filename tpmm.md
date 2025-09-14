---
title: "Prueba titulo"
layout: archive
permalink: /TPMM/
collection: tpmm
entries_layout: grid
---
# Técnicas y procesos de montaje y mantenimiento de equipos electrónicos
{: .text-center }

Bienvenido al índice de contenidos del módulo.  
Aquí encontrarás todo el material teórico utilizado en clase.

{% for item in site.tpmm %}
  {% include archive-single.html %}
{% endfor %}
