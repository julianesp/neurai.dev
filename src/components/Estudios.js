import React, { useState, useEffect } from 'react'


function importAll(r) {
    return r.keys().map(r)
}

function Estudios() {
    const [images, setImages] = useState([])

    useEffect(() => {
        const importedImages = importAll(require.context('../assets/img/education/', false, /\.(png|jpe?g|svg)$/))
        setImages(importedImages)
    }, [])

    return (
        <div>
            {images.map((image, index) => (
                <img key={index} src={image.default} alt={`Image ${index}`} />
            ))}
        </div>
    )
}


export default Estudios






