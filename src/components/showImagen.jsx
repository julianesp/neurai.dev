import { useState } from 'react'

function ImageButton() {
  const [showImage, setShowImage] = useState(false)

  function handleClick() {
    setShowImage(true)
  }

  return (
    <div>
      <button onClick={handleClick}>Mostrar imagen</button>
      {showImage && <img src="../../public/estudios/tecSistemas.png" />}
    </div>
  )
}

export default ImageButton
