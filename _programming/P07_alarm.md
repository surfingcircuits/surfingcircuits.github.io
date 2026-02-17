---
title: "P07 - Sistema de alarma luminosa y acústica con pulsador"
layout: single
date: 2026-02-17
excerpt: "Desarrollarás un sistema de alarma que utiliza LEDs y un buzzer, controlado mediante un pulsador, implementando una máquina de estados y temporización no bloqueante con millis()."
platform: arduino
# Table of contents - shown in right side
toc: true
toc_label: "Índice"
toc_icon: "list"
toc_sticky: true
---

## 🚨 P07 - Sistema de alarma luminosa y acústica con pulsador

>ℹ️ **Empieza aquí:**
>
> En esta práctica integrarás varios componentes para crear un **sistema de alarma realista**, capaz de activarse y desactivarse mediante un pulsador, y que utiliza **señales luminosas y acústicas**.  
> Aprenderás a estructurar el programa usando una **máquina de estados** y a controlar eventos en el tiempo mediante `millis()`, una técnica fundamental en sistemas embebidos reales.
{: .notice--info}

---

## 🚀 Objetivos

**•**&thinsp;Integrar LEDs, buzzer y pulsador en un único sistema.  
**•**&thinsp;Implementar una máquina de estados.  
**•**&thinsp;Controlar señales acústicas y luminosas.  
**•**&thinsp;Utilizar temporización no bloqueante con `millis()`.  
**•**&thinsp;Diseñar un sistema interactivo completo.  

---

## 🧩 Contenidos trabajados

**•**&thinsp;Máquinas de estados.  
**•**&thinsp;Entradas digitales con `INPUT_PULLUP`.  
**•**&thinsp;Control de buzzer activo.  
**•**&thinsp;Control de múltiples salidas.  
**•**&thinsp;Temporización con `millis()`.  

---

## 💻 Materiales y recursos

**•**&thinsp;Arduino UNO.  
**•**&thinsp;Protoboard.  
**•**&thinsp;1 buzzer activo.  
**•**&thinsp;2 LEDs.  
**•**&thinsp;2 resistencias (220 Ω – 330 Ω).  
**•**&thinsp;1 pulsador.  
**•**&thinsp;Cables Dupont.  
**•**&thinsp;Ordenador con Arduino IDE.  

---

## 🔧 Montaje práctico

### LEDs

**1.**&thinsp;Conecta:

- LED verde → pin 8  
- LED rojo → pin 9  

**2.**&thinsp;Cada LED con su resistencia a GND.

---

### Buzzer

**1.**&thinsp;Pin positivo → pin 10  
**2.**&thinsp;Pin negativo → GND  

---

### Pulsador

**1.**&thinsp;Un terminal → GND  
**2.**&thinsp;Otro terminal → pin 2  

(Usaremos INPUT_PULLUP)

---

## 🧭 Desarrollo de la práctica

### Paso 1: Crear el proyecto

**1.**&thinsp;Abrir Arduino IDE  
**2.**&thinsp;Archivo → Nuevo  
**3.**&thinsp;Guardar como:  

P07_Alarma_ApellidoNombre  

---

### Paso 2: Declarar variables

```cpp
const int pinLEDVerde = 8;  
const int pinLEDRojo = 9;  
const int pinBuzzer = 10;  
const int pinPulsador = 2;  

bool alarmaActiva = false;  

unsigned long tiempoAnterior = 0;  
const unsigned long intervalo = 300;  

bool estadoSalida = false;  
```

---

### Paso 3: Configurar setup()

```cpp
void setup() {

  pinMode(pinLEDVerde, OUTPUT);  
  pinMode(pinLEDRojo, OUTPUT);  
  pinMode(pinBuzzer, OUTPUT);  

  pinMode(pinPulsador, INPUT_PULLUP);  

}
```

---

### Paso 4: Leer pulsador

Añade al loop():

```cpp
int lectura = digitalRead(pinPulsador);  

if (lectura == LOW) {

  alarmaActiva = !alarmaActiva;  

  delay(200);  

}
```

---

### Paso 5: Máquina de estados

Añade al loop():

```cpp
if (alarmaActiva == false) {

  digitalWrite(pinLEDVerde, HIGH);  
  digitalWrite(pinLEDRojo, LOW);  
  digitalWrite(pinBuzzer, LOW);  

}

else {

  digitalWrite(pinLEDVerde, LOW);  

  unsigned long tiempoActual = millis();  

  if (tiempoActual - tiempoAnterior >= intervalo) {

    tiempoAnterior = tiempoActual;  

    estadoSalida = !estadoSalida;  

    digitalWrite(pinLEDRojo, estadoSalida);  
    digitalWrite(pinBuzzer, estadoSalida);  

  }

}
```

---

## 📄 Código completo

```cpp
const int pinLEDVerde = 8;  
const int pinLEDRojo = 9;  
const int pinBuzzer = 10;  
const int pinPulsador = 2;  

bool alarmaActiva = false;  

unsigned long tiempoAnterior = 0;  
const unsigned long intervalo = 300;  

bool estadoSalida = false;  

void setup() {

  pinMode(pinLEDVerde, OUTPUT);  
  pinMode(pinLEDRojo, OUTPUT);  
  pinMode(pinBuzzer, OUTPUT);  
  pinMode(pinPulsador, INPUT_PULLUP);  

}

void loop() {

  int lectura = digitalRead(pinPulsador);  

  if (lectura == LOW) {

    alarmaActiva = !alarmaActiva;  
    delay(200);  

  }

  if (alarmaActiva == false) {

    digitalWrite(pinLEDVerde, HIGH);  
    digitalWrite(pinLEDRojo, LOW);  
    digitalWrite(pinBuzzer, LOW);  

  }

  else {

    digitalWrite(pinLEDVerde, LOW);  

    unsigned long tiempoActual = millis();  

    if (tiempoActual - tiempoAnterior >= intervalo) {

      tiempoAnterior = tiempoActual;  

      estadoSalida = !estadoSalida;  

      digitalWrite(pinLEDRojo, estadoSalida);  
      digitalWrite(pinBuzzer, estadoSalida);  

    }

  }

}
```

---

## ✅ Comprobación de funcionamiento

Estado reposo:

• LED verde encendido  
• LED rojo apagado  
• Buzzer apagado  

Estado alarma:

• LED rojo parpadea  
• Buzzer suena intermitente  

---

## 📦 Entrega

**•**&thinsp;Archivo `.ino` funcional  
**•**&thinsp;Vídeo demostración  
**•**&thinsp;Explicación de la máquina de estados  

---

## 📊 Rúbrica de evaluación

| Criterio | Excelente | Adecuado | Insuficiente |
|---|---|---|---|
| Montaje | Correcto | Parcial | Incorrecto |
| Funcionamiento | Completo | Parcial | No funciona |
| Máquina estados | Correcta | Parcial | Incorrecta |
| Código | Claro | Mejorable | Incorrecto |
| Comprensión | Alta | Media | Baja |

---

## 🎯 Para pensar (opcional)

> ¿Cómo añadirías un retardo de salida de 10 segundos antes de que la alarma se active?
