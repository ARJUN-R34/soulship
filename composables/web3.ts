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
    const { ethereum } = window
    if (ethereum) {
      const myAccounts = await ethereum.request({ method: 'eth_requestAccounts' })
      account.value = myAccounts[0]
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(contractAddress, contractABI, signer)
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
      getAccount()
      const Contract = await getContract() as unknown as ethers.Contract
      const currentValue = await Contract.getOrgDetails(orgAddress)
      return currentValue
    }
    catch (error) {
    }
  }
  async function getAllContracts() {
    try {
      getAccount()
      const Contract = await getContract() as unknown as ethers.Contract
      const currentValue = await Contract.getAllContracts()
      console.log('🚀 ~ file: web3.ts ~ line 106 ~ getAllContracts ~ currentValue', currentValue)
      return currentValue
    }
    catch (error) {
    }
  }
  async function CreateNewChild(name: string, symbol: string, utility: string, uri: string) {
    try {
      getAccount()
      const Contract = await getContract() as unknown as ethers.Contract
      const createReceipt = await Contract?.CreateNewChild(name, symbol, utility, uri).reset()
      await createReceipt.wait()
      return createReceipt
    }
    catch (error) {
    }
  }
  async function registration(orgName: string, logoUri: string | null) {
    try {
      getAccount()
      const Contract = await getContract() as unknown as ethers.Contract
      const createReceipt = await Contract?.registration(orgName, logoUri).reset()
      await createReceipt.wait()
      return createReceipt
    }
    catch (error) {

    }
  }
  async function getOrgCollection(orgAddress: string) {
    try {
      getAccount()
      console.log('🚀 ~ file: web3.ts ~ line 136 ~ getOrgCollection ~ orgAddress', orgAddress)
      const Contract = await getContract() as unknown as ethers.Contract
      console.log('🚀 ~ file: web3.ts ~ line 139 ~ getOrgCollection ~ Contract', Contract)
      const count = await Contract.numberOfCollections(orgAddress)
      // console.log('🚀 ~ file: web3.ts ~ line 140 ~ getOrgCollection ~ count', count)
      const collections = []
      for (let index = 0; index < 2; index++) {
        const currentCollection = await Contract.getContractData(index)
        console.log('🚀 ~ file: web3.ts ~ line 143 ~ getOrgCollection ~ currentCollection', currentCollection)
        if (currentCollection.organizationAddress.toUpperCase() === orgAddress.toUpperCase())
          collections.push(currentCollection)
      }
      console.log('🚀 ~ file: web3.ts ~ line 141 ~ getOrgCollection ~ collections', collections)
      return collections
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
    getOrgCollection,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useWeb3Store, import.meta.hot))
