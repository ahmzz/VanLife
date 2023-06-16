import React, { useEffect, useState } from "react";
import Loading from "../Pages/Loading";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setLoading(true);
        setVans(data.vans);
      });
  }, []);

  const hostVanElements = vans.map((van) => (
    <Link
      to={van.id}
      key={van.id}
      className="host-van-link-wrapper"
    >
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {loading ? <section>{hostVanElements}</section> : <Loading />}
      </div>
    </section>
  );
};

export default HostVans;
