log = console.log.bind(console, " Script.js : ")
const owner = false

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
 }
