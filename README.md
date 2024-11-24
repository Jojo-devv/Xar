
# Stock Control and Inventory Management System (SCIMS)

## Prerequisites
1. **Node.js** (version 14+)
2. **MySQL** (version 5.7+)

## Installation

### Backend (Node.js)
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/scims.git
   cd scims
2. Install dependencies:

```bash
npm install
3. Set up MySQL database:

Run the SQL script (scims_schema.sql) to create the database and tables:
```bash
mysql -u root -p < scims_schema.sql

4. Configure your database credentials in config/db_config.js.

### Frontend
Open index.html in a browser to view the frontend.

### Running the Application
1. Start the Backend Server 

```bash
node server.js


2. Open your browser and navigate to http://localhost:3000 to interact with the inventory management system.

### Minimum System Requirements 
Operating System: Windows, macOS, or Linux
RAM: 2 GB or higher
Disk Space: 50 MB for the application files
Software:
Node.js v14+
MySQL v5.7+