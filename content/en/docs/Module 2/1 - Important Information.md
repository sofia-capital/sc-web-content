---
title: "Important Information"
slug: "important-information"
weight: 1
prev: /docs/Module 2/_index.md
next: /docs/Module 2/2 - Platform Overview.md
---

Choosing the right broker is fundamental. It's not just about low commissions, but also about **security**, **transparency**, **investment products**, **ease of use**, and, very importantly, **what happens to your money if the broker goes bankrupt**.

Throughout this module, I will share everything you need to know about Interactive Brokers from my personal experience.

## History

Interactive Brokers (IBKR) was founded by **Thomas Peterffy**, a Hungarian immigrant who came to the United States in the 1960s. An engineer by training, Peterffy quickly identified the potential of Wall Street. In 1977, he founded **T.P. & Co.**, a small company dedicated to options trading on the Boston Stock Exchange. Peterffy was a pioneer: while others wrote prices on blackboards, he introduced computers to the trading floor and developed algorithms to trade with greater speed and precision.

In 1983, he created the first automated system to send buy/sell orders directly to the market, a true revolution at the time. This gave birth to **Timber Hill**, the sister company dedicated to electronic market making.

In 1993, all this technological infrastructure was consolidated into what we now know as **Interactive Brokers LLC**. In 2007, the company went public, which adds a positive point, as its accounting is **public**.

## Regulators

One of the greatest guarantees of security when investing with a broker is knowing which regulatory body oversees it. Interactive Brokers, operating globally, is regulated by multiple official entities depending on the region from which you operate.

Let's look at the main ones:

### United States (Interactive Brokers LLC)

**Main regulators:**

- **SEC** (Securities and Exchange Commission): the regulator of the US stock market.
- **FINRA** (Financial Industry Regulatory Authority): regulates brokers and protects retail investors.
- **CFTC** (Commodity Futures Trading Commission): oversees futures and derivatives operations.
- **NFA** (National Futures Association): self-regulatory organization for derivative products.

### United Kingdom (Interactive Brokers UK Ltd.)

- Regulated by the **FCA** (Financial Conduct Authority), one of the strictest bodies in Europe.
- In this case, your funds may be protected under the **FSCS** (Financial Services Compensation Scheme), up to **85,000 GBP**.

### Continental Europe (Interactive Brokers Ireland Ltd.)

- After Brexit, many Europeans are now under the Irish entity.
- Regulated by the **Central Bank of Ireland (CBI)**.
- Your funds are protected under the **ICCL** scheme, with coverage of up to **20,000 EUR** in case of bankruptcy.

### What does all this mean for you as a shareholder?

Interactive Brokers is subject to strict supervision. It is not an offshore broker in a tax haven without control, but rather it is regulated by the most serious and demanding bodies in the financial world.

However, depending on the country where you open the account, your legal protection and the guarantee fund may vary. Therefore, it is important to know which entity you will be operating with.

## Guarantee Fund

I operate with the subsidiary **"Interactive Brokers Ireland Ltd."**, which serves European clients.

This entity is regulated by the Central Bank of Ireland and, therefore, investor protection comes from the **Investor Compensation Company DAC (ICCL)**.

### What does it cover?

- Up to **20,000€ per person**, in case "Interactive Brokers Ireland Ltd." goes bankrupt and cannot return your assets or your money.

> **⚠️ WARNING:**
>
> - This fund **does not cover losses from bad investments** (if you buy stocks and they fall, you assume the risk).
> - It only covers if the broker declares insolvency and cannot return your funds or securities.

### What actually happens in case of bankruptcy?

The fundamental point is that Interactive Brokers **does not use your stocks or your money**; it simply custodies them in your name. This is not something particular to Interactive Brokers, all brokers do this (well, in theory).

**These would be the approximate steps that would be followed if the broker declared bankruptcy:**

1. Your stocks and money **do not automatically disappear**, because they are separated from the broker's balance sheet.
2. A process of returning assets to clients would begin. The regulator would appoint an administrator to manage the transfer of your assets (stocks, ETFs, etc.) to another broker.
3. If for some reason the broker cannot return everything to you (due to fraud, errors, etc.), the **ICCL** comes into play, which covers you up to 20,000€ (or the corresponding guarantee entity).

> **⚠️ Caution with fractional shares:** THEY CANNOT BE TRANSFERRED, as they are in the broker's name. The administrator will sell them in the market and deposit the corresponding cash. I will explain what a fractional share is later.

## Types of Operating Accounts

By default, the account you open is a "cash account"

### 1. Cash Account

It is the most basic and secure.

- You can only trade with the money you actually have deposited.
- It does not allow leverage or short positions.
- Stock or ETF purchases are paid in cash.

### 2. Margin Account

