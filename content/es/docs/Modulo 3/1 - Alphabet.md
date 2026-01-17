---
title: "Alphabet"
slug: "alphabet"
weight: 1
prev: /docs/Modulo 3/_index.md
next: /docs/Modulo 3/2 - Inditex.md
---

![Logo Alphabet](/images/M3/D1/ES-M3-D1-Alphabet-logo.png)

## Introducción

Comenzaremos con **Alphabet**, la empresa matriz de Google, Fiber, Calico, Google Ventures, Nest, entre otras.

Analizaremos cómo responder a las preguntas formuladas en el punto anterior:

1. **¿En qué mercado cotiza?**
2. **¿Existe algún caso de estafa conocido en el que esté implicado el equipo directivo?**
3. **¿La empresa forma parte de mi círculo de competencia?**
4. **Valoración rápida de la contabilidad**

---

## 1. ¿En qué mercado cotiza?

Nos interesa identificar el mercado principal donde se negocia el símbolo bursátil (ticker) de la empresa. Aunque una acción puede estar listada en diferentes bolsas, normalmente existe un mercado principal donde se concentra la mayor parte del volumen de negociación.

**Ejemplo:**
- **GOOGL** (ticker de Alphabet), su mercado principal es el **NASDAQ**, en Estados Unidos.
- **ABEA.DE** (ticker de Alphabet en la bolsa alemana).

### Preguntas frecuentes

- **Si realizamos la compra en un mercado no principal, ¿estamos comprando la misma empresa o empresas diferentes?**  
  Estamos comprando participaciones de la misma empresa, pero en un mercado distinto.  

- **¿Dónde es mejor comprar, en el mercado de origen o en bolsas extranjeras?**  
  **SIEMPRE** debemos operar en la bolsa de origen. Esto ofrece ventajas como:
  - Mayor volumen de negociación
  - Precios más cercanos al valor intrínseco
  - Menor riesgo de cambio de divisa
  - Acceso a información más precisa y, en ocasiones, más rápida

A continuación vamos a ver tres métodos de cómo conseguir el mercado principal en el que cotiza una empresa.

### Método 1: Usando Notebook LM

- Enlace carpeta NotebookLM: https://notebooklm.google.com/notebook/58665d02-41fe-4015-8235-21a9e2455a50

{{< callout type="info" >}}
 Si todavía no sabes dónde buscar los ficheros necesarios para entrenar a NotebookLM, no te preocupes, a lo largo de la serie de notas, tendrás los conocimientos necesarios.
{{< /callout >}}

Si decides utilizar la herramienta **Notebook LM**, recuerda tener los ficheros correspondientes (10-K o 10-Q), cuando los tengas preguntarle directamente: 

- *"¿En qué mercado cotiza la empresa?"*

![Mercado NotebookLM](/images/M3/D1/ES-M3-D1-Automatica-NotebookLM.png)

La respuesta que obtendremos será: 

- Mercado: **NASDAQ**
- Tickers: **GOOGL** y **GOOG**.

### Método 2: Búsqueda manual

Hay dos maneras de hacerlo, la primera y "más larga", revisando los ficheros de contabilidad (Método 2A), la segunda descrita en Método 2B, buscando el ticker.

#### Método 2A - Desde Contabilidad

1. Abrimos nuestro navegador y buscamos: **"Alphabet investor relations"**.
2. Hacemos clic en el primer enlace que nos muestra Google.

![Mercado Manual](/images/M3/D1/ES-M3-D1-Busqueda-manual.png)

Lo que nos interesa es el fichero PDF, sin importar mucho el año o trimestre.

![Mercado Manual Parte 2](/images/M3/D1/ES-M3-D1-Busqueda-manual-parte2.png)

Al acceder a la sección de PDF, veremos la siguiente información:

![Mercado Manual Parte 3](/images/M3/D1/ES-M3-D1-Busqueda-manual-parte3.png)

