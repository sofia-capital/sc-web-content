---
title: "¿De donde salen las ganacias porcentuales?"
date: 2025-11-16
authors:
  - name: Sofia Capital
    link: https://x.com/SofiaCapital_ES
    image: https://pbs.twimg.com/profile_images/2003545552315711488/flAvYsJt_400x400.png
---

En este articulo describire los porcentajes de beneficios que aparecen en la pagina principal. 

<!--more-->

## ¿De que porcentajes estamos hablando?

NASDAQ y MSCI World

![](/images/BLOG/P1/ES-Blog-Datos-utilizados-ejemplo-porcentual-NASDAQ-MSCI.png)

Acciones diversas

![](/images/BLOG/P1/ES-Blog-Datos-utilizados-ejemplo-porcentual-acciones.png)


## ¿Cómo lo consigues?

Tendra que utilizar la herramienta Koyfin (https://app.koyfin.com), una vez dentro tendras que buscar el ticker correcto. Utilizaremos la bolsa de Suiza por disponer de un histórico de 10 años.

- Nasdaq 100 (últimos 10 años)
  - Ticker: CSNDX – iShares NASDAQ100 (Bolsa de valores de Suiza)

- MSCI World (últimos 10 años)
  - Ticker: SWDA – iShares MSCI World (Bolsa de valores de Suiza)

Haz click en el area de busqueda: 

![](/images/BLOG/P1/ES-Blog-Datos-utilizados-Koyfin-busqueda.png)

Cuando se abra el cuadro, busca, CSNDX y selecciona la bolsa de valores suiza

![](/images/BLOG/P1/ES-Blog-Datos-utilizados-Koyfin-CSNDX.png)

Selecciona el grafico GM - Performance Graph

![](/images/BLOG/P1/ES-Blog-Datos-utilizados-Koyfin-CSNDX-GM.png)

Abierto el grafico, puedes añadir el segundo Ticker SWDA (Bolsa de Valores de Suiza)

![](/images/BLOG/P1/ES-Blog-Datos-utilizados-Koyfin-Add-ticker.png)

![](/images/BLOG/P1/ES-Blog-Datos-utilizados-Koyfin-Add-ticker-SWDA.png)

Ahora comprueba que la temporalidad este seleccionada a 10 años (10y), y ya estarian los porcentajes que aparecen en la web.

![](/images/BLOG/P1/ES-Blog-Datos-utilizados-Koyfin-iShares-ETFs.png)

---

Ahora vamos a ver los porcentajes de las acciones.  

Primero tendras que quitar los ETF's que has seleccionado, primero el SWDA y despues el CSNDX. 

Cuando quites el CSNDX va a aparecer un recuadro preguntando por un ticker, aqui añade el ticker MSFT (Microsoft)

![](/images/BLOG/P1/ES-Blog-Datos-utilizados-cambio-de-datos.png)

![](/images/BLOG/P1/ES-Blog-Datos-utilizados-seleccionar-MSFT.png)

Añade todos los demas tickers

- **ASML**: ticker **ASML**, mercado principal Amsterdam
- **Apple**: ticker **AAPL**, mercado principal NASDAQ
- **Microsoft**: ticker **MSFT**, mercado principal NASDAQ
- **Amazon**: ticker **AMZN**, mercado principal NASDAQ
- **Hermes**: ticker **RMS**, mercado principal Paris
- **Louis Vuitton**: ticker **MC** o **LVMH**, mercado principal Paris
- **Adobe**: ticker **ADBE**, mercado principal NASDAQ
- **Coca-Cola**: ticker **KO**, mercado principal NYSE
- **Nestlé**: ticker **NESN**, mercado principal Suiza

Al final no te olvides a comprobar que la temporalidad este seleccionada a 10 años, y al final deberia de quedar algo por el estilo.

![](/images/BLOG/P1/ES-Blog-Datos-utilizados-Koyfin-todas-acciones.png)
