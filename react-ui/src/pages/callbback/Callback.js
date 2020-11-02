import React, { useEffect, useState, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import httpService from "../../apiMain";
import Config from "../../apiConfig";


function Callback() {
  const queryString = useQuery();
  const [code, setCode] = useState(queryString.get("code"));
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const authorize = async () => {
      try {
        if (code) {
         
          const response = await httpService.fetch({
            path: "",
            method: "POST",
            body: {
              code: code,
              redirect_uri: Config.CALLBACK_URL,
            },
          });
          setLoading(false);
         
        } else {
          const response = await httpService.fetch({
            path: "auth/oidc?redirect_uri=" + Config.CALLBACK_URL,
            method: "GET",
          });
          window.location = response.composed_url;
        }
      } catch (error) {
        console.log("error", error);
        setCode(null);
        setLoading(false);
      }
    };
    authorize();
  }, [ code, history]);
  console.log("code", code);

  return (
    <div>{loading && "loading"} </div>
  );
}

function useQuery() {
    debugger
  return new URLSearchParams(useLocation().search);
}

export default Callback;
