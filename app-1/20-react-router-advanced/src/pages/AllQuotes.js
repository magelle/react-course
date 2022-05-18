import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {id: 'p1', author: 'Max', text: 'Learning react is great'},
  {id: 'p2', author: 'Maxime', text: 'Learning react is fun !'},
]

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/>;
}

export default AllQuotes;