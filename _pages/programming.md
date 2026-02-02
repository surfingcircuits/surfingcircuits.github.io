---
title: "Prueba de bloques de código"
layout: single
permalink: /programming/
toc: true
toc_label: "Secciones"
toc_icon: "compass"
toc_sticky: true
sidebar:
  nav: programming
  sticky: true
---

## Introducción

Esta página sirve para comprobar el funcionamiento de los distintos tipos de bloques de código en **Minimal Mistakes**:

- Botón **Copy**
- Números de línea
- Bloques sin botón
- Código inline

---

## 1. Bloque normal (con botón Copy)

Este bloque debería mostrar:
- resaltado de sintaxis
- **botón Copy**
- sin números de línea

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
```

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(500);
  digitalWrite(LED_BUILTIN, LOW);
  delay(500);
}
```
{: .line-numbers}

```cpp
int ledPin = 13;
```
{: .no-copy}

{% highlight cpp linenos %}
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
{% endhighlight %}
