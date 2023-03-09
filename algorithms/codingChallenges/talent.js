
const susp =(str, thr) => {
    const freq = {}
    const arr = []
    for(let s of str) {
       const [sender, receiver, amount]= s.split(" ");
       console.log(sender, receiver, amount)
       
       console.log("sender", sender)
    console.log("receiver", receiver)
       if(sender != receiver) {
        if(freq[sender]) {
            // console.log("sender", sender)
            freq[sender] += 1
           } else {
            freq[sender] = 1 
           }
           if(freq[receiver]) {
            // console.log("receiver", receiver)
            freq[receiver] += 1
           } else {
            freq[receiver] = 1 
           }
       }
    }
    return freq;
}


console.log(susp(["88 99 200", "88 99 300", "99 32 100", "12 12 12"], 2))



const findDigit = (n) => {
    let i = 1
    let count = 0
    while(i <=n) {
        if(i.toString().includes("6")){
            count++
        }
     i++
    }
    return count;
}

console.log("count", findDigit(1536))


def find_suspicious(transactions, threshold):
    suspicious_senders = []

    # Loop through each transaction
    for transaction in transactions:
        # Split the transaction into its component parts
        sender, receiver, amount = transaction.split()
        # Convert the amount to an integer
        amount = int(amount)
        # If the transaction amount is greater than the threshold, add the sender to the list of suspicious senders
        if amount > threshold:
            suspicious_senders.append(sender)
    
    return suspicious_senders

    transactions = ['Alice Bob 100', 'Charlie Dave 200', 'Alice Eve 50']
threshold = 150
suspicious_senders = find_suspicious(transactions, threshold)
print(suspicious_senders)

function findSuspicious(transactions, threshold) {
    const suspiciousSenders = [];

    // Loop through each transaction
    for (const transaction of transactions) {
        // Split the transaction into its component parts
        const [sender, receiver, amount] = transaction.split(" ");
        // Convert the amount to an integer
        const amountInt = parseInt(amount);
        // If the transaction amount is greater than the threshold, add the sender to the list of suspicious senders
        if (amountInt > threshold) {
            suspiciousSenders.push(sender);
        }
    }

    return suspiciousSenders;
}

const transactions = ['Alice Bob 100', 'Charlie Dave 200', 'Alice Eve 50'];
const threshold = 150;
const suspiciousSenders = findSuspicious(transactions, threshold);
console.log(suspiciousSenders);


A log file is provided as a string array where each entry represents a money transfer in the form "sender_user_id recepient_user_id amout" Each of the values is separated by a space. sender_user_id and recepient_use_id both consists only of digits are at most 9 digits long and start with non zero digits is at most 9 digits long and starts with non zero digit. Logs are given in no particular order. Write a javascript function that returns an array of strings denoting user_ids of suspicious users who were
 involded in at least  threshold number of log entries



