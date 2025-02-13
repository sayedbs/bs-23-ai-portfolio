"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ZoomIn, ZoomOut, RotateCw, X } from "lucide-react";

export default function ImageModal({ isOpen, setIsOpen }) {
    const [scale, setScale] = useState(0.3);
    const [rotation, setRotation] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [touchZoom, setTouchZoom] = useState(false);
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.1, 3));
    const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.1));
    const handleRotate = () => setRotation((prev) => (prev + 90) % 360);

    const handleMouseDown = (event) => {
        setIsDragging(true);
        setDragStart({
            x: event.clientX - position.x,
            y: event.clientY - position.y,
        });
    };

    const handleTouchStart = (event) => {
        const touch = event.touches[0];
        setIsDragging(true);
        setDragStart({
            x: touch.clientX - position.x,
            y: touch.clientY - position.y,
        });
    };

    const handleMouseMove = (event) => {
        if (!isDragging) return;

        const newX = event.clientX - dragStart.x;
        const newY = event.clientY - dragStart.y;

        setPosition({ x: newX, y: newY });
    };

    const handleTouchMove = (event) => {
        if (!isDragging) return;
        if (event.touches.length > 1) {
            event.preventDefault();
            return;
        }
        const touch = event.touches[0];
        const newX = touch.clientX - dragStart.x;
        const newY = touch.clientY - dragStart.y;

        setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const handleWheel = (event) => {
        event.preventDefault();
        if (event.deltaY < 0) {
            handleZoomIn();
        } else {
            handleZoomOut();
        }
    };

    const handleTouchZoom = (event) => {
        event.preventDefault(); // Prevent default browser zoom
        if (event.touches.length === 2) {
            const touch1 = event.touches[0];
            const touch2 = event.touches[1];
            const distance = Math.hypot(
                touch2.clientX - touch1.clientX,
                touch2.clientY - touch1.clientY
            );
            if (touchZoom) {
                setScale((prev) => Math.max(0.1, Math.min(prev + 0.01, 3)));
            }
            setTouchZoom(true);
        }
    };

    const handleTouchEndZoom = () => {
        setTouchZoom(false);
    };

    useEffect(() => {
        if (containerRef.current && imageRef.current) {
            const container = containerRef.current;
            const image = imageRef.current;

            const containerRect = container.getBoundingClientRect();
            const imageRect = image.getBoundingClientRect();

            const maxX = Math.max(
                0,
                (imageRect.width * scale - containerRect.width) / 2
            );
            const maxY = Math.max(
                0,
                (imageRect.height * scale - containerRect.height) / 2
            );

            setPosition((prev) => ({
                x: Math.max(-maxX, Math.min(maxX, prev.x)),
                y: Math.max(-maxY, Math.min(maxY, prev.y)),
            }));
        }
    }, [scale]);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="max-w-full max-h-full w-screen h-screen p-0">
                <DialogHeader className="absolute top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-sm">
                    <div className="flex justify-between items-center p-4">
                        <DialogTitle>Image Viewer</DialogTitle>
                        <Button
                            className="p-2 pr-3 "
                            variant="ghost"
                            size="medium"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="h-4 w-4 text-3xl" />
                            <span>Close</span>
                        </Button>
                    </div>
                </DialogHeader>
                <div
                    ref={containerRef}
                    className="relative w-full h-full overflow-hidden cursor-move"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onWheel={handleWheel}
                    onTouchMove={handleTouchZoom}
                    onTouchEnd={handleTouchEndZoom}
                >
                    <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                            transform: `translate(${position.x}px, ${position.y}px)`,
                        }}
                    >
                        <Image
                            ref={imageRef}
                            src="/images/onepager.png"
                            alt="Viewed image"
                            width={2500}
                            height={1500}
                            className="object-contain max-w-none"
                            style={{
                                transform: `scale(${scale}) rotate(${rotation}deg)`,
                                transition: isDragging
                                    ? "none"
                                    : "transform 0.3s ease",
                            }}
                            draggable={false}
                        />
                    </div>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 z-10">
                    <Button
                        variant="secondary"
                        size="icon"
                        onClick={handleZoomIn}
                    >
                        <ZoomIn className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="secondary"
                        size="icon"
                        onClick={handleZoomOut}
                    >
                        <ZoomOut className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="secondary"
                        size="icon"
                        onClick={handleRotate}
                    >
                        <RotateCw className="h-4 w-4" />
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
