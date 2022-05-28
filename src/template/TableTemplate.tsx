type TableTemplateProps = {
    children: React.ReactNode;
};

const TableTemplate = ({ children }: TableTemplateProps) => {
    return (
        <div className="grid grid-rows-3 grid-flow-col gap-2">
            {children}
        </div>
    );
};

export default TableTemplate;