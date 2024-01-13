export default function Square({ value, clickHandler }) {
    return (
        <button
            className={`h-20 w-20 rounded-lg border border-black bg-slate-600 text-3xl font-extrabold ${
                value === 'X' ? 'text-red-600' : 'text-yellow-300'
            }`}
            type="button"
            onClick={clickHandler}
        >
            {value}
        </button>
    );
}
