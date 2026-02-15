---
title: "Recopilación de datos"
slug: "recopilacion-datos"
weight: 2
prev: /docs/Modulo 4/1 - Analisis Contabilidad/2 - Alphabet/1 - Recopilacion datos contables.md
next: /docs/Modulo 4/1 - Analisis Contabilidad/2 - Alphabet/3 - Resumen informacion obtenida.md
---

La mayor parte de las respuestas se encuentran en los ficheros 10-K, llamadas con inversores y otros documentos presentados por la empresa. Para conseguir las respuestas antiguamente había que leer gran cantidad de información generalmente innecesaria, pero ahora puedes ahorrarte eso y utilizar la inteligencia artificial.

Si no quieres utilizar la herramienta de la inteligencia artificial, la única manera de dar respuesta a las preguntas es leyendo todos los documentos.

Ten en cuenta que NotebookLM puede traducir directamente los ficheros a otros idiomas, un punto a favor con bastante peso para muchos.

## Trabajar con Notebook LM

{{< callout type="info" >}}
 Las preguntas realizadas a la inteligencia artificial se llaman prompts
{{< /callout >}}

Este es el enlace de la carpeta de NotebookLM, para que puedas acceder directamente y hacerle las preguntas correspondientes: 

- https://notebooklm.google.com/notebook/58665d02-41fe-4015-8235-21a9e2455a50

Es importante explicar cómo hacer las preguntas de forma correcta para que la inteligencia artificial pueda darte la mejor respuesta.

- **La regla más importante**: ser lo más concretos posible, pero tampoco pasarnos.

   **Ejemplo**: queremos saber si la empresa a analizar tiene ventas orgánicas o inorgánicas, y si se especifica algún tipo de evolución en los documentos.

   En vez de poner solamente:

   - Dime el tipo de ventas (orgánicas o inorgánicas) existentes y su evolución.

   Tienes que realizar la pregunta de la siguiente manera:

   - Analiza todos los documentos y responde de la manera más clara posible: si la empresa tiene ventas orgánicas o inorgánicas, y si especifica algún tipo de evolución.

### ¿Por qué es importante hacer la pregunta correctamente?

La inteligencia artificial no tiene nada de inteligente; suena contradictorio, pero es así. Es un algoritmo matemático diseñado con la capacidad de replicar las conexiones "neuronales". Si lo simplificamos al máximo: imagínate un árbol con muchas ramas —ramas grandes, ramas pequeñas, ramas finas—; cojas la rama que cojas te llevará al tronco, pero puede que no sea la parte del tronco a la que querías llegar, ni tampoco te asegura que sea el camino más corto.

Al darle las instrucciones concretas al algoritmo, te podrá llevar a la parte del tronco (los conocimientos) asegurándose de escoger el camino más corto y preciso.

## Ingresos de la compañía

### Tipo de ventas
- **¿De qué tipo son las ventas? ¿Orgánicas o inorgánicas?** 
  - ¿Es posible conseguir el porcentaje respecto al total?

**Prompt:** 

> Analiza todos los documentos y responde de la manera más clara posible: si la empresa distingue entre ventas orgánicas e inorgánicas; en qué términos lo hace (definiciones, cifras o porcentajes); y si se menciona o se puede inferir alguna evolución de ese tipo de ventas a lo largo del tiempo.

![Alphabet NotebookLM](/images/M4/M1/D2/ES-M4-M1-D2-Alphabet-NotebookLM.png)

{{% details title="Haz clic para leer la respuesta entera" closed="true" %}}

Tras el análisis de los documentos proporcionados, se puede concluir que **Alphabet (la empresa matriz de Google) no utiliza explícitamente los términos "ventas orgánicas" o "ventas inorgánicas"** para desglosar sus ingresos en sus informes financieros del cuarto trimestre de 2025. Sin embargo, la empresa ofrece métricas alternativas y desgloses estratégicos que permiten analizar la naturaleza de su crecimiento.

