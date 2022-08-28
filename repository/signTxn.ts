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
  verifyingContract: '0x2A8385c6E0529Fd91D9B320756F797DdF402c8aF',
}

export const messageType = [
  { name: 'Validity', type: 'string' },
]
