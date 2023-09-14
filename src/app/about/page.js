import Founders from "../components/Founders";
import Vision from "../components/Vision";

export default function Page() {
    return (
        <div className="flex flex-col bg-slate-100 text-zinc-800">
            <h1 className="font-bold text-center mt-5 py-10 text-5xl">
                About Tiqah Fondation
            </h1>
            <hr className="w-2/5 border-4 border-[--tiqah-lightBlue] self-center rounded-full" />
            <Vision />
            <Founders />
        </div>
    );
} 