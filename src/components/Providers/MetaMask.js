import React, { useState } from 'react'
import {
    requestTxSig,
    waitForSignedTxs,
    requestAccountAddress,
    waitForAccountAuth,
    FeeCurrency,
    // Ensure that we are importing the functions from dappkit/lib/web
} from '@celo/dappkit/lib/web'

import { CeloContract } from '@celo/contractkit'
import { newKitFromWeb3 } from '@celo/contractkit'

import Web3 from 'web3';

// set up ContractKit, using forno as a provider
// testnet
export const web3 = new Web3(window.celo);
// mainnet -- comment out the above, uncomment below for mainnet
// export const web3 = new Web3('https://forno.celo.org');

// @ts-ignore
export const kit = newKitFromWeb3(web3);

function Connect() {

    const login = async () => {
        // console.log("entering login")
        // // const stabletoken = await kit.contract.getStableToken()
        // const oneStableToken = kit.web3.utils.toWei('1', 'ether')
        // const account = await kit.web3.eth.getAccounts()
        
        // // const txo = await stabletoken.transfer("0x534FB610Df932CD5D30526571c01E5B31FC1A92D", oneStableToken).send({from: account[0]})
        // // const txsg = await kit.connection.sendSignedTransaction(txo);
        // // const tx = await kit.sendTransactionObject(txsg, { from: account[0]})
        // // const hash = await txo.getHash()
        // // const receipt = await txo.waitReceipt()

        // const tx = await kit.sendTransaction({
        //   from: account[0],
        //   to: "0x534FB610Df932CD5D30526571c01E5B31FC1A92D",
        //   value: oneStableToken,
        // })
        // const hash = await tx.getHash()
        // const receipt = await tx.waitReceipt()

        const goldtoken = await kit._web3Contracts.getGoldToken()
        const oneGold = kit.web3.utils.toWei('1', 'ether')
        const account = await kit.web3.eth.getAccounts()
        const gasEstimate = await kit.web3.eth.getGasPrice()
        const txo = await goldtoken.methods.transfer("0x534FB610Df932CD5D30526571c01E5B31FC1A92D", oneGold)
        const tx = await kit.sendTransactionObject(txo, { from: account[0], gasPrice: gasEstimate})
        const hash = await tx.getHash()
        const receipt = await tx.waitReceipt()

        
        // Wait for the MetaMask Wallet response
        try {
          // window.celo.enable()
          // console.log(window.celo._state.accounts[0])
          // awakit.connection.addAccount()
          // setAddress(dappkitResponse.address)
          // transfer()
        // Catch and handle possible timeout errors
        } catch (error) {
          console.log(error)
          // this.setState({
          //   status: "Login timed out, try again.",
          // })
        }  
    }

    // const transfer = async () => {
    //     if (address) {
    //       console.log("Entering transfer")
    //       const requestId = 'transfer';
    //       const dappName = 'Hello Celo';
    
    //       // Replace with your own account address and desired value in WEI to transfer
    //       const transferToAccount = "0x534FB610Df932CD5D30526571c01E5B31FC1A92D";
    //       const transferValue = "0x14D1120D7B160000";
    
    //       // Create a transaction object using ContractKit
    //       const stableToken = await kit.contracts.getStableToken();
    //       const txObject = stableToken.transfer(transferToAccount, transferValue).txo;
    
    //       // Send a request to the Celo wallet to send an update transaction to the HelloWorld contract
    //       requestTxSig(
    //         // @ts-ignore
    //         kit,
    //         [
    //           {
    //             // @ts-ignore
    //             tx: txObject,
    //             from: address,
    //             to: stableToken.address,
    //             feeCurrency: FeeCurrency.cUSD
    //           }
    //         ],
    //         { requestId, dappName, callback: window.location.href }
    //       )
    
    //       // Get the response from the Celo wallet
    //       // Wait for signed transaction object and handle possible timeout
    //       let rawTx;
    //       try {
    //         const dappkitResponse = await waitForSignedTxs(requestId)
    //         rawTx = dappkitResponse.rawTxs[0]
    //       } catch (error) {
    //         // console.log(error)
    //         // this.setState({status: "transaction signing timed out, try again."})
    //         return
    //       }
    
    //       // Wait for transaction result and check for success
    //       let status;
    //       const tx = await kit.connection.sendSignedTransaction(rawTx);
    //       const receipt = await tx.waitReceipt();
    //       alert(receipt)
    
    //       // if (receipt.status) {
    //       //   status = "transfer succeeded with receipt: " + receipt.transactionHash;
    //       // } else {
    //       //   console.log(JSON.stringify(receipt))
    //       //   status = "failed to send transaction"
    //       // }
    //     }
    //   }

    // if(window.celo){
    //     window.celo.enable()
    //     walletConnector = window.celo
    // }
    // if(window.ethereum){
    //     window.ethereum.enable()
    //     walletConnector = window.ethereum
    // }

    // console.log(walletConnector)

    return (
        <div>
            <h1 onClick={login}>Conectar MetaMask</h1>
            {/* <h1 onClick={transfer}>Transferir</h1> */}
        </div>
    )
}

export default Connect