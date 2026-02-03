---
title: "P01 - Entradas y salidas digitales básicas con Arduino"
layout: single
date: 2025-09-18
excerpt: "Primer contacto con Arduino. Aprenderás a utilizar entradas y salidas digitales mediante LEDs y pulsadores, comprendiendo la estructura básica de un programa y la interacción entre software y hardware."
platform: arduino
# Table of contents - shown in right side
toc: true
toc_label: "Índice"
toc_icon: "list"
toc_sticky: true
---

## 🔌 P01 - Entradas y salidas digitales básicas con Arduino

>ℹ️ **Empieza aquí:**
>
> Arduino es una plataforma de desarrollo orientada a la creación de sistemas electrónicos interactivos.  
> En esta práctica aprenderás a **controlar salidas digitales** y **leer entradas digitales**, sentando las bases de toda la programación posterior.
>
> El objetivo no es solo encender un LED, sino **comprender cómo el software interactúa con el hardware**, cómo se estructura un programa en Arduino y cómo se toman decisiones a partir de una entrada física.
{: .notice--info}

---

## 🚀 Objetivos

**•**&thinsp;Comprender la estructura básica de un programa en Arduino (`setup()` y `loop()`).  
**•**&thinsp;Configurar pines digitales como entrada y como salida.  
**•**&thinsp;Leer el estado de un pulsador mediante una entrada digital.  
**•**&thinsp;Controlar un LED en función del estado de una entrada.  
**•**&thinsp;Introducir buenas prácticas básicas de cableado y programación.  

---

## 🧩 Contenidos trabajados

**•**&thinsp;Entradas digitales (`digitalRead`).  
**•**&thinsp;Salidas digitales (`digitalWrite`).  
**•**&thinsp;Uso de resistencias pull-up internas.  
**•**&thinsp;Variables y estructuras condicionales (`if / else`).  
**•**&thinsp;Estructura básica de un sketch de Arduino.  

---

## 💻 Materiales y recursos

**•**&thinsp;Arduino UNO.  
**•**&thinsp;Protoboard.  
**•**&thinsp;1 LED (cualquier color).  
**•**&thinsp;1 resistencia (220 Ω – 330 Ω).  
**•**&thinsp;1 pulsador.  
**•**&thinsp;Cables Dupont macho-macho.  
**•**&thinsp;Ordenador con **Arduino IDE** instalado.  

---

## 🔧 Montaje práctico

### Conexión del LED

**Qué se va a hacer:** 

Conectar un LED para que pueda ser controlado por Arduino.

**Cómo hacerlo:**

**1.**&thinsp;Coloca el LED en la protoboard.  
**2.**&thinsp;Identifica sus patillas:  
- Patilla larga → ánodo (positivo).  
- Patilla corta → cátodo (negativo).  

**3.**&thinsp;Realiza las conexiones:  
- Ánodo → resistencia → pin digital **8** de Arduino.  
- Cátodo → **GND**.

>⚠️ **Atención:**  
> El LED debe conectarse siempre con una resistencia en serie para limitar la corriente.
{: .notice--warning}

---

### Conexión del pulsador

**Qué se va a hacer:**

Conectar un pulsador para que Arduino pueda leer su estado.

**Cómo hacerlo:**

**1.**&thinsp;Coloca el pulsador en la protoboard.  
**2.**&thinsp;Conecta uno de sus terminales a **GND**.  
**3.**&thinsp;Conecta el terminal opuesto al pin digital **2** de Arduino.

>💡 **Nota:**  
> Se utilizará la **resistencia pull-up interna** del microcontrolador, por lo que no es necesario añadir resistencias externas.
{: .notice--info}

---

## 🧭 Desarrollo de la práctica

### Paso 1: Crear el proyecto

**Qué se va a hacer:**

Crear un nuevo programa (sketch) en Arduino.

**Cómo hacerlo:**

**1.**&thinsp;Abre el **Arduino IDE**.  
**2.**&thinsp;Selecciona **Archivo → Nuevo**.  
**3.**&thinsp;Guarda el archivo con el nombre:  

- `P01_IO_Digital_ApellidoNombre`

---

### Paso 2: Entender la estructura del programa

Al crear un sketch nuevo aparece este código base:

```cpp
    void setup() {
    }

    void loop() {
    }
```

**Qué significa:**

- `setup()` → se ejecuta **una sola vez** al arrancar Arduino.  
- `loop()` → se ejecuta **continuamente**, en bucle, mientras Arduino esté encendido.

---

### Paso 3: Configurar los pines

**Qué se va a hacer:**

Indicar a Arduino qué pines se usarán como entrada y como salida.

**Cómo hacerlo:**

Dentro de la función `setup()`, escribe:

```cpp
    pinMode(8, OUTPUT);
    pinMode(2, INPUT_PULLUP);
```

**Interpretación:**

- Pin 8 → salida para controlar el LED.  
- Pin 2 → entrada para leer el pulsador, con pull-up interno activado.

---

### Paso 4: Leer el estado del pulsador

**Qué se va a hacer:**

Leer el estado eléctrico del pulsador.

**Cómo hacerlo:**

Dentro de `loop()`, escribe:

    int estadoPulsador = digitalRead(2);

Esto guarda en la variable `estadoPulsador` el valor leído del pin.

---

### Paso 5: Tomar una decisión y actuar

**Qué se va a hacer:**

Encender o apagar el LED en función del estado del pulsador.

**Cómo hacerlo:**

Añade a continuación:

```cpp
    if (estadoPulsador == LOW) {
        digitalWrite(8, HIGH);
    } else {
        digitalWrite(8, LOW);
    }
```

**Qué ocurre aquí:**

- Si el pulsador está presionado (`LOW`), el LED se enciende.  
- Si no lo está (`HIGH`), el LED se apaga.

>💡 **Importante:**  
> Al usar `INPUT_PULLUP`, la lógica del pulsador queda invertida.
{: .notice--info}

---

## ▶️ Cargar el programa en Arduino

**1.**&thinsp;Conecta Arduino al ordenador mediante USB.  
**2.**&thinsp;Selecciona la placa y el puerto correctos en el IDE.  
**3.**&thinsp;Pulsa **Verificar (✓)** para comprobar errores.  
**4.**&thinsp;Pulsa **Subir (→)** para cargar el programa.  

---

## ✅ Comprobación de funcionamiento

El comportamiento esperado es:

- Pulsador presionado → LED encendido.  
- Pulsador suelto → LED apagado.

Si no funciona correctamente:
- revisa el cableado,  
- comprueba los números de pin,  
- asegúrate de que el código está dentro de `setup()` y `loop()`.

---

## 📦 Entrega

**•**&thinsp;Archivo `.ino` correctamente comentado.  
**•**&thinsp;Fotografía clara del montaje en la protoboard.  
**•**&thinsp;Breve explicación escrita del funcionamiento del programa.  

---

## 📊 Rúbrica de evaluación

| Criterio | Excelente (9–10) | Adecuado (6–8) | Insuficiente (≤5) |
|--------|------------------|----------------|-------------------|
| Montaje eléctrico | Correcto, limpio y seguro | Funciona con pequeños errores | Incorrecto |
| Funcionamiento | Respuesta totalmente correcta | Funciona parcialmente | No funciona |
| Código | Claro, ordenado y comentado | Funcional pero mejorable | Desordenado |
| Uso de E/S | Uso correcto y justificado | Uso correcto sin justificar | Uso incorrecto |
| Documentación | Clara y precisa | Básica | Inexistente |

---

## 🎯 Para pensar (opcional)

> ¿Por qué es importante que un programa conozca el estado de una entrada antes de tomar una decisión?
