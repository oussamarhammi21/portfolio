"use client";

import { useState, useEffect } from "react";

type Lang = "fr" | "en";

const Resume = () => {
    const pdfs: Record<Lang, string> = {
        fr: "/Rhammi_Oussama2025_FR.pdf",
        en: "/Rhammi_Oussama2025_EN.pdf",
    };

    const [lang, setLang] = useState<Lang>("fr");

    useEffect(() => {
        const userLang: Lang = navigator.language.startsWith("fr") ? "fr" : "en";
        setLang(userLang);
    }, []);

    return (
        <div className="flex flex-col items-center mt-10 px-4 gap-6">

            <h1 className="text-2xl font-semibold">
                {lang === "fr" ? "Mon CV" : "My Resume"}
            </h1>

            <div className="flex gap-2 bg-gray-100 p-1 rounded-lg shadow-sm">
                <button
                    onClick={() => setLang("fr")}
                    className={`px-4 py-1 rounded-md ${
                        lang === "fr" ? "bg-blue-600 text-white" : ""
                    }`}
                >
                    Français
                </button>

                <button
                    onClick={() => setLang("en")}
                    className={`px-4 py-1 rounded-md ${
                        lang === "en" ? "bg-blue-600 text-white" : ""
                    }`}
                >
                    English
                </button>
            </div>

            <iframe
                src={pdfs[lang]}
                title="PDF Viewer"
                className="w-full max-w-5xl h-[80vh] rounded-xl shadow-lg border"
            />

            <a
                href={pdfs[lang]}
                download
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
                {lang === "fr" ? "Télécharger le CV" : "Download Resume"}
            </a>

        </div>
    );
};

export default Resume;