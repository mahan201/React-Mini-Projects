import { Select, TextField, MenuItem, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from "react";
import './CurrencyRow.css'


const CustomTextField = styled(TextField)({
  '&': {
    borderRight: "2px solid rgba(255, 255, 255, 1)"
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInputLabel-root': {
    color: "rgba(256,256,256,0.64)",
    // backgroundColor: 'rgba(256,256,256)'
  },
  '& .MuiFilledInput-root': {
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  '& .MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before': {
    borderBottomColor: 'rgba(255, 255, 255, 0)', 
  },
  '& .MuiFilledInput-root:before': {
    borderBottomColor: 'rgba(255, 255, 255, 0)', 
  },
  '& .MuiFilledInput-root:after': {
    borderBottomColor: 'rgba(255, 255, 255, 1)', 
  },
  '& .MuiFilledInput-input': {
    color: 'white',
    "-moz-appearance": "textfield"
  },
  '& .MuiFilledInput-input::-webkit-outer-spin-button, & .MuiFilledInput-input::-webkit-inner-spin-button': {
    '-webkit-appearance': "none",
    margin: 0
  }
});

const CustomSelect = styled(Select)({
  '& ': {
    color: 'white',
    background: "rgba(255, 255, 255, 0)",
  },
  '& svg': {
    color: 'white',
  },
  '& > fieldset': {
    borderColor: 'rgba(255, 255, 255, 0)',
  },
  //When & is hovered, change the border color of fieldset
  '&:hover > .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0)',
  },
  //WHen & is focused, change the border color of fieldset to white
  '&.Mui-focused > .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0)',
  },

});

export const CurrencyRow = ({rates,amount,setAmount,cur,setCur}) => {

  return (
    <div className="currencyRow">
      <CustomTextField
        label="Amount"
        variant="filled"
        type="number"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <CustomSelect
          value={cur}
          displayEmpty
          onChange={(e) => {
            setCur(e.target.value);
          }}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {rates.map((key) => <MenuItem key={key} value={key}>{key}</MenuItem>)}
        </CustomSelect>
    </div>
  );
};
