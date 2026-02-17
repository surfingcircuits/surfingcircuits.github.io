---
title: "P10 - Proyecto final: Sistema embebido multitarea con interfaz serie, RGB y 74HC595"
layout: single
date: 2026-17-02
excerpt: "Desarrollarás un sistema embebido completo multitarea que integra sensores, interfaz serie, LED RGB, buzzer y expansión de salidas mediante 74HC595, utilizando una arquitectura modular y máquina de estados."
platform: arduino
# Table of contents - shown in right side
toc: true
toc_label: "Índice"
toc_icon: "list"
toc_sticky: true
---

## 🧠 P10 - Proyecto final: Sistema embebido multitarea completo

>ℹ️ **Empieza aquí:**
>
> En este proyecto final desarrollarás un **sistema embebido completo**, integrando todos los conceptos del curso.
>
> El sistema será capaz de:
>
> • Monitorizar la luz ambiente  
> • Mostrar estados mediante múltiples LEDs  
> • Generar señales acústicas  
> • Mostrar información mediante LED RGB  
> • Controlarse mediante comandos serie  
> • Ejecutar múltiples tareas simultáneamente
>
> Este tipo de arquitectura es representativa de **equipos médicos reales**, **instrumentación** y **sistemas industriales**.
{: .notice--info}

---

## 🚀 Objetivos

**•**&thinsp;Integrar todos los componentes del curso en un único sistema.  
**•**&thinsp;Implementar arquitectura multitarea no bloqueante.  
**•**&thinsp;Utilizar máquina de estados.  
**•**&thinsp;Implementar interfaz de comandos serie.  
**•**&thinsp;Controlar múltiples salidas mediante 74HC595.  
**•**&thinsp;Controlar LED RGB mediante PWM.  
**•**&thinsp;Desarrollar código estructurado profesional.  

---

## 🧩 Contenidos trabajados

**•**&thinsp;Arquitectura multitarea con millis()  
**•**&thinsp;Máquinas de estados  
**•**&thinsp;Comunicación serie avanzada  
**•**&thinsp;PWM  
**•**&thinsp;Expansión de salidas  
**•**&thinsp;Arquitectura modular  

---

## 💻 Materiales y recursos

**•**&thinsp;Arduino UNO  
**•**&thinsp;Protoboard  
**•**&thinsp;1 LDR  
**•**&thinsp;1 LED RGB  
**•**&thinsp;1 buzzer  
**•**&thinsp;1 registro 74HC595  
**•**&thinsp;8 LEDs  
**•**&thinsp;Resistencias  
**•**&thinsp;Cables  
**•**&thinsp;Arduino IDE  

---

## 🔧 Montaje práctico

Utilizar montajes de prácticas anteriores:

**LDR**

A0

**RGB**

9, 10, 11

**Buzzer**

Pin 8

**74HC595**

Data → 2  
Latch → 3  
Clock → 4  

---

## 🧭 Arquitectura del sistema

El sistema tendrá 4 módulos:

**•**&thinsp;Sensor  
**•**&thinsp;Interfaz serie  
**•**&thinsp;Indicadores  
**•**&thinsp;Alarmas  

---

## 📄 Código completo

```cpp
int pinLDR = A0;

int pinBuzzer = 8;

int pinRGB[3] = {9,10,11};

int dataPin = 2;  
int latchPin = 3;  
int clockPin = 4;

int umbral = 500;

unsigned long tSensor = 0;  
unsigned long tLED = 0;  
unsigned long tRGB = 0;

int valorLuz = 0;

byte patron = 0;

int brillo = 0;  
int dir = 1;  
int color = 0;

void setup(){

Serial.begin(9600);

pinMode(pinBuzzer,OUTPUT);

for(int i=0;i<3;i++)  
pinMode(pinRGB[i],OUTPUT);

pinMode(dataPin,OUTPUT);  
pinMode(latchPin,OUTPUT);  
pinMode(clockPin,OUTPUT);

}

void loop(){

leerSensor();

actualizarLEDs();

actualizarRGB();

actualizarSerie();

}

void leerSensor(){

if(millis()-tSensor>500){

tSensor=millis();

valorLuz=analogRead(pinLDR);

Serial.println(valorLuz);

}

}

void actualizarLEDs(){

if(millis()-tLED>200){

tLED=millis();

digitalWrite(latchPin,LOW);

shiftOut(dataPin,clockPin,MSBFIRST,patron);

digitalWrite(latchPin,HIGH);

patron++;

}

}

void actualizarRGB(){

if(millis()-tRGB>20){

tRGB=millis();

brillo+=dir;

if(brillo>=255){dir=-1;}

if(brillo<=0){

dir=1;

color++;

if(color>2)color=0;

}

analogWrite(pinRGB[0],0);  
analogWrite(pinRGB[1],0);  
analogWrite(pinRGB[2],0);

analogWrite(pinRGB[color],brillo);

}

}

void actualizarSerie(){

if(Serial.available()){

int nuevo=Serial.parseInt();

if(nuevo>0){

umbral=nuevo;

}

}

if(valorLuz<umbral){

digitalWrite(pinBuzzer,HIGH);

}

else{

digitalWrite(pinBuzzer,LOW);

}

}
```

---

## ✅ Funcionamiento esperado

El sistema ejecuta simultáneamente:

• Lectura sensor  
• Animación LEDs  
• Animación RGB  
• Comunicación serie  
• Alarma  

---

## 📦 Entrega

**•**&thinsp;Código completo  

**•**&thinsp;Vídeo  

**•**&thinsp;Explicación arquitectura  

---

## 📊 Rúbrica

| Criterio | Excelente | Adecuado | Insuficiente |
|---|---|---|---|
| Arquitectura | Profesional | Parcial | Incorrecta |
| Multitarea | Correcta | Parcial | Incorrecta |
| Integración | Completa | Parcial | Incorrecta |
| Código | Profesional | Mejorable | Incorrecto |
| Funcionamiento | Correcto | Parcial | Incorrecto |

---

## 🎓 Resultado final del curso

Has aprendido:

**•**&thinsp;Programación profesional Arduino  
**•**&thinsp;Arquitectura sistemas embebidos  
**•**&thinsp;Interfaces  
**•**&thinsp;Sensores  
**•**&thinsp;Actuadores  
**•**&thinsp;Multitarea  

---

## 🚀 Nivel alcanzado

Nivel equivalente a:

**Programador junior sistemas embebidos**

---

## 🎯 Ampliación opcional

> Añadir almacenamiento EEPROM  
>
> Añadir menú interactivo completo
>
> Añadir protocolo comunicación estructurado
