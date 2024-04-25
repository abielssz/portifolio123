import { SobreMim, Main1 , Projetos, CardProjeto, ContentCard} from './Styled-Main'
import Maczin from '../../../../public/Mac.png'
import Timer from '../../../../public/Timer.png'
import Imc from '../../../../public/Imc.png'


 function Main() {
  return (
    <>
   <Main1>
    <SobreMim>
    <h1>
        Sobre Mim
        </h1>
        <p>Olá Meu nome é Abiel Moro na Cidade de São Paulo atualmente...

• Sou um profissional dedicado, buscando sempre
aprender e desenvolver minhas competências e habilidades em Tecnologia.

• Atualmente trabalho em uma empresa de vendas e-comerce,responsável: pelo levantamento de
vendas, parte logística  atendimento ao cliente, suporte técnico, analise e
métricas de vendas.

• Habilidades adquiridas: comunicação com o cliente,resolução de problemas, fácil aprendizado,
organização de mifro-tarefas e projetos , gestão
de tempo, proficiente em enxergar possíveis pontos fracos, melhorar performance de processos (etapas) flexibilidade em ambientes em constante mudança, adaptação, competente em metodologias ágeis</p>
    </SobreMim>
    </Main1>
    <Projetos>
<h1>Principais Projetos</h1>
  
  <ContentCard>
<CardProjeto>
  <h3>Projeto MacDonalds</h3>
  <img src={Maczin}></img>
  <button><a href='https://github.com/abielssz/DesafioMac-vnw'>Verificar Código</a></button>
  <button><a href='https://abielvnw.vercel.app/'>Ver Site</a></button>



</CardProjeto>

<CardProjeto>
<h3> Ecomerce Relógio Simples</h3>
<img src={Timer}></img>
<a href='https://github.com/abielssz/abielpj'><button>Verificar Código</button></a>
<a href='https://abielssz.github.io/abielpj/'> <button>Ver Site </button></a>


</CardProjeto>

<CardProjeto>
<h3> Calculadora Imc</h3>
<img src={Imc }></img>
<button><a href='https://github.com/abielssz/calculadora-imc'>Verificar Código</a></button>
  <button><a href='https://abielssz.github.io/calculadora-imc/'>Ver Site</a></button>
  </CardProjeto>
</ContentCard>
    </Projetos>
    </>
  )
}
export default Main;