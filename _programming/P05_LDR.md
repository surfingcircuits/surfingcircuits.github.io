---
title: "P05 - Lectura de LDR y visualización en Monitor Serie"
layout: single
date: 2026-02-12
excerpt: "Aprenderás a leer el valor de un LDR con Arduino, convertirlo a niveles de luz y mostrarlo en el Monitor Serie, introduciendo el concepto de entradas analógicas y mapeo de rangos."
platform: arduino
# Table of contents - shown in right side
toc: true
toc_label: "Índice"
toc_icon: "list"
toc_sticky: true
---

## 🌞 P05 - Lectura de LDR y visualización en Monitor Serie

>ℹ️ **Empieza aquí:**
>
> Hasta ahora has controlado LEDs y pulsadores. En esta práctica aprenderás a leer un **sensor de luz (LDR)** mediante entradas analógicas de Arduino, y a **mostrar sus valores en el Monitor Serie** para interpretar la intensidad lumínica.  
> Esto introduce el concepto de **sensores analógicos**, **conversión de rangos** y **visualización de datos** para depuración y análisis.
{: .notice--info}

---

## 🚀 Objetivos

**•**&thinsp;Leer valores analógicos de un LDR.  
**•**&thinsp;Convertir valores analógicos a un rango comprensible (0–100%).  
**•**&thinsp;Visualizar datos en el Monitor Serie en tiempo real.  
**•**&thinsp;Aplicar conceptos de entrada analógica y mapeo de rangos.  
**•**&thinsp;Preparar la base para controlar LEDs o actuadores según la luz ambiente.  

---

## 🧩 Contenidos trabajados

**•**&thinsp;Lectura de entradas analógicas (`analogRead`).  
**•**&thinsp;Uso de `map()` para escalado de valores.  
**•**&thinsp;Monitor Serie (`Serial.begin`, `Serial.println`).  
**•**&thinsp;Temporización no bloqueante con `millis()`.  
**•**&thinsp;Interpretación de datos de sensores.  

---

## 💻 Materiales y recursos

**•**&thinsp;Arduino UNO.  
**•**&thinsp;Protoboard.  
**•**&thinsp;1 LDR.  
**•**&thinsp;1 resistencia de 10 kΩ.  
**•**&thinsp;Cables Dupont.  
**•**&thinsp;Ordenador con Arduino IDE.  

---

## 🔧 Montaje práctico

**1.**&thinsp;Coloca el LDR en la protoboard.  
**2.**&thinsp;Conecta un extremo del LDR a **5V**, el otro extremo al pin analógico **A0** y a través de una resistencia de 10 kΩ a **GND** (configuración de divisor de tensión).  
**3.**&thinsp;Verifica que la conexión es firme y que el pin A0 recibe el voltaje variable según la luz incidente.

---

## 🧭 Desarrollo de la práctica

### Paso 1: Crear el proyecto

**1.**&thinsp;Abrir Arduino IDE.  
**2.**&thinsp;Archivo → Nuevo.  
**3.**&thinsp;Guardar como: `P05_LDR_MonitorSerie_ApellidoNombre`  

---

### Paso 2: Configurar el Monitor Serie

```cpp
void setup() {  
  Serial.begin(9600);
}  
```

---

### Paso 3: Leer el valor del LDR y mapearlo

```cpp
void loop() {  
  int valorLDR = analogRead(A0);
  int porcentajeLuz = map(valorLDR, 0, 1023, 0, 100);

  Serial.print("Valor crudo: ");  
  Serial.print(valorLDR);  
  Serial.print(" | Porcentaje: ");  
  Serial.print(porcentajeLuz);  
  Serial.println("%");  

  delay(200);
}  
```

---

## ✅ Comprobación de funcionamiento

- Abrir el Monitor Serie en Arduino IDE.  
- Observar cómo los valores cambian al variar la luz sobre el LDR.  
- Los valores deben oscilar entre 0 (oscuridad) y 1023 (luz intensa), y el porcentaje entre 0% y 100%.  

---

## 📦 Entrega

**•**&thinsp;Archivo `.ino` comentado y funcional.  
**•**&thinsp;Captura de pantalla del Monitor Serie mostrando los valores cambiantes.  
**•**&thinsp;Breve explicación del mapeo de valores y uso del LDR como sensor de luz.  

---

## 📊 Rúbrica de evaluación

| Criterio | Excelente (9–10) | Adecuado (6–8) | Insuficiente (≤5) |
|--------|------------------|----------------|-------------------|
| Montaje del LDR | Correcto y estable | Funciona parcialmente | Incorrecto |
| Lectura analógica | Valores correctos y consistentes | Lecturas inestables | No funciona |
| Mappeo de valores | Porcentaje correcto y coherente | Parcialmente correcto | No implementado |
| Monitor Serie | Datos claros y actualizados | Parcialmente legible | No utilizado |
| Código y comprensión | Modular, comentado y entendible | Funciona pero confuso | No comprende |

---

## 🎯 Para pensar (opcional)

> ¿Cómo podrías usar los valores de luz para controlar automáticamente la intensidad de un LED o activar un actuador según la iluminación ambiental?
