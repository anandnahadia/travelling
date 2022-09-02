import React, { useRef,useEffect,useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'
const Container = styled.div`
    position: relative;
    overflow: hidden;
`
const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    
    transition: all 0.5s ease; 
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Title = styled.h1`
    color: ${props=>props.color};
    font-size: 50px;
    font-weight: 700;
`
const Description = styled.p`
    color: ${props=>props.color};;
    font-size: 30px;
    font-weight: 300;
`
const Button = styled.button`
    width: 250px;
    height: 50px;
    border-radius: 70px;
    border-style: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 900;
    background-color: ${props => props.color==="white" ? "white" : "teal"};;
`
const SliderContainer = styled.div`
    opacity: 0.8;
    display: 'flex';
    align-items: 'center';
    background: 
    url(${(props) => props.img}),
    center;
`
const Slides = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
`
const InfoContainer = styled.div`
    margin: 150px 120px;
    text-align: left;
`
const SlideshowDots = styled.div`
    width: 100vw;
    text-align: center;
    position: absolute;
    z-index: 2;
    bottom: 50px;
`
const SlideshowDot = styled.div`
    display: inline-block;
    transition: all 0.5s ease; 
    height: 20px;
    width: ${props => props.active==="1" ? "50px" : "20px"};
    border-radius: 25px;
    cursor: pointer;
    margin: 15px 7px 10px ;
    background-color: ${props => props.active==="1" ? "white" : "white"}
    
`
const Slider = () => {
    const delay = 3500;
    const timeoutRef = useRef(null);
    const [sliderIndex,setSliderIndex] = useState(0);
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
    }
    
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setSliderIndex((prevIndex) =>
                prevIndex === 3 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
          resetTimeout();
        };
      }, [sliderIndex]);
  return (
    <Container>
        <SlideshowDots>
                {sliderItems.map((_,idx) => (
                <SlideshowDot active = {sliderIndex === idx ? "1" : "0"} onClick={() => {
                    setSliderIndex(idx);
                }}></SlideshowDot>
                ))}
        </SlideshowDots>
        <Wrapper slideIndex={sliderIndex}>
            {sliderItems.map((item)=>(
            <SliderContainer img={item.img}>
                <Slides>
                    <InfoContainer>
                        <Title color={item.color}>
                        {item.title.map((item)=> (
                            <div>{item}</div>
                        ))}
                        </Title>
                        <Description color={item.color}>
                        {item.desc.map((item)=> (
                            <div>{item}</div>
                        ))}
                        </Description>
                        <Button color={item.color}>Read more</Button>
                    </InfoContainer>
                </Slides>
            </SliderContainer>
            ))}
            
        </Wrapper>
    </Container>
  )
}

export default Slider