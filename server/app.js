const express = require('express');
const app = express();
const any = require('./routes/any');
let cors = require('cors');

app.use(cors());
app.use(express.json());

app.use("/api",any);

const PORT = 8181;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));