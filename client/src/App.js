import React, {useState} from "react";
/* import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Projects } from './Components/Projects';
import { Copyright } from './Components/Copyright'; */

import { Contact } from './Components/Contact';

/* const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');


const app = express();

app.use(express.urlencoded ({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

*/

function App() {

  return (
    <div className="App">
      <Contact />
    </div>
  );
}

export default App;

