import React, {useState, useEffect, useMemo} from 'react';
import useAxios from '../hooks/useAxios';
import axios from '../apis/productApi';
import ProductCard from '../components/ProductCard';

export const ProductsSections = () => {
  const [ filterItems, setFilterItems ] = useState('全部');
  const [ showList, setShowList ] = useState(false);
  const [ products, setProducts ] = useState([]);

  const {data, loading, error, axiosFetch} = useAxios();
  const filterList = [ '全部', '床架', '收納', '窗簾', ];

  const getProductsData = async () => {
    await axiosFetch({
      axiosInstance: axios,
      method: 'GET',
    });
  };

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data]);

  const filterProducts = useMemo(() => {
    return data?.products.filter((item) => {
      return filterItems === '全部' ? item : item.category === filterItems;
    });
  }, [ filterList, filterItems ]);

  useEffect(() => {
    setProducts(filterProducts);
  }, [filterItems]);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>我們中出了一個問題!</p>;

  return (
    <section className="container pb-[3.75rem]">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-[1.875rem] mb-8">
        <div className="relative w-full">
          <input
            type="text"
            name="filterSelect"
            readOnly
            className="bg-[#FAFAFA] border border-[#CED4DA] rounded py-2 px-3 cursor-pointer w-full"
            onClick={() => setShowList(!showList)}
            value={filterItems}
          />
          <ul
            className={`absolute top-0 left-0 translate-y-12 w-full py-2 space-y-2 select-none bg-white rounded border border-[#00000020] cursor-pointer z-20 ${
              showList ? '' : 'hidden'
            }`}
          >
            {filterList.map((item) => {
              return (
                <li
                  className="bg-white pl-5 py-1"
                  key={item}
                  onClick={() => {
                    setFilterItems(item);
                    setShowList(!showList);
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <ul className="grid md:grid-cols-3 lg:grid-cols-4 gap-[1.875rem]">
        {products?.map((item) => {
          return <ProductCard key={item.id} {...item} />;
        })}
      </ul>
    </section>
  );
}

export default ProductsSections;
