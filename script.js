log = console.log.bind(console, " Script.js : ")
const owner = false

const address = '0xd9145CCE52D386f254917e481eB44e9943F39138'

var abi = [{
	"compiler": {
		"version": "0.8.7+commit.e28d00a7"
	},
	"language": "Solidity",
	"output": {
		"abi": [
			{
				"inputs": [],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "gtin",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "string",
						"name": "productName",
						"type": "string"
					}
				],
				"name": "AuctionActive",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "auctionNum",
						"type": "uint256"
					}
				],
				"name": "AuctionCancelled",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "gtin",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "string",
						"name": "productName",
						"type": "string"
					}
				],
				"name": "AuctionClosed",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "gtin",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "string",
						"name": "productName",
						"type": "string"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "highestBid",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "address",
						"name": "seller",
						"type": "address"
					}
				],
				"name": "AuctionResults",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "address",
						"name": "bidder",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "BidWithdrawn",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "gtin",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "string",
						"name": "productName",
						"type": "string"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "highestBid",
						"type": "uint256"
					}
				],
				"name": "NewBid",
				"type": "event"
			},
			{
				"inputs": [],
				"name": "auctionCount",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "auctionEnd",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"name": "auctions",
				"outputs": [
					{
						"internalType": "string",
						"name": "productName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "gtin",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "auctionNum",
						"type": "uint256"
					},
					{
						"internalType": "enum ProductAuction.State",
						"name": "state",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "highestBid",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "auctionDuration",
						"type": "uint256"
					},
					{
						"internalType": "address payable",
						"name": "seller",
						"type": "address"
					},
					{
						"internalType": "address payable",
						"name": "buyer",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_auctionNum",
						"type": "uint256"
					}
				],
				"name": "cancelAuction",
				"outputs": [],
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "string",
						"name": "_productName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "_gtin",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "_price",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "_auctionDuration",
						"type": "uint256"
					}
				],
				"name": "createAuction",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_auctionNum",
						"type": "uint256"
					}
				],
				"name": "makeBid",
				"outputs": [],
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "owner",
				"outputs": [
					{
						"internalType": "address payable",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_auctionNum",
						"type": "uint256"
					}
				],
				"name": "withdrawlBid",
				"outputs": [],
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_auctionNum",
						"type": "uint256"
					}
				],
				"name": "withdrawlProceeds",
				"outputs": [],
				"stateMutability": "payable",
				"type": "function"
			}
		],
		"devdoc": {
			"author": "Alexander Poe",
			"custom:experimental": "This is an experimental contract.",
			"details": "All function calls are currently implemented without side effects",
			"kind": "dev",
			"methods": {},
			"title": "An product auction for commodities ",
			"version": 1
		},
		"userdoc": {
			"kind": "user",
			"methods": {
				"constructor": {
					"notice": "need function that works with time library to identify when current times passes the aunction duration, afer that it will set the state to ended"
				},
				"withdrawlBid(uint256)": {
					"notice": "withdrawl bid after auction is over IF not winnner or if auction is cancelled "
				}
			},
			"notice": "This contract is in a prototype ",
			"version": 1
		}
	},
	"settings": {
		"compilationTarget": {
			"contracts/finproj.sol": "ProductAuction"
		},
		"evmVersion": "london",
		"libraries": {},
		"metadata": {
			"bytecodeHash": "ipfs"
		},
		"optimizer": {
			"enabled": false,
			"runs": 200
		},
		"remappings": []
	},
	"sources": {
		"contracts/finproj.sol": {
			"keccak256": "0x6cc264fcf8477cd832d2e1a266ef2a3bb75109745489a0b13fccb66e45812976",
			"license": "GPL-3.0",
			"urls": [
				"bzz-raw://ee687abde5be46dcd1e9405bb20f0171ab5a6769ad08a9c8065c57055f0c67d4",
				"dweb:/ipfs/QmeAQTgHB7MvYVPLvr7BCVDFUWXjGV4d12rRGszmf68a9e"
			]
		}
	},
	"version": 1
}]


// need a bidding function

window.addEventListener('load', function() {
  
    if (typeof window.ethereum !== 'undefined') {
      console.log('window.ethereum is enabled')
      if (window.ethereum.isMetaMask === true) {
        console.log('MetaMask is active')
        let mmDetected = document.getElementById('mm-detected')
        mmDetected.innerHTML += 'MetaMask Is Available!'
  
        // add in web3 here
        var web3 = new Web3(window.ethereum)
  
      } else {
        console.log('MetaMask is not available')
        let mmDetected = document.getElementById('mm-detected')
        mmDetected.innerHTML += 'MetaMask Not Available!'
        // let node = document.createTextNode('<p>MetaMask Not Available!<p>')
        // mmDetected.appendChild(node)
      }
    } else {
      console.log('window.ethereum is not found')
      let mmDetected = document.getElementById('mm-detected')
      mmDetected.innerHTML += '<p>MetaMask Not Available!<p>'
    }
  })

var web3 = new Web3(window.ethereum)



const mmEnable = document.getElementById('mm-connect');

// since MetaMask has been detected, we know
// `ethereum` is an object, so we'll do the canonical
// MM request to connect the account. 
// 
// typically we only request access to MetaMask when we
// need the user to do something, but this is just for
// an example
 
