"use client"
import { useReducer } from 'react';

// Définition du reducer
const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

// Composant FormComponent
const FormComponent = () => {
  // Utilisation de useReducer pour gérer l'état du formulaire
  const [formData, dispatch] = useReducer(formReducer, {
    name: '',
    email: '',
    message: '',
  });

  // Gestionnaire d'événement pour la modification des champs
  const handleInputChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name,
      value: e.target.value,
    });
  };

  // Gestionnaire d'événement pour la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
      
    </form>
    
  );
};

export default FormComponent;