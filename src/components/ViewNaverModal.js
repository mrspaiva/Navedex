import deleteIcon from '../img/delete.png'
import updateIcon from '../img/update.png'

import { Overlay, ViewContainer, NaverImg, InfoNaver, IconsNaver } from './ViewNaverModalStyle'

export default function ViewNaverModal() {
  return (
    <Overlay>
      <ViewContainer>
        <NaverImg src="https://pyxis.nymag.com/v1/imgs/00a/407/065c31c680d938dd607e42f8f1f8b58c81-15-star-wars-best-moments-2.rsquare.w700.jpg" alt=""/>

        <InfoNaver>
          <strong>Darth Vader</strong>
          <span>Front-end Developer</span>

          <p>Idade</p>
          <span>60</span>

          <p>Tempo de empresa</p>
          <span>30</span>

          <p>Projetos que participou</p>
          <span>Guerra Intergalática</span>

          <IconsNaver>
            <img src={deleteIcon} alt=""/>
            <img src={updateIcon} alt=""/>
          </IconsNaver>
        </InfoNaver>
      </ViewContainer>
    </Overlay>
  )
}