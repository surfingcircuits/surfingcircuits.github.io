---
title: "F01 - Archivos Gerber, Excellon y flujo de trabajo"
layout: single
date: 2025-11-13
excerpt: "Breve introducción a los archivos Gerber y Excellon y su papel dentro del flujo CAM para la fabricación de PCBs."
# Table of contents - shown in right side
toc: true
toc_label: "Índice"
toc_icon: "list"
toc_sticky: true
---

**UP0 - Fundamentos técnicos y recursos de apoyo**

# Introducción a la fabricación de PCBs y archivos CAM

>ℹ️ **Empieza aquí:**
>
> En esta página se presenta una visión teórica sobre los archivos de fabricación utilizados en la producción de placas de circuito impreso (PCBs).  
> Se explican los conceptos fundamentales sobre los tipos de archivos (Gerber, Excellon, etc.) y cómo se integran en el flujo de trabajo CAM.  
> El objetivo es comprender la función y la estructura de los archivos en el proceso de fabricación.
{: .notice--info}

>⚠️ **Atención:**  
> Las capturas de pantalla y ejemplos provienen de **KiCad 9.0**, pero los conceptos y procedimientos son compatibles desde la versión 7 en adelante.  
> Pueden existir algunas diferencias menores de interfaz entre versiones, pero los pasos funcionales son muy similares.  
> Se recomienda siempre verificar los archivos exportados antes de comenzar su procesado como paso previo a enviarlos a la máquina CNC.
{: .notice--warning}

## 📘 Fundamentos teóricos

Antes de preparar archivos para la fabricación de PCBs, es importante entender algunos conceptos clave que forman la base del flujo de trabajo electrónico hacia el entorno CAM/CNC.

>ℹ️ **Qué es CAM:**  
> CAM (*Computer-Aided Manufacturing*) es el uso de software que traduce un diseño digital en instrucciones de mecanizado y taladrado para máquinas CNC (como fresadoras o tornos).  
> Permite controlar trayectorias, velocidades, secuencias de mecanizado y asegurar la precisión del resultado final.
{: .notice--info}

>ℹ️ **Qué es CNC:**  
> CNC (*Computer Numerical Control*) se refiere a máquinas controladas por ordenador que ejecutan instrucciones numéricas para realizar tareas como fresado, taladrado, corte o perforación con alta precisión.  
> Las instrucciones a seguir por la máquina se basan en los archivos, Gerber y Excellon, generados por el software CAM.
{: .notice--info}

### Archivos Gerber

El formato Gerber es el estándar industrial para describir las capas físicas de una PCB.  
Incluye información sobre:

**•**&thinsp;Capas de cobre (**Top Copper**, **Bottom Copper**)  
**•**&thinsp;Máscara de soldadura (**Solder Mask**)  
**•**&thinsp;Serigrafía o impresiones de referencia (**Silkscreen**)  
**•**&thinsp;Capas mecánicas o de contorno (**Mechanical, Edge Cuts**)  
**•**&thinsp;Capas de pasta para soldadura (**Paste Layer**)  

>**Nota:** Los archivos Gerber **no contienen información eléctrica ni de conexionado**, solo datos gráficos que indican dónde debe eliminarse material (fabricación sustractiva) o añadirse material (fabricación aditiva).
{: .notice--primary}

Cuando se exportan desde KiCad, la extensión típica es `*.gbr`. Cada archivo se diferencia según la capa que representa.  

>⚠️ **Errores comunes al exportar Gerber:**  
> **•**&thinsp;Olvidar incluir una capa (cobre, máscara, serigrafía).  
> **•**&thinsp;Escala incorrecta de la placa.  
> **•**&thinsp;Nombres de archivo confusos o duplicados.  

>💡 Verifica siempre con un visor de archivos Gerber, como el incluido en el propio KiCad, todos los ficheros generados antes de seguir procesándolos.
{: .notice--success}

### Archivos de taladrado (Excellon)

Además de los Gerber, es necesario un archivo adicional que contenga la información de de los taladros que deben realizarse en la PCB. Estos archivos se generan en el formato estándar Excellon, un estándar de la industria para máquinas CNC, y se guardan con la extensión `*.drl`.  

Cada archivo define:

**•**&thinsp;El **diámetro de las brocas** a utilizar  
**•**&thinsp;Las **coordenadas X,Y** de cada perforación  

>⚠️ **Tipos de taladros y precauciones:**  
> **•**&thinsp;**Vías pasantes:** atraviesan toda la placa  
> **•**&thinsp;**Vías ciegas:** conectan solo algunas capas entre sí  
> **•**&thinsp;Respetar la secuencia de taladrado y velocidad recomendada para evitar daños  
> **•**&thinsp;Comprobar que las coordenadas estén dentro de los límites de la placa
{: .notice--info}

>ℹ️ **Importancia:**  
> Este archivo permite que la fresadora CNC ejecute los taladros correctamente, garantizando que las conexiones pasantes y los orificios para componentes sean precisos.
{: .notice--info}

### Flujo general del proceso de fabricación de una PCB

El flujo de trabajo básico para fabricar una PCB en el taller es el siguiente:

1. **Diseño del esquema y del circuito impreso**: realizado previamente en KiCad.  

2. **Exportar los archivos de fabricación**: generando desde KiCad los archivos **Gerber** y **Excellon** para la placa diseñada.  

3. **Generación del archivo LMD**: importando los archivos en **CircuitCAM** y generando el archivo `*.lmd` específico para la máquina CNC de la marca **LPKF**. Este archivo LMD traduce los datos gráficos y de taladrado a instrucciones entendibles directamente por la electrónica de control de la máquina CNC.  

4. **Realización del trabajo en la CNC**: cargando el fichero en el software **BoardMaster** y lanzando el trabajo de fresado y taladrado, después de preparar la placa virgen y posicionarla en el área de trabajo.

### Resumen visual de los archivos

| Tipo de archivo | Extensión | Contenido |
|:---------------:|:---------:|:----------|
| Gerber          | `*.gbr`     | Capas físicas de la PCB (cobre, máscara, serigrafía, borde de la placa) |
| Excellon        | `*.drl`     | Información de taladrado (diámetro y coordenadas) |

>ℹ️ **Resumen final:**  
> Comprender la función de los archivos **Gerber y Excellon** y su integración en el flujo **CAM/CNC** es fundamental para garantizar que la PCB se produzca correctamente y con precisión.  
> Preparar y revisar los archivos cuidadosamente reduce errores y optimiza el tiempo en la máquina.
{: notice--info}
