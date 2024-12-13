import Products from '@/components/Products';
import { useFetch } from '@/hooks/useFetch'
import React from 'react'

const Manage = () => {
  const { data, error, loading } = useFetch("/product/get");

  return (
    <div className="grid  gap-8">
      {loading && <p>Loading...</p>}
      <Products data={data} />
    </div>
  );
}

export default Manage