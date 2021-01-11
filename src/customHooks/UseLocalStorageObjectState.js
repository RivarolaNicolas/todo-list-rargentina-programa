import React, { useEffect, useState } from 'react';

export const UseLocalStorageObjectState = (key, initialState = {}) => {
  const valueString = window.localStorage.getItem(key);
  const valueObject = valueString ? JSON.parse(valueString) : initialState;
  const [valueState, setValueState] = useState(valueObject);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(valueState));
  }, [key, valueState]);

  return [valueState, setValueState];
};
