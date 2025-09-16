---
title: "UP1 - Técnicas de unión y montaje"
layout: single
date: 2025-09-16
excerpt: "Primera unidad del módulo en la que se estudiarán los distintos métodos empleados en la unión y el montaje de elementos mecánicos."
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

**•**&thinsp;Familiarizarse con la interfaz de KiCad.  
**•**&thinsp;Personalizar la hoja de dibujo.  
**•**&thinsp;Comprender la importancia de la documentación técnica y la normalización en proyectos electrónicos.


## 🧩 Contenidos trabajados

**•**&thinsp;Configuración inicial de proyectos en KiCad.  
**•**&thinsp;Creación y edición de plantillas de hoja de dibujo.  
**•**&thinsp;Introducción de datos de identificación en esquemas: título, autor, fecha, versión, logotipo.  
**•**&thinsp;Guardado de la plantilla para reutilización en futuros proyectos.  

## 💻 Materiales y recursos

**•**&thinsp;Software **KiCad (versión 7 o superior)**.  
**•**&thinsp;Logotipo del centro en formato `.png`.

## 🧭 Desarrollo de la práctica

### Configurar el editor de hoja de trabajo

**1.**&thinsp;Abre **KiCad**.  
**2.**&thinsp;Abre el **Editor de hoja de trabajo**.  
**3.**&thinsp;Seleccionar el tamaño de hoja y orientación:  
&thinsp;&thinsp;**-**&thinsp;Abre el menú **Ver** y haz click en **Configuración de previsualización de página**.  
&thinsp;&thinsp;**-**&thinsp;Selecciona: **Tamaño: A4 210x297mm**.  
&thinsp;&thinsp;**-**&thinsp;Selecciona: **Orientación: Horizontal**.

### Personalizar la hoja de trabajo

Antes de editar el cajetín de la hoja de trabajo, configura la cuadrícula sobre la que se dibujará:

**1.**&thinsp;Activa la cuadrícula pulsando el botón **Mostrar cuadrícula**.  
**2.**&thinsp;Utiliza la unidad de medida **Milímetros** pulsando su botón correspondiente.  
**3.**&thinsp;Haciendo click derecho sobre cualquier parte de la hoja de trabajo disminuye el tamaño de la cuadrícula sobre la que trabajarás. Por ejemplo **click derecho → Cuadrícula → 0,5000 mm**.  
**4.**&thinsp;Modifica el cajetín de la hoja de trabajo para conseguir un resultado similar al presentado en la siguiente imagen. 

![Detalle del cajetín](/assets/tpmm/worksheet_detail.png "Detalle del cajetín")

>**Nota:**
>Las variables de texto que más tarde serán sustituidas por el texto que se indique en cada archivo, se encuentran definidas entre los símbolos `${` `}` de la siguiente forma: `${VARIABLE}`.
{: .notice--warning}

### Visualizar la plantilla

Antes de dar por finalizada la plantilla podemos visualizar como quedará una vez rellenemos los campos que hemos preparado:

**1.**&thinsp;Abre el menú **Ver** y haz click en **Configuración de previsualización de página**.  
**2.**&thinsp;Rellena todos los campos que has dejado preparados en el cajetín:  
&thinsp;&thinsp;**-**&thinsp;${TITLE} → El título que tendrá el esquema.  
&thinsp;&thinsp;**-**&thinsp;${COMPANY} → Aquí aparecerá el nombre de la empresa, en nuestro caso, "IES Laurona".  
&thinsp;&thinsp;**-**&thinsp;${PAPER} → El tamaño del papel, en nuestro caso A4.  
&thinsp;&thinsp;**-**&thinsp;${REVISION} → El número de versión en la que se encuentre el diseño.  
&thinsp;&thinsp;**-**&thinsp;${ISSUE_DATE} → La fecha que indiquemos como entrega.  
&thinsp;&thinsp;**-**&thinsp;${CURRENT_DATE} → Se refresca automáticamente cada vez que se abre la hoja con la fecha actual.  
&thinsp;&thinsp;**-**&thinsp;${KICAD_VERSION} → Versión de KiCad utilizada.  
&thinsp;&thinsp;**-**&thinsp;${SHEETPATH} → Ruta de la hoja actual.  
&thinsp;&thinsp;**-**&thinsp;${FILENAME} → Nombre del archivo.  
&thinsp;&thinsp;**-**&thinsp;Id: ${#}/${##} → Indica el número de hoja actual respecto al total de hojas.  
&thinsp;&thinsp;**-**&thinsp;${COMMENT1} → Aquí indicaremos el nombre del diseñador.  
**3.**&thinsp;Guarda la hoja personalizada como plantilla siguiendo el siguiente formato `_apellido_\_worksheet.kicad_wks`.  
**4.**&thinsp;Comprueba que la plantilla puede aplicarse a cualquier nuevo proyecto y los campos pueden rellenarse según lo esperado.

## ✅ Criterios de evaluación

| Resultados de aprendizaje | Criterios de evaluación |
|----------------|----------------------------------|
| **RA1:** Dibuja esquemas de circuitos electrónicos, interpretando especificaciones de diseño y manejando software específico de CAD electrónico. | **a)** Se ha obtenido la información para la realización de los esquemas o planos de las especificaciones de diseño.<br>**b)** Se ha organizado la estructura y recursos que hay que utilizar de acuerdo con el programa de diseño.<br>**i)** Se han identificado los componentes por sus nombres y/o valores (aplicado a la cumplimentación de campos de identificación en la hoja). |
