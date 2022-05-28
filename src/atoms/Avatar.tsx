
type AvatarProps = {
    name: string;
};

const Avatar = ({ name }: AvatarProps ) => (
    <div>{ name }</div>
);

export default Avatar;