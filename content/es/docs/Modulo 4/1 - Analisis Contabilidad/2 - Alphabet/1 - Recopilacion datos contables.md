---
title: "Recopilación de datos contables"
slug: "recopilacion-datos-contables"
weight: 1
prev: /docs/Modulo 4/1 - Analisis Contabilidad/2 - Alphabet/_index.md
next: /docs/Modulo 4/1 - Analisis Contabilidad/2 - Alphabet/2 - Recopilacion datos.md
---

En esta sección veremos cómo obtener los datos contables imprescindibles para los cálculos que realiza la plantilla.

- **Datos:** En el ejemplo que sigue solo se recopilan datos de 2024, pero el procedimiento es equiparable para años anteriores y futuros. 

- **Plantilla:** Tal y como se indicó en el inicio de este módulo, la plantilla en su versión actual tiene una limitación: solo calcula un año. El valor real del análisis está en disponer de los cálculos de los últimos diez años y, además, una estimación para los cinco próximos.

## Datos necesarios para realizar los cálculos

A continuación se detallan los datos que necesita la plantilla: en total son 36.

### Partida Pérdidas y Ganancias

Esta partida también se llama "Income Statements", "Consolidated Statements of Income" o "P&L".

De aquí necesitas lo siguiente:

- **Total Revenues**: Ingresos totales
- **Operating Income**: Beneficio Operativo
- **Interest Expense**: Gastos por intereses
- **Interest And Investment Income**: Ingresos por intereses y por inversiones
- **Income Tax Expense**: Gasto por Impuesto sobre Beneficios
- **Weighted Average Diluted Shares Outstanding**: Número Promedio Ponderado de Acciones Diluidas en Circulación
- **Minority Interest**: Interés Minoritario

### Balance General

Esta partida también se llama "Consolidated Balance Sheet", "Consolidated Statement of Financial Position" o "Balance Sheet".

De aquí necesitamos lo siguiente:

- **Cash and Equivalents**: Efectivo y equivalentes de efectivo
- **Total Cash And Short Term Investments**: Total de efectivo e inversiones a corto plazo
- **Accounts Receivable**: Cuentas por cobrar
- **Inventory**: Inventario
- **Accounts Payable**: Cuentas por pagar
- **Short-term Borrowings**: Préstamos a corto plazo
- **Current Portion of Long-Term Debt**: Porción corriente de la deuda a largo plazo
- **Current Portion of Capital Lease Obligations**: Porción corriente de las obligaciones por arrendamiento de capital
- **Unearned Revenue Current**: Ingresos no devengados corrientes
- **Long-Term Debt**: Deuda a largo plazo
- **Capital Leases**: Arrendamientos de capital
- **Total Equity**: Patrimonio neto total
- **Finance Division Debt Current**: Deuda de la División Financiera a Corto Plazo
- **Long-term Borrowings**: Préstamos y Deudas a Largo Plazo
- **Finance Division Debt Non Current**: Deuda de la División Financiera a Largo Plazo

### Partida Flujo de Caja

Esta partida también se conoce como "Consolidated Statements of Cash Flows" o "Cash Flow".

De aquí necesitaremos lo siguiente:

- **Depreciation & Amortization**: Depreciación y Amortización
- **Amortization of Goodwill and Intangible Assets**: Amortización de Fondo de Comercio y Activos Intangibles
- **Capital Expenditure**: Gastos de Capital
- **Sale of Property, Plant, and Equipment**: Venta de Propiedad, Planta y Equipo
- **Cash Acquisitions**: Adquisiciones en Efectivo
- **Sale (Purchase) of Intangible assets**: Venta o Compra de Activos Intangibles
- **Total Debt Issued**: Total Deuda Emitida
- **Total Debt Repaid**: Deuda Total Repagada
- **Repurchase of Common Stock**: Recompra de Acciones Comunes
- **Common & Preferred Stock Dividends Paid**: Dividendos Pagados de Acciones Comunes y Preferentes
- **Net Change in Cash**: Cambio Neto en Efectivo

