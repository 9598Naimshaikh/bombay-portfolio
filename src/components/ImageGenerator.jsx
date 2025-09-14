import React, { useContext, useState } from 'react'
import CardImage from './CardImage'
import axios from 'axios';
import { DataContext } from '../context/UserContext';

const ImageGenerator = () => {
    const [data, setData] = useState([]);
    const user = useContext(DataContext);

    const handleGenerateImages = async () => {
        // Logic to generate random images
        console.log('Generating random images...');
        const res = await axios.get('https://picsum.photos/v2/list?page=2&limit=20');
        let data = res.data;
        setData(data);

        console.log(data);
    }

    return (
        <div className='w-full'>
            <section className='projects max-w-[800px] rounded-md px-4 py-4 mx-auto my-4 border-1 border-blue-400/20 shadow-md shadow-blue-400 grid gap-5'>
                <div className="f_content grid gap-2">
                    <h1 className='text-2xl font-bold'>Hi, {user}</h1>
                    <p>This is Image Generator component where you can generate random images. Please click and Generate..</p>
                    <button onClick={handleGenerateImages} className='bg-rose-400 border-1 border-rose-400 cursor-pointer active:scale-95 font-bold tracking-wide text-xl text-white px-4 py-2 rounded-md'>Generate Random Images</button>
                </div>
                <div className="s_content bg-blue-500
                 px-4 py-2">
                    <p className='font-medium tracking-wide'>Here Generated Images...</p>
                    <div className="iamgeCards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-4">
                        {data.map((items, index) => {
                            return <CardImage key={index} image={items.download_url} author={items.author} id={items.id} />
                        })}
                    </div>

                </div>
                
            </section>
        </div>
    )
}

export default ImageGenerator
