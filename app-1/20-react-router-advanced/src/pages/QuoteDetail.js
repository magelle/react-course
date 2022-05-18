import React from "react";
import {Link, Route, useParams, useRouteMatch} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const DUMMY_QUOTES = [
  {id: 'p1', author: 'Max', text: 'Learning react is great'},
  {id: 'p2', author: 'Maxime', text: 'Learning react is fun !'},
]

const QuoteDetail = () => {
  const routeMatch = useRouteMatch();
  const params = useParams();
  let quoteId = params.quoteId;

  const quote = DUMMY_QUOTES.find(item => item.id === quoteId)

  if (!quote) return <NoQuotesFound/>

  return <>
    <HighlightedQuote text={quote.text} author={quote.author}/>
    <Route path={routeMatch.path} exact>
      <div className="centered">
        <Link className='btn--flat' to={`${routeMatch.url}/comments`}>Load comments</Link>
      </div>
    </Route>
    <Route path={`${routeMatch.path}/comments`}>
      <Comments/>
    </Route>
  </>;
}

export default QuoteDetail;