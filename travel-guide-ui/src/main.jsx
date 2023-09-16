import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer, toast } from "react-toastify";

import { GoogleOAuthProvider } from '@react-oauth/google';

 ReactDOM.createRoot(document.getElementById('root')).render(
     <GoogleOAuthProvider clientId="971775216388-aclsp2vtc24ts626deq28ab46hefe41p.apps.googleusercontent.com">
        <React.StrictMode>
        <App />
    <ToastContainer position="bottom-right" />
        </React.StrictMode>
    
    </GoogleOAuthProvider>
 )


