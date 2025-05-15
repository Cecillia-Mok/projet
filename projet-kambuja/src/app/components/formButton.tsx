interface Children {
    readonly children: string;
}

export default function FormButton(children: Children) {
    return (
        <button type="submit" className="w-full">
            <p className="mt-2.5 text-white bg-[#DA933C] transition duration-300 ease-in-out hover:bg-[#C4802D] px-4 py-2 font-semibold rounded-lg cursor-pointer">{children.children}</p>
        </button>
    );
}