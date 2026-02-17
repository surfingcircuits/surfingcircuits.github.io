---
title: "P09 - Sistema de monitorización de luz con alarma configurable"
layout: single
date: 2026-02-17
excerpt: "Desarrollarás un sistema completo que mide la luz con un LDR, muestra el valor por el Monitor Serie y activa una alarma luminosa y acústica cuando se supera un umbral configurable por comandos."
platform: arduino
# Table of contents - shown in right side
toc: true
toc_label: "Índice"
toc_icon: "list"
toc_sticky: true
---

## 🌡️ P09 - Sistema de monitorización de luz con alarma configurable

>ℹ️ **Empieza aquí:**
>
> En esta práctica integrarás múltiples conceptos aprendidos anteriormente para construir un **sistema embebido completo**.  
> El sistema será capaz de:
>
> • Medir la luz ambiente con un LDR  
> • Mostrar el valor en el Monitor Serie  
> • Activar una alarma luminosa y acústica  
> • Permitir al usuario configurar el umbral de alarma mediante comandos
>
> Este tipo de arquitectura es la base de sistemas reales de **monitorización médica, industrial y domótica**.
{: .notice--info}

---

## 🚀 Objetivos

**•**&thinsp;Integrar sensores, actuadores e interfaz serie.  
**•**&thinsp;Leer y procesar entradas analógicas.  
**•**&thinsp;Implementar lógica de decisión basada en umbrales.  
**•**&thinsp;Permitir configuración desde el Monitor Serie.  
**•**&thinsp;Diseñar un sistema embebido completo funcional.  

---

## 🧩 Contenidos trabajados

**•**&thinsp;Lectura analógica (`analogRead`).  
**•**&thinsp;Comunicación serie bidireccional.  
**•**&thinsp;Variables configurables.  
**•**&thinsp;Máquinas de estados simples.  
**•**&thinsp;Integración de sistemas.  

---

## 💻 Materiales y recursos

**•**&thinsp;Arduino UNO  
**•**&thinsp;Protoboard  
**•**&thinsp;1 LDR  
**•**&thinsp;1 resistencia 10kΩ  
**•**&thinsp;1 LED rojo  
**•**&thinsp;1 LED verde  
**•**&thinsp;2 resistencias 220Ω  
**•**&thinsp;1 buzzer activo  
**•**&thinsp;Cables  
**•**&thinsp;Arduino IDE  

---

## 🔧 Montaje práctico

### LDR

Conectar divisor de tensión:

• LDR → 5V  
• LDR → A0  
• Resistencia → GND  

---

### LEDs

LED verde → pin 8  
LED rojo → pin 9  

---

### Buzzer

Pin positivo → pin 10  
Pin negativo → GND  

---

## 🧭 Desarrollo de la práctica

### Paso 1: Crear proyecto

Nombre:

P09_Monitor_Luz_ApellidoNombre

---

### Paso 2: Declarar variables

```cpp
int pinLDR = A0;

int pinLEDVerde = 8;  
int pinLEDRojo = 9;  
int pinBuzzer = 10;

int umbral = 500;

unsigned long tiempoAnterior = 0;  
const unsigned long intervalo = 500;
```

---

### Paso 3: Configurar setup()

```cpp
void setup() {

  pinMode(pinLEDVerde, OUTPUT);  
  pinMode(pinLEDRojo, OUTPUT);  
  pinMode(pinBuzzer, OUTPUT);

  Serial.begin(9600);

  Serial.println("Sistema monitor luz");

  Serial.println("Enviar nuevo umbral (0–1023)");

}
```

---

### Paso 4: Leer sensor

Dentro de loop():

```cpp
int valorLuz = analogRead(pinLDR);
```

---

### Paso 5: Mostrar datos

```cpp
unsigned long tiempoActual = millis();

if (tiempoActual - tiempoAnterior >= intervalo) {

  tiempoAnterior = tiempoActual;

  Serial.print("Luz: ");  
  Serial.print(valorLuz);  

  Serial.print(" Umbral: ");  
  Serial.println(umbral);

}
```

---

### Paso 6: Sistema alarma

```cpp
if (valorLuz < umbral) {

  digitalWrite(pinLEDVerde, LOW);  
  digitalWrite(pinLEDRojo, HIGH);  
  digitalWrite(pinBuzzer, HIGH);

}

else {

  digitalWrite(pinLEDVerde, HIGH);  
  digitalWrite(pinLEDRojo, LOW);  
  digitalWrite(pinBuzzer, LOW);

}
```

---

### Paso 7: Leer comandos serie

```cpp
if (Serial.available() > 0) {

  int nuevoUmbral = Serial.parseInt();

  if (nuevoUmbral >= 0 && nuevoUmbral <= 1023) {

    umbral = nuevoUmbral;

    Serial.print("Nuevo umbral: ");  
    Serial.println(umbral);

  }

}
```

---

## 📄 Código completo

```cpp
int pinLDR = A0;

int pinLEDVerde = 8;  
int pinLEDRojo = 9;  
int pinBuzzer = 10;

int umbral = 500;

unsigned long tiempoAnterior = 0;  
const unsigned long intervalo = 500;

void setup() {

  pinMode(pinLEDVerde, OUTPUT);  
  pinMode(pinLEDRojo, OUTPUT);  
  pinMode(pinBuzzer, OUTPUT);

  Serial.begin(9600);

  Serial.println("Sistema monitor luz");

  Serial.println("Enviar nuevo umbral (0–1023)");

}

void loop() {

  int valorLuz = analogRead(pinLDR);

  unsigned long tiempoActual = millis();

  if (tiempoActual - tiempoAnterior >= intervalo) {

    tiempoAnterior = tiempoActual;

    Serial.print("Luz: ");  
    Serial.print(valorLuz);  

    Serial.print(" Umbral: ");  
    Serial.println(umbral);

  }

  if (valorLuz < umbral) {

    digitalWrite(pinLEDVerde, LOW);  
    digitalWrite(pinLEDRojo, HIGH);  
    digitalWrite(pinBuzzer, HIGH);

  }

  else {

    digitalWrite(pinLEDVerde, HIGH);  
    digitalWrite(pinLEDRojo, LOW);  
    digitalWrite(pinBuzzer, LOW);

  }

  if (Serial.available() > 0) {

    int nuevoUmbral = Serial.parseInt();

    if (nuevoUmbral >= 0 && nuevoUmbral <= 1023) {

      umbral = nuevoUmbral;

      Serial.print("Nuevo umbral: ");  
      Serial.println(umbral);

    }

  }

}
```

---

## ✅ Comprobación de funcionamiento

El sistema debe:

• Mostrar valores de luz  
• Permitir cambiar el umbral  
• Activar alarma automáticamente  

---

## 📦 Entrega

**•**&thinsp;Código fuente  
**•**&thinsp;Vídeo funcionamiento  
**•**&thinsp;Captura Monitor Serie  

---

## 📊 Rúbrica de evaluación

| Criterio | Excelente | Adecuado | Insuficiente |
|---|---|---|---|
| Lectura sensor | Correcta | Parcial | Incorrecta |
| Sistema alarma | Funciona | Parcial | Incorrecto |
| Comunicación serie | Funciona | Parcial | Incorrecto |
| Integración | Completa | Parcial | Incorrecta |
| Código | Profesional | Mejorable | Incorrecto |

---

## 🎯 Para pensar (opcional)

> ¿Cómo podrías guardar el umbral en memoria EEPROM para que no se pierda al apagar Arduino?
