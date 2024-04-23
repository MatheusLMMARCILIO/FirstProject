import './index.css'

const MenuNav = () => {

    const name = prompt('Qual seu nome?')


    return (
        <section className='MenuNav'>

            <div className="Logo">
                <h1>{name}</h1>
            </div>

            <div className="LinksMenuNav">
                <ul>
                    <li to="#">HOME</li>
                    <li to="#">ABOUT</li>
                    <li to="#">SERVICES</li>
                    <li to="#">BLOG</li>
                    <li to="#">CONTACT</li>
                </ul>
            </div>

        </section>
    )
}

export default MenuNav