**Alphabet tiene dos tickers: GOOGL y GOOG, ambos cotizan en el NASDAQ.**

- **¿En qué se diferencian GOOGL y GOOG?**
  - **GOOGL** es Clase A (con derechos de voto)
  - **GOOG** es Clase C (sin derechos de voto)

Tener derecho a voto significa poder participar en las decisiones de la empresa, lo que suele traducirse en un mayor coste por acción. Esta diferenciación entre clases de acciones también existe en otras compañías, no es exclusivo de Alphabet.

#### Método 2B - Desde el buscador

Si pones en el buscador, "Alphabet Ticker", te saldrá la siguiente info: 

![Mercado Manual Parte 4](/images/M3/D1/ES-M3-D1-Busqueda-manual-parte4.png)

#### Documentos financieros en Estados Unidos

Antes de continuar, quiero comentar un par de peculiaridades sobre la presentación de documentos en Estados Unidos.

Normalmente verás los siguientes apartados:

- **10-Q** – Informes trimestrales (tres por año)
- **10-K** – Informe anual (uno por año)

![Documentos Fiscales](/images/M3/D1/ES-M3-D1-Documentos-fiscales-EEUU.png)

En total, tendrás **cuatro documentos al año** que te indicarán la evolución de la empresa.

> **¿Es bueno tener tanta información?** Por supuesto, cuanta más información manejemos, mejor podremos anticipar posibles eventos relevantes para la empresa.

En Europa, la práctica es diferente y deberemos adaptarnos a cada país y empresa, como veremos más adelante con Inditex.

## 2. ¿Existe algún caso de estafa conocido en el que esté implicado el equipo directivo?

El objetivo principal de este punto es identificar quién compone el equipo directivo y comprobar, si no están involucrados en juicios, fraudes u otras actividades sospechosas que puedan afectar a los accionistas.

Como primero debemos saber quiénes forman parte del equipo directivo para ello, podemos ayudarnos de herramientas como Notebook LM, pero la verificación de antecedentes conviene hacerla manualmente.

### Método 1: Notebook LM - Equipo directivo

Abre la carpeta de Alphabet en Notebook LM, y pregunta:

- *"Revisa todos los ficheros y dime quién forma parte del equipo directivo"*  


![Equipo Directivo NotebookLM](/images/M3/D1/ES-M3-D1-Equipo-directivo-busqueda-automatica.png)

Los resultados serán los siguientes:

- **Sundar Pichai**: CEO de Alphabet y Google
- **Anat Ashkenazi**: SVP y CFO de Alphabet y Google
- **Philipp Schindler**: SVP y CBO de Google
- **Jim Friedland**: Senior Director de Relaciones con Inversores
- **Amie Thuener O'Toole**: Vicepresidenta, Controladora Corporativa y Directora de Contabilidad principal

### Método 2: Búsqueda manual - Equipo directivo

{{< callout type="info" >}}
 Los pasos que se describen a continuación pueden variar ligeramente según el caso. Los he estructurado así para ayudarte a identificarlos por ti mismo, aunque la información no siempre aparecerá en el mismo lugar o documento.
{{< /callout >}}

Para hacerlo manualmente:

1. Accedemos a la página de "Relación con Inversores" de Alphabet y buscamos el archivo PDF **10-Q**.
2. En la parte inferior encontraremos los nombres de los directivos.

![Equipo Directivo Busqueda Manual](/images/M3/D1/ES-M3-D1-Equipo-directivo-busqueda-manual.png)

3. Para encontrar al CEO, utilizamos la función de búsqueda (Ctrl+F) en el documento y buscamos "CEO" o "Chief" para localizar a los ejecutivos.

![Equipo Directivo Busqueda Manual Parte 2](/images/M3/D1/ES-M3-D1-Equipo-directivo-busqueda-manual-parte2.png)

![Equipo Directivo Busqueda Manual Parte 3](/images/M3/D1/ES-M3-D1-Equipo-directivo-busqueda-manual-parte3.png)

