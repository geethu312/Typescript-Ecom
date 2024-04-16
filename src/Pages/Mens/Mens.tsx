import { useState, useEffect, useMemo } from "react";
import { MoonLoader } from "react-spinners";
import ProductComponent from "../../Components/ProductComponent/ProductComponent";
import "./Mens.css";

interface Product {
  id: string;
  image: string;
  title: string;
  category: string;
}

const Mens: React.FC = () => {
  const [mensData, setMensData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchMensData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data: Product[] = await response.json();
      setMensData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMensData();
  }, []);

  const filteredMensData = useMemo(() => {
    return mensData.filter((product) => product.category === "men's clothing");
  }, [mensData]);

  return (
    <>
      {loading ? (
        <div className="loader">
          <MoonLoader />
        </div>
      ) : (
        filteredMensData.map((product) => (
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

export default Mens;
