const express = require('express');
require('dotenv').config();

const app = express();

// routes
app.use('/api/v1/users/', require('./routes/users'));
app.use('/api/v1/auth/', require('./routes/auth'));
app.use('/api/v1/contacts/', require('./routes/contacts'));

// port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is runing ${PORT}`));
