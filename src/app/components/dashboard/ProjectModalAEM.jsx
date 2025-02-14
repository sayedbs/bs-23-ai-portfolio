"use client";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import TechIcon from "../TechIcon";

export default function ProjectModalAEM({ isOpen, setIsOpen, project }) {
    console.log(project);
    return (
        <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
            <DialogContent className="max-w-4xl h-[90vh] p-0 bg-[#f9fafb] dark:bg-background overflow-hidden">
                <DialogHeader className="px-6 py-4 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10 border-b">
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-2xl font-bold text-[#3b82f6]">
                            {project.title}
                        </DialogTitle>
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
                <ScrollArea className="h-full">
                    <div className="px-6 py-4 space-y-8">
                        <div className="prose prose-gray dark:prose-invert max-w-none">
                            <p className="leading-relaxed text-left">
                                {project.description}
                            </p>
                        </div>

                        {project.youtube ? (
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold tracking-tight text-[#3b82f6]">
                                    🎬 Application demo
                                </h3>
                                <div className="relative aspect-video rounded-lg overflow-hidden bg-black/5 dark:bg-white/5 ">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${project.youtube}?modestbranding=0&rel=0&showinfo=0&controls=1`}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}

                        <Separator className="bg-border/50" />

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold tracking-tight text-[#3b82f6]">
                                💡 Challenges Identified
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {project.challenges.map((challenge, i) => (
                                    <div
                                        key={i}
                                        className="p-4 rounded-lg border bg-card hover:bg-accent group relative overflow-hidden  hover:bg-white hover:shadow-xl hover:border-[#3b82f6] transition-all hover:border-opacity-40"
                                    >
                                        <h4 className="font-sm pb-2 text-primary group-hover:text-primary/80 transition-colors relative z-10">
                                            {challenge}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold tracking-tight text-[#3b82f6]">
                                🚀 Milestone Achieved
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {project.milestones.map((milestones, i) => (
                                    <div
                                        key={i}
                                        className="p-4 rounded-lg border bg-card hover:bg-accent group relative overflow-hidden  hover:bg-white hover:shadow-xl hover:border-[#3b82f6] transition-all hover:border-opacity-40"
                                    >
                                        <h4 className="font-sm pb-2 text-primary group-hover:text-primary/80 transition-colors relative z-10">
                                            {milestones.title}
                                        </h4>

                                        {milestones.icon && (
                                            <div className="absolute bottom-[-30px] opacity-30 right-[-30px] z-0 p-2 rounded-full bg-transparent text-7xl transition-transform duration-300 ease-in-out transform group-hover:scale-110">
                                                {milestones.icon}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4 pb-8">
                            <h3 className="text-xl font-semibold tracking-tight text-[#3b82f6]">
                                🛠️ Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <Badge
                                        key={i}
                                        variant="secondary"
                                        className="text-sm group p-2 bg-primary/10 border-2 border-transparent transition-colors hover:bg-transparent hover:shadow-xl hover:border-primary/40"
                                    >
                                        <TechIcon
                                            iconName={tech.title}
                                            className="group-hover:scale-125"
                                        />
                                        <span className="mx-1 text-md">
                                            {tech.title}
                                        </span>
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
