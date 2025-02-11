import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ProjectDetailsModal({ isOpen, setIsOpen, project }) {
    console.log(project.youtube);

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
                        <div className="fixed inset-0 bg-black/50 backdrop-blur-md" />
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
                            <Dialog.Panel className="bg-white dark:bg-gray-900 bg-opacity-80 backdrop-blur-lg p-6 rounded-lg shadow-lg w-full max-w-4xl relative max-h-full overflow-y-auto custom-scrollbar">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                                >
                                    <span className="sr-only">Close</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                                <h2 className="text-xl font-bold text-center mb-4">
                                    {project.title}
                                </h2>

                                <p className="text-center mb-2">
                                    {project.description}
                                </p>
                                <hr className="my-4" />
                                <div>
                                    <h5 className="font-semibold mb-2 text-lg">
                                        Features
                                    </h5>
                                    <ul className="list-none space-y-1">
                                        {project.features.map(
                                            (feature, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center"
                                                >
                                                    <svg
                                                        className="w-4 h-4 mr-2 text-green-500 min-w-[16px] mb-auto mt-2"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-semibold mb-2 text-lg mt-8">
                                        Business Benefits:
                                    </h5>
                                    <ul className="list-none space-y-1">
                                        {project.benefits.map(
                                            (feature, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center"
                                                >
                                                    <svg
                                                        className="w-4 h-4 mr-2 text-green-500  min-w-[16px] mb-auto mt-2"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-semibold mb-2 text-lg mt-8">
                                        Tech Stack:
                                    </h5>
                                    <ul className="list-none space-y-1">
                                        {project.tech.map((feature, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center"
                                            >
                                                <svg
                                                    className="w-4 h-4 mr-2 text-green-500 min-w-[16px] mb-auto mt-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <div className="mt-6">
                                        <iframe
                                            width="100%"
                                            height="450"
                                            src="https://www.youtube.com/embed/oEbzihhL2RU"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>

                                <div className="flex justify-end mt-6">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 py-2 bg-black text-white rounded"
                                    >
                                        Close
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
