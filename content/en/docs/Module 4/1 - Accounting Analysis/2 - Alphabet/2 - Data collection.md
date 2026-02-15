---
title: "Data collection"
slug: "data-collection"
weight: 2
prev: /docs/Module 4/1 - Accounting Analysis/2 - Alphabet/1 - Accounting data collection.md
next: /docs/Module 4/1 - Accounting Analysis/2 - Alphabet/3 - Summary of information obteined.md
---

Most of the answers can be found in 10-K filings, earnings calls and other documents published by the company. In the past you had to read a lot of often unnecessary information to get those answers, but now you can skip that and use artificial intelligence.

If you prefer not to use an AI tool, the only way to answer the questions is by reading all the documents.

Note that NotebookLM can translate files directly into other languages, a significant plus for many users.

## Working with NotebookLM

{{< callout type="info" >}}
 The questions you ask the AI are called prompts
{{< /callout >}}

This is the link to the NotebookLM folder so you can open it and ask the relevant questions:

- https://notebooklm.google.com/notebook/58665d02-41fe-4015-8235-21a9e2455a50

It is important to know how to ask questions in the right way so the AI can give you the best answer.

- **The most important rule:** Be as specific as possible, but without overdoing it.

   **Example:** We want to know whether the company we are analyzing has organic or inorganic sales, and whether the documents mention any kind of trend.

   Instead of only asking:

   - Tell me the type of sales (organic or inorganic) and their trend.

   You should ask it like this:

   - Analyze all the documents and answer as clearly as possible: whether the company has organic or inorganic sales, and whether it mentions any kind of trend.

### Why is it important to ask the question correctly?

The AI is not intelligent at all; it sounds contradictory, but it is true. It is a mathematical algorithm designed to replicate "neural" connections. To put it very simply: imagine a tree with many branches—large branches, small branches, thin branches; whichever branch you take will lead you to the trunk, but it may not be the part of the trunk you wanted to reach, nor does it guarantee the shortest path.

By giving the algorithm clear instructions, it can take you to the right part of the trunk (the knowledge) and choose the shortest, most precise path.

## Company revenue

### Type of sales
- **What type of sales are they? Organic or inorganic?** 
  - Is it possible to get the percentage of total?

**Prompt:** 

> Analyze all the documents and answer as clearly as possible: whether the company distinguishes between organic and inorganic sales; in what terms (definitions, figures or percentages); and whether any trend in that type of sales over time is mentioned or can be inferred.

![Alphabet NotebookLM](/images/M4/M1/D2/ES-M4-M1-D2-Alphabet-NotebookLM.png)

{{% details title="Click to read the full answer" closed="true" %}}

