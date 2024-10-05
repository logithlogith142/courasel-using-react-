import { useState } from "react";

import bmw from "./images/i2.png";

export default function Todo() {
  const [name, setname] = useState("");
  const [occupation, setoccupation] = useState("");
  const [city, setcity] = useState("");
  const [expi, setexpi] = useState(" ");
  const [idi, setidi] = useState(0);
  const [style, setstyle] = useState("");
  const [allow, setallow] = useState(false);
  const [style2, setstyle2] = useState(false);
  const [data, setdata] = useState([
    {
      id: 1,
      name: "logith v",
      occupation: "frontend developer",
      city: "coimbatore",
      expi: 5,
    },
  ]);
  const getinput = () => {
    if (name && city && occupation && expi) {
      const newdata = {
        id: data.length + 1,
        name: name,
        occupation: occupation,
        city: city,
        expi: expi,
      };
      console.log(newdata.expi);
      setstyle2(newdata.expi);
      setdata([...data, newdata]);
      setname("");
      setcity("");
      setoccupation("");
      setexpi("");
      setstyle(" ");
      setallow(true);
    } else {
      setstyle("red");
      setallow(false);
    }
    setstyle(" ");
  };

  const edit = (e) => {
    const a = data.filter((ed) => ed.id === e);
    setidi(e);
    console.log(e);
    setname(a[0].name);
    setcity(a[0].city);
    setoccupation(a[0].occupation);
    setexpi(a[0].expi);
    setstyle2(true);
  };

  const update = () => {
    const i1 = document.querySelector("#i1").value;
    const i2 = document.querySelector("#i2").value;
    const i3 = document.querySelector("#i3").value;
    const i4 = document.querySelector("#i4").value;
    const k = data.map((t) =>
      t.id === idi
        ? (t = { id: t.id, name: i1, city: i2, occupation: i3, expi: i4 })
        : {
            id: t.id,
            name: t.name,
            city: t.city,
            occupation: t.occupation,
            expi: t.expi,
          }
    );
    setname("");
    setcity("");
    setoccupation("");
    setexpi("");
    setstyle(" ");
    setdata(k);
    setstyle2(false);
  };
  const deleted = (e) => {
    const k = data.filter((t) => t.id !== e);
    setdata(k);

    alert(`do you want to delete  ${data[0].name} card`);
  };
  return (
    <>
      <div className="container">
        <div className="inputs">
          <label>
            Name:
            <input
              type="text"
              id="i1"
              className={style}
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </label>

          <label>
            City:
            <input
              type="text"
              id="i2"
              className={style}
              value={city}
              onChange={(e) => {
                setcity(e.target.value);
              }}
            />
          </label>
          <label>
            Role:
            <input
              type="text"
              id="i3"
              className={style}
              value={occupation}
              onChange={(e) => {
                setoccupation(e.target.value);
              }}
            />
          </label>
          <label>
            Experience:
            <input
              type="text"
              id="i4"
              className={style}
              value={expi}
              onChange={(e) => {
                setexpi(e.target.value);
              }}
            />
          </label>

          <label>
            <button
              className={style2 === true ? "unclick" : "btn"}
              onClick={getinput}
              style={{ marginLeft: 90, marginTop: 20 }}
            >
              submit
            </button>
            <button
              className={style2 === true ? "btn" : "unclick"}
              onClick={update}
            >
              update
            </button>
          </label>
        </div>
        {allow &&
          data.map((data) => (
            <div
              className="one"
              key={data.id}
              style={{ borderRadius: 10, marginLeft: 20 }}
            >
              <h6 className="pro">{`experience : ${data.expi} yrs`}</h6>
              <img src={bmw} />
              <h5>{data.name}</h5>
              <h4>{data.city}</h4>
              <h3 style={{ color: "lime" }}>{data.occupation}</h3>
              <button className="btn" onClick={() => edit(data.id)}>
                edit
              </button>

              <button className="btn1" onClick={() => deleted(data.id)}>
                delete
              </button>

              <ul>
                <li>c++</li>
                <li>c</li>
                <li>python</li>
                <li>java</li>
                <li>arduino</li>
                <li>java script</li>
              </ul>
            </div>
          ))}
      </div>
    </>
  );
}
