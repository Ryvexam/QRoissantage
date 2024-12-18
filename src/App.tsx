import React from 'react';

const QRCodeAwareness: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-600 text-white text-center p-6">
            {/* Download QR Code Button */}
            <a
                href="/qr-code.png"
                className="absolute top-4 left-4 bg-white text-red-600 font-bold py-2 px-4 rounded hover:bg-gray-200"
            >
                Télécharger le QRCode
            </a>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202.24 202.24" className="w-24 mb-4">
                <defs>
                    <style>{`.cls-1{fill:#fff;}`}</style>
                </defs>
                <title>Asset 3</title>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Capa_1" data-name="Capa 1">
                        <path className="cls-1" d="M101.12,0A101.12,101.12,0,1,0,202.24,101.12,101.12,101.12,0,0,0,101.12,0ZM159,148.76H43.28a11.57,11.57,0,0,1-10-17.34L91.09,31.16a11.57,11.57,0,0,1,20.06,0L169,131.43a11.57,11.57,0,0,1-10,17.34Z"></path>
                        <path className="cls-1" d="M101.12,36.93h0L43.27,137.21H159L101.13,36.94Zm0,88.7a7.71,7.71,0,1,1,7.71-7.71A7.71,7.71,0,0,1,101.12,125.63Zm7.71-50.13a7.56,7.56,0,0,1-.11,1.3l-3.8,22.49a3.86,3.86,0,0,1-7.61,0l-3.8-22.49a8,8,0,0,1-.11-1.3,7.71,7.71,0,1,1,15.43,0Z"></path>
                    </g>
                </g>
            </svg>

            <h1 className="text-4xl font-bold mb-4">Vous venez de vous faire QRoissanter!</h1>
            <p className="text-lg mb-6">
                Avant de scanner un QR code, assurez-vous qu'il provient d'une source fiable.
                <br />
                <br />
                En prime, cela signifie que vous avez 48 heures pour ramener des croissants à tous vos collègues !
            </p>
            <a
                href="https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/quishing-hameconnage-qr-code"
                className="text-white font-bold underline hover:text-gray-200"
                target="_blank"
                rel="noopener noreferrer"
            >
                Cliquez ici pour en apprendre davantage sur les risques associés aux QR codes.
            </a>

            <footer className="mt-8">
                <p className="text-sm">
                    Idée inspirée par <a href="https://www.croissantage.fr" className="underline" target="_blank" rel="noopener noreferrer">croissantage.fr</a>.
                    <br />
                    Créé par <a href="https://www.ryvexam.fr" className="underline" target="_blank" rel="noopener noreferrer">VERY Maxime</a>.
                </p>
            </footer>
        </div>
    );
};

export default QRCodeAwareness;
