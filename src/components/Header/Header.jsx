import img from '../../assets/image/logo.png';

const Header = () => {
    return (
        <div className='justify-between flex gap-x-6 items-center mx-4 p-4'>
            <img className="w-32" src={img} alt="" />
            <div className='flex  text-2xl gap-6'>
            <p>Home</p>
            <p>Fixture</p>
            <p>Teams</p>
            <p>schedule</p>
            <button>Coin</button>
            </div>
        </div>

    );
};

export default Header;