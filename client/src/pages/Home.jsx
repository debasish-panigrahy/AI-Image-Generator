import React from 'react'
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import ImageCard from '../components/ImageCard';

const Container = styled.div`
    height:100%;
    overflow-y:scroll;
    background:${({ theme}) => theme.bg};
    padding:30px 30px;
    padding-bottom:50px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:20px;
    @media(max-width: 768px) {
      padding:6px 10px;
    }
`;

const HeadLine = styled.div`
  font-size:34px;
  font-weight:500;
  color: ${({ theme }) => theme.text_primary};
  display:flex;
  align-items:center;
  flex-direction:column;
  @media (max-width: 600px) {
    font-size:22px;
  }
`

const Span = styled.div`
  font-size:38px;
  font-weight:800;
  color: ${({ theme }) => theme.secondary};
  @media (max-width: 600px) {
    font-size:20px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 32px 0px;
  display: flex;
  justify-content:center;
`;

const CardWrapper = styled.div`
  display:grid;
  gap: 20px;
  @media (min-width: 1200px){
       grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 640px) and (max-width: 1199px){
       grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 639px){
       grid-template-columns: repeat(2, 1fr);
  }     
`;

const Home = () => {
  const item = {
    photo:"https://static.freeimages.com/images/home/blurbs/visuals.webp",
    author:"Author Name",
    prompt:"Prompt description..."
  }
  return (
    <Container>
       <HeadLine>Explore popular posts in the community!
       <Span>Generated with AI</Span>
       </HeadLine>
       <SearchBar />
       <Wrapper>
       <CardWrapper>
          <ImageCard item={item}/>
          <ImageCard item={item}/>
          <ImageCard item={item}/>
          <ImageCard item={item}/>
          <ImageCard item={item}/>
          <ImageCard item={item}/>
          <ImageCard item={item}/>
          <ImageCard item={item}/>
          <ImageCard item={item}/>
          <ImageCard item={item}/>
          <ImageCard item={item}/>
          <ImageCard item={item}/>
       </CardWrapper>
       </Wrapper>
    </Container>
  )
}

export default Home