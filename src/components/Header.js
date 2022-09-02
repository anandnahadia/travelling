import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    // height: 50px;
    background-color: #333;
`
const Wrapper = styled.div`
    padding: 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.h1`
    margin: 0px 20px;
    color: white;
    font-size: 25px;
    font-weight: 900;
    cursor: pointer;
`

const List = styled.ul`
    margin: 0px 20px;
    overflow: hidden;
    list-style-type: none;
`
const ListItem = styled.li`

    float: left;
    color: white;
    
`
const Link = styled.a`
    display: inline-block;
    color: white;
    text-align: center;
    padding: 10px 16px;
    text-decoration: none;
    &:hover{
        background-color: white;
        color: #A9315B;
        text-decoration: underline;
    }
`

const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`
const Dropdown = styled.li`
    float: left;
    display: inline-block;
    &:hover ${DropdownContent} {
        display: block;
    }
    &:hover ${Link} {
        background-color: white;
        color: #A9315B;
        text-decoration: underline;
    }
    
`
const DropLink = styled.a`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    &:hover {
        background-color: #f1f1f1;
    }

`

const Header = () => {
  return (
    <Container>
        <Wrapper>
            <Logo><i>HCL</i></Logo> 
            
            <List>
                
                <ListItem><Link href="#home">Home</Link></ListItem>
                <Dropdown>
                    <Link href="" >Tours</Link>
                    <DropdownContent>
                        <DropLink href="#">Tour</DropLink>
                        <DropLink href="#">Tour Details</DropLink>
                        <DropLink href="#">Tour Booking</DropLink>
                        <DropLink href="#">Tour Destination</DropLink>
                    </DropdownContent>
                </Dropdown> 
                <Dropdown>
                    <Link href="" >Flights</Link>
                    <DropdownContent>
                        <DropLink href="#">Flight</DropLink>
                        <DropLink href="#">Flight Booking</DropLink>
                    </DropdownContent>
                </Dropdown>
                <Dropdown>
                    <Link href="#" >Hotels</Link>
                    <DropdownContent>
                        <DropLink href="#">Hotel</DropLink>
                        <DropLink href="#">Hotel Booking</DropLink>
                        <DropLink href="#">Room Booking</DropLink>
                        <DropLink href="#">Room Details</DropLink>
                    </DropdownContent>
                </Dropdown> 
                <Dropdown>
                    <Link href="#" >Visa</Link>
                    <DropdownContent>
                        <DropLink href="#">Visa Details</DropLink>
                        <DropLink href="#">Buisness Visa</DropLink>
                        <DropLink href="#">Visa Application</DropLink>
                        <DropLink href="#">Tourist Visa</DropLink>
                    </DropdownContent>
                </Dropdown>
                <Dropdown>
                    <Link href="#" >About Us</Link>
                    <DropdownContent>
                        <DropLink href="#">Our Company</DropLink>
                        <DropLink href="#">Our Culture</DropLink>
                        <DropLink href="#">Team Members</DropLink>
                        <DropLink href="#">Achivements</DropLink>
                    </DropdownContent>
                </Dropdown> 
                <ListItem><Link href="#home">Contact Us</Link></ListItem>
            </List>
             
        </Wrapper>
    </Container>
  )
}

export default Header