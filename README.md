# UberClocked Web Page

UberClocked is a full-stack project with a **React frontend** and a **Node.js backend**. This guide will walk you through the steps to clone and run the project locally.

## Prerequisites

Before you begin, ensure you have the following software installed:

- **Node.js** (v14 or higher): [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git**: [Download Git](https://git-scm.com/)

## Getting Started

Follow the steps below to clone and run the project on your local machine.

### 1. Clone the Repository

Open your terminal and run the following command to clone the repository:

```bash
git clone https://github.com/GarroteSantiago/UberClocked.git
cd UberClocked
```

### 2. Install Dependencies

```bash
cd client
npm install
cd ../server
npm install
```

### 3. Set Up Environment Variables

```bash
cd client
touch .env
echo REACT_APP_BACKEND_URL=http://localhost:5000 > .env
cd ../server
touch .env
echo DATABASE_URL=your-database-url >> .env
echo PORT=5000 >> .env
```