import { useParams } from "react-router-dom"

const Detailpage = () => {
  let {id} = useParams();

  return (
    <>
      <img src={process.env.PUBLIC_URL + '/신사동.jpg'} alt="detail-img" width="50%"/>
      <h4>타이틀</h4>
      <span>가격</span>
      <span>{id}</span>
    </>
  )
}

export default Detailpage