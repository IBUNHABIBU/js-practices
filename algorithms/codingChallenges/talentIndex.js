implement a function itemCollection which maintains
 the collection of names ot items added and items removed. 
 Returnns anew objec with
 three method add(name), remove(name) and getName()

 def itemCollection():
    items = []

    def add(name):
        items.append(name)

    def remove(name):
        items.remove(name)

    def getNames():
        return items

    return {
        "add": add,
        "remove": remove,
        "getNames": getNames
    }


    collection = itemCollection()
collection.add("item1")
collection.add("item2")
print(collection.getNames())  # ["item1", "item2"]
collection.remove("item1")
print(collection.getNames())  # ["item2"]

function itemCollection() {
    const items = [];
  
    return {
      add(name) {
        items.push(name);
      },
      remove(name) {
        const index = items.indexOf(name);
        if (index >= 0) {
          items.splice(index, 1);
        }
      },
      getNames() {
        return items;
      },
    };
  }
  
  const collection = itemCollection();
collection.add("item1");
collection.add("item2");
console.log(collection.getNames());  // ["item1", "item2"]
collection.remove("item1");
console.log(collection.getNames());  // ["item2"]


function suspiciousUsers(logs, threshold) {
    const counts = {};
  
    for (const log of logs) {
      const [sender, receiver, amount] = log.split(" ");
      counts[sender] = (counts[sender] || 0) + 1;
      counts[receiver] = (counts[receiver] || 0) + 1;
    }
  
    const suspiciousUsers = [];
    for (const user in counts) {
      if (counts[user] >= threshold) {
        suspiciousUsers.push(user);
      }
    }
  
    return suspiciousUsers;
  }
  