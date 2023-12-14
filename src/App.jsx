import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div>
      <Parallax pages={6}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={4}
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg)",
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={3.5}
          speed={1}
          factor={2}
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/47367/full-moon-moon-bright-sky-47367.jpeg)",
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={5}
          speed={0.5}
          factor={2}
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg)",
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 5 }}
          style={{ textAlign: "center" }}
        >
          <img src="https://raw.githubusercontent.com/fireship-io/skydiving-cat-parallax/main/src/cat.gif" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>Skydiving</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={5.1}
          speed={0.05}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>Welcome Home Kitty</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
