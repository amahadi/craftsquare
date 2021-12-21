import React, {useState, useEffect} from "react";

export default function MerchantHome(props) {

  const [merchant, setMerchant] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (loading) {
  //     fetch()
  //   }
  // })

  console.log(process.env.MERCHANT_API);

  return (
    <div>
      <h2>
        Merchant home
      </h2>
    </div>
  );
}