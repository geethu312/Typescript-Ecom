import { useState, useEffect, useMemo } from "react";
import { MoonLoader } from "react-spinners";
import ProductComponent from "../../Components/ProductComponent/ProductComponent";
import "./Electronics.css";

interface Product {
  id: string;
  image: string;
  title: string;
  category: string;
}

const Electronics: React.FC = () => {
  const [electronicsData, setElectronicsData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchElectronicsData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data: Product[] = await response.json();
      setElectronicsData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchElectronicsData();
  }, []);

  const filteredElectronicsData = useMemo(() => {
    return electronicsData.filter(
      (product) => product.category === "electronics"
    );
  }, [electronicsData]);

  return (
    <>
      {loading ? (
        <div className="loader">
          <MoonLoader />
        </div>
      ) : (
        filteredElectronicsData.map((product) => (
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

export default Electronics;
