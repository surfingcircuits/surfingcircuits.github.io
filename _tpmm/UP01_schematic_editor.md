---
title: "P02 - Trabajar con el editor de esquemas"
layout: single
date: 2025-09-18
excerpt: "Maquetar una hoja de trabajo en KiCad introduciendo símbolos, imágenes de componentes reales y notas explicativas."
# Table of contents - shown in right side
toc: true
toc_label: "Índice"
toc_icon: "list"
toc_sticky: true
---

>ℹ️ **Empieza aquí:**
>
> Los símbolos electrónicos representan de forma estandarizada los distintos componentes que forman parte de un circuito.  
> Sin embargo, para comprender bien su uso es importante relacionar el símbolo con el componente real y tener en cuenta sus principales características para poder elegir el símbolo que las represente correctamente.  
>
> En esta práctica aprenderás a **maquetar esquemas en KiCad utilizando tu hoja personalizada** e introducir símbolos electrónicos básicos. Además, los acompañarás de imágenes reales y un pequeño cajetín de notas en el que indicar los aspectos más relevantes que no debes olvidar.
{: .notice--info}

## 🚀 Objetivos

**•**&thinsp;Practicar la maquetación de un esquema en KiCad usando la plantilla creada en la práctica anterior.  
**•**&thinsp;Insertar y organizar símbolos electrónicos básicos en un esquema.  
**•**&thinsp;Insertar y organizar imágenes en un esquema.  
**•**&thinsp;Insertar, editar y organizar texto en un esquema.  
**•**&thinsp;Relacionar cada símbolo con la imagen real del componente.  
**•**&thinsp;Documentar las características principales de cada símbolo mediante notas de texto.  

## 🧩 Contenidos trabajados

**•**&thinsp;Cargar una plantilla de hoja personalizada en KiCad.  
**•**&thinsp;Búsqueda, inserción y organización de imágenes de componentes electrónicos.  
**•**&thinsp;Inserción y organización de símbolos electrónicos en un esquema.  
**•**&thinsp;Inserción de notas de texto, organización y edición mediante el editor integrado.  

## 💻 Materiales y recursos

**•**&thinsp;Software **KiCad (versión 7 o superior)**.  
**•**&thinsp;Acceso a Internet para búsqueda de imágenes de componentes.  
**•**&thinsp;Editor de imágenes (opcional, para recortes o ajustes de tamaño).  

## 🧭 Desarrollo de la práctica

### Configurar la hoja

**1.**&thinsp;Abre KiCad y crea un nuevo proyecto con el nombre:  
&thinsp;&thinsp;**-**&thinsp;`P02_Simbolos_ApellidoNombre`.  
**2.**&thinsp;Asegúrate de que en el esquema utilizas tu hoja de trabajo personalizada creada en la práctica anterior. Para ello abre el menú **Archivo** y haz click en **Configuración de página**.    

### Buscar imágenes de componentes

**1.**&thinsp;En Internet, busca imágenes claras (preferiblemente en formato `.png` o `.jpg`) de los siguientes componentes:  
&thinsp;&thinsp;**-**&thinsp;Resistencias.  
&thinsp;&thinsp;**-**&thinsp;Condensadores polarizados y no polarizados.  
&thinsp;&thinsp;**-**&thinsp;Diodo LED.  
&thinsp;&thinsp;**-**&thinsp;Diodo rectificador.  
&thinsp;&thinsp;**-**&thinsp;Circuito integrado (por ejemplo, un `555`).  
**2.**&thinsp;Guarda todas las imágenes en una carpeta llamada `imagenes_componentes` dentro de la carpeta del proyecto.  
**3.**&thinsp;Comprueba que puedes visualizar dicha carpeta y su contenido en el árbol de navegación de los **Archivos de proyecto**.  

>⚠️ **Atención:**  
> Elige imágenes de componentes reales en formato físico (no símbolos electrónicos), ya que el objetivo es diferenciar símbolos y componentes reales asociándolos en el esquema.  
{: .notice--warning}

### Insertar símbolos en KiCad

**1.**&thinsp;En el editor de esquemas, coloca al menos un símbolo de cada tipo de componente (o los necesarios para ilustrar las diferencias entre varias posibilidades) utilizando las librerías estándar de KiCad.  
**2.**&thinsp;Alinea los símbolos de manera ordenada en filas y/o columnas.  

### Relacionar símbolos con imágenes y notas

**1.**&thinsp;Inserta al lado de cada símbolo la imagen real correspondiente.  
&thinsp;&thinsp;**-**&thinsp;Usa la opción `Insertar imagen` en el esquema.  
**2.**&thinsp;Añade un pequeño cajetín de notas junto a cada símbolo, indicando:  
&thinsp;&thinsp;**-**&thinsp;Nombre del componente.  
&thinsp;&thinsp;**-**&thinsp;Principales características (ejemplo: "Resistencia: se opone al paso de la corriente, medida en ohmios. Puede ser de potencia.").  
&thinsp;&thinsp;**-**&thinsp;Alguna aplicación común de dicho componente.  

>💡 **Consejo:**  
> Organiza cada bloque (símbolo + imagen + notas) como si fuera una pequeña ficha de referencia.  
{: .notice--info}

### Guardar y entregar

**1.**&thinsp;Guarda el esquema y realiza una captura de pantalla de tu esquema completo, a continuación cierra el editor de esquemas.  
**2.**&thinsp;Entrega en el aula virtual:  
&thinsp;&thinsp;**-**&thinsp;Carpeta completa del proyecto comprimida en formato `.zip` con el mismo nombre del proyecto.  
&thinsp;&thinsp;**-**&thinsp;Captura de pantalla en formato `.png` o `.jpg`.  

## ✅ Criterios de evaluación

| Resultados de aprendizaje | Criterios de evaluación |
|---------------------------|-------------------------|
| **RA1:** Dibuja esquemas de circuitos electrónicos, interpretando especificaciones de diseño y manejando software específico de CAD electrónico. | **a)** Se ha obtenido la información para la realización de los esquemas o planos de las especificaciones de diseño.<br>**b)** Se ha organizado la estructura y recursos que hay que utilizar de acuerdo con el programa de diseño.<br>**d)** Se han editado componentes.<br>**f)** Se han ubicado componentes utilizando librerías.<br>**i)** Se han identificado los componentes por sus nombres y/o valores. |
