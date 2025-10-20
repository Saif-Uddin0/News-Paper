import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const {id} = useParams()
    const data= useLoaderData()
    const [newsall ,setAllNews] = useState([]);
    console.log(data);


    useEffect(()=>{
            if(id == '0'){
                setAllNews(data);
                return
            }
            else if(id == '1'){
                const filterNews = data.filter((news) => news.others.is_today_pick === true)
                setAllNews(filterNews)
                return
            }
            
            else{
                const filterNews = data.filter(news => news.category_id == id)
                setAllNews(filterNews);
            
            }
        },[data,id])
    
    return (

        
        <div>
            <h1 className='font-bold'>Total <span className='text-secondary'>({newsall.length})</span>  News Found</h1>


            <div className='grid grid-col-1 gap-5 mt-5'>
                {
                    newsall.map(news => <NewsCard
                         news={news}
                         key={newsall.category_id}
                         ></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;