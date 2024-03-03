import {Canvas} from "@react-three/fiber";
import "./index.css";
import {Suspense} from "react";
import {Physics} from "@react-three/rapier";
import Cube from "../../components/Cube";
import CubeRapier from "../../components/CubeRapier";
const Home = () => {
    return(
        <section>
            <Canvas camera={{position: [-50, 10, 0]}}>
                <color attach={"background"} args={["white"]} />
                <Suspense fallback={null}>
                    <Physics debug gravity={[0,-100,0]}>
                        <CubeRapier/>
                    </Physics>
                </Suspense>
            </Canvas>
        </section>
    )
}

export default Home;