import React from "react";

export const About = () => {
  const [about, getAboutResp] = useState("0");
  useEffect(id => {
    Axios.get("http://5d76bf96515d1a0014085cf9.mockapi.io/video/"+ )
      .then(response => {
        alert(response.data);
      })
      .catch(err => {
        alert("error", err);
      });
  });
  return <div></div>;
};
