import React from "react";
import "./onepager.css";
import { BookText, HelpCircle } from "lucide-react";

const OnePager = () => {
    return (
        <div>
            <button className="onepager-btn">
                <BookText />
            </button>
        </div>
    );
};

export default OnePager;
