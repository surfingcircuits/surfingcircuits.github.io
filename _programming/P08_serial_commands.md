---
title: "P08 - Control interactivo mediante el Monitor Serie"
layout: single
date: 2026-02-17
excerpt: "Aprenderás a controlar LEDs y un buzzer enviando comandos desde el Monitor Serie, implementando una interfaz de texto y el procesamiento de comandos en Arduino."
platform: arduino
# Table of contents - shown in right side
toc: true
toc_label: "Índice"
toc_icon: "list"
toc_sticky: true
---

## 💻 P08 - Control interactivo mediante el Monitor Serie

>ℹ️ **Empieza aquí:**
>
> En esta práctica aprenderás a utilizar el **Monitor Serie como interfaz de control**, enviando comandos desde el ordenador al Arduino.  
> Este enfoque es fundamental en sistemas reales, donde los dispositivos se comunican con otros sistemas mediante **protocolos de texto o binarios**.  
> Implementarás un pequeño **intérprete de comandos**, capaz de controlar LEDs y un buzzer según las órdenes recibidas.
{: .notice--info}

---

## 🚀 Objetivos

**•**&thinsp;Utilizar el Monitor Serie como interfaz de usuario.  
**•**&thinsp;Leer datos enviados desde el ordenador.  
**•**&thinsp;Interpretar comandos de texto.  
**•**&thinsp;Controlar salidas en función de comandos recibidos.  
**•**&thinsp;Diseñar sistemas interactivos básicos.  

---

## 🧩 Contenidos trabajados

**•**&thinsp;Comunicación serie (`Serial.begin`, `Serial.read`).  
**•**&thinsp;Recepción de caracteres.  
**•**&thinsp;Interpretación de comandos.  
**•**&thinsp;Control de LEDs y buzzer.  
**•**&thinsp;Interacción usuario-microcontrolador.  

---

## 💻 Materiales y recursos

**•**&thinsp;Arduino UNO.  
**•**&thinsp;Protoboard.  
**•**&thinsp;2 LEDs.  
**•**&thinsp;2 resistencias (220–330 Ω).  
**•**&thinsp;1 buzzer activo.  
**•**&thinsp;Cables Dupont.  
**•**&thinsp;Arduino IDE.  

---

## 🔧 Montaje práctico

Conecta:

**LED verde**

• Ánodo → pin 8  
• Cátodo → resistencia → GND  

**LED rojo**

• Ánodo → pin 9  
• Cátodo → resistencia → GND  

**Buzzer**

• Positivo → pin 10  
• Negativo → GND  

---

## 🧭 Desarrollo de la práctica

### Paso 1: Crear el proyecto

Crear proyecto:

P08_Control_Serie_ApellidoNombre

---

### Paso 2: Configurar comunicación serie

```cpp
void setup() {

  pinMode(8, OUTPUT);  
  pinMode(9, OUTPUT);  
  pinMode(10, OUTPUT);  

  Serial.begin(9600);  

  Serial.println("Sistema listo");  
  Serial.println("Comandos disponibles:");  
  Serial.println("V → LED verde");  
  Serial.println("R → LED rojo");  
  Serial.println("B → buzzer");  
  Serial.println("A → apagar todo");  

}
```

---

### Paso 3: Leer comandos

```cpp
void loop() {

  if (Serial.available() > 0) {

    char comando = Serial.read();
```

---

### Paso 4: Interpretar comandos

```cpp
    if (comando == 'V') {

      digitalWrite(8, HIGH);  
      Serial.println("LED verde ON");

    }

    else if (comando == 'R') {

      digitalWrite(9, HIGH);  
      Serial.println("LED rojo ON");

    }

    else if (comando == 'B') {

      digitalWrite(10, HIGH);  
      Serial.println("Buzzer ON");

    }

    else if (comando == 'A') {

      digitalWrite(8, LOW);  
      digitalWrite(9, LOW);  
      digitalWrite(10, LOW);  

      Serial.println("Todo OFF");

    }

  }

}
```

---

## 📄 Código completo

```cpp
void setup() {

  pinMode(8, OUTPUT);  
  pinMode(9, OUTPUT);  
  pinMode(10, OUTPUT);  

  Serial.begin(9600);  

  Serial.println("Sistema listo");  
  Serial.println("Comandos disponibles:");  
  Serial.println("V → LED verde");  
  Serial.println("R → LED rojo");  
  Serial.println("B → buzzer");  
  Serial.println("A → apagar todo");  

}

void loop() {

  if (Serial.available() > 0) {

    char comando = Serial.read();

    if (comando == 'V') {

      digitalWrite(8, HIGH);  
      Serial.println("LED verde ON");

    }

    else if (comando == 'R') {

      digitalWrite(9, HIGH);  
      Serial.println("LED rojo ON");

    }

    else if (comando == 'B') {

      digitalWrite(10, HIGH);  
      Serial.println("Buzzer ON");

    }

    else if (comando == 'A') {

      digitalWrite(8, LOW);  
      digitalWrite(9, LOW);  
      digitalWrite(10, LOW);  

      Serial.println("Todo OFF");

    }

  }

}
```

---

## ✅ Comprobación de funcionamiento

Abrir Monitor Serie.

Seleccionar:

Velocidad: 9600  
Sin salto de línea o "Nueva línea"

Enviar comandos:

V  
R  
B  
A  

Verificar funcionamiento.

---

## 📦 Entrega

**•**&thinsp;Archivo `.ino`  
**•**&thinsp;Captura Monitor Serie  
**•**&thinsp;Vídeo funcionamiento  

---

## 📊 Rúbrica de evaluación

| Criterio | Excelente | Adecuado | Insuficiente |
|---|---|---|---|
| Comunicación serie | Correcta | Parcial | Incorrecta |
| Interpretación | Funciona todo | Parcial | Incorrecto |
| Control hardware | Correcto | Parcial | Incorrecto |
| Código | Claro | Mejorable | Incorrecto |
| Comprensión | Alta | Media | Baja |

---

## 🎯 Para pensar (opcional)

> ¿Cómo podrías enviar comandos completos como "LED ON" en lugar de una sola letra?
