import React from 'react'
import styled from 'styled-components'


const Article = ( {article} ) => {
    return (
        
        <>
        
            <OneArticle>
                <ArticleContainer>
                    <Link>
                        <a href={article.url}>
                            <h4> {article.title} </h4>
                        </a>
                    
                    </Link>
                        
                    <Image>
                        <img src={article.thumbnail} alt="thumbnail"/>
                    </Image>
                </ArticleContainer>
            </OneArticle>
   
        </>
        
    )
}

export default Article



const OneArticle = styled.div`
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    
    /* every second child of OneArticle */
    &:nth-child(2n) {
        background: #F3F3F3;
    }

    &:hover {
        background: linear-gradient(to right top, #a8eb12, #00bf72, #008793, #004d7a, #051937);
    }

    a {
       text-decoration: none;
       color: black;
    }

    img {
        
        
        width: 150px;
        height: 100px;
        border: 1px solid black;
    }
`;

const ArticleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1100px;
`;

const Link = styled.div`
    width: 75%;
`;

const Image = styled.div`
    margin-left: 3rem;
`;
