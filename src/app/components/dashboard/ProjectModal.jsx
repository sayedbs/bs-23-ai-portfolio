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

export default function ProjectModal({ isOpen, setIsOpen }) {
    const features = [
        { name: "General FAQ", icon: MessageSquare },
        { name: "Voice Assistant", icon: Mic },
        { name: "19 Languages", icon: Globe },
        { name: "Formatted Responses", icon: Image },
        { name: "Question Handling", icon: HelpCircle },
        { name: "FAQ Analytics", icon: BarChart },
        { name: "Real-Time Updates", icon: RefreshCw },
        { name: "Personalization", icon: UserCheck },
    ];

    const benefits = [
        { metric: "Faster customer support response", value: "10×" },
        { metric: "Increase in app usage", value: "2×" },
        { metric: "Higher User Retention", value: "69%" },
        { metric: "Growth in Accessory Sales", value: "37%" },
    ];

    const techStack = [
        { name: "Chatbot & AI: OpenAI (GenAI)" },
        { name: "Backend: .NET Web API" },
        { name: "Cloud & Hosting: Microsoft Azure" },
        { name: "Frontend & Mobile: Flutter" },
        { name: "Analytics & Monitoring: Firebase Analytics, Crashlytics" },
    ];

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
                            Toyota Hilux OM 3
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
                            <p className="text-muted-foreground leading-relaxed">
                                We developed a customer support app for Toyota
                                Hilux vehicles, featuring an AI-powered Owner's
                                Manual (OM). This solution enhances user
                                experience by providing instant support,
                                troubleshooting assistance, and relevant
                                information through a multilingual chatbot,
                                voice assistant, and advanced search features.
                                Our system enables faster issue resolution,
                                improved accessibility, and personalized
                                recommendations, making vehicle ownership more
                                convenient and efficient.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold tracking-tight">
                                Features
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {features.map((feature, i) => (
                                    <div
                                        key={i}
                                        className="group p-4 rounded-lg border bg-card hover:bg-accent transition-colors space-y-2"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <feature.icon className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors" />
                                            <h4 className="font-medium">
                                                {feature.name}
                                            </h4>
                                        </div>
                                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                            {getFeatureDescription(
                                                feature.name
                                            )}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold tracking-tight">
                                Business Benefits
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {benefits.map((benefit, i) => (
                                    <div
                                        key={i}
                                        className="p-4 rounded-lg border bg-card hover:bg-accent transition-colors group"
                                    >
                                        <div className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                                            {benefit.value}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {benefit.metric}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold tracking-tight">
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map((tech, i) => (
                                    <Badge
                                        key={i}
                                        variant="secondary"
                                        className="text-xs bg-primary/10 hover:bg-primary/20 transition-colors"
                                    >
                                        {tech.name}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold tracking-tight">
                                Target Audience
                            </h3>
                            <div className="grid gap-2">
                                {targetAudience.map((target, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2 group"
                                    >
                                        <div className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                            {target.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Separator className="bg-border/50" />

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold tracking-tight">
                                Demo Video
                            </h3>
                            <div className="relative aspect-video rounded-lg overflow-hidden bg-black/5 dark:bg-white/5">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <p className="text-sm text-muted-foreground">
                                        Video placeholder
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}

function getFeatureDescription(featureName) {
    switch (featureName) {
        case "General FAQ":
            return "Comprehensive Q&A for common inquiries";
        case "Voice Assistant":
            return "Hands-free interaction for user convenience";
        case "19 Languages":
            return "Multi-lingual support for global users";
        case "Formatted Responses":
            return "Rich media answers with images and tables";
        case "Question Handling":
            return "Intelligent processing of user queries";
        case "FAQ Analytics":
            return "Insights on most common user questions";
        case "Real-Time Updates":
            return "Latest information with XML to JSON conversion";
        case "Personalization":
            return "Tailored recommendations for each user";
        default:
            return "";
    }
}
