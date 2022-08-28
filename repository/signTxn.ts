export const EIP712Domain = [
  { name: 'name', type: 'string' },
  { name: 'version', type: 'string' },
  { name: 'chainId', type: 'uint256' },
  { name: 'verifyingContract', type: 'address' },
]
export const domain = {
  name: 'SoulShip', // (replaced from original value)
  version: '1',
  chainId: 80001, // (replaced from original value)
  verifyingContract: '0xd093dD097772300939Ec1ED7482B415bd43D9246',
}

export const messageType = [
  { name: 'Validity', type: 'string' },
]
