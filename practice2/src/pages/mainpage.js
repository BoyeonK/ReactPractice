import { useEffect, useState } from 'react'
import bgImg from '../main2.jpg'
import items from '../items'
import axios from 'axios'
import {Card, Tab} from '../compo'


const Mainpage = () => {
  let [shoes, setShoes] = useState(items)
  let [click, setClick] = useState(2)
  let [tab, setTab] = useState(0)
  let [fade, setFade] = useState('')
  useEffect(() => {
    setTimeout(() => {
      setFade('end')
    }, 100)
    return() => {
      setFade('')
    }
  }, [tab])
  
  return (
    <>
      <div className="main-bg" style={{backgroundImage : 'url(' + bgImg +')'}}>
      </div>
        <p>나는너무귀찮아</p>
      <div className="items">
        {
          shoes.map((item, index) => (
            <Card shoes={item} key={index}/>
          ))
        }
      </div>
      <button onClick={() => {
        if (click < 4) {
          axios.get('https://codingapple1.github.io/shop/data' + click + '.json')
          .then((res)=>{
            let copy = [...shoes, ...res.data]
            setShoes(copy)
          }).catch((err)=>{
            console.log(err)
          })
          setClick(click + 1)
        } else {
          console.log('조까 쿠쿠')
        }
      }}>요청 발사 뿌직스</button>
      <div>
        <span onClick={()=>{setTab(0)}}>탭1</span>
        <span onClick={()=>{setTab(1)}}>탭2</span>
        <span onClick={()=>{setTab(2)}}>탭3</span>
        <hr/>
        <div className={`start ${fade}`}>
          <Tab tab={tab}/>
        </div>
      </div>
    </>
  )
}

export default Mainpage