import { Container } from '@mui/material'
import React from 'react'
import "./newsdetail.css";
import Newscard from '../newscard/newscard';
const newsdetail = ({newsArray, newsResults, loadMore, setLoadMore}) => {
  return <Container maxWidth="md">
     
<div className='downloadMessage'>
<span className='downloadText'>
            This NewsApp is Developed for learning purpose using newsApi.org.
          </span> 
  </div>
        {newsArray.map((newsItem) => (
          <Newscard newsItem={newsItem} key={newsItem.title} />
        ))}
 {loadMore <= newsResults && (
          <>
            <hr />
            <button
              className="loadMore"
              onClick={() => setLoadMore(loadMore + 20)}
            >
              Load More
            </button>
          </>
        )} 
    </Container>



}

export default newsdetail;