'use client';

type BotaoProps = {
    texto: string;
    aoClicar?: () => void
};



export default function Button({ texto, aoClicar}: BotaoProps) {

    return (
        <button
            onClick = {aoClicar}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
            {texto}
        </button>
    )

}
