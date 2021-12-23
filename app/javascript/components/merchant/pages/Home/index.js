import React, { useContext } from "react";
import { Button } from "@mui/material";
import { deleteJson } from "../../../utils";
import MerchantContext from "../../_contexts/merchantContext";
import Dashboard from "../Dashboard";
import SignIn from "../signIn";


export default function Home() {

  const merchant = useContext(MerchantContext);

  return merchant ? <Dashboard /> : <SignIn />
}