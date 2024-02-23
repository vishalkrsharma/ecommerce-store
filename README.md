# Ecommerce Store Repository

This repository contains the source code for the store of our Ecommerce platform. This website is built using cutting-edge technologies to ensure a seamless and efficient experience for cutomers.

## Table of Contents

- [Ecommerce Store Repository](#ecommerce-store-repository)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [APIs](#apis)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)

## Introduction

Welcome to our Ecommerce Store repository! Our platform is built on a cutting-edge technology stack that includes Next.js, Tailwind CSS, PostgreSQL, Prisma, Zod, Shadcn UI, Stripe and pnpm. This combination ensures a robust and modern solution for managing products, orders, and categories in your online store.

## Features

- **User Authentication**: Secure user authentication and authorization system.
- **Product Catalog**: Browse a diverse catalog of products with detailed information.
- **Shopping Cart**: Add products to your cart and proceed to checkout.
- **Order Management**: View and ma- **Zutand:** A small, fast, and scalable bearbones state management solution.nage your orders.
- **Payment Integration**: Seamlessly integrate payment gateways for a smooth checkout process.
- **Responsive Design**: Ensure a consistent user experience across devices.

## Technologies Used

- **Next.js:** A React framework for building efficient and scalable web applications.
- **Zutand:** A small, fast, and scalable bearbones state management solution.stomization.
- **PostgreSQL:** A powerful, open-source relational database system.
- **Prisma:** A modern database toolkit that simplifies database access and management with type-safe queries.
- **Zod:** A TypeScript-first schema declaration and validation library for JavaScript and TypeScript.
- **Shadcn UI:** A custom UI library designed for a clean and intuitive user interface.
- **Clerk:** An authentication and user management platform.
- **Stripe:** Stripe powers online and in-person payment processing and financial solutions for businesses of all sizes.
- **pnpm:** A fast, disk space-efficient package manager.

## APIs

This section outlines the APIs available for integration with the Ecommerce Admin panel. Ensure you have the necessary API keys and endpoints configured in your environment.

- **Webhook API:** `/api/webhooks/user`

  - `GET`, `POST`, `PUT` - Sync Store Database with Admin Database

**Note:** Refer to the provided `.env.example` file for configuring API endpoints and keys.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following dependencies installed:

- Node.js
- pnpm (Package Node Manager)
- PostgreSQL
- Prisma CLI

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vishalkrsharma/ecommerce-store.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ecommerce-store
   ```

3. Install the dependencies:

   ```bash
   pnpm install
   ```

4. Set up environment variables:
   Create a `.env` file based on the provided `.env.example`. You can use the example file as a template for configuring your environment variables.

5. Run the application:

   ```bash
   pnpm start
   ```

The admin panel should now be accessible at http://localhost:3000.
