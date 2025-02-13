import React, { useState } from "react";
import "./onepager.css";
import { BookText, HelpCircle } from "lucide-react";
import ImageModal from "../dashboard/ImageModal";

const OnePager = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button className="onepager-btn" onClick={() => setIsOpen(true)}>
                <BookText />
            </button>
            <ImageModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default OnePager;
