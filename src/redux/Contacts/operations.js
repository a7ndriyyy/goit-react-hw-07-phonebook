import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://653b95062e42fd0d54d55df5.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const responce = await axios.get('/contacts');
    return responce.data;
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contacts => {
    const response = await axios.post('/contacts', contacts);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  }
);
