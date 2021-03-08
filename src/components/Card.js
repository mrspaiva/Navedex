import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CardContainer, IconsSection } from './CardStyle'
import deleteIcon from '../img/delete.png'
import updateIcon from '../img/update.png'

import api from '../services/api'

export default function Card() {
  const [navers, setNavers] = useState([])

  const token = localStorage.getItem('@Navedex:Token')
  useEffect(() => {

    api.get('navers', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      setNavers(response.data)
    })
  }, [token])

  return (
      <CardContainer>
        <ul>
          {navers.map(naver => (
          <li key={naver.id}>
            <img src={naver.url} alt=""/>
            <strong>{naver.name}</strong>
            <p>Front-end Developer</p>
            
            <IconsSection>
              <Link to="/">
                <img className='deleteIcon' src={deleteIcon} alt=""/>
              </Link>
              <Link to="/editnaver">
                <img className='updateIcon' src={updateIcon} alt=""/>
              </Link>
            </IconsSection>
          </li>
        ))}
        </ul>
    </CardContainer>
  )
}