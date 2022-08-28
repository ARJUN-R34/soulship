// import { ethers } from 'ethers'
// import contractABI from '../artifacts/contracts/WavePortal.sol/WavePortal.json'
// const contractAddress = '0xEb3B8A7bF4E853d11aD233e15438852Ac067e253'

import { ethers } from 'ethers'
import contractABI from '../contracts/artifacts/SoulshipFactory.json'
import { chainIds } from '~~/repository/ChainIds'
import { EIP712Domain, domain } from '~~/repository/signTxn'
const contractAddress = '0x2A8385c6E0529Fd91D9B320756F797DdF402c8aF'
 type validityType = 'once' | 'forever'
interface IMessage {
  Validity: validityType
}
export const useWeb3Store = defineStore('web3', () => {
  const account = ref('')
  const network = ref('')
  const organization_name = ref('sample_org')
  const message = ref<IMessage>({
    Validity: 'once',
  })
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
  async function signData() {
    const data = JSON.stringify({
      types: {
        EIP712Domain,
        message: message.value,
      },
      domain,
      primaryType: 'message',
      message: message.value,
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
    signData,
    getAllContracts,
    CreateNewChild,
    registration,
    getContract,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useWeb3Store, import.meta.hot))
