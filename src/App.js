import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Portrait } from "./components/Portrait";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Portrait></Portrait>
        <main className="content">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vulputate felis eu tincidunt malesuada. Vestibulum pharetra faucibus
            est, id tristique lacus maximus quis. Vestibulum sit amet suscipit
            est. Nunc quis sem tellus. Mauris interdum consequat est, et aliquam
            ligula gravida posuere. Cras ex tortor, sagittis non feugiat quis,
            lobortis aliquam magna. Donec faucibus, velit id pulvinar malesuada,
            sapien massa aliquet urna, id lacinia leo mauris eget justo.
            Curabitur ac feugiat orci. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas.
          </div>
          <div>
            Nunc viverra tristique augue in imperdiet. Nam ac nisi a orci
            pretium congue a vitae eros. Sed consectetur ultricies nisi, a
            blandit nulla iaculis et. Phasellus non finibus nulla. Duis egestas
            efficitur lacus. Proin egestas malesuada lacus posuere auctor. Proin
            vitae blandit lectus. Duis convallis dui augue, a elementum neque
            tempus vitae. Donec sollicitudin ipsum a quam interdum suscipit.
            Quisque sollicitudin enim ac metus mollis tempor. Quisque nec
            laoreet leo. Cras vulputate nisi lacinia, tincidunt quam id,
            eleifend lectus. Suspendisse potenti. Sed lorem nibh, tristique vel
            mollis et, placerat nec neque. Fusce ut lobortis leo. Pellentesque
            in suscipit metus.
          </div>

          <div>
            Cras mattis sagittis arcu. Ut rutrum leo vel risus aliquam auctor.
            Nunc ac dictum nibh. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Praesent tempus interdum
            turpis aliquam pharetra. Cras at pellentesque velit, non
            sollicitudin ante. Donec nec posuere purus. Aliquam porttitor est
            vitae tortor accumsan iaculis. Phasellus sagittis lobortis quam, a
            iaculis mauris. Nullam pretium libero ac enim placerat rutrum.
          </div>

          <div>
            Sed vehicula ex elit, non consectetur turpis pretium id. Quisque
            faucibus orci arcu, eu blandit libero tempor ac. Donec tempor
            laoreet ultrices. Donec scelerisque, tellus et faucibus dapibus,
            ipsum erat semper velit, nec eleifend libero augue id nibh. Nunc
            posuere sem urna, ac vestibulum ligula tincidunt posuere. In nec
            metus sit amet ex ornare pretium. Phasellus ut nisl odio. Mauris
            risus eros, bibendum bibendum interdum ac, eleifend ut lectus.
            Curabitur aliquam venenatis aliquet. Suspendisse maximus congue nisl
            convallis fringilla. Nullam sodales sapien quis massa maximus
            euismod. Fusce mi est, auctor vitae risus in, rhoncus elementum
            ante. Suspendisse porta lacinia rutrum. Ut consequat justo in metus
            pharetra lobortis.
          </div>

          <div>
            Quisque ut ultricies nisi. Vivamus eu nisl in purus efficitur tempus
            ut sed ante. Curabitur vulputate magna et lorem rutrum mattis. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            euismod sed est in ultricies. In hac habitasse platea dictumst. Sed
            mollis nec massa eu congue. In ut varius tellus. Maecenas tincidunt,
            dolor at eleifend consequat, leo nulla interdum magna, eu convallis
            erat urna feugiat sapien. Aenean non sem at lorem consequat
            tincidunt. Aenean nunc dui, pretium et tincidunt iaculis, mollis
            eget metus. In laoreet pharetra quam ac aliquet. Curabitur faucibus
            ex nisi, ut dapibus ipsum eleifend sit amet. Nam eu hendrerit odio.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vulputate felis eu tincidunt malesuada. Vestibulum pharetra faucibus
            est, id tristique lacus maximus quis. Vestibulum sit amet suscipit
            est. Nunc quis sem tellus. Mauris interdum consequat est, et aliquam
            ligula gravida posuere. Cras ex tortor, sagittis non feugiat quis,
            lobortis aliquam magna. Donec faucibus, velit id pulvinar malesuada,
            sapien massa aliquet urna, id lacinia leo mauris eget justo.
            Curabitur ac feugiat orci. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas.
          </div>
          <div>
            Nunc viverra tristique augue in imperdiet. Nam ac nisi a orci
            pretium congue a vitae eros. Sed consectetur ultricies nisi, a
            blandit nulla iaculis et. Phasellus non finibus nulla. Duis egestas
            efficitur lacus. Proin egestas malesuada lacus posuere auctor. Proin
            vitae blandit lectus. Duis convallis dui augue, a elementum neque
            tempus vitae. Donec sollicitudin ipsum a quam interdum suscipit.
            Quisque sollicitudin enim ac metus mollis tempor. Quisque nec
            laoreet leo. Cras vulputate nisi lacinia, tincidunt quam id,
            eleifend lectus. Suspendisse potenti. Sed lorem nibh, tristique vel
            mollis et, placerat nec neque. Fusce ut lobortis leo. Pellentesque
            in suscipit metus.
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
