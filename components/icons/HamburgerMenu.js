export default function IconHamburgerMenu({className,transform}) {
    return (
        <svg 
            width="32px" 
            height="32px" 
            viewBox="0 0 24 24" 
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
            transform={transform}
            className={className}
        >
        
        <g data-name="Layer 2">
            <g data-name="menu-2">
                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/>
                <circle cx="4" cy="12" r="1"/>
                <rect x="7" y="11" width="14" height="2" rx=".94" ry=".94"/>
                <rect x="3" y="16" width="18" height="2" rx=".94" ry=".94"/>
                <rect x="3" y="6" width="18" height="2" rx=".94" ry=".94"/>
            </g>
        </g>
        
        </svg>
    )
}