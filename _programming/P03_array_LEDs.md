---
title: "P03 - Secuencias de LEDs con arrays y temporización sin bloquear"
layout: single
date: 2026-02-03
excerpt: "Control de múltiples LEDs mediante arrays y temporización con millis(), permitiendo patrones de encendido flexibles sin bloquear la ejecución del programa."
platform: arduino
# Table of contents - shown in right side
toc: true
toc_label: "Índice"
toc_icon: "list"
toc_sticky: true
---

## 💡 P03 - Secuencias de LEDs con arrays y temporización

>ℹ️ **Empieza aquí:**
>
> Hasta ahora controlabas LEDs de manera individual y secuencial usando variables sueltas.  
> En esta práctica aprenderás a usar **arrays** para manejar múltiples LEDs de forma ordenada y a crear **patrones de encendido** usando `millis()` para temporización sin bloquear el programa.  
> Esto permite que el programa siga respondiendo a entradas mientras los LEDs cambian de estado, y facilita añadir más LEDs o patrones en el futuro.
{: .notice--info}

---

## 🚀 Objetivos

**•**&thinsp;Controlar múltiples LEDs usando arrays.  
**•**&thinsp;Crear patrones de encendido dinámicos y escalables.  
**•**&thinsp;Usar `millis()` para temporización sin bloquear.  
**•**&thinsp;Mantener la capacidad de respuesta del programa a entradas externas.  
**•**&thinsp;Introducir buenas prácticas de programación y modularidad.  

---

## 🧩 Contenidos trabajados

**•**&thinsp;Arrays para manejar múltiples salidas.  
**•**&thinsp;Temporización sin bloqueo (`millis()`).  
**•**&thinsp;Patrones de secuencias de LEDs.  
**•**&thinsp;Variables de estado y contadores.  
**•**&thinsp;Lectura de entradas mientras se ejecutan secuencias.  

---

## 💻 Materiales y recursos

**•**&thinsp;Arduino UNO.  
**•**&thinsp;Protoboard.  
**•**&thinsp;3 o más LEDs.  
**•**&thinsp;Resistencias (220 Ω – 330 Ω).  
**•**&thinsp;1 pulsador (opcional para pausar/reiniciar secuencia).  
**•**&thinsp;Cables Dupont.  
**•**&thinsp;Ordenador con Arduino IDE.  

>ℹ️ **Nota:**  
> El montaje eléctrico sigue siendo simple y escalable gracias al uso de arrays.
{: .notice--info}

---

## 🔧 Montaje práctico

### LEDs

**Cómo hacerlo:**

**1.**&thinsp;Coloca 3 o más LEDs en la protoboard.  
**2.**&thinsp;Conecta cada ánodo a un pin digital mediante una resistencia:  
- LED1 → pin 8  
- LED2 → pin 9  
- LED3 → pin 10  
**3.**&thinsp;Conecta todos los cátodos a **GND**.  

---

### Pulsador (opcional)

**Cómo hacerlo:**

**1.**&thinsp;Coloca el pulsador en la protoboard.  
**2.**&thinsp;Terminal → GND  
**3.**&thinsp;Terminal opuesto → pin 2 (INPUT_PULLUP)

---

## 🧭 Desarrollo de la práctica

### Paso 1: Crear el proyecto

**1.**&thinsp;Abrir Arduino IDE.  
**2.**&thinsp;Archivo → Nuevo.  
**3.**&thinsp;Guardar como: `P03_LEDs_Arrays_ApellidoNombre`  

---

### Paso 2: Declarar variables y arrays

Antes de `setup()`:

```cpp
const int numLEDs = 3;                  // número de LEDs  
int pinsLED[numLEDs] = {8, 9, 10};      // pines de cada LED  
int estadoLED = 0;                       // índice del LED activo  
unsigned long tiempoAnterior = 0;       
const unsigned long intervalo = 500;     // intervalo en ms  
```

---

### Paso 3: Configurar pines en setup()

```cpp
void setup() {  
  for (int i = 0; i < numLEDs; i++) {  
    pinMode(pinsLED[i], OUTPUT);  
    digitalWrite(pinsLED[i], LOW);      // apagamos todos al inicio  
  }  
  pinMode(2, INPUT_PULLUP);             // pulsador opcional  
}  
```

---

### Paso 4: Lógica de secuencia en loop()

```cpp
void loop() {  
  unsigned long tiempoActual = millis();  

  // comprobar intervalo  
  if (tiempoActual - tiempoAnterior >= intervalo) {  
    tiempoAnterior = tiempoActual;  

    // apagar todos los LEDs  
    for (int i = 0; i < numLEDs; i++) {  
      digitalWrite(pinsLED[i], LOW);  
    }  

    // encender LED correspondiente  
    digitalWrite(pinsLED[estadoLED], HIGH);  

    // avanzar al siguiente LED  
    estadoLED++;  
    if (estadoLED >= numLEDs) estadoLED = 0;  
  }  

  // pulsador opcional para reiniciar o pausar  
  int pulsador = digitalRead(2);  
  if (pulsador == LOW) {  
    estadoLED = 0;  
  }  
}  
```

---

## ✅ Comprobación de funcionamiento

- Los LEDs se encienden uno tras otro en orden cíclico.  
- El programa sigue ejecutándose y puede responder al pulsador sin interrumpir la secuencia.  
- Agregar más LEDs es tan simple como ampliar el array `pinsLED` y actualizar `numLEDs`.

---

## 📦 Entrega

**•**&thinsp;Archivo `.ino` comentado y funcional.  
**•**&thinsp;Fotografía de la secuencia de LEDs.  
**•**&thinsp;Breve explicación de cómo funcionan arrays y millis() en la secuencia.  

---

## 📊 Rúbrica de evaluación

| Criterio | Excelente (9–10) | Adecuado (6–8) | Insuficiente (≤5) |
|--------|------------------|----------------|-------------------|
| Montaje de LEDs | Correcto, limpio y funcional | Funciona parcialmente | Incorrecto |
| Secuencia LED | Todos los LEDs funcionan en patrón correcto | Algunos LEDs fallan | No funciona |
| Uso de arrays | Código modular y escalable | Funciona pero no modular | No usa arrays |
| Uso de millis() | Temporización correcta sin bloquear | Temporización parcialmente correcta | Usa delay() |
| Comprensión | Explica bien la lógica | Explicación parcial | No comprende |

---

## 🎯 Para pensar (opcional)

> ¿Cómo podrías cambiar fácilmente el patrón de encendido si tuvieras 6 LEDs en lugar de 3 usando el mismo programa?
