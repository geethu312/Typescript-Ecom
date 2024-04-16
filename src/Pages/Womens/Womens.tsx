import { useState, useEffect, useMemo } from "react";
import { MoonLoader } from "react-spinners";
import ProductComponent from "../../Components/ProductComponent/ProductComponent";
import "./Womens.css";

interface Product {
  id: string;
  image: string;
  title: string;
  category: string;
}

const Womens: React.FC = () => {
  const [womensData, setWomensData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchWomensData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data: Product[] = await response.json();
      setWomensData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWomensData();
  }, []);

  const filteredWomensData = useMemo(() => {
    return womensData.filter(
      (product) => product.category === "women's clothing"
    );
  }, [womensData]);

  return (
    <>
      {loading ? (
        <div className="loader">
          <MoonLoader />
        </div>
      ) : (
        filteredWomensData.map((product) => (
          <ProductComponent
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
          />
        ))
      )}
    </>
  );
};

export default Womens;