Por último, revisamos el archivo de transcripción de la llamada con inversores que adjunta Google. Vuelve a utilizar la función de búsqueda, para localizar los nombres y cargos relevantes.

![Equipo Directivo Busqueda Manual Parte 4](/images/M3/D1/ES-M3-D1-Equipo-directivo-busqueda-manual-parte4.png)

Después pincha en la opción de fichero PDF, botón "here" (traducido al español, aquí)

![Equipo Directivo Busqueda Manual Parte 5](/images/M3/D1/ES-M3-D1-Equipo-directivo-busqueda-manual-parte5.png)

En resumen, estos son los principales miembros del equipo directivo:

- **CEO**: Sundar Pichai
- **CFO**: Anat Ashkenazi
- **Vicepresidenta, Controladora Corporativa y Directora de Contabilidad principal**: Amie Thuener O'Toole
- **SVP y CBO de Google**: Philipp Schindler
- **Senior Director de Relaciones con Inversores**: Jim Friedland

### Verificación de antecedentes

Pequeño consejo, intenta buscar la información en el idioma de donde se encuentra la sede de la empresa. Tendrá más cobertura de medios, pero tampoco hay que preocuparse demasiado, si una empresa que cotiza en bolsa y comete un fraude, normalmente sale en medios de todo el mundo. 

- Ejemplo: Empresa inglesa - Ted Baker - ropa de "lujo"

Seguimos con Alphabet, vamos a comprobar si los nombres de sus directivos aparecen en internet asociados a términos como "fraude", "juicio", "corrupción" o "demanda".

#### Sundar Pichai

{{< callout type="info" >}}
 Si los resultados muestran acusaciones contra la empresa y no contra la persona física, no necesariamente es una mala señal para el directivo, aunque puede ser relevante para la empresa.
{{< /callout >}}

Buscamos en Google el nombre completo junto con las palabras clave, por ejemplo:

- *"Sundar Pichai" (juicio OR fraude OR corrupción OR demanda)*

![Equipo Directivo Fraude Sundar](/images/M3/D1/ES-M3-D1-Equipo-directivo-fraude-sundar.png)

Lo primero que observamos, solo con leer los titulares, es que las acusaciones se dirigen a Google como empresa, y no a la persona física de Sundar Pichai. Si profundizamos en las noticias, veremos que el CEO comparecerá en representación de Google ante el tribunal.

![Equipo Directivo Fraude Sundar Parte 2](/images/M3/D1/ES-M3-D1-Equipo-directivo-fraude-sundar-parte2.png)

**¿Es esto una señal negativa?** No necesariamente para Sundar Pichai como individuo, aunque sí podría tener implicaciones para la empresa que estamos analizando. Si revisamos el contenido de las noticias, el juicio está relacionado con temas de monopolio, lo cual, aunque pueda parecer contradictorio, puede interpretarse como un punto a favor, ya que evidencia que la empresa posee una ventaja competitiva relevante.

**¿Existe riesgo de que Google quiebre si pierde el juicio?** La probabilidad de que esto ocurra es prácticamente nula; más adelante, al revisar la contabilidad, podremos confirmarlo.

Con esta sencilla comprobación, vemos que **Sundar Pichai** no parece estar implicado en ningún caso de corrupción o fraude.

#### Anat Ashkenazi (CFO)

- *"Anat Ashkenazi" (juicio OR fraude OR corrupción OR demanda)*

![Equipo Directivo Fraude Anat](/images/M3/D1/ES-M3-D1-Equipo-directivo-fraude-anat.png)

Comprobamos que tampoco está involucrada en ningún asunto relevante.

#### Amie Thuener O'Toole (Vicepresidenta)

- *"Amie Thuener O'Toole" (juicio OR fraude OR corrupción OR demanda)*

![Equipo Directivo Fraude Amie](/images/M3/D1/ES-M3-D1-Equipo-directivo-fraude-amie.png)

