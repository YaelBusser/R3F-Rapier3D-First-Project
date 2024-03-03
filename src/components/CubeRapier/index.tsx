import {Box, OrbitControls, Sphere, Torus} from "@react-three/drei";
import {RigidBody} from "@react-three/rapier";

const Cube = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5,5,0]} intensity={0.4} />
            <OrbitControls/>
            <RigidBody gravityScale={0.1}>
                <Box position={[0,50,0]} args={[10,10,10]}>
                    <meshNormalMaterial />
                </Box>
            </RigidBody>
            <RigidBody position={[0, 100, 0]} colliders={"ball"}>
                <Sphere args={[10,10,10]}>
                    <meshNormalMaterial/>
                </Sphere>
            </RigidBody>
            <RigidBody position={[0, 150, 0]} colliders={"trimesh"}>
                <Torus args={[5,3,5]}>
                    <meshNormalMaterial/>
                </Torus>
            </RigidBody>
            <RigidBody type={"fixed"} restitution={1}>
                <Box position={[0,0,0]} args={[500, 1, 500]}>
                    <meshStandardMaterial color={"red"}/>
                </Box>
            </RigidBody>
        </>
    )
}

export default Cube;