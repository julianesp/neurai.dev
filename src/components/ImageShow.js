import React from 'react'
import Image from 'next/image'

const ImageShow = ({ src, alt }) => {
  // const [isVisible, setIsVisible] = useState(false)

  // const toggleVisibility = () => {
  //   setIsVisible(!isVisible)
  // }

  return (
    <>

      <Image alt={alt} src={src} />
      {/* <button onClick={onclose}>Cerrar</button> */}

      {/* {
        isVisible && (
          <div>
            <Image
              alt={alt}
              src={src}
            />

            <button onClick={toggleVisibility}>Close</button>
          </div>
        )
      } */}
    </>
  )
}

export default ImageShow