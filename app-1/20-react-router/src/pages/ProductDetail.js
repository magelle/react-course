import {useParams} from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  const productId = params.productId;

  return <section>
    <h1>Product detail </h1>
    <p>{productId}</p>
  </section>
}

export default ProductDetail;