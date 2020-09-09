var cat = {
   name: "Fluffy",
   activities: ["play", "eat cat food"],
   catFriends: [
     {
     name: "bar",
     activities: ["be grumpy", "eat bread omblet"],
     weight: 8,
     furcolor: "white"
     },
     {
     name: "foo",
     activities: ["sleep", "pre-sleep naps"],
     weight: 3
     }
   ]
}

// Add height and weight to Fluffy
// Fluffy name is spelled wrongly. Update it to Fluffyy

cat["height"]=5
cat["weight"]=10
cat["name"]="Fluffyy"

// List all the activities of Fluffyy’s catFriends.
// Print the catFriends names.
// Print the total weight of catFriends
let l = cat["catFriends"].length
let tot_weight=0
for(let i=0; i<l; i++){
  console.log(cat["catFriends"][i]["name"])
  console.log(cat["catFriends"][i]["activities"])
  tot_weight+= cat["catFriends"][i]["weight"]
}

console.log(tot_weight)

// Add 2 more activities to bar & foo cats
// Update the fur color of bar

cat["catFriends"][0]["activities"].push("bark","cry")
cat["catFriends"][1]["activities"].push("bark","cry")

cat["catFriends"][0]["furcolor"]="black"
console.log(cat)