A continuación, se detalla cómo la empresa aborda estos conceptos según las fuentes:

### 1. Distinción entre ingresos "Core" y efectos externos
En lugar de hablar de crecimiento orgánico o inorgánico, Alphabet distingue entre sus **resultados reportados (GAAP)** y sus resultados en **moneda constante (Non-GAAP)**.
*   **Definición:** La empresa utiliza los ingresos en moneda constante para facilitar la comparación del rendimiento histórico excluyendo el efecto de los movimientos en los tipos de cambio y las actividades de cobertura (hedging), ya que considera que estos factores "no son indicativos de nuestros resultados operativos principales (core)".
*   **Cifras:** En el cuarto trimestre de 2025, los ingresos consolidados crecieron un **18%** (reportado), mientras que en moneda constante el crecimiento fue del **17%**. Para el año completo 2025, tanto el crecimiento reportado como el de moneda constante fue del **15%**.

### 2. Tratamiento de las adquisiciones (Ventas Inorgánicas)
Aunque Alphabet no aísla el porcentaje de ingresos que proviene específicamente de empresas recién adquiridas bajo una etiqueta de "ventas inorgánicas", sí menciona las adquisiciones como una parte fundamental de su estrategia de capital:
*   **Inversiones:** En el estado de flujos de efectivo, la empresa reporta gastos por **"Adquisiciones, neto de efectivo adquirido"**, que ascendieron a **1.592 millones de dólares en 2025** y 2.931 millones en 2024.
*   **Integración:** La empresa aclara que incluye los resultados de las operaciones de los negocios adquiridos a partir de la **fecha de adquisición**.
*   **Evolución futura:** Se mencionan acuerdos definitivos para adquirir **Wiz** (por 32.000 millones de dólares) e **Intersect**, transacciones que se espera cerrar en 2026 y que impactarán el crecimiento futuro, particularmente en el segmento de Google Cloud.

### 3. Motores del crecimiento y evolución temporal
A partir de los documentos, se puede inferir la evolución de las ventas de la siguiente manera:
*   **Crecimiento por Segmentos:** El crecimiento actual está siendo impulsado principalmente por el rendimiento de **Google Cloud** (que creció un **48%** en el trimestre) y **Search** (que creció un **17%**).
*   **Factores impulsores:** La evolución de los ingresos se atribuye a la demanda de **productos de IA** (como Gemini 3), el aumento de suscripciones pagas (325 millones en total) y la mejora en los formatos publicitarios, más que a una estrategia puramente inorgánica de compra de mercado.
*   **Tendencia a largo plazo:** Alphabet señala una tendencia creciente en los ingresos que van **más allá de la publicidad** (nube, suscripciones, dispositivos), los cuales están creciendo a tasas superiores a los ingresos publicitarios y representan una porción cada vez mayor de los ingresos consolidados.

**Resumen:** La empresa evalúa su desempeño basándose en el **crecimiento por segmentos** y el **aislamiento de efectos cambiarios**, considerando las adquisiciones como inversiones para fortalecer su infraestructura técnica y su cartera de productos de IA, pero sin reportar una cifra específica de "venta inorgánica" separada del total operativo.

{{% /details %}}

### Segmentación de ventas

- Segmentación de las ventas según las líneas de negocio
- Segmentación de las ventas según los países
- Segmentación de ventas según clientes, ¿qué porcentaje de ventas proceden del mayor cliente?

**Prompt:** 

> Analiza todos los documentos y responde de la manera más clara posible: la empresa presenta las ventas por segmentos, según las líneas de negocio, países o según sus clientes; si se especifican los clientes, ¿qué porcentaje de ventas proceden del mayor cliente?

![Alphabet NotebookLM Parte 2](/images/M4/M1/D2/ES-M4-M1-D2-Alphabet-NotebookLM-parte2.png)

{{% details title="Haz clic para leer la respuesta entera" closed="true" %}}

