---
title: "Diseño de una hoja de trabajo"
layout: single
date: 2025-09-15
excerpt: "Como realizar el diseño de una hoja de trabajo personalizada en KiCad."
toc: true
toc_label: "Índice"
toc_icon: "list"
---

# 📝 Práctica 1 – Creación de una hoja de dibujo personalizada en KiCad

## 🚀 Objetivos
- Familiarizarse con la interfaz de KiCad.
- Personalizar la hoja de dibujo.
- Comprender la importancia de la documentación técnica y la normalización en proyectos electrónicos.

---

## 🧩 Contenidos trabajados
- Configuración inicial de proyectos en KiCad.  
- Creación y edición de plantillas de hoja de dibujo.  
- Introducción de datos de identificación en esquemas: título, autor, fecha, versión, logotipo.  
- Guardado de la plantilla para reutilización en futuros proyectos.  

---

## 💻 Materiales y recursos
- Software **KiCad (versión 7 o superior)**.  
- Logotipo del centro.  

---

## 🧭 Desarrollo de la práctica

### Configurar el editor de hoja de trabajo

1. Abrir **KiCad**.
2. Abrir el **Editor de hoja de trabajo**.
3. Seleccionar el tamaño de hoja y orientación:
	1. Menú **Ver → Configuración de previsualización de página**.
	2. Seleccionar **Tamaño: A4 210x297mm**.
	3. Seleccionar **Orientación: Horizontal**.

### Personalizar la hoja de trabajo

Antes de editar el cajetín de la hoja de trabajo, configura la cuadrícula sobre la que se dibujará:

1. Activa la cuadrícula pulsando el botón **Mostrar cuadrícula**.
2. Utiliza la unidad de medida **Milímetros** pulsando su botón correspondiente.
3. Haciendo click derecho sobre cualquier parte de la hoja de trabajo disminuye el tamaño de la cuadrícula sobre la que trabajarás. Por ejemplo **click derecho → Cuadrícula → 0,5000 mm**.
4. Modificar el cajetín de la hoja de trabajo para conseguir un resultado similar al presentado en la siguiente imagen. 

![Detalle del cajetín](/assets/tpmm/worksheet_detail.png "Detalle del cajetín")

**Las variables de texto que más tarde serán sustituidas por el texto que se indique en cada proyecto, se encuentran definidas de la siguiente forma: ${VARIABLE}.**

### Visualizar la plantilla
Antes de dar por finalizada la plantilla podemos visualizar como quedará una vez rellenemos los campos que hemos preparado:

1. Menú **Ver → Configuración de previsualización de página**.
2. Rellena todos los campos que has dejado preparados en el cajetín:
	1. ${TITLE} → El título que tendrá el esquema.
	2. ${COMPANY} → Aquí aparecerá el nombre de la empresa, en nuestro caso, "IES Laurona".
	3. ${PAPER} → El tamaño del papel, en nuestro caso A4.
	4. ${REVISION} → El número de versión en la que se encuentre el diseño.
	5. %{ISSUE_DATE} → La fecha que indiquemos como entrega.
	6. ${CURRENT_DATE} → Se refresca automáticamente cada vez que se abre la hoja con la fecha actual.
	7. ${KICAD_VERSION} → Versión de KiCad utilizada.
	8. ${SHEETPATH} → Ruta de la hoja actual.
	9. ${FILENAME} → Nombre del archivo.
	10. Id: ${#}/${##} → Indica el número de hoja actual respecto al total de hojas. 
	11. ${COMMENT1} → Aquí indicaremos el nombre del diseñador.
3. Guardar la hoja personalizada como plantilla siguiendo el siguiente formato **_apellido_\_worksheet.kicad_wks**.
4. Comprueba que la plantilla puede aplicarse a cualquier nuevo proyecto y los campos pueden rellenarse según lo esperado.

---

## ✅ Criterios de evaluación

### RA relacionado
- **RA1:** Dibuja esquemas de circuitos electrónicos, interpretando especificaciones de diseño y manejando software específico de CAD electrónico.  

### Criterios de evaluación trabajados
- **a)** Se ha obtenido la información para la realización de los esquemas o planos de las especificaciones de diseño.  
- **b)** Se ha organizado la estructura y recursos que hay que utilizar de acuerdo con el programa de diseño.  
- **i)** Se han identificado los componentes por sus nombres y/o valores (aplicado a la cumplimentación de campos de identificación en la hoja).  
