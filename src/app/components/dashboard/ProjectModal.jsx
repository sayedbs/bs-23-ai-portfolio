"use client";
import {
    X,
    MessageSquare,
    Mic,
    Globe,
    Image,
    HelpCircle,
    BarChart,
    RefreshCw,
    UserCheck,
} from "lucide-react";
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

export default function ProjectModal({ isOpen, setIsOpen, project }) {
    console.log(project.features);

    const targetAudience = [
        { name: "Toyota Hilux Owners" },
        { name: "Toyota Service Centers" },
        { name: "Automotive Support Teams" },
    ];

    return (
        <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
            <DialogContent className="max-w-4xl h-[90vh] p-0">
                <DialogHeader className="px-6 py-4 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10 border-b">
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-2xl font-bold">
                            {project.title}
                        </DialogTitle>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                </DialogHeader>
                <ScrollArea className="h-full">
                    <div className="px-6 py-4 space-y-8">
                        <div className="prose prose-gray dark:prose-invert max-w-none">
                            <p className="leading-relaxed text-justify">
                                {project.description}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold tracking-tight">
                                🚀 Features
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {project.features.map((feature, i) => (
                                    <div
                                        key={i}
                                        className="group p-4 rounded-lg border bg-card hover:bg-accent transition-colors space-y-2"
                                    >
                                        <div className="flex items-center space-x-2">
                                            {/* <feature.icon className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors" /> */}
                                            <h4 className="font-medium">
                                                {feature.title}
                                            </h4>
                                        </div>
                                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {project.youtube ? (
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold tracking-tight">
                                    Demo Video
                                </h3>
                                <div className="relative aspect-video rounded-lg overflow-hidden bg-black/5 dark:bg-white/5">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${project.videoId}`}
                                        title="YouTube video player"
                                        frameBorder="0"
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
                            <h3 className="text-xl font-semibold tracking-tight">
                                💡 Business Benefits
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {project.benefits.map((benefit, i) => (
                                    <div
                                        key={i}
                                        className="p-4 rounded-lg border bg-card hover:bg-accent transition-colors group"
                                    >
                                        <div className="font-medium font-bold text-primary group-hover:text-primary/80 transition-colors">
                                            {benefit.title} {benefit.icon}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {benefit.description}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4 pb-8">
                            <h3 className="text-xl font-semibold tracking-tight">
                                🛠️ Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <Badge
                                        key={i}
                                        variant="secondary"
                                        className="text-xs bg-primary/10 hover:bg-primary/20 transition-colors"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        {project.audience.length > 0 ? (
                            <>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold tracking-tight">
                                        🎯 Target Audience
                                    </h3>
                                    <div className="grid gap-2 pb-8">
                                        {project.audience.map((target, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-2 group"
                                            >
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                                    {target}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
