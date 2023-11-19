import React,{useEffect, useRef} from 'react'

const Home = () => {

  const inputElement = useRef()

  useEffect(() => {
    inputElement.current.focus()
  },[])
 




  return (
    <>

       <form>
        <label>title</label>
        <input type="text" ref={inputElement} />
       </form>



    </>
  )
}

export default Home