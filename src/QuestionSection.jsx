import { useState } from 'react';

const messages = [
    "Are you sure? 🥺",
    "Think again! 💖",
    "But we'd be so cute together! 🥰",
    "Please? 🍰 (I'll buy you cake)",
    "Don't break my heart! 💔",
    "I'm gonna cry... 😭",
    "You're making a mistake! 😆",
    "Have a heart! 💗",
    "Pretty please? 🍒",
    "I'll give you cookies! 🍪",
    "Look at me... 🥺👉👈",
    "Change your mind? 🌹",
    "Ok, last chance! 🚀",
    "Just say Yes! 💕"
];

export default function QuestionSection({ onYes }) {
    const [noBtnStyle, setNoBtnStyle] = useState({});
    const [messageIndex, setMessageIndex] = useState(0);

    const handleNoInteraction = (e) => {
        const buttonWidth = 150; // Approximate width
        const buttonHeight = 50; // Approximate height
        const padding = 20;
        const minDistance = 150; // Minimum distance from cursor

        let randomX, randomY, distance;
        let attempts = 0;

        do {
            randomX = Math.random() * (window.innerWidth - buttonWidth - padding * 2) + padding;
            randomY = Math.random() * (window.innerHeight - buttonHeight - padding * 2) + padding;

            const diffX = randomX - (e.clientX || 0);
            const diffY = randomY - (e.clientY || 0);
            distance = Math.sqrt(diffX * diffX + diffY * diffY);

            attempts++;
        } while (distance < minDistance && attempts < 15);

        setNoBtnStyle({
            position: 'fixed',
            left: `${randomX}px`,
            top: `${randomY}px`,
            transform: 'none', // Reset previous transform if any
            transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
            zIndex: 100
        });

        setMessageIndex((prev) => (prev + 1) % messages.length);
    };

    return (
        <div className="question-section" style={{ position: 'relative', height: '100%', minHeight: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="floating-heart">🧸</div>
            <h1 className="headline">Will you be my Valentine?</h1>

            <div className="buttons-container" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', marginTop: '1rem', position: 'relative', width: '100%' }}>
                <button className="btn-yes" onClick={onYes}>
                    Yes 💖
                </button>

                {/* Wrapper not strictly needed for fixed positioning but keeping structure clean */}
                <button
                    className="btn-no"
                    style={noBtnStyle}
                    onMouseEnter={handleNoInteraction}
                    onMouseMove={handleNoInteraction}
                    onClick={handleNoInteraction}
                >
                    {messageIndex === 0 ? "No 🙈" : messages[messageIndex]}
                </button>
            </div>
        </div>
    );
}
