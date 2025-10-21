import React, { useEffect, useState } from 'react';
import Header from '../Component/Header';
import RightAside from '../Component/LayoutHome/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../Component/newsDetailsCard';

const NewsDetails = () => {
     const [news ,setNews] = useState({});
    const data = useLoaderData();
    const {id} = useParams()
    // console.log(data , id);


    useEffect(()=>{

        const newsDetails = data.find(singleNews => singleNews.id == id)
        setNews(newsDetails);

    },[data ,id])
    
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>


            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-3'>
                <section className='col-span-9'>
                    <h2 className='font-bold  mb-5'>news Details</h2>
                    <NewsDetailsCard key={news.id} news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;