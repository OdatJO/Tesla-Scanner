import React, { useState } from "react";
import styled from "styled-components";
import { selectCars } from "../features/Car/carSlice";
import { useSelector } from "react-redux";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";
import { useCartState } from "../hooks/useReducerState";
import { FaOpencart } from "react-icons/fa";

interface HeaderInterface {
   homeRef?: React.RefObject<HTMLDivElement>;
}

function Header(props: HeaderInterface) {
   const navigation = useNavigate();
   const { homeRef } = props;
   const [burgerStatus, setBurgerStatus] = useState(false);
   const cars = useSelector(selectCars);

   const cartData = useCartState();

   return (
      <Container>
         <a>
            <img src="/images/logo.svg"></img>
         </a>
         <Menu>
            {cars.map((car) => (
               <h1
                  onClick={() => {
                     homeRef
                        ? homeRef.current?.scrollTo({
                             behavior: "smooth",
                             top: car.ref?.offsetTop,
                          })
                        : navigation(`/cars/${car.id}`);
                  }}
                  key={car.id}
               >
                  {car.title}
               </h1>
            ))}
         </Menu>
         <RightMenu>
            <Link className="flex relative items-center gap-1" to={`/cart`}>
               <FaOpencart className="h-8 w-8 " />
               <p className="absolute -top-3 right-1 flex items-center justify-center bg-red-600 text-white h-5 w-5 text-sm font-bold rounded-full">
                  {cartData.length}
               </p>
            </Link>

            <CustomMenu
               className="md:hidden block h-6 w-6"
               onClick={() => setBurgerStatus(true)}
            />
         </RightMenu>

         <BurgerNav show={burgerStatus}>
            <CloseWrapper>
               <CustomClose
                  className="h-6 w-6"
                  onClick={() => setBurgerStatus(false)}
               />
            </CloseWrapper>
            <ul>
               {cars &&
                  cars.map((car: any) => (
                     <li
                        onClick={() => {
                           homeRef
                              ? homeRef.current?.scrollTo({
                                   behavior: "smooth",
                                   top: car.ref?.offsetTop,
                                })
                              : navigation(`/cars/${car.id}`);
                        }}
                        key={car.id}
                     >
                        <h1> {car.title}</h1>
                     </li>
                  ))}
            </ul>
         </BurgerNav>
      </Container>
   );
}

export default Header;

const Container = styled.div`
   min-height: 60px;
   position: fixed;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 20px;
   top: 0;
   left: 0;
   right: 0;
   z-index: 1;
`;
const Menu = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex: 1;
   h1 {
      cursor: pointer;
      text-transform: uppercase;
      padding: 0 10px;
      flex-wrap: nowrap;
   }
   @media (max-width: 768px) {
      display: none;
   }
`;

const RightMenu = styled.div`
   display: flex;
   align-items: center;
   a {
      font-weight: 600;
      text-transform: uppercase;
      margin-right: 10px;
   }
`;

const CustomMenu = styled(MenuIcon)`
   cursor: pointer;
`;

const BurgerNav = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   right: 0;
   background: white;
   width: 300px;
   z-index: 16;
   list-style: none;
   padding: 20px;
   display: flex;
   flex-direction: column;
   text-align: start;
   transform: ${({ show }: StyledProps) =>
      show ? "translateX(0)" : "translateX(100%)"};
   transition: transform 0.2s ease-in;
   ul {
      list-style: none;
      li {
         padding: 15px 0;
         border-bottom: 1px solid rgba(0, 0, 0, 0.2);
         cursor: pointer;
         h1 {
            font-size: 16px;
            font-weight: 600;
         }
      }
   }
`;

type StyledProps = {
   show: boolean;
};

const CustomClose = styled(XIcon)`
   cursor: pointer;
`;

const CloseWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
`;
