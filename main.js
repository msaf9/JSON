var object = new Array();
object = {
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
console.log(object);
var json = document.getElementById("json");

json.innerHTML = JSON.stringify(object, undefined, 2);