En este caso, encontramos que una cuenta de Threads ha publicado algo sobre ella, pero, según parece, Threads marcó la cuenta como "Fraude y Spam".

Lo interesante con Amie es que, si buscamos información en español, no aparecen noticias, pero si lo hacemos en inglés, el idioma local de Alphabet (Estados Unidos), encontramos lo siguiente:

![Equipo Directivo Fraude Amie Parte 2](/images/M3/D1/ES-M3-D1-Equipo-directivo-fraude-amie-parte2.png)

**¡Y aquí sí, surge algo llamativo!** Analicemos la situación:

Aparece un artículo sobre una demanda colectiva que involucra a otros directores y ejecutivos de Nordstrom, relacionada con una supuesta fusión privada injusta. Se les acusa de perjudicar a los accionistas minoritarios ofreciendo un precio bajo y llevando a cabo un proceso poco transparente.

**Pregunta 1 – ¿Qué cargo ocupa Amie en Nordstrom?**

![Equipo Directivo Fraude Amie Parte 3](/images/M3/D1/ES-M3-D1-Equipo-directivo-fraude-amie-parte3.png)

Ella actúa como directora independiente, lo que significa que no trabaja directamente para la empresa ni tiene intereses financieros personales en ella.

**Pregunta 2 – ¿Es esto lo suficientemente grave como para descartar invertir en Alphabet?**

Las supuestas irregularidades fueron cometidas por el equipo ejecutivo de Nordstrom. En ningún momento se señala a Amie como responsable directa. Además, no hay indicios de que algo similar esté ocurriendo en Alphabet.

De hecho, para mayor tranquilidad: Alphabet, al ser una empresa internacional con gran impacto social, está sometida a una regulación estricta y a la vigilancia constante de numerosos analistas. Si algo así sucediera, se sabría casi de inmediato.

Desde mi punto de vista, este artículo afecta principalmente a la reputación de Amie, no a Alphabet. Sin embargo, sería prudente seguir de cerca el desarrollo de esta demanda colectiva para ver en qué concluye.

#### Philipp Schindler

El siguiente en la lista es **Philipp Schindler**, para quien tampoco encontramos nada relevante.

![Equipo Directivo Fraude Philipp](/images/M3/D1/ES-M3-D1-Equipo-directivo-fraude-philipp.png)

#### Jim Friedland

Por último, **Jim Friedland**, sobre quien tampoco aparecen incidencias.

![Equipo Directivo Fraude Jim](/images/M3/D1/ES-M3-D1-Equipo-directivo-fraude-jim.png)

### Conclusión del análisis del equipo directivo

En resumen, hemos comprobado que el equipo directivo (de Alphabet) no está involucrado en ninguna trama conocida, lo cual es un punto positivo y nos permite continuar con el siguiente apartado del análisis.

{{< callout type="info" >}}
 Todos los nombres fueron comprobados en ambos idiomas y se ha destacado la parte importante, a fecha de Agosto 2024.  
   
 Idiomas: español e inglés (idioma local de Alphabet).
{{< /callout >}}

## 3. ¿La empresa forma parte de mi círculo de competencia?

En este punto, la inteligencia artificial puede ahorrarnos mucho trabajo. Ya no es necesario leer documentos extensos para entender el negocio; basta con encontrar el documento adecuado y consultarlo con la IA.

> Los ficheros utilizados fueron los PDF de Alphabet Investor Relations y la definición de GICS hecha por MSCI.

Abrimos nuestra carpeta de Alphabet en Notebook LM y comenzamos a buscar la respuesta a nuestras preguntas.

### 3A - ¿A qué sector pertenece la empresa?

En la carpeta también encontraremos el fichero de MSCI que describe los GICS, por eso, podemos hacer la siguiente pregunta:

- *"Según el estándar GICS, ¿a qué sector pertenece la compañía?"*

![Busqueda GICS Notebook LM](/images/M3/D1/ES-M3-D1-GICS-NotebookLM.png)

