import React from 'react'
import {useEffect, useState} from 'react';
import {useFrontEndContext} from '../context/FrontendContextStore';

export const CartButton = ({className, id, qty, icon = null, type, children}) => {
  const {handleUpdateChart, cartLoading} = useFrontEndContext();
  const [ loading, setLoading ] = useState(false);
  useEffect(() => {
    if (!cartLoading) {
      setLoading(false);
    }
  }, [cartLoading]);
  return (
    <button
      className={className || `inline-flex px-3 py-3 text-white align-middle duration-300 bg-black rounded ${type === 'delete' ? 'hover:bg-danger' : type === 'remove' ? 'hover:bg-secondary/70' : 'hover:bg-primary'} transitions disabled:bg-gray/50`}
      disabled={qty === 1 && icon === 'remove' || loading}
      onClick={() => {
        setLoading(true);
        handleUpdateChart(id, qty, type);
        }
      }
    >
      {loading ? (
        <span className="material-icons animate-spin">hourglass_bottom</span>
      ) : icon && (
        <span className="material-icons">{icon}</span>
      )}
      {children}
    </button>
  );
}

export default CartButton;
