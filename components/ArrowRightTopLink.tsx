
const ArrowRightTopLink = ({linkStyle, svgStyle, circleFill, pathFill}:{linkStyle: string; svgStyle: string, circleFill: string; pathFill: string}) => {
  return (
    <span className={`${linkStyle} flex items-center justify-center rounded-full`}>
          <svg className={`${svgStyle}`} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 50C11.1765 50 0 38.8235 0 25C0 11.1765 11.1765 0 25 0C38.8235 0 50 11.1765 50 25C50 38.8235 38.8235 50 25 50ZM25 2.94118C12.7941 2.94118 2.94118 12.7941 2.94118 25C2.94118 37.2059 12.7941 47.0588 25 47.0588C37.2059 47.0588 47.0588 37.2059 47.0588 25C47.0588 12.7941 37.2059 2.94118 25 2.94118Z" fill={circleFill}/>
          <circle cx="25.0003" cy="24.6648" r="22.6846" fill={circleFill}/>
          <path d="M14.0999 16.3957L34.2732 16.3958L34.2732 36.5691L31.3616 36.5691L31.3616 19.3074L14.0999 19.3074L14.0999 16.3957Z" fill={pathFill}/>
          <path d="M33.8574 18.8906L16.1798 36.5682L14.1 34.4885L31.7777 16.8108L33.8574 18.8906Z" fill={pathFill}/>
          </svg>
    </span>
  )
}

export default ArrowRightTopLink