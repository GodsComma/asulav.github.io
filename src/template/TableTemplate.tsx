type TableTemplateProps = {
    children: React.ReactNode;
};

const TableTemplate = ({ children }: TableTemplateProps) => {
    return (
        <div className="flex flex-row flex-wrap duration-500">
            {children}
        </div>
    );
};

export default TableTemplate;