Alphabet (la empresa matriz de Google) presenta el desglose de sus ventas utilizando múltiples criterios en sus informes financieros de 2025: por líneas de negocio (segmentos operativos), por tipo de ingresos y por áreas geográficas.

A continuación se detalla cada forma de presentación según los documentos analizados:

### 1. Desglose por Líneas de Negocio (Segmentos Operativos)
La empresa reporta sus resultados financieros basándose en tres segmentos principales:
*   **Google Services:** Incluye productos como anuncios (Search, YouTube, Red de Google), suscripciones (YouTube Premium, Google One), la plataforma Android, la tienda Play Store y dispositivos (Pixel).
*   **Google Cloud:** Incluye los servicios de infraestructura y plataforma de Google Cloud Platform (GCP) y las herramientas de colaboración de Google Workspace.
*   **Other Bets:** Agrupa negocios en etapas iniciales que operan de forma independiente, como Waymo (conducción autónoma) e Isomorphic Labs.

### 2. Desglose Geográfico (Países/Regiones)
Alphabet también presenta sus ingresos divididos por la ubicación de sus clientes en cuatro grandes regiones:
*   **Estados Unidos:** Representó el **48%** de los ingresos en 2025.
*   **EMEA:** Europa, Oriente Medio y África (**29%**).
*   **APAC:** Asia-Pacífico (**17%**).
*   **Otras Américas:** Canadá y Latinoamérica (**6%**).

### 3. Ventas por Clientes
Respecto a la concentración de clientes, la empresa es muy específica en sus estados financieros:
*   **No se especifican nombres de clientes individuales con sus porcentajes de ventas**, ya que la empresa declara explícitamente que **"ningún cliente individual o grupo de clientes afiliados representó más del 10% de nuestros ingresos en 2023, 2024 o 2025"**.
*   Aunque en las llamadas de resultados se mencionan colaboraciones estratégicas con clientes importantes (como Apple, NVIDIA, Mercedes-Benz o Reliance Jio), estas menciones son de carácter comercial y estratégico, no para desglosar porcentajes de facturación específicos.

**En resumen:** La empresa segmenta sus ventas principalmente por sus **unidades operativas de negocio** y por **regiones geográficas**, aclarando que su base de clientes está lo suficientemente diversificada como para que **ningún cliente único aporte más del 10% del total de las ventas**.

{{% /details %}}

### Dinámica de ventas

- **Recurrencia en las ventas, ¿existe el poder de fijación de precios?**
- **¿Existe estacionalidad de ventas a lo largo del año?**

**Prompt:** 

> Analiza todos los documentos y responde de la manera más clara posible: ¿Cuál es la recurrencia en ventas? ¿La empresa tiene poder de fijación de precios? ¿La naturaleza de las ventas señala estacionalidad a lo largo del año?

![Alphabet NotebookLM Parte 3](/images/M4/M1/D2/ES-M4-M1-D2-Alphabet-NotebookLM-parte3.png)

{{% details title="Haz clic para leer la respuesta entera" closed="true" %}}

Basándose en los informes financieros y operativos de Alphabet para 2025, a continuación se analiza la recurrencia, el poder de fijación de precios y la estacionalidad de sus ventas:

### 1. Recurrencia en las ventas
La empresa muestra una **alta y creciente recurrencia** impulsada por dos pilares principales:
*   **Suscripciones de Consumo:** Alphabet cuenta con más de **325 millones de suscripciones pagas** a través de servicios como YouTube Music, YouTube Premium y Google One. Estos ingresos se reconocen de forma prorrateada (ratably) durante el periodo de suscripción, generalmente de forma mensual.
*   **Google Cloud y Workspace:** Este segmento opera bajo un modelo de **tarifas basadas en el consumo y suscripciones**. La empresa reportó una **cartera de pedidos (backlog) de 242.800 millones de dólares**, de los cuales se espera reconocer más del 50% como ingresos en los próximos 24 meses. Además, han vendido más de 8 millones de asientos pagos de Gemini Enterprise en solo cuatro meses.

