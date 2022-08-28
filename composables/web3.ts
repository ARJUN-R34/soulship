// import { ethers } from 'ethers'
// import contractABI from '../artifacts/contracts/WavePortal.sol/WavePortal.json'
// const contractAddress = '0xEb3B8A7bF4E853d11aD233e15438852Ac067e253'

import { ethers } from 'ethers'
import contractABI from '../contracts/artifacts/SoulshipFactory.json'
import { chainIds } from '~~/repository/ChainIds'
import { EIP712Domain, domain } from '~~/repository/signTxn'
const contractAddress = '0x2A8385c6E0529Fd91D9B320756F797DdF402c8aF'
export const useWeb3Store = defineStore('web3', () => {
  const account = ref('')
  const network = ref('')
  const organization_name = ref('sample_org')
  async function getAccount() {
    try {
      const { ethereum } = window
      if (ethereum) {
        const myAccounts = await ethereum.request({ method: 'eth_requestAccounts' })
        account.value = myAccounts[0]
        const provider = new ethers.providers.Web3Provider(ethereum)
        // const signer = provider.getSigner()
        const networkDetails = await provider.getNetwork()
        network.value = chainIds[networkDetails.chainId]
      }
    }
    catch (e) {
      console.log('🚀 ~ file: web3.ts ~ line 21 ~ getBalance ~ e', e)
    }
  }
  async function getContract() {
    const { ethereum } = window
    if (ethereum) {
      const myAccounts = await ethereum.request({ method: 'eth_requestAccounts' })
      account.value = myAccounts[0]
      const provider = new ethers.providers.Web3Provider(ethereum)
      const contract = new ethers.Contract(contractAddress, contractABI, provider)
      return contract
    }
  }

  async function connectWallet() {
    try {
      const { ethereum } = window
      if (!ethereum) {
        alert('Must connect to MetaMask!')
        return
      }
      await getAccount()
    }
    catch (error) {
    }
  }
  async function signData(validityStatus: string) {
    const data = JSON.stringify({
      domain: {
        // Defining the chain aka Rinkeby testnet or Ethereum Main Net
        chainId: domain.chainId,
        // Give a user friendly name to the specific contract you are signing for.
        name: domain.name,
        // Just let's you know the latest version. Definitely make sure the field name is correct.
        version: domain.version,
        // verifyingContract: domain.verifyingContract,
      },

      // Defining the message signing data content.
      message: {
        /*
         - Anything you want. Just a JSON Blob that encodes the data you want to send
         - No required fields
         - This is DApp Specific
         - Be as explicit as possible when building out the message schema.
        */
        validation: validityStatus,
      },
      // Refers to the keys of the types object below.
      primaryType: 'Validation',
      types: {
        // TODO: Clarify if EIP712Domain refers to the domain the contract is hosted on
        EIP712Domain: [
          { name: 'name', type: 'string' },
          { name: 'version', type: 'string' },
          { name: 'chainId', type: 'uint256' },
        ],
        // Not an EIP712Domain definition
        Validation: [{ name: 'validation', type: 'string' }],
      },
    })
    try {
      const { ethereum } = window
      if (ethereum) {
        const method = 'eth_signTypedData_v4'
        const params = [account.value, data]
        const result = await ethereum.request({ method, params, from: account.value })
        const signature = result.substring(2)
        console.log('🚀 ~ file: sign-txn.ts ~ line 32 ~ signData ~ signature', signature)
        const r = `0x${signature.substring(0, 64)}`
        console.log('🚀 ~ file: sign-txn.ts ~ line 34 ~ signData ~ r', r)
        const s = `0x${signature.substring(64, 128)}`
        console.log('🚀 ~ file: sign-txn.ts ~ line 36 ~ signData ~ s', s)
        const v = parseInt(signature.substring(128, 130), 16)
        console.log('🚀 ~ file: sign-txn.ts ~ line 38 ~ signData ~ v', v)
      }
    }
    catch (e) {
      console.log('🚀 ~ file: web3.ts ~ line 21 ~ signData ~ e', e)
    }
  }
  async function getOrgDetails(orgAddress: string) {
    try {
      const Contract = await getContract() as unknown as ethers.Contract
      console.log('🚀 ~ file: web3.ts ~ line 63 ~ getOrgDetails ~ Contract', Contract)
      const currentValue = await Contract.getOrgDetails(orgAddress)
      console.log('🚀 ~ file: web3.ts ~ line 65 ~ getOrgDetails ~ currentValue', currentValue)
    }
    catch (error) {
    }
  }
  async function getAllContracts() {
    try {
    }
    catch (error) {
    }
  }
  async function CreateNewChild(name: string, symbol: string, utility: string, uri: string) {
    try {
    }
    catch (error) {
    }
  }
  async function registration(orgName: string, logoUri: string) {
    try {
      const Contract = await getContract()
      const createReceipt = await Contract?.registration(orgName, logoUri).reset()
      await createReceipt.wait()
      return createReceipt
    }
    catch (error) {

    }
  }
  return {
    connectWallet,
    account,
    organization_name,
    network,
    getAccount,
    getOrgDetails,
    signData,
    getAllContracts,
    CreateNewChild,
    registration,
    getContract,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useWeb3Store, import.meta.hot))
