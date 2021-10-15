import React, {useState} from 'react'
import styled from 'styled-components'




function Header() {

   const [burgerStatus, setBurgerStatus] = useState();

    return (
       <Container>
           <a href="">
               <img src="/images/logo.svg" alt="" />
           </a>

           <Menu>
                <a href="#">Model S</a> 
                <a href="#">Model 3</a> 
                <a href="#">Model X</a> 
                <a href="#">Model Y</a> 
           </Menu>

           <RightMenu>
           <a href="#">Shop</a> 
           <a href="#">Tesla Account</a> 
            <img src="/images/menu.png" alt="" onClick={()=> setBurgerStatus(true)} /> 


           </RightMenu>
           <BurgerNav show={burgerStatus}>
               <CloseWrapper onClick={()=> setBurgerStatus(false)}>
           <img src="/images/close.png" alt="" /> 
               </CloseWrapper>


               <li><a href="">Existing Inventory</a></li>
               <li><a href="">Used Inventory</a></li>
               <li><a href="">Trade-In</a></li>
               <li><a href="">Test Drive</a></li>
               <li><a href="">Cyber Truck</a></li>
               <li><a href="">Roadster</a></li>
               <li><a href="">Semi</a></li>
               <li><a href="">Charging</a></li>
               <li><a href="">Powerwall</a></li>
               <li><a href="">Commercial Energy</a></li>
               <li><a href="">Uitilities</a></li>
               <li><a href="">Find Us</a></li>
               <li><a href="">Support</a></li>
               <li><a href="">Investor Relations</a></li>
           </BurgerNav>

       </Container>
    )
}

export default Header

const Container = styled.div `
min-height: 60px;
width: 100%;

position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
width: 100%;
z-index:1;
`
const Menu = styled.div `
display:flex;
align-items: center;
justify-content: center;
flex: 1;

a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
}

@media (max-width:768px) {
    display: none;
}
`
const RightMenu = styled.div `
display:flex;
align-items:center;
a {
    font-weight: 600;
    text-transform: uppercase;
   margin-right: 10px;
    
}

img {
    width: 20px;
    cursor: pointer;
}
`

const BurgerNav = styled.div `
position: fixed;
top:0;
bottom: 0;
right:0;
background: white;
width:300px;
z-index: 100;
list-style:none;
padding: 20px;
display:flex;
flex-direction: column;
text-align: start;
transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
transition: transform 0.3s ;

li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

}

a {
    font-weight: 600;

}

img {
    width: 20px;
    cursor: pointer;
}


`

const CloseWrapper = styled.div `
display: flex;
flex-direction: row-reverse;
`