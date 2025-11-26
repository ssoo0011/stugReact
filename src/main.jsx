import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap-icons/font/bootstrap-icons.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/theme/theme.css';
import './assets/css/theme/hs-mega-menu.min.css';
import './assets/css/theme/theme.css';
import './assets/css/Font.css';
import './assets/css/custom.css';

// import './assets/css/docs.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

  </StrictMode>,
)
