interface Props {
    readonly text: string;
    readonly type?: "button" | "submit" | "reset";
}

export default function Button({ text, type }: Props) {
    return (
        <button type={type} className="w-full">
            <p className="mt-2.5 text-white bg-[#DA933C] transition duration-300 ease-in-out hover:bg-[#C4802D] px-4 py-2 font-semibold rounded-lg cursor-pointer">{text}</p>
        </button>
    );
}

// interface Props {
//     readonly text: string;
//     readonly type?: "button" | "submit" | "reset";
//     readonly onClick?: () => void;
// }

// export default function Button({ text, type = "button", onClick }: Props) {
//     return (
//         <button
//             type={type}
//             onClick={onClick}
//             className="w-full mt-2.5 text-white bg-[#DA933C] transition duration-300 ease-in-out hover:bg-[#C4802D] px-4 py-2 font-semibold rounded-lg cursor-pointer">
//             {text}
//         </button>
//     );
// }