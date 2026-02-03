---
title: "P01 - Entradas y salidas digitales básicas con Arduino"
layout: single
date: 2026-02-03
excerpt: "Primer contacto con Arduino. Aprenderás a utilizar entradas y salidas digitales mediante LEDs y pulsadores, comprendiendo la estructura básica de un programa y la interacción con el hardware."
platform: arduino
toc: true
toc_label: "Índice"
toc_icon: "list"
toc_sticky: true
---

## 🔌 P01 - Entradas y salidas digitales básicas con Arduino

>ℹ️ **Empieza aquí:**
>
> Arduino es una plataforma de desarrollo orientada a la creación de sistemas electrónicos interactivos.  
> En esta primera práctica aprenderás a **controlar salidas digitales** y **leer entradas digitales**, sentando las bases de toda la programación posterior.
>
> El objetivo no es solo encender un LED, sino **entender cómo el software interactúa con el hardware**, cómo se estructura un programa y cómo se toman decisiones en función de una entrada.
{: .notice--info}

---

## 🚀 Objetivos

**•** Comprender la estructura básica de un programa en Arduino (`setup()` y `loop()`).  
**•** Configurar pines digitales como entrada y como salida.  
**•** Leer el estado de un pulsador mediante una entrada digital.  
**•** Controlar un LED en función del estado de una entrada.  
**•** Introducir buenas prácticas básicas de cableado y programación.  

---

## 🧩 Contenidos trabajados

**•** Entradas digitales (`digitalRead`).  
**•** Salidas digitales (`digitalWrite`).  
**•** Uso de resistencias pull-up internas.  
**•** Estructura básica de un sketch de Arduino.  
**•** Lógica condicional (`if / else`).  

---

## 💻 Materiales y recursos

**•** Arduino UNO.  
**•** Protoboard.  
**•** 1 LED (cualquier color).  
**•** 1 resistencia (220 Ω – 330 Ω).  
**•** 1 pulsador.  
**•** Cables Dupont macho-macho.  
**•** Ordenador con **Arduino IDE** instalado.  

---

## 🔧 Montaje práctico

### Conexión del LED

**1.** Coloca el LED en la protoboard.  
**2.** Conecta la **patilla larga (ánodo)** del LED al **pin digital 8** de Arduino **a través de una resistencia**.  
**3.** Conecta la **patilla corta (cátodo)** del LED a **GND**.

>⚠️ **Atención:**  
> Nunca conectes un LED directamente a un pin sin resistencia.
{: .notice--warning}

---

### Conexión del pulsador

**1.** Coloca el pulsador en la protoboard.  
**2.** Conecta uno de sus terminales a **GND**.  
**3.** Conecta el terminal opuesto al **pin digital 2** de Arduino.

>💡 **Nota:**  
> En esta práctica se utilizará la **resistencia pull-up interna** del microcontrolador.
{: .notice--info}

---

## 🧭 Desarrollo de la práctica

### Crear el proyecto

**1.** Abre el **Arduino IDE**.  
**2.** Crea un nuevo sketch y guárdalo como:  

- `P01_IO_Digital_ApellidoNombre`

---

### Estructura básica del programa

Todo programa en Arduino tiene dos funciones principales:

- `setup()` → se ejecuta **una sola vez** al arrancar la placa.  
- `loop()` → se ejecuta **de forma continua** mientras Arduino esté encendido.

---

### Configuración de pines

Dentro de la función `setup()` se deben configurar los pines:
```cpp
    pinMode(8, OUTPUT);
    pinMode(2, INPUT_PULLUP);
```

---

### Control del LED mediante el pulsador

Dentro de la función `loop()`:

**1.** Lee el estado del pulsador con `digitalRead(2)`.  
**2.** Si el valor leído es `LOW`, el pulsador está presionado.  
**3.** Enciende el LED cuando el pulsador esté presionado.  
**4.** Apaga el LED cuando el pulsador esté suelto.

>💡 **Pista:**  
> Al usar `INPUT_PULLUP`, la lógica del pulsador queda invertida.
{: .notice--info}

---

## ✅ Comprobación de funcionamiento

- Pulsador presionado → LED encendido  
- Pulsador suelto → LED apagado  

Si no funciona correctamente:
- Revisa el cableado.  
- Comprueba que los pines coinciden con el código.  

---

## 📦 Entrega

**•** Archivo `.ino` correctamente comentado.  
**•** Fotografía clara del montaje.  
**•** Breve explicación escrita del funcionamiento del programa (5–10 líneas).  

---

## 📊 Rúbrica de evaluación

| Criterio | Excelente (9–10) | Adecuado (6–8) | Insuficiente (≤5) |
|--------|------------------|----------------|-------------------|
| Montaje eléctrico | Correcto y ordenado | Funciona con errores menores | Incorrecto |
| Funcionamiento | Totalmente correcto | Funciona parcialmente | No funciona |
| Código | Claro y comentado | Funcional pero mejorable | Desordenado |
| Uso de E/S | Correcto y justificado | Correcto sin justificar | Incorrecto |
| Documentación | Clara y precisa | Básica | Inexistente |

---

## 🎯 Para pensar

> ¿Por qué es importante definir el estado de una entrada cuando el pulsador no está presionado?
