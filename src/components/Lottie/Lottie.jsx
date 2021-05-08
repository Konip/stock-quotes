import { useLottie } from "lottie-react";
import graph from '../../assets/graph.json'

export default function Lottie() {
    const options = {
        animationData: graph,
        loop: true,
        autoplay: true,
      };
    const { View } = useLottie(options);
    return View
}
