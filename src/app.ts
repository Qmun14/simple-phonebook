class Contact {
  public name: string;
  public phoneNumber: string;

  constructor(name: string, phoneNumber: string) {
    this.name = name;
    this.phoneNumber = phoneNumber;
  }
}

class AddressBook {
  private contacts: Contact[];

  constructor() {
    this.contacts = [];
  }

  public addContact(name: string, phoneNumber: string): void {
    const contact = new Contact(name, phoneNumber);
    this.contacts.push(contact);
  }

  public removeContact(name: string): void {
    const index = this.contacts.findIndex(contact => contact.name === name);
    if (index !== -1) {
      this.contacts.splice(index, 1);
    }
  }

  public searchContact(name: string): string {
    const contact = this.contacts.find(contact => contact.name === name);
    if (contact) {
      return contact.phoneNumber;
    } else {
      return 'Kontak tidak ditemukan';
    }
  }
}

// Contoh penggunaan
const addressBook = new AddressBook();

// Menambahkan Kontak 
addressBook.addContact('John Doe', '1234567890');
addressBook.addContact('Jane Smith', '9876543210');

console.log(addressBook.searchContact('John Doe'));                       // Output: 1234567890
console.log(addressBook.searchContact('Jane Smith'));                     // Output: 9876543210
console.log(addressBook.searchContact('Alice'));                          // Output: Kontak tidak ditemukan

// Menghahapus Kontak
addressBook.removeContact('John Doe');

console.log(addressBook.searchContact('John Doe'));                       // Output: Kontak tidak ditemukan