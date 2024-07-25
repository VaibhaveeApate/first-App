import React from "react";

function Home() {
    return (
        <div 
            id="carouselExampleCaptions" 
            className="carousel slide" 
            data-bs-ride="carousel"
            style={{ 
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
            }}
        >
            <div className="carousel-indicators">
                <button 
                    type="button" 
                    data-bs-target="#carouselExampleCaptions" 
                    data-bs-slide-to="0" 
                    className="active" 
                    aria-current="true" 
                    aria-label="Slide 1"
                ></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" style={{ position: 'relative' }}>
                    <img 
                        src="https://c4.wallpaperflare.com/wallpaper/306/656/57/question-question-mark-red-black-wallpaper-preview.jpg" 
                        className="d-block w-100" 
                        alt="Bootstrap Themes" 
                        style={{ height: '100vh', objectFit: 'cover' }}
                    />
                    <div 
                        className="carousel-caption d-flex flex-column align-items-center justify-content-center" 
                        style={{ 
                            position: 'absolute', 
                            top: 0, 
                            bottom: 0, 
                            left: 0, 
                            right: 0, 
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                            color: '#fff', 
                            textAlign: 'center', 
                            padding: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                            Welcome to the Quiz App
                        </h1>
                        <p style={{ fontSize: '1.25rem', marginTop: '10px' }}>
                            Use the navigation bar to manage questions and add new ones.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
