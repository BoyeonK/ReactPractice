import { useNavigate } from "react-router-dom"

const Card = ({shoes}) => {
  let navigate = useNavigate()
  return (
    <div className="items-item">
      <img src={process.env.PUBLIC_URL + shoes.urls} alt="cardimage" width="80%"/>
      <h4 onClick={() => {
        navigate(`/detail/${shoes.id}`);
        let list = new Set(JSON.parse(localStorage.getItem('userlist')))
        list.add(shoes.id)
        list = [...list]
        localStorage.setItem('userlist', JSON.stringify(list))
      }}>{shoes.title}</h4>
      <span>{shoes.price}</span>
    </div>
  )
}

export default Card