### 2. Poder de fijación de precios
Alphabet demuestra capacidad para gestionar precios, aunque enfrenta presiones competitivas:
*   **Servicios Empresariales:** En Google Workspace, el crecimiento de los ingresos ha sido impulsado, en parte, por un **incremento en el ingreso promedio por asiento**.
*   **Publicidad:** La empresa tiene **discrecionalidad para establecer precios** en el inventario publicitario de Google Network cuando actúa como principal. No obstante, los ingresos publicitarios dependen de métricas variables como el "coste por clic" y el "coste por impresión", los cuales fluctúan según la competencia entre anunciantes y factores macroeconómicos.
*   **Riesgos y Eficiencia:** La empresa identifica como riesgo la **presión a la baja en los márgenes** debido a la competencia en precios, especialmente en dispositivos. Como contraparte estratégica, Alphabet logró reducir los costes unitarios de servicio de Gemini en un 78% durante 2025 para mantener la competitividad.

### 3. Estacionalidad
La naturaleza de las ventas de Alphabet presenta una **estacionalidad marcada**, especialmente en su negocio principal:
*   **Patrón Publicitario:** Los ingresos por publicidad siguen un **patrón estacional normal**, con una fortaleza particular en el **cuarto trimestre** debido a la temporada de compras navideñas y eventos como el "Cyber 5". El vertical de **Retail** (comercio minorista) es el que mayor contribución aporta en este periodo.
*   **Ciclos Políticos:** Los resultados también se ven afectados por ciclos de mayor duración, como las **elecciones en EE. UU.**; por ejemplo, el crecimiento de YouTube Ads en el cuarto trimestre de 2025 se comparó contra un 2024 inusualmente fuerte debido al gasto electoral.
*   **Lanzamiento de Productos:** Los ingresos por dispositivos y suscripciones también fluctúan según el calendario de lanzamientos de hardware (como la serie Pixel 10) y nuevas ofertas de servicios.

{{% /details %}}

## Márgenes de beneficio de la compañía

**¿Es posible conseguir los márgenes de las diferentes líneas de negocio?** 

**Prompt:** 

> Analiza todos los documentos y responde de la manera más clara posible: ¿La empresa informa sobre los márgenes de las diferentes líneas de negocio?

![Alphabet NotebookLM Parte 4](/images/M4/M1/D2/ES-M4-M1-D2-Alphabet-NotebookLM-parte4.png)

{{% details title="Haz clic para leer la respuesta entera" closed="true" %}}

Sí, la empresa informa detalladamente sobre los **márgenes operativos** de sus principales segmentos de negocio, tanto en sus informes trimestrales como en su reporte anual (Form 10-K).

A continuación se detallan los márgenes reportados para el cierre de 2025:

### 1. Margen por Segmentos de Negocio (Q4 2025)
Alphabet desglosa la rentabilidad de sus tres unidades principales:

*   **Google Services:** Es el segmento más rentable. Reportó un **margen operativo del 41.9%** en el cuarto trimestre de 2025, un incremento respecto al 39.0% del año anterior.
*   **Google Cloud:** Ha mostrado una mejora significativa en su rentabilidad, alcanzando un **margen operativo del 30.1%** en el último trimestre de 2025 (frente al 17.5% en el Q4 de 2024).
*   **Other Bets:** Esta línea de negocio, que incluye proyectos como Waymo, no presenta un margen positivo. Reportó una **pérdida operativa de 3.617 millones de dólares** en el trimestre, impactada en parte por un cargo de compensación basada en acciones de 2.100 millones de dólares relacionado con la valoración de Waymo.

### 2. Margen Consolidado de Alphabet
A nivel global, la empresa reportó un **margen operativo consolidado del 31.6%** para el cuarto trimestre de 2025. Para el año completo 2025, el margen operativo se mantuvo estable en un **32%**.

