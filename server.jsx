const mongoose = require('mongoose'),
cors = require('cors'),
express= require('express'),
keys = require('./keys'),
app = express();

const API_PORT = process.env.PORT || 5000;
const dbURI = `mongodb+srv://${keys.username}:${keys.password}@cluster0.knerv8t.mongodb.net/`

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const journalSchema = new mongoose.Schema({
    tags: Array, 
    title: String, 
    body: String, 
    created: {type: Date, default: Date.now} 
});

const Journal = mongoose.model('Journal', journalSchema);

app.listen(API_PORT, () => console.log(`listening on port $(API_PORT)`));

