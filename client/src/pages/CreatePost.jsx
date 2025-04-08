import React, {useState} from 'react'
import styled from 'styled-components';
import ImageForm from '../components/ImageForm';
import GeneratedImageCard from '../components/GeneratedImageCard';


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

// const Span = styled.div`
//   font-size:38px;
//   font-weight:800;
//   color: ${({ theme }) => theme.secondary};
//   @media (max-widt: 600) {
//     font-size:20px;
//   }
// `;

const Wrapper = styled.div`
  width:100%;
  height:fit-content;
  max-width: 1200px;
  gap:8%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  } 
`;

const CreatePost = () => {
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);
  const [post, setPost] = useState({
     name:"",
     prompt:"",
     photo:"",
  });

  return (
    <Container>
    <Wrapper>
      <ImageForm 
       post={post}
       setPost={setPost}
       createPostLoading={createPostLoading}
       setCreatePostLoading={setCreatePostLoading}
       generateImageLoading={generateImageLoading}
       setGenerateImageLoading={setGenerateImageLoading}
      />
      <GeneratedImageCard src={post?.photo} loading={generateImageLoading} />
    </Wrapper>
    </Container>
  )
}

export default CreatePost