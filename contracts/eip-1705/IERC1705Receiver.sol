// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC1705/IERC1705Receiver.sol)

pragma solidity ^0.8.0;

/**
 * @title ERC1705 token receiver interface
 * @dev Interface for any contract that wants to support safeTransfers
 * from ERC1705 asset contracts.
 */
interface IERC1705Receiver {
    /**
     * @dev Whenever an {IERC1705} `tokenId` token is transferred to this contract via {IERC1705-safeTransferFrom}
     * by `operator` from `from`, this function is called.
     *
     * It must return its Solidity selector to confirm the token transfer.
     * If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted.
     *
     * The selector can be obtained in Solidity with `IERC1705Receiver.onERC1705Received.selector`.
     */
    function onERC1705Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes calldata data
    ) external returns (bytes4);
}