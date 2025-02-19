import logo from'../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto mt-6 mb-4' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='text-xl my-2'>{moment().format("dddd, MMMM DD, YYYY")}</p>
        </div>
    );
};

export default Header;