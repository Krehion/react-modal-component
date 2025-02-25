import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
	input: "src/Modal.jsx", // Change from .js to .jsx for JSX files
	output: {
		file: "dist/Modal.js",
		format: "esm"
	},
	plugins: [
		resolve(),
		commonjs(),
		babel({
			babelHelpers: "bundled",
			presets: ["@babel/preset-react"],
			extensions: [".js", ".jsx"] // Support .jsx extensions
		})
	]
};
