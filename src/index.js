require('dotenv').config();
const TableService = require('./service');

const service = new TableService();

service.fillTable();
