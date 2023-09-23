import logo from './logo.svg';
import './App.css';
import Navbarrrr from './component/navbarrrr';
import { useState } from 'react';
import Newsdetail from './component/newsdetail/newsdetail';
import axios from "axios";
import apikey from './dataset/config';
import { useEffect } from 'react';
import Footer from './component/footer/footer';
function App() {
  const[category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [loadMore, setLoadMore] =useState(20);
  const [newsResults, setNewsResults] = useState();
  console.log(process.env);
 const newsApi = async () => {
  try{
    const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}`);
    setNewsArray(news.data.articles);
    setNewsResults(news.data.totalResults);
  } catch (error){
    console.log(error);

  }
 };

 useEffect(() => {
  newsApi();
 }, [newsResults,loadMore, category]);

  return (
    <div className="App">
      <Navbarrrr setCategory={setCategory}/>
      <Newsdetail newsArray={newsArray} newsResults={newsResults}  loadMore={loadMore}
          setLoadMore={setLoadMore}/>
      <Footer/>
    </div>
  );
}

export default App;
