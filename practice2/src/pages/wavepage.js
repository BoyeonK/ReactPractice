import Wave from "../compo/atoms/wave"

const Wavepage= () => {
  return (
    <div style={{backgroundColor : "bisque", height : '100vh'}}>
      <Wave opacity={.6} frequency={16}/>
    </div>
  )
}

export default Wavepage