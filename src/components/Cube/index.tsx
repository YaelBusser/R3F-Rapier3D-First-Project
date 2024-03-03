import {OrbitControls} from "@react-three/drei";

const Cube = () => {
    return (
        <>
            <ambientLight intensity={0} />
            <directionalLight position={[5,5,5]} intensity={0} />
            <OrbitControls/>
            <mesh>
                <boxGeometry/>
                <meshNormalMaterial/>
            </mesh>
        </>
    )
}

export default Cube;