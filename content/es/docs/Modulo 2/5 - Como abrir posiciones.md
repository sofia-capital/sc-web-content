---
linktitle: "Cómo abrir posiciones"
title: "Cómo abrir posiciones"
slug: "como-abrir-posiciones"
weight: 5
prev: /docs/Modulo 2/4 - Cambio de divisa.md
next: /docs/Modulo 2/6 - Como cerrar una posición.md
---

Existen varias formas de abrir posiciones:

1. Desde la lista de seguimiento (recomendada por precisión).
2. Desde **Negociación → Ticket de la orden** (explicada a continuación).

### Desde Negociación -> Ticket de la orden

![IBKR Ticket de orden](/images/M2/D5/ES-M2-D5-Ticket-orden.png)

Dentro del ticket de la orden, selecciona el ticker.

1. Escribe: **GOOGL** y presiona **Enter**.

![IBKR Ticket Orden GOOGL](/images/M2/D5/ES-M2-D5-Ticket-orden-GOOGL.png)

2. Selecciona **NASDAQ – Acción**.

![IBKR Ticket Orden GOOGL - Acción](/images/M2/D5/ES-M2-D5-Ticket-orden-GOOGL-parte2.png)

Verás la siguiente pantalla, con un gráfico y la configuración necesaria para abrir la orden:

![IBKR GOOGL Gráfico](/images/M2/D5/ES-M2-D5-Grafico-GOOGL.png)

- **Acción:** Comprar o Vender
- **Cantidad:** Podemos elegir entre:
  - **Shares:** Compra de acciones completas (a tu nombre) o fraccionadas (a nombre de IBKR).
  - **USD:** Compra por importe, lo que puede generar acciones fraccionadas. Recuerda, estas acciones no están a tu nombre sino a nombre del bróker, por lo que si quiebra, el regulador venderá tus acciones fraccionadas a precio de mercado. Hay un riesgo de perder tus acciones fraccionadas.
- **Tipo de orden:** Elige el que mejor se adapte a tu estrategia


### Tipos de orden principales

{{< callout type="warning" >}}
  Es fundamental comprender los siguientes parámetros para evitar errores y pérdidas.
{{< /callout >}}

Página web de IBKR que explica todos los tipos de orden que proporcionan a sus clientes: https://www.interactivebrokers.com/es/trading/ordertypes.php

Te explico a continuación los tipos de órdenes que personalmente utilizo.

#### Tipo de orden: Límite

![IBKR Tipo orden límite](/images/M2/D5/ES-M2-D5-Tipo-orden-limite.png)

Permite comprar o vender un activo a un precio específico. Prioriza el control del precio sobre la ejecución inmediata. Te permite tener un control total sobre el precio máximo (compra) o mínimo (venta).

**Parámetros específicos:**

- **Precio límite:** precio con el que quieres que se ejecute la operación.
- **Tiempo de vigencia:** tiempo que durará abierta la orden de compra o venta.
  - **GTC** (Good Til Canceled): Válida hasta su cancelación, normalmente hasta que la compañía presenta resultados. Tiempo aproximado de validez 3 meses.
  - **A la apertura:** solo se ejecuta al abrir el mercado.
  - **Día:** La orden sigue vigente solo durante la jornada actual.
- **Fuera HNR:** Operar fuera de horario normal de mercado.
- **ALL_OR_NONE:** Todo o nada, según el volumen.
- **Algoritmo de gestión de precios:** IBKR aplica controles automáticos para evitar errores y manipulación. Puedes activarlo si lo consideras necesario.

#### Tipo de orden: MidPrice (con el logo de IBKR)

![IBKR Tipo orden MidPrice](/images/M2/D5/ES-M2-D5-Tipo-orden-midprice.png)

Busca ejecutarse en el punto medio entre el precio de compra (Bid) y venta (Ask), minimizando el coste del spread.

**Parámetros específicos:**

- Precio Límite
- Tiempo de vigencia
- ALL_OR_NONE

#### Tipo de orden: Mercado

![IBKR Tipo orden mercado](/images/M2/D5/ES-M2-D5-Tipo-orden-mercado.png)

Orden simple para comprar o vender al precio disponible en ese momento. Solo recomendable en situaciones de alta liquidez o necesidad de rapidez.

**Parámetros:**

- Tiempo de vigencia
- ALL_OR_NONE

### Ejemplo práctico: cómo abrir una orden paso a paso

- **Acción:** Comprar
- **Cantidad:** 100 – Shares
- **Tipo de orden:** Límite
- **Precio Límite:** 184
- **Tiempo de vigencia:** Válida hasta su cancelación
- **Fuera HNR:** No
- **ALL_OR_NONE:** No

![IBKR Ejemplo práctico](/images/M2/D5/ES-M2-D5-Ejemplo-practico.png)

Selecciona **"No utilizar"** para el algoritmo de gestión de precios.

![IBKR Ejemplo práctico - parte 2](/images/M2/D5/ES-M2-D5-Ejemplo-practico-parte2.png)

> **Nota:** Mensaje informativo de cómo activar el algoritmo de gestión de precios, en caso de que desees utilizarlo.

![IBKR Ejemplo práctico - parte 3](/images/M2/D5/ES-M2-D5-Ejemplo-practico-parte3.png)

Una vez presentada, la orden quedará pendiente de ejecución.

![IBKR Ejemplo práctico - parte 4](/images/M2/D5/ES-M2-D5-Ejemplo-practico-parte4.png)

Puedes consultar el estado de la orden accediendo a: **Negociación → Órdenes y transacciones**.

![IBKR Ejemplo práctico - parte 5](/images/M2/D5/ES-M2-D5-Ejemplo-practico-parte5.png)

En este apartado podrás visualizar la orden recién creada y su estado actual.

![IBKR Ejemplo práctico - parte 6](/images/M2/D5/ES-M2-D5-Ejemplo-practico-parte6.png)

Cuando la orden se haya ejecutado, el estado cambiará a **"Filled"** – Ejecutada o Completada:

![IBKR Ejemplo práctico - parte 7](/images/M2/D5/ES-M2-D5-Ejemplo-practico-parte7.png)

> **NOTA:** Solo para este ejemplo, he modificado la orden (precio de compra 186,40$) para que se ajuste al precio del mercado, así la orden se completará más rápido y se cambie el estado a Filled más rápido.

Ahora que la orden se ha ejecutado, podrás consultar las posiciones activas desde: **Cartera -> Positions**.

![IBKR Ejemplo práctico - parte 8](/images/M2/D5/ES-M2-D5-Ejemplo-practico-parte8.png)

> **Nota:** Si no visualizas la posición, prueba hacer clic en **"Actualizar"**.
