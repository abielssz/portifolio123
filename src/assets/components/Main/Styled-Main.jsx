import styled from "styled-components";


export const Main1 = styled.main`
font-family:sans-serif;
height: 40vh;
background-color:#252525;
display:flex;
align-items: center;
flex-direction: column;
justify-content:center;
gap: 50px;
`

export const SobreMim=styled.div`
    display:flex;
    justify-content: center;
    flex-direction:column;
    color:white; 
    gap:20px;
   width: 80%;
   height: 50vh;
`
export const Projetos=styled.div`
    height: 100vh;
    padding: 20px;
    color:white;
    font-family:sans-serif;
    background-color:#252525;
    text-align: center;
  

`

export const ContentCard=styled.div`
color:black;
 display:flex;
 justify-content: center;
 justify-content: space-around;
 width: 100%;
 height: 80vh;
 margin-top: 20px;
`

export const CardProjeto=styled.div`
text-align: center;
margin-top: 10px;;
width: 250px;
padding: 10px;;
height: 380px;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap:10px;
border-radius:5%;
background-color: #ffff;
img {
    margin-top: 10px;
    width: 250px;
    height: 250px;
}
button {
    color :white;
    background-color:#252525;
    cursor:pointer;
    padding: 10px;

    font-family:sans-serif;
    border-radius:10%;
    border:none;
    a{
        text-decoration: none;
        color:white;
    }
    

}
button:hover{
    transition: 1s;
    background-color: #ffffff;
    color:black;
    a{    width: 70%;
        text-decoration: none;
        color:black;
    }
}
`