import React from 'react'
import { item_list } from '../helper/items'
import '../style/menu.css'
import back from '../assets/daniel-apodaca-sfldz1LjzNY-unsplash.jpg'
import { Link } from 'react-router-dom'


function Menu() {
  return (
    <div className='main' style={{backgroundImage:`url(${back})`}}>
      <h1 className='hh1'>Wellcome TO our Menu</h1>
      <p className='pp1'>Sushi is made with specially prepared rice, called sumeshi (酢飯). The rice is mixed with vinegar, salt, and sugar. Sushi is known for having raw or cooked seafood in it, but it sometimes has non-fish foods such as vegetables.
         Some sushi is wrapped in a sheet of seaweed called nori (海苔).</p>
    <div className='map'>
{
  item_list.map((item)=>{return <>
  <div className='items'>
  <div><img src={item.img} className='images'></img></div>
 
  <div>{item.name}</div>
  <div className='price'>Rs {item.price}</div>
  <div><button><Link to={'/'} className='LINK'>{item.jim}</Link></button></div>
</div>
</>

  })
}


    </div>

</div>  )
}

export default Menu