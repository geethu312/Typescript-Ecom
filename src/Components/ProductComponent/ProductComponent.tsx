import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface ProductProps {
  id: string;
  image: string;
  title: string;
}

const ProductComponent: React.FC<ProductProps> = (props) => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    return () => {
      navigate(`/products/${props.id}`);
    };
  }, [navigate, props.id]);

  return (
    <>
      <div
        className="card"
        onClick={onClick}
        id={props.id}
        style={{ width: "18rem" }}
      >
        <img src={props.image} className="card-img-top" alt="" />
        <div className="card-body">
          <p className="card-text">{props.title}</p>
        </div>
      </div>
    </>
  );
};

export default ProductComponent;