### 3. Información cualitativa sobre sub-líneas de negocio
Aunque la empresa no proporciona un porcentaje exacto de margen para cada sub-producto (como YouTube por separado o la venta de teléfonos Pixel), sí ofrece precisiones estratégicas en sus documentos:

*   **Publicidad vs. Otros ingresos:** Alphabet señala que los márgenes de los ingresos que no provienen de la publicidad (como la nube, suscripciones y dispositivos) son **generalmente más bajos** que los márgenes de su negocio publicitario tradicional.
*   **Dispositivos (Pixel):** La empresa advierte que los márgenes de sus dispositivos de hardware han tenido, y podrían seguir teniendo, un **efecto adverso en los márgenes consolidados** debido a las presiones de precios y los mayores costes de venta.
*   **Costes de IA:** Se menciona que servir respuestas generadas por IA requiere más capacidad de cómputo, lo que podría presionar las tendencias de los márgenes en el futuro, aunque están trabajando en reducir los costes unitarios (lograron una reducción del 78% en los costes de servicio de Gemini en 2025).

**En conclusión:** Alphabet reporta márgenes operativos específicos para **Google Services** y **Google Cloud**, mientras que para las líneas más pequeñas o en desarrollo como **Other Bets**, informa de las pérdidas operativas totales.

{{% /details %}}

## Salud financiera de la compañía

### Tipo de deuda
- **¿Es posible saber el tipo de deuda?**
  - ¿Es a tipo fijo o variable?
  - ¿Es posible saber a qué tipo de interés está financiada?

**Prompt:** 

> Analiza todos los documentos y responde de la manera más clara posible: ¿es posible saber el tipo de deuda (fijo o variable)? ¿Se especifica el tipo de interés al que se está financiando?

![Alphabet NotebookLM Parte 5](/images/M4/M1/D2/ES-M4-M1-D2-Alphabet-NotebookLM-parte5.png)

{{% details title="Haz clic para leer la respuesta entera" closed="true" %}}

Sí, es posible determinar tanto el tipo de deuda como los tipos de interés específicos mediante el informe anual (Form 10-K) de Alphabet para 2025. La empresa cuenta predominantemente con **deuda a tipo fijo**, aunque también mantiene una porción a **tipo variable (flotante)**.

A continuación se detallan las especificaciones de la financiación según los documentos:

### 1. Deuda a Tipo Fijo
La gran mayoría de los bonos senior no garantizados (*senior unsecured notes*) de Alphabet devengan intereses fijos. Durante 2025, la empresa realizó importantes emisiones en dólares y euros:

*   **Emisiones en Dólares (USD):**
    *   **Mayo 2025:** 5.000 millones de dólares con un tipo de interés medio ponderado del **4,89%**.
    *   **Noviembre 2025:** 17.000 millones de dólares con un tipo medio ponderado del **4,92%**.
*   **Emisiones en Euros (EUR):**
    *   **Mayo 2025:** 6.750 millones de euros con un tipo medio ponderado del **3,31%**.
    *   **Noviembre 2025:** 6.500 millones de euros con un tipo medio ponderado del **3,44%**.
*   **Deuda Anterior:** También mantiene pagarés de emisiones de 2016 y 2020 con tipos fijos que oscilan entre el **0,80% y el 2,25%**.

### 2. Deuda a Tipo Variable (Flotante)
Alphabet emitió una cantidad menor de deuda vinculada a tipos variables en noviembre de 2025:
*   **Monto:** 500 millones de dólares.
*   **Cálculo del interés:** El tipo se basa en el **SOFR compuesto** (*Secured Overnight Financing Rate*) **más un margen del 0,52%**, ajustándose trimestralmente.

