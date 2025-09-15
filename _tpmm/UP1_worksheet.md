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

**•** Familiarizarse con la interfaz de KiCad.
**•** Personalizar la hoja de dibujo.
**•** Comprender la importancia de la documentación técnica y la normalización en proyectos electrónicos.

## 🧩 Contenidos trabajados

**•** Configuración inicial de proyectos en KiCad.  
**•** Creación y edición de plantillas de hoja de dibujo.  
**•** Introducción de datos de identificación en esquemas: título, autor, fecha, versión, logotipo.  
**•** Guardado de la plantilla para reutilización en futuros proyectos.  

## 💻 Materiales y recursos

**•** Software **KiCad (versión 7 o superior)**.  
**•** Logotipo del centro en formato `.png`.

## 🧭 Desarrollo de la práctica

### Configurar el editor de hoja de trabajo

**1.** Abre **KiCad**.  
**2.** Abre el **Editor de hoja de trabajo**.  
**3.** Seleccionar el tamaño de hoja y orientación:  
**-** Abre el menú **Ver** y haz click en **Configuración de previsualización de página**.  
**-** Selecciona: **Tamaño: A4 210x297mm**.  
**-** Selecciona: **Orientación: Horizontal**.

### Personalizar la hoja de trabajo

Antes de editar el cajetín de la hoja de trabajo, configura la cuadrícula sobre la que se dibujará:

**1.** Activa la cuadrícula pulsando el botón **Mostrar cuadrícula**.  
**2.** Utiliza la unidad de medida **Milímetros** pulsando su botón correspondiente.  
**3.** Haciendo click derecho sobre cualquier parte de la hoja de trabajo disminuye el tamaño de la cuadrícula sobre la que trabajarás. Por ejemplo **click derecho → Cuadrícula → 0,5000 mm**.  
**4.** Modifica el cajetín de la hoja de trabajo para conseguir un resultado similar al presentado en la siguiente imagen. 

![Detalle del cajetín](/assets/tpmm/worksheet_detail.png "Detalle del cajetín")

>**Nota:**
>Las variables de texto que más tarde serán sustituidas por el texto que se indique en cada archivo, se encuentran definidas entre los símbolos `${` `}` de la siguiente forma: `${VARIABLE}`.
{: .notice--warning}

### Visualizar la plantilla

Antes de dar por finalizada la plantilla podemos visualizar como quedará una vez rellenemos los campos que hemos preparado:

**1.** Abre el menú **Ver** y haz click en **Configuración de previsualización de página**.  
**2.** Rellena todos los campos que has dejado preparados en el cajetín:  
**-** ${TITLE} → El título que tendrá el esquema.  
**-** ${COMPANY} → Aquí aparecerá el nombre de la empresa, en nuestro caso, "IES Laurona".  
**-** ${PAPER} → El tamaño del papel, en nuestro caso A4.  
**-** ${REVISION} → El número de versión en la que se encuentre el diseño.  
**-** %{ISSUE_DATE} → La fecha que indiquemos como entrega.  
**-** ${CURRENT_DATE} → Se refresca automáticamente cada vez que se abre la hoja con la fecha actual.  
**-** ${KICAD_VERSION} → Versión de KiCad utilizada.  
**-** ${SHEETPATH} → Ruta de la hoja actual.  
**-** ${FILENAME} → Nombre del archivo.  
**-** Id: ${#}/${##} → Indica el número de hoja actual respecto al total de hojas.  
**-** ${COMMENT1} → Aquí indicaremos el nombre del diseñador.  
**3.** Guarda la hoja personalizada como plantilla siguiendo el siguiente formato `_apellido_\_worksheet.kicad_wks`.  
**4.** Comprueba que la plantilla puede aplicarse a cualquier nuevo proyecto y los campos pueden rellenarse según lo esperado.

## ✅ Criterios de evaluación

| Resultados de aprendizaje | Criterios de evaluación |
|----------------|----------------------------------|
| **RA1:** Dibuja esquemas de circuitos electrónicos, interpretando especificaciones de diseño y manejando software específico de CAD electrónico. | **a)** Se ha obtenido la información para la realización de los esquemas o planos de las especificaciones de diseño.<br>**b)** Se ha organizado la estructura y recursos que hay que utilizar de acuerdo con el programa de diseño.<br>**i)** Se han identificado los componentes por sus nombres y/o valores (aplicado a la cumplimentación de campos de identificación en la hoja). |
