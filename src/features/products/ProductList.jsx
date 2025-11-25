import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Loader from "../../components/Loader";

const ProductList = () => {
  const { items, loading, search, category } = useSelector(
    (state) => state.products
  );

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "all" ? true : item.category === category;
      return matchSearch && matchCategory;
    });
  }, [items, search, category]);

  if (loading) return <Loader />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filtered.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
