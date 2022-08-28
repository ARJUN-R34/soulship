// import { ethers } from 'ethers'
// import contractABI from '../artifacts/contracts/WavePortal.sol/WavePortal.json'
// const contractAddress = '0xEb3B8A7bF4E853d11aD233e15438852Ac067e253'

import { ethers } from 'ethers'
import { chainIds } from '~~/repository/ChainIds'

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

  // getOrgDetails(address orgAddress) public view returns (Organizations memory)
  // getAllContracts() public view returns (address[] memory)

  // CreateNewChild(string memory name, string memory symbol, string memory utility, string memory uri) public returns (bool)
  // registration(string memory orgName, string memory logoUri) public returns (bool)
  return {
    connectWallet,
    account,
    organization_name,
    network,
    getAccount,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useWeb3Store, import.meta.hot))
