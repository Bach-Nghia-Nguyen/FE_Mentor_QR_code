import React from 'react'
import QRCode from 'assets/images/image-qr-code.png'
import './App.css'

function App() {
  return (
    <div className="App">
      <img src={QRCode} alt="QR code" className="QR-code" />

      <h3 className="heading">Improve your front-end skills by building projects</h3>

      <p className="description">
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </p>
    </div>
  )
}

export default App
