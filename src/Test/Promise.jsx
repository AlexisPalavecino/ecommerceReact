import React from 'react'

export default function Promise() {
  let x = 0;
  console.log(x)

  const [loading, setLoading] = useState(true);
  const [pago, setPago] = useState(0);
  const [error, setError] = useState('');

  let pagara =new Promise ((res, rej) => {

    setTimeout(() => {
        res('pago los 50');
    }, 3000);

  }) 
  pagara
    .then((res) => {
      setPago(res);
    })
    .catch((err) => {
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    });

  return (
    <div>
      <p>Loading: {loading ? 'Loading...' : 'fin'}</p>
      <p>Pago: {pago ? pago : null}</p>
      <p>Error: {error ? error : null}</p>
    </div>
  );
}

  console.log(pagara);
    return (
    <div>Promise</div>
  )