- Allows you to borrow money from the broker to buy more than you have (use leverage).
- IBKR charges interest on borrowed money.
- Allows short trading (selling stocks you don't own).
- Faster access to funds after selling.
- Requires a minimum balance (**2,000 USD**).

### 3. Portfolio Margin Account

- Requires a considerably higher minimum balance (**100,000 USD or more**).
- The broker calculates margin based on the overall risk of the portfolio.
- Allows greater leverage, but also implies more volatility in margin requirements.

## Commissions

**Link to the commissions page (European version):**

- https://www.interactivebrokers.ie/en/pricing/commissions-home.php?re=amer

Commissions vary depending on what you have configured in your account. You can choose between paying by tiers or a fixed amount. Let's look at a practical example:

![IBKR Commission Structure](/images/EN/M2/D1/EN-M2-D1-Comission-structure.png)

### Example

**Suppose you buy 1,000 shares and you are at the lowest tier (≤ 300,000 shares per month):**

- **By tiers:** 1,000 × 0.0035 = **$3.50**
- **Fixed:** 1,000 × 0.005 = **$5.00**

In this case, the tier structure is more economical.

**But if you buy only 50 shares:**

- **By tiers:** 50 × 0.0035 = $0.175 → but the minimum of **$0.35** applies
- **Fixed:** 50 × 0.005 = $0.25 → but the minimum of **$1.00** applies

Again, by tiers is cheaper.

{{< callout type="info" >}}
 It is not necessary to calculate commissions manually, the platform calculates them automatically before opening the order.
{{< /callout >}}

### How do I know what type of commission structure I have?

> **Note:** This configuration is only visible in a real account.

**To check or change the commission structure:**

1. Go to **Settings**

![IBKR Open settings](/images/EN/M2/D1/EN-M2-D1-Open-settings.png)

2. Look for **"IBKR Pricing Plan"**

![IBKR Select commission plan](/images/EN/M2/D1/EN-M2-D1-Select-comissions-plan.png)

Here you can view and modify the current configuration.

![IBKR Choose commission plan](/images/EN/M2/D1/EN-M2-D1-Choose-comissions-plan.png)

### How to see commissions before opening an order?

**To check this, let's quickly configure an order:**

1. Go to **Trading**

![IBKR Select trading](/images/EN/M2/D1/EN-M2-D1-Select-trade.png)

Configure the order the same as in the image below:

- Ticker (or symbol): GOOGL
- Leave all other fields as default

Click on **"Preview"** to easily see the commissions you will pay.

![IBKR Click preview](/images/EN/M2/D1/EN-M2-D1-Click-preview.png)

The estimate will depend on the commission structure configured in your account.

![IBKR Commission plan estimation](/images/EN/M2/D1/EN-M2-D1-Comissions-plan-estimation.png)

### Hidden Commission - Spread

The **spread** is the difference between the purchase price (**Bid**) and the sale price (**Ask**) of a financial asset in a market.

It is a fundamental concept in stock trading, as it represents the **implicit cost** of executing a transaction. A narrow spread usually indicates a liquid and efficient market, while a wide spread may reflect lower liquidity or higher volatility.

In addition to reflecting market conditions, the spread can also reveal the commercial policy of the intermediary (the broker). Some popular neobanks, such as Revolut or MyInvestor, boast of "low commissions", but may widen the spread to compensate. That is, even though you don't see an explicit charge, the cost is still there.

**Example:**

If the purchase price of a stock is **10.00€** and the sale price is **10.05€**, the spread is **0.05€**.

To see it clearly, forget the technical terms for a moment and think of it like a used car dealership:

- If you want to sell your car to the dealership, they offer you 10,000€ (Purchase Price or Bid).
- If you come in a minute later and want to buy that same car, the dealership asks you for 10,500€ (Sale Price or Ask).

That difference of 500€ is the spread. It is the profit that the intermediary keeps for facilitating the transaction. In the stock market it works exactly the same way.

**Why is it called a "hidden commission"?**

Imagine you want to buy a stock that in the real market is worth 10€.

**Broker A (Transparent):** Charges you 1€ commission for the operation, but lets you buy the stock at its real price: 10€.

Total cost: 11.00€ per operation.

**Broker B ("No Commissions"):** Tells you the commission is 0€. However, when you go to click the buy button, they offer you the stock at 10.10€ (they inflate the spread).

Total cost: 10.10€ per share.

At first glance, Broker B seems cheaper, but in reality it has charged you 0.10 € for each share you bought without explicitly warning you. If you buy 1,000 shares, you will have paid 100 € in "hidden commission" via spread, whereas with Broker A you would have paid 1€ in commission. The difference is huge, which is why it is so important that you learn that this type of "hidden commission" exists. 
