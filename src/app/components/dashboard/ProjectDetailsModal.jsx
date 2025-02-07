import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function ProjectDetailsModal({ isOpen, setIsOpen }) {
    return (
        <div>
            <Transition show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-50"
                    onClose={() => setIsOpen(false)}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-[90%] max-w-4xl">
                                <h2 className="text-xl font-bold text-center mb-4">
                                    Maruboshi OM CMS
                                </h2>
                                <p className="text-center mb-6">
                                    A project for Maroboshi OM, involving data
                                    transformation and SEO keyword extraction.
                                    We structured and managed large volumes of
                                    documents for better accessibility.
                                </p>
                                <p className="text-center mb-6">
                                    "Enhanced Content Creation Efficiency: The
                                    project can significantly streamline the
                                    video production process by automating tasks
                                    such as scriptwriting and image generation.
                                    This can reduce production time and costs.
                                    Improved Content Quality: By providing
                                    in-depth video analysis and relevant web
                                    searches, the project can help creators
                                    produce more engaging and informative
                                    content. New Revenue Streams: The project
                                    could potentially be monetized through
                                    subscriptions, premium features, or
                                    partnerships with content creators.
                                    Competitive Advantage: For businesses that
                                    rely heavily on video content, this project
                                    could provide a competitive advantage by
                                    enabling them to produce high-quality
                                    content more efficiently than their
                                    competitors."
                                </p>
                                <div className="flex justify-between">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 py-2 bg-gray-200 text-black rounded"
                                    >
                                        Cancel
                                    </button>
                                    <button className="px-4 py-2 bg-black text-white rounded">
                                        Book Now
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
}
