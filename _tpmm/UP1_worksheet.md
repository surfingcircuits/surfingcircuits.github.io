---
title: "P01 - Diseño de una hoja de trabajo"
layout: single
date: 2025-09-15
excerpt: "Como realizar el diseño de una hoja de trabajo personalizada en KiCad."
# Table of contents - shown in right side
toc: true
toc_label: "Índice"
toc_icon: "list"
toc_sticky: true
---

**Práctica 01**

>ℹ️ **Empieza aquí:**
>
> El diseño de esquemas electrónicos no solo consiste en representar circuitos, sino también en documentarlos de manera clara y profesional. Una hoja de trabajo personalizada permite mostrar la información esencial de cada proyecto en todas y cada una de las hojas que lo compongan.  
> 
> En el cajetín de la hoja de trabajo se deben incluir los campos clave del proyecto, como **título**, **autor**, **fecha** y **revisión**, de manera que cada esquema quede correctamente identificado y documentado.
> 
> En esta práctica aprenderás a utilizar el **editor de hojas de trabajo de KiCad** para crear tu propia plantilla, que servirá como base para futuros proyectos. De este modo, además de familiarizarte con la interfaz del editor, comprenderás la importancia de la normalización en el ámbito profesional de la electrónica.
{: .notice--info}

## 🚀 Objetivos

**•**&nbsp;Familiarizarse con la interfaz de KiCad.  
**•**&nbsp;Personalizar la hoja de dibujo.  
**•**&nbsp;Comprender la importancia de la documentación técnica y la normalización en proyectos electrónicos.

## 🧩 Contenidos trabajados

**•**&nbsp;Configuración inicial de proyectos en KiCad.  
**•**&nbsp;Creación y edición de plantillas de hoja de dibujo.  
**•**&nbsp;Introducción de datos de identificación en esquemas: título, autor, fecha, versión, logotipo.  
**•**&nbsp;Guardado de la plantilla para reutilización en futuros proyectos.  

## 💻 Materiales y recursos

**•**&nbsp;Software **KiCad (versión 7 o superior)**.  
**•**&nbsp;Logotipo del centro en formato `.png`.

## 🧭 Desarrollo de la práctica

### Configurar el editor de hoja de trabajo

**1.**&nbsp;Abre **KiCad**.  
**2.**&nbsp;Abre el **Editor de hoja de trabajo**.  
**3.**&nbsp;Seleccionar el tamaño de hoja y orientación:  
&nbsp;&nbsp;**-**&nbsp;Abre el menú **Ver** y haz click en **Configuración de previsualización de página**.  
&nbsp;&nbsp;**-**&nbsp;Selecciona: **Tamaño: A4 210x297mm**.  
&nbsp;&nbsp;**-**&nbsp;Selecciona: **Orientación: Horizontal**.

### Personalizar la hoja de trabajo

Antes de editar el cajetín de la hoja de trabajo, configura la cuadrícula sobre la que se dibujará:

**1.**&nbsp;Activa la cuadrícula pulsando el botón **Mostrar cuadrícula**.  
**2.**&nbsp;Utiliza la unidad de medida **Milímetros** pulsando su botón correspondiente.  
**3.**&nbsp;Haciendo click derecho sobre cualquier parte de la hoja de trabajo disminuye el tamaño de la cuadrícula sobre la que trabajarás. Por ejemplo **click derecho → Cuadrícula → 0,5000 mm**.  
**4.**&nbsp;Modifica el cajetín de la hoja de trabajo para conseguir un resultado similar al presentado en la siguiente imagen. 

![Detalle del cajetín](/assets/tpmm/worksheet_detail.png "Detalle del cajetín")

>**Nota:**
>Las variables de texto que más tarde serán sustituidas por el texto que se indique en cada archivo, se encuentran definidas entre los símbolos `${` `}` de la siguiente forma: `${VARIABLE}`.
{: .notice--warning}

### Visualizar la plantilla

Antes de dar por finalizada la plantilla podemos visualizar como quedará una vez rellenemos los campos que hemos preparado:

**1.**&nbsp;Abre el menú **Ver** y haz click en **Configuración de previsualización de página**.  
**2.**&nbsp;Rellena todos los campos que has dejado preparados en el cajetín:  
&nbsp;&nbsp;**-**&nbsp;${TITLE} → El título que tendrá el esquema.  
&nbsp;&nbsp;**-**&nbsp;${COMPANY} → Aquí aparecerá el nombre de la empresa, en nuestro caso, "IES Laurona".  
&nbsp;&nbsp;**-**&nbsp;${PAPER} → El tamaño del papel, en nuestro caso A4.  
&nbsp;&nbsp;**-**&nbsp;${REVISION} → El número de versión en la que se encuentre el diseño.  
&nbsp;&nbsp;**-**&nbsp;${ISSUE_DATE} → La fecha que indiquemos como entrega.  
&nbsp;&nbsp;**-**&nbsp;${CURRENT_DATE} → Se refresca automáticamente cada vez que se abre la hoja con la fecha actual.  
&nbsp;&nbsp;**-**&nbsp;${KICAD_VERSION} → Versión de KiCad utilizada.  
&nbsp;&nbsp;**-**&nbsp;${SHEETPATH} → Ruta de la hoja actual.  
&nbsp;&nbsp;**-**&nbsp;${FILENAME} → Nombre del archivo.  
&nbsp;&nbsp;**-**&nbsp;Id: ${#}/${##} → Indica el número de hoja actual respecto al total de hojas.  
&nbsp;&nbsp;**-**&nbsp;${COMMENT1} → Aquí indicaremos el nombre del diseñador.  
**3.**&nbsp;Guarda la hoja personalizada como plantilla siguiendo el siguiente formato `_apellido_\_worksheet.kicad_wks`.  
**4.**&nbsp;Comprueba que la plantilla puede aplicarse a cualquier nuevo proyecto y los campos pueden rellenarse según lo esperado.

## ✅ Criterios de evaluación

| Resultados de aprendizaje | Criterios de evaluación |
|----------------|----------------------------------|
| **RA1:** Dibuja esquemas de circuitos electrónicos, interpretando especificaciones de diseño y manejando software específico de CAD electrónico. | **a)** Se ha obtenido la información para la realización de los esquemas o planos de las especificaciones de diseño.<br>**b)** Se ha organizado la estructura y recursos que hay que utilizar de acuerdo con el programa de diseño.<br>**i)** Se han identificado los componentes por sus nombres y/o valores (aplicado a la cumplimentación de campos de identificación en la hoja). |
