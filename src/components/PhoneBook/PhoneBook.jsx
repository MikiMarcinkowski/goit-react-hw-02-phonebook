import { nanoid } from 'nanoid';
import { Component } from 'react';
// import Contact from 'components/Contacts/Contact';
import ContactList from 'components/Contacts/ContactsList';

// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

class PhoneBook extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const newNameId = nanoid();
    // const name = this.state.name;
    // const number = this.state.number;
    const { name, number } = this.state;
    const newName = { name: name, id: newNameId, number: number };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newName],
      name: '',
      number: '',
    }));

    console.log(this.state);
    // console.log(...this.state.contacts);
    // console.log(this.state);
  };

  handleChange = evt => {
    const inputName = evt.target.name;
    const inputVal = evt.target.value;

    this.setState({ [inputName]: inputVal });

    console.log(this.state);
  };

  filterName = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.includes(filter));
  };

  render() {
    const { name, contacts, number } = this.state;

    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="name"
            name="name"
            value={name}
            onChange={this.handleChange}
          ></input>
          <input
            type="tel"
            placeholder="phone number"
            name="number"
            value={number}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          ></input>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
        <h5>Fidnd contacts by name</h5>
        <input
          placeholder="find"
          name="filter"
          onChange={this.handleChange}
        ></input>
        {/* <ContactList contacts={this.filterName} /> */}
        {/* <div>{name}</div> */}
      </div>
    );
  }
}

export default PhoneBook;
