import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";

const useProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
};

export default useProducts;
