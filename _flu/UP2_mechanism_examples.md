---
title: "P02 - Problemas resueltos de cálculos mecánicos"
layout: single
date: 2025-09-16
excerpt: "Ejercicios de ejemplo de cálculos mecánicos, de transformación y transmisión de movimiento, y su relación con el control de un motor asociado."
# Table of contents - shown in right side
toc: true
toc_label: "Índice"
toc_icon: "list"
toc_sticky: true
---

**UP2 - Mecanismos y transmisión de movimiento**

>ℹ️ **Empieza aquí:**
>
> La transmisión y transformación del movimiento son la base de muchos sistemas mecánicos. Aquí encontrarás problemas resueltos basados en ejemplos prácticos que muestran cómo se aplican estos principios en mecanismos reales. A través de los problemas también analizarás el control que se lleva a cabo sobre los motores que mueven cada sistema.
>
> A través de estos casos podrás analizar el funcionamiento de los mecanismos, comprender sus relaciones de movimiento y visualizar cómo se emplean en distintos contextos técnicos.  
{: .notice--info}

## PR01: Cinta transportadora de cajas

![Cinta transportadora con cajas](/assets/flu/cinta_cajas.png "Detalle de la cinta transportadora del PR01.")

**PR01)** En una cinta transportadora de 2 metros de longitud, como la de la imagen, se coloca una nueva caja cada 20 segundos y la cinta se encarga de desplazarlas hacia la rampa. Las cajas tienen una anchura de 40 centímetros. Los rodillos que desplazan la cinta transportadora tienen un diámetro de 10 centímetros. El motor que mueve la cinta es un motor paso a paso, con un ángulo de giro por paso de 1,8º.

**PR01.a)** Calcula la velocidad de giro del motor, en nº de pasos por segundo, para que haya una única caja a la vez sobre la cinta transportadora.

**PR01.b)** Las cajas caen por una rampa al final de la cinta donde un operario las recoge y las apila en un palé. Cuando el palé se llena, el operario debe esperar a que una carretilla lo recoja y traiga uno vacío. Calcula el tiempo en el que se deberá traer el nuevo palé antes de que la cinta transportadora se llene de cajas por completo. *(Las cajas son depositadas sobre la cinta mediante un alimentador automatizado, por lo que debes considerar una distancia de seguridad mínima de 10 centímetros entre caja y caja.)*

**Recopilación de datos del problema:**

| Magnitud                                      | Símbolo | Valor      |
|:----------------------------------------------|:-------:|:----------:|
| Longitud de la cinta                          | l                 | 2 m        |
| Tiempo entre cajas                            | t                 | 20 s       |
| Anchura de las cajas                          | w                 | 40 cm      |
| Diámetro de los rodillos                      | D                 | 10 cm      |
| Ángulo por paso del motor                     | α                 | 1,8 º      |
| Distancia de seguridad mínima entre cajas     | d<sub>mín</sub>   | 10 cm      |

### Resolución del PR01.a

**Paso 1**: Calcular el avance de la cinta por cada revolución del rodillo. El perímetro del rodillo determina cuánto avanza la cinta en una revolución completa:

$P = \pi \cdot D = \pi \cdot 10 \approx 31,416 \text{cm/rev}$

Por cada vuelta completa del rodillo la cinta se desplazará **31,42 cm**.

**Paso 2**: Calcular la velocidad lineal a la que debe desplazarse la cinta para que haya una sola caja sobre ella. La velocidad de avance debe ser:

$v = \frac{l}{t} = \frac{200\ \text{cm}}{20\ \text{s}} = 10\ \text{cm/s}$

**Paso 3**: Calcular las revoluciones por segundo del rodillo teniendo en cuenta que cada revolución mueve la cinta \(P\) cm, así que el número de revoluciones por segundo es:

$\text{rps} = \frac{v}{C} = \frac{10}{31,416} \approx 0,318\ \text{rev/s}$

**Paso 4**: Obtener el número de pasos por segundo necesarios, calculando para ello primero el número de pasos necesarios para que el motor complete una vuelta.

El motor gira un ángulo de \(\alpha = 1,8^\circ\) por cada paso, por lo que cada revolución completa requiere:

$\text{pasos/rev} = \frac{360^\circ}{\alpha} = \frac{360}{1,8} = 200\ \text{pasos/rev}$

Por lo tanto, los pasos por segundo del motor necesarios son:

$\text{pasos/s} = \text{rps} \cdot \text{pasos/rev} = 0,318 \cdot 200 \approx 63,6$

**Resultado**:

Debido a que el motor debe girar un número entero de pasos, deberá escogerse la cifra inmediatamente superior para garantizar que la cinta se haya desplazado lo suficiente.

***La velocidad de giro del motor para que solo haya una caja sobre la cinta a la vez debe ser de***:

$\boxed{\text{Velocidad del motor} = 64\ \text{pasos/s}}$

### Resolución del PR01.b

## PR02: Extrusor indirecto de impresora 3D

