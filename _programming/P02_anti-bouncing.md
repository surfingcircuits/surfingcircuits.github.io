---
title: "P02 - Control por eventos y antirrebote de pulsadores"
layout: single
date: 2025-02-03
excerpt: "Aprenderás a detectar pulsaciones válidas de un botón, implementar antirrebote por software y controlar el comportamiento de un LED mediante eventos, introduciendo lógica más avanzada que un encendido directo."
platform: arduino
# Table of contents - shown in right side
toc: true
toc_label: "Índice"
toc_icon: "list"
toc_sticky: true
---

## 🔘 P02 - Control por eventos y antirrebote de pulsadores

>ℹ️ **Empieza aquí:**
>
> En la práctica anterior aprendiste a encender un LED directamente leyendo el estado de un pulsador.  
> En sistemas reales, la lectura directa puede producir errores debido a rebotes mecánicos del pulsador.  
> En esta práctica aprenderás a **detectar una pulsación válida**, eliminar el **rebote** y usar esa pulsación para **cambiar el estado de un LED**, introduciendo conceptos de programación más avanzados.
{: .notice--info}

---

## 🚀 Objetivos

**•**&thinsp;Comprender qué es el **rebote mecánico** de un pulsador.  
**•**&thinsp;Implementar **antirrebote por software** usando `millis()`.  
**•**&thinsp;Detectar cambios de estado (flancos) en una entrada digital.  
**•**&thinsp;Controlar un LED mediante **eventos de pulsación**.  
**•**&thinsp;Introducir el uso del **Monitor Serie** para depuración y visualización de eventos.  

---

## 🧩 Contenidos trabajados

**•**&thinsp;Lectura avanzada de entradas digitales.  
**•**&thinsp;Variables de estado y temporización con `millis()`.  
**•**&thinsp;Detección de flancos (`LOW → HIGH`, `HIGH → LOW`).  
**•**&thinsp;Lógica de control basada en eventos en lugar de estado continuo.  
**•**&thinsp;Uso básico del Monitor Serie (`Serial.begin`, `Serial.println`).  

---

## 💻 Materiales y recursos

**•**&thinsp;Arduino UNO.  
**•**&thinsp;Protoboard.  
**•**&thinsp;1 LED.  
**•**&thinsp;1 resistencia (220 Ω – 330 Ω).  
**•**&thinsp;1 pulsador.  
**•**&thinsp;Cables Dupont macho-macho.  
**•**&thinsp;Ordenador con **Arduino IDE** instalado.  

>ℹ️ **Nota:**  
> El montaje eléctrico es **idéntico al de la práctica P01**.
{: .notice--info}

---

## 🔧 Montaje práctico

### Conexión del LED

**Qué se va a hacer:**  
Conectar el LED que se controlará mediante eventos.

**Cómo hacerlo:**

**1.**&thinsp;Coloca el LED en la protoboard.  
**2.**&thinsp;Ánodo → resistencia → pin digital **8**.  
**3.**&thinsp;Cátodo → **GND**.

---

### Conexión del pulsador

**Qué se va a hacer:**  
Conectar el pulsador cuya pulsación se leerá correctamente.

**Cómo hacerlo:**

**1.**&thinsp;Coloca el pulsador en la protoboard.  
**2.**&thinsp;Terminal → **GND**  
**3.**&thinsp;Terminal opuesto → pin digital **2** (usando pull-up interno)

---

## 🧭 Desarrollo de la práctica

### Paso 1: Crear el proyecto

**Qué se va a hacer:**  
Crear un nuevo sketch para esta práctica.

**Cómo hacerlo:**

**1.**&thinsp;Abre el **Arduino IDE**.  
**2.**&thinsp;Selecciona **Archivo → Nuevo**.  
**3.**&thinsp;Guarda el archivo con el nombre:  

- `P02_Antirrebote_Eventos_ApellidoNombre`

---

### Paso 2: Configurar los pines y la comunicación serie

Dentro de `setup()` escribe:

    pinMode(8, OUTPUT);
    pinMode(2, INPUT_PULLUP);
    Serial.begin(9600);

**Qué ocurre aquí:**  
- Pin 8 → salida para LED  
- Pin 2 → entrada del pulsador  
- `Serial.begin(9600)` → inicializa comunicación con el ordenador  

---

### Paso 3: Definir variables de estado

Antes de `setup()` declara:

    int estadoPulsador;
    int estadoAnterior = HIGH;
    bool estadoLED = false;
    unsigned long tiempoAnterior = 0;
    const unsigned long debounceDelay = 50;

**Qué significa:**  
- `estadoPulsador` → lectura actual del botón  
- `estadoAnterior` → lectura anterior  
- `estadoLED` → estado del LED  
- `tiempoAnterior` → momento del último cambio válido  
- `debounceDelay` → tiempo mínimo para ignorar rebotes

---

### Paso 4: Leer pulsaciones y aplicar antirrebote

Dentro de `loop()`:

**1.**&thinsp;Leer el estado del pulsador:

    estadoPulsador = digitalRead(2);

**2.**&thinsp;Verificar si ha cambiado respecto al estado anterior:

    if (estadoPulsador != estadoAnterior) {
        tiempoAnterior = millis(); // reinicia temporizador
    }

**3.**&thinsp;Esperar tiempo de antirrebote:

    if ((millis() - tiempoAnterior) > debounceDelay) {
        if (estadoPulsador == LOW && estadoAnterior == HIGH) {
            estadoLED = !estadoLED;          // cambiar estado del LED
            digitalWrite(8, estadoLED ? HIGH : LOW);
            Serial.println(estadoLED ? "LED encendido" : "LED apagado");
        }
    }

**4.**&thinsp;Actualizar el estado anterior:

    estadoAnterior = estadoPulsador;

---

## 🖥️ Uso del Monitor Serie

**Qué se va a hacer:**  

Comprobar que cada pulsación válida genera un mensaje único.

**Cómo hacerlo:**

**1.**&thinsp;Abrir **Monitor Serie** en Arduino IDE.  
**2.**&thinsp;Observar los mensajes:  
- `LED encendido` → pulsación válida  
- `LED apagado` → siguiente pulsación  

>💡 Nota: No deberían aparecer mensajes repetidos por rebote.

---

## ✅ Comprobación de funcionamiento

- Cada pulsación cambia el estado del LED.  
- El LED permanece en su estado aunque se suelte el botón.  
- No hay comportamiento errático por rebote.

---

## 📦 Entrega

**•**&thinsp;Archivo `.ino` comentado y funcional.  
**•**&thinsp;Fotografía del montaje (puede ser la misma que P01).  
**•**&thinsp;Captura del Monitor Serie mostrando mensajes correctos.  
**•**&thinsp;Breve explicación del algoritmo de antirrebote y control por eventos.

---

## 📊 Rúbrica de evaluación

| Criterio | Excelente (9–10) | Adecuado (6–8) | Insuficiente (≤5) |
|--------|------------------|----------------|-------------------|
| Antirrebote | Correcto y estable | Funciona con fallos ocasionales | No implementado |
| Control por eventos | LED conmuta correctamente | Funciona parcialmente | Incorrecto |
| Código | Claro, modular y comentado | Funcional pero mejorable | Confuso |
| Uso del Monitor Serie | Mensajes claros y útiles | Mensajes básicos | No utilizado |
| Comprensión | Explica bien la lógica | Explicación parcial | No comprende |

---

## 🎯 Para pensar (opcional)

> ¿Por qué en sistemas reales es preferible trabajar con eventos en lugar de estados directos?
