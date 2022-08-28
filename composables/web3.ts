// import { ethers } from 'ethers'
// import contractABI from '../artifacts/contracts/WavePortal.sol/WavePortal.json'
// const contractAddress = '0xEb3B8A7bF4E853d11aD233e15438852Ac067e253'

import { ethers } from 'ethers'
import contractABI from '../contracts/artifacts/SoulshipFactory.json'
import { chainIds } from '~~/repository/ChainIds'
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
    try {
      const { ethereum } = window
      if (ethereum) {
        const myAccounts = await ethereum.request({ method: 'eth_requestAccounts' })
        account.value = myAccounts[0]
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, contractABI, signer)
        console.log('🚀 ~ file: web3.ts ~ line 39 ~ getContract ~ contract.value', contract)
        return contract
      }
    }
    catch (e) {
      console.log('🚀 ~ file: web3.ts ~ line 21 ~ getBalance ~ e', e)
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

  async function getOrgDetails(orgAddress: string) {
    try {
      const Contract = await getContract()
      console.log('🚀 ~ file: web3.ts ~ line 63 ~ getOrgDetails ~ Contract', Contract)
      const currentValue = await Contract?.getOrgDetails(account)
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
      console.log('🚀 ~ file: web3.ts ~ line 86 ~ registration ~ createReceipt', createReceipt)
      await createReceipt.wait()
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
    getAllContracts,
    CreateNewChild,
    registration,
    getContract,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useWeb3Store, import.meta.hot))