## PR03: Bomba de infusión de jeringa

## PR04: *Slider* motorizado para cámara

![Slider motorizado para cámara](/assets/flu/adafruit_slider.jpg "Slider motorizado para cámara del PR04.")

**PR04)** En la web de Adafruit hemos encontrado este [proyecto](https://learn.adafruit.com/circuitpython-motorized-camera-slider/overview) en el que se ha construido con piezas impresas en 3D un *slider* motorizado para una cámara. Dicho *slider* tiene un recorrido máximo de 1 m y está movido por un motor paso a paso. La transmisión es por correa dentada y poleas GT2. La polea motriz (unida al eje del motor paso a paso) tiene 20 dientes; la correa tiene un paso de 2 mm (es decir, cada diente equivale a 2 mm sobre la circunferencia). El motor paso a paso es de 200 pasos/revolución y en el control electrónico se puede llegar a implementar un *microstepping* de hasta 1/16.

**PR04.a)** Calcula la distancia que recorrerá el motor con cada paso, sin utilizar *microstepping*.

**PR04.b)** Calcula la distancia que recorrerá el motor con cada micropaso si se utiliza un *microstepping* de 1/16.

**PR04.c)** ¿Cuántos micro pasos deberá moverse el motor si se debe desplazar la cámara 500 mm?

**PR04.d)** Para hacer un time-lapse con una duración de 2 minutos mientras la cámara se desplaza esos 500 mm, ¿cuántos micro pasos por segundo deberá enviar la electrónica de control al motor?

## Recopilación de datos del problema:

| Magnitud                                              | Símbolo |      Valor      |
|:------------------------------------------------------|:-------:|:---------------:|
| Recorrido máximo del *slider*                         |    L    |       1 m       |
| Paso de la correa GT2                                 |    p    |      2 mm       |
| Número de dientes de la polea motriz                  |    N    |  20 dientes     |
| Pasos por revolución del motor paso a paso            |    P    | 200 pasos/rev   |
| Microstepping máximo disponible                       |    μ    |      1/16       |

### Resolución del PR04.a

**Paso 1**: Calcular el avance lineal de la correa por cada revolución de la polea motriz.  
La correa GT2 tiene un paso de $p = 2\ \text{mm}$ y la polea tiene $N = 20$ dientes, por lo que el avance por revolución será:

$P_{\text{rev}} = N \cdot p = 20 \cdot 2 = 40\ \text{mm}$

Es decir, por cada vuelta completa la correa avanza **40 mm (4 cm)**.

**Paso 2**: Calcular la distancia recorrida por cada paso del motor sin microstepping.  
El motor paso a paso es de $200$ pasos por revolución, así que:

$\text{distancia/step} = \frac{P_{\text{rev}}}{200} = \frac{40\ \text{mm}}{200} = 0.2\ \text{mm}$

**Resultado**:

***La distancia que recorrerá el motor en cada paso (sin microstepping) es:***

$\boxed{\text{Avance lineal por paso} = 0.2\ \text{mm}}$

### Resolución del PR04.b

**Paso 1**: Partimos de la distancia por paso completa (sin microstepping), calculada en el apartado anterior:

$d_{\text{paso}} = 0.2\ \text{mm}$

**Paso 2**: Calcular la distancia recorrida por cada micropaso usando microstepping de $1/16$.  
Un micropaso equivale a dividir un paso completo en 16 partes:

$d_{\text{micropaso}} = \frac{d_{\text{paso}}}{16} = \frac{0.2\ \text{mm}}{16} = 0.0125\ \text{mm}$

**Resultado**:

***La distancia que recorrerá el motor con cada micropaso (microstepping 1/16) es:***

$\boxed{\text{Avance lineal por micropaso} = 0.0125\ \text{mm}}$

### Resolución del PR04.c

**Paso 1**: Partimos de la distancia por micropaso obtenida en el apartado anterior:

$d_{\text{micropaso}} = 0.0125\ \text{mm}$

**Paso 2**: Calcular cuántos micropasos son necesarios para recorrer $$500\ \text{mm}.$

El número de micropasos será:

$N = \frac{500\ \text{mm}}{0.0125\ \text{mm/micropaso}}m= 40\,000\ \text{micropasos}$

**Resultado**:

***Para desplazar la cámara 500 mm el motor deberá moverse:***

$\boxed{40\,000\ \text{micropasos}}$

### Resolución del PR04.d

**Paso 1**: Tomamos los micropasos necesarios para recorrer 500 mm (resultado del apartado anterior):

$N = 40\,000\ \text{micropasos}$

**Paso 2**: Convertimos la duración del *time-lapse* a segundos:

$2\ \text{min} = 120\ \text{s}$

**Paso 3**: Calcular la cantidad de micropasos por segundo:

$\text{micropasos/s} = \frac{N}{t} = \frac{40\,000}{120} = 333.33\ \text{micropasos/s}$

**Resultado**:

***La electrónica deberá enviar aproximadamente:***

$\boxed{333\ \text{micropasos/s}}$
