const obj = {
  mastermind: "Joker",
  henchwoman: "Harley",
  relations: ["Anarky", "Duela Dent", "Lucy"],
  twins: {
    "Jared Leto": "Suicide Squad",
    "Joaquin Phoenix": "Joker",
    "Heath Ledger": "The Dark Knight",
    "Jack Nicholson": "Tim Burton Batman",
  },
};

function passedByReference(refObj) {
  refObj.henchwoman = "Adam West";
}
passedByReference(obj);

const assignedObj = obj;
const copiedObj = Object.assign({}, obj);

delete obj.twins["Jared Leto"];
// expect("Jared Leto" in copiedObj.twins).to.equal(false);

console.log(assignedObj);
console.log(copiedObj);

