"use client"

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

    const route = useRouter()

    const handleShedule = async (e) => {
        e.preventDefault()

        try{
            await axios.get("http://localhost:8000/api/v3/entretient/meet")
            .then((res)=>{
                console.log(res.data)
            })
            .catch(e => {
                console.log("erreur : " + e)
            })
            
        }catch(e){
            console.log( e)
        }

    }

    return (
        <main>
            <div id="__next">
                <div id="app-root" className="__variable_b02b0a font-sans h-full">
                    <span id="translation-marker" className="translation-marker-etape4">Translation Marker Text</span>
                    <div className="contents" id="offering" noValidate="">
                        <div className="contents">
                            <div className="items-stretch min-h-full w-full">
                                <div className="contents">
                                    <main className="flex flex-col min-h-screen bg-gray-lightest">
                                        <div className="contents">
                                            <div className="relative z-40 md:h-[78px] md:flex-row md:items-stretch md:bg-gradient-to-b md:from-blue-dark-2 md:to-blue-dark-3 flex flex-col bg-blue-dark-3">
                                                <div className="md:static md:w-auto md:justify-end md:bg-gradient-to-b md:from-blue-main md:to-blue-dark md:pl-12 md:pr-8 xl:pl-28 pl-6 py-4 flex items-center bg-blue-dark-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="119" height="32" fill="none">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M22.193 13.468 8.65 0 5.502 3.114l4.603 4.579L0 17.691 13.589 31.2l3.107-3.074-4.648-4.623 10.145-10.036Zm-12.956 6.62a.472.472 0 0 1-.278 0c-.092-.027-.168-.07-.333-.232l-1.83-1.822c-.165-.162-.206-.238-.234-.33a.463.463 0 0 1 0-.276c.028-.09.07-.167.234-.33l5.771-5.716c.164-.163.24-.204.333-.232a.472.472 0 0 1 .278 0c.092.028.168.07.332.233l1.831 1.821c.164.163.206.24.234.33a.462.462 0 0 1 0 .276c-.028.091-.07.167-.235.33l-5.77 5.717c-.165.163-.241.204-.333.232Zm65.198-9.561c-1.589-1.728-3.57-2.606-5.9-2.61-2.244 0-4.467 1.555-5.835 3.091l.004-2.875-4.184-.007-.044 23.56v.307l4.207.007.016-7.37c1.273 1.417 3.285 2.25 5.52 2.253 2.459 0 4.53-.871 6.156-2.588 1.636-1.728 2.468-4.165 2.473-6.954.005-2.848-.807-5.14-2.413-6.814Zm-6.907 1.269c1.429.002 2.634.532 3.586 1.58.985 1.014 1.482 2.346 1.48 3.958-.003 1.625-.492 3.078-1.498 4.138-.958 1.015-2.162 1.53-3.588 1.53-1.406-.003-2.578-.509-3.582-1.543-1.001-1.064-1.486-2.518-1.483-4.144.003-1.612.506-2.942 1.496-3.956.997-1.053 2.167-1.564 3.578-1.564h.011Zm11.451-.154-.017 9.942c-.005 2.143.587 3.673 1.757 4.55.728.545 1.653.82 2.748.82.845 0 2.168-.335 2.168-.335l-.377-3.623s-.967.31-1.435-.022c-.442-.315-.665-.99-.664-2.007l.016-9.318 3.892.007.006-3.46-3.892-.006.008-4.968-4.198-.007-.008 4.968-3.524-.005 3.517 3.463.003.001ZM44.497 2.949H23.784v4.118h8.276l-.031 19.22-.002.379 4.381.008-.022-19.599 8.111-.008V2.95Z"
                                                            fill="#fff"
                                                        ></path>
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M54.22 10.636c-1.718-1.762-4.052-2.728-6.438-2.658-2.419 0-4.552.844-6.34 2.51-1.805 1.68-2.722 4.013-2.727 6.93-.005 2.918.904 5.254 2.703 6.942 1.788 1.677 3.924 2.529 6.342 2.533.094.004.187.004.281.004 2.266 0 4.51-.962 6.157-2.639 1.21-1.232 2.654-3.413 2.66-6.806.005-3.392-1.431-5.579-2.637-6.815m-1.322 6.81c-.003 1.692-.507 3.092-1.5 4.158-.99 1.062-2.217 1.602-3.657 1.602-1.411-.004-2.627-.546-3.616-1.616-.967-1.046-1.457-2.447-1.454-4.165.003-1.717.497-3.116 1.467-4.16.99-1.062 2.205-1.601 3.622-1.601 1.434.003 2.662.546 3.651 1.615.989 1.071 1.49 2.473 1.487 4.165m38.95-2.869c0-1.058.56-3.393 3.655-3.393 1.097 0 1.72.365 2.25.802.508.42.764 1.45.763 2.309v.404l-5.116.793c-4.048.613-6.375 2.779-6.384 5.941-.005 1.637.596 3.047 1.737 4.075 1.128 1.016 2.672 1.556 4.491 1.561 2.293 0 4.016-.823 5.245-2.51.008.718.007 1.44.005 2.112h4.265l.031-12.158c.005-1.982-.646-3.905-1.936-4.96-1.273-1.04-2.935-1.57-5.342-1.577h-.037c-1.836 0-3.784.482-5.098 1.61-1.541 1.322-2.298 3.422-2.298 5.048l3.77-.055-.001-.002Zm1.933 8.837c-1.516-.004-2.494-.858-2.49-2.175.005-1.367.962-2.164 3.017-2.508l4.198-.704v.04c-.008 3.148-1.945 5.346-4.71 5.346h-.014ZM104.804 3.23l-.042 23.307v.103l3.775.007.041-23.307v-.103l-3.774-.007Zm7.418 21.195c0-.807.282-1.495.854-2.062a2.84 2.84 0 0 1 2.07-.856c.813 0 1.506.288 2.079.856.572.568.861 1.255.861 2.062 0 .809-.29 1.488-.861 2.055-.573.568-1.266.848-2.079.848-.805 0-1.498-.28-2.07-.848a2.775 2.775 0 0 1-.854-2.055Zm.483-.008c0 .68.234 1.255.709 1.736a2.379 2.379 0 0 0 1.74.711 2.36 2.36 0 0 0 1.731-.711c.476-.48.718-1.056.718-1.736 0-.679-.241-1.254-.718-1.726a2.348 2.348 0 0 0-1.731-.72 2.35 2.35 0 0 0-1.732.72 2.34 2.34 0 0 0-.717 1.726Zm3.141 1.592-.789-1.383h-.531v1.383h-.483v-3.183h1.305c.644 0 1.031.384 1.031.904 0 .448-.33.776-.781.871l.798 1.408h-.55Zm-1.32-2.759v.968h.749c.419 0 .628-.16.628-.48 0-.328-.209-.488-.628-.488h-.749Z"
                                                            fill="#fff"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div className="w-full flex flex-col px-8 py-4 md:pt-3 md:pb-5 md:pl-8 md:gap-0.5 md:opacity-70 overflow-hidden">
                                                    <div className="flex"><span className="md:leading-3 md:opacity-70 text-base-xs tracking-wider text-white not-italic font-normal ">Trusted by</span></div>
                                                    <div className="AnimatedLogos_animated-logos__6n_sS overflow-hidden flex items-center justify-between gap-4 md:gap-8 h-5 md:h-7 opacity-0 animate-[lazy-fade-in-out_5s_linear_infinite]"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contents">
                                            <div className="relative w-full Grid_variables-background-transparent__vTt2Q bg-[var(--grid-background)] flex flex-col flex-1 mt-0 mb-0 ml-0 mr-0">
                                                <div
                                                    className="relative-grid1 relative grid grid-cols-[var(--grid-template-columns)] lg:grid-cols-[var(--grid-template-columns-large)] xl:grid-cols-[var(--grid-template-columns-extra-large)] tablet-portrait:grid-cols-[var(--grid-template-columns-tablet-portrait)] grid-rows-[var(--grid-template-rows)] lg:grid-rows-[var(--grid-template-rows-large)] tablet-portrait:grid-rows-[var(--grid-template-rows-tablet-portrait)] flex-1 gap-0 rounded-none content-normal pt-0 pb-0 pl-0 pr-0"
                                                >
                                                    <div className="contents">
                                                        <div className="relative w-full Grid_variables-background-transparent__vTt2Q bg-[var(--grid-background)] flex flex-col flex-1 mt-0 mb-0 ml-0 mr-0">
                                                            <div
                                                                className="relative-grid relative grid grid-cols-[var(--grid-template-columns)] grid-rows-[var(--grid-template-rows)] flex-1 gap-0 rounded-none content-start pt-0 pb-0 pl-0 pr-0"
                                                                 
                                                            >
                                                                <div className="contents">
                                                                    <div>
                                                                        <div data-testid="progress-bar" className="bg-gray-lighter-2"><div className="progress-etape4 block h-2 bg-gradient-to-r from-blue-light to-green-main"></div></div>
                                                                    </div>
                                                                </div>
                                                                <div className="contents">
                                                                    <div
                                                                        className="relative-grid3 relative w-full Grid_variables-background-transparent__vTt2Q bg-[var(--grid-background)] 2xl:max-w-[var(--grid-max-width-2x-large)] tablet-portrait:max-w-[var(--grid-max-width-tablet-portrait)] mt-0 mb-0 ml-auto mr-auto xl:mr-0"
                                                                        
                                                                    >
                                                                        <div
                                                                            className="relative-grid relative grid grid-cols-[var(--grid-template-columns)] grid-rows-[var(--grid-template-rows)] gap-0 rounded-none content-start pt-12 md:pt-12 lg:pt-12 xl:pt-16 2xl:pt-24 pb-12 md:pb-12 lg:pb-12 xl:pb-16 2xl:pb-24 pl-6 md:pl-9 lg:pl-11 xl:pl-28 2xl:pl-16 pr-6 md:pr-9 lg:pr-11 xl:pr-16 2xl:pr-16"
                                                                             
                                                                        >
                                                                            <div className="contents">
                                                                                <div className="h-[30px] flex items-center mb-2">
                                                                                    <div className="flex align-center items-center">
                                                                                        <span className="opacity-50 text-base-sm tracking-normal text-gray-dark-2 not-italic font-semibold  text-ellipsis overflow-hidden whitespace-nowrap">PRISE RDV</span>
                                                                                    </div>
                                                                                </div>
                                                                                <form className="contents" id="stepped_callback_request_form-CallTimeStep" noValidate="">
                                                                                    <div>
                                                                                        <h1 className="text-black text-base-lg md:text-base-xl 2xl:text-base-2xl font-semibold text-left normal-case tracking-normal not-italic  mt-0 mb-6 md:mb-8 xl:mb-12">
                                                                                            Choisissez un moment pour vous entretenir avec notre conseiller clientèle.
                                                                                            Nous vous enverrons alors ...... les 24 heures.
                                                                                        </h1>
                                                                                        <div className="flex flex-col gap-4 md:gap-8 pb-4 md:pb-8 border-b border-gray-main mb-4">
                                                                                            <div className="flex flex-col gap-2">
                                                                                                <div className="relative w-full">
                                                                                                    <div className="overflow-hidden flex flex-col size-full">
                                                                                                        <div className="flex relative" data-testid="time-zone-select">
                                                                                                            <div
                                                                                                                className="relative overflow-hidden flex items-stretch justify-stretch w-full [&amp;_[data-raw-input]]:grow [&amp;_[data-raw-input]]:-my-px [&amp;_[data-raw-input]]:border-transparent border border-solid rounded-[3px] border-gray-dark focus-within:border-blue-main bg-white border-gray-light-2 cursor-pointer"
                                                                                                                data-validation-target="true"
                                                                                                                data-input-wrapper="true"
                                                                                                            >
                                                                                                                <div className="relative flex size-full">
                                                                                                                    <div
                                                                                                                        className="absolute z-[1] top-0 left-0 w-full duration-150 ease-in-out transition-[background] h-5 flex justify-start pointer-events-none px-4 [&amp;_[data-raw-input]]:-mx-4 [&amp;_[data-raw-input]]:px-4 [&amp;_[data-raw-input]]:border-t-[20px] [&amp;_[data-raw-input]]:pb-1.5 pr-8"
                                                                                                                    >
                                                                                                                        <div className="absolute duration-150 ease-in-out transition-translate transition-scale transform-gpu origin-top-left translate-y-[4px] scale-[75%]">
                                                                                                                            <div className="text-base-md tracking-normal text-gray-dark not-italic font-normal whitespace-nowrap">Your time zone</div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div
                                                                                                                        className="InputWrapper_input-wrapper__SNjoC relative flex items-center size-full px-4 [&amp;_[data-raw-input]]:-mx-4 [&amp;_[data-raw-input]]:px-4 [&amp;_[data-raw-input]]:border-t-[20px] [&amp;_[data-raw-input]]:pb-1.5 pr-8"
                                                                                                                    >
                                                                                                                        <input
                                                                                                                            className="input-etape3 w-full h-12 bg-transparent text-gray-dark text-base-md leading-4 align-middle appearance-none focus:outline-none placeholder:text-gray-main-2 placeholder:font-light placeholder:opacity-1"
                                                                                                                            type="auto"
                                                                                                                            placeholder="Select a time zone" 
                                                                                                                            autoComplete="none"
                                                                                                                            data-raw-input="true"
                                                                                                                            data-testid="time-zone-select-input"
                                                                                                                            data-1p-ignore="true"
                                                                                                                            data-lpignore="true"
                                                                                                                            value="(UTC-04:00) America - Toronto" 
                                                                                                                        />
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="absolute top-1/2 right-4 -translate-y-1/2" data-testid="select-chevron-wrapper">
                                                                                                                <svg viewBox="0 0 13 7" xmlns="http://www.w3.org/2000/svg" className="relative flex justify-center shrink-0 fill-current size-2" data-testid="select-chevron-down">
                                                                                                                    <path
                                                                                                                        d="M6.5 7a.429.429 0 0 1-.3-.12L.13 1.275A.37.37 0 0 1 0 1C0 .894.044.8.13.72l.652-.6a.434.434 0 0 1 .6 0L6.5 4.848 11.62.12a.43.43 0 0 1 .598 0l.65.602c.088.08.132.173.132.277a.372.372 0 0 1-.13.276L6.8 6.88a.429.429 0 0 1-.3.12z"
                                                                                                                        fill="#C4C6CA"
                                                                                                                        fillRule="evenodd"
                                                                                                                    ></path>
                                                                                                                </svg>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="flex flex-col gap-2">
                                                                                                <span className="text-gray-dark text-base-sm font-normal text-left normal-case tracking-normal not-italic  mt-0 mb-0">Pick a day for our call:</span>
                                                                                                <div className="flex flex-wrap gap-y-2 gap-x-4 md:gap-x-2">
                                                                                                    <button
                                                                                                        className="flex flex-col items-center justify-center w-20 rounded border border-gray-light cursor-pointer hover:bg-gradient-to-b hover:from-blue-main hover:to-blue-dark focus:bg-gradient-to-b focus:from-blue-main focus:to-blue-dark group h-[62px] bg-gradient-to-b from-blue-main to-blue-dark active"
                                                                                                        data-testid="day-slot-2024-05-28"
                                                                                                        type="button"
                                                                                                    >
                                                                                                        <span className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-base-md tracking-normal text-gray-dark-2 not-italic font-normal ">Today</span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        className="flex flex-col items-center justify-center w-20 rounded border border-gray-light cursor-pointer hover:bg-gradient-to-b hover:from-blue-main hover:to-blue-dark focus:bg-gradient-to-b focus:from-blue-main focus:to-blue-dark group h-[62px]"
                                                                                                        data-testid="day-slot-2024-05-29"
                                                                                                        type="button"
                                                                                                    >
                                                                                                        <span className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-base-md tracking-normal text-gray-dark-2 not-italic font-normal ">29</span>
                                                                                                        <span
                                                                                                            className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-gray-dark-2 text-base-sm font-normal text-left normal-case tracking-normal not-italic  mt-0 mb-0"
                                                                                                        >
                                                                                                            May
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        className="flex flex-col items-center justify-center w-20 rounded border border-gray-light cursor-pointer hover:bg-gradient-to-b hover:from-blue-main hover:to-blue-dark focus:bg-gradient-to-b focus:from-blue-main focus:to-blue-dark group h-[62px]"
                                                                                                        data-testid="day-slot-2024-05-30"
                                                                                                        type="button"
                                                                                                    >
                                                                                                        <span className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-base-md tracking-normal text-gray-dark-2 not-italic font-normal ">30</span>
                                                                                                        <span
                                                                                                            className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-gray-dark-2 text-base-sm font-normal text-left normal-case tracking-normal not-italic  mt-0 mb-0"
                                                                                                        >
                                                                                                            May
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        className="flex flex-col items-center justify-center w-20 rounded border border-gray-light cursor-pointer hover:bg-gradient-to-b hover:from-blue-main hover:to-blue-dark focus:bg-gradient-to-b focus:from-blue-main focus:to-blue-dark group h-[62px]"
                                                                                                        data-testid="day-slot-2024-05-31"
                                                                                                        type="button"
                                                                                                    >
                                                                                                        <span className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-base-md tracking-normal text-gray-dark-2 not-italic font-normal ">31</span>
                                                                                                        <span
                                                                                                            className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-gray-dark-2 text-base-sm font-normal text-left normal-case tracking-normal not-italic  mt-0 mb-0"
                                                                                                        >
                                                                                                            May
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        className="flex flex-col items-center justify-center w-20 rounded border border-gray-light cursor-pointer hover:bg-gradient-to-b hover:from-blue-main hover:to-blue-dark focus:bg-gradient-to-b focus:from-blue-main focus:to-blue-dark group h-[62px]"
                                                                                                        data-testid="day-slot-2024-06-03"
                                                                                                        type="button"
                                                                                                    >
                                                                                                        <span className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-base-md tracking-normal text-gray-dark-2 not-italic font-normal ">03</span>
                                                                                                        <span
                                                                                                            className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-gray-dark-2 text-base-sm font-normal text-left normal-case tracking-normal not-italic  mt-0 mb-0"
                                                                                                        >
                                                                                                            Jun
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        className="flex flex-col items-center justify-center w-20 rounded border border-gray-light cursor-pointer hover:bg-gradient-to-b hover:from-blue-main hover:to-blue-dark focus:bg-gradient-to-b focus:from-blue-main focus:to-blue-dark group h-[62px]"
                                                                                                        data-testid="day-slot-2024-06-04"
                                                                                                        type="button"
                                                                                                    >
                                                                                                        <span className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-base-md tracking-normal text-gray-dark-2 not-italic font-normal ">04</span>
                                                                                                        <span
                                                                                                            className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-gray-dark-2 text-base-sm font-normal text-left normal-case tracking-normal not-italic  mt-0 mb-0"
                                                                                                        >
                                                                                                            Jun
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        className="flex flex-col items-center justify-center w-20 rounded border border-gray-light cursor-pointer hover:bg-gradient-to-b hover:from-blue-main hover:to-blue-dark focus:bg-gradient-to-b focus:from-blue-main focus:to-blue-dark group h-[62px]"
                                                                                                        data-testid="day-slot-2024-06-05"
                                                                                                        type="button"
                                                                                                    >
                                                                                                        <span className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-base-md tracking-normal text-gray-dark-2 not-italic font-normal ">05</span>
                                                                                                        <span
                                                                                                            className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-gray-dark-2 text-base-sm font-normal text-left normal-case tracking-normal not-italic  mt-0 mb-0"
                                                                                                        >
                                                                                                            Jun
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        className="flex flex-col items-center justify-center w-20 rounded border border-gray-light cursor-pointer hover:bg-gradient-to-b hover:from-blue-main hover:to-blue-dark focus:bg-gradient-to-b focus:from-blue-main focus:to-blue-dark group h-[62px]"
                                                                                                        data-testid="day-slot-2024-06-06"
                                                                                                        type="button"
                                                                                                    >
                                                                                                        <span className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-base-md tracking-normal text-gray-dark-2 not-italic font-normal ">06</span>
                                                                                                        <span
                                                                                                            className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-gray-dark-2 text-base-sm font-normal text-left normal-case tracking-normal not-italic  mt-0 mb-0"
                                                                                                        >
                                                                                                            Jun
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        className="flex flex-col items-center justify-center w-20 rounded border border-gray-light cursor-pointer hover:bg-gradient-to-b hover:from-blue-main hover:to-blue-dark focus:bg-gradient-to-b focus:from-blue-main focus:to-blue-dark group h-[62px]"
                                                                                                        data-testid="day-slot-2024-06-07"
                                                                                                        type="button"
                                                                                                    >
                                                                                                        <span className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-base-md tracking-normal text-gray-dark-2 not-italic font-normal ">07</span>
                                                                                                        <span
                                                                                                            className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-gray-dark-2 text-base-sm font-normal text-left normal-case tracking-normal not-italic  mt-0 mb-0"
                                                                                                        >
                                                                                                            Jun
                                                                                                        </span>
                                                                                                    </button>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="flex flex-col gap-2">
                                                                                                <span className="text-gray-dark text-base-sm font-normal text-left normal-case tracking-normal not-italic  mt-0 mb-0">Pick a time for our call:</span>
                                                                                                <div className="flex flex-wrap gap-y-2 gap-x-4 md:gap-x-2">
                                                                                                    <button
                                                                                                        className="flex flex-col items-center justify-center w-20 rounded border border-gray-light cursor-pointer hover:bg-gradient-to-b hover:from-blue-main hover:to-blue-dark focus:bg-gradient-to-b focus:from-blue-main focus:to-blue-dark group h-[36px]"
                                                                                                        data-testid="hour-slot-07:00 AM"
                                                                                                        type="button"
                                                                                                    >
                                                                                                        <span
                                                                                                            className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-gray-dark-2 text-base-sm font-normal text-left normal-case tracking-normal not-italic  mt-0 mb-0"
                                                                                                        >
                                                                                                            07:00 AM
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        className="flex flex-col items-center justify-center w-20 rounded border border-gray-light cursor-pointer hover:bg-gradient-to-b hover:from-blue-main hover:to-blue-dark focus:bg-gradient-to-b focus:from-blue-main focus:to-blue-dark group h-[36px]"
                                                                                                        data-testid="hour-slot-08:00 AM"
                                                                                                        type="button"
                                                                                                    >
                                                                                                        <span
                                                                                                            className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-gray-dark-2 text-base-sm font-normal text-left normal-case tracking-normal not-italic  mt-0 mb-0"
                                                                                                        >
                                                                                                            08:00 AM
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        className="flex flex-col items-center justify-center w-20 rounded border border-gray-light cursor-pointer hover:bg-gradient-to-b hover:from-blue-main hover:to-blue-dark focus:bg-gradient-to-b focus:from-blue-main focus:to-blue-dark group h-[36px]"
                                                                                                        data-testid="hour-slot-10:00 AM"
                                                                                                        type="button"
                                                                                                    >
                                                                                                        <span
                                                                                                            className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-gray-dark-2 text-base-sm font-normal text-left normal-case tracking-normal not-italic  mt-0 mb-0"
                                                                                                        >
                                                                                                            10:00 AM
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        className="flex flex-col items-center justify-center w-20 rounded border border-gray-light cursor-pointer hover:bg-gradient-to-b hover:from-blue-main hover:to-blue-dark focus:bg-gradient-to-b focus:from-blue-main focus:to-blue-dark group h-[36px]"
                                                                                                        data-testid="hour-slot-11:00 AM"
                                                                                                        type="button"
                                                                                                    >
                                                                                                        <span
                                                                                                            className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-gray-dark-2 text-base-sm font-normal text-left normal-case tracking-normal not-italic  mt-0 mb-0"
                                                                                                        >
                                                                                                            11:00 AM
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        className="flex flex-col items-center justify-center w-20 rounded border border-gray-light cursor-pointer hover:bg-gradient-to-b hover:from-blue-main hover:to-blue-dark focus:bg-gradient-to-b focus:from-blue-main focus:to-blue-dark group h-[36px]"
                                                                                                        data-testid="hour-slot-12:00 PM"
                                                                                                        type="button"
                                                                                                    >
                                                                                                        <span
                                                                                                            className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-gray-dark-2 text-base-sm font-normal text-left normal-case tracking-normal not-italic  mt-0 mb-0"
                                                                                                        >
                                                                                                            12:00 PM
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        className="flex flex-col items-center justify-center w-20 rounded border border-gray-light cursor-pointer hover:bg-gradient-to-b hover:from-blue-main hover:to-blue-dark focus:bg-gradient-to-b focus:from-blue-main focus:to-blue-dark group h-[36px]"
                                                                                                        data-testid="hour-slot-01:00 PM"
                                                                                                        type="button"
                                                                                                    >
                                                                                                        <span
                                                                                                            className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-gray-dark-2 text-base-sm font-normal text-left normal-case tracking-normal not-italic  mt-0 mb-0"
                                                                                                        >
                                                                                                            01:00 PM
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        className="flex flex-col items-center justify-center w-20 rounded border border-gray-light cursor-pointer hover:bg-gradient-to-b hover:from-blue-main hover:to-blue-dark focus:bg-gradient-to-b focus:from-blue-main focus:to-blue-dark group h-[36px]"
                                                                                                        data-testid="hour-slot-02:00 PM"
                                                                                                        type="button"
                                                                                                    >
                                                                                                        <span
                                                                                                            className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-gray-dark-2 text-base-sm font-normal text-left normal-case tracking-normal not-italic  mt-0 mb-0"
                                                                                                        >
                                                                                                            02:00 PM
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        className="flex flex-col items-center justify-center w-20 rounded border border-gray-light cursor-pointer hover:bg-gradient-to-b hover:from-blue-main hover:to-blue-dark focus:bg-gradient-to-b focus:from-blue-main focus:to-blue-dark group h-[36px]"
                                                                                                        data-testid="hour-slot-03:00 PM"
                                                                                                        type="button"
                                                                                                    >
                                                                                                        <span
                                                                                                            className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-gray-dark-2 text-base-sm font-normal text-left normal-case tracking-normal not-italic  mt-0 mb-0"
                                                                                                        >
                                                                                                            03:00 PM
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        className="flex flex-col items-center justify-center w-20 rounded border border-gray-light cursor-pointer hover:bg-gradient-to-b hover:from-blue-main hover:to-blue-dark focus:bg-gradient-to-b focus:from-blue-main focus:to-blue-dark group h-[36px]"
                                                                                                        data-testid="hour-slot-04:00 PM"
                                                                                                        type="button"
                                                                                                    >
                                                                                                        <span
                                                                                                            className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-gray-dark-2 text-base-sm font-normal text-left normal-case tracking-normal not-italic  mt-0 mb-0"
                                                                                                        >
                                                                                                            04:00 PM
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        className="flex flex-col items-center justify-center w-20 rounded border border-gray-light cursor-pointer hover:bg-gradient-to-b hover:from-blue-main hover:to-blue-dark focus:bg-gradient-to-b focus:from-blue-main focus:to-blue-dark group h-[36px]"
                                                                                                        data-testid="hour-slot-05:00 PM"
                                                                                                        type="button"
                                                                                                    >
                                                                                                        <span
                                                                                                            className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-gray-dark-2 text-base-sm font-normal text-left normal-case tracking-normal not-italic  mt-0 mb-0"
                                                                                                        >
                                                                                                            05:00 PM
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        className="flex flex-col items-center justify-center w-20 rounded border border-gray-light cursor-pointer hover:bg-gradient-to-b hover:from-blue-main hover:to-blue-dark focus:bg-gradient-to-b focus:from-blue-main focus:to-blue-dark group h-[36px]"
                                                                                                        data-testid="hour-slot-07:00 PM"
                                                                                                        type="button"
                                                                                                    >
                                                                                                        <span
                                                                                                            className="text-black group-hover:text-white group-focus:text-white group:text-white group-[.active]:text-white text-gray-dark-2 text-base-sm font-normal text-left normal-case tracking-normal not-italic  mt-0 mb-0"
                                                                                                        >
                                                                                                            07:00 PM
                                                                                                        </span>
                                                                                                    </button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <button
                                                                                            className="inline-block relative overflow-hidden shrink-0 border border-solid rounded-[3px] max-w-full leading-none text-ellipsis text-center no-underline select-none align-middle cursor-pointer whitespace-nowrap tracking-[0.3px] font-normal outline-[3px] outline-offset-2 outline-blue-main/50 enabled:active:shadow-[0_0_1px_1px] enabled:active:shadow-blue-light disabled:cursor-default disabled:pointer-events-none transition-[background-color,_border-color,_color] duration-300 bg-green-main border-transparent text-white [&amp;_svg]:fill-white disabled:bg-gray-light disabled:text-gray-main-2 [&amp;_svg]:disabled:fill-gray-main-2 2xs:w-full h-12 text-base-sm py-3 px-4 sm:px-6"
                                                                                            disabled=""
                                                                                            onClick={(e)=> handleShedule(e)}
                                                                                            data-testid="schedule-the-call-button"
                                                                                        >
                                                                                            Schedule the Call
                                                                                        </button>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="contents">
                                                        <div className="relative w-full Grid_variables-background-blue-gradient__p7e6r bg-gradient-to-br from-[var(--grid-background)] to-[var(--grid-background-to)] flex flex-col flex-1 mt-0 mb-0 ml-0 mr-0">
                                                            <div className="absolute top-0 bottom-0 right-0 z-0 w-full overflow-hidden opacity-10 pointer-events-none [&amp;>_*]:w-full [&amp;>_*]:h-full [&amp;>_*]:scale-[3] [&amp;>_*]:origin-[50%_30%]">
                                                                <svg viewBox="0 0 391 549" xmlns="http://www.w3.org/2000/svg"  className="svg-viewBox-etape4">
                                                                    <path
                                                                        d="M1123 511.26 337.668-268 155.084-87.79l266.929 264.597L-164 755.318 624.071 1537l180.139-177.79-269.475-267.5L1123 511.26ZM371.622 894.35a28.253 28.253 0 0 1-16.047 0 44.043 44.043 0 0 1-19.57-13.467L229.742 775.47a42.246 42.246 0 0 1-13.503-19.377 26.205 26.205 0 0 1 0-15.986 43.315 43.315 0 0 1 13.601-19.378l334.641-330.771a43.371 43.371 0 0 1 19.57-13.371 26.676 26.676 0 0 1 16.047 0 44.045 44.045 0 0 1 19.57 13.468l106.263 105.316a42.926 42.926 0 0 1 13.504 19.377 25.925 25.925 0 0 1 0 15.889 43.611 43.611 0 0 1-13.602 19.378L391.094 880.786a44.03 44.03 0 0 1-19.472 13.564Z"
                                                                        transform="translate(49.898 82.069) scale(.30355)"
                                                                        className="svg-path-etape4"
                                                                    ></path>
                                                                </svg>
                                                            </div>
                                                            <div
                                                                className="relative-grid relative grid grid-cols-[var(--grid-template-columns)] grid-rows-[var(--grid-template-rows)] flex-1 gap-0 rounded-none content-start pt-12 md:pt-12 lg:pt-12 xl:pt-16 2xl:pt-24 pb-12 md:pb-12 lg:pb-12 xl:pb-16 2xl:pb-24 pl-6 md:pl-9 lg:pl-11 xl:pl-16 2xl:pl-16 pr-6 md:pr-9 lg:pr-11 xl:pr-28 2xl:pr-16"
                                                            
                                                            >
                                                                <div className="contents">
                                                                    <div className="relative-grid1-6 relative w-full Grid_variables-background-transparent__vTt2Q bg-[var(--grid-background)] xl:max-w-[var(--grid-max-width-extra-large)] mt-0 mb-0 ml-0 mr-0">
                                                                        <div
                                                                            className="relative-grid relative grid grid-cols-[var(--grid-template-columns)] grid-rows-[var(--grid-template-rows)] gap-0 rounded-none content-normal pt-0 pb-0 pl-0 pr-0"
                                                                             
                                                                        >
                                                                            <div className="contents">
                                                                                <div className="contents">
                                                                                    <div className="relative w-full Grid_variables-background-transparent__vTt2Q bg-[var(--grid-background)] mt-0 mb-0 ml-0 mr-0">
                                                                                        <div
                                                                                            className="relative-grid relative grid grid-cols-[var(--grid-template-columns)] grid-rows-[var(--grid-template-rows)] gap-0 rounded-none content-normal pt-0 pb-6 md:pb-8 xl:pb-12 tablet-portrait:pb-8 pl-0 pr-0"
                                                                                             
                                                                                        >
                                                                                            <div className="contents">
                                                                                                <div
                                                                                                    className="text-white text-base-md md:text-base-xl 2xl:text-base-2xl tablet-portrait:text-base-xl font-semibold text-left normal-case tracking-normal not-italic  mt-0 mb-4"
                                                                                                >
                                                                                                    Au cours de cet appel, nous discuterons :
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="contents [&amp;>*:last-child]:mb-1">
                                                                                                <div className="relative flex items-center">
                                                                                                    <div className="w-full h-px bg-blue-dark"></div>
                                                                                                    <div className="w-full h-px bg-blue-dark"></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="contents">
                                                                                    <div className="flex flex-col gap-4 md:gap-12">
                                                                                        <div className="flex justify items-center gap-5">
                                                                                            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative flex justify-center shrink-0 fill-none size-8 2xl:w-12 2xl:h-12 relative">
                                                                                                <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#25A9EF"></rect>
                                                                                                <path d="m13 20.2 9.333-9.333.472.471-9.333 9.334-.472.471-.471-.471-3.334-3.334.472-.471z" fill="#25A9EF"></path>
                                                                                            </svg>
                                                                                            <h1
                                                                                                className="text-white text-base-md md:text-base-lg 2xl:text-base-xl tablet-portrait:text-base-lg font-semibold text-left normal-case tracking-normal not-italic  mt-0 mb-0"
                                                                                            >
                                                                                                Your specific project and goals
                                                                                            </h1>
                                                                                        </div>
                                                                                        <div className="flex justify items-center gap-5">
                                                                                            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative flex justify-center shrink-0 fill-none size-8 2xl:w-12 2xl:h-12 relative">
                                                                                                <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#25A9EF"></rect>
                                                                                                <path d="m13 20.2 9.333-9.333.472.471-9.333 9.334-.472.471-.471-.471-3.334-3.334.472-.471z" fill="#25A9EF"></path>
                                                                                            </svg>
                                                                                            <h1
                                                                                                className="text-white text-base-md md:text-base-lg 2xl:text-base-xl tablet-portrait:text-base-lg font-semibold text-left normal-case tracking-normal not-italic  mt-0 mb-0"
                                                                                            >
                                                                                                Your talent preferences(e.g. skills, rate, time zone)
                                                                                            </h1>
                                                                                        </div>
                                                                                        <div className="flex justify items-center gap-5">
                                                                                            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative flex justify-center shrink-0 fill-none size-8 2xl:w-12 2xl:h-12 relative">
                                                                                                <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#25A9EF"></rect>
                                                                                                <path d="m13 20.2 9.333-9.333.472.471-9.333 9.334-.472.471-.471-.471-3.334-3.334.472-.471z" fill="#25A9EF"></path>
                                                                                            </svg>
                                                                                            <h1
                                                                                                className="text-white text-base-md md:text-base-lg 2xl:text-base-xl tablet-portrait:text-base-lg font-semibold text-left normal-case tracking-normal not-italic  mt-0 mb-0"
                                                                                            >
                                                                                                Your no-risk trial offer
                                                                                            </h1>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </main>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