From the documents provided, it can be concluded that **Alphabet (Google's parent company) does not explicitly use the terms "organic sales" or "inorganic sales"** to break down its revenue in its Q4 2025 financial reports. However, the company provides alternative metrics and strategic breakdowns that allow the nature of its growth to be analyzed.

Below is how the company addresses these concepts according to the sources:

### 1. Distinction between "Core" revenue and external effects
Rather than talking about organic or inorganic growth, Alphabet distinguishes between its **reported (GAAP) results** and its results in **constant currency (non-GAAP)**.
*   **Definition:** The company uses constant-currency revenue to make it easier to compare historical performance by excluding the effect of exchange rate movements and hedging activities, as it considers these factors "not indicative of our core operating results".
*   **Figures:** In Q4 2025, consolidated revenue grew **18%** (reported), while in constant currency growth was **17%**. For full-year 2025, both reported and constant-currency growth was **15%**.

### 2. Treatment of acquisitions (inorganic sales)
Although Alphabet does not isolate the percentage of revenue that comes specifically from newly acquired companies under an "inorganic sales" label, it does mention acquisitions as a core part of its capital strategy:
*   **Investments:** In the cash flow statement, the company reports **"Acquisitions, net of cash acquired"**, which totaled **$1.592 billion in 2025** and $2.931 billion in 2024.
*   **Integration:** The company states that it includes the results of acquired businesses from the **acquisition date**.
*   **Future trend:** Definitive agreements to acquire **Wiz** (for $32 billion) and **Intersect** are mentioned; these transactions are expected to close in 2026 and will affect future growth, particularly in the Google Cloud segment.

### 3. Growth drivers and trend over time
From the documents, the trend in sales can be inferred as follows:
*   **Growth by segment:** Current growth is mainly driven by **Google Cloud** (which grew **48%** in the quarter) and **Search** (which grew **17%**).
*   **Drivers:** The trend in revenue is attributed to demand for **AI products** (such as Gemini 3), growth in paid subscriptions (325 million in total) and improvements in ad formats, rather than a purely inorganic market-buying strategy.
*   **Long-term trend:** Alphabet points to a growing trend in revenue **beyond advertising** (cloud, subscriptions, devices), which are growing at higher rates than advertising revenue and represent an increasing share of consolidated revenue.

**Summary:** The company assesses its performance based on **segment growth** and **isolating currency effects**, treating acquisitions as investments to strengthen its technical infrastructure and AI product portfolio, but without reporting a specific "inorganic sales" figure separate from total operating revenue.

{{% /details %}}

### Sales segmentation

- Sales segmentation by business line
- Sales segmentation by country
- Sales segmentation by customer: what percentage of sales comes from the largest customer?

**Prompt:** 

> Analyze all the documents and answer as clearly as possible: does the company present sales by segment (by business line, country or customer)? If it specifies customers, what percentage of sales comes from the largest customer?

![Alphabet NotebookLM Part 2](/images/M4/M1/D2/ES-M4-M1-D2-Alphabet-NotebookLM-parte2.png)

{{% details title="Click to read the full answer" closed="true" %}}

Alphabet (Google's parent company) presents the breakdown of its sales using multiple criteria in its 2025 financial reports: by business line (operating segments), by type of revenue and by geography.

Each form of presentation is detailed below according to the documents analyzed:

### 1. Breakdown by business line (operating segments)
The company reports its financial results based on three main segments:
*   **Google Services:** Includes products such as advertising (Search, YouTube, Google Network), subscriptions (YouTube Premium, Google One), the Android platform, the Play Store and devices (Pixel).
*   **Google Cloud:** Includes Google Cloud Platform (GCP) infrastructure and platform services and Google Workspace collaboration tools.
*   **Other Bets:** Covers early-stage businesses that operate independently, such as Waymo (autonomous driving) and Isomorphic Labs.

### 2. Geographic breakdown (countries/regions)
Alphabet also presents its revenue split by customer location across four main regions:
*   **United States:** Represented **48%** of revenue in 2025.
*   **EMEA:** Europe, Middle East and Africa (**29%**).
*   **APAC:** Asia-Pacific (**17%**).
*   **Other Americas:** Canada and Latin America (**6%**).

### 3. Sales by customer
Regarding customer concentration, the company is very specific in its financial statements:
*   **Individual customer names and their percentage of sales are not disclosed**, as the company explicitly states that **"no single customer or group of affiliated customers represented more than 10% of our revenue in 2023, 2024 or 2025"**.
*   Although earnings calls mention strategic partnerships with major customers (such as Apple, NVIDIA, Mercedes-Benz or Reliance Jio), these are commercial and strategic references, not breakdowns of specific billing percentages.

**In summary:** The company segments its sales mainly by **business unit** and **geographic region**, and states that its customer base is diversified enough that **no single customer accounts for more than 10% of total sales**.

{{% /details %}}

### Sales dynamics

- **Recurrence in sales: is there pricing power?**
- **Is there seasonality in sales throughout the year?**

**Prompt:** 

> Analyze all the documents and answer as clearly as possible: What is the recurrence in sales? Does the company have pricing power? Does the nature of sales suggest seasonality over the year?

![Alphabet NotebookLM Part 3](/images/M4/M1/D2/ES-M4-M1-D2-Alphabet-NotebookLM-parte3.png)

{{% details title="Click to read the full answer" closed="true" %}}

Based on Alphabet's 2025 financial and operating reports, the recurrence, pricing power and seasonality of its sales are analyzed below:

### 1. Recurrence in sales
The company shows **high and growing recurrence** driven by two main pillars:
*   **Consumer subscriptions:** Alphabet has more than **325 million paid subscriptions** through services such as YouTube Music, YouTube Premium and Google One. This revenue is recognized ratably over the subscription period, generally on a monthly basis.
*   **Google Cloud and Workspace:** This segment operates under a **consumption-based and subscription pricing** model. The company reported a **backlog of $242.8 billion**, of which more than 50% is expected to be recognized as revenue over the next 24 months. In addition, it has sold more than 8 million paid Gemini Enterprise seats in just four months.

### 2. Pricing power
Alphabet demonstrates an ability to manage prices, although it faces competitive pressure:
*   **Enterprise services:** In Google Workspace, revenue growth has been driven in part by **higher average revenue per seat**.
*   **Advertising:** The company has **discretion to set prices** on Google Network ad inventory when it acts as principal. However, advertising revenue depends on variable metrics such as "cost per click" and "cost per impression", which fluctuate with competition among advertisers and macroeconomic factors.
*   **Risks and efficiency:** The company identifies **downward pressure on margins** from price competition as a risk, especially in devices. On the strategic side, Alphabet reduced Gemini service unit costs by 78% during 2025 to maintain competitiveness.

### 3. Seasonality
The nature of Alphabet's sales shows **marked seasonality**, especially in its main business:
*   **Advertising pattern:** Advertising revenue follows a **normal seasonal pattern**, with particular strength in the **fourth quarter** due to the holiday shopping season and events such as "Cyber 5". The **Retail** vertical is the largest contributor in this period.
*   **Political cycles:** Results are also affected by longer cycles, such as **U.S. elections**; for example, YouTube Ads growth in Q4 2025 was compared against an unusually strong 2024 due to election spending.
*   **Product launches:** Device and subscription revenue also fluctuates with the calendar of hardware launches (such as the Pixel 10 series) and new service offerings.

{{% /details %}}

## Company profit margins

**Is it possible to get the margins for the different business lines?** 

**Prompt:** 

> Analyze all the documents and answer as clearly as possible: Does the company report margins for its different business lines?

![Alphabet NotebookLM Part 4](/images/M4/M1/D2/ES-M4-M1-D2-Alphabet-NotebookLM-parte4.png)

{{% details title="Click to read the full answer" closed="true" %}}

Yes, the company reports in detail on the **operating margins** of its main business segments, both in its quarterly reports and in its annual report (Form 10-K).

The margins reported as of year-end 2025 are set out below:

### 1. Margin by business segment (Q4 2025)
Alphabet breaks down the profitability of its three main units:

*   **Google Services:** The most profitable segment. It reported an **operating margin of 41.9%** in Q4 2025, up from 39.0% the prior year.
*   **Google Cloud:** Has shown a significant improvement in profitability, reaching an **operating margin of 30.1%** in the last quarter of 2025 (compared with 17.5% in Q4 2024).
*   **Other Bets:** This business line, which includes projects such as Waymo, does not have a positive margin. It reported an **operating loss of $3.617 billion** in the quarter, partly impacted by a $2.1 billion stock-based compensation charge related to Waymo's valuation.

### 2. Alphabet consolidated margin
At the group level, the company reported a **consolidated operating margin of 31.6%** for Q4 2025. For full-year 2025, the operating margin remained stable at **32%**.

### 3. Qualitative information on sub-business lines
Although the company does not provide an exact margin percentage for each sub-product (such as YouTube separately or Pixel phone sales), it does give strategic detail in its documents:

*   **Advertising vs. other revenue:** Alphabet notes that margins on revenue that does not come from advertising (such as cloud, subscriptions and devices) are **generally lower** than margins on its traditional advertising business.
*   **Devices (Pixel):** The company warns that margins on its hardware devices have had, and could continue to have, an **adverse effect on consolidated margins** due to price pressure and higher selling costs.
*   **AI costs:** It is noted that serving AI-generated answers requires more computing capacity, which could put pressure on margin trends in the future, although the company is working on reducing unit costs (it achieved a 78% reduction in Gemini service costs in 2025).

**In conclusion:** Alphabet reports specific operating margins for **Google Services** and **Google Cloud**, while for smaller or development-stage lines such as **Other Bets** it reports total operating losses.

{{% /details %}}

## Company financial health

### Type of debt
- **Is it possible to know the type of debt?**
  - Is it at a fixed or variable rate?
  - Is it possible to know at what interest rate the company is financed?

**Prompt:** 

> Analyze all the documents and answer as clearly as possible: Is it possible to know the type of debt (fixed or variable)? Is the interest rate at which the company is financed specified?

![Alphabet NotebookLM Part 5](/images/M4/M1/D2/ES-M4-M1-D2-Alphabet-NotebookLM-parte5.png)

{{% details title="Click to read the full answer" closed="true" %}}

Yes, both the type of debt and the specific interest rates can be determined from Alphabet's 2025 annual report (Form 10-K). The company has predominantly **fixed-rate debt**, although it also has some **variable (floating) rate** debt.

The financing details from the documents are set out below:

### 1. Fixed-rate debt
The vast majority of Alphabet's senior unsecured notes pay fixed interest. During 2025, the company made significant issuances in dollars and euros:

*   **US dollar (USD) issuances:**
    *   **May 2025:** $5 billion with a weighted average interest rate of **4.89%**.
    *   **November 2025:** $17 billion with a weighted average rate of **4.92%**.
*   **Euro (EUR) issuances:**
    *   **May 2025:** €6.75 billion with a weighted average rate of **3.31%**.
    *   **November 2025:** €6.5 billion with a weighted average rate of **3.44%**.
*   **Prior debt:** It also has notes from 2016 and 2020 issuances with fixed rates ranging from **0.80% to 2.25%**.

### 2. Variable (floating) rate debt
Alphabet issued a smaller amount of variable-rate debt in November 2025:
*   **Amount:** $500 million.
*   **Interest calculation:** The rate is based on **compound SOFR** (Secured Overnight Financing Rate) **plus a spread of 0.52%**, adjusted quarterly.

### 3. Other forms of financing
*   **Commercial paper:** Alphabet has a program of up to $25 billion. As of end-2024, the weighted average effective interest rate was **4.4%**, but as of December 31, 2025 it had **no outstanding balance** under this program.
*   **Revolving credit facilities:** It has $10 billion in unused credit facilities, the interest rates on which are determined by formulas based on market rates at the time of use.
*   **Finance leases:** The interest rate used to value these commitments is the company's **incremental borrowing rate**, which for 2025 was a weighted average of **3.1%**.

**In summary:** Alphabet is financed mainly through long-term bonds with fixed interest rates (between **3.3% and 4.9%** for the most recent 2025 issuances) and has minimal variable-rate exposure through a specific $500 million issuance linked to SOFR.

{{% /details %}}

### Use of debt
- **Is it possible to know how the company uses its debt? To create value or to destroy it?** 

**Prompt:** 

> Analyze all the documents and answer as clearly as possible: Does the company specify whether it uses debt to create value or to destroy it (e.g. paying dividends with debt or paying scrip dividends)?

![Alphabet NotebookLM Part 6](/images/M4/M1/D2/ES-M4-M1-D2-Alphabet-NotebookLM-parte6.png)

{{% details title="Click to read the full answer" closed="true" %}}

Alphabet, according to its 2025 reports, does not explicitly use the terminology of "creating or destroying value" when referring to its debt, but it does provide clear details on its purpose and how it rewards shareholders.

The specific points in your question are addressed below:

### 1. Purpose of debt: what is it used for?
The company states that it uses debt issuance mainly for **"general corporate purposes"** and to support its **"operating and capital needs"**.
*   **Investment in growth:** Alphabet emphasizes that its priority is to invest in long-term growth, especially in AI and cloud technical infrastructure.
*   **Value creation:** Management specifically mentions that it allocates resources to projects such as **Waymo** where it sees "significant opportunities to **create value**".
*   **Operating sufficiency:** The company stresses that it generates **record operating cash flow** ($164.713 billion in 2025), which is sufficient to cover its operating activities, investments and financial commitments without relying solely on debt for its basic operations.

### 2. Dividend policy: debt or shares?
Alphabet is very clear about how it pays shareholders:
*   **Cash dividends:** The company pays dividends **only in cash**, not in shares (scrip dividends). In Q4 2025 it declared a dividend of $0.21 per share.
*   **Relationship with debt:** Although debt proceeds are used for "general corporate purposes", the cash flow from operations ($164.713 billion) far exceeds total dividend payments ($10.049 billion) and share repurchases ($45.709 billion) in 2025. This suggests that dividends are funded by the operating success of the business and not by a need to borrow to cover that distribution.

### 3. Value creation through buybacks
In addition to dividends, Alphabet uses its capital for **share repurchases and subsequent cancellation** ($45.4 billion in 2025). This is a common financial strategy to increase the value of remaining shares by reducing the total supply in the market, which the company considers to be in the "best interest of the company and its shareholders".

**In summary:** Alphabet uses debt as a strategic tool to finance its **technology expansion and infrastructure**, while using its **strong operating cash flow** to pay **cash** dividends and repurchase shares, thus seeking to create value for shareholders in a sustainable way.

{{% /details %}}