![Busqueda GICS Notebook LM Parte 2](/images/M3/D1/ES-M3-D1-GICS-NotebookLM-parte2.png)

Obtendremos un razonamiento completo del porqué la empresa está en ese sector en específico:

- **Sector de Servicios de Comunicación**, con alineación a la subindustria de **Medios y Servicios Interactivos**

Como comenté en las notas de iniciación, no existe una terminología oficial universal; cada analista sigue sus propios criterios. Mi consejo es utilizar el **GICS**, que para mí es la mejor forma de categorización sectorial.

#### Sector según la SEC

Si quieres comprobar el sector tal y como se encuentra en la **SEC** (Securities and Exchange Commission), el regulador de los mercados financieros de Estados Unidos.

Dirígete a su página web:

- https://www.sec.gov/search-filings

Una vez dentro, en el buscador introducimos "Alphabet" y pulsamos en "Submit".

![Busqueda GICS Manual](/images/M3/D1/ES-M3-D1-GICS-manual.png)

Nos interesa la siguiente parte:

![Busqueda GICS Manual Parte 2](/images/M3/D1/ES-M3-D1-GICS-manual-parte2.png)

Como se observa, el sistema SIC de la SEC ha marcado a Alphabet con el código **7370**, que corresponde a **SERVICES – COMPUTER PROGRAMMING, DATA PROCESSING, ETC**.

Tanto el estándar GICS como la SEC sitúan a Alphabet en la industria de los servicios, aunque GICS lo hace de forma más específica: **Sector de Servicios de Comunicación**.

**¿Cómo sabemos que estamos analizando la empresa correcta en la lista de la SEC?**

Debemos acudir al PDF **10-Q** de la compañía.

![Busqueda GICS Manual Parte 3](/images/M3/D1/ES-M3-D1-GICS-manual-parte3.png)

#### Búsqueda manual del sector según GICS

Está bien que le preguntes a la inteligencia artificial, pero y si por alguna razón ¿no pudieras hacerlo?, 

Para hacerlo realmente de manera manual, habría que revisar la contabilidad y analizar cómo gana dinero la empresa. Se comparan todas las líneas de ingresos y la que supere el 60% se utiliza para la clasificación sectorial.

También se puede hacer de forma más rápida buscando en internet:

- *"Alphabet GICS"*

![Busqueda GICS Manual Parte 4](/images/M3/D1/ES-M3-D1-GICS-manual-parte4.png)

![Busqueda GICS Manual Parte 5](/images/M3/D1/ES-M3-D1-GICS-manual-parte5.png)

De esta manera "semi-manual" podemos comprobar que Notebook LM nos ha razonado correctamente el sector y el subsector.

**Resumiendo**, Alphabet se posiciona en:

- **Sector**: Servicios de Comunicación
  - **Subsector**: Medios y Servicios Interactivos

### 3B - ¿Cómo gana dinero?

{{< callout type="info" >}}
 En este punto empezamos a conocer los pilares de la compañía, importante tenerlos presentes, ya que nos ayudarán a determinar si llegó la hora de vender.
{{< /callout >}}

La forma más fácil y rápida es recurrir a la herramienta Notebook LM y pedirle:

- *"Explícame de una manera rápida y sencilla como gana dinero Alphabet"*

Recomiendo que cada uno lea la información, pero aquí va un resumen:

1. **Publicidad Digital**
   - Anuncios en la Búsqueda de Google
   - Anuncios en YouTube
   - Anuncios en la Red de Google

2. **Computación en la Nube (Google Cloud)**

3. **Suscripciones, plataformas y dispositivos**
   - Servicios por suscripción: YouTube TV, YouTube Music y Premium, etc.
   - Venta de aplicaciones y compras dentro de Google Play
   - Venta de dispositivos físicos

4. **Otras Apuestas**: Servicios de atención médica y servicios de internet

![Beneficios Alphabet NotebookLM](/images/M3/D1/ES-M3-D1-Beneficios-NotebookLM.png)

