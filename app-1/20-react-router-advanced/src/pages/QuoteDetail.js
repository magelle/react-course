import React, {useEffect} from "react";
import {Link, Route, useParams, useRouteMatch} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import useHttp from "../hooks/use-http";
import {getSingleQuote} from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const routeMatch = useRouteMatch();
  const params = useParams();
  let quoteId = params.quoteId;
  const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true)

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  if (status === 'pending') {
    return <div className='centered'>
      <LoadingSpinner/>
    </div>
  }

  if (error) {
    return <p className='centered'>{error}</p>
  }

  if (!loadedQuote.text) return <NoQuotesFound/>

  return <>
    <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
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