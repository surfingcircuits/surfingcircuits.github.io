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
