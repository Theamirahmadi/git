import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Badge, Button, NavItem, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeNumber, changeTitle, getData } from "./redux/action";

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.coins);
  const search = useSelector((state) => state.search);
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="App">
      <p>test</p>
      {loading ? (
        <Spinner animation="grow" variant="danger" />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div>
          <p>test</p>
          <input
            type="text"
            onChange={(e) =>
              dispatch({ type: "search", payload: e.target.value })
            }
          />
          <select>
            <option>market cap</option>
            <option>highest</option>
            <option>lowest</option>
            <option>A-Z</option>
            <option>Z-A</option>
          </select>
          <div>
            <div
              style={{
                width: "80%",
                display: "grid",
                gridTemplateColumns: "repeat(5,18%)",
                justifyContent: "space-evenly",
                alignItems: "center",
                justifyItems: "center",
                textAlign: "center",
                borderBottom: "2px solid white",
                paddingBottom: "20px",
                margin: "20px auto",
                fontSize: "1.5rem",
                color: "lightblue",
              }}
            >
              <p>image</p>
              <p>symbol</p>
              <p>name</p>
              <p>price</p>
              <p>market cap</p>
            </div>
            {data
              .filter(
                (item) =>
                  item.name.toLowerCase().includes(search.toLowerCase()) ||
                  item.symbol.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <div
                  style={{
                    width: "80%",
                    display: "grid",
                    gridTemplateColumns: "repeat(5,18%)",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    justifyItems: "center",
                    textAlign: "center",
                    borderBottom: "2px solid white",
                    paddingBottom: "20px",
                    margin: "0 auto",
                    marginBottom: "20px",
                    fontSize: "1.3rem",
                  }}
                  key={item.id}
                >
                  <img
                    src={item.image}
                    style={{ width: "100px", height: "100px" }}
                  />
                  <p>{item.symbol}</p>
                  <p>{item.name}</p>
                  <p>{item.current_price}</p>
                  <p>{item.market_cap}</p>
                </div>
              ))}
          </div>
          <p>test</p>
        </div>
      )}
      <p>test</p>
    </div>
  );
}

export default App;
