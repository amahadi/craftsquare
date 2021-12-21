import React, { useState, useEffect } from "react";

import { AuthenticatedGet } from "../Utils";

export default function MerchantHome(props) {

  const [merchant, setMerchant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      AuthenticatedGet(
        `${process.env.HOST_NAME}/merchants/validate_token`
      )
      .then(
        response => {
          console.log(response);
          setLoading(false);
        },
        error => {
          console.log(error);
          setLoading(false);
        }
      )
    }
  })

  // console.log(process.env.MERCHANT_API);

  return (
    <div>
      <h2>
        Merchant home
      </h2>
    </div>
  );
}