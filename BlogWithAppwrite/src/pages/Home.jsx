import React, { useEffect } from 'react'
import {Container,PostCard} from '../components/index';
import appwriteService from '../appwrite/config';

function Home() {
    const [posts, setPosts] = React.useState([])

    useEffect(()=> {
        appwriteService.getPosts().then((posts)=>{
            if (posts) {
                setPosts(posts.documents)
            }
        })
    },[])


    if (posts) {
        return(
            <div className='w-full py-8 bg-red-500'>
                <Container>
                    <div className='text-center'>
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'> {/* max-md:flex-col */}
                    {posts && posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home