type TableTemplateProps = {
    children: React.ReactNode;
};

const TableTemplate = ({ children }: TableTemplateProps) => {
    return (
        <div className="grid grid-rows-3 grid-flow-col gap-2 place-content-center">
            {children}
        </div>
    );
};

export default TableTemplate;