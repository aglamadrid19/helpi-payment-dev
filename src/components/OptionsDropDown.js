import React, { useState } from 'react'
import MetaMask from "./Providers/MetaMask"
import Valora from "./Providers/Valora"

function OptionsDropDown() {
  const [isMetaMask, setIsMetaMask] = useState(false)
  const [isValora, setIsValora] = useState(false) 
  const [connected, setConnected] = useState(false)

  const selectWallet = function() {
    setConnected(!connected)
  }

  const setWalletState = function(event) {
    if (event.target.value === "MetaMask"){
      setIsMetaMask(true)
    }
    if (event.target.value === "Valora") {
      setIsValora(true)
    }
  }

  return (
      <div>
          <select id="wallets" onChange={setWalletState}>
            <option value="MetaMask">MetaMask</option>
            <option value="Valora">Valora</option>
          </select>
          <button onClick={selectWallet}>Select</button>
          {connected ? <MetaMask></MetaMask> : <Valora></Valora>}
      </div>
    )
}

export default OptionsDropDown