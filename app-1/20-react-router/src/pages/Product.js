import {Link} from "react-router-dom";

const Products = () => {
  return <section><h1>Products page</h1>
    <ul>
      <li><Link to='/products/p1'>A Book</Link></li>
      <li><Link to='/products/p2'>A Carpet</Link></li>
      <li><Link to='/products/p3'>An online course</Link></li>
    </ul>
  </section>
}

export default Products;