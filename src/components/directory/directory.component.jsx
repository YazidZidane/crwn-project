import React from 'react'
import CategoryItem from '../category-item/category-item.component'
import './directory.styles.scss'

export default function Directory({categories}) {
  return (
    <div className='directory-container'>
    {
      categories.map((categoryObj) => {
        return (
          <CategoryItem category={categoryObj} key={categoryObj.id}/>
        ) 
      })
    }     
    </div>
  )
}

