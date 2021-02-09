import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios';
import Article from './components/Article';
import './index.css';
import Pagination from './components/Pagination';
import styled from 'styled-components'


function App() {

  const [articles, setArticles] = useState([]);

  // for frontend pagination
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5); // 5 per page

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber) // pageNumber from Pagination.js
  

    // https://www.reddit.com/r/nottheonion/top/.json?sort=top&t=week

    // Only run the effect (get request) once 
    // We only want to fetch data when the component mounts. That's why you can provide an empty array as second argument to the effect hook to avoid activating it on component updates but only for the mounting of the component.
  useEffect(() => {
    // shouldnt use await with useEffect therefore we make a new function
    const fetchData = async () => {
      setLoading(true);
      const result = await axios(
        ' https://www.reddit.com/r/nottheonion/top/.json?sort=top&t=month',
      );
      setArticles(result.data.data.children);
      setLoading(false);
    };
    fetchData(); // call the function
  }, []); // mimics component did mount lifecycle method

  console.log(articles);


  // get current posts
  const indexOfLastArticle = currentPage * articlesPerPage // index we want to to loop to
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle)

  return (

    <>
      <Page>
        <Header >
          <h1>Astonishingly True Stories</h1>
          <h3>Weird real news happening around the world</h3>
        </Header>
        
        <AllArticles >
          {
            loading  ? ( <h3> Loading... </h3>) : ""
          }
          {
            // pass currentArticles instead of all the articles
            // the second param in the map method returns the index of each element
            (articles != null) ? currentArticles.map((article, index) => <Article key={index} article={article.data} />) : ''
          }
        </AllArticles>

        <Pagination articlesPerPage={articlesPerPage} totalArticles={articles.length} paginate={paginate}/>
      </Page>
     
    </>
  ); 
}

export default App;

const Page = styled.div`
  text-align: center;
  
`;


const Header = styled.div`
  background: blue;
  padding-top: 3rem;
  padding-bottom: 2rem;
  background: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
  
`;

const AllArticles = styled.div`
  
`;


