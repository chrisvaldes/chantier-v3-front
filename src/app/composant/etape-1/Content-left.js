import Link from "next/link";
import React from "react";

export default function ContentLeft() {
    return (
        <>
            <div className="contents">
                <div className="relative" data-testid="form-radio-cards-offering">
                    <div
                        className="flex items-start self-stretch flex-col md:flex-row lg:flex-col xl:flex-row tablet-portrait:flex-row drop-shadow-md *:border-b *:border-b-gray-lighter-2 [&amp;&gt;*:last-child]:border-b-0 md:*:border-r md:*:border-b-0 md:*:border-r-gray-lighter-2 md:[&amp;&gt;*:last-child]:border-r-0 lg:*:border-b lg:*:border-r-0 lg:*:border-b-gray-lighter-2 lg:[&amp;&gt;*:last-child]:border-b-0 xl:*:border-r xl:*:border-b-0 xl:*:border-r-gray-lighter-2 xl:[&amp;&gt;*:last-child]:border-r-0 tablet-portrait:*:border-r tablet-portrait:*:border-b-0 tablet-portrait:*:border-r-gray-lighter-2 tablet-portrait:[&amp;&gt;*:last-child]:border-r-0"
                    >
                        <Link
                            className="flex flex-wrap items-center flex-1 self-stretch focus-visible:outline focus-visible:outline-1 focus-visible:-outline-offset-1 flex-row gap-4 md:flex-col md:gap-6 lg:flex-row lg:gap-4 xl:flex-col xl:gap-6 tablet-portrait:flex-col tablet-portrait:gap-6 py-4 px-6 min-h-16 bg-white first:rounded-t last:rounded-b md:first:rounded-l md:first:rounded-tr-none md:last:rounded-r md:last:rounded-bl-none lg:first:rounded-t lg:first:rounded-bl-none lg:last:rounded-b lg:last:rounded-tr-none xl:first:rounded-l xl:first:rounded-tr-none xl:last:rounded-r xl:last:rounded-bl-none tablet-portrait:first:rounded-l tablet-portrait:first:rounded-tr-none tablet-portrait:last:rounded-r tablet-portrait:last:rounded-bl-none cursor-pointer cursor-default   active:shadow-[0_0_1px_1px] active:shadow-blue-main hover:bg-gradient-to-b hover:from-blue-main hover:to-blue-dark [&amp;_[stroke^=&quot;#&quot;]]:hover:stroke-white [&amp;_[fill^=&quot;#&quot;]]:hover:fill-white [&amp;_*]:hover:text-white"
                            href="etape-2"
                        >
                            <div data-testid="radio-card-icon" className="flex pt-1.5 flex-col items-start self-start gap-10">
                                <svg
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="md:w-12 lg:w-8 xl:w-12 tablet-portrait:w-12 md:h-12 lg:h-8 xl:h-12 tablet-portrait:h-12 relative flex justify-center shrink-0 size-8"
                                >
                                    <path
                                        opacity="0.3"
                                        d="M24 22.752a12.492 12.492 0 0 0-12.493 12.492h24.986A12.493 12.493 0 0 0 24 22.752Zm0-.001a6.187 6.187 0 1 0 0-12.374 6.187 6.187 0 0 0 0 12.374Z"
                                        fill="#204ECF"
                                    ></path>
                                    <path
                                        d="M24 23.126a6.562 6.562 0 1 1 6.563-6.562A6.57 6.57 0 0 1 24 23.126Zm0-12.375a5.812 5.812 0 1 0 5.813 5.813A5.82 5.82 0 0 0 24 10.751Z"
                                        fill="#204ECF"
                                    ></path>
                                    <path d="M36.868 35.244h-.75a12.118 12.118 0 1 0-24.236 0h-.75a12.868 12.868 0 1 1 25.736 0Z" fill="#204ECF"></path>
                                    <path
                                        d="M24 48a24 24 0 1 1 24-24 24.028 24.028 0 0 1-24 24ZM24 .75A23.25 23.25 0 1 0 47.25 24 23.277 23.277 0 0 0 24 .75Z"
                                        fill="#204ECF"
                                    ></path>
                                </svg>
                            </div>
                            <div className="flex flex-wrap flex-1 self-stretch gap-4">
                                <div
                                    className="flex flex-col items-start flex-1 self-stretch *:whitespace-normal lg:*:whitespace-normal justify-center lg:justify-center md:justify-end md:*: xl:justify-end xl:*: tablet-portrait:justify-end tablet-portrait:*:"
                                >
                                    <div
                                        className="self-stretch leading-6 text-base-md tracking-normal text-gray-dark-2 not-italic font-semibold "
                                        data-testid="radio-card-label"
                                    >
                                        Comme un Individu
                                    </div>
                                </div>
                                <div data-testid="radio-card-arrow" className="flex size-4 self-center md:self-end lg:self-center xl:self-end tablet-portrait:self-end">
                                    <svg
                                        width="16"
                                        height="16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-gray-dark relative flex justify-center shrink-0 fill-current size-4"
                                    >
                                        <path d="m9.793 5.5 2.5 2.5H2v1h10.293l-2.5 2.5.707.707L14.207 8.5 10.5 4.793l-.707.707z" fill="currentColor" data-classname="icon-fill"></path>
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        <Link
                            className="flex flex-wrap items-center flex-1 self-stretch focus-visible:outline focus-visible:outline-1 focus-visible:-outline-offset-1 flex-row gap-4 md:flex-col md:gap-6 lg:flex-row lg:gap-4 xl:flex-col xl:gap-6 tablet-portrait:flex-col tablet-portrait:gap-6 py-4 px-6 min-h-16 bg-white first:rounded-t last:rounded-b md:first:rounded-l md:first:rounded-tr-none md:last:rounded-r md:last:rounded-bl-none lg:first:rounded-t lg:first:rounded-bl-none lg:last:rounded-b lg:last:rounded-tr-none xl:first:rounded-l xl:first:rounded-tr-none xl:last:rounded-r xl:last:rounded-bl-none tablet-portrait:first:rounded-l tablet-portrait:first:rounded-tr-none tablet-portrait:last:rounded-r tablet-portrait:last:rounded-bl-none cursor-pointer cursor-default   active:shadow-[0_0_1px_1px] active:shadow-blue-main hover:bg-gradient-to-b hover:from-blue-main hover:to-blue-dark [&amp;_[stroke^=&quot;#&quot;]]:hover:stroke-white [&amp;_[fill^=&quot;#&quot;]]:hover:fill-white [&amp;_*]:hover:text-white"
                            href="etape-2"
                        >
                            <div data-testid="radio-card-icon" className="flex pt-1.5 flex-col items-start self-start gap-10">
                                <svg
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="md:w-12 lg:w-8 xl:w-12 tablet-portrait:w-12 md:h-12 lg:h-8 xl:h-12 tablet-portrait:h-12 relative flex justify-center shrink-0 size-8"
                                >
                                    <path opacity="0.15" d="M24 10.875a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25Z" fill="#204ECF"></path>
                                    <path opacity="0.15" d="M19.125 15.75a4.875 4.875 0 1 1 9.75 0" fill="#204ECF"></path>
                                    <path
                                        d="M24 21.375c5.592 0 10.125-4.533 10.125-10.125S29.592 1.125 24 1.125 13.875 5.658 13.875 11.25 18.408 21.375 24 21.375Zm13.5 26.25c5.592 0 10.125-4.533 10.125-10.125S43.092 27.375 37.5 27.375 27.375 31.908 27.375 37.5 31.908 47.625 37.5 47.625Zm-27 0c5.592 0 10.125-4.533 10.125-10.125S16.092 27.375 10.5 27.375.375 31.908.375 37.5 4.908 47.625 10.5 47.625Z"
                                        stroke="#204ECF"
                                        strokeMiterlimit="10"
                                    ></path>
                                    <path d="M24 10.875a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25Z" stroke="#204ECF" strokeMiterlimit="10"></path>
                                    <path d="M19.125 15.75a4.875 4.875 0 1 1 9.75 0" stroke="#204ECF" strokeMiterlimit="10"></path>
                                    <path opacity="0.15" d="M37.5 37.125a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25Z" fill="#204ECF"></path>
                                    <path opacity="0.15" d="M32.625 42a4.875 4.875 0 1 1 9.75 0" fill="#204ECF"></path>
                                    <path d="M37.5 37.125a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25Z" stroke="#204ECF" strokeMiterlimit="10"></path>
                                    <path d="M32.625 42a4.875 4.875 0 1 1 9.75 0" stroke="#204ECF" strokeMiterlimit="10"></path>
                                    <path opacity="0.15" d="M10.5 37.125a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25Z" fill="#204ECF"></path>
                                    <path opacity="0.15" d="M5.625 42a4.875 4.875 0 1 1 9.75 0" fill="#204ECF"></path>
                                    <path d="M10.5 37.125a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25Z" stroke="#204ECF" strokeMiterlimit="10"></path>
                                    <path d="M5.625 42a4.875 4.875 0 1 1 9.75 0M21 37.875h4.5m-10.875-9.75 4.5-7.5m9.75 0 3.75 7.5" stroke="#204ECF" strokeMiterlimit="10"></path>
                                </svg>
                            </div>
                            <div className="flex flex-wrap flex-1 self-stretch gap-4">
                                <div
                                    className="flex flex-col items-start flex-1 self-stretch *:whitespace-normal lg:*:whitespace-normal justify-center lg:justify-center md:justify-end md:*: xl:justify-end xl:*: tablet-portrait:justify-end tablet-portrait:*:"
                                >
                                    <div
                                        className="self-stretch leading-6 text-base-md tracking-normal text-gray-dark-2 not-italic font-semibold "
                                        data-testid="radio-card-label"
                                    >
                                        Comme un Gouvernement
                                    </div>
                                </div>
                                <div data-testid="radio-card-arrow" className="flex size-4 self-center md:self-end lg:self-center xl:self-end tablet-portrait:self-end">
                                    <svg
                                        width="16"
                                        height="16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-gray-dark relative flex justify-center shrink-0 fill-current size-4"
                                    >
                                        <path d="m9.793 5.5 2.5 2.5H2v1h10.293l-2.5 2.5.707.707L14.207 8.5 10.5 4.793l-.707.707z" fill="currentColor" data-classname="icon-fill"></path>
                                    </svg>
                                </div>
                            </div>
                        </Link>


                        <Link
                            className="flex flex-wrap items-center flex-1 self-stretch focus-visible:outline focus-visible:outline-1 focus-visible:-outline-offset-1 flex-row gap-4 md:flex-col md:gap-6 lg:flex-row lg:gap-4 xl:flex-col xl:gap-6 tablet-portrait:flex-col tablet-portrait:gap-6 py-4 px-6 min-h-16 bg-white first:rounded-t last:rounded-b md:first:rounded-l md:first:rounded-tr-none md:last:rounded-r md:last:rounded-bl-none lg:first:rounded-t lg:first:rounded-bl-none lg:last:rounded-b lg:last:rounded-tr-none xl:first:rounded-l xl:first:rounded-tr-none xl:last:rounded-r xl:last:rounded-bl-none tablet-portrait:first:rounded-l tablet-portrait:first:rounded-tr-none tablet-portrait:last:rounded-r tablet-portrait:last:rounded-bl-none cursor-pointer cursor-default   active:shadow-[0_0_1px_1px] active:shadow-blue-main hover:bg-gradient-to-b hover:from-blue-main hover:to-blue-dark [&amp;_[stroke^=&quot;#&quot;]]:hover:stroke-white [&amp;_[fill^=&quot;#&quot;]]:hover:fill-white [&amp;_*]:hover:text-white"
                            href="etape-2"
                        >
                            <div data-testid="radio-card-icon" className="flex pt-1.5 flex-col items-start self-start gap-10">
                                <svg
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="md:w-12 lg:w-8 xl:w-12 tablet-portrait:w-12 md:h-12 lg:h-8 xl:h-12 tablet-portrait:h-12 relative flex justify-center shrink-0 size-8"
                                >
                                    <g clipPath="url(#devices_svg__a)">
                                        <g opacity="0.15" fill="#183A9C">
                                            <path d="M35.25 9v21.75H24v3h13.5V9h-2.25ZM12 30.75v-13.5H9.75v16.5H22.5v-3H12Z"></path>
                                            <path d="M23.625 19.5a7.875 7.875 0 1 0 0-15.75 7.875 7.875 0 0 0 0 15.75Z"></path>
                                        </g>
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M35.25 30.75h-10.5v7.5H46.5v-7.5H35.25ZM46.5 30V9.75h-9V9h9.75v30H24v-8.25h-.75v16.5H0l.045-30H9.75V18H.787L.761 38.25H22.5v-7.5H12v-30h23.25V30H46.5Zm-12 0v-7.5H12.75V30H34.5Zm0-8.25H12.75V1.5H34.5v20.25ZM.76 39H22.5v7.5H.75L.76 39Zm14.99 3.75H7.5v.75h8.25v-.75Zm3.75-16.5h8.25V27H19.5v-.75Zm20.25 8.25H31.5v.75h8.25v-.75ZM19.988 12.262l2.512 2.52 5.325-5.332-.525-.525-4.8 4.792-1.988-1.98-.524.525Z"
                                            fill="#204ECD"
                                        ></path>
                                    </g>
                                    <defs>
                                        <clipPath id="devices_svg__a"><path fill="#fff" d="M0 0h48v48H0z"></path></clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="flex flex-wrap flex-1 self-stretch gap-4">
                                <div
                                    className="flex flex-col items-start flex-1 self-stretch *:whitespace-normal lg:*:whitespace-normal justify-center lg:justify-center md:justify-end md:*: xl:justify-end xl:*: tablet-portrait:justify-end tablet-portrait:*:"
                                >
                                    <div
                                        className="self-stretch leading-6 text-base-md tracking-normal text-gray-dark-2 not-italic font-semibold "
                                        data-testid="radio-card-label"
                                    >
                                        Comme une Entreprise privée
                                    </div>
                                </div>
                                <div data-testid="radio-card-arrow" className="flex size-4 self-center md:self-end lg:self-center xl:self-end tablet-portrait:self-end">
                                    <svg
                                        width="16"
                                        height="16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-gray-dark relative flex justify-center shrink-0 fill-current size-4"
                                    >
                                        <path d="m9.793 5.5 2.5 2.5H2v1h10.293l-2.5 2.5.707.707L14.207 8.5 10.5 4.793l-.707.707z" fill="currentColor" data-classname="icon-fill"></path>
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}