import Button from "react-bootstrap/Button";
import "./Portrait.css";

// function Portrait() {
//   return (
//     <>
//       <Button variant="primary">Primary</Button>{" "}
//       <Button variant="secondary">Secondary</Button>{" "}
//       <Button variant="success">Success</Button>{" "}
//       <Button variant="warning">Warning</Button>{" "}
//       <Button variant="danger">Danger</Button>{" "}
//       <Button variant="info">Info</Button>{" "}
//       <Button variant="light">Light</Button>{" "}
//       <Button variant="dark">Dark</Button>
//       <Button variant="link">Link</Button>
//     </>
//   );
// }

// export default Portrait;

export const Portrait = () => {
  return (
    <>
      {/* <Button id="booking1" variant="outline-danger">
        Agende ya!
      </Button>{" "}
      <a href="#" className="button">
        Link Button
      </a>
      <button className="button">Button</button> */}
      <div className="container1">
        <img src={require("./../images/fotos/portada.jpg")} alt="Snow" />
        <button className="btn">AGENDA YA!</button>
      </div>
    </>
  );
};