mmEnable.onclick = async () => {
  await ethereum.request({ method: 'eth_requestAccounts'})
  // grab mm-current-account
  // and populate it with the current address
  var mmCurrentAccount = document.getElementById('mm-current-account');
  mmCurrentAccount.innerHTML = 'Current Account: ' + ethereum.selectedAddress
}

const productAuction = new web3.eth.Contract(abi, address)
productAuction.setProvider(window.ethereum)

console.log(productAuction, "herer")

const GetValue = document.getElementById('get-value')

GetValue.onclick = async () => {

    var web3 = new Web3(window.ethereum)
  
    const productAuction = new web3.eth.Contract(abi, address)
    productAuction.setProvider(window.ethereum)
  
    var value = productAuction.methods.makeBid(1).call({from: ethereum.selectedAddress}).then(function(error, result){
        console.log(error, result)
    })
  
    const ssDisplayValue = document.getElementById('display-value')
  
    ssDisplayValue.innerHTML = 'Current Simple Storage Value: ' + value
}
// populate auctions
populateAuctions = (array) => {
    auctions = []
    for (i in array){ 
        log(i+2)
        auctions.push({ 
            productName: array[i], 
            gtin: 123455, 
            price: 555, 
            auctionNum: Math.random().toString(), 
            state: i / 2 ? "Active" : "Closed", 
            highestBid: 69420, 
            auctionDuration: 22 
        })
    }
    return auctions
}  

// submit auction 
submitAuction = () => {
    productName = document.getElementById("productName").value 
    gtin = document.getElementById("gtin").value
    price = document.getElementById("price").value
    days = document.getElementById("days").value 
    return { productName, gtin, price, days }
}

// owner cancel auction
cancelAuction = (id) => {
    log(id)
}

// bidder submit bid
submitBid = (id) => { 
    bid = document.getElementById("bidInput").value
    document.getElementById("bidInput").value = ""
    log(id, bid)
}

// withdrawl bid : can only be done after auction is finished
withdrawlBid = (id) => {
    log(id)
}

// withdrawl funds : owner withdrawls funds once closed
withdrawlSale = (id, amount) => {
    log(id, amount, "here")
}

// temp population of demo data
let auctArr = populateAuctions(["Corn", "Wheat", "Apples", "Tello"])

// this would get auction num for contract
// then use auction num to gather all auctions 
getAuctions = () => log("running")

// header rows
document.getElementById("auctions").innerHTML += 
    `<tr>
        <th> Product Name </th>
        <th> GTIN </th>
        <th> Price </th>
        <th> Auction Number </th>
        <th> State </th>
        <th> Highest Bid </th>
        <th> Auction Duration </th>
        <th> Make Bid </th>
    </tr>`
 
 // loop through auctions and render UI 
 // conditional on if is owner or not   
 for (i in auctArr) {
     // set input default text on status of auction
     // may remove because currently no need to show input of bid is over
     var isActive
     if (auctArr[i].state == "Active") {
         isActive = "Active"
     } else {
         isActive = "Closed"
     }
     // if owner show owner view
     if (owner) {
        document.getElementById("auctions").innerHTML += 
        `<tr>
            <td>${auctArr[i].productName}</td>
            <td>${auctArr[i].gtin}</td>
            <td>${auctArr[i].price}</td>
            <td>${auctArr[i].auctionNum}</td>
            <td>${auctArr[i].state}</td>
            <td>${auctArr[i].highestBid}</td>
            <td>${auctArr[i].auctionDuration}</td>
            <td>
            ${ auctArr[i].state == "Active" ?  // if auction is active ? cancel : withdrawl funds
            `<input type="submit" value="cancel" onclick="cancelAuction(${auctArr[i].auctionNum})">` :
            `<input type="submit" value="withdrawl" onclick="withdrawlSale(${auctArr[i].auctionNum},${auctArr[i].highestBid})">` 
             }
            </td>
        </tr>`
     } else {
        log(" not owner")
        document.getElementById("auctions").innerHTML += 
        `<tr>
            <td>${auctArr[i].productName}</td>
            <td>${auctArr[i].gtin}</td>
            <td>${auctArr[i].price}</td>
            <td>${auctArr[i].auctionNum}</td>
            <td>${auctArr[i].state}</td>
            <td>${auctArr[i].highestBid}</td>
            <td>${auctArr[i].auctionDuration}</td>
            <td>
            
            ${ auctArr[i].state == "Active" ? // if auction is active ? submit bid : withdrawlbid (if not winner )
            `<input type="text" placeholder=${isActive} id="bidInput"></input>
             <input type="submit" value="submit" onclick="submitBid(${auctArr[i].auctionNum})">` :
            `<input type="submit" value="withdrawl" onclick="withdrawlBid(${auctArr[i].auctionNum})">` 
             }
            </td>
        </tr>`
     }
 }

 if (owner) {
     document.getElementById("createAuction").innerHTML +=
     `<input id="productName" type="text" placeholder="product name">
     <input id="gtin" type="text" placeholder="gtin">
     <input id="price" type="text" placeholder="price">
     <input id="days" type="text" placeholder="days">
     <input type="button" onclick="submitAuction()" value="Submit">`
 };