#### Verificación de la información

¿Cómo nos aseguramos de que la inteligencia artificial nos ha contestado correctamente?

Aquí, lo ideal es acudir a los informes oficiales, 10-Q o 10-K. También se puede complementar con la transcripción de la llamada de los analistas con el equipo directivo.

## 4. Valoración rápida de la contabilidad

{{< callout type="info" >}}
 Al final del Módulo 4, cuando comprendas un poco más de contabilidad, te daré algunas pautas a mejorar esta parte del análisis.
{{< /callout >}}

Teniendo en cuenta que la mayoría aún no está familiarizada con los conceptos básicos de la contabilidad, he decidido no mencionar Koyfin que incluye métricas útiles para este tipo de valoración, y he preferido enseñar con un ejemplo, la importancia de siempre utilizar los valores GAAP - valores oficiales y regulados.

Dirígete a la página de "Investor Relations" y, en vez de 10-Q, revisa la sección de **"Earning Release"** y **"Earning Slides"**.

> El 10-Q contiene los mismos datos contables, pero en "Earning Slides" y "Earning Release" la presentación es más visual y cómoda.

![Contabilidad Alphabet](/images/M3/D1/ES-M3-D1-Contabilidad.png)

### Métricas GAAP vs NON-GAAP

Al abrir las "Earning Slides", en la segunda página vemos lo siguiente:

![Contabilidad Alphabet Parte 2](/images/M3/D1/ES-M3-D1-Contabilidad-parte2.png)

Nos informan que se han utilizado métricas **GAAP** y **NON-GAAP** en la presentación.

- **Métrica GAAP**: es una métrica estándar, regulada, cuya manipulación puede acarrear sanciones importantes por parte de las autoridades regulatorias.
- **NON-GAAP**: métricas no estándar, la empresa puede seleccionar la fórmula que desee para el cálculo.

> **SIEMPRE** debemos fijarnos en los datos **GAAP**, ya que reflejan la realidad de la empresa.

**¿Cómo sabemos qué es una métrica GAAP y cuál es NON-GAAP?**

Alphabet, para nuestra comodidad, señala claramente las métricas NON-GAAP para facilitar el análisis, o en otras empresas, las métricas NON-GAAP suelen llevar el prefijo o sufijo "Ajustado".

![Contabilidad Alphabet Parte 3](/images/M3/D1/ES-M3-D1-Contabilidad-parte3.png)

### Análisis de resultados

Podemos ver los gráficos comparados con el Q1 del año anterior (2024):

- **Alphabet ha tenido un aumento en beneficios (Revenues)** sin elevar demasiado los gastos (Total Costs and Expenses), lo cual es muy positivo.

- En la partida de **Sales and Marketing (Ventas y Marketing)**, se observa un descenso de gastos de marketing junto con un crecimiento en beneficios, otro punto a favor.

- **Net Income (Ingresos Netos)**: ha aumentado un **46%**, otro punto positivo.

- **Diluted EPS (Beneficio por acción diluido)**: ¿qué significa diluido? Lo veremos en detalle en el análisis avanzado, pero básicamente es cuando la empresa emite acciones para pagar a empleados, diluyendo a los accionistas. Sin embargo, el beneficio por acción ha subido un **49%**, otro punto a favor.

![Contabilidad Alphabet Parte 4](/images/M3/D1/ES-M3-D1-Contabilidad-parte4.png)

### Conclusión del análisis rápido

Por ahora, dejando a un lado la demanda colectiva que involucra al equipo ejecutivo de Nordstrom (del cual forma parte Amie Thuener O'Toole), todo lo que estamos viendo parece bastante sólido, como era de esperar de una de las principales empresas del mundo. Esto sugiere que Alphabet merece un análisis más profundo, así que la marcaremos para un estudio avanzado.

A continuación, vamos a proseguir con una empresa completamente diferente, de otro sector y otro continente.
