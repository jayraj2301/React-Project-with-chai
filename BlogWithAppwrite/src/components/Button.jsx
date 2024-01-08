import React from 'react'

function Button  ({
    children,
    type = "text",
    className="",
    bgColor="bg-red-500",
    textColor="text-white",
    ...props
}) {
    return(
        <button className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor} `}{...props}>
            {children}
        </button>
    )
}

export default Button