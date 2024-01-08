import React from 'react'
import {Container,PostForm} from '../components/index';
import appwriteService from '../appwrite/config';
import {useNavigate, useParams} from 'react-router-dom';

function EditPost() {

    const [post, setPost] = React.useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    React.useEffect(()=> {
        if (slug) {
            appwriteService.getPost(slug).then((post)=>{
                setPost(post)
            })
        }
        else{
            navigate("/")
        }
    },[slug,navigate])

  return post ? (
    <div className='py-8 w-full'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ) : null
}

export default EditPost