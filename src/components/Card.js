import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CardContainer, IconsSection } from './CardStyle'
import deleteIcon from '../img/delete.png'
import updateIcon from '../img/update.png'

export default function Card(props) {
  return (
      <CardContainer>
            <img src={props.img} alt=""/>
            <strong>{props.name}</strong>
            <p>{props.job}</p>
            
            <IconsSection>
              <Link to="/">
                <img className='deleteIcon' src={deleteIcon} alt=""/>
              </Link>
              <Link to="/editnaver">
                <img className='updateIcon' src={updateIcon} alt=""/>
              </Link>
            </IconsSection>
    </CardContainer>
  )
}