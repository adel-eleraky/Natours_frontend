const NavElement = ({ href, icon, name, active }) => {
    return (
        <li className={active ? "side-nav--active" : ""}>
            <a href={href}>
                <svg>
                    <use xlinkHref={`img/icons.svg#icon-${icon}`} />
                </svg>
                {name}
            </a>
        </li>
    );
};


export default NavElement