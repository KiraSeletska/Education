// @ts-nocheck
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleItemPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  //console.log(item)

  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        const data = await response.json();
        console.log(data.images);
        setItem(data);
        console.log(item);
      } catch (err) {
        console.log(err);
      }
    };
    getdata();
  }, [id]);

  /*
      <img
        src={!item.images[0] ? item.images[0] : item.images}
        alt={item.title}
      />
*/
  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <img
        src={item.images}
        alt={item.title}
      />
    </div>
  );
};
