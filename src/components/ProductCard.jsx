import {useEffect, useState} from 'react'
import {useFrontEndContext} from '../context/FrontendContextStore';
import {useNumberWithCommas} from '../hooks/useNumberWithCommas';

export const ProductCard = ({id, title, origin_price, price, images}) => {
  const {handleUpdateChart, cartLoading} = useFrontEndContext();
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    if (!cartLoading) {
      setLoading(false);
    }
  }, [cartLoading]);


  return (
    <div className="relative flex flex-col group">
      <span className="absolute top-0 right-0 px-6 py-2 text-white translate-x-1 translate-y-3 bg-black text-h3">
        新品
      </span>
      <img className="max-h-[18.875rem] object-cover" src={images} alt={title} />
      <div className="flex flex-col gap-2">
        <button
          className="py-2 text-center text-white transition duration-300 bg-black group-hover:bg-secondary before:absolute before:inset-0 before:w-full before:h-full disabled:bg-gray/50"
          disabled={loading}
          onClick={() => {
            setLoading(true);
            handleUpdateChart(id, 1, 'post');
          }}
        >
          {loading ? (
        <span className="material-icons animate-spin">hourglass_bottom</span>
      ) : null}
          加入購物車
        </button>
        <h3 className="text-h3">{title}</h3>
        <div>
          <p className="line-through text-h3">${useNumberWithCommas(origin_price)}</p>
          <p className="text-h2">${useNumberWithCommas(price)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
