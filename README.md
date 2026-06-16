# 📈 SalesScope — Next.js Sales Dashboard

A sales analytics dashboard built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Recharts**.
Visualizes Superstore sales data (2022–2024) with interactive chart types and custom filters.

## ✨ Features

- 📊 Bar, Line, and Pie charts (switchable)
- 🔢 KPI cards: Total Revenue, Units Sold, Monthly Avg, Best Month
- 🎯 Custom filter: set minimum revenue threshold
- 📅 Year selector: switch between 2022, 2023, 2024
- ⚛️ Atomic Design structure (atoms → molecules → organisms → templates)

## 🛠 Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Recharts

## 🚀 Setup

```bash
git clone https://github.com/hams1ka/sales-dashboard.git
cd sales-dashboard
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure

Follows Atomic Design:

- `atoms/` – Badge, KPICard, ChartToggleButton
- `molecules/` – BarChart, LineChart, PieChart, FilterInput
- `organisms/` – ChartSection, SummarySection
- `templates/` – DashboardLayout

## 📦 Data Source

Inspired by the [Superstore Sales Dataset](https://www.kaggle.com/datasets/vivek468/superstore-dataset-final) on Kaggle.
