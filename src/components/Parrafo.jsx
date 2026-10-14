import { useState, useEffect, useRef } from 'react'

function Parrafo({ children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const revisar = () => {
      const rect = ref.current.getBoundingClientRect()
      if (rect.bottom > 0 && rect.top < window.innerHeight - 150) {
        setVisible(true)
      }
    }
    revisar()
    window.addEventListener('scroll', revisar)
    return () => window.removeEventListener('scroll', revisar)
  }, [])

  return (
    <p ref={ref} className={`section_p ${visible ? 'section_p--visible' : ''}`}>
      {children}
    </p>
  )
}

export default Parrafo
