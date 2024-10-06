/* No Need to add Import. It immediately Knows HBP, is a TypeScript Interface */

const HeaderBox = ( { type ="title", title, subtext, user}: HeaderBoxProps) => {
  return (
    <div className="header-box">
        <h1 className="header-box-title">
            {title}
            {type === "greeting" && (
                <span className="text-bankGradient">
                    &nbsp;{user}
                </span>
            )}
        </h1>
        <p className="header-box-subtext">
            {subtext}
        </p>
    </div>
  )
}

export default HeaderBox