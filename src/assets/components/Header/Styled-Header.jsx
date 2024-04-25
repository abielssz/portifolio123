import styled from "styled-components";



 export const Navegation = styled.nav`
  width: 100%;
 height:130px;
  background-color:#252525;
  padding: 10px;
  color:#d7d7d7;    
  font-family:sans-serif;
  list-style:none;
  display:flex;
  align-items:center;
 ul{
    justify-content:space-around;
  align-items:center;
    list-style:none;
    display:flex; 
   padding:0px ;
   font-size: 15px;
   margin-left: 500px;
   gap:50px;
    height: 50px;}

    a{
      text-decoration: none;
      font-family: sans-serif;
      color:white;
    }

    @media (min-width: 767px) and (max-width:1023px) {
      background-color: #6a2121;
      ul{
       
         margin-left: 100px;
      }

  }
  /* @media (min-width:320px) and (max-width:767px) {
      
    } */

  @media (max-width:767px) {
   background-color: #d4a7a7;
 align-items:center;
 justify-content: center;
   height:200px;
   margin:0;
   width: 100%;
   
      ul{
         height: 170px;
      margin:0;
      gap:10px;

      }
   }
 `
 export const Logoabiel = styled.img`
    height: 100px;
    width: 100px;
    margin-left: 30px;

    @media (max-width:767px) {
      margin:0;
   display:none;}

 `
 export const Icons =styled.img`
    height: 40px;
    width: 40px;
 `

 export const Header1 = styled.header`
    height: 450px;
    background-color:#252525;
    display:flex;
    align-items:center; 
    justify-content:space-evenly;
    margin:0;  

 
      @media (min-width:320px) and (max-width:767px) {
         height: 125vh;
         padding:10px;     
         flex-direction: column;
    }

 `
 export const CardProfile = styled.div `
 margin-left: 20px;
   font-size: 30px;
   font-family: sans-serif;
   font-weight: bold;
   height: 250px;
   width: 235px;
   color:white;
   a{
      text-decoration:none;
      font-size:17px;
     margin-right: 10px;
     color:white;
     margin-bottom: 10px;
     
   }
   button {
      margin-top:10px;
      padding: 15px;
      color:#6ea9b3;
      font-weight: bold;
      letter-spacing:2px;
      background-color: transparent;
      border:#6c9da5 solid 3px;
      cursor:pointer;
     }
     button:hover {
      transition:0.3s;
      background-color:#6c9da5;
      color:white;   

     }
     @media (min-width: 768px) and (max-width:1023px) {
         height: 280px;
        width: 250px;
        display:flex;
        flex-wrap: wrap;
        flex-direction: column;
      }
      @media (max-width:767px) {
         height: 250px;
        width: 240px;
      }
 
      
 `
  export const Self = styled.div`
  width: 400px;
  height: 300px;
  display:flex;
  align-items:center;
  justify-content:center;

  img{
 margin-top: 50px;
  height: 300px;
  width: 300px;
  border-radius: 100%;

  @media (min-width: 768px) and (max-width:1023px) {
      border: solid 5px blue;
         height: 200px;
        width: 200px;
        display:flex;
        flex-wrap: wrap;
        flex-direction: column;
      }
     
    @media (max-width:767px) {
      margin:0;
   display:none;}
  }
  
  `

  export const Introduction = styled.div`
    width:30%;
    padding: 10px;
    height: 230px;
    display:flex;
    gap:10px;
    font-family: sans-serif;
    flex-direction:column;
  
justify-content:center;
   h3{
      font-size:15px;
   color:white;
   }
   h1{color:#68e6f9;
     
      font-size: 40px;
   }
   p{color:white;}

   @media (min-width: 768px) and (max-width:1023px) {
         
        display:flex;
      
        flex-direction: column;
      }

      @media (max-width:767px) {
         height:400px;
        width: 210px;
        border:1px solid white;
      }
  `


