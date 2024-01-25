import { Component } from 'react';

class PhoneBook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>

        <form>
          {' '}
          <label htmlFor="name">
            Name<input name="name"></input>
          </label>
          <label htmlFor="number">
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <button type="submit">Add contact</button>
          </label>
            </form>
            <h2>Contacts</h2>
            <label htmlFor='serch'>Find contacts by name
            <input name='name'></input>
            </label>
      </div>
    );
  }
}

export default PhoneBook;
