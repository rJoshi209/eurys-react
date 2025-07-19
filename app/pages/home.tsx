import {
    BanknotesIcon,
    ClipboardIcon,
    DocumentMagnifyingGlassIcon,
    HomeIcon,
    PhoneIcon
} from "@heroicons/react/24/outline"

const icons = {
    Home: HomeIcon,
    Foitle: ClipboardIcon,
    About: DocumentMagnifyingGlassIcon,
    Egoenabling: BanknotesIcon,
    Contactio: PhoneIcon
}
export default function Home() {
    return (
        <div className="backgroundImage">
            <section className="hero">
                <div className="hero-text">
                    <h1>Empowergerring conversationwith AI</h1>
                    <p>AI Robot acts as a next-gen guide for powering interaction between human and machine.</p>
                    <button className="hero-btn">Try Now</button>
                </div>
            </section>

            <section className="features">
                <h2>Features</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <icons.Home aria-hidden="true" className="size-8 text-gray-600 group-hover:text-indigo-600" />
                        <h3>Home</h3>
                        <p>Conversation starter capability</p>
                    </div>
                    <div className="feature-card">
                        <icons.Foitle aria-hidden="true" className="size-8 text-gray-600 group-hover:text-indigo-600" />
                        <h3>Foitle</h3>
                        <p>Action-based decision flow</p>
                    </div>
                    <div className="feature-card">
                        <icons.About aria-hidden="true" className="size-8 text-gray-600 group-hover:text-indigo-600" />
                        <h3>About</h3>
                        <p>Multilingual communication</p>
                    </div>
                    <div className="feature-card">
                        <icons.Egoenabling aria-hidden="true" className="size-8 text-gray-600 group-hover:text-indigo-600" />
                        <h3>Egoenabling</h3>
                        <p>AI-driven engagement engine</p>
                    </div>
                    <div className="feature-card">
                        <icons.Contactio aria-hidden="true" className="size-8 text-gray-600 group-hover:text-indigo-600" />
                        <h3>Contactio</h3>
                        <p>Multiple user access channels</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
