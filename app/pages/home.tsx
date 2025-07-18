export default function Home() {
    return (
        <div>
            <section className="hero">
                <div className="hero-text">
                    <h1>Empowergerring conversationwith AI</h1>
                    <p>AI Robot acts as a next-gen guide for powering interaction between human and machine.</p>
                    <button className="hero-btn">Try Now</button>
                </div>
                <div className="hero-image">
                    <img src="robot-placeholder.png" alt="AI Robot" />
                </div>
            </section>

            <section className="features">
                <h2>Features</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <img src="icon1.png" alt="Home Icon" />
                        <h3>Home</h3>
                        <p>Conversation starter capability</p>
                    </div>
                    <div className="feature-card">
                        <img src="icon2.png" alt="Foitle Icon" />
                        <h3>Foitle</h3>
                        <p>Action-based decision flow</p>
                    </div>
                    <div className="feature-card">
                        <img src="icon3.png" alt="About Icon" />
                        <h3>About</h3>
                        <p>Multilingual communication</p>
                    </div>
                    <div className="feature-card">
                        <img src="icon4.png" alt="Egoenabling Icon" />
                        <h3>Egoenabling</h3>
                        <p>AI-driven engagement engine</p>
                    </div>
                    <div className="feature-card">
                        <img src="icon5.png" alt="Contactio Icon" />
                        <h3>Contactio</h3>
                        <p>Multiple user access channels</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
