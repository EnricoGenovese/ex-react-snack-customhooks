import { useState } from "react";

export default function useSwitch(defaultValue = false) {
    const [state, setState] = useState(defaultValue)

    const toggle = () => setState((prev) => !prev)

    return [state, toggle]
}