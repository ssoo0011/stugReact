import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap-icons/font/bootstrap-icons.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/theme/theme.min.css';
import './assets/css/theme/hs-mega-menu.min.css';
import './assets/css/custom.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
/*import './assets/js/theme/hs-header.min.js'
import './assets/js/theme/hs-mega-menu.min.js'
import './assets/js/theme/hs-go-to.min.js'
import './assets/js/theme/hs-navbar.min.js'*/

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

  </StrictMode>,
)
