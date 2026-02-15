---
title: "Métricas de rentabilidad"
slug: "metricas-de-rentabilidad"
weight: 6
prev: /docs/Modulo 4/1 - Analisis Contabilidad/1 - Explicacion Contabilidad/5 - Flujo de Caja.md
next: /docs/Modulo 4/1 - Analisis Contabilidad/1 - Explicacion Contabilidad/7 - Multiplos de Valoracion.md
---

Para evaluar correctamente las métricas de rentabilidad es necesario tener una visión completa de los tres estados financieros.  

{{< callout type="warning" >}}
 **Todas las métricas son NON-GAAP.**
{{< /callout >}}

## ROIC

El Retorno sobre el Capital Invertido (ROIC) es una métrica non-GAAP que mide la capacidad de una empresa para generar beneficios operativos a partir del capital que ha invertido. 

Charlie Munger, socio de Warren Buffett, la considera una de las más eficientes.

El ROIC es ideal para:

- Evaluar la evolución y calidad de negocios no financieros.
- Comparar la eficiencia de una empresa con sus competidores o con sus propios resultados históricos.

Nos dice cuánto dinero está generando la empresa por cada euro de capital que invierte, considerando únicamente su actividad productiva. El ROIC promedio de la bolsa suele rondar el 13-14%, pero este valor varía según el sector.

No obstante, un ROIC alto por sí solo no garantiza el éxito. Es crucial que la empresa también tenga la capacidad de reinvertir su Flujo de Caja Libre (FCF) para financiar su crecimiento.

La fórmula para calcular el ROIC es:

$$ROIC = \frac{EBIT \times (1-T)}{Capital\ Invertido}$$

Donde:

- **EBIT** (Earnings Before Interest and Taxes): Beneficio operativo.
- **T** (Tax Rate): Tasa impositiva. En la partida de Balance General se llama: Effective tax rate.
- **Capital Invertido**: Suma del patrimonio neto (Equity), la deuda financiera total y los arrendamientos operativos (Operating Leases)

### Calcular Tax Rate

Por si por alguna razón no está presentado o no puedes encontrarlo: 

$$Tax\ Rate = \frac{Income\ before\ provision\ for\ income\ taxes}{Provision\ for\ income\ taxes} \times 100$$

### El porqué de la fórmula del ROIC

Hay muchas formas de calcular el ROIC, ¿Por qué hemos elegido esta?

#### ¿Por qué usamos el EBIT y no el FCF?

- **EBIT** (Earnings Before Interest and Taxes) es la métrica que usaremos para medir la capacidad operativa de una empresa, ya que nos permite comparar compañías de forma consistente.
  
- El **FCF** (Free Cash Flow) ya tiene descontados los intereses e impuestos. Para hacer una comparación justa entre empresas, tendríamos que ajustar el FCF sumándole de nuevo los intereses, lo que complicaría el análisis.

#### Ajustes en el cálculo del Capital Invertido

- **¿Por qué descontamos los "Marketable Securities" (valores negociables)?** Este dinero es un excedente de caja que la empresa no necesita para sus operaciones diarias. Podría usarlo para pagar dividendos o recomprar acciones, beneficiando a los accionistas. Sin embargo, nunca descontaremos este valor en empresas que tengan más deuda que caja (Deuda Neta).

- **¿Por qué sumamos los "Operating Leases" (arrendamientos operativos)?** Porque estos corresponden a activos que la empresa necesita para generar o aumentar su EBIT. Por ejemplo, el alquiler de una tienda o una flota de camiones son gastos operativos esenciales que deben considerarse como parte del capital invertido en el negocio.

Según el libro El Almanaque del Pobre Charlie, a largo plazo, el rendimiento de una acción rara vez supera el del negocio subyacente.

Esto significa que el ROIC, aunque no es ideal para comparar empresas directamente, es una excelente herramienta para predecir los resultados que se pueden obtener de una inversión a largo plazo, especialmente si la empresa tiene ventajas competitivas.

Lo ideal es que el ROIC sea elevado y que la empresa tenga la capacidad de reinvertir su capital.

Aquí lo realmente importante es entender que el ROIC se tiene que mantener estable a lo largo del tiempo para que podamos considerar que una empresa tiene ventaja competitiva. 

Si pega saltos brutales —un año 30%, otro 5%—, no deberíamos considerar que la empresa tiene ventajas competitivas. 

## Tasa de reinversión

Aunque el ROIC es importante, es fundamental que una empresa tenga la capacidad de reinvertir el capital en su propio negocio. Si no puede, el ROIC pierde relevancia.

Lo que debemos analizar es si la compañía está reinvirtiendo gran parte del flujo de caja que genera. Para ello, es clave observar el Capex de expansión y las partidas de M&A (fusiones y adquisiciones).

Hay compañías que también reinvierten desde su OPEX. Esto complica mucho el cálculo de la tasa de reinversión y aumenta su margen de error.

La tasa de reinversión se puede calcular de las siguientes maneras:

### Tasa de Reinversión Orgánica

Se estima el "Growth CAPEX" (Capex de expansión)

$$Growth\ CAPEX = CAPEX\ TOTAL - D\&A$$

### Tasa de Reinversión Inorgánica

Se calcula como el Importe de las Adquisiciones / FCF.

$$TRI = \frac{Importe\ adquisiciones}{FCF}$$

### Tasa de reinversión orgánica + inorgánica

Muchas compañías combinan los crecimientos orgánicos + inorgánicos

$$Tasa\ reinversi\acute{o}n = \frac{Growth\ CAPEX + Importe\ Adquisiciones}{FCF} \times 100$$

No hay un estándar de medida, pero tenemos que fijarnos en la tasa de reinversión y en el ROIC. Mientras más ROIC tenga mejor.

## ROE

El Retorno sobre el Patrimonio Neto (ROE) es una de las métricas de rentabilidad y eficiencia más usadas para analizar empresas financieras.  

Mide la relación entre el beneficio neto de una empresa y su patrimonio (Equity). Es una métrica non-GAAP cuando se usa para análisis, aunque se deriva de estados contables.

El ROE promedio para compañías financieras se sitúa entre el 10-15%. Es importante usar esta métrica para comparar empresas que pertenezcan al mismo sector.

Una limitación importante del ROE es que no tiene en cuenta la deuda de la compañía, lo que puede distorsionar la imagen de su salud financiera.

La fórmula es:

$$ROE = \frac{Net\ Income}{Equity} \times 100$$

Donde:

- **Net Income**: Beneficio Neto.
- **Equity**: Patrimonio Neto, conocido como fondos propios o valor en libros.

## ROA

El Retorno sobre los Activos (ROA) también es muy utilizado para analizar empresas financieras. A diferencia del ROE, el ROA sí tiene en cuenta la deuda de la empresa, ya que mide la relación entre el beneficio neto y el total de los activos.

El ROA promedio en entidades financieras ronda el 1%.

- Por encima del 1%: Se considera una excelente señal.
- Por debajo del 1%: Se considera una señal de debilidad.

La fórmula es:

$$ROA = \frac{Net\ Income}{Total\ Assets} \times 100$$

Donde:

- **Net Income**: Beneficio Neto
- **Total Assets**: Activos totales, que incluyen activos corrientes y no corrientes.
