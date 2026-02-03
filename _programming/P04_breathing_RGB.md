---
title: "P04 - LED RGB: animación de colores y efecto respiración"
layout: single
date: 2026-02-03
excerpt: "Aprenderás a controlar un LED RGB para crear un efecto de respiración de colores, usando PWM y temporización con millis(), combinando control de brillo y cambio de color de forma no bloqueante."
platform: arduino
# Table of contents - shown in right side
toc: true
toc_label: "Índice"
toc_icon: "list"
toc_sticky: true
---

## 🌈 P04 - LED RGB: animación de colores y efecto respiración

>ℹ️ **Empieza aquí:**
>
> En las prácticas anteriores controlabas LEDs individuales en secuencias simples.  
> En esta práctica aprenderás a **controlar un LED RGB** para que “respire” en distintos colores, combinando **PWM** y temporización con `millis()`.  
> Esto introduce conceptos de **mezcla de colores**, **control de brillo progresivo** y programación **no bloqueante**, esenciales para animaciones más complejas.
{: .notice--info}

---

## 🚀 Objetivos

**•**&thinsp;Controlar un LED RGB mediante pines PWM.  
**•**&thinsp;Crear un efecto de respiración suave (fade in/out) de colores.  
**•**&thinsp;Usar temporización con `millis()` para evitar el uso de `delay()`.  
**•**&thinsp;Implementar mezcla de colores combinando los tres canales RGB.  
**•**&thinsp;Preparar el programa para ampliaciones a múltiples LEDs o patrones más complejos.  

---

## 🧩 Contenidos trabajados

**•**&thinsp;PWM en Arduino (`analogWrite`) para controlar brillo.  
**•**&thinsp;Temporización no bloqueante con `millis()`.  
**•**&thinsp;Arrays y variables para manejar colores y fases.  
**•**&thinsp;Animaciones progresivas de LEDs.  
**•**&thinsp;Lógica de ciclos y cambios de color.  

---

## 💻 Materiales y recursos

**•**&thinsp;Arduino UNO.  
**•**&thinsp;Protoboard.  
**•**&thinsp;1 LED RGB común cátodo (o ánodo)  
**•**&thinsp;3 resistencias (220 Ω – 330 Ω)  
**•**&thinsp;Cables Dupont.  
**•**&thinsp;Ordenador con Arduino IDE.  

>ℹ️ **Nota:**  
> Este montaje requiere identificar correctamente los pines de cada color del LED RGB.
{: .notice--info}

---

## 🔧 Montaje práctico

**1.**&thinsp;Coloca el LED RGB en la protoboard.  
**2.**&thinsp;Conecta los tres canales a pines PWM de Arduino:  
- Rojo → pin 9  
- Verde → pin 10  
- Azul → pin 11  
**3.**&thinsp;Coloca una resistencia en serie con cada canal.  
**4.**&thinsp;Conecta el cátodo común (o ánodo) a GND (o VCC según el tipo de LED).  

---

## 🧭 Desarrollo de la práctica

### Paso 1: Crear el proyecto

**1.**&thinsp;Abrir Arduino IDE.  
**2.**&thinsp;Archivo → Nuevo.  
**3.**&thinsp;Guardar como: `P04_LED_RGB_ApellidoNombre`  

---

### Paso 2: Declarar variables y arrays

Antes de `setup()`:

```cpp
int pinsRGB[3] = {9, 10, 11};  // Rojo, Verde, Azul  
int colorActual = 0;            // índice del color activo  
int direccion = 1;              // +1 para fade in, -1 para fade out  
int brillo = 0;                 // valor de PWM  
unsigned long tiempoAnterior = 0;  
const unsigned long intervalo = 20; // velocidad del fade  
```

---

### Paso 3: Configurar pines en setup()

```cpp
void setup() {  
  for (int i = 0; i < 3; i++) {  
    pinMode(pinsRGB[i], OUTPUT);  
    analogWrite(pinsRGB[i], 0);  
  }  
}  
```

---

### Paso 4: Lógica de respiración y cambio de color en loop()

```cpp
void loop() {  
  unsigned long tiempoActual = millis();  

  if (tiempoActual - tiempoAnterior >= intervalo) {  
    tiempoAnterior = tiempoActual;  

    // actualizar brillo  
    brillo += direccion;  
    if (brillo >= 255) {  
      brillo = 255;  
      direccion = -1;  
    } else if (brillo <= 0) {  
      brillo = 0;  
      direccion = 1;  
      colorActual++;  
      if (colorActual > 2) colorActual = 0;  
    }  

    // apagar todos los canales  
    for (int i = 0; i < 3; i++) {  
      analogWrite(pinsRGB[i], 0);  
    }  

    // encender color actual con el brillo correspondiente  
    analogWrite(pinsRGB[colorActual], brillo);  
  }  
}  
```

---

## ✅ Comprobación de funcionamiento

- El LED RGB debe “respirar” suavemente, aumentando y disminuyendo el brillo.  
- Al terminar un ciclo de un color, cambia al siguiente color (Rojo → Verde → Azul → Rojo).  
- La animación es continua y no bloquea el microcontrolador.  

---

## 📦 Entrega

**•**&thinsp;Archivo `.ino` comentado y funcional.  
**•**&thinsp;Fotografía del LED RGB mostrando la animación.  
**•**&thinsp;Explicación breve de cómo funciona la respiración y el cambio de color.  

---

## 📊 Rúbrica de evaluación

| Criterio | Excelente (9–10) | Adecuado (6–8) | Insuficiente (≤5) |
|--------|------------------|----------------|-------------------|
| Montaje LED RGB | Correcto, seguro y funcional | Funciona parcialmente | Incorrecto |
| Efecto respiración | Brillo y transición suave | Transiciones visibles pero no uniformes | No funciona |
| Cambio de colores | Ciclo correcto y continuo | Algunos colores saltan o se quedan | No cambia |
| Uso de PWM | Control de brillo preciso y modular | Parcialmente correcto | Incorrecto |
| Código y comprensión | Modular, comentado y entendible | Funciona pero confuso | No comprende |

---

## 🎯 Para pensar (opcional)

> ¿Cómo podrías modificar el programa para que el LED RGB muestre colores mezclados (por ejemplo púrpura o amarillo) mientras “respira”?
