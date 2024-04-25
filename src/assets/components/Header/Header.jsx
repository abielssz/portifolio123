
import { Navegation , Logoabiel , Icons , Header1 ,CardProfile, Self, Introduction} from './Styled-Header'
import Logo from '../../../logo.png';
import Iconlink from '../../../linkedin-icon.png'
import Icongit from '../../../github-icon.png'
import Selfie from '../../../Profile.png'

export default function Header() {
  return (
    <>
    <div>
      <Navegation>
       <Logoabiel src={Logo}></Logoabiel>
       <ul>
       
        <li><a href=''>Inicio</a></li>
        <li><a href=''>Sobre Mim</a></li>
        <li><a href=''>Projetos</a></li>
        <li><a href=''>Contato</a></li>
       
        
        <Icons src={Iconlink}></Icons>
        <Icons src={Icongit}></Icons>

       </ul>
     </Navegation>

     <Header1>
       <CardProfile>
        <h1>Abiel Santana</h1>
        <a href=''>LinkedIn</a>
        <a href=''>GitHub</a>
        <button>Entrar em Contato</button>
       </CardProfile>
   <Self>
       <img src={Selfie}></img>
       </Self>
       <Introduction>
          <h1>UI/UX Designer<div></div>
            Full Stack Web Developer</h1>
            <p>Gosto de criar produtos front-end sólidos e escaláveis com ótimas experiências de usuário.</p>
       </Introduction>
     </Header1>
     
   
    </div>
    </>
  )
}
