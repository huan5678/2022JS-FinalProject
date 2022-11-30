import {useEffect, useState} from 'react';

const useAxios = (configParams) => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState('');
  const [ loading, setLoading ] = useState(true);
  const [ controller, setController ] = useState();
  const axiosFetch = async (configParams) => {
    const {
      axiosInstance,
      url,
      method,
      requestConfig = {},
    } = configParams;
    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);
      const res = await axiosInstance[ method.toLowerCase() ](url, {
        ...requestConfig,
        signal: ctrl.signal
      });
      setData(res.data);
    } catch (err) {
      setErr(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    return () => {
      controller && controller.abort();
    };
  }, [controller]);
  return {data, err, loading, axiosFetch};
};

export default useAxios;
