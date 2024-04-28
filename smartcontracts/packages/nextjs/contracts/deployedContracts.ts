/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  134: {
    CheckInManager: {
      address: "0x186953EEAa009247EAf45FEeB5D037Af874C74De",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_eventManagerDeployed",
              type: "address",
            },
            {
              internalType: "address",
              name: "_userRegistryDeployed",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "eventId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint8",
              name: "checkInId",
              type: "uint8",
            },
          ],
          name: "CheckInConfirmed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "eventId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint8",
              name: "checkInId",
              type: "uint8",
            },
          ],
          name: "CheckInRejected",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "eventId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint8",
              name: "checkInId",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "string",
              name: "knownFaceHash",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "unknownFaceHash",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "userLocation",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "eventLocation",
              type: "string",
            },
          ],
          name: "CheckInRequested",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_eventId",
              type: "uint256",
            },
          ],
          name: "getMyCheckIns",
          outputs: [
            {
              components: [
                {
                  internalType: "uint8",
                  name: "id",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "faceHash",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "location",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "emailProtectedAddress",
                  type: "address",
                },
                {
                  internalType: "enum CheckInManager.CheckInStatus",
                  name: "status",
                  type: "uint8",
                },
              ],
              internalType: "struct CheckInManager.CheckIn[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_eventId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_user",
              type: "address",
            },
          ],
          name: "getUserCheckIns",
          outputs: [
            {
              components: [
                {
                  internalType: "uint8",
                  name: "id",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "faceHash",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "location",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "emailProtectedAddress",
                  type: "address",
                },
                {
                  internalType: "enum CheckInManager.CheckInStatus",
                  name: "status",
                  type: "uint8",
                },
              ],
              internalType: "struct CheckInManager.CheckIn[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_eventId",
              type: "uint256",
            },
          ],
          name: "getUsersCheckInsFromEvent",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "offchainValidator",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_eventId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_user",
              type: "address",
            },
            {
              internalType: "uint8",
              name: "_checkInId",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "_approved",
              type: "bool",
            },
          ],
          name: "replyCheckIn",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_eventId",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "unknownFaceHash",
              type: "string",
            },
            {
              internalType: "string",
              name: "userLocation",
              type: "string",
            },
            {
              internalType: "address",
              name: "emailProtectedAddress",
              type: "address",
            },
          ],
          name: "requestCheckIn",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_offchainValidator",
              type: "address",
            },
          ],
          name: "setOffchainValidator",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    EventManager: {
      address: "0xf0d25784782ce6229fCbe5eE4366A7Bb4103C70F",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "eventId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              indexed: false,
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "EventCreated",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string",
            },
            {
              internalType: "string",
              name: "_description",
              type: "string",
            },
            {
              internalType: "string",
              name: "_imageHash",
              type: "string",
            },
            {
              internalType: "string",
              name: "_location",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "_startTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_endTime",
              type: "uint256",
            },
          ],
          name: "createEvent",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "events",
          outputs: [
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              internalType: "string",
              name: "imageHash",
              type: "string",
            },
            {
              internalType: "string",
              name: "location",
              type: "string",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "startTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "endTime",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "active",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getAllEvents",
          outputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "imageHash",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "location",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "startTime",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endTime",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "active",
                  type: "bool",
                },
              ],
              internalType: "struct EventManager.Event[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_eventId",
              type: "uint256",
            },
          ],
          name: "getEvent",
          outputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "imageHash",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "location",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "startTime",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endTime",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "active",
                  type: "bool",
                },
              ],
              internalType: "struct EventManager.Event",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_eventId",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_name",
              type: "string",
            },
            {
              internalType: "string",
              name: "_description",
              type: "string",
            },
            {
              internalType: "string",
              name: "_imageHash",
              type: "string",
            },
            {
              internalType: "string",
              name: "_location",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "_startTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_endTime",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "_active",
              type: "bool",
            },
          ],
          name: "updateEvent",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    UserRegistry: {
      address: "0xa89a5609A98a9fe1A29823Eb9cCDD6d7A694001B",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "userAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "faceHash",
              type: "string",
            },
          ],
          name: "UserRegistered",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "userAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "faceHash",
              type: "string",
            },
          ],
          name: "UserUpdated",
          type: "event",
        },
        {
          inputs: [],
          name: "getMyInfo",
          outputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "faceHash",
                  type: "string",
                },
              ],
              internalType: "struct UserRegistry.User",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_userAddress",
              type: "address",
            },
          ],
          name: "getUserInfo",
          outputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "faceHash",
                  type: "string",
                },
              ],
              internalType: "struct UserRegistry.User",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string",
            },
            {
              internalType: "string",
              name: "_faceHash",
              type: "string",
            },
          ],
          name: "registerUser",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string",
            },
            {
              internalType: "string",
              name: "_faceHash",
              type: "string",
            },
          ],
          name: "updateUserInfo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
