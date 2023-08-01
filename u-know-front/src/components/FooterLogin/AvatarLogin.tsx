import { FaUserCircle } from 'react-icons/fa';

const AvatarWithArrow = () => {
    return (
        <div>
            <FaUserCircle size={35} />
            <div style={{ marginLeft: '10px', display: 'inline-block'}}>
                <span style={{ marginLeft: '5px'}}>Iniciar Sesión</span>
            </div>
        </div>
    );
};

export default AvatarWithArrow;
