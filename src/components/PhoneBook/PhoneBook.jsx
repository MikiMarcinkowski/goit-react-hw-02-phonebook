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
    const name = this.state.name;
    const number = this.state.number;
    const newName = { name: name, id: newNameId, number: number };
    console.log(this.state);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newName],
      name: '',
      number:'',
    }));
    // console.log("newname", newName)
    // console.log("newID", newNameId)
   
   
    console.log(this.state);
    // console.log(...this.state.contacts);
    // console.log(this.state);
  };


  handleChange = evt => {
    // const name = evt.target.name;
    // const inputVal = evt.target.value;

    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    // const { name, contacts, id } = this.state;
 
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="name"
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
          <input
            placeholder="phone number"
            name='number'
            value={this.state.number}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        {/* <div>{name}</div> */}
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default PhoneBook;
