import React, { useState } from 'react'

export const Input = ({inputValue, placeHolder, desplegarLista, setInputValue}) => {

  const [placeholderText, setPlaceholderText] = useState(placeHolder);

  return (
    <>
        <input type="text"
            value={inputValue}
            placeholder={placeholderText}
            aria-label="Campo de búsqueda y selección"
            onClick={desplegarLista}
            onFocus={() => setPlaceholderText('')}
            onBlur={() => setPlaceholderText(placeHolder)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    desplegarLista();
                }
            }}
            onChange={(e) => setInputValue(e.target.value)}
        />
    </>
  )
}