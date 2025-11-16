import Tab from "./tab";

export default function Box () {
    return (
        <>
        <div className="flex flex-col rounded-xl bg-white mt-10 max-w-5xl mx-auto shadow-md">
            <div className="sticky top-0 z-10"><Tab/></div>
        </div>
        </>
    )
}