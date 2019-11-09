import React, {useCallback, useEffect, useState} from 'react'
import twitterIcon from '../images/twitter-black-shape.svg'
import '../styles/QuoteBox.scss'

function QuoteBox(){
    const [content, setContent] = useState('')
    const [autor, setAutor] = useState('')
    //const [quote, setQuote] = useState()

    function getQuote(){
        let dataQuote
        fetch('https://api.quotable.io/random')
            .then(blob => blob.json())
            .then( data => { setAutor(data.author)
                setContent(data.content)
            })
        //return {quote, dataQuote}
    } ;

    useEffect(() => {
        getQuote()
    }, []);

    

    const onButtonClick = (event => {
        getQuote();
    });

    //const {quote, dataQuote} = getQuote()
    return (
        <div className="quote-box">
            <p id="text" className="quote-box__text">{content}</p>
            <p id="author" className="quote-box__author">- {autor}</p>

            <div className="quote-box--twitter">
                <a id="tweet-quote" href="http://twitter.com/intent/tweet"><img src={twitterIcon} alt="twitter-icon" className="quote-box__tweet-quote"/></a>
                
                <button id="new-quote" className="quote-box__new-quote"onClick={getQuote}>New Quote</button>
                
                
            </div >
            

        </div>
    )
}
export default QuoteBox