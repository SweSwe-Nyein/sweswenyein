"use client";
import { PointMaterial, Points, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { Suspense, useRef, useState } from "react";
import type { Points as PointProps } from "three";

const Stars = (props: any) => {
	const ref = useRef<PointProps>(null);
	const [sphere] = useState(() =>
		random.inSphere(new Float32Array(6000), { radius: 1 }),
	);

	useFrame((state, delta) => {
		if (ref.current) {
			ref.current.rotation.x -= delta / 50;
			ref.current.rotation.y -= delta / 50;
		}
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={sphere} stride={3} {...props}>
				<PointMaterial
					transparent
					color="#cfe9ff"
					size={0.002}
				/>
			</Points>
		</group>
	);
};

const StarsCanvas = () => {
	return (
		<div className="w-full h-full absolute">
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Suspense fallback={null}>
					<Stars />
				</Suspense>
				<Preload all />
			</Canvas>
		</div>
	);
};

export default StarsCanvas;