### Otros datos

Los siguientes datos no forman parte de las partidas, pero como son datos necesarios para la plantilla los especifico a continuación:

- **Fecha**: Antigüedad de los análisis; por ejemplo, la plantilla y los cálculos funcionan con una antigüedad de 10 años.
- **Precio de la acción anual**: Precio anual de la acción; la cantidad de datos dependerá de la fecha.
- **Precio de la acción actual**: Precio actual de la acción

## Formas de recopilar la información

Existen dos formas de sacar los datos:

1. **Gratis** – tenemos que coger el informe anual 10-K o los informes equivalentes en Europa.
2. **De pago** – teniendo una suscripción en TIKR, Morningstar u otras suscripciones.

Vamos a verlo con un ejemplo; así podrás decidir qué forma es más conveniente para ti.

### La opción gratuita

{{< callout type="info" >}}
 Los datos que aparecerán en otras páginas del documento no siempre estarán en el mismo sitio. 
 Ej.: 
  - 2024, página 40 
  - 2025, página 36
{{< /callout >}}

- **URL para la página de relación con inversores**: [https://abc.xyz/investor/](https://abc.xyz/investor/)
- Necesitamos los ficheros **10-K**, porque tendrán la información anualizada. En este caso revisaremos los últimos resultados anuales presentados: 2024.
- Si decides elegir los ficheros 10-Q tendrás que buscar todos los ficheros pertinentes y después sumar todos los datos; es decir, hacer doble trabajo.

![Alphabet investor relations](/images/M4/M1/D2/ES-M4-M1-D2-Alphabet-10K.png)

Una vez dentro del fichero 10-K, tendrás que dirigirte a la página nº 3 (página 2 del documento), donde encontrarás el índice. Ahora tendrás que dirigirte a 

- "Item 8. – Financial Statements and Supplementary Data", que está en la página 48.

![Alphabet 10k](/images/M4/M1/D2/ES-M4-M1-D2-Alphabet-10K-parte2.png)

Una vez ahí, verás que también hay otro índice, y que el contador del navegador muestra que es la página número 49, pero el documento especifica que es el 48. Eso se debe a que el documento en sí no cuenta la primera página por ser la "portada", pero el contador del navegador sí.

En el índice tenemos que buscar las 3 partidas/estados. Veremos que el Balance y el P&L están cambiados de orden, pero no es importante:

- **Balance General**: Consolidated Balance Sheets
- **Pérdidas y Ganancias o "P&L"**: Consolidated Statements of Income
- **Flujo de Caja o "Cash Flow"**: Consolidated Statements of Cash Flows

![Alphabet 10k](/images/M4/M1/D2/ES-M4-M1-D2-Alphabet-10K-parte3.png)

Vamos a ir paso por paso.

#### Balance General – Consolidated Balance Sheets

Según nos muestra la imagen anterior, esta partida está en la página nº 52.

La estructura de la lista de datos necesarios es la siguiente:

**Nombre que le pone TIKR**: Nombre que aparece en la Hoja - Valor del año 2024

Datos a recopilar:

- **Cash and Equivalents**: Cash and cash equivalents – 23.466
- **Total Cash And Short Term Investments**: Total cash, cash equivalents, and marketable securities – 95.657
- **Accounts Receivable**: Accounts receivable, net – 52.340
- **Inventory**: No aplica.
- **Accounts Payable**: Accounts payable – 7.987
- **Short-term Borrowings**: No aplica.
- **Current Portion of Long-Term Debt**: No especificado directamente en la partida, pero se puede encontrar en el documento. Pág. 74: Less: Current portion of long-term notes (1) – (999)
- **Current Portion of Capital Lease Obligations**: No especificado directamente en la partida, pero se puede calcular. Fórmula: Operating Leases: Accrued expenses and other liabilities + Finance Leases: Accrued expenses and other liabilities. Pág. 73: 2.887 + 235 = 3.122
- **Unearned Revenue Current**: Deferred revenue – 5.036
- **Long-Term Debt**: Long-term debt – 10.883
- **Capital Leases**: No especificado directamente en la partida, pero podemos calcularlo. Fórmula: Operating Leases: Operating lease liabilities + Finance Leases: Other long-term liabilities. Pág. 73: 11.691 + 1.442 = 13.133
- **Total Equity**: Total stockholders' equity – 325.084
- **Finance Division Debt Current**: No aplica.
- **Long-term Borrowings**: No aplica.
- **Finance Division Debt Non Current**: No aplica.

![Alphabet 10k](/images/M4/M1/D2/ES-M4-M1-D2-Alphabet-10K-parte4.png)

Ejemplo de cómo se verían las fórmulas que hemos utilizado:

- **Current Portion of Long-Term Debt**: No especificado directamente en la partida, pero se puede encontrar en el documento. Pág. 74: Less: Current portion of long-term notes (1) – (999)

![Alphabet 10k](/images/M4/M1/D2/ES-M4-M1-D2-Alphabet-10K-parte5.png)

- **Current Portion of Capital Lease Obligations**: No especificado directamente en la partida, pero se puede calcular. Fórmula: Operating Leases: Accrued expenses and other liabilities + Finance Leases: Accrued expenses and other liabilities. Pág. 73: 2.887 + 235 = 3.122

- **Capital Leases**: No especificado directamente en la partida, pero podemos calcularlo. Fórmula: Operating Leases: Operating lease liabilities + Finance Leases: Other long-term liabilities. Pág. 73: 11.691 + 1.442 = 13.133

![Alphabet 10k](/images/M4/M1/D2/ES-M4-M1-D2-Alphabet-10K-parte6.png)

#### Pérdidas y Ganancias o "P&L" – Consolidated Statements of Income

Este estado se encuentra en la pág. 53.

Datos que necesitamos:

- **Total Revenues**: Revenues – 350.018
- **Operating Income**: Income from operations – 112.390
- **Interest Expense**: No especificado directamente en la partida, pero se puede encontrar en el documento. Pág. 40: Interest expense – (268)
- **Interest And Investment Income**: No especificado directamente en la partida, pero se puede encontrar en el documento. Pág. 40: Interest Income – 4.482
- **Income Tax Expense**: Provision for income taxes – 19.697
- **Weighted Average Diluted Shares Outstanding**: No especificado directamente en la partida, pero se puede encontrar en el documento. Pág. 83: Number of shares used in per share computation – 12.447
- **Minority Interest**: No aplica.

![Alphabet 10k](/images/M4/M1/D2/ES-M4-M1-D2-Alphabet-10K-parte7.png)

Ejemplo de datos que se encuentran en otra parte del documento: 

- **Interest Expense**: No especificado directamente en la partida, pero se puede encontrar en el documento. Pág. 40: Interest expense – (268)
- **Interest And Investment Income**: No especificado directamente en la partida, pero se puede encontrar en el documento. Pág. 40: Interest Income – 4.482

![Alphabet 10k](/images/M4/M1/D2/ES-M4-M1-D2-Alphabet-10K-parte8.png)

- **Weighted Average Diluted Shares Outstanding**: No especificado directamente en la partida, pero se puede encontrar en el documento. Pág. 83: Number of shares used in per share computation – 12.447

![Alphabet 10k](/images/M4/M1/D2/ES-M4-M1-D2-Alphabet-10K-parte9.png)

#### Flujo de Caja o "Cash Flow" – Consolidated Statements of Cash Flows

Este estado se encuentra en la pág. 56.

Datos necesarios:

- **Depreciation & Amortization**: Depreciation of property and equipment – 15.311
- **Amortization of Goodwill and Intangible Assets**: No aplica.
- **Capital Expenditure**: Purchase of property and equipment – (52.535)
- **Sale of Property, Plant, and Equipment**: No aplica.
- **Cash Acquisitions**: Acquisitions, net of cash acquired, and purchases of intangible assets – (2.931)
- **Sale (Purchase) of Intangible assets**: No aplica.
- **Total Debt Issued**: Proceeds from issuance of debt, net of costs – 13.589
- **Total Debt Repaid**: Repayments of debt – (12.701)
- **Repurchase of Common Stock**: Repurchases of stock – (62.222)
- **Common & Preferred Stock Dividends Paid**: Dividend payments – (7.363)
- **Net Change in Cash**: Net increase (decrease) in cash and cash equivalents – (582)

![Alphabet 10k](/images/M4/M1/D2/ES-M4-M1-D2-Alphabet-10K-parte10.png)

### La opción de pago

La opción de pago consiste en utilizar la plataforma Tikr, la plataforma permite abrir una cuenta completamente gratuita, pero tiene ciertas limitaciones:

- Muestra solo los últimos 5 años.
- Cobertura solo a empresas estadounidenses.

Vamos a ver lo que significan todos los parámetros/filtros que necesitamos dentro del "Detailed Financials".

![Tikr](/images/M4/M1/D2/ES-M4-M1-D2-TIKR.png)

De izquierda a derecha:

- **Dataset**: Diferentes bases de datos y de dónde provienen. Nos interesa tener seleccionado "Main TIKR Data"; suelen ser más exactos ya que revisan la documentación entera, incluyendo las diversas notas y adaptan la info de las partidas con lo que indican las notas.
- **Period**: El periodo de presentación de contabilidad. A nosotros siempre nos interesa tenerlo "Anual".
- **Currency**: Siempre elegir la moneda del mercado principal. Ejemplo:
  - NASDAQ – EEUU – USD
  - BME – España – EUR
- **Display Units**: Te interesa tenerlo siempre en miles de millones.
- **Filtro de años**: Para que la plantilla funcione necesitaremos datos de los últimos 10 años.

A continuación vamos a ver cómo conseguimos los datos necesarios; verás que TIKR sigue la estructura de la contabilidad, pero por comodidad visual vamos a seguir la misma que en la presentación de contabilidad de las empresas:

1. Balance General
2. P&L
3. Flujo de Caja

---

Pincha en este enlace para acceder a TIKR + GOOGL (NASDAQ).

- **URL TIKR**: https://app.tikr.com/stock/financials?cid=29096&tid=11311662&tab=is&ref=zq5bgb 

- O si no puedes pinchar el enlace, una vez que entres en tu cuenta de TIKR, busca: **GOOGL** (Mercado NasdaqGS).

Una vez dentro de TIKR tienes que dirigirte al apartado "Detailed Financials", donde verás las partidas descritas anteriormente.


#### Balance General – Balance Sheet

Para simplificar la visualización, el filtro de tiempo lo he dejado configurado para que muestre el año 2024 y el año en curso 2025.

Nos interesa la tabla del 2024 ya que es el coste real que ha tenido la empresa; 2025 el coste y datos pueden variar, así que estos datos no nos sirven por ahora.

Datos necesarios:

1. **Cash and Equivalents**: 23.466
2. **Total Cash And Short Term Investments**: 95.657
3. **Accounts Receivable**: 52.340
4. **Inventory**: No aplica.
5. **Accounts Payable**: 7.987
6. **Short-term Borrowings**: 2.300 (Dato actualizado; a principios de 2024 no existía)
7. **Current Portion of Long-Term Debt**: 999
8. **Current Portion of Capital Lease Obligations**: 3.122
9. **Unearned Revenue Current**: 5.036
10. **Long-Term Debt**: 10.883
11. **Capital Leases**: 13.133
12. **Total Equity**: 325.084
13. **Finance Division Debt Current**: No aplica.
14. **Long-term Borrowings**: No aplica.
15. **Finance Division Debt Non Current**: No aplica.

![Tikr](/images/M4/M1/D2/ES-M4-M1-D2-TIKR-parte2.png)

![Tikr](/images/M4/M1/D2/ES-M4-M1-D2-TIKR-parte3.png)


#### Pérdidas y Ganancias o "P&L" – Income Statement

Para ver los siguientes datos, basta con cambiar de pestaña, desde "Balance Sheet" a "Income Statement".

Datos necesarios:

1. **Total Revenues**: 350.018
2. **Operating Income**: 114.186
3. **Interest Expense**: (268)
4. **Interest And Investment Income**: 4.482
5. **Income Tax Expense**: (19.697)
6. **Weighted Average Diluted Shares Outstanding**: 12.447
7. **Minority Interest**: No aplica.

![Tikr](/images/M4/M1/D2/ES-M4-M1-D2-TIKR-parte4.png)

![Tikr](/images/M4/M1/D2/ES-M4-M1-D2-TIKR-parte5.png)


#### Flujo de Caja o "Cash Flow" – Cash Flow Statement

Cambiamos a la pestaña llamada "Cash Flow Statement"; seguidamente miramos la siguiente información:

1. **Depreciation & Amortization**: 15.311
2. **Amortization of Goodwill and Intangible Assets**: No aplica.
3. **Capital Expenditure**: (52.535)
4. **Sale of Property, Plant, and Equipment**: No aplica.
5. **Cash Acquisitions**: (2.931)
6. **Sale (Purchase) of Intangible assets**: No aplica.
7. **Total Debt Issued**: 13.589
8. **Total Debt Repaid**: (12.701)
9. **Repurchase of Common Stock**: (62.222)
10. **Common & Preferred Stock Dividends Paid**: (7.363)
11. **Net Change in Cash**: (582)

![Tikr](/images/M4/M1/D2/ES-M4-M1-D2-TIKR-parte6.png)

![Tikr](/images/M4/M1/D2/ES-M4-M1-D2-TIKR-parte7.png)


## Diferencias entre la opción gratuita y TIKR

Como has podido notar existen dos grandes diferencias/incomodidades en la parte gratuita respecto a la de pago.

1. Los nombres de los parámetros: estos cambian y no tienen un estándar. De hecho, no solo cambia el nombre, sino que también puede variar el orden, lo que dificulta significativamente el análisis para los principiantes.

2. Los valores de los parámetros: el valor puede ser X, pero después puede tener una nota adjunta que explica que, por razones determinadas, cambia. En la forma gratuita tienes que realizar un esfuerzo adicional para entender lo que dicen y adaptar el valor del parámetro de acuerdo con la nota; en la opción de pago (TIKR) lo hacen por ti. 

## Conclusiones

Cada uno puede elegir el método que considere más oportuno, pero lo que está claro es que TIKR proporciona los datos:

- De una manera estructurada, siempre tienen el mismo nombre y la misma posición.
- Los datos se adaptan a la información procedente del informe completo.

Debido a eso nos ahorramos tiempo y daño cerebral, pero lo dicho, cada uno que elija el método de extracción de datos que más conveniente le parezca en cada momento.

¿Se podría utilizar la inteligencia artificial (NotebookLM) para analizar la contabilidad?

A veces ayuda, y bastante, pero no es recomendable para principiantes porque puede alucinar y esas alucinaciones pueden llevarte muy lejos de la realidad.

## ¿Cómo utilizar la plantilla?

Teniendo los 36 datos a mano, es tan simple como abrir el fichero Excel, dirigirse a la hoja llamada “DATOS” e introducir los datos en la casilla correspondiente. 

![Plantilla](/images/M4/M1/D2/ES-M4-M1-D2-Plantilla.png)

Automáticamente se harán los cálculos pertinentes, siguiendo las fórmulas que hemos descrito anteriormente.

![Plantilla](/images/M4/M1/D2/ES-M4-M1-D2-Plantilla-parte2.png)
