---
title: ""
layout: archive
permalink: /TPMM/
collection: TPMM
entries_layout: grid
---

# Técnicas y procesos de montaje y mantenimiento de equipos electrónicos
{: .text-center }

Bienvenido al índice de contenidos del módulo.  
Aquí encontrarás todo el material teórico utilizado en clase.

{% for item in site.TPMM %}
  {% if item.url != "/TPMM/" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}
