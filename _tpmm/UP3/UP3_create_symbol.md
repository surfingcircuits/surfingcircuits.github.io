---
title: "P03 - Creación de símbolos personalizados"
layout: single
date: 2025-12-15
excerpt: "Diseño símbolos personalizados en KiCad."
# Table of contents - shown in right side
toc: true
toc_label: "Índice"
toc_icon: "list"
toc_sticky: true
---

**UP3 - Personalizando y ampliando KiCad**

>ℹ️ **Empieza aquí:**
>
> En proyectos reales de electrónica no siempre existen símbolos normalizados para todos los componentes que se desean utilizar.  
> Sensores, módulos comerciales o bloques funcionales específicos suelen requerir la creación de símbolos personalizados para poder representarlos correctamente en un esquema.
>
> En esta práctica aprenderás a diseñar un símbolo personalizado en KiCad tomando como ejemplo un sensor de humedad, definiendo correctamente sus pines, propiedades y documentación, y guardándolo en una librería propia del proyecto para su uso posterior.
{: .notice--info}

## 🚀 Objetivos

**•**&thinsp;Comprender la estructura y función de un símbolo electrónico personalizado.  
**•**&thinsp;Crear un símbolo nuevo en el editor de símbolos de KiCad.  
**•**&thinsp;Definir correctamente pines, numeración y tipo eléctrico.  
**•**&thinsp;Crear y utilizar una librería de símbolos propia del proyecto.  
**•**&thinsp;Insertar el símbolo creado en un esquema real y verificarlo mediante ERC.  

## 🧩 Contenidos trabajados

**•**&thinsp;Editor de símbolos de KiCad.  
**•**&thinsp;Creación y gestión de librerías de símbolos de proyecto.  
**•**&thinsp;Definición de pines y tipos eléctricos.  
**•**&thinsp;Documentación básica de símbolos electrónicos.  
**•**&thinsp;Uso del ERC para validación del esquemático.  

## 💻 Materiales y recursos

**•**&thinsp;Software KiCad (versión 7 o superior).  
**•**&thinsp;Datasheet o información técnica básica de un sensor de humedad.  
**•**&thinsp;Plantilla de hoja de trabajo personalizada creada en prácticas anteriores.  

## 🧭 Desarrollo de la práctica

### Crear el proyecto

**1.**&thinsp;Abre KiCad y crea un nuevo proyecto con el nombre:  
&thinsp;&thinsp;**-**&thinsp;`P03_Simbolo_SensorHumedad_ApellidoNombre`.  
**2.**&thinsp;Comprueba que el proyecto utiliza correctamente la plantilla de hoja de trabajo personalizada.

---

### Crear una librería de símbolos propia

**1.**&thinsp;Abre el **Editor de símbolos** desde KiCad.  
**2.**&thinsp;Crea una nueva librería de símbolos asociada al proyecto.  
**3.**&thinsp;Guarda la librería con el nombre:  
&thinsp;&thinsp;**-**&thinsp;`ApellidoNombre_UP3_symbols.kicad_sym`.

>⚠️ **Atención:**  
> No utilices librerías globales. El símbolo debe formar parte del proyecto para garantizar su portabilidad.
{: .notice--warning}

---

### Diseñar el símbolo del sensor de humedad

![Sensor de humedad del suelo](/assets/tpmm/sensor_humedad.jpg "Sensor de humedad del suelo")

**1.**&thinsp;Crea un nuevo símbolo dentro de la librería.  
**2.**&thinsp;Asigna:
&thinsp;&thinsp;**-**&thinsp;Nombre del símbolo (ejemplo: `HUM_SENSOR`).  
&thinsp;&thinsp;**-**&thinsp;Referencia (ejemplo: `SEN`).  
&thinsp;&thinsp;**-**&thinsp;Valor por defecto (opcional).  
**3.**&thinsp;Dibuja el contorno del símbolo utilizando líneas.  
**4.**&thinsp;Organiza el símbolo de forma clara y legible.

>💡 **Consejo:**  
> Representa el sensor como un bloque funcional, no como un componente físico.
{: .notice--info}

---

### Definir los pines del símbolo

**1.**&thinsp;Añade los pines necesarios según la información técnica del sensor:  
&thinsp;&thinsp;**-**&thinsp;VCC  
&thinsp;&thinsp;**-**&thinsp;GND  
&thinsp;&thinsp;**-**&thinsp;DO (salida digital)
&thinsp;&thinsp;**-**&thinsp;AO (salida analógica) 

**2.**&thinsp;Para cada pin, define correctamente:  
&thinsp;&thinsp;**-**&thinsp;Número de pin.  
&thinsp;&thinsp;**-**&thinsp;Nombre.  
&thinsp;&thinsp;**-**&thinsp;Tipo eléctrico (power input, output, passive, etc.).  

>⚠️ **Advertencia:**  
> Una definición incorrecta del tipo eléctrico provocará avisos o errores en el ERC.
{: .notice--warning}

---

### Documentar el símbolo

**1.**&thinsp;Edita las propiedades del símbolo y completa al menos las siguientes filas:  
&thinsp;&thinsp;**-**&thinsp;Hoja de datos: añade un enlace web para consultar el datasheet del sensor. 
&thinsp;&thinsp;**-**&thinsp;Descripción: añade una breve descripción del sensor.  

---

### Usar el símbolo en un esquema

**1.**&thinsp;Abre el editor de esquemas del proyecto.  
**2.**&thinsp;Inserta el símbolo personalizado desde la librería creada.  
**3.**&thinsp;Conecta el sensor a:  
&thinsp;&thinsp;**-**&thinsp;Símbolos de alimentación.  
&thinsp;&thinsp;**-**&thinsp;Un conector o carga simulada.  

**4.**&thinsp;Ejecuta el **ERC** y corrige cualquier aviso o error.

---

### Guardar y entregar

**1.**&thinsp;Guarda el proyecto completo.  
**2.**&thinsp;Entrega en el aula virtual:  
&thinsp;&thinsp;**-**&thinsp;Carpeta completa del proyecto comprimida en `.zip`.  
&thinsp;&thinsp;**-**&thinsp;Captura de pantalla del símbolo dentro del editor de símbolos.  
&thinsp;&thinsp;**-**&thinsp;Captura del esquema donde se utiliza el símbolo.  

## ✅ Criterios de evaluación

| Resultados de aprendizaje | Criterios de evaluación |
|---------------------------|-------------------------|
| **RA1:** Dibuja esquemas de circuitos electrónicos, interpretando especificaciones de diseño y manejando software específico de CAD electrónico. | **b)** Se ha organizado la estructura y recursos que hay que utilizar de acuerdo con el programa de diseño.<br>**d)** Se han editado componentes.<br>**e)** Se han creado componentes personalizados.<br>**i)** Se han identificado los componentes por sus nombres y/o valores. |