### 3. Otras Formas de Financiación
*   **Papel Comercial:** Alphabet dispone de un programa de hasta 25.000 millones de dólares. Al cierre de 2024, el tipo de interés efectivo medio era del **4,4%**, pero al 31 de diciembre de 2025 **no tenía saldo pendiente** en este programa.
*   **Líneas de Crédito Revolvente:** Posee 10.000 millones de dólares en facilidades de crédito no utilizadas, cuyos tipos de interés se determinan mediante fórmulas basadas en tipos de mercado en el momento de su uso.
*   **Arrendamientos Financieros:** El tipo de interés utilizado para valorar estos compromisos es el **tipo de interés incremental** de la empresa, que para 2025 se situó en una media ponderada del **3,1%**.

**En resumen:** Alphabet se financia principalmente a través de bonos a largo plazo con tipos de interés fijos (entre el **3,3% y el 4,9%** para las emisiones más recientes de 2025) y mantiene una exposición mínima a tipos variables a través de una emisión específica de 500 millones de dólares ligada al SOFR.

{{% /details %}}

### Utilización de Deuda
- **¿Es posible saber el uso que le da la empresa a la deuda? ¿Para generar valor o para destruirlo?** 

**Prompt:** 

> Analiza todos los documentos y responde de la manera más clara posible: ¿La empresa especifica si utiliza la deuda para generar valor o para destruirlo (p. ej. reparte dividendos con la deuda o paga dividendos en acciones)?

![Alphabet NotebookLM Parte 6](/images/M4/M1/D2/ES-M4-M1-D2-Alphabet-NotebookLM-parte6.png)

{{% details title="Haz clic para leer la respuesta entera" closed="true" %}}

Alphabet, según sus informes de 2025, no utiliza explícitamente la terminología de "generar o destruir valor" al referirse a su deuda, pero proporciona detalles claros sobre su propósito y cómo remunera a sus accionistas.

A continuación, se responden los puntos específicos de su consulta:

### 1. Propósito de la deuda: ¿Para qué se utiliza?
La empresa indica que utiliza la emisión de deuda principalmente para **"fines corporativos generales"** y para apoyar sus **"necesidades operativas y de capital"**.
*   **Inversión en crecimiento:** Alphabet destaca que su prioridad es invertir en el crecimiento a largo plazo, especialmente en infraestructura técnica para IA y la nube.
*   **Creación de valor:** La dirección menciona específicamente que asigna recursos a proyectos como **Waymo** donde ven "oportunidades significativas para **crear valor**".
*   **Suficiencia operativa:** La empresa subraya que genera un **flujo de caja operativo récord** (164.713 millones de dólares en 2025), el cual es suficiente para cubrir sus actividades operativas, inversiones y compromisos financieros sin depender exclusivamente de la deuda para su funcionamiento básico.

### 2. Política de Dividendos: ¿Deuda o Acciones?
Alphabet es muy clara respecto a cómo paga a sus accionistas:
*   **Dividendos en efectivo:** La empresa paga dividendos **exclusivamente en efectivo**, no en acciones (scrip dividends). En el cuarto trimestre de 2025, declaró un dividendo de 0,21 dólares por acción.
*   **Relación con la deuda:** Aunque los fondos de la deuda se destinan a "fines corporativos generales", el flujo de caja que proviene de las operaciones ($164.713 M) supera ampliamente el gasto total en dividendos ($10.049 M) y recompras de acciones ($45.709 M) realizados en 2025. Esto sugiere que los dividendos se financian con el éxito operativo del negocio y no por una necesidad de endeudamiento para cubrir dicha remuneración.

### 3. Generación de valor mediante recompras
Además de los dividendos, Alphabet utiliza su capital para la **recompra y posterior cancelación de acciones** (45.400 millones de dólares en 2025). Esta es una estrategia financiera común para aumentar el valor de las acciones restantes al reducir la oferta total en el mercado, lo que la empresa considera que se hace en el "mejor interés de la compañía y sus accionistas".

**En resumen:** Alphabet utiliza la deuda como una herramienta estratégica para financiar su **expansión tecnológica e infraestructura**, mientras que utiliza su **potente flujo de caja operativo** para pagar dividendos en **efectivo** y recomprar acciones, buscando así generar valor para el accionista de forma sostenible.

{{% /details %}}
