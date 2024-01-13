export default function History({ history, jumpTo }) {
    const content = history?.map((item, move) => {
        return (
            <li
                // eslint-disable-next-line react/no-array-index-key
                key={move}
                className="mb-1 rounded-lg border bg-gray-100 p-1 text-xl sm:text-base"
            >
                <button type="button" onClick={() => jumpTo(move)}>
                    Go to move {move ? `#${move}` : 'start'}
                </button>
            </li>
        );
    });

    return <ul className="list-inside list-decimal align-top">{content}</ul>;
}
