import { createSlice } from '@reduxjs/toolkit'

import toast from 'react-hot-toast';
const getStoredPastes = () => {
  const data = localStorage.getItem('pastes');
  try {
    // Agar data "undefined" string hai ya null hai, toh empty array do
    return data && data !== "undefined" ? JSON.parse(data) : [];
  } catch (error) {
    // Agar JSON parse fail ho jaye (corrupt data ho), toh app crash na ho
    console.error("Failed to parse pastes from localStorage:", error);
    return [];
  }
};

const initialState = {
  paste: getStoredPastes(),
};
export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state, action) => {
      const paste = action.payload;
      //.some() ek JavaScript array method hai jo check karta hai ki kya array me kam se kam ek element condition satisfy karta hai.
      const exists = state.paste.some((p) => p._id === paste._id); 
      if (exists) {
        toast.error("Paste already exists!");
        return;
      }

      state.paste.push(paste)
      localStorage.setItem("pastes", JSON.stringify(state.paste))
      toast.success("Paste Creation Successfull")
    },
    updateToPaste: (state, action) => {
      const paste = action.payload;
      const index = state.paste.findIndex((item) =>
        item._id === paste._id)
      if (index >= 0) {
        state.paste[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.paste))
        toast.success("Update Done Successfully")
      }

    },
    removeToPaste: (state, action) => {
      //remove only selected item. action sirf paste._id bhej rha hai
      const paste = action.payload;
      console.log("Component se aayi ID:", paste);
  console.log("Pehle kya thi array:", state.paste);
      // Jo ID match na kare, unhe filter karke rakh lo (matlab selected wali uda do)
      state.paste = state.paste.filter(p=>p._id!== paste)
      console.log("Filter ke baad array:", state.paste);
      localStorage.setItem("pastes", JSON.stringify(state.paste))
      toast.success("Paste Deleted successfull")

    },
    resetToPaste: (state) => {
      state.paste=[];
      localStorage.setItem("paste");
      toast.success("Paste reset successfull")

    }
  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, removeToPaste, updateToPaste, resetToPaste } = pasteSlice.actions

export default pasteSlice.reducer