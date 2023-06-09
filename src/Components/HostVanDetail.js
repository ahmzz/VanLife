import React, { useEffect, useState } from "react";
import { Link, useParams, Outlet, NavLink } from "react-router-dom";
import Loading from "../Pages/Loading";

const HostVanDetail = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  const { id } = useParams();

  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.vans[0]);
        setVan(data.vans[0]);

        setLoading(false);
      });
  }, []);

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      {loading ? (
        <Loading />
      ) : (
        <div className="host-van-detail-layout-container">
          <div className="host-van-detail">
            <img src={van.imageUrl} />
            <div className="host-van-detail-info-text">
              <i className={`van-type van-type-${van.type}`}>{van.type}</i>
              <h3>{van.name}</h3>
              <h4>${van.price}/day</h4>
            </div>
          </div>
          <nav className="host-van-detail-nav">
            <NavLink end to='.' style={({isActive})=>isActive?activeStyle:null}>Details</NavLink>
            <NavLink to='pricing' style={({isActive})=>isActive?activeStyle:null}>Pricing</NavLink>
            <NavLink to='photos' style={({isActive})=>isActive?activeStyle:null}>Photos</NavLink>
          </nav>
          <Outlet context={{van}} />
        </div>
      )}
    </section>
  );
};

export default HostVanDetail;
