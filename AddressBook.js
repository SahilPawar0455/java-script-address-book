console.log("Welcome to Address Book");
class Contact {
    constructor(...params) {
      this.firstName = params[0];
      this.lastName = params[1];
      this.address = params[2];
      this.city = params[3];
      this.state = params[4];
      this.zip = params[5];
      this.phoneNumber = params[6];
      this.email = params[7];
    }
    toString() {
      return ("First Name : " +this.firstName +", Last Name : " +this.lastName +", Address : " +this.address +", City : " +this.city +", State : " +this.state +", Zip : " +this.zip + ", Phone Number : " +this.phoneNumber +", Email : " +this.email);
    }
  }
  
  let contactList = new Array();
  let contact1 = new Contact("Sahil","Pawar","Chiplun","Ratnagiri","MH",415601,7350310455,"sahilpawar1004@gmail.com");
  let contact2 = new Contact("Sai","Patil","karad","Satara","MH",415901,7350310466,"saipatil1004@gmail.com");
  contactList.push(contact1);
  contactList.push(contact2);
  for (let i = 0; i < contactList.length; i++) {
      console.log(contactList[i]);   
  }

  function editName(firstNames,property,newValue) {
    switch (property) {
        case "FirstName":
            contactList.find((Contact)=>Contact.firstName==firstNames).firstName = newValue;
            break;
        case "LastName":
            contactList.find((Contact)=>Contact.firstName==firstNames).lastName = newValue;
            break;
        case "Address":
            contactList.find((Contact)=>Contact.firstName==firstNames).address = newValue;
            break;
        case "City":
            contactList.find((Contact)=>Contact.firstName==firstNames).city = newValue;
            break;
        case "State":
            contactList.find((Contact)=>Contact.firstName==firstNames).state = newValue;
            break;
        case "Zip":
            contactList.find((Contact)=>Contact.firstName==firstNames).zip = newValue;
            break;
        case "PhoneNumber":
            contactList.find((Contact)=>Contact.firstName==firstNames).phoneNumber = newValue;
            break;
        case "EmailID":
            contactList.find((Contact)=>Contact.firstName==firstNames).email = newValue;
            break;
        }
}
console.log("Edit The Contact :");
editName("Sahil", "City", "khed");
console.log("After edit the contact :")
for (let i = 0; i < contactList.length; i++) {
    console.log(contactList[i]);   
}