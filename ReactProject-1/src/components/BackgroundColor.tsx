import { useState } from "react"

function BackgroundColor() {
    const [backgroundColor, updateBackgroundColor] = useState('#ffffff')
    document.body.style.backgroundColor = backgroundColor

    return (
        <>
            <input type="color" value={backgroundColor} onChange={(event) => {
                updateBackgroundColor(event.target.value)
                document.body.style.backgroundColor = backgroundColor
            }} />
        </>
    )
}

export default BackgroundColor