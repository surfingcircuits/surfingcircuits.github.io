---
title: "P03 - Diseño jerárquico de un esquema con LEDs"
layout: single
date: 2025-09-29
excerpt: "Diseño de un esquema electrónico jerárquico en KiCad con LEDs de distintos colores, cálculo de sus resistencias y uso de etiquetas."
# Table of contents - shown in right side
toc: true
toc_label: "Índice"
toc_icon: "list"
toc_sticky: true
---

>ℹ️ **Empieza aquí:**  
>  
> En esta práctica diseñarás tu primer esquema electrónico funcional organizado de forma jerárquica en KiCad.  
> Representarás varios LEDs de diferentes colores, cada uno conectado a una tensión distinta, calculando sus resistencias limitadoras.  
> Además, aprenderás a documentar los cálculos directamente en el esquema, a introducir conectores de alimentación en una hoja jerárquica separada, y a añadir un condensador de desacoplo para mejorar la estabilidad de las alimentaciones.  
{: .notice--info}

## 🚀 Objetivos

**•**&thinsp;Diseñar un esquema electrónico jerárquico con varias hojas organizadas.  
**•**&thinsp;Introducir conectores de pines como entrada de alimentación.  
**•**&thinsp;Realizar y documentar cálculos de resistencias para LEDs de diferentes colores.  
**•**&thinsp;Aplicar un condensador de desacoplo en la línea de alimentación.  
**•**&thinsp;Verificar el esquema con ERC y generar un esquema limpio y profesional.  

## 🧩 Contenidos trabajados

**•**&thinsp;Creación y gestión de hojas jerárquicas.  
**•**&thinsp;Inserción de conectores de pines como elementos de entrada de alimentación.  
**•**&thinsp;Cálculo de resistencias limitadoras y anotación de resultados en el esquema.  
**•**&thinsp;Uso de condensadores de desacoplo en líneas de alimentación.  
**•**&thinsp;Organización con etiquetas jerárquicas y globales.  
**•**&thinsp;Anotación automática y comprobación de reglas eléctricas (ERC).  

## 💻 Materiales y recursos

**•**&thinsp;Software **KiCad (versión 7 o superior)**.  
**•**&thinsp;Hoja de trabajo personalizada (Práctica 01).  
**•**&thinsp;Hoja de pruebas de las distintas funciones del editor de esquemas (Práctica 02).  

## 🧭 Desarrollo de la práctica

### 1. Crear la jerarquía

**1.**&thinsp;Crea un nuevo proyecto llamado `P03_LEDs_ApellidoNombre`.  
**2.**&thinsp;En la hoja principal, crea dos subhojas jerárquicas:  
&nbsp;&nbsp;**-**&thinsp;`Alimentaciones`.  
&nbsp;&nbsp;**-**&thinsp;`Iluminación_LED`.  

### 2. Subhoja `Alimentaciones`

**1.**&thinsp;Inserta un **conector de pines de 4 vías** para las tensiones externas (3V3, 5V, 12V y GND).  
**2.**&thinsp;Asigna etiquetas jerárquicas de salida a cada pin.  
**3.**&thinsp;Documenta con un texto la función de este conector: “Entrada de tensiones para LEDs”.  

>💡 **Recuerda:**  
> Al trabajar con jerarquía, debes conectar los pines de salida en esta hoja a pines de entrada en la hoja principal, y de ahí al bloque `Iluminación_LED`.  
{: .notice--info}

### 3. Subhoja `Iluminación_LED`

**1.**&thinsp;Inserta al menos **3 LEDs de colores distintos** (rojo, verde, azul).  
**2.**&thinsp;Conecta cada LED a su alimentación correspondiente (3V3, 5V, 12V) con una resistencia en serie.  
**3.**&thinsp;Coloca una **nota de texto junto a cada resistencia** explicando el cálculo realizado:  
&nbsp;&nbsp;Ejemplo: `R = (5 – 2) / 0.02 = 150 Ω`.  
**4.**&thinsp;Añade un **condensador de desacoplo de 100nF** entre 5V y GND, próximo al nodo de alimentación.  

>⚠️ **Importante:**  
> Los cálculos deben estar claramente visibles en el esquema, no solo en un documento aparte.  
> Esto entrena la documentación técnica en el propio diseño.  
{: .notice--warning}

### 4. Finalización del esquema

**1.**&thinsp;Anota automáticamente todos los componentes (R1, D1, C1, etc.).  
**2.**&thinsp;Ejecuta el **ERC** y corrige las advertencias o errores detectados.  
**3.**&thinsp;Guarda el proyecto con todas las modificaciones realizadas.  
**4.**&thinsp;Entrega el archivo del proyecto junto con una captura de pantalla de la hoja principal y de las subhojas.  

## ✅ Criterios de evaluación

| Resultados de aprendizaje | Criterios de evaluación |
|----------------|----------------------------------|
| **RA1:** Dibuja esquemas de circuitos electrónicos, interpretando especificaciones de diseño y manejando software específico de CAD electrónico. | **c)** Se han establecido jerarquías.<br>**f)** Se han ubicado componentes utilizando librerías.<br>**g)** Se han dibujado alimentaciones y tierras.<br>**h)** Se han dibujado líneas y/o buses de conexión entre los componentes.<br>**i)** Se han identificado los componentes por sus nombres y/o valores.<br>**j)** Se ha verificado que el esquema está libre de violaciones eléctricas. |
| **RA2:** Simula el funcionamiento de circuitos electrónicos, contrastando los resultados obtenidos con las especificaciones y realizando propuestas de mejora. | **b)** Se han comparado los resultados obtenidos (cálculo manual vs valores comerciales).<br>**c)** Se han elaborado propuestas de modificaciones (ej.: variar resistencia y analizar corriente). |
