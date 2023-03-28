import React from 'react'

const ButtonWithClickHandler = () => {
  const handleClick = () => {
    console.log('Botón clickeado')
  }

  // si image-button--cerrar esta activo, entonces
  // aplicar display block

  return (
    <button onClick={handleClick}>
      Haz clic en mí
    </button>
  )
}

export default ButtonWithClickHandler