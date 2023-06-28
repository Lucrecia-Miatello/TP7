import React, { useState, useEffect } from 'react';
import  Typography  from '@mui/material/Typography';
import  TextField from '@mui/material/TextField';

const CharacterCounter = () => {
  const [text, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const maxCharacters = 100;
  const remainingCharacters = maxCharacters - characterCount;
  const isExceedingLimit = characterCount > maxCharacters;

  useEffect(() => {
    setCharacterCount(text.length);
  }, [text]);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    if (newText.length <= maxCharacters) {
      setText(newText);
    }
  };

  return (
    <div>
      <TextField
        label="Ingresar texto"
        multiline
        value={text}
        onChange={handleTextChange}
        error={isExceedingLimit}
        helperText={isExceedingLimit ? 'Límite de caracteres alcanzado' : ''}
      />
      <Typography variant="caption">
        {characterCount}/{maxCharacters} caracteres restantes
      </Typography>
    </div>
  );
};

export default CharacterCounter;
