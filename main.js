var object1 = new Array();
object1 = {
  companies: [
    {
      company: {
        RegistrationId: 1100,
        CompanyName: "Big Corporation",
        NumberOfEmployees: 15000,
        CEO: "Max",
      },
    },
    {
      company: {
        RegistrationId: 1110,
        CompanyName: "Startup",
        NumberOfEmployees: 500,
        CEO: null,
      },
    },
    {
      company: {
        RegistrationId: 1101,
        CompanyName: "Small Corporation",
        NumberOfEmployees: 7000,
        CEO: "Rick",
      },
    },
  ],
};

const object2 = {
  key: [
    {
      key1: "value",
      key2: "value",
      key3: {
        key3a: "value",
        key3b: "value",
      },
      key4: "value",
    },
    {
      key1: "value",
      key2: "value",
      key3: {
        key3a: "value",
        key3b: "value",
      },
      key4: "value",
    },
  ],
};

console.log(object1);
var json = document.getElementById("json");
json.innerHTML = JSON.stringify(object1, undefined, 2);

for (const index in object2.key) {
  delete object2.key[index].key1;
}

console.log(object2);
