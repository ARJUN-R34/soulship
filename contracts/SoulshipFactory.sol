//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./SoulSBT.sol";

contract SoulshipFactory {

    struct DeployedContracts {
        address contractAddress;
        address organizationAddress;
        string utility;
        string uri;
        string name;
        string symbol;
    }

    struct Organizations {
        address organizationAddress;
        string organizationName;
        string organizationLogo;
    }

    address[] contractAddresses;

    mapping (uint256 => DeployedContracts) public getContractData;
    
    mapping (address => uint256) public numberOfCollections;

    mapping(address => Organizations) getOrgData;

    function registration(string memory orgName, string memory logoUri) public returns (bool) {
        require(getOrgData[msg.sender].organizationAddress != msg.sender , "Soul: This organization is already registered.");

        getOrgData[msg.sender] = Organizations({
            organizationAddress: msg.sender,
            organizationName: orgName,
            organizationLogo: logoUri
        });

        return true;
    }

    function CreateNewChild(string memory name, string memory symbol, string memory utility, string memory uri) public returns (bool) {
        require(getOrgData[msg.sender].organizationAddress == msg.sender , "Soul: This organization is not registered.");

        SoulSBT soulAddress = new SoulSBT(name, symbol);

        SoulSBT soul = SoulSBT(soulAddress);

        soul.transferOwnership(msg.sender);

        uint256 collections = numberOfCollections[msg.sender];

        contractAddresses.push(address(soulAddress));

        getContractData[numberOfCollections[msg.sender]] = DeployedContracts({
            contractAddress: address(soulAddress),
            organizationAddress: msg.sender,
            utility: utility,
            uri: uri,
            name: name,
            symbol: symbol
        });

        numberOfCollections[msg.sender] = collections + 1;

        emit ContractCreated(address(soulAddress));

        return true;
    }

    function getOrgDetails(address orgAddress) public view returns (Organizations memory) {
        return getOrgData[orgAddress];
    }

    function getAllContracts() public view returns (address[] memory) {
        return contractAddresses;
    }

    event ContractCreated(address indexed contractAddress);
}