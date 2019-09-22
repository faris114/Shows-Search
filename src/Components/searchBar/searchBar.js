import React, {Component} from 'react';
import {TextInput} from 'react-native';
const SearchBar = () => {
  const [show, onChangeText] = React.useState('Search shows');

  return (
    <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChangeText={displayShow => onChangeText(displayShow)}
      value={show}
    />
  );
};
export default SearchBar;
