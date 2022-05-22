import Link from "next/link";
import {Fragment} from "react";

const NewsPage = props => {
  return <Fragment>
    <h1>News page</h1>
  <ul>
    <li><Link href="/news/next-js">NextJs is awesome</Link></li>
    <li><Link href="/news/react">React is good</Link></li>
  </ul>
  </Fragment>
}

export default NewsPage