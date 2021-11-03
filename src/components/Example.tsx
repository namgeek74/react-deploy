interface ExampleProps {
    title: string;
    name: string;
}

export default function Example({ title, name }: ExampleProps) {
    return (
        <div>
            <h4>{title}</h4>
            <p>This is page of {name}</p>
        </div>
    );
}